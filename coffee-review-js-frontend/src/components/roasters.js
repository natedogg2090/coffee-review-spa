class Roasters {
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
			roasters.forEach(roaster => this.roasters.push(new Roaster(roaster))) // pushing a new roaster instance into the array
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

		console.log(this.roasters)

		this.roasters.forEach(roaster => {
			let li = document.createElement('li')
			li.setAttribute("class", `roaster-${roaster.id}`)
			li.innerHTML = `${roaster.name}`
			ul.appendChild(li)
		})

		
	}
}