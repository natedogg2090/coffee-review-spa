class Roaster {
	constructor(roasterJSON) {
		this.id = roasterJSON.id
		this.name = roasterJSON.name
		this.geo = roasterJSON.geo
	}

	renderLi() {
		return `<li>${this.name}<button class="delete" data-roaster-id=${this.id}>X</button></li>`
	}

}