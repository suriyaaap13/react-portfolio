import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import Home from '../Home';
import './index.scss';


const Layout = ()=>{
    return (
        <div className="App">
            <Sidebar/>
            <div className="page">
                <span className='tags top-tags'>&lt;body&gt;</span>
                <Home/>
                <span className='tags bottom-tags'>
                    &lt;body&gt;
                    <br/>
                    <span className='bottom-tag-html'>
                        
                    </span>
                </span>
            </div>
        </div>
    );
}

export default Layout;