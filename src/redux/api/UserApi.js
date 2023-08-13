import axios from "axios"
import { endPoint } from "../../constants/GlobaleVariables"

// get all client
const getallClients = async() =>{
    let response = await axios.get(endPoint + `/api/client/getClients`);

    const json = response.data
    return json
}


// get one clinet by id
const getClientById = async(data) =>{
    let response = await axios.get( endPoint + `/api/client/getClientById/${data}` )
    const json = response.data
    // console.log("DATA IS MM", json);
    return json;
}

// get one contrat by clinet 
const getClientByContrat = async(data) =>{
    let response = await axios.get( endPoint + `/api/admin/clinet-contrat/${data}` )
    const json = response.data
    // console.log("DATA IS MM", json);
    return json;
}


const UserApi =  {
    getClientById,
    getallClients,
    getClientByContrat
}

export default UserApi