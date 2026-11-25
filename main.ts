// One Star for Monday — make.fun entry (program/v1).
// Writes a single-line one-star review of Monday, as if Monday were a
// restaurant, to /output/entry.txt. Node standard library only.

import { mkdirSync, writeFileSync, chmodSync } from "node:fs";
import { join } from "node:path";

const REVIEW =
  "One star. Monday's sat me by the kitchen, lost my order, served my weekend cold, and billed me for the whole week.";

const words = REVIEW.split(/\s+/).filter(Boolean).length;
if (REVIEW.length < 1 || REVIEW.length > 180 || words > 25) {
  throw new Error("review breaks the gate limits");
}

const outDir = "/output";
const outFile = join(outDir, "entry.txt");

mkdirSync(outDir, { recursive: true, mode: 0o755 });
writeFileSync(outFile, REVIEW + "\n", { encoding: "utf8", mode: 0o644 });
chmodSync(outFile, 0o644);
