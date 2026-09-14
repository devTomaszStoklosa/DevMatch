// All game copy lives here. Edit texts, links and profiles without touching components.

export type Lang = 'pl' | 'en'
export type Text = string | Record<Lang, string>
export type Decision = 'left' | 'right'

export const tr = (lang: Lang, text: Text) => (typeof text === 'string' ? text : text[lang])

export const contact = {
  name: 'Tomasz Stokłosa',
  email: 'tomaszstoklosa1990@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tomasz-stoklosa',
  analizoteka: 'https://analizoteka.azurewebsites.net',
  cv: `${import.meta.env.BASE_URL}Tomasz_Stoklosa_EN.pdf`,
}

export type Profile = {
  id: string
  /** 'good' profiles cannot be rejected: the card bounces back. */
  kind: 'good' | 'fake'
  emoji: string
  gradient: string
  name: Text
  tagline: Text
  bio: Text
  prompts: { label: Text; text: Text }[]
  tags: Text[]
  onLeft: Text
  onRight: Text
}

export const profiles: Profile[] = [
  {
    id: 'ai',
    kind: 'good',
    emoji: '🤖',
    gradient: 'from-violet-500 via-fuchsia-500 to-pink-500',
    name: { pl: 'Tomasz „Prompt”', en: 'Tomasz "Prompt"' },
    tagline: { pl: '10+ lat w IT · 1 prompt od Ciebie', en: '10+ years in IT · 1 prompt away' },
    bio: {
      pl: 'Pasjonat AI. Rozwijam kilka własnych projektów z AI w roli głównej i z chęcią opowiem o nich na rozmowie. AI-assisted development mam przerobiony na całym stacku, nie tylko na slajdach.',
      en: 'AI enthusiast. I’m building several projects with AI in the lead role and I’d love to walk you through them. AI-assisted development across the whole stack, not just on slides.',
    },
    prompts: [
      {
        label: { pl: 'Mój pair programmer', en: 'My pair programmer' },
        text: {
          pl: 'Claude Code i GitHub Copilot. Całą Analizotekę zbudowałem w tym duecie: architektura, backend, frontend, deploy.',
          en: 'Claude Code and GitHub Copilot. I built all of Analizoteka with that duo: architecture, backend, frontend, deployment.',
        },
      },
      {
        label: { pl: 'Zielona flaga', en: 'Green flag' },
        text: {
          pl: 'Mówię AI „dziękuję”. Kultura popłaca, a modele mnie lubią.',
          en: 'I say "thank you" to the AI. Manners pay off and the models like me.',
        },
      },
    ],
    tags: ['Claude Code', 'GitHub Copilot', 'AI-assisted dev', { pl: 'Projekty AI w toku', en: 'AI projects in progress' }],
    onLeft: {
      pl: 'Na pewno? Zapytaliśmy AI. AI twierdzi, że to błąd.',
      en: 'Are you sure? We asked the AI. The AI says that’s a mistake.',
    },
    onRight: {
      pl: 'Match! Tomasz już pisze dla Ciebie powitalny prompt.',
      en: 'It’s a match! Tomasz is already writing you a welcome prompt.',
    },
  },
  {
    id: 'maker',
    kind: 'good',
    emoji: '💡',
    gradient: 'from-amber-400 via-rose-500 to-purple-600',
    name: { pl: 'Tomasz „Kreator”', en: 'Tomasz "Maker"' },
    tagline: {
      pl: '10+ lat w IT · od pomysłu do produkcji',
      en: '10+ years in IT · from idea to production',
    },
    bio: {
      pl: 'Kreatywny od pomysłu do wdrożenia. Własny produkt, autorskie moduły analityczne i interfejsy, które ludzie chcą klikać. Jak czegoś nie ma, to to buduję.',
      en: 'Creative from idea to release. My own product, my own analytics modules and interfaces people actually want to click. If it doesn’t exist, I build it.',
    },
    prompts: [
      {
        label: { pl: 'Dowód rzeczowy', en: 'Exhibit A' },
        text: {
          pl: 'Analizoteka: mój pomysł, moja architektura, mój frontend, mój deploy na Azure. Działa na produkcji i rośnie.',
          en: 'Analizoteka: my idea, my architecture, my frontend, my Azure deployment. Live in production and growing.',
        },
      },
      {
        label: { pl: 'Sposób na problem', en: 'How I solve things' },
        text: {
          pl: 'Nie każdy problem to nowy system. Czasem wystarczy Power Platform: ubezpieczenia, inwentaryzacja, ewidencja czasu, ankiety. Ten sam efekt, ułamek kosztu.',
          en: 'Not every problem needs a new system. Sometimes Power Platform does it: insurance, inventory, time tracking, surveys. Same result, a fraction of the cost.',
        },
      },
    ],
    tags: [
      { pl: 'Własny produkt', en: 'Own product' },
      'UX/UI',
      'Power Platform',
      'PL-900',
      { pl: 'Od zera do produkcji', en: 'Zero to production' },
    ],
    onLeft: {
      pl: 'Odrzucony? Już wymyślił trzy inne sposoby, żeby do Ciebie trafić.',
      en: 'Rejected? He has already invented three other ways to reach you.',
    },
    onRight: {
      pl: 'Match! Tomasz szkicuje prototyp, o którym jeszcze nie wiesz, że go potrzebujesz.',
      en: 'It’s a match! Tomasz is sketching a prototype you don’t know you need yet.',
    },
  },
  {
    id: 'owner',
    kind: 'good',
    emoji: '👑',
    gradient: 'from-yellow-300 via-amber-500 to-orange-600',
    name: { pl: 'Tomasz „Właściciel”', en: 'Tomasz "Owner"' },
    tagline: {
      pl: '10+ lat w IT · architektura, kod, hosting, wydania',
      en: '10+ years in IT · architecture, code, hosting, releases',
    },
    bio: {
      pl: 'Rozwijam własny produkt i biorę na siebie cały cykl życia: architektura, backend, frontend, hosting na Azure i proces wydań. Traktuję projekt jak właściciel, nie jak kolejny ticket do zamknięcia.',
      en: 'I run my own product and take on the whole lifecycle: architecture, backend, frontend, Azure hosting and the release process. I treat a project like an owner, not like one more ticket to close.',
    },
    prompts: [
      {
        label: { pl: 'Co robię sam', en: 'What I run solo' },
        text: {
          pl: 'Analizoteka: decyzje architektoniczne, kod po obu stronach, integracje z API rynkowymi, deploy i utrzymanie produkcji. Jedna osoba, pełna odpowiedzialność.',
          en: 'Analizoteka: architecture decisions, code on both ends, market-data API integrations, deployment and production upkeep. One person, full responsibility.',
        },
      },
      {
        label: { pl: 'Zielona flaga', en: 'Green flag' },
        text: {
          pl: 'Nie pytam, czyje to zadanie. Jak się pali, najpierw gaszę, a właściciela szukam potem.',
          en: 'I don’t ask whose task it is. If something is on fire I put it out first and look for the owner later.',
        },
      },
    ],
    tags: [
      { pl: 'Architektura', en: 'Architecture' },
      'Azure',
      'CI/CD',
      { pl: 'Proces wydań', en: 'Release process' },
      { pl: 'Pełna odpowiedzialność', en: 'Full ownership' },
    ],
    onLeft: {
      pl: 'Odrzucasz właściciela produktu? On i tak to wdroży, tylko bez Ciebie.',
      en: 'Rejecting a product owner? He’ll ship it anyway, just without you.',
    },
    onRight: {
      pl: 'Match! Tomasz właśnie wziął na siebie cały cykl życia Twojego projektu.',
      en: 'It’s a match! Tomasz just took ownership of your project’s entire lifecycle.',
    },
  },
  {
    id: 'brave',
    kind: 'good',
    emoji: '🪂',
    gradient: 'from-cyan-400 via-sky-500 to-blue-600',
    name: { pl: 'Tomasz „Śmiałek”', en: 'Tomasz "Fearless"' },
    tagline: {
      pl: '10+ lat w IT · szybszy niż onboarding',
      en: '10+ years in IT · faster than your onboarding',
    },
    bio: {
      pl: 'Nowa technologia w projekcie? Zgłaszam się pierwszy i dowożę. Angular, React, .NET, Swift, Kotlin, Azure, Kubernetes, Power Platform: każdą z tych rzeczy poznałem, bo projekt jej potrzebował.',
      en: 'New tech in the project? I volunteer first and deliver. Angular, React, .NET, Swift, Kotlin, Azure, Kubernetes, Power Platform: I learned each of them because a project needed it.',
    },
    prompts: [
      {
        label: { pl: 'Mocna strona', en: 'My strong suit' },
        text: {
          pl: 'Wchodzę w nieznany stack i dowożę w nim produkcyjny kod. Sprawdzone w pięciu firmach i we własnym produkcie.',
          en: 'I step into an unknown stack and ship production code in it. Proven at five companies and in my own product.',
        },
      },
      {
        label: { pl: 'Najodważniejszy ruch', en: 'Boldest move' },
        text: {
          pl: 'Jeden projekt, a w nim ja: backend, frontend w Angularze i apki mobilne w Swift i Kotlin. Wszystko dowiezione.',
          en: 'One project, all me: backend, Angular frontend and mobile apps in Swift and Kotlin. All shipped.',
        },
      },
    ],
    tags: ['.NET', 'Angular', 'React', 'TypeScript', 'Swift', 'Kotlin', 'Azure', 'Kubernetes', 'Power Apps'],
    onLeft: {
      pl: 'Nie da się. Tomasz już zaadaptował się do Twojego „nie”.',
      en: 'Doesn’t work. Tomasz has already adapted to your "no".',
    },
    onRight: {
      pl: 'Match! Tomasz właśnie nauczył się Twojego stacku. Tak na zapas.',
      en: 'It’s a match! Tomasz just learned your stack. Just in case.',
    },
  },
  {
    id: 'precision',
    kind: 'good',
    emoji: '🎯',
    gradient: 'from-red-500 via-rose-600 to-slate-800',
    name: { pl: 'Tomasz „Precyzja”', en: 'Tomasz "Precision"' },
    tagline: {
      pl: '10+ lat w IT · 4 lata tam, gdzie błąd kosztuje',
      en: '10+ years in IT · 4 years where mistakes cost money',
    },
    bio: {
      pl: 'Cztery lata przy oprogramowaniu POS: kasy, drukarki fiskalne, terminale płatnicze, programy lojalnościowe. Kod musiał być zgodny z przepisami fiskalnymi na kilku rynkach, bo tam błąd to nie bug, tylko problem prawny klienta.',
      en: 'Four years on POS software: tills, fiscal printers, payment terminals, loyalty programmes. The code had to comply with fiscal regulations in several markets, where a mistake isn’t a bug, it’s the client’s legal problem.',
    },
    prompts: [
      {
        label: { pl: 'Dlaczego to ważne', en: 'Why it matters' },
        text: {
          pl: 'Umiem pracować tam, gdzie „prawie działa” nie wystarcza: paragon musi się zgadzać co do grosza, a przepisy w każdym kraju są inne.',
          en: 'I know how to work where "almost works" isn’t enough: the receipt has to add up to the last cent and every country has its own rules.',
        },
      },
      {
        label: { pl: 'Język roboczy', en: 'Working language' },
        text: {
          pl: 'Angielski w każdej firmie i każdym projekcie: międzynarodowe zespoły, klienci z zagranicy, dokumentacja i code review po angielsku.',
          en: 'English at every company and on every project: international teams, foreign clients, docs and code reviews in English.',
        },
      },
    ],
    tags: [
      'POS',
      { pl: 'Integracje sprzętowe', en: 'Hardware integrations' },
      { pl: 'Zgodność z przepisami', en: 'Regulatory compliance' },
      { pl: 'Rynki międzynarodowe', en: 'International markets' },
      'English',
    ],
    onLeft: {
      pl: 'Tomasz sprawdził tę decyzję dwa razy. Dalej wychodzi, że błędna.',
      en: 'Tomasz double-checked that decision. It still comes out wrong.',
    },
    onRight: {
      pl: 'Match! Tomasz już przelicza Twoje paragony co do grosza.',
      en: 'It’s a match! Tomasz is already checking your receipts to the last cent.',
    },
  },
  {
    id: 'fintech',
    kind: 'good',
    emoji: '📈',
    gradient: 'from-emerald-500 via-green-500 to-lime-400',
    name: { pl: 'Tomasz „Hossa”', en: 'Tomasz "Bull Market"' },
    tagline: { pl: '10+ lat w IT · o jedną świecę od Ciebie', en: '10+ years in IT · one candle away' },
    bio: {
      pl: 'O mało nie zostałem analitykiem rynków finansowych. Wygrał kod, a pasja została, więc dziś łączę oba światy: bank i własny fintech. Wykresy świecowe czytam szybciej niż maile.',
      en: 'I almost became a financial markets analyst. Code won, the passion stayed, so today I do both: a bank and my own fintech. I read candlestick charts faster than emails.',
    },
    prompts: [
      {
        label: { pl: 'Owoc tej pasji', en: 'What the passion built' },
        text: {
          pl: 'Analizoteka: platforma do analizy spółek. Wskaźniki, sprawozdania, dane rynkowe z API. Architektura, backend, frontend i Azure: wszystko moje.',
          en: 'Analizoteka: a stock analysis platform. Ratios, statements, market data from APIs. Architecture, backend, frontend and Azure: all mine.',
        },
      },
      {
        label: { pl: 'Szukam kogoś', en: 'Looking for someone' },
        text: { pl: 'Stabilnego. Jak dywidenda.', en: 'Stable. Like a dividend.' },
      },
    ],
    tags: [
      { pl: 'Analiza fundamentalna', en: 'Fundamental analysis' },
      { pl: 'Analiza techniczna', en: 'Technical analysis' },
      'Analizoteka',
      'Euroclear Bank',
    ],
    onLeft: {
      pl: 'Odrzucenie Tomasza ma ujemną stopę zwrotu. Rynek tego nie wybaczy.',
      en: 'Rejecting Tomasz has a negative rate of return. The market won’t forgive that.',
    },
    onRight: {
      pl: 'Match! Tomasz policzył, że to Twoja najlepsza inwestycja w tym kwartale.',
      en: 'It’s a match! Tomasz calculated this is your best investment this quarter.',
    },
  },
]

