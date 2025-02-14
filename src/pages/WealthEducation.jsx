import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useState, useEffect } from 'react';


export default function WealthEducation() {

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
    <div><div id="search-popup" className="search-popup">
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
                                    <input type="search" className="form-control" name="search-input" defaultValue="Read-only content" placeholder="Type your keyword and hit" required />
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
                    <h1 style={{textAlign:'left'}}>Wealth Education</h1>
                    <ul className="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>Wealth Education</li>
                    </ul>
                </div>
            </div>
        </section>
        {/* page-title end */}


       {/* about-style-four */}
       <section className="about-style-four home-23 pt_110 pb_120" style={{textAlign:'left'}}>
        <div className="auto-container">
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                    <div className="content_block_three">
                        <div className="content-box">
                            <div className="sec-title mb_25">
                                <span className="sub-title mb_14">Wealth Education</span>
                                <h2>Empowering Your Financial Future </h2>
                            </div>
                            <div className="text-box">
                                <p>At Ravline, we believe that financial literacy is the foundation of long-term success and stability. Our Wealth Education program is designed to provide individuals and businesses with the tools, knowledge, and resources needed to make informed financial decisions.</p>
                                <p>Through our tailored financial education services, we cover a wide range of topics, including:</p>
                                <ul className="list-style-two clearfix">
                                    <li>Budgeting and Saving: Learn the art of managing your income and expenses to build a solid financial foundation.</li>
                                    <li>Debt Management: Discover strategies for reducing debt and improving your credit score, empowering you to take control of your financial life.</li>
                                    <li>Investment Basics: Gain insights into investment options, from stocks and bonds to real estate, helping you grow your wealth for the future.</li>
                                    <li>Retirement Planning: Understand the steps needed to ensure a comfortable and secure retirement.</li>
                                    <li>Estate Planning: Learn how to protect your assets and ensure that your legacy is passed on according to your wishes.</li>
                                </ul>
                                <p>We take pride in celebrating the successes of our clients. Many individuals and businesses have transformed their financial situations through our education programs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* about-style-four end */}


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
</div></div>


        
        {/* Scroll to top end */}
        
    </div>
</div>
  )
}
