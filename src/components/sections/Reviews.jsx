import { useState } from "react";
import ArrowSVG from "../common/ArrowSVG";

const Reviews = () => {
  const [current, setCurrent] = useState(0);

  const reviews = [
    {name:"Dhartii Sonavaria", source:"Founder, The Crystalline Co.", text:"Sharvix Innovations built a stunning and intuitive e-commerce platform for our spiritual wellness brand. Their seamless integration of payment gateways and calming UI design perfectly captured our vision and elevated our online presence."},
    {name:"Akshay Bhagate & Darshan Tare", source:"Trustees, Jinsen Math", text:"We partnered with Sharvix to digitize our 1300+ year-old institution. They delivered a robust platform that beautifully handles our events, donations, and community initiatives, truly bridging our heritage with modern technology."},
    {name:"Management", source:"Equinox Environments", text:"Sharvix developed a highly professional corporate website for our environmental engineering firm. Their attention to detail and clean architecture perfectly showcase our consultancy and pollution control solutions to our clients."},
    {name:"Rohan Mehta", source:"CEO, NextGen Tech", text:"Sharvix helped us overhaul our legacy CRM software. Their expertise in Python and React resulted in a scalable, incredibly fast system. They are our go-to team for complex web applications."},
    {name:"Ayesha Khan", source:"Product Manager, FinEdge", text:"The AI-driven automation workflows designed by Sharvix transformed our operations. Their ability to deliver secure, enterprise-grade back-end architecture is unmatched. Highly recommended!"},
    {name:"David Wright", source:"Founder, GrowthLabs", text:"Choosing Sharvix for our mobile app development was the best decision. From the immaculate UI/UX design to a robust Node.js backend, they delivered a premium product perfectly on schedule."},
  ];

  return (
    <section className="mil-soft-bg">
      <div className="container-inner mil-p-120-120">
        <div className="row">
          <div className="col-lg-10">
            <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark">
              Partnerships built on trust,<br/> validated by success.
            </span>
          </div>
        </div>
        <h2 className="mil-center mil-mb-60">
          Customer <span className="mil-thin">Voices:</span> <br/>Hear What <span className="mil-thin">They Say!</span>
        </h2>
        
        {/* Simple Dot Navigation replacing Avatar Navigation */}
        <div style={{display:"flex",justifyContent:"center",gap:"12px",marginBottom:"60px"}}>
          {reviews.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setCurrent(i)} 
              style={{
                width: current === i ? "30px" : "10px",
                height: "10px",
                borderRadius: "10px",
                backgroundColor: current === i ? "#0597F2" : "rgba(2, 19, 80, 0.15)",
                border: "none",
                cursor: "pointer",
                transition: "all 0.4s ease"
              }} 
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="row justify-content-center" style={{position:"relative"}}>
          <div className="col-lg-8">
            <div className="mil-slider-nav mil-soft mil-reviews-nav">
              <div className="mil-slider-arrow mil-prev" onClick={()=>setCurrent((current-1+reviews.length)%reviews.length)} role="button" aria-label="Previous review" tabIndex={0} onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setCurrent((current-1+reviews.length)%reviews.length)}><ArrowSVG /></div>
              <div className="mil-slider-arrow" onClick={()=>setCurrent((current+1)%reviews.length)} role="button" aria-label="Next review" tabIndex={0} onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setCurrent((current+1)%reviews.length)}><ArrowSVG /></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="mil-quote-icon">
              <path d="M 13.5 10 A 8.5 8.5 0 0 0 13.5 27 A 8.5 8.5 0 0 0 18.291016 25.519531 C 17.422273 29.222843 15.877848 31.803343 14.357422 33.589844 C 12.068414 36.279429 9.9433594 37.107422 9.9433594 37.107422 A 1.50015 1.50015 0 1 0 11.056641 39.892578 C 11.056641 39.892578 13.931586 38.720571 16.642578 35.535156 C 19.35357 32.349741 22 27.072581 22 19 A 1.50015 1.50015 0 0 0 21.984375 18.78125 A 8.5 8.5 0 0 0 13.5 10 z M 34.5 10 A 8.5 8.5 0 0 0 34.5 27 A 8.5 8.5 0 0 0 39.291016 25.519531 C 38.422273 29.222843 36.877848 31.803343 35.357422 33.589844 C 33.068414 36.279429 30.943359 37.107422 30.943359 37.107422 A 1.50015 1.50015 0 1 0 32.056641 39.892578 C 32.056641 39.892578 34.931586 38.720571 37.642578 35.535156 C 40.35357 32.349741 43 27.072581 43 19 A 1.50015 1.50015 0 0 0 42.984375 18.78125 A 8.5 8.5 0 0 0 34.5 10 z" fill="#0597F2" />
            </svg>
            <div className="mil-review-frame mil-center" style={{minHeight:"200px"}}>
              <h5 className="mil-mb-10" style={{color: "#021350"}}>{reviews[current].name}</h5>
              <p className="mil-mb-30 mil-upper" style={{color: "#0597F2", fontSize:"12px", letterSpacing:"1.5px", fontWeight:"600"}}>{reviews[current].source}</p>
              <p className="mil-text-xl" style={{lineHeight:"160%"}}>{reviews[current].text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
