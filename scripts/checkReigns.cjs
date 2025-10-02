const fs = require("fs");
const path = require("path");
const dataDir = path.join(__dirname, "..", "src", "data");
const pharaohsPath = path.join(dataDir, "pharaohs.json");
const reignsPath = path.join(dataDir, "reigns.json");

const pharaohs = JSON.parse(fs.readFileSync(pharaohsPath, "utf8"));
const reigns = JSON.parse(fs.readFileSync(reignsPath, "utf8"));

const pharaohNos = new Set(pharaohs.map((p) => String(p.no)));
let matchedInReigns = 0;
for (const r of reigns) if (pharaohNos.has(String(r.farao))) matchedInReigns++;

const pharaohsWithReigns = pharaohs.filter((p) => p.reigns && p.reigns.length > 0).length;

console.log("pharaohs total:", pharaohs.length);
console.log("pharaohs with reigns:", pharaohsWithReigns);
console.log("reigns total:", reigns.length);
console.log("reigns entries matching a pharaoh:", matchedInReigns);

// print sample of remaining reigns that match
const samples = reigns.filter((r) => pharaohNos.has(String(r.farao))).slice(0, 10);
console.log("samples of matching reigns still in reigns.json (first 10):");
console.log(samples);
