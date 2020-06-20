
// open close principle

class classShape {
	calculateArea() {
		throw new Error()
	}
}

class classCircle extends classShape {
	constructor(theRadius) {
		super()
		this.theRadius = theRadius
	}
	calculateArea() {
		return this.theRadius ** 2 * Math.PI
	}
}

class classSquare extends classShape {
	constructor(theSize) {
		super()
		this.theSize = theSize
	}
	calculateArea() {
		return this.theSize ** 2
	}
}

class classTriangle extends classShape {
	constructor(theOne, theTwo) {
		super()
		this.theOne = theOne
		this.theTwo = theTwo
	}
	calculateArea() {
		return this.theOne * this.theTwo / 2
	}
}

class classArea {
	constructor(...theShapes) {
		this.theShapes = theShapes
	}
	//	calculate() {
	//		return this.shapes.reduce((accumulator, value) => {
	//			if (value instanceof classCircle) {
	//				return accumulator + value.radius ** 2 * Math.PI
	//			}
	//			if (value instanceof classSquare) {
	//				return accumulator + value.size ** 2
	//			}
	//			return accumulator
	//		}, 0)
	//	}
	calculate() {
		return this.theShapes.reduce((theAccumulator, theValue) => {
			return theAccumulator + theValue.calculateArea()
		}, 0)
	}
}

const instanceArea = new classArea(
	new classCircle(2),
	new classSquare(2),
	new classTriangle(2, 2),
)

const theValue = instanceArea.calculate()

console.log(theValue)
