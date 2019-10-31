import React, { useState, useEffect } from 'react'
import { Text } from './components/Text'
import { Avatar } from './components/Avatar'
import { Icon } from './components/Icon'
import styled from 'styled-components'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

const Layout = styled.div`
  display: flex;
  overflow: auto;
  height: 100vh;
  background: #D7F2BA;
  ${props => props.background && `background: ${props.background};`}
  ${props => props.styles && props.styles}
`

const Fixed = styled.div`
  height: 100vh;
  position: fixed;
  background: #79B4A9;
  right: 0;
  width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
`

const LeftSide = styled.div`
  padding: 40px 500px 40px 20px;
  flex-grow: '1';
`

const Spacing = styled.div`
  ${props => props.height && `height: ${props.background}px;`}
`

const IconsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`

const App = (props) => {
  const scroll = useScroll(0)
  return (
    <BrowserRouter>
      <Layout>
        <Fixed>
          <Avatar scroll={scroll} />
          <Spacing height='20' />
          <Text title>👋 Im Carlos P. Jimeno</Text>
          <Text title>Front end lead at
            <a href='https://www.influencity.com'>influencity </a>
          </Text>
          <ul>
            <Text color='red'>
              <Link to='/'>Home</Link>
            </Text>
            <Text color='yellow'>
              <Link to='/about'>About</Link>
            </Text>
            <Text color='purple'>
              <Link to='/users'>About</Link>
            </Text>
          </ul>
          <Spacing height='40' />
          <IconsContainer>
            <Icon name='github' />
            <Icon name='twitter' />
            <Icon name='medium' />
            <Icon name='linkedin' />
          </IconsContainer>
        </Fixed>
        <LeftSide>
          <Switch>
            <Route path='/about'>
              <Text color='black'>ABOUT</Text>
            </Route>
            <Route path='/users'>
              <Text color='black'>USERS</Text>
            </Route>
            <Route path='/'>
              <Text color='black'>HOME</Text>
            </Route>
          </Switch>

        </LeftSide>
      </Layout>
    </BrowserRouter>
  )
}

const useScroll = (defaultValue) => {
  const [scroll, setScroll] = useState(defaultValue)
  useEffect(() => {
    document.addEventListener('scroll', handleScroll, true)
    return (
      document.removeEventListener('scroll', handleScroll)
    )
  }, [])

  const handleScroll = (e) => {
    const height = e.target.scrollTop
    setScroll(height)
  }

  return scroll
}

export default App
