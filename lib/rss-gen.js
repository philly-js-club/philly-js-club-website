const config = require("../.rss-gen.json");
const path = require("path");

// Utils
const readFromDataStream = (file) => {
	return require(path.join(__dirname, "../", file));
};

const formatValue = (value) => {
	let updatedValue = value;
	if (typeof value === "object") updatedValue = updatedValue.join("; ");
	updatedValue = updatedValue.replace("&", "&amp;");
	return updatedValue;
};

const createXMLElement = (element, value) => {
	return `<${element}>${value}</${element}>`;
};

// Create RSS elements
const createItem = (dataSet, itemMap) => {
	let items = "";
	let item = "";

	dataSet.forEach((data) => {
		Object.keys(itemMap).forEach((key) => {
			let value = data[itemMap[key]];
			value = formatValue(value);
			item += createXMLElement(key, value);
		});

		items += createXMLElement("item", item);
		item = "";
	});

	return items;
};

const createRSSElement = (data, type, contentMap) => {
	switch (type) {
		case "item":
			return createItem(data, contentMap);
		default:
			return "";
	}
};

const main = () => {
	let rss = `<?xml version="1.0" ?><rss version="2.0"><channel>`;

	config.data.forEach(({ contentMap, file, type }) => {
		const data = readFromDataStream(file);
		const content = createRSSElement(data, type, contentMap);
		rss += content;
	});

	rss += `</channel></rss>`;
	console.log(rss);
};

main();
