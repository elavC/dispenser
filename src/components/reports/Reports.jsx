import React from 'react';

import { Wrapper, Container } from './styled';

import { CardReports, ImgConversa01, ImgConversa02  } from '../exports';

import Slider from "react-slick";

function Reports() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 5,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2,
            }
          },
          {
            breakpoint: 550,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,  
            }
          },
        ]
      };

  return (
    <Wrapper>
      <Container>
        <Slider {...settings}>
          <CardReports photo={ImgConversa02}/>
          <CardReports photo={ImgConversa01}/>
          <CardReports photo={ImgConversa02}/>
          <CardReports photo={ImgConversa01}/>
          <CardReports photo={ImgConversa02}/>
          <CardReports photo={ImgConversa01}/>
        </Slider>
      </Container>
    </Wrapper>
  )
}

export default Reports;