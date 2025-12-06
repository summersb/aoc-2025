#!/usr/bin/env tsx

const day = process.argv[2]?.padStart(2, "0");

if (!day) {
  console.error("Usage: yarn day <dayNumber>");
  process.exit(1);
}

console.log(`Running Advent of Code 2025 - Day ${day}`);

const mod = await import(`../days/day${day}/index.ts`);

if (mod.default) {
  await mod.default();
} else {
  console.log("No default export found in the day module.");
}

export {}

