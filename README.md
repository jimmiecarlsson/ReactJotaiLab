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

Du behöver inte ens undvika hook‑konflikter med denna typ av uppbyggnad av koden:

``` jsx
<section style={{ marginBottom: '2rem' }}>
    <h2>useState-variant</h2>
    <Counter count={count} setCount={setCount} />
    <Display count={count} />
</section>
<section style={{ marginBottom: '2rem' }}>
    <h2>Jotai variant</h2>
    <CounterJotai />
    <DisplayJotai />
</section>
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
