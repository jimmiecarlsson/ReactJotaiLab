# React + Jotai Lab

Den här övningen visar skillnaden mellan **lokalt state med `useState`**
och **globalt state med Jotai (`useAtom`)** i ett Vite + React‑projekt.

------------------------------------------------------------------------

## 🎯 Syfte

Att förstå hur man: - använder Reacts `useState` för lokalt state, -
använder Jotai‑atomer för globalt, delat state, - undviker
hook‑konflikter genom att separera komponentträd.

------------------------------------------------------------------------

## ⚙️ Förutsättningar

-   Node.js (LTS)
-   Visual Studio 2022 eller valfri editor
-   Vite installerat (`npm create vite@latest`)

------------------------------------------------------------------------

## 🧩 Projektstruktur

    src/
     ├── App.jsx
     ├── atoms/
     │    └── counterAtom.js
     ├── components/
     │    ├── Counter.jsx
     │    ├── Display.jsx
     │    ├── CounterJotai.jsx
     │    ├── DisplayJotai.jsx
     │    ├── LocalStateSection.jsx
     │    └── JotaiStateSection.jsx

------------------------------------------------------------------------

## 🧠 useState‑varianten

``` jsx
const [count, setCount] = useState(0)
```

State hanteras lokalt i komponentträdet och skickas vidare som props:

``` jsx
<Counter count={count} setCount={setCount} />
<Display count={count} />
```

------------------------------------------------------------------------

## 🌐 Jotai‑varianten

``` js
export const counterAtom = atom(0)
```

``` jsx
const [count, setCount] = useAtom(counterAtom)
```

Här kan flera komponenter dela samma värde utan prop‑drilling.

------------------------------------------------------------------------

## 🧱 App.jsx

För att undvika hook‑konflikter separeras de två varianterna:

``` jsx
<LocalStateSection />
<hr />
<JotaiStateSection />
```

------------------------------------------------------------------------

## 🚀 Kör projektet

``` bash
npm install
npm run dev
```

Öppna webbläsaren på den adress Vite visar, vanligtvis
<http://localhost:5173>.

------------------------------------------------------------------------

## ✅ Lärdomar

-   `useState` använder hakparenteser `[]` för array‑destrukturering.
-   `useAtom` fungerar på samma sätt men globalt via en atom.
-   `{}` används när man destrukturerar objekt (t.ex. props).
-   Separera lokalt och globalt state för att undvika
    React‑hook‑konflikter.
