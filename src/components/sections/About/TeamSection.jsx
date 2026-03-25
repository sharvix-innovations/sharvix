import { Link } from "react-router-dom";
import ArrowSVG from "../../common/ArrowSVG";

const TeamSection = () => {
  const members = [
    {name:"Rahul Sharma", role:"CEO & Founder",  img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=390&fit=crop&crop=face"},
    {name:"Priya Kapoor", role:"CTO",             img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=390&fit=crop&crop=face"},
    {name:"Arjun Mehta",  role:"Head of Design",  img:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=390&fit=crop&crop=face"},
    {name:"Sneha Patel",  role:"Lead Developer",  img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=390&fit=crop&crop=face"},
  ];

  return (
    <section>
      <div className="container mil-p-120-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 col-xl-4">
            <div className="mil-mb-90">
              <h2 className="mil-up mil-mb-60">
                Meet <br/>Our <span className="mil-thin">Team</span>
              </h2>
              <p className="mil-up mil-mb-30">
                We are talented individuals who are passionate about bringing ideas to life. With a diverse range of backgrounds and skill sets, we collaborate to produce innovative digital solutions for our clients.
              </p>
              <p className="mil-up mil-mb-60">
                Together, our creative team is committed to delivering impactful work that exceeds expectations and drives real business results.
              </p>
              <div className="mil-up">
                <Link to="/contact" className="mil-button mil-mb-60">
                  <span>Join our team</span>
                  <ArrowSVG/>
                </Link>
              </div>
              <h4 className="mil-up"><span className="mil-thin">We</span> deliver <br/><span className="mil-thin">exceptional</span> results.</h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mil-team-list">
              <div className="row mil-mb-60">
                <div className="col-md-6">
                  {[members[0],members[1]].map((m,i)=>(
                    <div className="mil-team-card mil-up mil-mb-30" key={i}>
                      <img src={m.img} alt={m.name}/>
                      <div className="mil-description">
                        <div className="mil-secrc-text">
                          <h5 className="mil-muted mil-mb-5">{m.name}</h5>
                          <p className="mil-light-soft mil-mb-10">{m.role}</p>
                          <ul className="mil-social-icons mil-center">
                            {["fab fa-linkedin","fab fa-twitter","fab fa-github"].map((ic,j)=>(
                              <li key={j}><a href="#." target="_blank" rel="noreferrer"><i className={ic}/></a></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-md-6">
                  <p className="mil-mobile-hidden mil-text-sm mil-mb-30" style={{height:"30px"}}>
                    <span className="mil-accent">*</span> Sharvix Leadership
                  </p>
                  {[members[2],members[3]].map((m,i)=>(
                    <div className="mil-team-card mil-up mil-mb-30" key={i}>
                      <img src={m.img} alt={m.name}/>
                      <div className="mil-description">
                        <div className="mil-secrc-text">
                          <h5 className="mil-muted mil-mb-5">{m.name}</h5>
                          <p className="mil-light-soft mil-mb-10">{m.role}</p>
                          <ul className="mil-social-icons mil-center">
                            {["fab fa-linkedin","fab fa-twitter","fab fa-github"].map((ic,j)=>(
                              <li key={j}><a href="#." target="_blank" rel="noreferrer"><i className={ic}/></a></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
