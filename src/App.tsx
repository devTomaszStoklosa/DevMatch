import { useEffect, useState } from 'react'
import { Reveal } from './components/Reveal'
import { Summary } from './components/Summary'
import { SwipeDeck } from './components/SwipeDeck'
import { profiles, ui, type Lang } from './content'

type Screen = 'intro' | 'swipe' | 'reveal' | 'summary'

const detectLang = (): Lang => (navigator.language?.toLowerCase().startsWith('pl') ? 'pl' : 'en')

export default function App() {
  const [lang, setLang] = useState<Lang>(detectLang)
  const [screen, setScreen] = useState<Screen>('intro')
  const [rejectAttempts, setRejectAttempts] = useState(0)
  const [hires, setHires] = useState(0)
  const [round, setRound] = useState(0)
  const t = ui[lang]

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const replay = () => {
    setRejectAttempts(0)
    setHires(0)
    setRound((r) => r + 1)
    setScreen('swipe')
  }

  return (
    <div className="flex min-h-svh flex-col bg-slate-950 bg-[radial-gradient(ellipse_at_top,rgba(244,63,94,0.2),transparent_60%)] px-4 text-slate-100">
      <header className="mx-auto flex w-full max-w-xl items-center justify-between gap-3 py-3">
        <div className="flex rounded-full bg-white/10 p-1 text-xs font-semibold" role="group" aria-label="Language">
          {(['pl', 'en'] as const).map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              aria-pressed={lang === l}
              className={`rounded-full px-3 py-1 uppercase transition ${lang === l ? 'bg-white text-slate-900' : 'text-slate-300 hover:text-white'}`}
            >
              {l}
            </button>
          ))}
        </div>
        {screen !== 'summary' && (
          <button
            type="button"
            onClick={() => setScreen('summary')}
            className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-semibold text-slate-200 transition hover:bg-white/10"
          >
            {t.skip} →
          </button>
        )}
      </header>

      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col">
        {screen === 'intro' && <Intro lang={lang} onStart={() => setScreen('swipe')} />}
        {screen === 'swipe' && (
          <SwipeDeck
            key={round}
            lang={lang}
            onReject={() => setRejectAttempts((n) => n + 1)}
            onHire={() => setHires((n) => n + 1)}
            onFinish={() => setScreen('reveal')}
          />
        )}
        {screen === 'reveal' && <Reveal lang={lang} onContinue={() => setScreen('summary')} />}
        {screen === 'summary' && (
          <Summary lang={lang} rejectAttempts={rejectAttempts} hires={hires} onReplay={replay} />
        )}
      </main>

      <footer className="py-4 text-center text-xs text-slate-500">{t.footer}</footer>
    </div>
  )
}

function Intro({ lang, onStart }: { lang: Lang; onStart: () => void }) {
  const t = ui[lang]
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-6 py-6 text-center">
      <div className="relative h-40 w-32" aria-hidden>
        <div className="absolute inset-0 -rotate-12 rounded-2xl bg-linear-to-br from-violet-500 to-pink-500 shadow-xl" />
        <div className="absolute inset-0 rotate-6 rounded-2xl bg-linear-to-br from-sky-500 to-teal-400 shadow-xl" />
        <div className="absolute inset-0 grid animate-float place-items-center rounded-2xl bg-linear-to-br from-rose-500 to-orange-400 text-6xl shadow-xl">
          💘
        </div>
      </div>
      <div>
        <h1 className="bg-linear-to-r from-rose-400 to-orange-300 bg-clip-text text-5xl font-black tracking-tight text-transparent">
          {t.title}
        </h1>
        <p className="mt-1 text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">{t.subtitle}</p>
      </div>
      <p className="max-w-sm text-lg text-slate-200">{t.introLead(profiles.length)}</p>
      <button
        type="button"
        onClick={onStart}
        className="rounded-full bg-linear-to-r from-rose-500 to-orange-400 px-8 py-4 text-lg font-bold text-white shadow-lg shadow-rose-500/30 transition hover:scale-105 active:scale-95"
      >
        {t.start}
      </button>
      <p className="text-xs text-slate-500">{t.hint}</p>
    </section>
  )
}
