
/*
*  IT 19167442
*  Author Nusky M.A.M
* */
const CONFERENCE_API_BASE_URI = "http://localhost:3000/Conference";

class ConferenceService{


   async getConference(){
        return await fetch(CONFERENCE_API_BASE_URI+"",{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

    async createconference(conference){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(CONFERENCE_API_BASE_URI,{
            method:'POST',
            headers:{
                'content-Type':"application/json",
                'Authorization': bearer
            },
            body:JSON.stringify(conference)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })

    }


   async getConferenceByUser(id){
        return await fetch(CONFERENCE_API_BASE_URI+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }

   async getconferenceById(id){
        return await fetch(CONFERENCE_API_BASE_URI+"/"+id,{
            method:'GET',
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }


  async updateconference(id,Conference){
      const bearer = 'Bearer ' + localStorage.getItem('userToken');
       console.log(Conference);
        return await fetch(CONFERENCE_API_BASE_URI+"/"+id,{
            method:'PUT',
            headers:{
                'content-Type':"application/json",
                'Authorization': bearer
            },
            body:JSON.stringify(Conference)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

    async deleteconference(id){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(CONFERENCE_API_BASE_URI+"/"+id,{
            headers:{
                'Authorization': bearer
            },
            method:'DELETE',
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })

    }

    async ConferenceApproval(id,approval){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(CONFERENCE_API_BASE_URI+'/approve/'+id,{
            method:'PUT',
            headers:{
                'content-Type':"application/json",
                'Authorization': bearer
            },
            body:JSON.stringify(approval)
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })
    }

}

export default new ConferenceService();
