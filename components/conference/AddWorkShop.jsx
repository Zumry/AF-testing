import React from "react";
import {Link} from "react-router-dom";
import '../../styles/conference/Res&Work.css'
import {toast} from "react-toastify";
import WorkShopServices from "../../services/WorkShopServices";
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

class AddWorkShop extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            presenterName:'',
            workShopTitle:'',
            email:'',
            affiliation:'',
            contactNo:'',
            file:[],
            names:[],

            agreement:false
        }
    }

    componentDidMount() {
        if(localStorage.getItem('_id') === null ){
            this.props.history.push('/');
        }
    }

    /**
     * This function is to submit Workshop proposal
     */
    submitWorkShop(event){
        event.preventDefault();

        let WorkShop = {
            presenterName:this.state.presenterName,
            workShopTitle:this.state.workShopTitle,
            email:this.state.email,
            affiliation:this.state.affiliation,
            contactNo:this.state.contactNo,
            conductorNames:this.state.names,
            fileLocation:'',
        }

        /**
         * Validating the Workshop submission input fields
         * Displaying Error message if any input field is empty
         */
        if(WorkShop.workShopTitle === ''){
            toast.warning("Fill Workshop Title", options);
        }else if(WorkShop.presenterName === ''){
            toast.warning("Fill Presenter Name",options )
        }else if (WorkShop.email === ''){
            toast.warning("Fill Email Address", options)
        }else if (WorkShop.affiliation === ''){
            toast.warning("Add Affiliation", options)
        }else if (WorkShop.contactNo === ''){
            toast.warning("Add Contact Number", options)
        }else if (this.state.file.length === 0){
            toast.warning("Attach Proposal Document", options)
        } else if (WorkShop.conductorNames === 0){
            toast.warning("Enter Workshop Conductor Names", options)
        }else if (this.state.agreement === false){
            toast.warning("Please Agree to Terms&Conditions.", options)
        }else{
            FileUploadService.FileUploads(this.state.file)
                .then(response =>{
                    WorkShop.fileLocation = response.url
                    WorkShopServices.submitWorkShop(WorkShop)
                        .then(res => {
                            if(res.status === 200){
                                toast.success("Workshop Proposal Submitted Successfully",options)
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

    /**
     * this function is capture names in the dynamically
     * populated input field and storing those names in an state array
     */
    handleChangeOnNames(i, event) {
        let names = [...this.state.names];
        names[i] = event.target.value;
        this.setState({ names });
    }

    /**
     * this function is to dynamically create input field to add Workshop conductors names
     */
    addClick(){
        this.setState(prevState => ({ names: [...prevState.names, '']}))
    }

    /**
     * this function is to remove dynamically created input field
     */
    removeClick(i){
        let names = [...this.state.names];
        names.splice(i,1);
        this.setState({ names });
    }


    render() {
        return <div id={'divisionColor'}>
            <div>
                <div className={'box'}>
                    <label className={'custom-underline'}>New Workshop Submission</label>
                </div>
            </div>
            <div className={'form-style-resWork'}>
                <form>
                    <div>
                        <label htmlFor={'workShopTitle'}>WorkShop Title</label>
                        <input type={'text'} name={'workShopTitle'} id={'workShopTitle'} value={this.state.workShopTitle}
                               required={'required'} onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'presenterName'}>Presenter Name</label>
                        <input type={'text'} name={'presenterName'} id={'presenterName'} value={this.state.presenterName}
                               required onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'affiliation'}>Affiliation</label>
                        <input type={'text'} name={'affiliation'} id={'affiliation'} value={this.state.affiliation}
                               required onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'contactNo'}>Contact Number</label>
                        <input type={'text'} name={'contactNo'} id={'contactNo'} value={this.state.contactNo}
                               required onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'conductorNames'}>Workshop Constructors Names</label><br/>
                        {
                            this.state.names.map((el, i) =>
                                <div key={i}>
                                    <input type="text" className={'fieldSt'} placeholder={'Name'} value={el||''} onChange={this.handleChangeOnNames.bind(this, i)} />
                                    <input type='button' className={'nameBtn'} value='-' onClick={this.removeClick.bind(this, i)}/>
                                    <br/>
                                </div>
                            )
                        }
                        <input type='button' value='Add Names' onClick={this.addClick.bind(this)}/>
                        <br/>
                    </div>
                    <div>
                        <label htmlFor={'file'}>Upload Workshop Proposal Document</label>
                        <input type={'file'} name={'file'} id={'file'}
                               onChange={event => this.handleFileInput(event)} />
                        <label style={{color:'red',marginTop:'-20px',marginBottom:'20px'}}>*Only pdf is allowed to upload.</label>
                    </div>
                    <div>
                        <div id={'checkB'}>
                            <input type={'checkbox'} type={'checkbox'} name={'agreement'} value={true} onChange={() => this.handleCheckBox()}/>
                            <span>By clicking this checkbox i agree i'm posting my own works</span>
                        </div>
                        <input type={'submit'} value={'Submit Workshop'} onClick={event => this.submitWorkShop(event)} />
                    </div>
                </form>
            </div>
            <div style={{height: '30px'}}/>
        </div>
    };
}

export default AddWorkShop;