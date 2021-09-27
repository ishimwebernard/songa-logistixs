import {React} from 'react'
import { Switch, Route} from 'react-router-dom'
import AboutUs from './aboutus'
import Home from './home'
import Services from './services'
import Contact from './contact'
import Gallery from './gallery'

export default function Index() {
    return (
        <div className='bg-gray-50'>
            <Switch >
                <Route path="/" exact component={Home}/>
                <Route path="/aboutus" exact component={AboutUs}/>
                <Route path='/services' exact component={Services} />
                <Route path="/gallery" exact component={Gallery} />
                <Route path="/contact" exact component={Contact} />
            </Switch>
        </div>
    )
}
