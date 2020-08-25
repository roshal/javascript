
const verify = ({
	pairs, items,
}) => {
	stack = []
	for (const item of items) {
		const index = pairs.indexOf(item)
		if (0 === index % 2) {
			stack.push(index + 1)
		} else
		if (0 < index && stack.pop() !== index) {
			return false
		}
	}
	return !stack.length
}

const value = verify({
	pairs: '()<>[]{}',
	items: '(<[{}]>)',
})

console.log(value)
