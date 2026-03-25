import ArrowSVG from "../../common/ArrowSVG";

const LocationsSection = () => {
  return (
    <section className="mil-soft-bg">
      <div className="container mil-p-120-60">
        <div className="row align-items-center mil-mb-60">
          <div className="col-lg-6 mil-mb-30">
            <h3 className="mil-up">Our <span style={{fontWeight:100}}>Offices</span></h3>
          </div>
          <div className="col-lg-6 mil-mb-30">
            <div className="mil-adaptive-right mil-up">
              <a href="#map" className="mil-link mil-dark">
                <span>View on map</span>
                <ArrowSVG/>
              </a>
            </div>
          </div>
        </div>
        <div className="row">
          {[
            {
              city:"Nagpur, India",
              address:"Nagpur,\nMaharashtra, India",
              phone:"+91 98765 43210",
              email:"info@sharvixinnovations.com",
              hours:"Mon–Fri, 9AM–6PM IST",
            },
            {
              city:"Global Support",
              address:"Remote-first team\nServing clients worldwide",
              phone:"+91 98765 43210",
              email:"sharvixinnovations@gmail.com",
              hours:"24/7 Support Available",
            },
            {
              city:"Start a Project",
              address:"Have an idea?\nLet's talk about how\nwe can help you.",
              phone:"+91 98765 43210",
              email:"info@sharvixinnovations.com",
              hours:"Quick response guaranteed",
            },
          ].map((office,i)=>(
            <div className="col-lg-4 mil-mb-60" key={i}>
              <div className="mil-contact-info-card">
                <div className="mil-contact-icon">
                  <i className={i===0?"fas fa-map-marker-alt":i===1?"fas fa-globe":"fas fa-rocket"}/>
                </div>
                <h5 className="mil-mb-30">{office.city}</h5>
                <p className="mil-mb-15" style={{whiteSpace:"pre-line"}}>{office.address}</p>
                <p style={{fontSize:"12px",fontWeight:"500",textTransform:"uppercase",letterSpacing:"2px",marginBottom:"8px",color:"rgba(2,19,80,0.4)"}}>
                  {office.hours}
                </p>
                <p className="mil-mb-5">
                  <a href={`tel:${office.phone}`} style={{fontWeight:"500",color:"#021350"}}>{office.phone}</a>
                </p>
                <p>
                  <a href={`mailto:${office.email}`} style={{fontWeight:"500",color:"#021350"}}>{office.email}</a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
