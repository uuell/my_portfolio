import { useEffect, useRef } from 'react'

interface Node {
  x: number; y: number
  vx: number; vy: number
  r: number; t: number
  firing: number
}

export default function NeuralNetwork() {
  const ref = useRef<HTMLCanvasElement>(null)
  const raf = useRef<number>(0)

  useEffect(() => {
    const canvas = ref.current!
    const ctx = canvas.getContext('2d')!
    let W = 0, H = 0
    const NODES = 38
    const LINK_DIST = 160
    let nodes: Node[] = []

    function setup() {
      const rect = canvas.getBoundingClientRect()
      canvas.width  = rect.width  * devicePixelRatio
      canvas.height = rect.height * devicePixelRatio
      W = rect.width; H = rect.height
      nodes = Array.from({ length: NODES }, () => ({
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        r: Math.random() * 2.5 + 1.5,
        t: Math.random() * Math.PI * 2,
        firing: 0,
      }))
    }

    // randomly fire a node every ~1.5s
    let lastFire = 0
    function maybefire(now: number) {
      if (now - lastFire > 1200 + Math.random() * 800) {
        const idx = Math.floor(Math.random() * nodes.length)
        nodes[idx].firing = 1.0
        lastFire = now
      }
    }

    function frame(now: number) {
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
      ctx.clearRect(0, 0, W, H)

      const dark = document.documentElement.getAttribute('data-theme') === 'dark'
      const nodeColor = dark ? '180,180,210' : '60,60,100'
      const lineColor = dark ? '150,150,200' : '80,80,140'
      const fireColor = dark ? '200,160,255' : '120,80,200'

      maybefire(now)

      for (const n of nodes) {
        n.x += n.vx; n.y += n.vy; n.t += 0.014
        if (n.x < 0) n.x = W; if (n.x > W) n.x = 0
        if (n.y < 0) n.y = H; if (n.y > H) n.y = 0
        n.firing = Math.max(0, n.firing - 0.018)
      }

      // draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const d  = Math.sqrt(dx*dx + dy*dy)
          if (d < LINK_DIST) {
            const base = (1 - d / LINK_DIST) * 0.35
            const fire = Math.max(nodes[i].firing, nodes[j].firing)
            const alpha = base + fire * 0.5
            const color = fire > 0.05 ? fireColor : lineColor
            ctx.beginPath()
            ctx.strokeStyle = `rgba(${color},${alpha})`
            ctx.lineWidth = fire > 0.05 ? 0.9 : 0.5
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // draw nodes
      for (const n of nodes) {
        const pulse = 0.75 + 0.25 * Math.sin(n.t)
        const r = n.r * pulse + n.firing * 3
        const alpha = 0.45 + 0.35 * pulse + n.firing * 0.4
        const color = n.firing > 0.05 ? fireColor : nodeColor

        // glow on firing
        if (n.firing > 0.05) {
          ctx.beginPath()
          const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 5)
          grd.addColorStop(0, `rgba(${fireColor},${n.firing * 0.3})`)
          grd.addColorStop(1, `rgba(${fireColor},0)`)
          ctx.fillStyle = grd
          ctx.arc(n.x, n.y, r * 5, 0, Math.PI * 2)
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${color},${alpha})`
        ctx.fill()
      }

      raf.current = requestAnimationFrame(frame)
    }

    const onResize = () => setup()
    window.addEventListener('resize', onResize)
    setup()
    raf.current = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf.current)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={ref}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none',
      }}
    />
  )
}
