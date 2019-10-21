import React,{ useState, useEffect } from 'react'
import { Card, Button, Carousel } from 'react-bootstrap';

const  CardItem = ({ data, images }) => {

        const [index, setIndex] = useState(0);
        const [direction, setDirection] = useState(null);
        const [numberImages, setNumerImages] = useState(null);

        function countProperties(obj) {
            var count = 0;
            for(var prop in obj) {
                if(obj.hasOwnProperty(prop))
                    ++count;
            }
            return count;
        }

        useEffect(() => {
          setNumerImages(countProperties(images))         
        }, [] );

        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
          setDirection(e.direction);
        };

        const startSlide = (selectedIndex, e) => {
          if(index >= numberImages){
            setIndex(0);
            setDirection('next');
          }else{
          setIndex(index+1);
          setDirection('next');
          }
        };

        const resetSlider = (selectedIndex, e) => {
            setIndex(0);
            setDirection('next');
        };

        return (

          <Card className="m-3" key={data.id} >
            <Carousel activeIndex={index} onSelect={handleSelect} direction={direction} indicators={false} interval={null} pauseOnHover={false} onMouseEnter={startSlide}>
              {images.map(imgItem => (
              <Carousel.Item key = {imgItem.id}>
              <img className="d-block w-100" src={imgItem.image}  alt="" />
              </Carousel.Item>
              ))}
            </Carousel>
            <Card.Body>
              <Card.Title>{data.name}</Card.Title>
              <Card.Text>
              {data.description}
              </Card.Text>
              <Button className="float-left" variant="primary">Icon</Button>
              <Button className="float-right" variant="primary">Icon</Button>
            </Card.Body>
          </Card>

        );
    }

 export default CardItem