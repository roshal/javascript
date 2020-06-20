
// single responsibility principle

class classNews {
	constructor({
		theTitle, theValue,
	}) {
		this.theTitle = theTitle
		this.theValue = theValue
		this.isModified = false
	}
	update = ({
		theTitle, theValue,
	}) => {
		if (theTitle) {
			this.theTitle = theTitle
		}
		if (theValue) {
			this.theValue = theValue
		}
		this.isModified = true
	}
}

class classNewsPrinter {
	constructor({
		theNews,
	}) {
		this.theNews = theNews;
	}
	toHtml = () => {
		return ['html', this.theNews].join(' ')
	}
	toJson = () => {
		return ['json', this.theNews].join(' ')
	}
	toXml = () => {
		return ['xml', this.theNews].join(' ')
	}
}

const theNews = new classNews({
	title: 'putin', value: 'zeroing',
})

const instanceNewsPrinter = new classNewsPrinter({
	theNews,
})

console.log(instanceNewsPrinter.toHtml())
console.log(instanceNewsPrinter.toJson())
console.log(instanceNewsPrinter.toXml())
