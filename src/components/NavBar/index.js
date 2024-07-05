import {Link} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {GrApps} from 'react-icons/gr'

import './index.css'

const NavBar = () => (
  <nav className="nav">
    <div className="section">
      <div className="navigation-item">
        <IoMdHome id="home" className="icon" />
        <label htmlFor="home" className="label">
          Home
        </label>
      </div>
      <div className="navigation-item">
        <GrApps id="dashboard" className="icon" />
        <label htmlFor="dashboard" className="label">
          Dashboard
        </label>
      </div>
    </div>
    <div className="section">
      <h1 className="navigation-header">Services</h1>
      <p className="navigation-item active">
        <Link to="/">Airports</Link>
      </p>
      <p className="navigation-item">Videos</p>
    </div>
    <div className="section">
      <h1 className="navigation-header">Others</h1>
      <p className="navigation-item">List 1</p>
      <p className="navigation-item">List 2</p>
      <p className="navigation-item">List 3</p>
    </div>
  </nav>
)

export default NavBar
