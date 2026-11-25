import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One-line roast: the smartwatch that polices your movement all day,
// then runs out of battery and spends the evening sitting down itself —
// the one gadget that tells you to stand while it sits.
const line =
  "My smartwatch counts my steps, grades my sleep and nags me hourly to stand — then dies by dinner and closes its rings sitting in the charger.";

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, line, "utf8");
console.log(line);
