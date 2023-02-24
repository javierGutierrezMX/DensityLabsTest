import React from 'react'
import { NavLink } from 'react-router-dom'
import {AppBar, Toolbar, styled} from '@mui/material'

const HeaderNav = styled(AppBar)`
background: #111111;
`;

const TabsNav= styled(NavLink)`
color: #FFFFFF;
`

function NavBar() {
  return (
    <HeaderNav position="static">
        <Toolbar>
            <TabsNav to='home'>Home</TabsNav>
        </Toolbar>
    </HeaderNav>
  )
}

export default NavBar