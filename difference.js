
const lodash = require('lodash')

const compare = (key, one, two) => {
	if (lodash.has(one, key) && !lodash.has(two, key)) {
		return {
			type: '>', one: one[key],
		}
	}
	if (lodash.has(two, key) && !lodash.has(one, key)) {
		return {
			type: '<', two: two[key],
		}
	}
	if (lodash.isObject(one[key]) && lodash.isObject(two[key])) {
		return {
			type: '.', difference: difference(one[key], two[key]),
		}
	}
	if (lodash.isEqual(one[key], two[key])) {
		return {
			type: '=', value: one[key],
		}
	}
	return {
		type: '!', one: one[key], two: two[key],
	}
}

const difference = (one, two) => {
	const keys = lodash.union(lodash.keys(one), lodash.keys(two)).sort()
	const handle = (key) => {
		return [key, compare(key, one, two)]
	}
	return lodash.fromPairs(keys.map(handle))
}

const one = {
	a: 'value',
	key: 'a',
	equal: 'value',
	object: {
		key: 'value',
	},
}

const two = {
	b: 'value',
	key: 'b',
	equal: 'value',
	object: {
		key: 'value',
	},
}

const value = difference(one, two)

console.log(value)
