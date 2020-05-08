import React from "react";

import "./css/presets/preset3.css";
import "./plugins/cd-hero/cd-hero.css";
import "./plugins/flex-slider/flexslider.css";
import "./plugins/owl/owl.theme.css";
import "./plugins/owl/owl.carousel.css";
import "./plugins/prettyPhoto.css";
import "./plugins/animate.css";
import "./plugins/fontawesome/font-awesome.min.css";
import "./plugins/bootstrap/bootstrap.min.css";
import "./css/style.css";
import "./CompStyle.css";

import portfolio1 from "./images/portfolio/portfolio1.jpg";
import portfolio2 from "./images/portfolio/portfolio2.jpg";
import portfolio3 from "./images/portfolio/portfolio3.jpg";
import portfolio4 from "./images/portfolio/portfolio4.jpg";
import portfolio5 from "./images/portfolio/portfolio5.jpg";
import portfoliobg1 from "./images/portfolio/portfolio-bg1.jpg";
import portfoliobg2 from "./images/portfolio/portfolio-bg2.jpg";
import portfoliobg3 from "./images/portfolio/portfolio-bg3.jpg";
import banner1 from "./images/banner/banner1.jpg";

const TransactionEnquiry = () =>{
    return (
        <div className="TransactionEnquiry-wrapper">
            
<div id="banner-area">
	<img src={banner1} alt="" />
	<div className="parallax-overlay"></div>

	<div className="banner-title-content">
		<div className="text-center">
			<h2>Transaction Enquiries</h2>
			<nav aria-label="breadcrumb">
				<ol className="breadcrumb justify-content-center">
					<li className="breadcrumb-item"><a href="/">Home</a></li>
					<li className="breadcrumb-item text-white" aria-current="page">Transaction Enquiries</li>
				</ol>
			</nav>
		</div>
	</div>
</div>
<section id="main-container">
	<div className="container">

		<div className="row about-wrapper-top">
			<div className="col-md-6 ts-padding ">
				<h3>Chatbots for Transaction Enquiries </h3>
				<p>"Learn how to build chatbots for Transaction Enquiries"</p>
				<p><a href="#" className="btn btn-primary solid square" style="color: #2D7A8A">Get Started Free<i className="fa fa-long-arrow-right"></i></a></p>

			</div>
		
			<div className="col-md-6 ts-padding about-img"
				style="height:374px;background:url(images/pages/about-1.jpg) 50% 50% / cover no-repeat;">
			</div>
		
		</div>
	</div>
	<div className="gap-60"></div>

	<div className="container">

		<div className="team">
				<div className="tab-pane pl-sm-5 fade animated fadeInLeft about-message" role="tabpanel">
						<h3 className="pt-5">The Big Idea</h3>
						<p>Online lives generate a large number of transactions with various organizations. For an average individual, this includes financial, subscription and even retail transactions.</p>
						<p>Transaction detail enquiries form a major component of requests handled by support teams. Smart chatbots help automate resolution of these requests. 24x7 availability helps improve customer satisfaction and user experience.  When transaction details are necessary for further actions, this helps improve productivity too. Key capabilities include: </p>
						<ul className="check-list">
							<li><i className="fa fa-check"></i> 24x7 Service & Support availability  </li>
							<li><i className="fa fa-check"></i> Automation of common information retrieval </li>
							<li><i className="fa fa-check"></i> Account Statement tracking </li>
							<li><i className="fa fa-check"></i> Expense Claims and tracking </li>
							<li><i className="fa fa-check"></i> Regular Alerts & Notifications  </li>
						</ul>
					</div>
		</div>
	</div>
</section>


<section id="feature" className="feature">
	<div className="container">
	<div className="row">
			<div className="col-md-12 heading text-center">
				<span className="icon-pentagon wow bounceIn"><i className="fa fa-suitcase"></i></span>
				<h2 className="title2">Amazing Features 
					<span className="title-desc">A Quality Experience Team with 4 years experience</span>
				</h2>
			</div>
		</div>
		<div className="row">
			<div className="feature-box col-sm-4 wow fadeInDown" data-wow-delay=".5s">
				<span className="feature-icon float-left"><i className="fa fa-heart-o"></i></span>
				<div className="feature-content">
					<h3>Natural Language Processing</h3>
				</div>
			</div>
			
			<div className="feature-box col-sm-4 wow fadeInDown" data-wow-delay=".5s">
				<span className="feature-icon float-left"><i className="fa fa-codepen"></i></span>
				<div className="feature-content">
					<h3>Integration Hub</h3>
				</div>
			</div>
		
			<div className="feature-box col-sm-4 wow fadeInDown" data-wow-delay=".5s">
				<span className="feature-icon float-left"><i className="fa fa-film"></i></span>
				<div className="feature-content">
					<h3>Broadcast</h3>
				</div>
			</div>
			
		</div>

		<div className="gap-40"></div>

		<div className="row">
			<div className="feature-box col-sm-4 wow fadeInDown" data-wow-delay=".5s">
				<span className="feature-icon float-left"><i className="fa fa-newspaper-o"></i></span>
				<div className="feature-content">
					<h3>Omnichannel </h3>
				</div>
			</div>
		

			<div className="feature-box col-sm-4 wow fadeInDown" data-wow-delay=".5s">
				<span className="feature-icon float-left"><i className="fa fa-desktop"></i></span>
				<div className="feature-content">
					<h3>Script Node</h3>
				</div>
			</div>
		
			<div className="feature-box col-sm-4 wow fadeInDown" data-wow-delay=".5s">
				<span className="feature-icon float-left"><i className="fa fa-pagelines"></i></span>
				<div className="feature-content">

					<h3>File Uploads </h3>
				</div>
			</div>
		
		</div>

	

	</div>

</section>

<section id="about" className="about">
	<div className="container">
		<div className="row">
			<div className="col-md-12 heading text-center">
				<span className="icon-pentagon wow bounceIn"><i className="fa fa-meh-o"></i></span>
				<h2 className="title2">Benefits
					<span className="title-desc">A Quality Experience Team with 4 years experience</span>
				</h2>
			</div>
		</div>
		<div className="row featured-tab">
			<div className="col-md-3 col-sm-5">
				<div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
					<a className="animated fadeIn nav-link mb-1 active d-flex align-items-center" data-toggle="pill" href="#tab_1"
						role="tab" aria-selected="true">
						<i className="fa fa-info-circle mr-4 h3 mb-0"></i>
						<span className="h4 mb-0 font-weight-bold">Support Queries</span>
					</a>
					<a className="animated fadeIn nav-link mb-1 d-flex align-items-center" data-toggle="pill" href="#tab_2" role="tab"
						aria-selected="true">
						<i className="fa fa-android mr-4 h3 mb-0"></i>
						<span className="h4 mb-0 font-weight-bold">Efficiency</span>
					</a>
					
				</div>
			</div>
			<div className="col-md-9 col-sm-7">
				<div className="tab-content" id="v-pills-tabContent">
					
					<div className="tab-pane pl-sm-5 active fade animated fadeInLeft" id="tab_1" role="tabpanel">
						<h3>Benefits of Support Queries</h3>
						<ul className="check-list">
							<li><i className="fa fa-check"></i> Account Registration</li>
							<li><i className="fa fa-check"></i> Report Loss of cards</li>
							<li><i className="fa fa-check"></i> Reset Passwords</li>
							<li><i className="fa fa-check"></i> Apply for new Services</li>
							<li><i className="fa fa-check"></i> Close existing Services</li>
						</ul>
					</div>
					<div className="tab-pane pl-sm-5 fade animated fadeInLeft" id="tab_2" role="tabpanel">
						<h3>Benefits of Efficiency</h3>
						<ul className="check-list">
							<li><i className="fa fa-check"></i> Mutual Fund and Equity Transactions</li>
							<li><i className="fa fa-check"></i> Monitor Portfolio</li>
							<li><i className="fa fa-check"></i> Modify Portfolio</li>
							<li><i className="fa fa-check"></i> Query for Risk Assessment</li>
							<li><i className="fa fa-check"></i> Search for Market Trends</li>
						</ul>
					</div>
					
				</div>
			</div>
		</div>
	</div>
</section>
        </div>
    )
}

export default TransactionEnquiry;