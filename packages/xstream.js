
const p__xstream = require('xstream')

const xstream = p__xstream.default

const stream = xstream.periodic(125).filter((value) => {
	return value % 2 === 0
}).map((value) => {
	return value ** 2
})

const listener = {
	complete: () => {
		console.log('complete')
	},
	error: (error) => {
		console.error(error)
	},
	next: (value) => {
		console.log(value)
	},
}

stream.addListener(listener)

const producer = {
	start: (listener) => {
		this.id = setInterval(() => listener.next('yo'), 125)
	},
	stop: () => {
		clearInterval(this.id)
	},
	id: 0,
}

const production = xstream.create(producer)
