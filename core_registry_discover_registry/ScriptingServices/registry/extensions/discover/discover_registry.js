/*eslint-env node */

exports.getItem = function() {
	var item = {
		image: "search",
		color: 'green',
		path: "#/content",
		title: "Registry",
		description: "Browse Registry Content"
	};
	return item;
};

exports.getOrder = function() {
	return 0;
};
