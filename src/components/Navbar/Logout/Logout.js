import './Logout.css';
import logoutPic from '../../../assets/powerButton.png';

const Logout = (props) => {
    console.log(props);
    return(
        <div>
            <img id='logout' className='logout' src={logoutPic} alt='powerButton' onClick={props.clearLocalStorage} />
        </div>
    )
}

export default Logout;