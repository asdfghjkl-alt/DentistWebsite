import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import BookingList from './components/Bookings/BookingList';
import BookingsForPatient from './components/Bookings/BookingsForPatient';
import DoctorList from './components/Doctors/DoctorList';
import PatientsList from './components/Patients/PatientsList';
import PatientRegistration from './components/Patients/PatientRegistration';
import BookingAdd from "./components/Bookings/BookingAdd"
import contact from './components/Contact';
import Home from './components/Home/Home';
import About from './components/About/About';
import OurClinic from './components/About/OurClinic';
import OurTech from './components/About/OurTech';
import Invisalign from './components/Offers/Invisalign';
import Offers from './components/Offers/Offers';
import DoctorAdd from "./components/Doctors/DoctorAdd"
import DentalPlan from './components/Offers/DentalPlan';
import NewPatient from './components/Offers/NewPatient';
import Services from './components/Services/Services';
import GumDisease from './components/Services/GumDisease';
import ChildrenDentist from './components/Services/ChildrenDentist';
import Orth from './components/Services/Orth';

function App() {
  return (
    <Router>
      <div>
        <Navbar style={{ position: 'sticky' }} />
        <Route exact path='/' component={Home} />
        <Route exact path='/bookings' component={BookingList} />
        <Route
          exact
          path='/bookings-for-patient'
          component={BookingsForPatient}
        />
        <Route exact path='/doctors' component={DoctorList} />
        <Route exact path='/patients' component={PatientsList} />
        <Route
          exact
          path='/patients/registration'
          component={PatientRegistration}
        />
        <Route
          exact
          path='/patients/list'
          component={PatientsList}
        />
        <Route exact path = "/bookings/add" component = {BookingAdd} />
        <Route exact path='/contact' component={contact} />
        <Route exact path='/about' component={About} />
        <Route exact path='/about/team' component={OurClinic} />
        <Route exact path='/about/ourtech' component={OurTech} />
        <Route exact path='/offers/invisalign' component={Invisalign} />
        <Route exact path='/offers' component={Offers} />
        <Route exact path='/offers/plan' component={DentalPlan} />
        <Route exact path='/offers/patient' component={NewPatient} />
        <Route exact path='/services' component={Services} />
        <Route exact path='/services/fillings' component={GumDisease} />
        <Route exact path='/services/child' component={ChildrenDentist} />
        <Route exact path='/services/orthodontics' component={Orth} />
        <Route exact path = "/doctors/add" component = {DoctorAdd} />
      </div>
    </Router>
  );
}

export default App;
