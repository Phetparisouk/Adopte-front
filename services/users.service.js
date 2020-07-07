const baseURL = "http://192.168.1.21:3004/"

class UsersService {

    static async auth(body) {

        let init = {
            method  : "POST", 
            headers : { "Content-Type": "application/json"},
            body    : JSON.stringify(body)
        };

        let call = await fetch(`${baseURL}auth`, init);
        let response = await call.json();
        return response;
    }

    
    static async create(body) {

        let init = {
            method  : "POST", 
            headers : { "Content-Type": "application/json"},
            body    : JSON.stringify(body)
        };

        let call = await fetch(`${baseURL}users`, init);
        let response = await call.json();
        return response;
    }
        
    static async update(body) {

        let init = {
            method  : "PUT", 
            headers : { "Content-Type": "application/json"},
            body    : JSON.stringify(body)
        };

        let call = await fetch(`${baseURL}users/${body._id}`, init);
        let response = await call.json();
        return response;
    }
}

export default UsersService;