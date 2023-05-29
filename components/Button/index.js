import React from 'react'
import PropType from 'prop-types'

import ButtonStyle from './Button.Style'

const Button = ({id, text, containerClass, customClass, disabled, onClick}) => {
  return (
    <ButtonStyle className={`cursor-pointer ${containerClass}`}>
      <button
        id={id}
        className={`bg-[#FFDDBF] text-[#403903] font-semibold px-6 py-2 rounded-lg ${customClass}`}
        disabled={disabled}
        onClick={onClick}>
        {text}
      </button>
    </ButtonStyle>
  )
}

Button.propTypes = {
  id: PropType.string,
  text: PropType.string.isRequired,
  containerClass: PropType.string,
  customClass: PropType.string,
  disabled: PropType.bool,
  onClick: PropType.func,
}

Button.defaultProps = {
  text: 'Button',
  containerClass: '',
  customClass: '',
  disabled: false,
  onClick: () => {},
}

export default React.memo(Button)
