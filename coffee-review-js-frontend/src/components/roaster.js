class Roaster {
	constructor(roasterJSON) {
		this.id = roasterJSON.id
		this.name = roasterJSON.name
		this.geo = roasterJSON.geo
	}

	renderLi() {
		return `<li>${this.name}</li>`
	}
}