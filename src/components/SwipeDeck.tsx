import { useEffect, useRef, useState, type CSSProperties, type PointerEvent } from 'react'
import { profiles, rejectLines, tr, ui, type Decision, type Lang, type Profile, type Text } from '../content'
import { ProfileCard } from './ProfileCard'

type Props = {
  lang: Lang
  onReject: () => void
  onHire: () => void
  onFinish: () => void
}

type Toast = { text: Text; tone: 'good' | 'bad'; id: number }

const THRESHOLD = 110
const FLY_MS = 350
const EASE = 'cubic-bezier(.2,.8,.2,1)'

const toastTone = {
  good: 'bg-emerald-400 text-emerald-950',
  bad: 'bg-rose-500 text-white',
}

export function SwipeDeck({ lang, onReject, onHire, onFinish }: Props) {
  const t = ui[lang]
  const [index, setIndex] = useState(0)
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  const [dragging, setDragging] = useState(false)
  const [leaving, setLeaving] = useState(false)
  const [shake, setShake] = useState(0)
  const [toast, setToast] = useState<Toast | null>(null)
  const [nopeShift, setNopeShift] = useState({ x: 0, y: 0 })
  const [cardRejects, setCardRejects] = useState<Record<string, number>>({})
  const dragStart = useRef<{ x: number; y: number } | null>(null)
  const noticeShown = useRef(false)
  const genericLine = useRef(0)
  const timers = useRef<number[]>([])

  const profile: Profile | undefined = profiles[index]
  const rejects = profile ? (cardRejects[profile.id] ?? 0) : 0

  // The "Nope" button gets progressively less cooperative, but only for Tomasz.
  const nopeMode = profile?.kind === 'good' ? (rejects >= 2 ? 'broken' : rejects === 1 ? 'dodge' : 'normal') : 'normal'

  useEffect(() => () => timers.current.forEach(clearTimeout), [])

  useEffect(() => {
    if (!toast) return
    const id = window.setTimeout(() => setToast(null), 2800)
    return () => clearTimeout(id)
  }, [toast])

  const later = (fn: () => void, ms: number) => {
    timers.current.push(window.setTimeout(fn, ms))
  }

  const showToast = (text: Text, tone: Toast['tone']) => setToast({ text, tone, id: Date.now() })

  const bounceBack = (p: Profile) => {
    const seen = cardRejects[p.id] ?? 0
    let line: Text
    if (seen === 0) {
      line = p.onLeft
    } else if (seen === 1 && !noticeShown.current) {
      // The moment the "Nope" button gives up on this card.
      noticeShown.current = true
      line = t.nopeNotice
    } else {
      line = rejectLines[genericLine.current++ % rejectLines.length]
    }
    setCardRejects((prev) => ({ ...prev, [p.id]: seen + 1 }))
    setOffset({ x: 0, y: 0 })
    setNopeShift({ x: 0, y: 0 })
    setShake((s) => s + 1)
    showToast(line, 'bad')
    onReject()
  }

  const decide = (dir: Decision) => {
    if (!profile || leaving) return
    if (profile.kind === 'good' && dir === 'left') return bounceBack(profile)

    setLeaving(true)
    setOffset((o) => ({ x: (dir === 'right' ? 1 : -1) * window.innerWidth * 1.2, y: o.y }))
    const happy = profile.kind === 'good' || dir === 'left'
    showToast(dir === 'right' ? profile.onRight : profile.onLeft, happy ? 'good' : 'bad')

    later(() => {
      if (dir === 'right') onHire()
      setLeaving(false)
      setOffset({ x: 0, y: 0 })
      setNopeShift({ x: 0, y: 0 })
      setShake(0)
      setIndex((i) => i + 1)
      if (index + 1 >= profiles.length) later(onFinish, 1800)
    }, FLY_MS)
  }

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat) return
      if (e.key === 'ArrowRight') decide('right')
      else if (e.key === 'ArrowLeft') decide('left')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  })

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    if (leaving || (e.pointerType === 'mouse' && e.button !== 0)) return
    e.currentTarget.setPointerCapture(e.pointerId)
    dragStart.current = { x: e.clientX, y: e.clientY }
    setDragging(true)
  }

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragStart.current) return
    setOffset({ x: e.clientX - dragStart.current.x, y: (e.clientY - dragStart.current.y) * 0.25 })
  }

  const endDrag = (cancelled: boolean) => {
    if (!dragStart.current) return
    dragStart.current = null
    setDragging(false)
    if (!cancelled && offset.x > THRESHOLD) decide('right')
    else if (!cancelled && offset.x < -THRESHOLD) decide('left')
    else setOffset({ x: 0, y: 0 })
  }

  const dodge = (e: PointerEvent<HTMLButtonElement>) => {
    if (nopeMode !== 'dodge' || e.pointerType !== 'mouse') return
    const side = Math.random() < 0.5 ? -1 : 1
    setNopeShift({ x: side * (70 + Math.random() * 60), y: -(20 + Math.random() * 50) })
  }

  const like = Math.max(0, Math.min(1, offset.x / THRESHOLD))
  const nope = Math.max(0, Math.min(1, -offset.x / THRESHOLD))

  return (
    <section className="flex flex-1 flex-col items-center gap-4 pb-2">
      <p className="text-sm text-slate-400" aria-live="polite">
        {profile ? t.progress(index + 1, profiles.length) : t.crunching}
      </p>

      <div className="relative h-[clamp(26rem,calc(100svh-15rem),36rem)] w-full max-w-sm">
        {toast && (
          <div
            key={toast.id}
            role="status"
            className={`pointer-events-none absolute inset-x-3 -top-2 z-30 animate-pop rounded-2xl px-4 py-3 text-center text-sm font-semibold shadow-xl ${toastTone[toast.tone]}`}
          >
            {tr(lang, toast.text)}
          </div>
        )}

        {!profile && <div className="grid h-full animate-float place-items-center text-7xl">💘</div>}

        {profiles.slice(index, index + 2).map((p, i) => {
          const top = i === 0
          const style: CSSProperties = top
            ? {
                transform: `translate(${offset.x}px, ${offset.y}px) rotate(${offset.x / 18}deg)`,
                transition: dragging ? 'none' : `transform ${FLY_MS}ms ${EASE}, opacity 300ms`,
                zIndex: 10,
              }
            : {
                transform: 'translateY(18px) scale(0.94)',
                opacity: 0.6,
                transition: `transform ${FLY_MS}ms ${EASE}, opacity 300ms`,
                zIndex: 0,
              }
          return (
            <div
              key={p.id}
              className={`absolute inset-0 will-change-transform ${top ? 'cursor-grab active:cursor-grabbing' : ''}`}
              style={style}
              aria-hidden={!top}
              {...(top && {
                onPointerDown,
                onPointerMove,
                onPointerUp: () => endDrag(false),
                onPointerCancel: () => endDrag(true),
              })}
            >
              <div key={top ? shake : 0} className={`h-full ${top && shake ? 'animate-shake' : ''}`}>
                <ProfileCard profile={p} lang={lang} like={top ? like : 0} nope={top ? nope : 0} />
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex items-start justify-center gap-12 pt-3">
        <div className="flex w-24 flex-col items-center gap-1">
          <button
            type="button"
            onClick={() => decide('left')}
            onPointerEnter={dodge}
            disabled={!profile || leaving || nopeMode === 'broken'}
            style={{ transform: `translate(${nopeShift.x}px, ${nopeShift.y}px)` }}
            className="grid size-16 place-items-center rounded-full border-2 border-rose-500/60 bg-slate-900 text-3xl text-rose-400 shadow-lg transition-transform duration-200 hover:scale-105 disabled:opacity-40"
            aria-label={t.nope}
          >
            ✕
          </button>
          <span className="text-center text-xs text-slate-400">{nopeMode === 'broken' ? t.nopeBroken : t.nope}</span>
        </div>
        <div className="flex w-24 flex-col items-center gap-1">
          <button
            type="button"
            onClick={() => decide('right')}
            disabled={!profile || leaving}
            className="grid size-16 place-items-center rounded-full bg-linear-to-br from-rose-500 to-orange-400 text-3xl text-white shadow-lg shadow-rose-500/30 transition-transform duration-200 hover:scale-105 active:scale-95 disabled:opacity-40"
            aria-label={t.hire}
          >
            ♥
          </button>
          <span className="text-center text-xs text-slate-400">{t.hire}</span>
        </div>
      </div>
    </section>
  )
}
