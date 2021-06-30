import React from "react";
import '../../styles/conference/Res&Work.css';
import '../../styles/toast.css';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from "react-toastify";
import ResearchPaperService from "../../services/ResearchPaperServices";
import FileUploadService from "../../services/FileUploadService";
toast.configure();

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

class AddResearchPaper extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            authorName:'',
            paperTitle:'',
            email:'',
            file:[],

            agreement:false
        }
    }

    componentDidMount() {
        if(localStorage.getItem('_id') === null ){
            this.props.history.push('/');
        }
    }

    /**
     * This function is to submit Research paper and details
     */
    submitResearchPaper(event){
        event.preventDefault();

        let researchPaper = {
            userID:'123456',
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
        }else if (this.state.file.length === 0){
            toast.warning("Attach the Research Paper", options)
        }else if (this.state.agreement === false){
            toast.warning("Please Agree to Terms&Conditions.", options)
        }else{
           /**
            * uploading the file in to the aws cloud and storing
            * the details in mongodb
            */
            FileUploadService.FileUploads(this.state.file)
                .then(response =>{
                    researchPaper.researchPFileLocation = response.url
                    ResearchPaperService.submitResearchPaper(researchPaper)
                        .then(res => {
                            if(res.status === 200){
                                toast.success("Research Paper Submitted Successfully",options)
                            }else{
                                toast.error("Something went wrong!! Try again.",options)
                            }
                        })
                })
        }
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
                    <label className={'custom-underline'}>New Research Paper Submission</label>
                </div>
            </div>
            <div className={'form-style-resWork'}>
                <form>
                    <div>
                        <label htmlFor={'authorName'}>Author Name</label>
                        <input type={'text'} name={'authorName'} id={'authorName'} value={this.state.authorName}
                                required onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'paperTitle'}>Paper Title</label>
                        <input type={'text'} name={'paperTitle'} id={'paperTitle'} value={this.state.paperTitle}
                               required onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'email'}>Author Email</label>
                        <input type={'text'} name={'email'} id={'email'} value={this.state.email}
                               required onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'file'}>Upload Research Paper</label>
                        <input type={'file'} name={'file'} id={'file'}
                                onChange={event => this.handleFileInput(event)} />
                        <label style={{color:'red',marginTop:'-20px',marginBottom:'20px'}}>*Only pdf is allowed to upload.</label>
                    </div>
                    <div>
                        <div id={'checkB'}>
                            <input type={'checkbox'} name={'agreement'} value={true} onChange={() => this.handleCheckBox()} />
                            <span>By clicking this checkbox i agree i'm posting my own research works</span>
                        </div>
                        <input type={'submit'} value={'Submit Research Paper'} onClick={ event => this.submitResearchPaper(event)} />
                    </div>
                </form>
            </div>
            <div style={{height: '30px'}}/>
        </div>
    };
}

export default AddResearchPaper;