/** Shown when a profile gets rejected again. */
export const rejectLines: Text[] = [
  { pl: 'Serio, przestań. Tu nie ma opcji „nie”.', en: 'Seriously, stop. There is no "no" option here.' },
  { pl: 'Algorytm odmawia współpracy. Karta wraca.', en: 'The algorithm refuses to cooperate. The card is back.' },
]

export const summaryTraits: { emoji: string; title: Text; text: Text; link?: { label: Text; href: string } }[] = [
  {
    emoji: '🤖',
    title: { pl: 'Pasjonat AI', en: 'AI enthusiast' },
    text: {
      pl: 'Rozwijam kilka własnych projektów AI i z chęcią opowiem o nich na rozmowie. Na co dzień pracuję w workflow AI-assisted: Claude Code i GitHub Copilot na całym stacku.',
      en: 'I’m building several AI projects of my own and I’m happy to walk you through them. I work in an AI-assisted workflow every day: Claude Code and GitHub Copilot across the whole stack.',
    },
  },
  {
    emoji: '💡',
    title: { pl: 'Kreatywny', en: 'Creative' },
    text: {
      pl: 'Własny produkt od pomysłu do produkcji, autorskie moduły analityczne, interfejsy dopracowane z UX. Narzędzie dobieram do problemu: raz .NET i Azure, raz Power Platform w ułamku kosztu.',
      en: 'My own product from idea to production, my own analytics modules, interfaces polished with UX. I pick the tool for the problem: .NET and Azure one time, Power Platform at a fraction of the cost the next.',
    },
  },
  {
    emoji: '👑',
    title: { pl: 'Właściciel produktu', en: 'Product owner' },
    text: {
      pl: 'Własny produkt prowadzę sam od końca do końca: architektura, backend, frontend, hosting na Azure i wydania. Do projektu wchodzę z myśleniem właściciela, nie wykonawcy zadań.',
      en: 'I run my own product end to end: architecture, backend, frontend, Azure hosting and releases. I come in with an owner’s mindset, not a ticket-taker’s.',
    },
    link: { label: { pl: 'Zobacz Analizotekę', en: 'See Analizoteka' }, href: contact.analizoteka },
  },
  {
    emoji: '🪂',
    title: { pl: 'Odważny', en: 'Fearless' },
    text: {
      pl: 'Pierwszy wskakuję w nowe technologie i szybko dowożę w nich produkcyjny kod: .NET, Angular, React, Swift, Kotlin, Azure, Kubernetes, Power Platform. Szeroki wachlarz to moja przewaga.',
      en: 'First to jump into new tech and fast to ship production code in it: .NET, Angular, React, Swift, Kotlin, Azure, Kubernetes, Power Platform. That range is my edge.',
    },
  },
  {
    emoji: '🎯',
    title: { pl: 'Precyzyjny', en: 'Precise' },
    text: {
      pl: 'Cztery lata przy POS: drukarki fiskalne, terminale, zgodność z przepisami na kilku rynkach. Środowisko, w którym błąd kosztuje realne pieniądze. Angielski roboczo w każdej firmie i każdym projekcie.',
      en: 'Four years on POS: fiscal printers, payment terminals, regulatory compliance across several markets. An environment where a mistake costs real money. English as a working language at every company and on every project.',
    },
  },
  {
    emoji: '📈',
    title: 'Fintech',
    text: {
      pl: 'O mało nie zostałem analitykiem rynków finansowych, a dziś łączę oba światy: bank i własna platforma Analizoteka do analizy spółek.',
      en: 'I almost became a financial markets analyst. Today I do both: a bank, and Analizoteka, my own stock analysis platform.',
    },
  },
]

