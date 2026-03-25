import { useState } from "react";
import ArrowSVG from "../../common/ArrowSVG";

const MissionVisionSection = () => {
  const [active, setActive] = useState(0);
  const items = [
    {
      label:"Our Mission",
      heading:"Empower businesses to grow",
      text:"To empower businesses and startups by building intelligent, scalable, and user-centric digital products that solve real problems and drive sustainable growth through technology, automation, and innovation.",
      points:["Deliver exceptional value to our clients","Build intelligent, scalable ecosystems","Drive sustainable growth through automation"],
      img:"https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    },
    {
      label:"Our Vision",
      heading:"Leading innovation worldwide",
      text:"To become a trusted technology and innovation partner for businesses worldwide — known for clarity in thinking, excellence in execution, and future-ready digital solutions.",
      points:["Become a trusted technology partner","Achieve excellence in execution","Deliver future-ready solutions"],
      img:"https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop",
    },
  ];

  return (
    <section className="mil-soft-bg">
      <div className="container mil-p-120-120">
        <div className="row">
          <div className="col-lg-10">
            <span className="mil-suptitle mil-suptitle-right mil-suptitle-dark mil-up">
              Our purpose and direction — <br/>the compass that guides Sharvix Innovations.
            </span>
          </div>
        </div>
        <h2 className="mil-center mil-up mil-mb-60">
          Purpose &amp; <span className="mil-thin">Direction:</span><br/>
          <span className="mil-thin">What We Stand</span> For
        </h2>

        {/* Tab switcher — same pill style as labels */}
        <div style={{display:"flex",justifyContent:"center",gap:"10px",marginBottom:"60px"}}>
          {items.map((item,i)=>(
            <button
              key={i}
              onClick={()=>setActive(i)}
              style={{
                padding:"0 30px", height:"40px", borderRadius:"40px", border:"none",
                cursor:"pointer", fontFamily:"Outfit,sans-serif", fontSize:"12px",
                fontWeight:"500", textTransform:"uppercase", letterSpacing:"2px",
                backgroundColor: active===i ? "#0597F2" : "rgba(2,19,80,0.08)",
                color:"#021350", transition:"0.4s cubic-bezier(0,0,0.3642,1)",
              }}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="row justify-content-center" style={{position:"relative"}}>
          <div className="col-lg-8">
            {/* nav arrows */}
            <div className="mil-slider-nav mil-soft mil-reviews-nav">
              <div className="mil-slider-arrow mil-prev" onClick={()=>setActive((active-1+items.length)%items.length)}><ArrowSVG/></div>
              <div className="mil-slider-arrow" onClick={()=>setActive((active+1)%items.length)}><ArrowSVG/></div>
            </div>

            {/* quote icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" className="mil-quote-icon mil-up">
              <path d="M 13.5 10 A 8.5 8.5 0 0 0 13.5 27 A 8.5 8.5 0 0 0 18.291016 25.519531 C 17.422273 29.222843 15.877848 31.803343 14.357422 33.589844 C 12.068414 36.279429 9.9433594 37.107422 9.9433594 37.107422 A 1.50015 1.50015 0 1 0 11.056641 39.892578 C 11.056641 39.892578 13.931586 38.720571 16.642578 35.535156 C 19.35357 32.349741 22 27.072581 22 19 A 1.50015 1.50015 0 0 0 21.984375 18.78125 A 8.5 8.5 0 0 0 13.5 10 z M 34.5 10 A 8.5 8.5 0 0 0 34.5 27 A 8.5 8.5 0 0 0 39.291016 25.519531 C 38.422273 29.222843 36.877848 31.803343 35.357422 33.589844 C 33.068414 36.279429 30.943359 37.107422 30.943359 37.107422 A 1.50015 1.50015 0 1 0 32.056641 39.892578 C 32.056641 39.892578 34.931586 38.720571 37.642578 35.535156 C 40.35357 32.349741 43 27.072581 43 19 A 1.50015 1.50015 0 0 0 42.984375 18.78125 A 8.5 8.5 0 0 0 34.5 10 z" fill="#0597F2"/>
            </svg>

            <div style={{textAlign:"center"}}>
              <h5 className="mil-up mil-mb-10">{items[active].label}</h5>
              <h4 className="mil-up mil-mb-30">{items[active].heading}</h4>
              <p className="mil-up" style={{fontSize:"22px",lineHeight:"180%",marginBottom:"30px"}}>{items[active].text}</p>
              <ul style={{listStyle:"none",padding:0,display:"inline-block",textAlign:"left",marginBottom:"30px"}}>
                {items[active].points.map((pt,i)=>(
                  <li key={i} style={{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px",fontSize:"12px",fontWeight:"500",textTransform:"uppercase",letterSpacing:"2px",color:"rgba(0,0,0,0.5)"}}>
                    <span style={{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"#0597F2",flexShrink:0,display:"inline-block"}}></span>
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVisionSection;
