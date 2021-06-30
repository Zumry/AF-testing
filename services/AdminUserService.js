
const ADMIN_CREATE_USER_API_BASE_URI = "http://localhost:3000/adminRegisterUser/";

class AdminUserService {

    /**
     * this service function is to store user details submission in backend
     */
    async registerAccount(Account){
        const bearer = 'Bearer ' + localStorage.getItem('userToken');
        return await fetch(ADMIN_CREATE_USER_API_BASE_URI ,{
            method:'POST',
            headers:{
                'content-Type':"application/json",
                'Authorization': bearer
            },
            body:JSON.stringify(Account)
        }).then(response =>{
            return response;
        }).catch(reason => {
            return reason;
        })
    }

}

export default new AdminUserService();