import PropTypes from 'prop-types'

const Button = ({ color, text, onClick }) => {
  return (
    <button 
      onClick={onClick}
      style={{ backgroundColor: color }} 
      className='btn'
      >
        {text}
      </button>
  )
}

Button.defaultProps = {
  color: 'steelblue',
  text: 'Add', 
}

Button.propType = {
  text: PropTypes.string,
  color: PropTypes.strings,
  onClick: PropTypes.func,
}

export default Button
