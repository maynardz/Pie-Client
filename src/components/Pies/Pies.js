import {useState, useEffect} from 'react';
import './Pies.css';

import DisplayPies from './DisplayPies/DisplayPies';
import CreatePie from './CreatePie/CreatePie';

const Pies = (props) => {
    console.log(props);

    const [pies, setPies] = useState([]);
    const [createPie, setCreatePie] = useState(false);
    console.log(pies);

    useEffect(() => {
        fetchPies();
    }, [createPie])

    const fetchPies = () => {
        let url = 'http://localhost:5000/pies/';

        fetch(url, {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(res => res.json())
        .then(json => setPies(json))
    };

    const buttonHandler = () => setCreatePie(true);

    return(
        <div>
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
                <DisplayPies pies={pies} />
                </tbody>
            </table>
            <br />
            <div>
                <button onClick={buttonHandler}>Create Pie</button>
            </div>
            {
                createPie ? <CreatePie sessionToken={props.sessionToken} setCreatePie={setCreatePie} /> : null
            }
        </div>
    );
};

export default Pies;