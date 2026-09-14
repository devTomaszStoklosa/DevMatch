import { contact, profiles, summaryTraits, tr, ui, type Lang } from '../content'

type Props = {
  lang: Lang
  rejectAttempts: number
  hires: number
  onReplay: () => void
}

export function Summary({ lang, rejectAttempts, hires, onReplay }: Props) {
  const t = ui[lang]
  const played = hires > 0 || rejectAttempts > 0
  const mailto = `mailto:${contact.email}?subject=${encodeURIComponent(t.emailSubject)}`

  return (
    <section className="animate-fade-up space-y-4 py-4">
      <div className="rounded-3xl bg-white/5 p-5 ring-1 ring-white/10">
        <div className="flex items-center gap-4">
          <div className="grid size-16 shrink-0 place-items-center rounded-full bg-linear-to-br from-rose-500 to-orange-400 text-xl font-black text-white">
            TS
          </div>
          <div className="min-w-0">
            <h1 className="text-2xl font-bold">{contact.name}</h1>
            <p className="text-rose-300">{t.role}</p>
            <p className="text-sm text-slate-400">{t.meta}</p>
          </div>
        </div>
        <p className="mt-4 inline-block -rotate-3">
          <span className="inline-block animate-pop rounded-lg border-4 border-emerald-400 px-3 py-1 text-lg font-black tracking-widest text-emerald-400 uppercase">
            {t.verdict}
          </span>
        </p>
      </div>

      <ul className="space-y-3">
        {summaryTraits.map((trait) => (
          <li key={trait.emoji} className="flex gap-3 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
            <span className="text-3xl" aria-hidden>
              {trait.emoji}
            </span>
            <div>
              <h2 className="font-semibold">{tr(lang, trait.title)}</h2>
              <p className="text-sm text-slate-300">{tr(lang, trait.text)}</p>
              {trait.link && (
                <a
                  href={trait.link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-block text-sm font-semibold text-rose-300 underline underline-offset-4 hover:text-rose-200"
                >
                  {tr(lang, trait.link.label)} ↗
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>

      <div className="rounded-2xl bg-white/5 p-4 text-sm ring-1 ring-white/10">
        <h2 className="mb-1 text-xs font-semibold tracking-wider text-slate-400 uppercase">{t.statsTitle}</h2>
        {played ? (
          <>
            <p>{t.matchStat(hires, profiles.length)}</p>
            <p>{t.rejectStat(rejectAttempts)}</p>
          </>
        ) : (
          <p>{t.skippedStat}</p>
        )}
      </div>

      <div className="rounded-3xl bg-linear-to-br from-rose-500/20 to-orange-400/10 p-5 ring-1 ring-rose-400/30">
        <h2 className="text-xl font-bold">{t.ctaTitle}</h2>
        <p className="mb-4 text-sm text-slate-300">{t.ctaText}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <a
            href={mailto}
            className="rounded-full bg-linear-to-r from-rose-500 to-orange-400 px-5 py-3 text-center font-bold text-white shadow-lg shadow-rose-500/30 transition hover:brightness-110"
          >
            {t.email}
          </a>
          <a
            href={contact.cv}
            download="Tomasz_Stoklosa_CV.pdf"
            className="rounded-full bg-white px-5 py-3 text-center font-bold text-slate-900 transition hover:bg-slate-200"
          >
            {t.cv}
          </a>
        </div>
        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm">
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-slate-200 underline underline-offset-4 hover:text-white"
          >
            {t.linkedin} ↗
          </a>
          <button type="button" onClick={onReplay} className="text-slate-400 underline underline-offset-4 hover:text-white">
            {t.replay}
          </button>
        </div>
      </div>
    </section>
  )
}
