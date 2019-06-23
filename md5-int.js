const p__crypto = require('crypto')

const map = (string = '') => {
	const buffer = p__crypto.createHash('md5').update(string).digest()
	const characters = Array(39).fill(0)
	let limit = 0
	for (let number of buffer) {
		for (const index in characters) {
			if (limit < index) {
				if (characters[index]) {
					break
				}
				limit = index
			}
			number += characters[index] << 8
			characters[index] = number % 10
			number = Math.floor(number / 10)
		}
	}
	return characters.reverse().join('')
}

const value = map()

console.log(value)
