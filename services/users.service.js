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
}

export default UsersService;