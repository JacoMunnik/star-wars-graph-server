const { RESTDataSource } = require("apollo-datasource-rest");
const fs = require("fs");
class StarWarsAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://swapi.dev/api/";
  }

  async getPeople(page) {
    const response = await this.get("people/?page=" + page);

    //get planet for each person

    return response || [];
  }

  async getPerson(name) {
    console.log("people/?search=" + name );
    const response = await this.get("people/?search=" + name );

    return response || [];
  }
}

module.exports = StarWarsAPI;
