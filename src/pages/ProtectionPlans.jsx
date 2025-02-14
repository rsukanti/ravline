import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useState, useEffect } from 'react';

export default function ProtectionPlans() {
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
    setTimeout(() => {
        setIsLoading(false)
    }, 2000);
    },[])
  return (

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
    <div> <div id="search-popup" className="search-popup">
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
                    <h1 style={{textAlign:'left'}}>Protection Plans</h1>
                    <ul className="bread-crumb clearfix">
                        <li><a href="index.html">Home</a></li>
                        <li>Protection Plans</li>
                    </ul>
                </div>
            </div>
        </section>
        {/* page-title end */}


        {/* service-section */}
        <section className="service-section service-page-1" style={{textAlign:'left'}}>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="sec-title">
                        <span className="sub-title mb_12">what we do</span>
                        <h2>Protection Plans</h2>
                        <p>Manage your finances effectively with tools for budgeting, credit restoration, and debt payoff. Protect your identity and assets with credit monitoring, legal services, and a financial lockbox. Achieve your financial goals with net worth tracking, savings planning, and family-focused solutions like YFL Family Mint.</p>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new1.png" alt=""/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new1.png" alt=""/></div>
                                    <h3><a href="protection-plans.html">Budgeting</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                </div>
                                <p>Budget protection plans offer a comprehensive set of tools and resources designed to help individuals take control of their personal finances. These plans assist users in tracking income, setting achievable financial goals, and prioritizing essential expenses while reducing unnecessary spending. Users can create personalized budgets tailored to their specific financial needs and receive ongoing support and guidance.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-18.png" alt=""/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-18.png" alt=""/></div>
                                    <h3><a href="protection-plans.html">Credit Restoration</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                </div>
                                <p>Credit restoration services are designed to help individuals boost their credit scores by correcting inaccuracies on their credit reports. Experienced professionals thoroughly review credit histories, dispute errors, and work directly with creditors to remove negative entries, such as late payments or collections. By choosing credit restoration, clients may see an improved credit score, opening doors to lower interest rates on loans, higher chances of credit card approval, and greater financial opportunities, including qualifying for mortgages and auto loans.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-19.png" alt=""/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-19.png" alt=""/></div>
                                    <h3><a href="protection-plans.html">Credit Builder</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                </div>
                                <p>Credit builder plans are crafted for those aiming to establish or enhance their credit profiles by building a positive credit history through responsible financial habits. These plans may include secured credit cards or small loans that report activity to major credit bureaus. The main advantage is that they help individuals gradually build or repair their credit, leading to improved access to financial opportunities down the road, like qualifying for lower interest rates or higher credit limits.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new2.png" alt=""/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new2.png" alt=""/></div>
                                    <h3><a href="protection-plans.html">Credit Attorney</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                </div>
                                <p>Credit attorney protection plans connect individuals with legal experts skilled in resolving credit disputes and related concerns. When inaccuracies or signs of fraud appear on a credit report, these attorneys work with creditors and credit bureaus to have incorrect or damaging entries removed. Additionally, they provide professional guidance on effective credit management and strategies for safeguarding credit from future issues.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new3.png" alt=""/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new3.png" alt=""/></div>
                                    <h3><a href="protection-plans.html">Credit Monitoring</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                </div>
                                <p>Credit monitoring plans track an individual's credit reports and alert them to any changes or potential fraudulent activity. The service regularly monitors updates from major credit bureaus, notifying users about new credit inquiries, account openings, or significant fluctuations in their credit scores.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-20.png" alt=""/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-20.png" alt=""/></div>
                                    <h3><a href="protection-plans.html">Debt Payoff</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                </div>
                                <p>Debt payoff plans are created to assist individuals in managing and clearing their outstanding debts, including credit card balances, loans, and other financial obligations. These programs often involve strategies such as debt consolidation, budgeting guidance, and payment management. The primary benefit is achieving financial freedom by reducing debt, improving credit scores, and alleviating the stress of high debt, ultimately leading to greater financial stability and security.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-21.png" alt=""/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-21.png" alt=""/></div>
                                    <h3><a href="protection-plans.html">Financial Lockbox</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                </div>
                                <p>A financial lockbox is a secure digital storage solution where individuals can safely store important financial documents, such as wills, tax returns, insurance policies, and account details. This service ensures that all essential records are conveniently stored in one location, making them easily accessible in emergencies. The key benefit of a financial lockbox is the peace of mind that comes with having organized, readily available financial documents, which can be shared with trusted individuals when needed.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new5.png" alt=""/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new5.png" alt=""/></div>
                                    <h3><a href="protection-plans.html">Identity Monitoring</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                </div>
                                <p>Identity monitoring services safeguard individuals against identity theft by tracking personal information online, such as social security numbers, bank accounts, and credit card details. These plans provide instant notifications if any unusual activity is detected or if personal information is compromised in a data breach.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new6.png" alt=""/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new6.png" alt=""/></div>
                                    <h3><a href="protection-plans.html">Net Worth</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                </div>
                                <p>Net worth tracking services help individuals assess their financial health by calculating the total value of their assets and liabilities. These plans offer valuable insights into savings, investments, debts, and overall progress toward financial goals, such as retirement or large purchases.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-22.png" alt=""/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-22.png" alt=""/></div>
                                    <h3><a href="protection-plans.html">Savings Goal</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                </div>
                                <p>Savings goal plans are designed to help individuals establish, track, and accomplish specific financial goals, such as saving for a vacation, building an emergency fund, or making a down payment on a home. These plans typically offer tools like automated savings transfers, progress tracking, and educational resources. The key benefit is the sense of empowerment and discipline gained from having a clear savings strategy, leading to improved financial stability and a greater ability to achieve significant personal or financial milestones.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new7.png" alt=""/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new7.png" alt=""/></div>
                                    <h3><a href="protection-plans.html">Estate Planning (Will & Trust)</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                </div>
                                <p>Estate Planning (Will & Trust) protection plans provide expert guidance in creating legally binding documents to manage the distribution of assets upon death. These plans typically include tools for drafting and updating wills, establishing trusts, and ensuring that estate planning strategies align with the individual's wishes and legal requirements.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-23.png" alt=""/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-23.png" alt=""/></div>
                                    <h3><a href="protection-plans.html">YFL Family Mint</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                </div>
                                <p>The YFL Family Mint is a financial education platform designed to help families teach children and teenagers about money management, savings, and budgeting in a fun and interactive way. It offers age-appropriate lessons and tools to help young learners build essential financial skills. Activities include setting savings goals, understanding how money is earned and spent, and learning about responsible investing.</p>
                                <p>The benefit of YFL Family Mint is that it helps families instill strong financial habits in children early on, giving them a solid foundation for managing their finances and setting them up for future financial success.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new8.png" alt=""/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new8.png" alt=""/></div>
                                    <h3><a href="protection-plans.html">Emerging Business Guidance</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                </div>
                                <p>Essential support to entrepreneurs throughout the entire process of starting a new business. We assist with the foundational steps, including developing a business plan, securing funding, registering the business, and understanding the legal and regulatory requirements. Our services are designed to help entrepreneurs navigate the complexities of launching a business, ensuring they have the necessary tools and guidance to establisha strong foundation for growth. By addressing each step methodically, we help set new businesses on a path to success.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new9.png" alt=""/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new9.png" alt=""/></div>
                                    <h3><a href="protection-plans.html">Life, Health, and Annuity Insurance</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                </div>
                                <p>Our Life, Health, and Annuity Insurance consultation services provide expert guidance to help individuals and families make informed decisions about their insurance needs. We assist clients in understanding the various options available for life insurance, health coverage, and annuities, ensuring they choose the plans that best fit their financial goals and personal circumstances. Whether you are looking to protect your family's future, secure your health coverage, or plan for retirement, our team offers personalized support throughout the process, from consultation to purchase, helping you find reliable and affordable coverage tailored to your needs.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-new10.png" alt=""/></div>
                                    <div className="overlay-icon"><img src="assets/images/icons/icon-new10.png" alt=""/></div>
                                    <h3><a href="protection-plans.html">Mortgage Services</a></h3>
                                    <div className="overlay-link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                    <div className="link"><a href="protection-plans.html"><img src="assets/images/icons/icon-15.png" alt=""/></a></div>
                                </div>
                                <p>Our mortgage services provide assistance with the various steps involved in securing a mortgage or home loan. We help individuals and families understand different loan options, navigate the loan application process, and address any questions about interest rates, terms, and conditions. Our support includes guiding clients through the documentation and approval process, ensuring they understand the requirements and options available to them. Whether purchasing a home for the first time or refinancing an existing mortgage, we provide the necessary information to help clients make informed decisions about their financing needs.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* service-section end */}


        {/* main-footer */}
      
        <Footer/>
        {/* main-footer end */}



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
  )
}
