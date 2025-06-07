# Fakturiranje - Next.js Aplikacija

## Opis projekta

Ova aplikacija je sustav za upravljanje fakturama i klijentima, izgrađena koristeći Next.js framework. Omogućuje korisnicima upravljanje fakturama i klijentima .

## Tehnologije

- **Next.js 15.3.2** - React framework za produkcijsku aplikaciju
- **React 19** - JavaScript biblioteka za izradu korisničkih sučelja
- **TypeScript** - Za tipiziranu JavaScript razvojnu okolinu
- **Tailwind CSS** - Utility-first CSS framework
- **ESLint** - Za održavanje kvalitete koda

## Struktura projekta

```
├── app/                    # Next.js App Router direktorij
│   ├── clients/           # Rute i komponente za upravljanje klijentima
│   ├── invoices/          # Rute i komponente za upravljanje fakturama
│   ├── layout.tsx         # Glavni layout aplikacije
│   └── page.tsx           # Početna stranica
├── components/            # Reusable React komponente
│   ├── form/             # Form komponente
│   └── Input.tsx         # Generička input komponenta
├── public/               # Statički resursi
└── mockData/            # Test podaci za razvoj
```

## Pokretanje projekta

1. Instalacija ovisnosti:

```bash
pnpm install
```

2. Pokretanje development servera:

```bash
pnpm dev
```

3. Build za produkciju:

```bash
pnpm build
```

4. Pokretanje produkcijske verzije:

```bash
pnpm start
```

## Komponente

### Form Komponente

Komponente u `components/form` direktoriju su specijalizirane za unos podataka:

- `BrojFaktureDobavljaca.tsx` - Komponenta za unos broja fakture dobavljača
  - Omogućuje unos broja fakture s validacijom
  - Koristi Tailwind CSS za stiliziranje
  - Implementira pristupačnost kroz label i id atribute

### Generičke Komponente

- `Input.tsx` - Reusable input komponenta
  - Standardizirani input za cijelu aplikaciju
  - Podržava različite tipove unosa
  - Implementira pristupačnost i stiliziranje

## Razvoj

### Skripte

- `pnpm dev` - Pokreće development server
- `pnpm build` - Kreira produkcijski build
- `pnpm start` - Pokreće produkcijsku verziju
- `pnpm lint` - Pokreće ESLint za provjeru koda

### Best Practices

1. Koristite TypeScript za sve nove komponente
2. Pratite postojeće konvencije imenovanja
3. Dodajte komentare za kompleksnu logiku
4. Koristite Tailwind CSS klase za stiliziranje
5. Testirajte komponente prije commitanja

## Kontribucija

1. Fork repozitorija
2. Kreirajte feature branch
3. Commitajte promjene
4. Push na branch
5. Otvorite Pull Request

## Licenca

Privatni projekt - Sva prava pridržana
