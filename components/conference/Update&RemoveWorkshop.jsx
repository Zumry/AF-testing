import React from "react";
import {Link} from "react-router-dom";
import '../../styles/conference/upRemRes&Work.css'
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

class UpdateRemoveWorkshop extends React.Component{
    constructor(props) {
        super(props);
        this.state ={
            wsID:this.props.match.params.id,
            userID:'',
            presenterName:'',
            workShopTitle:'',
            email:'',
            affiliation:'',
            contactNo:'',
            conductorNames:'',
            file:[],
            names:[],


            agreement:false,
            oldFileLocation:'',
            oldNames:[]
        }
    }

    /**
     * Mounting Workshop proposal submission details of the relevant user to update form
     */
    componentDidMount() {
        if(localStorage.getItem('_id') === null && localStorage.getItem('type') !== 'WorkshopConductor' ){
            this.props.history.push('/');
        }else {
            WorkShopServices.getWorkShopByID(this.state.wsID)
                .then(res => {
                    console.log(res)
                    this.setState({
                        presenterName: res.presenterName,
                        workShopTitle: res.workShopTitle,
                        email: res.email,
                        affiliation: res.affiliation,
                        contactNo: res.contactNumber,
                        userID: res.userID,
                        oldFileLocation: res.fileLocation,
                        oldNames: res.conductorNames

                    })
                })
                .catch(err => console.error(err));
        }
    }

    /**
     *  This method is to update Workshop proposal
     */
    updateWorkShop(event){
        event.preventDefault();

        let WorkShop = {
            userID:this.state.userID,
            presenterName:this.state.presenterName,
            workShopTitle:this.state.workShopTitle,
            email:this.state.email,
            affiliation:this.state.affiliation,
            contactNumber:this.state.contactNo,
            conductorNames:this.state.names,
            fileLocation:''
        }

        /**
         * Validating the Workshop submission input fields
         * Displaying Error message if any input field is empty
         */
        if(WorkShop.workShopTitle === ''){
            toast.warning("Fill Workshop Title!!", options);
        }else if(WorkShop.presenterName === ''){
            toast.warning("Fill Presenter Name!!",options )
        }else if (WorkShop.email === ''){
            toast.warning("Fill Email Address!!", options)
        }else if (WorkShop.affiliation === ''){
            toast.warning("Add Affiliation!!", options)
        }else if (WorkShop.contactNo === ''){
            toast.warning("Add Contact Number!!", options)
        }else if (this.state.agreement === false){
            toast.warning("Please Agree to Terms&Conditions.", options)
        }else{

            if(WorkShop.conductorNames.length === 0){
                WorkShop.conductorNames = [...this.state.oldNames]
            }

            if(this.state.file.length !== 0){
                FileUploadService.FileUploads(this.state.file)
                    .then(response =>{
                        WorkShop.fileLocation = response.url
                        WorkShopServices.submitWorkShop(WorkShop)
                            .then(res => {
                                if(res.status === 200){
                                    toast.success("Workshop Proposal Updated Successfully",options)
                                    setTimeout(()=>{this.props.history.push("/workShopView")},3000)
                                }else{
                                    toast.error("Something went wrong!! Try again.",options)
                                }
                            })
                    })
            }else{
                WorkShop.fileLocation = this.state.oldFileLocation
                WorkShopServices.updateWorkShop(this.state.wsID,WorkShop)
                    .then(res => {
                        if(res.status === 200){
                            toast.success("WorkShop Proposal Updated Successfully",options)
                            setTimeout(()=>{this.props.history.push("/workShopView")},3000)
                        }else{
                            toast.error("Something went wrong!!,Try again.",options)
                        }
                    })
            }
        }
    }

    /**
     *  This method is to Remove Research Paper Submission
     */
    removeWorkShop(event){
        event.preventDefault()
        WorkShopServices.removeWorkShop(this.state.wsID)
            .then(res => {
                if(res.status === 200){
                    toast.error("WorkShop Proposal Removed",options)
                    setTimeout(()=>{this.props.history.push("/workShopView")},3000)
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
        return <div>
            <div>
                <div className={'box'}>
                    <label className={'custom-underline'}>Update or Remove Workshop Submission</label>
                </div>
            </div>
            <div className={'form-style-upRemResWork'}>
                <form>
                    <div>
                        <label htmlFor={'workShopTitle'}>New WorkShop Title</label>
                        <input type={'text'} name={'workShopTitle'} id={'workShopTitle'} value={this.state.workShopTitle}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'presenterName'}>Presenter Name</label>
                        <input type={'text'} name={'presenterName'} id={'presenterName'} value={this.state.presenterName}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'email'}>New Email</label>
                        <input type={'text'} name={'email'} id={'email'} value={this.state.email}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'affiliation'}>New Affiliation</label>
                        <input type={'text'} name={'affiliation'} id={'affiliation'} value={this.state.affiliation}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'contactNo'}>New Contact Number</label>
                        <input type={'text'} name={'contactNo'} id={'contactNo'} value={this.state.contactNo}
                               onChange={event => this.onChange(event)} />
                    </div>
                    <div>
                        <label htmlFor={'conductorNames'}>Workshop Conductors Names</label><br/>
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
                        <label style={{color:'red',marginTop:'10px'}}>*Ignore this field if your not going to update Workshop Conductors Names.</label>
                        <br/>
                    </div>
                    <div>
                        <label htmlFor={'file'}>Re-upload Workshop Proposal Document</label>
                        <input type={'file'} name={'file'} id={'file'}
                               onChange={event => this.handleFileInput(event)} />
                        <label style={{color:'red',marginTop:'-25px'}}>*Only pdf is allowed to upload.</label>
                        <label style={{color:'red',marginBottom:'25px'}}>*Ignore this field if your not uploading an new file.</label>
                    </div>
                    <div>
                        <div id={'checkB'}><input type={'checkbox'} value={true} onChange={() => this.handleCheckBox()}/>
                            <span>By clicking this checkbox i agree i'm posting my own works</span>
                        </div>
                        <div id={'btnDiv'}>
                            <input type={'submit'} value={'Update Workshop Details'} onClick={event => this.updateWorkShop(event)}/>
                            <input type={'submit'} id={'btnDelete'} value={'Remove Workshop Details'}
                                   onClick={event => this.removeWorkShop(event)}/>
                        </div>
                    </div>
                </form>
            </div>
            <div style={{height: '30px'}}/>
        </div>
    };
}

export default UpdateRemoveWorkshop;