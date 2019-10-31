import React from 'react'
import avatar from './avatar-emoji.png'

const styles = {
  borderRadius: '50%',
  height: 120,
  width: 120,
  boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  background: 'white'
}

export const Avatar = (props) => {
  return (
    <img style={styles} src={avatar} />
  )
}
