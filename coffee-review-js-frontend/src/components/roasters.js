class Roasters {
	constructor() {
		this.roasters = []
		this.adapter = new RoastersAdapter()
		this.initBindEventListeners()
		this.fetchAndLoadRoasters()
	}

	initBindEventListeners() {
		this.roasterContainer = document.getElementById('roasters-container')
		this.roasterName = document.getElementById('new-roaster-name')
		this.roasterGeo = document.getElementById('new-roaster-geo')
		this.roasterForm = document.getElementById('new-roaster-form')
		this.roasterForm.addEventListener('submit', this.createRoaster.bind(this)) // bind the this inside Roasters class
	}

	createRoaster(e) {
		e.preventDefault()
		const name = this.roasterName.value
		const geo = this.roasterGeo.value

		this.adapter.createRoaster(name, geo).then(roaster => {
			this.roasters.push(new Roaster(roaster))
			this.roasterName.value = ''
			this.roasterGeo.value = ''
			this.renderRoasters()
		})
	}


	destroyRoaster(e) {
		const id = e.target.attributes[1].nodeValue

		this.adapter.destroyRoaster(id).then(roaster => this.removeRoaster(roaster))
	}

	removeRoaster(roaster) {
		const roasterEl = document.querySelector(`[data-roaster-id="${roaster.roasterId}"]`)
		
		roasterEl.parentNode.remove()
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

		this.applyEventListeners();

	}

	applyEventListeners() {
		const deleteRoasterBtns = document.querySelectorAll(`[data-roaster-id]`) // returns an nodeList of all buttons

		deleteRoasterBtns.forEach(btn => btn.addEventListener('click', this.destroyRoaster.bind(this)))

	}
}