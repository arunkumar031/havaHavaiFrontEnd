import Popup from 'reactjs-popup'

import {HiOutlineDotsHorizontal} from 'react-icons/hi'
import {RiUpload2Fill} from 'react-icons/ri'
import {IoMdSwitch} from 'react-icons/io'
import {MdEdit, MdDelete, MdArrowDownward} from 'react-icons/md'

import './index.css'

const terminalList = [
  {
    id: 1,
    name: 'Terminal 1',
    image:
      'https://res.cloudinary.com/dhwe05vrp/image/upload/v1720159728/Image_zr94dy.png',
    description: 'Optional metadata should be two lines.',
  },
  {
    id: 2,
    name: 'Terminal 2',
    image:
      'https://res.cloudinary.com/dhwe05vrp/image/upload/v1720159728/Image_zr94dy.png',
    description: 'Optional metadata should be two lines.',
  },
]

const SingleAirportDetails = () => (
  <div className="airport-details">
    <p className="airport-navigator">
      Airports {`${'> '}`}
      <span className="navigator-header">
        Indira Gandhi International Airport
      </span>
    </p>
    <h1 className="airport-header">Indira Gandhi International Airport</h1>
    <div className="menu-container">
      <p className="menu-option active-menu">Terminals</p>
      <p className="menu-option">Transport</p>
      <p className="menu-option">Contact Details</p>
    </div>
    <div className="terminal-container">
      <ul className="terminal-list">
        {terminalList.map(eachTerminal => (
          <li key={eachTerminal.id} className="terminal-card">
            <img
              src={eachTerminal.image}
              alt={eachTerminal.name}
              className="terminal-img"
            />
            <div className="terminal-text">
              <div className="terminal-header-container">
                <h1 className="terminal-header">{eachTerminal.name}</h1>
                <button type="button" className="icon">
                  <HiOutlineDotsHorizontal aria-label="menu" />
                </button>
              </div>
              <p className="terminal-description">{eachTerminal.description}</p>
            </div>
          </li>
        ))}
      </ul>
      <Popup
        modal
        trigger={
          <button type="button" className="add-terminal-btn">
            +Add Terminal
          </button>
        }
        position="center"
      >
        {close => (
          <div className="popup">
            <h1 className="popup-header">Terminal title</h1>
            <p className="popup-description">Description</p>
            <div className="popup-btn-container">
              <button type="button" className="upload-btn">
                <RiUpload2Fill />
                Upload
              </button>
              <div className="popup-btn-container">
                <button
                  type="button"
                  onClick={() => close()}
                  className="popup-cancel-btn"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() => close()}
                  className="popup-continue-btn"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}
      </Popup>
    </div>
    <h1 className="service-header">Services</h1>
    <div className="underline-description-container">
      <p className="underline-description">Lost & Found</p>
      <MdDelete />
    </div>
    <div className="input-save-container">
      <div className="input-container">
        <div className="input-label">
          <label htmlFor="service" className="label-text">
            Service Name
          </label>
          <p id="service" className="small-input">
            Lost & Found
          </p>
        </div>
        <div className="input-label">
          <label htmlFor="category" className="label-text">
            Category
          </label>
          <select id="category" className="dropdown">
            <option>Option 1</option>
          </select>
        </div>
        <div className="input-label">
          <label htmlFor="subCategory" className="label-text">
            Sub Category
          </label>
          <select id="subCategory" className="dropdown">
            <option>Option 2</option>
          </select>
        </div>
        <button type="button" className="upload-btn">
          <RiUpload2Fill />
          Upload
        </button>
        <button type="button" className="show-image-btn">
          <IoMdSwitch />
          Show image
        </button>
        <div>
          <label htmlFor="description" className="label">
            Description
          </label>
          <p id="description" className="input">
            type here
          </p>
        </div>
      </div>
      <button type="button" className="save-btn">
        Save
      </button>
    </div>
    <div className="underline-description-container">
      <p className="underline-description">Lounge</p>
      <MdDelete />
    </div>
    <div className="underline-description-container">
      <p className="underline-description">Money Exchange</p>
      <MdDelete />
    </div>
  </div>
)

export default SingleAirportDetails
