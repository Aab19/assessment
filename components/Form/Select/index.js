import React from 'react'
import PropType from 'prop-types'

import SelectStyle from './Select.Style'

const Select = ({
  id,
  name,
  placeholder,
  options,
  onChange,
  containerClass,
  customClass,
}) => {
  return (
    <SelectStyle className={`${containerClass}`}>
      <select
        id={id}
        className={`bg-white px-4 py-2 border border-[#FFDDBF] rounded-lg outline-none w-full ${customClass}`}
        name={name}
        defaultValue={'none'}
        onChange={onChange}
        placeholder={placeholder}>
        <option value="none" disabled>
          Select Grade
        </option>
        {options.map((val, idx) => {
          return (
            <option key={idx} value={val}>
              {val}
            </option>
          )
        })}
      </select>
    </SelectStyle>
  )
}

Select.propTypes = {
  id: PropType.string,
  name: PropType.string,
  placeholder: PropType.string,
  option: PropType.array,
  onChange: PropType.func,
  containerClass: PropType.string,
  customClass: PropType.string,
}

Select.defaultProps = {
  placeholder: 'Please Select',
  options: [],
  onChange: () => {},
}

export default React.memo(Select)
