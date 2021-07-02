import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Home from "./components/Home";
import AddResearchPaper from "./components/conference/AddResearchPaper";
import ReviewerResearchView from "./components/conference/ReviewerResearchView";
import ReviewerWorkshopView from "./components/conference/ReviewerWorkshopView";
import ResearchView from "./components/conference/ResearchView";
import WorkShopView from "./components/conference/WorkShopView";
import UpdateRemoveResearchPaper from "./components/conference/Update&RemoveResearchPaper";
import UpdateRemoveWorkshop from "./components/conference/Update&RemoveWorkshop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CallForPaper from "./components/main/CallForPaper";
import WorkshopSubmission from "./components/main/WorkshopSubmission";
import AddWorkShop from "./components/conference/AddWorkShop";
import PaperSubmission from "./components/main/PaperSubmission";
import ImportantDates from "./components/main/ImportantDates";
import About from "./components/main/About";
import WorkShopAllView from "./components/main/WorkshopAllView";
import AttendeesRegistration from "./components/main/AttendeesRegistration";
import LoginRegisterHandler from "./components/user/LoginRegisterHandler";
import UserProfile from "./components/user/UserProfile";
import AdminCreateUser from "./components/user/AdminCreateUser";
import ResearchersPayment from "./components/user/ResearchersPayment";
import AttendeesPayment from "./components/user/AttendeesPayment";
import AttendeesTickets from "./components/user/AttendeesTickets";
import TemplatesDownload from "./components/user/TemplatesDownload";
import ListConferenceComponent from "./components/admin/ListConferenceComponent";
import CreateConferenceComponent from "./components/admin/CreateConferenceComponent";
import EditorViewConferenceComponent from "./components/admin/EditorViewConferenceComponent";
import Workshops from "./components/admin/Workshops";
import EditConferenceComponent from "./components/admin/EditConferenceComponent";
import AdminApproveOrRejectComponent from "./components/admin/AdminApproveOrRejectComponent";
import DisplayConferenceContents from "./components/admin/DisplayConferenceContents";
import AdminDashboard from "./components/admin/AdminDashboard";
import AdminViewUsers from "./components/admin/AdminViewUsers";


class App extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return <Router forceRefresh={true}>
            <Header />
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route  path="/about" component={About}/>
                <Route  path="/callForPaper" component={CallForPaper}/>
                <Route  path="/importantDates" component={ImportantDates}/>
                <Route  path="/paperSubmission" component={PaperSubmission}/>
                <Route  path="/workShopAllView" component={WorkShopAllView}/>
                <Route  path="/workshopSubmission" component={WorkshopSubmission}/>
                <Route  path="/attendeesRegistration" component={AttendeesRegistration}/>

                <Route  path="/addResearchPaper" component={AddResearchPaper}/>
                <Route  path="/addWorkShop" component={AddWorkShop}/>
                <Route  path="/researchView" component={ResearchView}/>
                <Route  path="/workShopView" component={WorkShopView}/>
                <Route  path="/reviewerResearchView" component={ReviewerResearchView}/>
                <Route  path="/reviewerWorkshopView" component={ReviewerWorkshopView}/>
                <Route  path="/updateResearchPaper/:id" component={UpdateRemoveResearchPaper}/>
                <Route  path="/updateWorkShop/:id" component={UpdateRemoveWorkshop}/>

                <Route path="/login/:id" component={LoginRegisterHandler}/>
                <Route path="/register/:id" component={LoginRegisterHandler}/>
                <Route path="/userProfile" component={UserProfile} />
                <Route path="/adminCreateUser" component={AdminCreateUser} />
                <Route path="/researchersPayment" component={ResearchersPayment} />
                <Route path="/attendeesPayment" component={AttendeesPayment} />
                <Route path="/attendeesTickets" component={AttendeesTickets} />
                <Route path="/templatesDownload" component={TemplatesDownload} />

                <Route path ="/add-conference/:id/:name/:title" component ={CreateConferenceComponent}/>
                <Route path ="/view-conference/:id" component ={EditorViewConferenceComponent}/>
                <Route  path="/display-workshops" component={Workshops}/>
                <Route  path="/list-ContentView" component={ListConferenceComponent}/>
                <Route  path="/update-conference/:id" component={EditConferenceComponent}/>
                <Route path="/approve-conference/:id" component={AdminApproveOrRejectComponent}/>
                <Route  path="/display-conference/:id" component={DisplayConferenceContents}/>
                <Route  path="/adminDashboard/" component={AdminDashboard}/>
                <Route  path="/adminViewUser/" component={AdminViewUsers}/>
            </Switch>
            <Footer/>
        </Router>
    }
}

export default App;