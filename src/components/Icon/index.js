import React from 'react'
import github from './github.svg'
import linkedin from './linkedin.svg'
import medium from './medium.svg'
import twitter from './twitter.svg'

const styles = {
  height: 32,
  width: 32,
  padding: 20
}

const icons = {
  github,
  linkedin,
  medium,
  twitter
}

export const Icon = (props) => {
  const { name } = props
  return (
    <img style={styles} src={icons[name]} />
  )
}
