// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from './header/header'
import Body from './body/body'
import Internsbtn from './interns/internsbtn'
import Search from './search/search'
import Magazine from './magazine/magazine'
// import { Card } from 'react-bootstrap'
// import Card from './card/card'

function Landing() {
    return (
       <>
        <Header />
        <Body />
        <Internsbtn/>
        <Search/>
        <Magazine/>
        {/* <Card /> */}
        </>
    )
}

export default Landing
