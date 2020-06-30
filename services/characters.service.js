const baseURL = "http://localhost:3004/"
//import Helpers from '../helpers/Helpers'

class CharactersService {

    static async list() {

        let init = {
            method: "GET"
        };

        let call = await fetch(`http://localhost:3004/characters`, init);
        let response = await call.json();
        return response.records;
    }
/*
    static async getCharactersThisWeek ( rows = 20) {
        let init = {method : "GET"};

        let q = `date_start>=${Helpers.getActualDate()} AND date_end<=${Helpers.getEndOfWeek()}`;
        let sort = 'date_start';

        let call = await fetch(`${baseURL}&rows=${rows}&q=${q}&sort=-${sort}`, init);
        let response = await call.json();
        return response.records;
    }

    static async getCharactersAfter ( rows = 20) {
        let init = {method : "GET"};

        let q = `date_start>=${Helpers.getEndOfWeek()}`;
        let sort = 'date_start';

        let call = await fetch(`${baseURL}&rows=${rows}&q=${q}&sort=-${sort}`, init);
        let response = await call.json();
        return response.records;
    }

    static async getCharactersByName ( rows, title) {
        let init = {method : "GET"};

        let q = `title="${title}" AND date_start >= ${Helpers.getActualDate()}`;
        let sort = 'date_start';

        let call = await fetch(`${baseURL}&rows=${rows}&q=${q}&sort=-${sort}`, init);
        let response = await call.json();
        return response.records;
    }



*/

}

export default CharactersService;