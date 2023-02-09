import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CardMedia from '@mui/material/CardMedia';
import Carousel from 'react-bootstrap/Carousel';



const CarousellMolecule = () => {
  const [result, setResult] = React.useState('');
  const API_URL = `https://storage.googleapis.com/core-asset/static/test/sample.json`;

  const getData = async () => {
    const response = await axios.get(API_URL);
    setResult(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
        <Carousel className="carousel-layout">
            {
              result && result.pic.map ((picture) => (
                  <Carousel.Item key={picture.id}>
                      <div className='image-layout'>
                        <CardMedia
                          component="img"
                          sx={{ height: 272 }}
                          image={picture}
                          alt="Paella dish"
                          loading="lazy"
                        />
                        <img src="assets/icon/Flag.png" className="flag-layout"/>
                      </div>
                    </Carousel.Item>
                ))
              }
        </Carousel>
    </>
    );
};
export default CarousellMolecule;