import React from 'react';
import { Route, Routes} from 'react-router-dom'
import Home from '../views/Home';
import About from '../views/About';
function Router(props) {
    return (
        
            <Routes>
                
            <Route path='/' element={<Home/>} />
            <Route path='/About' element={<About/>} />
            </Routes>
                
        
        
    );
}

export default Router;