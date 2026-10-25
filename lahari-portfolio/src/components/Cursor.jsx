import { useEffect, useRef, useState } from 'react'

// A custom cursor: a small glowing four-point star that tracks the pointer exactly,
// with a soft halo that trails a beat behind. The star turns and the halo swells over
// links and buttons, and both settle when you press. Only mounts for mouse-like
// pointers (never on touch), and steps aside over <video> so native controls still work.
const INTERACTIVE = 'a, button, [role="button"], summary, input, textarea, select, label, .cursor-hover'

export default function Cursor() {
  const [enabled, setEnabled] = useState(false)
  const rootRef = useRef(null)
  const haloRef = useRef(null)
  const starRef = useRef(null)

  useEffect(() => {
    const mq = window.matchMedia('(hover: hover) and (pointer: fine)')
    setEnabled(mq.matches)
    const onChange = (e) => setEnabled(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const html = document.documentElement
    html.classList.add('has-custom-cursor')

    const root = rootRef.current
    const haloEl = haloRef.current
    const starEl = starRef.current
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const pos = { x: -300, y: -300 }
    const halo = { x: -300, y: -300 }
    let visible = false
    let hovering = false
    let down = false
    let raf

    const setVisible = (v) => {
      if (v === visible) return
      visible = v
      haloEl.classList.toggle('cursor-hidden', !v)
      starEl.classList.toggle('cursor-hidden', !v)
    }
    const syncState = () => {
      root.dataset.cursor = down ? 'down' : hovering ? 'link' : ''
    }

    const onMove = (e) => {
      if (e.pointerType && e.pointerType !== 'mouse') return
      const first = !visible && pos.x === -300
      pos.x = e.clientX
      pos.y = e.clientY
      if (first) {
        halo.x = pos.x
        halo.y = pos.y
      }
      const t = e.target instanceof Element ? e.target : null
      const overVideo = !!t?.closest('video')
      setVisible(!overVideo)
      const h = !!t?.closest(INTERACTIVE)
      if (h !== hovering) {
        hovering = h
        syncState()
      }
    }
    const onDown = () => { down = true; syncState() }
    const onUp = () => { down = false; syncState() }
    const onLeave = () => setVisible(false)

    const tick = () => {
      const k = reduce ? 1 : 0.13
      halo.x += (pos.x - halo.x) * k
      halo.y += (pos.y - halo.y) * k
      starEl.style.transform = `translate3d(${pos.x}px, ${pos.y}px, 0)`
      haloEl.style.transform = `translate3d(${halo.x}px, ${halo.y}px, 0)`
      raf = requestAnimationFrame(tick)
    }
    tick()

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    html.addEventListener('mouseleave', onLeave)
    window.addEventListener('blur', onLeave)

    return () => {
      cancelAnimationFrame(raf)
      html.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      html.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('blur', onLeave)
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div ref={rootRef} data-cursor="" aria-hidden="true">
      <div ref={haloRef} className="cursor-layer cursor-halo cursor-hidden">
        <i />
      </div>
      <div ref={starRef} className="cursor-layer cursor-star cursor-hidden">
        <svg viewBox="0 0 24 24">
          <path
            d="M12 0C12.7 7.2 16.8 11.3 24 12C16.8 12.7 12.7 16.8 12 24C11.3 16.8 7.2 12.7 0 12C7.2 11.3 11.3 7.2 12 0Z"
            fill="#D9AF98"
            stroke="#630000"
            strokeWidth="0.9"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}
