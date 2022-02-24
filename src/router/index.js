import React from 'react';
import { Route, Routes} from 'react-router-dom'
import Home from '../views/Home';
import About from '../views/About';
import Navbar from '../Components/Navbar';
import NotFound from '../views/errors/NotFound';
import Login from '../views/auth/Login';
import Index from '../views/users';
import Show from '../views/users/show';
function Router(props) {
    return (
        
            <Routes>
                
            <Route path='/' element={[<Navbar/>,<Home/>]} />
            <Route path='/About' element={[<Navbar/>,<About/>]} />
            <Route path='/users' element={[<Navbar/>,
            <div className="container py-4">
                <Index/>
            </div>
            ]} />
            <Route path='/Show/:identifier' element={[<Navbar/>,
            <div className="container py-4">
                <Show/>
            </div>
            ]} />
            <Route path='/Login' element={[<Navbar/>,<Login/>]} />
            <Route path='*' element={<NotFound/>} />
            
            </Routes>
                
        
        
    );
}

export default Router;