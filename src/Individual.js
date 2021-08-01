import React,{useState,useEffect,useContext} from 'react';
import {store} from './App';
import { Redirect } from 'react-router';

const Individual = ({match}) => {
    const [auth,setAuth]=useContext(store);
    const [indv,setIndv] = useState([]);
    useEffect(() =>{
        fetch('https://run.mocky.io/v3/f5f88eb9-3661-4384-877b-9cd1522cc64b').then(
        res => res.json()
        ).then(jsonData => {
            let obj = jsonData.filter(item => match.params.name===item.name)
            setIndv(obj)
        } ).catch(err => console.error(err))
    })
    if(!auth){
        return <Redirect to='/login' />
    }
    return (
        <div>
            <center>
            {indv.length>=1 ?
            <div className="card">
                <div className="card-body">
                <h5 className="card-title">{indv[0].name}</h5>
                <p>Age : {indv[0].age}</p>
                <p>first name : {indv[0].firstName}</p>
                <p>last name : {indv[0].lastName}</p>
                </div>
            </div>    
            : 
            <h5>User not found</h5>
        }
        </center>
        </div>
    )
}

export default Individual
