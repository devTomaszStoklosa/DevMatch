import { useEffect, useState } from 'react'
import { profiles, ui, type Lang } from '../content'

const disguises = profiles.filter((p) => p.kind === 'good')
// Avatars have to fit side by side inside a phone-width row before they merge.
const SIZE = disguises.length > 4 ? 48 : 80

export function Reveal({ lang, onContinue }: { lang: Lang; onContinue: () => void }) {
  const t = ui[lang]
  const [merged, setMerged] = useState(false)

  useEffect(() => {
    const id = window.setTimeout(() => setMerged(true), 2000)
    return () => clearTimeout(id)
  }, [])

  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 py-6 text-center">
      <h1 className="animate-pop bg-linear-to-r from-rose-400 to-orange-300 bg-clip-text text-4xl font-black text-transparent sm:text-5xl">
        {t.revealTitle(disguises.length)}
      </h1>

      <div className="relative w-full max-w-xs" style={{ height: SIZE }} aria-hidden>
        {disguises.map((p, i) => (
          <div
            key={p.id}
            className={`absolute top-0 left-1/2 grid place-items-center rounded-full bg-linear-to-br shadow-xl transition-all duration-700 ease-in-out ${p.gradient}`}
            style={{
              width: SIZE,
              height: SIZE,
              fontSize: SIZE * 0.5,
              transform: `translateX(calc(-50% + ${merged ? 0 : (i - (disguises.length - 1) / 2) * 92}%)) scale(${merged ? 0.5 : 1})`,
              opacity: merged ? 0 : 1,
            }}
          >
            {p.emoji}
          </div>
        ))}
        {merged && (
          <div className="absolute top-0 left-1/2 -translate-x-1/2">
            <div
              className="grid animate-pop place-items-center rounded-full bg-linear-to-br from-rose-500 to-orange-400 font-black text-white shadow-xl"
              style={{ width: SIZE, height: SIZE, fontSize: SIZE * 0.32 }}
            >
              TS
            </div>
          </div>
        )}
      </div>

      <p className="max-w-sm animate-fade-up text-lg" style={{ animationDelay: '500ms' }}>
        {t.reveal1}
      </p>

      {merged && (
        <>
          <p className="max-w-sm animate-fade-up text-slate-300">{t.reveal2}</p>
          <p className="animate-fade-up text-2xl font-bold" style={{ animationDelay: '600ms' }}>
            {t.reveal3}
          </p>
          <button
            type="button"
            onClick={onContinue}
            className="animate-fade-up rounded-full bg-linear-to-r from-rose-500 to-orange-400 px-8 py-3 font-bold text-white shadow-lg shadow-rose-500/30 transition hover:brightness-110"
            style={{ animationDelay: '1100ms' }}
          >
            {t.revealCta}
          </button>
        </>
      )}
    </section>
  )
}
