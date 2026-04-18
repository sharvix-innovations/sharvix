import { useState } from "react";
import ArrowSVG from "../../common/ArrowSVG";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "", services: [] });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleServiceChange = (service) => {
    setForm(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch(
        import.meta.env.VITE_BACKEND_URL 
          ? `${import.meta.env.VITE_BACKEND_URL}/api/send-email`
          : 'http://localhost:5000/api/send-email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            phone: form.phone,
            subject: form.subject,
            message: form.message,
            services: form.services
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send email');
      }

      setSent(true);
      setForm({ name: "", email: "", phone: "", subject: "", message: "", services: [] });
      setTimeout(() => setSent(false), 4000);
    } catch (err) {
      console.error("Email error:", err);
      setError(err.message || "Failed to send message. Please try again or contact us directly.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="container mil-p-120-60">
        <div className="row justify-content-between">

          {/* Left — info col */}
          <div className="col-lg-4 mil-relative mil-mb-90">
            <h2 className="mil-up mil-mb-30">
              Your <span className="mil-thin">Direct Line</span><br/>
              to <span className="mil-thin">Our Team</span>
            </h2>
            <p className="mil-up mil-mb-60">
              We'd love to hear about your project. Reach out through any channel below and our team will get back to you within 24 hours.
            </p>

            {/* contact details */}
            <ul style={{listStyle:"none",padding:0,marginBottom:"60px"}}>
              {[
                {icon:"📧", label:"Email Us", val:"sharvixinnovations@gmail.com",   href:"mailto:sharvixinnovations@gmail.com"},
                {icon:"📞", label:"Call Us",  val:"+91 84830 22829",               href:"tel:+918483022829"},
                {icon:"📍", label:"Visit Us", val:"Vinayak Apartments, Prabhat Road, Lane No. 11, Erandwane, Pune, Maharashtra 411004",    href:"#."},
                {icon:"🕐", label:"Working Hours", val:"Mon–Fri, 9AM – 6PM IST",   href:"#."},
              ].map((item,i)=>(
                <li key={i} style={{
                  borderBottom:"solid 1px rgba(2,19,80,0.1)",
                  padding:"18px 0",
                  display:"flex", alignItems:"flex-start", gap:"15px",
                  ...(i===0?{borderTop:"solid 1px rgba(2,19,80,0.1)"}:{})
                }}>
                  <span style={{fontSize:"20px",lineHeight:1.4,flexShrink:0}}>{item.icon}</span>
                  <div>
                    <p style={{fontSize:"12px",fontWeight:"500",textTransform:"uppercase",letterSpacing:"2px",marginBottom:"4px",color:"rgba(2,19,80,0.4)"}}>{item.label}</p>
                    <a href={item.href} style={{fontWeight:"500",color:"#021350",fontSize:"15px",transition:"color 0.2s"}}
                       onMouseEnter={e=>e.target.style.color="#0597F2"}
                       onMouseLeave={e=>e.target.style.color="#021350"}>
                      {item.val}
                    </a>
                  </div>
                </li>
              ))}
            </ul>

            {/* social icons */}
            <h6 className="mil-mb-30">Follow <span style={{fontWeight:100}}>Us</span></h6>
            <ul className="mil-social-icons" style={{gap:"10px"}}>
              {[
                {ic:"fab fa-linkedin",   href:"https://www.linkedin.com/company/sharvix-innovations/"},
                {ic:"fab fa-instagram",  href:"https://www.instagram.com/sharvixinnovations?igsh=OGlvMXBqdDFlMzJ3"},
                {ic:"fab fa-whatsapp",   href:"https://wa.me/918483022829"},
                {ic:"fas fa-envelope",   href:"mailto:sharvixinnovations@gmail.com"},
              ].map((s,i)=>(
                <li key={i}>
                  <a href={s.href} target="_blank" rel="noreferrer"
                     style={{
                       width:"40px",height:"40px",borderRadius:"50%",
                       backgroundColor:"rgba(2,19,80,0.08)",display:"flex",
                       alignItems:"center",justifyContent:"center",
                       color:"#021350",fontSize:"16px",transition:"0.4s cubic-bezier(0,0,0.3642,1)"
                     }}
                     onMouseEnter={e=>{e.currentTarget.style.backgroundColor="#0597F2";}}
                     onMouseLeave={e=>{e.currentTarget.style.backgroundColor="rgba(2,19,80,0.08)";}}
                  >
                    <i className={s.ic}/>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right — contact form col */}
          <div className="col-lg-7">
            {sent ? (
              <div style={{
                padding:"60px",border:"solid 1px #E1E5F5",
                textAlign:"center",borderTop:"solid 4px #0597F2"
              }}>
                <div style={{fontSize:"48px",marginBottom:"20px"}}>✓</div>
                <h4 className="mil-mb-15">Message Sent!</h4>
                <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {error && (
                  <div style={{
                    padding:"15px",
                    backgroundColor:"#fee",
                    border:"1px solid #fcc",
                    borderRadius:"4px",
                    marginBottom:"20px",
                    color:"#c33",
                    fontSize:"14px"
                  }}>
                    {error}
                  </div>
                )}
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder="Your name"
                      value={form.name}
                      onChange={e=>setForm({...form,name:e.target.value})}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      placeholder="Email address"
                      value={form.email}
                      onChange={e=>setForm({...form,email:e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <input
                      type="tel"
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={e=>setForm({...form,phone:e.target.value})}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="text"
                      placeholder="Subject"
                      value={form.subject}
                      onChange={e=>setForm({...form,subject:e.target.value})}
                      required
                    />
                  </div>
                </div>
                <textarea
                  placeholder="Tell us about your project"
                  value={form.message}
                  onChange={e=>setForm({...form,message:e.target.value})}
                  required
                />

                {/* service interest checkboxes */}
                <p style={{fontSize:"12px",textTransform:"uppercase",letterSpacing:"2px",fontWeight:"500",color:"rgba(0,0,0,0.5)",marginBottom:"20px"}}>I'm interested in:</p>
                <div className="row" style={{marginBottom:"30px"}}>
                  {["Web Design","Mobile App","Digital Marketing","UI/UX Design","Cloud Solutions","AI & Automation"].map((s,i)=>(
                    <div className="col-md-6" key={i} style={{marginBottom:"10px"}}>
                      <label style={{display:"flex",alignItems:"center",gap:"12px",cursor:"pointer",fontSize:"12px",fontWeight:"500",textTransform:"uppercase",letterSpacing:"2px",color:"rgba(0,0,0,0.5)"}}>
                        <input
                          type="checkbox"
                          checked={form.services.includes(s)}
                          onChange={() => handleServiceChange(s)}
                          style={{
                            width:"18px",height:"18px",accentColor:"#0597F2",
                            cursor:"pointer",flexShrink:0,border:"none",
                            borderBottom:"none",margin:0,padding:0,
                          }}
                        />
                        {s}
                      </label>
                    </div>
                  ))}
                </div>

                <button type="submit" className="mil-button" disabled={loading}>
                  <span>{loading ? "Sending..." : "Send message"}</span> 
                  <ArrowSVG/>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
