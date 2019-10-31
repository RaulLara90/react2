import React from 'react'
import Switch from 'react-switch'

const wrapperStyles = {
  position: 'fixed',
  top: 24,
  right: 24,
  zIndex: 10
}

const Toggle = (props) => {
  return (
    <div style={wrapperStyles}>
      <Switch
        // onChange={onChange}
        // checked={checked}
        onColor='#282c34'
        offColor='#BBB8B2'
        offHandleColor='#282c34'
        onHandleColor='#BBB8B2'
        checkedIcon={false}
        uncheckedIcon={false}
      />
    </div>
  )
}

export { Toggle }