const pl = {
  skip: 'Pomiń grę, pokaż CV',
  title: 'Swipe Right',
  subtitle: 'Edycja dla rekruterów',
  introLead: (n: number) =>
    `Jeden etat, ${n} kandydatów. W prawo zatrudniasz, w lewo odrzucasz. Co może pójść nie tak?`,
  start: 'Zaczynamy swipe’owanie',
  hint: 'Przeciągnij kartę, kliknij przycisk albo użyj strzałek ← →',
  progress: (n: number, total: number) => `Kandydat ${n} z ${total}`,
  hire: 'Zatrudnij',
  nope: 'Odrzuć',
  nopeBroken: 'Na wypowiedzeniu',
  nopeNotice: 'Przycisk „Odrzuć” właśnie złożył wypowiedzenie.',
  crunching: 'Algorytm liczy matche…',
  revealTitle: (n: number) => `It’s a Match! ×${n}`,
  reveal1: 'Chwila… Czy oni wszyscy nie mają przypadkiem na imię Tomasz?',
  reveal2: 'Prompt, Kreator, Właściciel, Śmiałek, Precyzja i Hossa to jedna i ta sama osoba.',
  reveal3: 'To nie jest match. To full-stack.',
  revealCta: 'Pokaż kandydata',
  role: 'Full-Stack Software Engineer',
  meta: '10+ lat w IT · obecnie Euroclear Bank · founder Analizoteki',
  verdict: 'Werdykt: zatrudnić',
  statsTitle: 'Statystyki rekrutacji',
  rejectStat: (n: number) => `Próby odrzucenia Tomasza: ${n}. Skuteczne: 0.`,
  matchStat: (n: number, total: number) => `Dopasowania: ${n} z ${total}. Wszystkie z tą samą osobą.`,
  skippedStat: 'Gra pominięta. Szanujemy to: czas rekrutera to pieniądz.',
  ctaTitle: 'Umówmy się na rozmowę',
  ctaText: 'Opowiem o projektach AI, które nie zmieściły się na karcie.',
  email: 'Napisz do mnie',
  emailSubject: 'Swipe Right: porozmawiajmy',
  cv: 'Pobierz CV (PDF, EN)',
  linkedin: 'LinkedIn',
  replay: 'Zagraj jeszcze raz',
  footer: 'React + TypeScript + Tailwind · zbudowane z Claude Code',
}

