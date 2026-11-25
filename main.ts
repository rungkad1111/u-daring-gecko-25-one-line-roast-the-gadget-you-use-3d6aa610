import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// One-line roast: the smartwatch that polices your movement all day,
// then runs out of battery and spends the evening sitting down itself.
const line =
  "My smartwatch tracks my steps, sleep, and heart rate all day, then dies at 6 p.m. and asks me to close my rings from the charger.";

const out = "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, line, "utf8");
console.log(line);
