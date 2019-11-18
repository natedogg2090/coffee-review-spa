class Roaster {
	constructor() {
		this.roasters = []
		this.adapter = new RoastersAdapter()
		// this.bindEventListeners()
		this.fetchAndLoadRoasters()
	}

	fetchAndLoadRoasters() {
		this.adapter
		.getRoasters()
		.then(roasters => {
			roasters.forEach(roaster => this.roasters.push(roaster))
		})
		.then(() => {
			this.renderRoasters()
		})
		
	}

	renderRoasters() {
		const roasterContainer = document.getElementById('roasters-container')
		const div = document.createElement('div')
		const ul = document.createElement('ul')
		roasterContainer.appendChild(div)
		div.appendChild(ul)

		console.log('here are my roasters', this.roasters)

		this.roasters.forEach(roaster => {
			let li = document.createElement('li')
			li.setAttribute("class", `roaster-${roaster.id}`)
			li.innerHTML = `${roaster.name}`
			ul.appendChild(li)
		})

		
	}
}