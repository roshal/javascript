
// liskov substitution principle

class classDeveloper {
	access = () => {
		console.log()
	}
}

class classManager {
}

class classClientSideDeveloper extends classDeveloper {
	access = () => {
		return 'yes'
	}
}

class classServerSideDeveloper extends classDeveloper {
	access = () => {
		return 'yes'
	}
}

const accessDeveloper = (theDeveloper) => {
	const theValue = theDeveloper.access()
	console.log(theValue)
}

const theClientSideDeveloper = new classClientSideDeveloper()
const theServerSideDeveloper = new classServerSideDeveloper()

accessDeveloper(theClientSideDeveloper)
accessDeveloper(theServerSideDeveloper)

class classComponent {
	render = () => {
		return 'template'
	}
}

class classHighOrderComponent {
}

class classHeaderComponent extends classComponent {
	render = () => {
		return 'header'
	}
}

class classFooterComponent extends classComponent {
	render = () => {
		return 'footer'
	}
}

const renderComponent = (theComponent) => {
	const value = theComponent.render()
	console.log(value)
}

const theHeaderComponent = new classHeaderComponent()
const theFooterComponent = new classFooterComponent()

renderComponent(theHeaderComponent)
renderComponent(theFooterComponent)
