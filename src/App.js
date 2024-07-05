import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import NavBar from './components/NavBar'
import Airports from './components/Airports'
import SingleAirportDetails from './components/SingleAirportDetails'

import './App.css'

// Replace your code here
const App = () => (
  <div>
    <Header />
    <div className="component">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Airports} />
        <Route exact path="/airport-details" component={SingleAirportDetails} />
      </Switch>
    </div>
  </div>
)

export default App
