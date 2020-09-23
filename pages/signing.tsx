// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import type { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";

const Basics: DFC = () => {
  return (
    <Layout title="Podpisy">
      <h3>Kryptografia klucza publicznego</h3>
      <p>
        Kryptografia klucza publicznego (kryptografia asymetryczna) – rodzaj
        kryptografii, w którym jeden z używanych kluczy jest udostępniony
        publicznie. Każdy użytkownik może użyć tego klucza do zaszyfrowania
        wiadomości, ale tylko posiadacz drugiego, tajnego klucza może
        odszyfrować taką wiadomość. Istnieją również bardziej zaawansowane
        algorytmy wykorzystujące więcej kluczy i inne zależności między
        kluczami.
      </p>
      <p>
        Kryptografia asymetryczna opiera się na funkcjach jednokierunkowych –
        takich, które da się łatwo wyliczyć w jedną stronę, ale bardzo trudno w
        drugą. Np. mnożenie jest łatwe, a rozkład na czynniki (z ang.
        faktoryzacja) trudny (na czym przykładowo opiera się RSA). Potęgowanie
        modulo jest łatwe, a logarytmowanie dyskretne jest trudne (na czym
        opierają się ElGamal, DSA i ECC).
      </p>
      <p>
        Wikipedia
      </p>
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