const en: typeof pl = {
  skip: 'Skip the game, show the CV',
  title: 'Swipe Right',
  subtitle: 'Recruiter Edition',
  introLead: (n) => `One position, ${n} candidates. Swipe right to hire, left to reject. What could possibly go wrong?`,
  start: 'Start swiping',
  hint: 'Drag the card, tap the buttons or use the ← → keys',
  progress: (n, total) => `Candidate ${n} of ${total}`,
  hire: 'Hire',
  nope: 'Nope',
  nopeBroken: 'Handed in notice',
  nopeNotice: 'The "Nope" button just handed in its notice.',
  crunching: 'Crunching the matches…',
  revealTitle: (n) => `It’s a Match! ×${n}`,
  reveal1: 'Wait… don’t they all happen to be called Tomasz?',
  reveal2: 'Prompt, Maker, Owner, Fearless, Precision and Bull Market are one and the same person.',
  reveal3: 'That’s not a match. That’s full-stack.',
  revealCta: 'Show me the candidate',
  role: 'Full-Stack Software Engineer',
  meta: '10+ years in IT · currently at Euroclear Bank · founder of Analizoteka',
  verdict: 'Verdict: hire',
  statsTitle: 'Hiring stats',
  rejectStat: (n) => `Attempts to reject Tomasz: ${n}. Successful: 0.`,
  matchStat: (n, total) => `Matches: ${n} of ${total}. All with the same person.`,
  skippedStat: 'Game skipped. Respect: a recruiter’s time is money.',
  ctaTitle: 'Let’s talk',
  ctaText: 'I’ll tell you about the AI projects that didn’t fit on the card.',
  email: 'Email me',
  emailSubject: 'Swipe Right: let’s talk',
  cv: 'Download CV (PDF)',
  linkedin: 'LinkedIn',
  replay: 'Play again',
  footer: 'React + TypeScript + Tailwind · built with Claude Code',
}

export const ui: Record<Lang, typeof pl> = { pl, en }
