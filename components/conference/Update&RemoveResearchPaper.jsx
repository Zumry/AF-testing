import React from "react";
import {Link} from "react-router-dom";
import '../../styles/conference/upRemRes&Work.css'
import {toast} from "react-toastify";
import ResearchPaperServices from "../../services/ResearchPaperServices";
import ResearchPaperService from "../../services/ResearchPaperServices";
import FileUploadService from "../../services/FileUploadService";

/**
 * @author : M.N.M Akeel
 * Registration Number : IT19153414
 */

/* configuring options to display toast message */
const options = {
    position: toast.POSITION.TOP_CENTER,
    hideProgressBar:true,
    autoClose:3000,
    closeButton:false
}

class UpdateRemoveResearchPaper extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            subID:this.props.match.params.id,
            userID:'',
            authorName:'',
            paperTitle:'',
            email:'',
            file:[],

            agreement:false,
            oldFileLocation:''
        }
    }

    /**
     * Mounting Research paper submission details of the relevant user to update form
     */
    componentDidMount() {
        if(localStorage.getItem('_id') === null ){
            this.props.history.push('/');
        }else {
            ResearchPaperServices.getResearchPaperByID(this.state.subID)
                .then(res => {
                    console.log(res)
                    this.setState({
                        authorName: res.authorName,
                        paperTitle: res.paperTitle,
                        email: res.email,
                        userID: res.userID,
                        oldFileLocation: res.researchPFileLocation
                    })
                })
                .catch(err => console.error(err));
        }
    }

    /**
     *  This method is to update Research Paper Submission
     */
    updateResearchPaper(event){
        event.preventDefault();
        let researchPaper = {
            userID:this.state.userID,
            authorName:this.state.authorName,
            paperTitle:this.state.paperTitle,
            email:this.state.email,
            researchPFileLocation:''
        }

        /**
         * Validating the Research Paper submission input fields
         * Displaying Error message if any input field is empty
         */
        if(researchPaper.authorName === ''){
            toast.warning("Fill the Author Name", options)
        }else if (researchPaper.paperTitle === ''){
            toast.warning("Fill Paper Title", options)
        }else if (researchPaper.email === ''){
            toast.warning("Fill Email Address", options)
        }else if (this.state.agreement === false){
            toast.warning("Please Agree to Terms&Conditions.", options)
        }else{
            /**
             * if user attaching an new file we are uploading the file in aws cloud
             * and storing in details on mongodb
             */
            if(this.state.file.length !== 0){
                FileUploadService.FileUploads(this.state.file)
                    .then(response =>{
                        researchPaper.researchPFileLocation = response.url
                        ResearchPaperService.updateResearchPaper(this.state.subID,researchPaper)
                            .then(res => {
                                if(res.status === 200){
                                    toast.success("Research Paper Submitted Updated Successfully",options)
                                }else{
                                    toast.error("Something went wrong!! Try again.",options)
                                }
                            })
                    })
            }
            /**
             * if user not attaching an new file we are storing only the new details on mongodb
             */
            else{
                researchPaper.researchPFileLocation = this.state.oldFileLocation
                console.log(" Not inside file upload condition")
                console.log(JSON.stringify(researchPaper));
                ResearchPaperService.updateResearchPaper(this.state.subID,researchPaper)
                    .then(res => {
                        if(res.status === 200){
                            toast.success("Research Paper Submission Updated Successfully",options)
                        }else{
                            toast.error("Something went wrong!!,Try again.",options)
                        }
                    })
            }
        }
    }

    /**
     * this function is to remove a Research paper submission
     */
    removeResearchPaper(event){
        event.preventDefault()
        ResearchPaperService.removeResearchPaper(this.state.subID)
            .then(res => {
                if(res.status === 200){
                    toast.error("Research Paper Submission Removed",options)
                    this.props.history.push("/");
                }else{
                    toast.warning("Something went wrong!!,Try again.",options)
                }
            })
    }

    /**
     * this function is to capture data in the input fields
     */
    onChange(event){
        const { name, value } = event.target;
        this.setState({ [name] : value });
    }

    /**
     * this function is to capture file uploaded in th input field
     */
    handleFileInput(event){
        const file = event.target.files;
        this.setState({ file :file[0]});
    }

    /**
     * this function is check agreement checkbox is checked or not
     */
    handleCheckBox(){
        if(this.state.agreement === false){
            this.setState({agreement:true})
        }else{
            this.setState({agreement:false})
        }
    }

    render() {
        return <div id={'divisionColor'}>
            <div>
                <div className={'box'}>
                    <label className={'custom-underline'}>Update or Remove Research Paper Submission</label>
                </div>
            </div>
            <div className={'form-style-upRemResWork'}>
                <form>
                    <div>
                        <label htmlFor={'authorName'}>Author Name</label>
                        <input type={'text'} name={'authorName'} id={'authorName'} value={this.state.authorName}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'paperTitle'}>New Paper Title</label>
                        <input type={'text'} name={'paperTitle'} id={'paperTitle'} value={this.state.paperTitle}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'email'}>New Author Email</label>
                        <input type={'text'} name={'email'} id={'email'} value={this.state.email}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'file'}>Re-upload Research Paper</label>
                        <input type={'file'} name={'file'} id={'file'}
                               onChange={event => this.handleFileInput(event)} />
                        <label style={{color:'red',marginTop:'-25px'}}>*Only pdf is allowed to upload.</label>
                        <label style={{color:'red',marginBottom:'20px'}}>*Ignore this field if your not uploading an new file.</label>

                    </div>
                    <div>
                        <div id={'checkB'}><input type={'checkbox'} value={true} onChange={() => this.handleCheckBox()}/>
                            <span>By clicking this checkbox i agree i'm posting my own research works</span>
                        </div>
                        <div id={'btnDiv'}>
                            <input type={'submit'} value={'Update Paper Submission'} onClick={event => this.updateResearchPaper(event)} />
                            <input type={'submit'} id={'btnDelete'} value={'Remove Paper Submission'}
                                   onClick={event => this.removeResearchPaper(event)} />
                        </div>
                    </div>
                </form>
            </div>
            <div style={{height: '30px'}}/>
        </div>
    };
}

export default UpdateRemoveResearchPaper;