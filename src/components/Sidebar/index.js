import { Link } from 'react-router-dom';
import './index.scss';
import LogoS from '../../assets/images/logo-s.png';

const Sidebar = ()=>{
    return (
        <div className='nav-bar'>
            Hello World from Sidebar
            <Link className='logo' to='/'>
                <img src={LogoS}/>
            </Link>
        </div>
    )
}
export default Sidebar;