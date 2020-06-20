
// dependency inversion principle

class classFetch {
	request = (theValue) => {
		//	const theUrl = 'address'
		//	return fetch(theUrl).then((response) => {
		//		response.json()
		//	})
		const theFetchValue = [theValue, 'from fetch'].join(' ')
		return Promise.resolve(theFetchValue)
	}
}

class classFetchClient {
	constructor() {
		//	this.instanceStore = new classStore();
		this.instanceFetch = new classFetch();
	}
	fetch = (theValue) => {
		//	return this.instanceStore.get(theValue)
		return this.instanceFetch.request(theValue)
	}
}

class classStore {
	get = (theValue) => {
		return [theValue, 'from storage'].join(' ')
	}
}

class classStoreClient {
	constructor() {
		//	this.instanceStore = new classStore();
		this.instanceFetch = new classStore();
	}
	get = (theValue) => {
		//	return this.instanceStore.get(theValue)
		return this.instanceFetch.get(theValue)
	}
}

class classDatabase {
	constructor(instanceClient) {
		//	this.instanceFetch = new classFetch()
		//	this.instanceStore = new classStore()
		this.instanceClient = instanceClient
	}
	fetch(theValue) {
		//	return theValue
		//	return this.instanceFetch.request(theValue)
		//	return this.instanceStore.get(theValue)
		return this.instanceClient.fetch(theValue)
	}
}
const instanceFetchClient = new classFetchClient()

const instanceStoreClient = new classStoreClient()
const instanceFetchDatabase = new classDatabase(instanceFetchClient)

const instanceStoreDatabase = new classDatabase(instanceStoreClient)

const theValue = 'value'

instanceFetchDatabase.fetch(theValue).then((theValue) => {
	console.log(theValue)
})

const theStoreValue = instanceStoreDatabase.get(theValue)

console.log(theStoreValue)
