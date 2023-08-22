import axios from 'axios';

const MEDITATION_API_BASE_URL = "http://localhost:8080/api/testing/meditation"

class MeditationService {
    
    getMeditation(){
        return axios.get(MEDITATION_API_BASE_URL + '/all');
    }

    addMeditation(meditation){
        return axios.post(MEDITATION_API_BASE_URL, meditation)
    }

    deleteMeditation(meditationId){
        return axios.delete(MEDITATION_API_BASE_URL + '/' + meditationId);
    }

    getMeditationById(meditationId){
        return axios.get(MEDITATION_API_BASE_URL + '/' + meditationId);
    }

    updateMeditation(meditation, meditationId){
        return axios.put(MEDITATION_API_BASE_URL + '/' + meditationId, meditation)
    }
}

export default new MeditationService()