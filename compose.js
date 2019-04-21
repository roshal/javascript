export default compose = (...functions) => {
	if (functions.length === 0) {
		return (...array) => {
			return array
		}
	}
	if (functions.length === 1) {
		return functions[0]
	}
	return functions.reduce((function_a, function_b) => {
		return (...array) => {
			return function_a(function_b(...array))
		}
	})
}
