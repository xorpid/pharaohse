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

	const reignsByFarao = new Map();
	for (const r of reigns) {
		// farao may be number; convert to string to match pharaoh.no which is string in many entries
		const key = String(r.farao);
		if (!reignsByFarao.has(key)) reignsByFarao.set(key, []);
		reignsByFarao.get(key).push(r);
	}

	const keptReigns = [];
	let movedCount = 0;
	const pharaohsByNo = new Map();
	for (const p of pharaohs) pharaohsByNo.set(String(p.no), p);

	for (const r of reigns) {
		const key = String(r.farao);
		const p = pharaohsByNo.get(key);
		if (p) {
			// prepare reign data without 'farao'
			const rCopy = { ...r };
			delete rCopy.farao;
			// If pharaoh already has 'reigns' array, push; else set
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
