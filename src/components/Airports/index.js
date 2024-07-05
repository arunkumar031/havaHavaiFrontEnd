import {Link} from 'react-router-dom'
import {IoSquareOutline} from 'react-icons/io5'
import {MdEdit, MdDelete, MdArrowDownward} from 'react-icons/md'

import './index.css'

const airportsList = [
  {
    id: 'igia',
    name: 'Indra Gandhi International Airport',
    country: 'India',
    code: 'DEL',
    terminals: 3,
  },
  {
    id: 'dia',
    name: 'Dubai International Airport',
    country: 'UAE',
    code: 'DXB',
    terminals: 5,
  },
  {
    id: 'ha',
    name: 'Heathrow Airport',
    country: 'England',
    code: 'LHR',
    terminals: 6,
  },
  {
    id: 'ia',
    name: 'Istanbul Airport',
    country: 'Turkey',
    code: 'IST',
    terminals: 3,
  },
  {
    id: 'rgia',
    name: 'Rajiv Gandhi International Airport',
    country: 'Texas',
    code: 'DFW',
    terminals: 14,
  },
]

const Airports = () => (
  <div className="airports">
    <div className="airports-header-container">
      <h1 className="airports-header">Airports</h1>
      <button type="button" className="add-new-btn">
        + Add New
      </button>
    </div>
    <ul className="airports-list">
      <li className="airport">
        <div className="table-icon">
          <IoSquareOutline />
        </div>
        <div className="table-name-header">
          <h1 className="table-header">Airports</h1>
          <MdArrowDownward className="header-icon" />
        </div>
        <h1 className="table-country-header table-header">Country</h1>
        <h1 className="table-code-header table-header">Code</h1>
        <h1 className="table-terminals-header table-header">Terminals</h1>
      </li>
      {airportsList.map(eachAirport => (
        <li key={eachAirport.id} className="airport">
          <div className="table-icon">
            <IoSquareOutline />
          </div>
          <p className="table-name">
            <Link to="/airport-details">{eachAirport.name}</Link>
          </p>
          <p className="table-country">{eachAirport.country}</p>
          <p className="table-code">{eachAirport.code}</p>
          <p className="table-terminals">{eachAirport.terminals}</p>
          <button className="table-icon" type="button">
            <MdEdit aria-label="edit" />
          </button>
          <button className="table-icon" type="button">
            <MdDelete aria-label="delete" />
          </button>
        </li>
      ))}
    </ul>
  </div>
)

export default Airports
