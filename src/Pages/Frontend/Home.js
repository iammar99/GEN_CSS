import React from 'react'
import '../../SCSS/Components/Pages/_home.scss'
import img1 from '../../Assets/main.mp4'
import vid1 from '../../Assets/animation.mp4'
import vid2 from '../../Assets/animation2.mp4'
import vid3 from '../../Assets/animation3.mp4'
import step2 from '../../Assets/step2.mp4'
import Card from 'Components/Cards'
import Header from 'Components/Header'
export default function Home() {
  return (
    <>
    <Header/>
      <section className='sect1'>
        <div className="container">
          <h1 className='text-center'>What is GenCSS?</h1>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 mx-auto mt-5 ">
              <p className='mt-3 sect1-p'>GenCSS is an AI-powered design assistant that transforms raw HTML code into beautiful, responsive CSS styles effortlessly. It bridges the gap between functionality and aesthetics by generating sleek, professional CSS files based on your input. Whether you're a developer seeking to save time or a beginner learning to style web pages, GenCSS simplifies the process, ensuring your designs are both efficient and visually appealing.</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 mx-auto">
              <video src={img1} autoPlay loop muted style={{ width: "100%", height: "80%" }} />
            </div>
          </div>
        </div>
        </section>
{/* ----Working section----- */}
<section>
<div className="container">
  <h1 className='text-center my-5'>How to use GenCSS?</h1>
  <p>Its very simple and easy to use.</p>
  <div className="row">
    <div className="col">
  <h2 >Step 1: </h2>
  <p>Open GenCSS Ai bot.</p>
  <h2 >Step 2: </h2>
  <p>Enter your HTML code in Input field.</p>
  <h2 >Step 3:</h2>
  <p>Fill the description and click Generate.</p> 
  <h2 > Step 4:</h2>
  <p>Copy CSS code and Paste in your code.</p>
    </div>
    <div className="col">
      <video src={step2} autoPlay loop muted style={{width:"100%" , height:"80%" , objectFit:"cover" }} ></video>
    </div>
  </div>
 
</div>
</section>
  {/* ----Need section----- */}
  
      <section className='mb-5'>
        <div className="container">
          <h1 className='text-center my-5'>Why we need GenCSS?</h1>
          <div className="row">
            <div className="col-md-4 mb-4">
              <Card
                title="Innovative Designs"
                description="Create sleek, modern designs effortlessly."
                video={vid1}
              />
            </div>
            <div className="col-md-4 mb-4">
              <Card
                title="Save Time & Effort"
                description="Generate automated and responsive CSS."
                video={vid2}
              />
            </div>
            <div className="col-md-4 mb-4">
              <Card
                title="Launch Ready"
                description="Deploy your styled web pages faster."
                video={vid3}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
