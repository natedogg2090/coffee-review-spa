class Roaster {
	constructor() {
		this.roasters = []
		this.adapter = new RoastersAdapter()
		this.bindEventListeners()
		this.fetchAndLoadRoasters()
	}

	fetchAndLoadRoasters() {
		this.adapter.getRoasters().then(roasters => {
			console.log(roasters)
		})
		
	}
}