import axios from "axios"
import { endPoint } from "../../constants/GlobaleVariables"

const loginOwner = async (data) => {
    
    try {
        
        let response = await fetch(endPoint + "/api/owner/login", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },

        body: JSON.stringify(data)
        });
        
        let json = await response.json();
    
        return json;
    } catch (error) {
        console.log(error);
    }
};

const loginResponsible = async (data) => {
    
    try {
        
        let response = await fetch(endPoint + "/api/responsible/login", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },

        body: JSON.stringify(data)
        });
        
        let json = await response.json();
    
        return json;
    } catch (error) {
        console.log(error);
    }
};

const logout = () => {
    localStorage.removeItem("user");
};


const AuthApi = {
    loginOwner,
    loginResponsible,
    logout,
}


export default AuthApi