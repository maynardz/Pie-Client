import {useState} from 'react';
import './Pies.css';

const Pies = (props) => {

    const [pies, setPies] = useState([]);

    return(
        <table>
            <thead>
                <tr>
                    <th>Name of Pie</th>
                    <th>Base of Pie</th>
                    <th>Crust</th>
                    <th>Bake Time</th>
                    <th>Servings</th>
                    <th>Rating</th>
                </tr>
            </thead>
            <tbody>
                {/* this will be where we display the info fetched from the server */}
            </tbody>
        </table>
    );
};

export default Pies;