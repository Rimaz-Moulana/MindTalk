import axios from 'axios';

const MUSIC_API_BASE_URL = "http://localhost:8080/api/testing/music"

class MusicService {
    
    getMusic(){
        return axios.get(MUSIC_API_BASE_URL + '/all');
    }

    addMusic(music){
        return axios.post(MUSIC_API_BASE_URL, music)
    }

    deleteMusic(musicId){
        return axios.delete(MUSIC_API_BASE_URL + '/' + musicId);
    }

    getMusicById(musicId){
        return axios.get(MUSIC_API_BASE_URL + '/' + musicId);
    }

    updateMusic(music, musicId){
        return axios.put(MUSIC_API_BASE_URL + '/' + musicId, music)
    }
}

export default new MusicService()