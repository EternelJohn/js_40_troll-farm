const { avatar, message } = require('./data');

function getRandomTroll() {
	return {
		message: message.first[0] + ' ' + message.second[0] + ' ' + message.third[0] + ' ' + message.smile[0],
		background: 'rgb(51,1,126)',
		online: true,
		avatar: {
			body: avatar.body[0],
			head: avatar.head[0],
			deco: avatar.deco[0],
			eyes: avatar.eyes[0],
			eyebrows: avatar.eyebrows[0],
			mouth: avatar.mouth[0],
			glasses: avatar.glasses[0],
			hair: avatar.hair[0],
			hands: avatar.hands[0],
			hat: avatar.hat[0]
		}
	};
}

module.exports = getRandomTroll;
