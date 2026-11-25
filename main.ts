import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Why this excuse lands: the GPS never says "recalculating" and never
// blames the driver. It volunteers a concrete, slightly absurd reason — a
// wedding in a dead end — and then admits the mistake was a social one,
// not a technical one. The driver is not lost; they were, in the GPS's
// mind, a guest. That is the whole joke, in one breath.

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

// The excuse is built from two beats so the voice stays first-person GPS:
// beat one names the specific place, beat two owns the wrong assumption.
const placeBeat = "That cul-de-sac had a wedding,";
const assumptionBeat = "and I thought you were invited.";
const excuse = `${placeBeat} ${assumptionBeat}`;

if (excuse.length < 1 || excuse.length > 200) {
  throw new Error(`excuse must be 1-200 characters, got ${excuse.length}`);
}
if (excuse.includes("\n")) {
  throw new Error("excuse must be a single line");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), excuse, "utf8");
