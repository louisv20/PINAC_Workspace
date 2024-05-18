import { useState } from 'react'
import PropTypes from 'prop-types'
import './style/DropdownMenu.css'

// Icon
import arrowDownSvg from '../../assets/icon/arrow_down.svg'

export const DropdownMenu = (props) => {
  const [isActive, setIsActive] = useState(false)

  const openMenu = () => {
    setIsActive(!isActive)
  }

  DropdownMenu.propTypes = {
    optionList: PropTypes.array.isRequired
  }

  const showEachOption = () => {
    return props.optionList.map((option, index) => <li key={index}>{option}</li>)
  }

  return (
    <div className="dropdown">
      <div className="selector">
        <span>Dropdown</span>
        <button onClick={openMenu}>
          <img src={arrowDownSvg} className="changeable-icon" />
        </button>
      </div>
      <div className={`dropdown-menu ${isActive ? 'active' : ''}`}>
        <ul>{showEachOption()}</ul>
      </div>
    </div>
  )
}
