
const data = {
	' ': [5],
	'd': [10],
	'e': [1],
	'H': [0],
	'l': [2, 3, 9],
	'o': [4, 7],
	'r': [8],
	'w': [6],
}

const join = (data) => {
	return Object.keys(data).reduce((array, value) => {
		for (const index of data[value]) {
			array[index] = value
		}
		return array
	}, []).join('')
}

const value = join(data)

console.log(value)
