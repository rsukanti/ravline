import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useEffect, useState } from 'react'

export default function BusinessFunding() {
    const [isLoading,setIsLoading]=useState(true);

useEffect(()=>{
 setTimeout(() => {
    setIsLoading(false)
 }, 2000);
},[])
  return (
    <div>

    <div className="boxed_wrapper ltr">


    {isLoading && <div className="loader-wrap">
        <div className="preloader">
            <div className="preloader-close">close</div>
            <div id="handle-preloader" className="handle-preloader">
                <div className="animation-preloader">
                    {/* <div className="spinner"></div> */}
                    <div className="txt-loading">
                        <img src="assets/images/logo_animation.gif" alt="img"/>
                    </div>
                </div>   
            </div>
        </div>
    </div> }
    <div>  
            <div id="search-popup" className="search-popup">
            <div className="popup-inner">
                <div className="upper-box">
                    <figure className="logo-box"><a href="index.html"><img src="assets/images/logo-2.png" alt=""/></a></figure>
                    <div className="close-search"><span className="fas fa-times"></span></div>
                </div>
                <div className="overlay-layer"></div>
                <div className="auto-container">
                    <div className="search-form">
                        <form method="post" action="index.html">
                            <div className="form-group">
                                <fieldset>
                                    <input type="search" className="form-control" name="search-input" defaultValue="Read-only content" placeholder="Type your keyword and hit" required/>
                                    <button type="submit"><i className="fas fa-search"></i></button>
                                </fieldset>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <Header/>
        {/* page-title */}
        <section className="page-title">
            <div className="bg-layer" style={{backgroundImage: `url("assets/images/background/page-title.jpg")`}}></div>
            <div className="line-grid-wrap">
                <span className="line-grid-1"></span>
                <span className="line-grid-2"></span>
                <span className="line-grid-3"></span>
                <span className="line-grid-4"></span>
                <span className="line-grid-5"></span>
            </div>
            <div className="auto-container">
                <div className="content-box">
                    <h1 style={{textAlign:'left'}}>Business Funding</h1>
                    <ul className="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>Business Funding</li>
                    </ul>
                </div>
            </div>
        </section>
        {/* page-title end */}


        {/* service-section */}
        <section className="service-section service-page-1">
            <div className="auto-container">
                <div className="inner-container">
                    <div className="sec-title" style={{textAlign:'left'}}>
                        <h2>Business Funding</h2>
                        {<p>Ravline Corp. is dedicated to empowering businesses with tailored financial solutions. We specialize in securing loans and offering a full spectrum of funding assistance to meet the unique needs of both new and established businesses. From startup capital for emerging entrepreneurs to expansion funding for established companies, Ravline Corp. is committed to helping your business reach new heights. Our experts work closely with you to understand your goals and find the best financial pathways to make them a reality. Discover how Ravline Corp. can fuel your growth with accessible, reliable business funding.</p>}
                    </div>
                    
                </div>
            </div>
        </section>
        {/* service-section end */}


      

     <Footer/>

         {/*Scroll to top*/}
         <div className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>
  <div>
    <div className="scroll-top-inner">
      <div className="scroll-bar">
        <div className="bar-inner"></div>
      </div>
      <div className="scroll-bar-text">Go To Top</div>
    </div>
  </div>
</div>
        {/* Scroll to top end */}


    </div>

        
    </div>


   

</div>
  )
}
