const RSSConfig = require("./rss.config.json");
const fs = require("fs");

// Format invalid values
const formatValue = (value) => {
	let updatedValue = value;
	updatedValue = updatedValue.replace("&", "&amp;");
	return updatedValue;
};

const createXMLElement = (tag, entity) => {
	return `<${tag}>${entity}</${tag}>`;
};

const createRSSElements = (content, tag) => {
	let items = [];

	for (let [key, value] of Object.entries(content)) {
		let item = "";

		// Create multilayer xml feed
		if (typeof value === "object") {
			item = createRSSElements(value, key);
		} else {
			const updatedValue = formatValue(value);
			item = createXMLElement(key, updatedValue);
		}

		items.push(item);
	}

	items = items.join("");

	// If tag is not given, create xml element without tag wrapper (eg. channel)
	return tag ? createXMLElement(tag, items) : items;
};

// Create top-level headers
const createXMLHeader = ({ version }) => {
	return `<?xml version="${version}" ?>`;
};

const createRSSHeader = ({ version }) => {
	return `<rss version="${version}">`;
};

const createChannelHeader = (channelOptions) => {
	let channel = "<channel>";
	channel += createRSSElements(channelOptions);
	return channel;
};

const main = () => {
	const { ChannelOptions, feed, RSSOptions, XMLOptions } = RSSConfig;

	let rss = createXMLHeader(XMLOptions);
	rss += createRSSHeader(RSSOptions);
	rss += createChannelHeader(ChannelOptions);

	// Create RSS feed content
	feed.forEach(({ content, type }) => {
		rss += createRSSElements(content, type);
	});

	rss += `</channel></rss>`;
	fs.writeFile("app/rss.xml", rss, (err) => {
		if (err) {
			console.log("Failed to create rss.xml");
		} else {
			console.log("Successfully created app/rss.xml");
		}
	});
};

main();
