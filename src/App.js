import React from "react";
// Import the CustomModal that we created in Modal.js.
import Header from "./components/Header";
import backgroundvid from './assets/ocean-video.mp4';
import './style/App.css'
import Cards from "./components/Cards";
import oceanpollution from './assets/ocean-pollution.jpg';
import recycle from './assets/recycle-icon.png'
import plant from './assets/plant-hand.jpg';
import peoplecups from './assets/cup-party.jpg';
import Carousel from 'react-bootstrap/Carousel';
import oceanwaste from './assets/ocean-waste.jpg';
import plasticbottles from './assets/plastic-bottles.jpg'; 
import turtle from './assets/turtle.jpg'
import plasticearth from './assets/plasticearth.jpg'
import plasticocean from './assets/plasticocean.jpg'
import plasticwaste from './assets/plasticwaste.jpg'
import time from './assets/time-waste.png'
import oil from './assets/petroleum.png'
import eco from './assets/eco-friendly.png'
import water from './assets/water.png'
import world from './assets/world.png'


function App() {



  return (
    <div>
      <div className="videowrapper">
        <video loop autoPlay muted id="myVideo">
          <source src={backgroundvid} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
        <Header></Header>
        <h1>Ethical options for you, starting with cups</h1>
        <button>Stop Plastic Waste Now</button>
      </div>


      <div className="whyalpha">
          <h3>Why Alpha Cups?</h3>
          <p>In the past, <span className="alphacupscatch">corporations made their waste someone else's problem</span>. Due to our weak recycling and waste capture infrastructure, the vast majority of American plastic has and will continue to end up in landfills and oceans where it will take 500 years to biodegrade. Minimal progress has been made to change this fact</p>
      </div>


      
      
      <div className="cardTop"></div>

      <div id="cards" className="d-flex justify-content-around">        
        <Cards className = ".d-print-inline" id = 'what' url={peoplecups} title={'What Happens'}/>
        <Cards className = ".d-print-inline" id = 'why' url={oceanpollution} title={'Why Its a Problem'}/>
        <Cards className = ".d-print-inline" id = 'solution' url={plant} title={'Our Solution'}/>
      </div>

      <div className="cardBottom"></div>

      <div className="rrright">
        <div className="heading">
          <h3>Reduce, Reuse, and Recycle, Right?</h3>
          <p className="topic-one">Only 9% of all plastic ever produced has been recycled</p>
        </div>
        <div className="top">
          <h4>you can only reduce so much</h4>
          <p>the average person can't go a week without single-use plastic today</p>
        </div>
        <a href="google.com" className="recycle-icon-wrapper"><img className = "recycle-icon"src={recycle}></img></a>
        <div className="container">
          <div className="bottom">
            <h4>reusable isn't always better</h4>
            <p>most reusables need to be reused 100's of times to have a lower carbon impact than their single use alternatives</p>
          </div>
          <div className="bottomtwo">
            <h4>we can't recycle our way out </h4>
            <p>Every time plastic is recycled, the material weakens so plastic can not be infinitely recycled like aluminum or glass</p>
          </div>
        </div>
      </div>

      <div className="factstop"></div>

      <div className="facts">
        <h4>The Facts</h4>
        <div className="wrapper">
          <div className="c1">
            <div className="c1caption">
              <h5>
                single use
              </h5>
              <p>
                When petro plastics are thrown away they'll take 450-1000 years to degrade in a landfill
              </p>
            </div>
            <div className="c1img">
              <a href="https://www.flaticon.com/free-icons/recycle" title="recycle icons"><img src={time}></img></a>
            </div>
          </div>
          <div className="c2">
            <div className="c2caption">
              <h5>
                waste
              </h5>
              <p>
                Unfortunately, the vast majority of single-use plastics at this time are made from petroleum based plastics
              </p>

            </div>
            <div className="c2img">
              <a href="https://icons8.com/icon/HFxwl7VaWPdE/petroleum"><img src={oil}></img></a>
            </div>
          </div>
          <div className="c3">
            <div className="c3caption">
              <h5>
                Biodegradable
              </h5>
              <p>
                changes are needed and we'll be making them
              </p>

            </div>
            <div className="c3img">
              <a></a><img src={eco}></img>
            </div>
          </div>

        </div>
      </div>
      <div className="factsbottom"></div>

      <div className="betatop"></div>
      <div className="beta">


          <div className="action">
            <h3 className="left">All the benefits of single-use plastic</h3> 
            <button> Read More</button> 
            <h3 className="right">Without the plastic permanence</h3>
          </div>
          <div className="carousel">
            <Carousel>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={turtle}
                  alt="First slide"

                />
                <Carousel.Caption>
                  <h5>current bioplastic solutions aren't enough</h5>
                  <p>oxo degradable and petro plastic additives speed up biodegradation but keep microplastics BETA SOLUTION</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={plasticwaste}
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h5>Second slide label</h5>
                  <p>pla is a plant based bioplastic (usually corn or starch) that is commercially compostable, meaning it will biodegrade into compost in under 1 year in a commercial composting facility, but since only a small fraction of waste gets sent to these facilities due to, they're as ineffective as recycling  BETA SOLUTION</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src={oceanwaste}
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h5>Third slide label</h5>
                  <p>Every time plastic is recycled, the material weakens so plastic can not be infinitely recycled like aluminum or glass</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>

          </div>

        
      </div>

      <div className="betabottom"></div>

      <div className="solution">
        <h3>The Alpha Solution</h3>
        <div className="wrapper">
          <div className="c1">
            <a href="https://www.flaticon.com/free-icons/wave" title="wave icons"><img src={water}></img></a>
            <p>
              All of our single use products will be made from PHA, a bioplastic that fully biodegrades in home composts, landfills, or oceans in under 1 year without creating harmful microplastics
            </p>
          </div>
          <div className="c2">
            <a href="https://www.flaticon.com/free-icons/population" title="population icons"><img src={world}></img></a>
            <p>
              We're currently crowdfunding to raise money to develop our first product line, so we need your support
            </p>
          </div>
          <div className="c3">
            <a href="https://www.flaticon.com/free-icons/environment" title="environment icons"><img src={eco}></img></a>
            <p>
              Buying our reusable items and donating to our campaign will enable us to produce the biodegradable single use products our environment needs
            </p>
          </div>

        </div>
      </div>

    </div>

  );
}

export default App;

