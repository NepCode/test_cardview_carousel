import React,{Fragment} from 'react';
import Cards from'../cards/Cards' 
import db from '../db.json';

const Home = () => {
    return (
       <Fragment>
           <Cards data={db}/>
       </Fragment>
    )
}

export default Home
