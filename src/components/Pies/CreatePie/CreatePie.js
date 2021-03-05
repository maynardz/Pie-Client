import {useState} from 'react';

const CreatePie = (props) => {
    console.log(props);

    const [nameOfPie, setNameOfPie] = useState('');
    const [baseOfPie, setBaseOfPie] = useState('');
    const [crust, setCrust] = useState('');
    const [timeToBake, setTimeToBake] = useState(0);
    const [servings, setServings] = useState(0);
    const [rating, setRating] = useState(0);

    const postPie = (e) => {
        e.preventDefault();

        let url = 'http://localhost:5000/pies/';

        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                nameOfPie: nameOfPie,
                baseOfPie: baseOfPie,
                crust: crust,
                timeToBake: timeToBake,
                servings: servings,
                rating: rating
            }),
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': props.sessionToken
            })
        })
        .then(res => res.json())
        .then(json => {
            console.log(json);
            props.setCreatePie(false);
        })
    };

    return(
        <form onSubmit={postPie}>
            <input type='text' value={nameOfPie} placeholder='name of pie' onChange={e => setNameOfPie(e.target.value)} />
            <input type='text' value={baseOfPie} placeholder='base of pie' onChange={e => setBaseOfPie(e.target.value)} />
            <input type='text' value={crust} placeholder='crust' onChange={e => setCrust(e.target.value)} />
            <input type='text' value={timeToBake} placeholder='time to bake' onChange={e => setTimeToBake(e.target.value)} />
            <input type='text' value={servings} placeholder='servings' onChange={e => setServings(e.target.value)} />
            <input type='text' value={rating} placeholder='rating' onChange={e => setRating(e.target.value)} />
            <button type='submit'>Submit</button>
        </form>
    );
};

export default CreatePie;