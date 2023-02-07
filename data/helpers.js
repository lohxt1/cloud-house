const groupByValue = (id, arr, groupSize, config) => {
	let max = Math.max(...arr.map((_) => _[id]));
	let min = Math.min(...arr.map((_) => _[id]));
	let delta = (max - min) / (groupSize - 0);

	console.log(delta);

	let group = {};

	arr.forEach((_) => {
		let _idx = Math.floor((_[id] - min) / delta);
		let elements = group[_idx];
		group[_idx] = [...(elements || []), _[id]];
	});

	group[groupSize - 1] = [...group[groupSize - 1], ...group[groupSize]];
	delete group[groupSize];

	if (config?.onlyLength) {
		return Object.keys(group).map((_) => group[_].length);
	}

	return group;
};

export { groupByValue };
