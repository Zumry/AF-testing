
const ATTENDEES_API_BASE_URI = "http://localhost:3000/attendees";

class AttendeesServices {

    /**
     * this service function is to store Attendees payment  details submission in backend
     */
    async makePayment(payment){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(ATTENDEES_API_BASE_URI+"/pay",{
            method:'POST',
            headers:{
                'content-Type':"application/json",
                'Authorization': bearer
            },
            body:JSON.stringify(payment)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    /**
     * this service function is to get Attendees tickets  submission of specific user ID from backEnd
     */
    async getTicketsByUserId(userID){
        return await fetch(ATTENDEES_API_BASE_URI+"/ticket/"+userID, {
            method: 'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })
    }


}

export default new AttendeesServices();