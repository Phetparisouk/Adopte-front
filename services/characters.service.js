const baseURL = "http://192.168.1.33:3004/"

class CharactersService {

    static async list() {

        let init = {
            method: "GET",
            headers : { "Content-Type": "application/json" },
        };
        
        let call = await fetch(`${baseURL}characters`, init);
        let response = await call.json();
        return response.characters;
    }

    static async getCharacterByName(name){
        let init = {
            method: "GET",
            headers : { "Content-Type": "application/json" },
        };

        let call = await fetch(`${baseURL}characters/${name}`, init);
        let response = await call.json();
        return response.chars;
    }
    static async create(body) {

        let init = {
            method  : "POST", 
            headers : { "Content-Type": "application/json"},
            body    : JSON.stringify(body)
        };

        let call = await fetch(`${baseURL}characters`, init);
        let response = await call.json();
        return response;
    }
      
    static async delete(id){
        let init = {
            method: "DELETE",
            headers : { "Content-Type": "application/json" },
        };

        let call = await fetch(`${baseURL}characters/${id}`, init);
        let response = await call.json();
        return response;
    }
}

export default CharactersService;