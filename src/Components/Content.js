import React from 'react'
import { Switch, Route } from 'react-router'

import Home from './Content/Home';
import Services from './Content/Services'
import About from './Content/About'
import Contact from './Content/Contact'
import Footer from './Footer'

function Content() {
    return (
        <main>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                    <Footer/>
                </Route>
                <Route exact path='/services'>
                    <Services/>
                    <Footer/>
                </Route>
                <Route exact path='/about'>
                    <About/>
                    <Footer/>
                </Route>
                <Route exact path='/contact'>
                    <Contact/>
                </Route>
            </Switch>

        </main>
    )
}

export default Content;