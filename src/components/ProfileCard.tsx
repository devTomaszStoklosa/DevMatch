import { tr, ui, type Lang, type Profile } from '../content'

type Props = {
  profile: Profile
  lang: Lang
  /** 0..1 visibility of the "hire" stamp while dragging right. */
  like?: number
  /** 0..1 visibility of the "nope" stamp while dragging left. */
  nope?: number
}

export function ProfileCard({ profile: p, lang, like = 0, nope = 0 }: Props) {
  const t = ui[lang]
  return (
    <article className="flex h-full select-none flex-col overflow-hidden rounded-3xl bg-white text-slate-900 shadow-2xl shadow-black/50">
      <div className={`relative h-44 shrink-0 touch-none bg-linear-to-br ${p.gradient}`}>
        <span className="absolute inset-0 grid place-items-center pb-10 text-8xl drop-shadow-lg" aria-hidden>
          {p.emoji}
        </span>
        <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black/70 to-transparent px-4 pt-10 pb-3 text-white">
          <h2 className="text-2xl leading-tight font-bold">{tr(lang, p.name)}</h2>
          <p className="text-sm text-white/85">{tr(lang, p.tagline)}</p>
        </div>
        <span
          className="absolute top-4 left-4 -rotate-12 rounded-lg border-4 border-emerald-500 bg-white/90 px-2 text-2xl font-black text-emerald-600 uppercase"
          style={{ opacity: like }}
          aria-hidden
        >
          {t.hire}
        </span>
        <span
          className="absolute top-4 right-4 rotate-12 rounded-lg border-4 border-rose-500 bg-white/90 px-2 text-2xl font-black text-rose-600 uppercase"
          style={{ opacity: nope }}
          aria-hidden
        >
          {t.nope}
        </span>
      </div>

      <div className="flex min-h-0 flex-1 touch-pan-y flex-col gap-3 overflow-y-auto p-4 text-[0.9rem] leading-snug">
        <p>{tr(lang, p.bio)}</p>
        {p.prompts.map((prompt, i) => (
          <div key={i} className="rounded-2xl bg-slate-100 px-3 py-2">
            <p className="text-[0.7rem] font-semibold tracking-wider text-rose-500 uppercase">{tr(lang, prompt.label)}</p>
            <p>{tr(lang, prompt.text)}</p>
          </div>
        ))}
        <ul className="mt-auto flex flex-wrap gap-1.5 pt-1">
          {p.tags.map((tag, i) => (
            <li key={i} className="rounded-full bg-slate-900 px-2.5 py-0.5 text-xs font-medium text-white">
              {tr(lang, tag)}
            </li>
          ))}
        </ul>
      </div>
    </article>
  )
}
