import './Navbar.css';
import Logout from './Logout/Logout';
import piePic from '../../assets/pie.jpg';

const Navbar = (props) => {
    console.log(props);
    return(
        <div>
            <nav>
                <img id='piePic' src={piePic} alt='pie' />
                <Logout clearLocalStorage={props.clearLocalStorage} />
            </nav>
        </div>
    );
}


export default Navbar;