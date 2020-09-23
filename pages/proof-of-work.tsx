// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import type { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";

const Basics: DFC = () => {
  return (
    <Layout title="Proof of Work">
      <p>
        Niech dodanie bloku będzie wiązało się z pewną nagrodą, tak aby istniała
        zachęta do utrzymywania sieci. Niech chętni rywalizują ze sobą
        rozwiązując jakąś zagadkę matematyczną. Dodatkowo można ją wykorzystać,
        żeby wzmocnić blockchain (zapobiec modyfikacjom transakcji, itp.). Niech
        trudność zagadki będzie tak dostosowana do mocy obliczeniowej sieci, że
        blok jest średnio dodawany co 10 minut.
      </p>
      <h5>
        Kopanie (mining)
      </h5>
      <p>
        Proces rywalizacji o przywilej dodania bloku i otrzymania nagrody
      </p>
      <h5>
        Górnik (miner)
      </h5>
      <p>
        Pojedynczy węzeł uczestniczący w rywalizacji. Górnicy mogą łączyć się w
        pule miningowe.
      </p>
      <h5>
        nonce
      </h5>
      <p>
        To określona liczba, której można użyć tylko raz (termin z kryptografii)
      </p>
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
