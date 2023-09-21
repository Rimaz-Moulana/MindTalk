import axios from 'axios'

const CLIENT_API_BASE_URL = "http://localhost:8080/api/testing/client"

class ClientService {
    
    getClient(){
        return axios.get(CLIENT_API_BASE_URL + '/all');
    }

    addClient(client){
        return axios.post(CLIENT_API_BASE_URL, client)
    }

    deleteClient(clientId){
        return axios.delete(CLIENT_API_BASE_URL + '/' + clientId);
    }

    getClientById(clientId){
        return axios.get(CLIENT_API_BASE_URL + '/' + clientId);
    }

    updateClient(client, clientId){
        return axios.put(CLIENT_API_BASE_URL + '/' + clientId, client)
    }
}

export default new ClientService()