import { useState } from "react";
import ArrowSVG from "../common/ArrowSVG";

const Reviews = () => {
  const [current, setCurrent] = useState(0);
  const reviews = [
    {name:"Priya Sharma", source:"Founder, EcoMart", text:"Working with Sharvix was a game-changer for our e-commerce platform. They delivered beyond our expectations with innovative solutions and a deep understanding of our business needs."},
    {name:"Amit Patel", source:"CTO, DataFlow Systems", text:"The automation solutions provided by Sharvix have significantly improved our operational efficiency. Their technical expertise is outstanding and the team is incredibly responsive."},
    {name:"Sneha Reddy", source:"Director, Creative Hub", text:"Sharvix Innovations brought our vision to life with their creative approach and technical prowess. The design and development quality were exceptional — the results exceeded all expectations."},
  ];
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  ];
  return (
    <section className="mil-soft-bg">
      <div className="container-inner mil-p-120-120">
        <div className="row">
          <div className="col-lg-10">
            <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark">Customer reviews are a valuable source <br/>of information for both businesses and consumers.</span>
          </div>
        </div>
        <h2 className="mil-center mil-mb-60">Customer <span className="mil-thin">Voices:</span> <br/>Hear What <span className="mil-thin">They Say!</span></h2>
        <div style={{display:"flex",justifyContent:"center",gap:"10px",marginBottom:"60px"}}>
          {avatars.map((av,i)=>(
            <button key={i} onClick={()=>setCurrent(i)} style={{padding:"10px",background:"transparent",border:"none",cursor:"pointer",borderRadius:"50%",boxShadow:current===i?"inset 0 0 0 4px #0597F2":"inset 0 0 0 0 transparent",transition:"box-shadow 0.4s"}}>
              <div style={{width:"90px",height:"90px",borderRadius:"50%",backgroundImage:`url(${av})`,backgroundSize:"cover",backgroundPosition:"top"}} />
            </button>
          ))}
        </div>
        <div className="row justify-content-center" style={{position:"relative"}}>
          <div className="col-lg-8">
            <div className="mil-slider-nav mil-soft mil-reviews-nav">
              <div className="mil-slider-arrow mil-prev" onClick={()=>setCurrent((current-1+reviews.length)%reviews.length)}><ArrowSVG /></div>
              <div className="mil-slider-arrow" onClick={()=>setCurrent((current+1)%reviews.length)}><ArrowSVG /></div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="mil-quote-icon">
              <path d="M 13.5 10 A 8.5 8.5 0 0 0 13.5 27 A 8.5 8.5 0 0 0 18.291016 25.519531 C 17.422273 29.222843 15.877848 31.803343 14.357422 33.589844 C 12.068414 36.279429 9.9433594 37.107422 9.9433594 37.107422 A 1.50015 1.50015 0 1 0 11.056641 39.892578 C 11.056641 39.892578 13.931586 38.720571 16.642578 35.535156 C 19.35357 32.349741 22 27.072581 22 19 A 1.50015 1.50015 0 0 0 21.984375 18.78125 A 8.5 8.5 0 0 0 13.5 10 z M 34.5 10 A 8.5 8.5 0 0 0 34.5 27 A 8.5 8.5 0 0 0 39.291016 25.519531 C 38.422273 29.222843 36.877848 31.803343 35.357422 33.589844 C 33.068414 36.279429 30.943359 37.107422 30.943359 37.107422 A 1.50015 1.50015 0 1 0 32.056641 39.892578 C 32.056641 39.892578 34.931586 38.720571 37.642578 35.535156 C 40.35357 32.349741 43 27.072581 43 19 A 1.50015 1.50015 0 0 0 42.984375 18.78125 A 8.5 8.5 0 0 0 34.5 10 z" fill="#0597F2" />
            </svg>
            <div className="mil-review-frame mil-center">
              <h5 className="mil-mb-10">{reviews[current].name}</h5>
              <p className="mil-mb-30 mil-upper">{reviews[current].source}</p>
              <p className="mil-text-xl">{reviews[current].text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
