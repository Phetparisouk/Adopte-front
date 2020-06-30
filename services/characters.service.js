const baseURL = "https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-"
import Helpers from '../helpers/Helpers'

class CharactersService {

    static async list( rows = 20) {

        let init = {
            method: "GET"
        };

        let call = await fetch(`${baseURL}&rows=${rows}`, init);
        let response = await call.json();
        return response.records;
    }

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





}

export default CharactersService;