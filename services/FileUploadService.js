const FILE_UPLOAD_API_BASE_URI = "http://localhost:3000/upload";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

class FileUploadService{

    async FileUploads(file){
        let form = new FormData()
        form.append('name',file.name)
        form.append('file',file)

        return await fetch(FILE_UPLOAD_API_BASE_URI+'/',{
            method:'POST',
            body:form
        }).then(response =>{
            return response.json();
        }).catch(reason => {
            return reason;
        })

    }
}

export default new FileUploadService();