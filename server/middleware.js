const axios = require('axios');
const getRandomTroll = require('../index');

const mixArray = (arr) => {
	let j;
	let temp;
	const mixedArr = [...arr];

	for (let i = mixedArr.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));

		temp = mixedArr[j];
		mixedArr[j] = mixedArr[i];
		mixedArr[i] = temp;
	}

	return mixedArr;
};

const getNames = async () => {
	const users = await axios.get('https://jsonplaceholder.typicode.com/comments');

	return users.data.map(el => {
		return el.email.split('@')[0].replace(/\.|_/gmi, ' ');
	});
};

const createTrolls = async () => {
	let names = await getNames();
	names = mixArray(names);

	return names.map(n => {
		const troll = getRandomTroll();
		troll.name = n;
		troll.online = troll.online ? 'comment__avatar_online' : 'comment__avatar_offline';

		return troll;
	});
};

module.exports = createTrolls;