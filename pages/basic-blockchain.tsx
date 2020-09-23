// @deno-types="https://servestjs.org/@v1.1.3/types/react/index.d.ts"
import React from "https://dev.jspm.io/react/index.js";
import type { DFC } from "https://servestjs.org/@v1.1.3/mod.ts";
import Layout from "./shared/layout.tsx";
import Ascii from "./shared/ascii.tsx";

const Basics: DFC = () => {
  return (
    <Layout title="Podstawy">
      <h4>Omówienie struktury danych</h4>
      <Ascii
        art={`        
        +-------------------+       +------------------------+       +---------------------------+
        |                   |       |                        |       |                           |
        |    TRANSACTION    |       |          BLOCK         |       |        BLOCKCHAIN         |
        |                   |       |                        |       |                           |
        +-------------------+       +------------------------+       +---------------------------+
        | fromAddress       |       | previousHash           |   +---> chain                     |
        |                   |       |                        |   |   |                           |
        | toAddress         |   +---> transactions           |   |   | difficulty                |
        |                   |   |   |                        |   |   |                           |
        | amount            |   |   | timestamp              |   |   | pendingTransactions       |
        |                   |   |   |                        |   |   |                           |
        | signature         +---+   | hash                   +---+   | miningReward              |
        |                   |       |                        |       |                           |
        | calculateHash()   |       | nonce                  |       | createGenesisBlock()      |
        |                   |       |                        |       |                           |
        | isValid()         |       | calculateHash()        |       | getLatestBlock()          |
        |                   |       |                        |       |                           |
        | signTransaction() |       | mineBlock()            |       | createTransaction()       |
        +-------------------+       |                        |       |                           |
                                    | hasValidTransactions() |       | minePendingTransactions() |
                                    +------------------------+       |                           |
                                                                     | getBalanceOfAddress()     |
                                                                     |                           |
                                                                     | isChainValid()            |
                                                                     +---------------------------+
      `}
      />
    </Layout>
  );
};

// default export are used for Server Side Rendering.
export default Basics;
