import React from "react";
import { Carousel } from "react-bootstrap";
import "./HomeSlide.css";
import Slideshow2016_1 from '../Dream Art/Dream Art Slideshow/2016/1.jpg';
import Slideshow2016_2 from '../Dream Art/Dream Art Slideshow/2016/2.jpg';
import Slideshow2016_3 from '../Dream Art/Dream Art Slideshow/2016/3.jpg';
import Slideshow2016_4 from '../Dream Art/Dream Art Slideshow/2016/4.jpg';
import Slideshow2016_5 from '../Dream Art/Dream Art Slideshow/2016/5.jpg';
import Slideshow2016_6 from '../Dream Art/Dream Art Slideshow/2016/6.jpg';
import Slideshow2016_7 from '../Dream Art/Dream Art Slideshow/2016/7.jpg';
import Slideshow2018_1 from '../Dream Art/Dream Art Slideshow/2018/1.JPG';
import Slideshow2018_2 from '../Dream Art/Dream Art Slideshow/2018/2.JPG';
import Slideshow2018_3 from '../Dream Art/Dream Art Slideshow/2018/3.JPG';
import Slideshow2018_4 from '../Dream Art/Dream Art Slideshow/2018/4.JPG';
import Slideshow2018_5 from '../Dream Art/Dream Art Slideshow/2018/5.JPG';
import Slideshow2018_6 from '../Dream Art/Dream Art Slideshow/2018/6.JPG';
import Slideshow2018_7 from '../Dream Art/Dream Art Slideshow/2018/7.JPG';
import Slideshow2018_8 from '../Dream Art/Dream Art Slideshow/2018/8.JPG';
import Slideshow2018_9 from '../Dream Art/Dream Art Slideshow/2018/9.JPG';
import Slideshow2018_10 from '../Dream Art/Dream Art Slideshow/2018/10.JPG';
import Slideshow2018_11 from '../Dream Art/Dream Art Slideshow/2018/11.JPG';
import Slideshow2018_12 from '../Dream Art/Dream Art Slideshow/2018/12.JPG';
import Slideshow2018_13 from '../Dream Art/Dream Art Slideshow/2018/13.JPG';
import Slideshow2018_14 from '../Dream Art/Dream Art Slideshow/2018/14.JPG';
import Slideshow2018_15 from '../Dream Art/Dream Art Slideshow/2018/15.JPG';
import Slideshow2018_16 from '../Dream Art/Dream Art Slideshow/2018/16.JPG';
import Slideshow2018_17 from '../Dream Art/Dream Art Slideshow/2018/17.JPG';
import Slideshow2018_18 from '../Dream Art/Dream Art Slideshow/2018/18.JPG';
import Slideshow2018_19 from '../Dream Art/Dream Art Slideshow/2018/19.JPG';
import Slideshow2018_20 from '../Dream Art/Dream Art Slideshow/2018/20.JPG';
import Slideshow2018_21 from '../Dream Art/Dream Art Slideshow/2018/21.JPG';

function HomeSlide(){
    return(
        <Carousel>
            <Carousel.Item interval={4000}>
                <img className = "resize-img" src = {Slideshow2016_1} />
                <img className = "resize-img" src = {Slideshow2016_2} />
                
            </Carousel.Item>
            <Carousel.Item interval={4000}> 
                <img className = "resize-img" src = {Slideshow2016_3} />
                <img className = "resize-img" src = {Slideshow2016_4} />
                <img className = "resize-img" src = {Slideshow2016_5} />
                <img className = "resize-img" src = {Slideshow2016_6} />
                <img className = "resize-img" src = {Slideshow2016_7} />
                <img className = "resize-img" src = {Slideshow2018_20} />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img className = "resize-img" src = {Slideshow2018_1} />
                <img className = "resize-img" src = {Slideshow2018_19} />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img className = "resize-img" src = {Slideshow2018_2} />
                <img className = "resize-img" src = {Slideshow2018_3} />
                
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img className = "resize-img" src = {Slideshow2018_4} />
                <img className = "resize-img" src = {Slideshow2018_5} />
                <img className = "resize-img" src = {Slideshow2018_6} />
                <img className = "resize-img" src = {Slideshow2018_7} />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img className = "resize-img" src = {Slideshow2018_8} />
                <img className = "resize-img" src = {Slideshow2018_9} />
                <img className = "resize-img" src = {Slideshow2018_10} />
                <img className = "resize-img" src = {Slideshow2018_11} />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img className = "resize-img" src = {Slideshow2018_12} />
                <img className = "resize-img" src = {Slideshow2018_13} />
                <img className = "resize-img" src = {Slideshow2018_14} />
                <img className = "resize-img" src = {Slideshow2018_15} />
            </Carousel.Item>
            <Carousel.Item interval={4000}>
                <img className = "resize-img" src = {Slideshow2018_16} />
                <img className = "resize-img" src = {Slideshow2018_17} />
                <img className = "resize-img" src = {Slideshow2018_18} />
                <img className = "resize-img" src = {Slideshow2018_21} />
            </Carousel.Item>
        </Carousel>
    )
}

export default HomeSlide;