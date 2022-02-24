import React from 'react';
import { useRecoilState } from 'recoil';
import {theme} from '../store'
function Home(props) {
    const [currentTheme, setCurrentTheme] = useRecoilState(theme)
    const defaultTheme = currentTheme == 'dark' ? 'bg-dark text-white' : 'bg-white text-dark'
    return (
        <div className={`container-fluid ${defaultTheme} vh-100`}>

        <div className='container py-4'>
            you're selecting the {currentTheme} theme.  
            <div className="row">
                <div className="col-md-4">
                    <select value={currentTheme} onChange={(e) =>setCurrentTheme(e.target.value)} id="" className="form-control">
                        <option value="dark">Dark</option>
                        <option value="white">white</option>
                    </select>
                </div>
            </div>
        </div>
        </div>
    );
}

export default Home;