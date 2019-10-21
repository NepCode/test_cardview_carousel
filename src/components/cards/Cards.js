import React, {  useState } from 'react'

import Spinner from '../layout/Spinner'
import CardItem from './CardItem'
import { Row, Col } from 'react-bootstrap';
import {Animated} from "react-animated-css";


const Cards  = ( { data } ) => {

        let results = data.results
        const [loading, setLoading] = useState(false); 
        
        if(loading) {
            return <Spinner/>
        } else {

            return (
                <div>
                     
                 <Row>
                    {results.map(item => (
                        <Col xs={12} md={6} lg={3} key={item.id}>
                        <Animated animationIn="fadeIn"  animationInDuration={1000} isVisible={true}>
                        <CardItem data={item} images={item.images}/>
                        </Animated>                 
                        </Col> 
                    ))}
                  </Row>
                  
                </div>
              );
        }    
}
export default Cards
