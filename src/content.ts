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
  /** Bold lead sentence shown above the bio. */
  headline: Text
  bio: Text
  prompts: { label: Text; text: Text }[]
  tags: Text[]
  onLeft: Text
  onRight: Text
}

const exhibit: Text = { pl: 'Dowód rzeczowy', en: 'Exhibit A' }

export const profiles: Profile[] = [
  {
    id: 'owner',
    kind: 'good',
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
          pl: 'Analizoteka.pl (samodzielne zaprojektowanie i zbudowanie portalu od A do Z) oraz autorskie aplikacje biznesowe na Power Platform.',
          en: 'Analizoteka.pl (a portal I designed and built solo, from A to Z) and my own business apps on Power Platform.',
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
    kind: 'good',
    emoji: '🦎',
    gradient: 'from-cyan-400 via-sky-500 to-blue-600',
    name: { pl: 'Tomasz „Szybki Onboarding”', en: 'Tomasz "Fast Onboarding"' },
    tagline: { pl: 'Kameleon Technologiczny', en: 'Tech Chameleon' },
    headline: {
      pl: 'Nowa technologia w projekcie? Szybko się wdrażam i dostarczam kod.',
      en: 'New tech in the project? I get up to speed fast and ship code.',
    },
    bio: {
      pl: 'Praca w różnorodnych projektach nauczyła mnie, że technologia to narzędzie do rozwiązania problemu. Błyskawicznie wchodzę w nieznany stack – bez problemu przechodzę między .NET, Angular, React, Low-Code czy nawet językami mobilnymi (Swift, Kotlin), jeśli wymaga tego sytuacja.',
      en: 'Working on very different projects taught me that technology is a tool for solving a problem. I get into an unfamiliar stack in no time – switching between .NET, Angular, React, Low-Code and even mobile languages (Swift, Kotlin) whenever the situation calls for it.',
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
    kind: 'good',
    emoji: '🤖',
    gradient: 'from-violet-500 via-fuchsia-500 to-pink-500',
    name: { pl: 'Tomasz „AI-Native Dev”', en: 'Tomasz "AI-Native Dev"' },
    tagline: { pl: 'Efektywność i Nowoczesny Warsztat', en: 'Efficiency and a Modern Toolkit' },
    headline: {
      pl: 'AI jako codzienne wsparcie w nauce, kodowaniu i refaktoringu.',
      en: 'AI as everyday support for learning, coding and refactoring.',
    },
    bio: {
      pl: 'Wykorzystuję AI (Claude Code, GitHub Copilot) jako partnera w codziennej pracy. Pozwala mi to jeszcze szybciej opanowywać nowe biblioteki, pisać czysty kod, generować testy i sprawnie przeskakiwać między różnymi technologiami.',
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
  {
    id: 'fintech',
    kind: 'good',
    emoji: '📈',
    gradient: 'from-emerald-500 via-green-500 to-lime-400',
    name: { pl: 'Tomasz „Pasjonat Rynków”', en: 'Tomasz "Markets Enthusiast"' },
    tagline: { pl: 'Fintech & Domena Finansowa', en: 'Fintech & Finance Domain' },
    headline: {
      pl: 'Zrozumienie biznesu, danych finansowych i giełdy.',
      en: 'Understanding the business, financial data and the stock market.',
    },
    bio: {
      pl: 'Łączę zacięcie programistyczne z głęboką praktyczną wiedzą o rynkach kapitałowych. O mało nie zostałem analitykiem rynków finansowych – przeszedłem gęste sito rekrutacyjne, ale pasja do tworzenia oprogramowania wygrała. Świetnie rozumiem świat finansów, dzięki czemu sprawnie przekładam wymagania biznesowe i wskaźniki giełdowe na działający kod.',
      en: 'I combine a developer’s drive with deep, hands-on knowledge of capital markets. I almost became a financial markets analyst – I made it through a tough recruitment process, but my passion for building software won. I understand the world of finance well, so I translate business requirements and market indicators into working code with ease.',
    },
    prompts: [
      {
        label: exhibit,
        text: {
          pl: 'Stworzenie i rozwój własnej platformy analitycznej Analizoteka.pl (przetwarzanie danych giełdowych, sprawozdań i wskaźników w czasie rzeczywistym) oraz sukcesy w rekrutacjach analitycznych.',
          en: 'Creating and growing my own analytics platform, Analizoteka.pl (processing market data, financial statements and indicators in real time), plus success in analyst recruitment processes.',
        },
      },
    ],
    tags: [
      'Fintech',
      { pl: 'Analiza Rynkowa', en: 'Market Analysis' },
      { pl: 'Dane Finansowe', en: 'Financial Data' },
      { pl: 'Integracje API', en: 'API Integrations' },
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
  reveal2: 'Kreator & Owner, Szybki Onboarding, AI-Native Dev i Pasjonat Rynków to jedna i ta sama osoba.',
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
  reveal2: 'Maker & Owner, Fast Onboarding, AI-Native Dev and Markets Enthusiast are one and the same person.',
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
