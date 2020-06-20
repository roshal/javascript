
// interface segregation principle

class classAnimal {
	constructor(theValue) {
		this.theValue = theValue
	}
	//	fly = () => {
	//		const theValue = [this.theValue, 'can fly'].join(' ')
	//		console.log(theValue)
	//		return theValue
	//	}
	//	swim = () => {
	//		const theValue = [this.theValue, 'can swim'].join(' ')
	//		console.log(theValue)
	//		return theValue
	//	}
	//	walk = () => {
	//		const theValue = [this.theValue, 'can walk'].join(' ')
	//		console.log(theValue)
	//		return theValue
	//	}
}

class classDog extends classAnimal {
	//	fly = () => {
	//		return null
	//	}
}

class classEagle extends classAnimal {
	//	swim = () => {
	//		return null
	//	}
}

class classWhale extends classAnimal {
	//	fly = () => {
	//		return null
	//	}
	//	walk = () => {
	//		return null
	//	}
}

const fly = function () {
	const theValue = [this.theValue, 'can fly'].join(' ')
	console.log(theValue)
	return theValue
}

const swim = function () {
	const theValue = [this.theValue, 'can swim'].join(' ')
	console.log(theValue)
	return theValue
}

const walk = function () {
	const theValue = [this.theValue, 'can walk'].join(' ')
	console.log(theValue)
	return theValue
}

Object.assign(classDog.prototype, {
	swim, walk,
})

Object.assign(classEagle.prototype, {
	fly, walk,
})

Object.assign(classWhale.prototype, {
	swim,
})

const instanceDog = new classDog('dog')
const instanceEagle = new classEagle('eagle')
const instanceWhale = new classWhale('whale')

//	instanceDog.fly()
instanceDog.swim()
instanceDog.walk()

instanceEagle.fly()
//	instanceEagle.swim()
instanceEagle.walk()

//	instanceWhale.fly()
instanceWhale.swim()
//	instanceWhale.walk()
