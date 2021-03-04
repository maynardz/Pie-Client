import './Navbar.css';
import Logout from './Logout/Logout';
import piePic from '../../assets/pie.jpg';

const Navbar = () => {
    return(
        <div>
            <nav>
                <img id='piePic' src={piePic} alt='pie' />
                <Logout />
            </nav>
        </div>
    );
}


export default Navbar;