const fs = require("fs");
const path = require("path");

const dataDir = path.join(__dirname, "..", "src", "data");
const pharaohsPath = path.join(dataDir, "pharaohs.json");
const reignsPath = path.join(dataDir, "reigns.json");

function backup(filePath) {
	const dest = filePath + ".bak";
	fs.copyFileSync(filePath, dest);
	console.log("backup created:", dest);
}

function readJson(filePath) {
	const raw = fs.readFileSync(filePath, "utf8");
	return JSON.parse(raw);
}

function writeJson(filePath, obj) {
	const pretty = JSON.stringify(obj, null, 2);
	fs.writeFileSync(filePath, pretty + "\n", "utf8");
	console.log("written:", filePath);
}

function merge() {
	if (!fs.existsSync(pharaohsPath) || !fs.existsSync(reignsPath)) {
		console.error("data files missing");
		process.exit(1);
	}

	backup(pharaohsPath);
	backup(reignsPath);

	const pharaohs = readJson(pharaohsPath);
	const reigns = readJson(reignsPath);

	const keptReigns = [];
	let movedCount = 0;
	const pharaohsByNo = new Map();
	for (const p of pharaohs) pharaohsByNo.set(String(p.no), p);

	for (const r of reigns) {
		const key = String(r.farao);
		const p = pharaohsByNo.get(key);
		if (p) {
			const rCopy = { ...r };
			delete rCopy.farao;
			if (!p.reigns) p.reigns = [];
			p.reigns.push(rCopy);
			movedCount++;
		} else {
			keptReigns.push(r);
		}
	}

	writeJson(pharaohsPath, pharaohs);
	writeJson(reignsPath, keptReigns);
	console.log("movedCount:", movedCount);
}

merge();
