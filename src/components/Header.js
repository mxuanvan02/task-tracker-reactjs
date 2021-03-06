import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'


const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation()

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (<Button text={ showAdd ? 'Close' : 'Add' } color={ showAdd ? 'red' : 'steelblue' } onClick={onAdd}/>)}
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propType = {
  title: PropTypes.string.isRequired,
}

// CSS in JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black' 
// }

export default Header
