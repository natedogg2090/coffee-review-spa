class RoastersAdapter {
	constructor() {
		this.baseUrl = "http://localhost.com/3000/api/v1/roasters"
	}

	getRoasters() {
		return fetch(this.baseUrl).then(res => res.json())
	}
}