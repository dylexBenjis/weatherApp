import React from 'react'
import styled from 'styled-components'

const Nav = () => {
  return (
    <NavCon>
        ForecastApp
    </NavCon>
  )
}

export default Nav

const NavCon = styled.div`
display:flex ;
    font-size: 30px ;
    font-family: monospace ;
    font-weight: bolder ;
    color: #fff;
    @media screen and (max-width:800px){
        font-size: 30px ;
    }

`