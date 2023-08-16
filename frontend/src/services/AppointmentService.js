import axios from 'axios';

const APPOINTMENT_API_BASE_URL = "http://localhost:8080/api/testing/appointment"

class AppointmentService {
    
    getAppointment(){
        return axios.get(APPOINTMENT_API_BASE_URL + '/all');
    }

    addAppointment(Appointment){
        return axios.post(APPOINTMENT_API_BASE_URL, Appointment)
    }

    deleteAppointment(AppointmentId){
        return axios.delete(APPOINTMENT_API_BASE_URL + '/' + AppointmentId);
    }

    getAppointmentById(AppointmentId){
        return axios.get(APPOINTMENT_API_BASE_URL + '/' + AppointmentId);
    }

    updateAppointment(Appointment, AppointmentId){
        return axios.put(APPOINTMENT_API_BASE_URL + '/' + AppointmentId, Appointment)
    }
}

export default new AppointmentService()