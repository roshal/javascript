const b__math = Math
//
intersection = (array_a, array_b) => {
	const length = b__math.min(array_a.length, array_b.length)
	const array = []
	let index_a = 0
	let index_b = 0
	while (b__math.max(index_a, index_b) < length) {
		const offset = array_a[index_a] - array_b[index_b]
		if (!offset) {
			array.push(array_a[index_a])
		}
		if (offset <= 0) {
			index_a += 1
		}
		if (0 <= offset) {
			index_b += 1
		}
	}
	console.log(0)
	return array
}
//
const array_a = [0, 1, 2]
const array_b = [1, 2, 3]
const array_c = [1, 2]
const array = intersection(array_a, array_b)
console.log(array)
console.log(array == array_c)
