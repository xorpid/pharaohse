const fs = require("fs");
const path = require("path");

const infile = path.resolve(__dirname, "..", "src", "data", "pharaohs.json");
const outfile = path.resolve(__dirname, "..", "src", "data", "pharaohs.migrated.json");
const report = path.resolve(__dirname, "order-migration-report.csv");

function run() {
	if (!fs.existsSync(infile)) {
		console.error("Input file not found:", infile);
		process.exit(1);
	}
	const raw = fs.readFileSync(infile, "utf8");
	const data = JSON.parse(raw);

	const rows = [];
	const migrated = data.map((p) => {
		const copy = Object.assign({}, p);
		const ord = Number(copy.order);
		// If order is a finite number and <= 69, keep as canonical order_estimate
		if (Number.isFinite(ord) && ord > 0 && ord <= 69) {
			copy.order_estimate = ord;
			copy.order_uncertain = false;
			// keep legacy field for backward compatibility
		} else if (Number.isFinite(ord) && ord > 69) {
			// These were previously used as uncertainty markers; preserve original but mark as uncertain
			copy.order_estimate = null;
			copy.order_uncertain = true;
			copy.order_note = `original_order_code:${copy.order}`;
			// Add a report row to inspect manually
			rows.push({ id: copy.no ?? copy.slug ?? "", slug: copy.slug ?? "", original_order: copy.order });
			// optionally clear legacy order to avoid confusion (leave for now but commented)
			// copy.order = null;
		} else {
			// non-numeric or missing
			copy.order_estimate = null;
			copy.order_uncertain = false;
		}
		return copy;
	});

	fs.writeFileSync(outfile, JSON.stringify(migrated, null, 2), "utf8");
	// write csv report
	const header = "id,slug,original_order\n";
	const csv = header + rows.map((r) => `${JSON.stringify(r.id)},${JSON.stringify(r.slug)},${JSON.stringify(r.original_order)}`).join("\n");
	fs.writeFileSync(report, csv, "utf8");

	console.log("Wrote migrated file to", outfile);
	console.log("Wrote report to", report);
	console.log("Review the report and the migrated JSON before replacing the original file.");
}

if (require.main === module) run();
