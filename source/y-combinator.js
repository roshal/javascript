
const combinate = (process) => {
	return ((lambda) => {
		return lambda(lambda)
	})((lambda) => {
		return process((...values) => {
			return lambda(lambda)(...values)
		})
	})
}

const factor = combinate((next) => {
	return (number) => {
		if (number < 2) {
			return 1
		}
		return number * next(number - 1)
	}
})

const value = factor(6)

console.log(factor(6))
