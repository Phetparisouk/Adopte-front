const baseURL = "http://192.168.1.21:3004/"

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
}

export default CharactersService;