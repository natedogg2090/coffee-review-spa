class Roasters {
	constructor() {
		this.roasters = []
		this.adapter = new RoastersAdapter()
		this.initBindEventListeners()
		this.fetchAndLoadRoasters()
	}

	initBindEventListeners() {
		this.roasterContainer = document.getElementById('roasters-container')
	}

	fetchAndLoadRoasters() {
		this.adapter
		.getRoasters()
		.then(roasters => {
			roasters.forEach(roaster => this.roasters.push(new Roaster(roaster))) // pushing a new roaster instance into the array
		})
		.then(() => {
			this.renderRoasters()
		})
		
	}

	renderRoasters() {
		this.roasterContainer.innerHTML = this.roasters.map(roaster => roaster.renderLi()).join('')
		
	}
}