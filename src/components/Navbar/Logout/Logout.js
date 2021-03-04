import './Logout.css';
import logoutPic from '../../../assets/powerButton.png';

const Logout = () => {
    return(
        <div>
            <img id='logout' className='logout' src={logoutPic} alt='powerButton' />
        </div>
    )
}

export default Logout;