import { Link } from "react-router-dom";
import ArrowSVG from "../common/ArrowSVG";

const Team = () => {
  const members = [
    {name:"Anna Oldman",role:"Art Director",img:"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=300&h=390&fit=crop&crop=face"},
    {name:"Oscar Freeman",role:"Frontend Dev",img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=390&fit=crop&crop=face"},
    {name:"Emma Newman",role:"Founder",img:"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=390&fit=crop&crop=face"},
    {name:"Lisa Trueman",role:"UI/UX Designer",img:"https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=390&fit=crop&crop=face"},
  ];
  return (
    <section>
      <div className="container-inner mil-p-120-30">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-5 col-xl-4">
            <div className="mil-mb-90">
              <h2 className="mil-mb-60">Meet <br/>Our Team</h2>
              <p className="mil-mb-30">We are talented individuals who are passionate about bringing ideas to life. With a diverse range of backgrounds and skill sets, we collaborate to produce effective solutions for our clients.</p>
              <p className="mil-mb-60">Together, our creative team is committed to delivering impactful work that exceeds expectations.</p>
              <div className="mil-mb-60">
                <Link to="/about" className="mil-button"><span>Read more</span><ArrowSVG /></Link>
              </div>
              <h4><span className="mil-thin">We</span> delivering <br/><span className="mil-thin">exceptional</span> results.</h4>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="mil-team-list">
              <div className="row mil-mb-60">
                <div className="col-md-6">
                  {[members[0], members[1]].map((m,i)=>(
                    <div className="mil-team-card mil-mb-30" key={i}>
                      <img src={m.img} alt={m.name} />
                      <div className="mil-description">
                        <div className="mil-secrc-text">
                          <h5 className="mil-muted mil-mb-5">{m.name}</h5>
                          <p className="mil-light-soft mil-mb-10">{m.role}</p>
                          <ul className="mil-social-icons mil-center">
                            {["fab fa-behance","fab fa-dribbble","fab fa-twitter","fab fa-github"].map((ic,j)=>(
                              <li key={j}><a href="#." className="social-icon"><i className={ic}></i></a></li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="col-md-6">
                  <p className="mil-mobile-hidden mil-text-sm mil-mb-30" style={{height:"30px"}}><span className="mil-accent">*</span> The founders of our agency</p>
                  {[members[2], members[3]].map((m,i)=>(
                    <div className="mil-team-card mil-mb-30" key={i}>
                      <img src={m.img} alt={m.name} />
                      <div className="mil-description">
                        <div className="mil-secrc-text">
                          <h5 className="mil-muted mil-mb-5">{m.name}</h5>
                          <p className="mil-light-soft mil-mb-10">{m.role}</p>
                          <ul className="mil-social-icons mil-center">
                            {["fab fa-behance","fab fa-dribbble","fab fa-twitter","fab fa-github"].map((ic,j)=>(
                              <li key={j}><a href="#." className="social-icon"><i className={ic}></i></a></li>
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

export default Team;
