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

/** The fields a profile card displays. */
export type ProfileView = {
  emoji: string
  gradient: string
  name: Text
  tagline: Text
  /** Bold lead sentence shown above the bio. */
  headline: Text
  bio: Text
  prompts: { label: Text; text: Text }[]
  tags: Text[]
}

/** Profiles cannot be rejected: swiping left bounces the card back. */
export type Profile = ProfileView & {
  id: string
  /** Toast shown after the first reject attempt on this card. */
  onLeft: Text
  onRight: Text
}

const exhibit: Text = { pl: 'Dowód rzeczowy', en: 'Exhibit A' }

export const profiles: Profile[] = [
  {
    id: 'owner',
    emoji: '👑',
    gradient: 'from-amber-400 via-rose-500 to-purple-600',
    name: { pl: 'Tomasz „Kreator & Owner”', en: 'Tomasz "Maker & Owner"' },
    tagline: { pl: 'Od pomysłu do działającego systemu', en: 'From idea to a working system' },
    headline: {
      pl: 'Łączę architekturę, backend, frontend i Azure w jedną całość.',
      en: 'I bring architecture, backend, frontend and Azure together into one whole.',
    },
    bio: {
      pl: 'Lubię brać pełną odpowiedzialność za projekt – od koncepcji biznesowej, przez wybór technologii, po wdrożenie na produkcję. Nie zamykam się w jednej wąskiej działce; sprawdzam się tam, gdzie trzeba połączyć różne elementy (bazy, API, interfejs, chmurę) w działający produkt.',
      en: 'I like taking full ownership of a project – from the business concept, through choosing the technology, to the production release. I don’t lock myself into one narrow niche; I shine where different pieces (databases, APIs, UI, cloud) have to come together into a working product.',
    },
    prompts: [
      {
        label: exhibit,
        text: {
          pl: 'Analizoteka.pl (samodzielne zaprojektowanie i zbudowanie portalu) oraz autorskie aplikacje biznesowe na Power Platform.',
          en: 'Analizoteka.pl (a portal I designed and built solo) and my own business apps on Power Platform.',
        },
      },
    ],
    tags: [
      'Full-Stack',
      'Azure Cloud',
      'End-to-End',
      { pl: 'Od 0 do Produkcji', en: 'Zero to Production' },
      'Power Platform',
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
    id: 'onboarding',
    emoji: '🦎',
    gradient: 'from-cyan-400 via-sky-500 to-blue-600',
    name: { pl: 'Tomasz „Szybki Onboarding”', en: 'Tomasz "Fast Onboarding"' },
    tagline: { pl: 'Kameleon Technologiczny', en: 'Tech Chameleon' },
    headline: {
      pl: 'Nowa technologia w projekcie? Szybko się wdrażam i dostarczam kod.',
      en: 'New tech in the project? I get up to speed fast and ship code.',
    },
    bio: {
      pl: 'Technologia to dla mnie narzędzie, nie religia. Praca przy różnorodnych projektach nauczyła mnie, że liczy się dowożenie rozwiązań, a nie przywiązanie do konkretnego frameworka. Błyskawicznie wchodzę w nieznany stack – bez problemu przechodzę między .NET, Angular, React, Low-Code czy technologiami mobilnymi (Swift, Kotlin), jeśli wymaga tego sytuacja.',
      en: 'For me, technology is a tool, not a religion. Working on diverse projects taught me that solving the problem is what matters, not framework dogma. I adapt to unfamiliar stacks in no time – seamlessly moving between .NET, Angular, React, Low-Code, or mobile (Swift, Kotlin) whenever the situation calls for it.',
    },
    prompts: [
      {
        label: exhibit,
        text: {
          pl: 'Historia projektowa oparta na elastyczności: od sterowników w Visual Basic, przez aplikacje POS, VDR (.NET/React), po Azure i Low-Code.',
          en: 'A project history built on flexibility: from Visual Basic drivers, through POS apps and a VDR (.NET/React), to Azure and Low-Code.',
        },
      },
    ],
    tags: [
      '.NET / C#',
      'Angular & React',
      'Docker & K8s',
      { pl: 'Adaptacyjność', en: 'Adaptability' },
      { pl: 'Szybki Onboarding', en: 'Fast Onboarding' },
    ],
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
    id: 'ai',
    emoji: '🤖',
    gradient: 'from-violet-500 via-fuchsia-500 to-pink-500',
    name: { pl: 'Tomasz „AI-Native Dev”', en: 'Tomasz "AI-Native Dev"' },
    tagline: { pl: 'Efektywność i Nowoczesny Warsztat', en: 'Efficiency and a Modern Toolkit' },
    headline: {
      pl: 'AI jako codzienne wsparcie w nauce, kodowaniu i refaktoringu.',
      en: 'AI as everyday support for learning, coding and refactoring.',
    },
    bio: {
      pl: 'Wykorzystuję AI (Claude Code, Copilot) jako partnera w codziennym programowaniu. Pomaga mi błyskawicznie poznawać nowe domeny i technologie, pisać czysty kod i generować testy. Wymuszam na AI tryb sokratejski – zadawanie pytań i podważanie moich założeń przy kodowaniu sprawia, że to ja kontroluję architekturę, a model jest wymagającym sparingpartnerem, nie zastępcą.',
      en: 'I use AI (Claude Code, GitHub Copilot) as a partner in my daily work. It helps me pick up new libraries even faster, write clean code, generate tests and move smoothly between different technologies.',
    },
    prompts: [
      {
        label: exhibit,
        text: {
          pl: 'Tworzenie portalu Analizoteka w pełnym workflow AI-assisted dev oraz codzienne stosowanie GitHub Copilot w obecnej pracy.',
          en: 'Building the Analizoteka portal in a fully AI-assisted dev workflow, plus using GitHub Copilot every day in my current job.',
        },
      },
    ],
    tags: [
      'Claude Code',
      'GitHub Copilot',
      'AI-Assisted Dev',
      { pl: 'Nowoczesne Narzędzia', en: 'Modern Tooling' },
    ],
    onLeft: {
      pl: 'Na pewno? Zapytaliśmy AI. AI twierdzi, że to błąd.',
      en: 'Are you sure? We asked the AI. The AI says that’s a mistake.',
    },
    onRight: {
      pl: 'Match! Tomasz już pisze dla Ciebie powitalny prompt.',
      en: 'It’s a match! Tomasz is already writing you a welcome prompt.',
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
    emoji: '👑',
    title: { pl: 'Kreator & Owner', en: 'Maker & Owner' },
    text: {
      pl: 'Pełna odpowiedzialność za projekt: od koncepcji biznesowej, przez wybór technologii, po wdrożenie na produkcję. Bazy, API, interfejs i chmura połączone w działający produkt.',
      en: 'Full ownership of a project: from the business concept, through choosing the technology, to the production release. Databases, APIs, UI and cloud brought together into a working product.',
    },
    link: { label: { pl: 'Zobacz Analizotekę', en: 'See Analizoteka' }, href: contact.analizoteka },
  },
  {
    emoji: '🦎',
    title: { pl: 'Szybki Onboarding', en: 'Fast Onboarding' },
    text: {
      pl: 'Błyskawicznie wchodzę w nieznany stack: .NET, Angular, React, Low-Code, a w razie potrzeby Swift i Kotlin. Od sterowników w Visual Basic, przez POS i VDR, po Azure.',
      en: 'I get into an unfamiliar stack in no time: .NET, Angular, React, Low-Code, and Swift or Kotlin when needed. From Visual Basic drivers, through POS and a VDR, to Azure.',
    },
  },
  {
    emoji: '🤖',
    title: 'AI-Native Dev',
    text: {
      pl: 'Claude Code i GitHub Copilot jako partnerzy w codziennej pracy: szybsza nauka nowych bibliotek, czysty kod, testy i sprawne przeskakiwanie między technologiami.',
      en: 'Claude Code and GitHub Copilot as partners in my daily work: faster learning of new libraries, clean code, tests and smooth switching between technologies.',
    },
  },
  {
    emoji: '📈',
    title: { pl: 'Pasjonat Rynków', en: 'Markets Enthusiast' },
    text: {
      pl: 'O mało nie zostałem analitykiem rynków finansowych. Rozumiem świat finansów i sprawnie przekładam wymagania biznesowe oraz wskaźniki giełdowe na działający kod.',
      en: 'I almost became a financial markets analyst. I understand the world of finance and translate business requirements and market indicators into working code with ease.',
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
  reveal2: 'Kreator & Owner, Szybki Onboarding i AI-Native Dev to jedna i ta sama osoba.',
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
  reveal2: 'Maker & Owner, Fast Onboarding and AI-Native Dev are one and the same person.',
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
}

export const ui: Record<Lang, typeof pl> = { pl, en }
