class RoastersAdapter {
	constructor() {
		this.baseUrl = 'http://localhost:3000/api/v1/roasters'
	}

	getRoasters() {
		return fetch(this.baseUrl).then(res => res.json())
	}

	createRoaster(name, geo) {
		const roaster = {
			name: name,
			geo: geo
		}

		return fetch(this.baseUrl, {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify({ roaster })
		}).then(res => res.json())
	}

	destroyRoaster(id) {
		const roasterId = {
			id: id
		}

		return fetch(this.baseUrl + `/${roasterId.id}`, {
			method: "DELETE",
			headers: {
				'content-type': 'application/json'
			},
			body: JSON.stringify({ roasterId })
		}).then(res => res.json())
	}
}