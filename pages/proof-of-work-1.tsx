// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import type { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";

const Basics: DFC = () => {
  return (
    <Layout title="Proof of Work">
      <h3>Zarys algorytmu</h3>
      <ol>
        <li>
          Klienci sieci (np. za pomocą portfeli) generują nowe transakcje,
          podpisują kluczami prywatnymi i propagują je w sieci. Początkowo mają
          one status oczekujące.
        </li>
        <li>
          Górnicy wyłapują oczekujące transakcje.
        </li>
        <li>
          Górnicy weryfikują, czy transakcje są poprawne.
        </li>
        <li>
          Górnicy szukają liczby nonce używając mocy swoich maszyn.
        </li>
        <li>
          Zwycięski górnik rozwiązuje blok! Rozgłasza ten fakt po całej sieci.
          Pozostałe węzły sprawdzają czy dobrze rozwiązał blok i czy wszystkie
          transakcje są poprawne.
        </li>
        <li>
          Jeśli tak, to blok dodawany w rozproszony sposób do blockchaina.
        </li>
      </ol>
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
