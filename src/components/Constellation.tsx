import { useEffect, useRef } from 'react'

interface Star { x: number; y: number; vx: number; vy: number; r: number; t: number }

export default function Constellation() {
    const ref = useRef<HTMLCanvasElement>(null)
    const mouse = useRef({ x: -9999, y: -9999 })
    const stars = useRef<Star[]>([])
    const raf = useRef<number>(0)

    useEffect(() => {
        const canvas = ref.current!
        const ctx = canvas.getContext('2d')!
        let W = 0, H = 0

        function setup() {
            const rect = canvas.getBoundingClientRect()
            canvas.width = rect.width * devicePixelRatio
            canvas.height = rect.height * devicePixelRatio
            W = rect.width; H = rect.height
            stars.current = Array.from({ length: 60 }, () => ({
                x: Math.random() * W, y: Math.random() * H,
                vx: (Math.random() - 0.5) * 0.24, vy: (Math.random() - 0.5) * 0.24,
                r: Math.random() * 1.4 + 0.7, t: Math.random() * Math.PI * 2,
            }))
        }

        function frame() {
            ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0)
            ctx.clearRect(0, 0, W, H)
            const dark = document.documentElement.getAttribute('data-theme') === 'dark'
            const dotC = dark ? '210,210,210' : '40,40,40'
            const lineC = dark ? '190,190,190' : '30,30,30'
            const LINK = 120, MLNK = 150
            const mx = mouse.current.x, my = mouse.current.y

            for (const s of stars.current) {
                s.x += s.vx; s.y += s.vy; s.t += 0.016
                if (s.x < 0) s.x = W; if (s.x > W) s.x = 0
                if (s.y < 0) s.y = H; if (s.y > H) s.y = 0
            }

            for (let i = 0; i < stars.current.length; i++) {
                for (let j = i + 1; j < stars.current.length; j++) {
                    const dx = stars.current[i].x - stars.current[j].x
                    const dy = stars.current[i].y - stars.current[j].y
                    const d = Math.sqrt(dx * dx + dy * dy)
                    if (d < LINK) {
                        ctx.beginPath()
                        ctx.strokeStyle = `rgba(${lineC},${(1 - d / LINK) * 0.4})`
                        ctx.lineWidth = 0.5
                        ctx.moveTo(stars.current[i].x, stars.current[i].y)
                        ctx.lineTo(stars.current[j].x, stars.current[j].y)
                        ctx.stroke()
                    }
                }
                const dx = stars.current[i].x - mx, dy = stars.current[i].y - my
                const d = Math.sqrt(dx * dx + dy * dy)
                if (d < MLNK) {
                    ctx.beginPath()
                    ctx.strokeStyle = `rgba(${lineC},${(1 - d / MLNK) * 0.6})`
                    ctx.lineWidth = 0.7
                    ctx.moveTo(stars.current[i].x, stars.current[i].y)
                    ctx.lineTo(mx, my)
                    ctx.stroke()
                }
            }

            for (const s of stars.current) {
                const p = 0.72 + 0.28 * Math.sin(s.t)
                ctx.beginPath()
                ctx.arc(s.x, s.y, s.r * p, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${dotC},${0.5 + 0.38 * p})`
                ctx.fill()
            }
            if (mx > 0 && mx < W) {
                ctx.beginPath()
                ctx.arc(mx, my, 2, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${dotC},0.5)`
                ctx.fill()
            }
            raf.current = requestAnimationFrame(frame)
        }

        const onMove = (e: MouseEvent) => {
            const r = canvas.getBoundingClientRect()
            mouse.current = { x: e.clientX - r.left, y: e.clientY - r.top }
        }
        const onLeave = () => { mouse.current = { x: -9999, y: -9999 } }
        const onResize = () => setup()

        canvas.addEventListener('mousemove', onMove)
        canvas.addEventListener('mouseleave', onLeave)
        window.addEventListener('resize', onResize)
        setup()
        frame()

        return () => {
            cancelAnimationFrame(raf.current)
            canvas.removeEventListener('mousemove', onMove)
            canvas.removeEventListener('mouseleave', onLeave)
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return (
        <canvas
            ref={ref}
            style={{ position: 'absolute', left: 0, top: 0, width: '62%', height: '100%', display: 'block' }}
        />
    )
}
