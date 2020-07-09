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
}

export default CharactersService;