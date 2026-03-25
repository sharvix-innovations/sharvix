const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@100;200;300;400;500;600;700;800;900&display=swap');
    @import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.0/css/all.min.css');

    * { box-sizing: border-box; padding: 0; margin: 0; }
    html, body { font-family: 'Outfit', sans-serif; font-size: 16px; font-weight: 300; color: #6B7280; line-height: 150%; overscroll-behavior: none; }
    a { color: inherit; text-decoration: none; }
    ::-webkit-scrollbar { display: none; }

    .mil-wrapper { position: relative; overflow: hidden; max-width: 100%; }

    /* Typography */
    h1 { font-size: 86px; font-weight: 500; line-height: 120%; color: #021350; }
    h2 { font-size: 68px; font-weight: 500; line-height: 120%; color: #021350; }
    h3 { font-size: 42px; font-weight: 500; line-height: 120%; color: #021350; }
    h4 { font-size: 28px; font-weight: 500; line-height: 120%; color: #021350; }
    h5 { font-size: 20px; font-weight: 500; line-height: 150%; color: #021350; }
    h6 { font-size: 18px; font-weight: 500; line-height: 150%; color: #021350; }
    @media(max-width:1400px){h1{font-size:74px;}}
    @media(max-width:1200px){h1{font-size:72px;}h2{font-size:56px;}h3{font-size:39px;}h4{font-size:26px;}h6{font-size:17px;}}
    @media(max-width:992px){h1{font-size:58px;}h2{font-size:44px;}h3{font-size:36px;}h4{font-size:24px;}h6{font-size:16px;}}
    @media(max-width:768px){h1{font-size:34px;}h2{font-size:36px;}h3{font-size:30px;}h4{font-size:22px;}h5{font-size:18px;}h6{font-size:21px;} h1 br,h2 br,h3 br,h4 br,h5 br,h6 br{display:none;}}

    .mil-h1 { font-size: 86px; font-weight: 500; line-height: 120%; color: #021350; }
    @media(max-width:1400px){.mil-h1{font-size:74px;}}
    @media(max-width:1200px){.mil-h1{font-size:72px;}}
    @media(max-width:992px){.mil-h1{font-size:58px;}}
    @media(max-width:768px){.mil-h1{font-size:34px;}}

    .mil-thin { font-weight: 100; }
    .mil-bold { font-weight: 500; }
    .mil-upper { text-transform: uppercase; font-size: 12px; font-weight: 500; letter-spacing: 2px; }
    .mil-accent { color: #0597F2; }
    .mil-muted { color: rgba(255,255,255,0.9); }
    .mil-dark { color: #021350; }
    .mil-light { color: #fff !important; }
    .mil-light-soft { color: rgba(255,255,255,0.4); }
    .mil-dark-soft { color: #6B7280; }
    .mil-center { text-align: center; }
    .mil-no-wrap { white-space: nowrap; }
    .mil-text-sm { font-size: 15px; }
    .mil-text-xl { font-size: 22px; line-height: 180%; }
    @media(max-width:768px){.mil-text-xl{font-size:20px;}}
    .mil-marker { background-color: #0597f2ff; padding: 0 5px; }

    /* Dark BG (invert trick) */
    .mil-dark-bg { position: relative; background: #fff; }
    // .mil-dark-bg::before { content:''; width:100%; height:100%; position:absolute; pointer-events:none; z-index:2; backdrop-filter: invert(100%); -webkit-backdrop-filter: invert(100%); }
    .mil-dark-bg::before { content:''; width:100%; height:100%; position:absolute; pointer-events:none; z-index:2; backdrop-filter: invert(100%) grayscale(100%) brightness(150%); -webkit-backdrop-filter: invert(100%) }
    .mil-dark-bg .mi-invert-fix { height:100%; position:relative; pointer-events:none; z-index:3; }
    .mil-dark-bg .mi-invert-fix .container-inner { pointer-events:none; }
    .mil-dark-bg .mi-invert-fix .container-inner > * { pointer-events:all; }
    .mil-soft-bg { background-color: #F4F6FB; }

    /* Suptitle */
    .mil-suptitle { position:relative; display:block; margin-bottom:60px; }
    .mil-suptitle::before { content:''; position:absolute; right:calc(100% + 30px); top:10px; width:600px; height:1px; background-color:#fff; opacity:0.2; }
    .mil-suptitle-right { text-align:right; }
    .mil-suptitle-right::before { left:calc(100% + 30px); right:auto; }
    .mil-suptitle-dark::before { background-color:#021350; opacity:0.1; }
    @media(max-width:768px){.mil-suptitle-right{text-align:center;}.mil-suptitle-right::before{display:none;}}

    /* Button */
    .mil-button { cursor:pointer; display:inline-flex; align-items:center; justify-content:center; border:none; letter-spacing:2px; font-size:12px; background-color:#0597F2; color:#021350; border-radius:70px; padding:0 15px 0 50px; height:70px; text-transform:uppercase; font-weight:500; transition:0.4s cubic-bezier(0,0,0.3642,1); font-family:'Outfit',sans-serif; }
    .mil-button span { white-space:nowrap; }
    .mil-button svg { margin-left:30px; border-radius:50%; width:40px; height:40px; padding:10px; background-color:#021350; transition:0.4s cubic-bezier(0,0,0.3642,1); }
    .mil-button svg path { fill:#0597F2; }
    .mil-button:hover { transform:scale(1.015); filter:brightness(110%); }
    .mil-button:hover svg { transform:scale(1.15); }
    .mil-button.mil-icon-button-sm { padding:0; height:40px; }
    .mil-button.mil-icon-button-sm svg { margin-left:0; background-color:#0597F2; }
    .mil-button.mil-icon-button-sm svg path { fill:#021350; }
    .mil-btn-space { margin-right:30px; }
    @media(max-width:500px){.mil-btn-space{margin-right:50px;margin-bottom:30px;}}
    @media(max-width:992px){.mil-button{height:60px;padding:0 10px 0 40px;}.mil-button svg{margin-left:25px;}}
    .mil-arrow-down svg { transform:rotate(90deg); }

    /* Link */
    .mil-link { cursor:pointer; display:inline-flex; align-items:center; font-weight:500; text-transform:uppercase; letter-spacing:2px; font-size:12px; }
    .mil-link svg { margin-left:15px; border-radius:50%; width:40px; height:40px; padding:10px; background-color:rgba(255,255,255,0.1); transition:0.4s cubic-bezier(0,0,0.3642,1); }
    .mil-link svg path { fill:#fff; }
    .mil-link.mil-dark svg { background-color:rgba(2,19,80,0.1); }
    .mil-link.mil-dark svg path { fill:#021350; }
    .mil-link.mil-muted svg path { fill:rgba(255,255,255,0.9); }
    .mil-link:hover svg { transform:scale(1.15); }

    /* Divider */
    .mil-divider { width:100%; height:1px; background-color:rgba(255,255,255,0.1); }

    /* Frame / Logo */
    .mil-logo { font-size:42px; font-weight:500; line-height:100%; }
    @media(max-width:992px){.mil-logo{font-size:36px;}}

    .mil-frame { padding:50px 60px 60px 60px; position:fixed; z-index:2; pointer-events:none; display:flex; flex-direction:column; justify-content:space-between; width:100%; height:100%; }
    @media(max-width:1200px){.mil-frame{padding:0;z-index:999;height:90px;}}
    .mil-frame-top { display:flex; justify-content:space-between; align-items:center; }
    .mil-frame-top .mil-logo { pointer-events:all; color:#021350; }
    .mil-frame .mil-frame-bottom { width:100%; display:flex; justify-content:space-between; align-items:flex-end; }
    @media(max-width:1200px){.mil-frame .mil-frame-bottom{display:none;}}
    .mil-frame .mil-frame-bottom .mil-current-page { pointer-events:none; font-weight:500; text-transform:uppercase; letter-spacing:2px; font-size:12px; width:300px; color:#021350; transform:rotate(-90deg) translateX(138px) translateY(-138px); }
    .mil-frame .mil-frame-bottom .mil-back-to-top { width:300px; transform:rotate(-90deg) translateX(130px) translateY(130px); pointer-events:all; }
    @media(max-width:1200px){.mil-frame .mil-frame-top{height:90px;background-color:rgba(0,0,0,0.95);border-bottom:solid 1px rgba(255,255,255,0.1);padding:0 30px;backdrop-filter:blur(8px);}.mil-frame .mil-frame-top .mil-logo{color:#fff;}.mil-frame .mil-frame-top .mil-menu-btn span,.mil-frame .mil-frame-top .mil-menu-btn span::after,.mil-frame .mil-frame-top .mil-menu-btn span::before{background:#fff;}}

    /* Menu Button */
    .mil-menu-btn { pointer-events:all; height:28px; cursor:pointer; display:flex; justify-content:center; align-items:center; transition:0.4s cubic-bezier(0,0,0.3642,1); }
    .mil-menu-btn span,.mil-menu-btn span::after,.mil-menu-btn span::before { content:''; display:block; width:28px; height:2.5px; background:#021350; backface-visibility:hidden; transition:inherit; }
    .mil-menu-btn span { position:relative; }
    .mil-menu-btn span::after,.mil-menu-btn span::before { position:absolute; }
    .mil-menu-btn span::before { top:-9px; }
    .mil-menu-btn span::after { width:18px; top:9px; }
    .mil-menu-btn.mil-active span { transform:rotate(45deg); }
    .mil-menu-btn.mil-active span::before { transform:translate(0px,9px) rotate(-90deg); }
    .mil-menu-btn.mil-active span::after { opacity:0; width:24px; transform:translate(0px,-9px) rotate(-90deg); }

    /* Menu Frame */
    .mil-menu-frame { position:fixed; z-index:9; width:100%; height:100vh; background-color:#021350; opacity:0; pointer-events:none; transition:0.4s cubic-bezier(0,0,0.3642,1); }
    .mil-menu-frame.mil-active { opacity:1; pointer-events:all; }
    .mil-menu-frame .mil-frame-top { position:absolute; top:0; left:0; width:100%; padding:50px 60px; }
    @media(max-width:1200px){.mil-menu-frame .mil-frame-top{display:none;}}
    .mil-menu-frame:not(.mil-active) .mil-frame-top .mil-logo,
    .mil-menu-frame:not(.mil-active) .mil-frame-top .mil-menu-btn { pointer-events:none; }
    .mil-menu-frame .mil-frame-top .mil-logo { color:#fff; }
    .mil-menu-frame .mil-frame-top .mil-menu-btn span,.mil-menu-frame .mil-frame-top .mil-menu-btn span::after,.mil-menu-frame .mil-frame-top .mil-menu-btn span::before { background-color:#fff; }
    .mil-menu-frame .mil-main-menu { transform:translateX(-30px); opacity:0; transition:0.4s cubic-bezier(0,0,0.3642,1); }
    @media(max-width:1200px){.mil-menu-frame .mil-main-menu{transform:translateY(30px);}}
    .mil-menu-frame.mil-active .mil-main-menu { transform:translateX(0); opacity:1; transition-delay:0.4s; }
    @media(max-width:1200px){.mil-menu-frame.mil-active .mil-main-menu{transform:translateY(0);}}
    .mil-menu-frame .mil-menu-right-frame { padding-left:60px; position:relative; height:100vh; display:flex; align-items:flex-end; border-left:solid 1px rgba(255,255,255,0.1); opacity:0; transform:translateY(30px); transition:0.4s cubic-bezier(0,0,0.3642,1); }
    .mil-menu-frame.mil-active .mil-menu-right-frame { opacity:1; transform:translateY(0); transition-delay:0.6s; }
    .mil-menu-frame .mil-menu-right-frame .mil-menu-right { padding-bottom:60px; }
    @media(max-width:1200px){.mil-menu-frame .mil-menu-right-frame{display:none;}}

    /* Main Menu */
    .mil-main-menu { height:100vh; display:flex; align-items:center; }
    .mil-main-menu ul { padding:0; margin:0; }
    .mil-main-menu ul li { margin-bottom:40px; list-style:none; }
    .mil-main-menu ul li:last-child { margin-bottom:0; }
    .mil-main-menu ul li > a { position:relative; display:flex; align-items:center; font-weight:500; color:rgba(255,255,255,0.8); font-size:34px; transition:0.4s cubic-bezier(0,0,0.3642,1); }
    @media(max-width:992px){.mil-main-menu ul li > a{font-size:26px;}}
    .mil-main-menu ul li > a::before { content:''; position:absolute; left:0; width:10px; height:10px; border-radius:50%; background-color:rgba(255,255,255,0.4); transform:scale(0); transition:0.4s cubic-bezier(0,0,0.3642,1); }
    .mil-main-menu ul li > a:hover { color:#fff; }
    .mil-main-menu ul li.mil-active > a { color:#0597F2; }
    .mil-main-menu ul li.mil-has-children ul { padding-left:25px; overflow:hidden; max-height:0; transition:0.6s cubic-bezier(0,0,0.3642,1); }
    .mil-main-menu ul li.mil-has-children ul li { margin-bottom:5px; }
    .mil-main-menu ul li.mil-has-children ul li:first-child { margin-top:40px; }
    .mil-main-menu ul li.mil-has-children ul li a { display:block; font-size:12px; color:rgba(255,255,255,0.4); letter-spacing:2px; font-weight:500; text-transform:uppercase; }
    .mil-main-menu ul li.mil-has-children ul li a:hover { color:rgba(255,255,255,0.8); transform:translateX(5px); }
    .mil-main-menu ul li.mil-has-children ul.mil-active { max-height:200px; }
    @media(max-width:1200px){.mil-main-menu{justify-content:center;}.mil-main-menu ul{display:flex;flex-direction:column;align-items:center;}.mil-main-menu ul li{margin-bottom:30px;}.mil-main-menu ul li > a{justify-content:center;}.mil-main-menu ul li.mil-has-children ul{padding-left:0;}.mil-main-menu ul li.mil-has-children ul li:first-child{margin-top:30px;}}

    /* Menu List */
    .mil-menu-list li { list-style:none; margin-bottom:15px; }
    .mil-menu-list li:last-child { margin-bottom:0; }
    .mil-menu-list li a { display:block; transition:0.2s cubic-bezier(0,0,0.3642,1); }
    .mil-menu-list li a:hover { transform:translateX(5px); color:#fff; }

    /* Banner */
    .mil-banner { height:100vh; }
    .mil-banner .banner-container { height:100%; display:flex; align-items:flex-end; }
    .mil-banner .mil-banner-content { width:100%; padding-bottom:120px; position:relative; }
    @media(max-width:992px){.mil-banner .mil-banner-content{padding-bottom:90px;}}

    /* Animation Frame */
    .mil-animation-frame { width:100%; height:100vh; position:absolute; top:0; animation:jump 10s linear infinite; pointer-events:none; }
    @keyframes jump { 0%{transform:translateY(-30px);} 50%{transform:translateY(30px);} 100%{transform:translateY(-30px);} }
    .mil-animation { position:absolute; display:inline-block; width:300px; height:300px; opacity:0.2; pointer-events:none; }
    .mil-position-1 { top:100px; right:100px; }
    .mil-position-2 { top:-10px; right:20%; }
    .mil-position-3 { bottom:-100px; right:35%; }
    @media(max-width:1400px){.mil-position-2,.mil-position-3{display:none;}}
    .mil-scale { background: radial-gradient(circle, rgba(5, 151, 242, 1) 0%, rgba(255,152,0,0) 70%); border-radius:50%; }

    /* Dodecahedron */
    .mil-dodecahedron { position:relative; left:100px; top:40px; width:100px; height:223px; transform-style:preserve-3d; animation:rotate 100s infinite linear; }
    @keyframes rotate { from{transform:rotateX(0deg) rotateY(360deg) rotateZ(360deg);} to{transform:rotateX(360deg) rotateY(0deg) rotateZ(-360deg);} }
    .mil-pentagon { position:absolute; width:100px; }
    .mil-pentagon:nth-child(1){transform:rotateY(.2turn) translateZ(69px) rotateX(26.5deg);}
    .mil-pentagon:nth-child(2){transform:rotateY(.4turn) translateZ(69px) rotateX(26.5deg);}
    .mil-pentagon:nth-child(3){transform:rotateY(.6turn) translateZ(69px) rotateX(26.5deg);}
    .mil-pentagon:nth-child(4){transform:rotateY(.8turn) translateZ(69px) rotateX(26.5deg);}
    .mil-pentagon:nth-child(5){transform:rotateY(1turn) translateZ(69px) rotateX(26.5deg);}
    .mil-pentagon:nth-child(6){bottom:0;transform:rotateY(.2turn) translateZ(-69px) rotateX(206.5deg);}
    .mil-pentagon:nth-child(7){bottom:0;transform:rotateY(.4turn) translateZ(-69px) rotateX(206.5deg);}
    .mil-pentagon:nth-child(8){bottom:0;transform:rotateY(.6turn) translateZ(-69px) rotateX(206.5deg);}
    .mil-pentagon:nth-child(9){bottom:0;transform:rotateY(.8turn) translateZ(-69px) rotateX(206.5deg);}
    .mil-pentagon:nth-child(10){bottom:0;transform:rotateY(1turn) translateZ(-69px) rotateX(206.5deg);}
    .mil-pentagon:nth-child(11){transform:translateZ(69px) rotateX(-90deg);}
    .mil-pentagon:nth-child(12){bottom:0;transform:translateZ(-69px) rotateX(90deg);}
    .mil-pentagon div { position:absolute; width:100px; height:69px; transform-origin:bottom; border-top:0.1px solid #fff; }
    .mil-pentagon div:nth-child(1){transform:rotate(.2turn);}
    .mil-pentagon div:nth-child(2){transform:rotate(.4turn);}
    .mil-pentagon div:nth-child(3){transform:rotate(.6turn);}
    .mil-pentagon div:nth-child(4){transform:rotate(.8turn);}
    .mil-pentagon div:nth-child(5){transform:rotate(1turn);}

    /* Gradient overlay */
    .mil-gradient { position:absolute; bottom:0; left:0; width:100%; height:60%; background:linear-gradient(to top, #6B7280 0%, transparent 100%); pointer-events:none; z-index:1; }

    /* Circle Text */
    .mil-circle-text { position:absolute; right:0; bottom:90px; display:flex; justify-content:center; align-items:center; width:140px; height:140px; }
    .mil-ct-svg { transform:scale(2); width:140px; height:140px; }
    .mil-ct-svg text { fill:rgba(255,255,255,0.4); text-transform:uppercase; font-size:12px; font-weight:500; transition:0.4s; }
    .mil-circle-text:hover .mil-ct-svg text { fill:#fff; }
    .mil-circle-text .mil-button { position:absolute; }
    @keyframes mil-rotate { from{transform:scale(2) rotate(0deg);} to{transform:scale(2) rotate(360deg);} }
    .mil-rotate { animation:mil-rotate 10s linear infinite; }
    @media(max-width:992px){.mil-circle-text{display:none;}}

    /* About */
    .mil-about-quote { display:flex; justify-content:space-between; align-items:center; }
    .mil-about-quote .mil-avatar { width:90px; height:90px; border-radius:50%; position:relative; flex-shrink:0; }
    .mil-about-quote .mil-avatar::after { content:'"'; color:#021350; width:30px; height:30px; border-radius:50%; background-color:#0597F2; position:absolute; bottom:0; right:0; display:flex; padding-top:12px; justify-content:center; font-size:36px; }
    .mil-about-quote .mil-avatar img { border-radius:50%; width:100%; height:100%; object-fit:cover; object-position:top; }
    .mil-about-quote .mil-quote { padding-left:30px; width:calc(100% - 90px); }
    .mil-about-photo { position:relative; }
    .mil-img-frame { position:relative; overflow:hidden; width:100%; }
    .mil-img-frame img { position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; }

    /* Services */
    .mil-complex-text { display:flex; align-items:center; }
    .mil-complex-text .mil-button { margin-left:30px; }
    @media(max-width:768px){.mil-complex-text{flex-direction:column;}.mil-complex-text .mil-button{margin-left:0;margin-top:60px;}}
    .mil-text-image { height:80px; width:250px; display:inline-block; overflow:hidden; border-radius:70px; margin-right:30px; }
    .mil-text-image img { width:100%; height:100%; object-fit:cover; object-position:top; transition:0.4s cubic-bezier(0,0,0.3642,1); }
    .mil-text-image:hover img { transform:scale(1.05); }
    @media(max-width:768px){.mil-text-image{display:none;}}
    .mil-service-card-sm { position:relative; display:block; padding:60px 30px; transition:0.4s; }
    .mil-service-card-sm p { opacity:0; transform:translateY(10px); overflow:hidden; display:-webkit-box; -webkit-line-clamp:3; -webkit-box-orient:vertical; transition:0.4s cubic-bezier(0,0,0.3642,1); }
    .mil-service-card-sm .mil-button { transform:scale(0.3); filter:grayscale(100%); opacity:0.4; }
    .mil-service-card-sm::before { content:''; position:absolute; top:0; left:0; height:4px; width:0; background-color:#0597F2; transition:0.6s cubic-bezier(0,0,0.3642,1); }
    .mil-service-card-sm:hover p { opacity:1; transform:translateY(0); }
    .mil-service-card-sm:hover .mil-button { transform:scale(1); filter:grayscale(0); opacity:1; }
    .mil-service-card-sm:hover::before { width:100%; }
    @media(max-width:992px){.mil-service-card-sm p{opacity:1;transform:translateY(0);}.mil-service-card-sm .mil-button{transform:scale(1);filter:grayscale(0);opacity:1;}}
    .mil-services-grid { border-top:solid 1px rgba(255,255,255,0.1); }
    .mil-services-grid-item { border-right:solid 1px rgba(255,255,255,0.1); }
    .mil-services-grid-item:first-child { border-left:solid 1px rgba(255,255,255,0.1); }
    @media(max-width:768px){.mil-services-grid-item{border-left:solid 1px rgba(255,255,255,0.1);border-bottom:solid 1px rgba(255,255,255,0.1);}}

    /* Team */
    .mil-team-card { position:relative; overflow:hidden; padding-bottom:130%; }
    .mil-team-card::after { content:''; position:absolute; bottom:0; left:0; height:4px; width:0; background-color:#0597F2; transition:0.6s cubic-bezier(0,0,0.3642,1); }
    .mil-team-card img { position:absolute; top:0; left:0; width:100%; height:100%; object-fit:cover; object-position:top; transform:scale(1.05); transition:0.4s cubic-bezier(0,0,0.3642,1); }
    .mil-team-card .mil-description { opacity:0; text-align:center; background-color:rgba(2,19,80,0.8); position:absolute; top:0; left:0; width:100%; height:100%; padding:60px 30px; display:flex; flex-direction:column; justify-content:flex-end; pointer-events:none; transition:0.6s cubic-bezier(0,0,0.3642,1); }
    .mil-team-card .mil-description .mil-secrc-text { opacity:0; transform:translateY(15px); transition:0.4s cubic-bezier(0,0,0.3642,1); transition-delay:0s; }
    .mil-team-card .mil-description .mil-secrc-text a { color:#fff; transition:0.2s; }
    .mil-team-card .mil-description .mil-secrc-text a:hover { color:#0597F2; }
    .mil-team-card:hover img { transform:scale(1); }
    .mil-team-card:hover::after { width:100%; }
    .mil-team-card:hover .mil-description { opacity:1; pointer-events:all; }
    .mil-team-card:hover .mil-description .mil-secrc-text { opacity:1; transform:translateY(0); transition-delay:0.1s; }

    /* Social Icons */
    .mil-social-icons { padding:0; margin:0; display:flex; }
    .mil-social-icons.mil-center { justify-content:center; }
    .mil-social-icons li { list-style:none; margin-right:15px; }
    .mil-social-icons li:last-child { margin-right:0; }
    .mil-social-icons li a { color:#fff; font-size:18px; transition:0.4s; }
    .mil-social-icons li a:hover { color:#0597F2; }

    /* Reviews */
    .mil-quote-icon { display:block; margin:0 auto; width:40px; height:40px; margin-bottom:15px; }
    .mil-quote-icon path { fill:#0597F2; }
    .mil-review-frame { padding:0 30px; }
    .mil-slider-nav { display:flex; }
    .mil-slider-nav .mil-slider-arrow { width:40px; height:40px; padding:10px; background-color:#021350; border-radius:50%; cursor:pointer; transition:0.4s cubic-bezier(0,0,0.3642,1); }
    .mil-slider-nav .mil-slider-arrow svg path { fill:#0597F2; }
    .mil-slider-nav .mil-slider-arrow.mil-prev { margin-right:10px; transform:rotate(180deg); }
    .mil-slider-nav .mil-slider-arrow:hover { transform:scale(1.15); }
    .mil-slider-nav .mil-slider-arrow.mil-prev:hover { transform:rotate(180deg) scale(1.15); }
    .mil-slider-nav.mil-reviews-nav { position:absolute; top:160px; left:0; width:100%; justify-content:space-between; }
    @media(max-width:992px){.mil-slider-nav.mil-reviews-nav{top:0;}}
    .mil-slider-nav.mil-soft .mil-slider-arrow { background-color:#E1E5F5; }
    .mil-slider-nav.mil-soft .mil-slider-arrow svg path { fill:#021350; }

    /* Blog */
    .mil-blog-card { display:block; }
    .mil-blog-card .mil-cover-frame { position:relative; overflow:hidden; padding-bottom:65%; margin-bottom:30px; }
    .mil-blog-card .mil-cover-frame img { width:100%; height:100%; object-fit:cover; position:absolute; top:0; left:0; transition:0.4s cubic-bezier(0,0,0.3642,1); }
    .mil-blog-card .mil-post-descr { padding:30px 30px 0 0; }
    .mil-blog-card .mil-post-descr .mil-post-text { text-overflow:ellipsis; display:-webkit-box; -webkit-line-clamp:2; -webkit-box-orient:vertical; overflow:hidden; }
    .mil-blog-card:hover .mil-cover-frame img { transform:scale(1.05); }
    .mil-labels { display:flex; align-items:center; }
    .mil-labels .mil-label { margin-right:15px; }

    /* How We Work — Fixed Left + Scroll Right */
    .mil-hww-layout { display:flex; gap:60px; align-items:stretch; min-height:600px; }
    @media(max-width:992px){ .mil-hww-layout { flex-direction:column; gap:40px; min-height:auto; } }

    .mil-hww-sticky { flex:0 0 42%; display:flex; align-items:center; }
    @media(max-width:992px){ .mil-hww-sticky { align-items:flex-start; } }

    .mil-hww-sticky-inner { width:100%; }

    .mil-hww-progress { display:flex; gap:8px; align-items:center; }
    .mil-hww-dot { width:28px; height:4px; border-radius:4px; background:rgba(255,255,255,0.12); transition:0.5s cubic-bezier(0,0,0.3642,1); }
    .mil-hww-dot.mil-done { background:rgba(5,151,242,0.4); }
    .mil-hww-dot.mil-active { background:#0597F2; width:48px; box-shadow:0 0 12px rgba(5,151,242,0.4); }

    .mil-hww-scroll-wrap { flex:1; max-height:600px; overflow-y:auto; position:relative; padding-right:10px; scroll-behavior:smooth; }
    .mil-hww-scroll-wrap::-webkit-scrollbar { width:3px; }
    .mil-hww-scroll-wrap::-webkit-scrollbar-track { background:rgba(255,255,255,0.05); border-radius:3px; }
    .mil-hww-scroll-wrap::-webkit-scrollbar-thumb { background:rgba(5,151,242,0.3); border-radius:3px; }
    .mil-hww-scroll-wrap::-webkit-scrollbar-thumb:hover { background:#0597F2; }
    @media(max-width:992px){ .mil-hww-scroll-wrap { max-height:none; overflow-y:visible; padding-right:0; } }

    .mil-hww-steps { display:flex; flex-direction:column; gap:24px; }

    .mil-hww-step { display:flex; gap:24px; padding:30px; border:1px solid rgba(255,255,255,0.06); border-radius:16px; transition:0.4s cubic-bezier(0,0,0.3642,1); position:relative; overflow:hidden; }
    .mil-hww-step::before { content:''; position:absolute; top:0; left:0; width:4px; height:0%; background:#0597F2; transition:0.5s cubic-bezier(0,0,0.3642,1); }
    .mil-hww-step.mil-active { border-color:rgba(5,151,242,0.25); background:rgba(5,151,242,0.04); }
    .mil-hww-step.mil-active::before { height:100%; }

    .mil-hww-step-num { flex-shrink:0; width:52px; height:52px; border-radius:50%; border:2px solid rgba(255,255,255,0.12); display:flex; align-items:center; justify-content:center; font-size:16px; font-weight:600; color:rgba(255,255,255,0.3); transition:0.4s cubic-bezier(0,0,0.3642,1); }
    .mil-hww-step.mil-active .mil-hww-step-num { border-color:#0597F2; color:#0597F2; box-shadow:0 0 20px rgba(5,151,242,0.25); }

    .mil-hww-step-content { flex:1; }
    .mil-hww-step-content h4 { font-size:22px; }
    .mil-hww-step-content p { font-size:15px; }

    @media(max-width:768px){
      .mil-hww-step { gap:16px; padding:20px; }
      .mil-hww-step-num { width:42px; height:42px; font-size:14px; }
      .mil-hww-step-content h4 { font-size:19px; }
    }


    /* Our Clients */
    .mil-clients-slider { overflow:hidden; position:relative; width:100%; }
    .mil-clients-slider::before, .mil-clients-slider::after { content:''; position:absolute; top:0; width:100px; height:100%; z-index:2; pointer-events:none; }
    .mil-clients-slider::before { left:0; background:linear-gradient(90deg,#fff 0%,transparent 100%); }
    .mil-clients-slider::after { right:0; background:linear-gradient(270deg,#fff 0%,transparent 100%); }

    .mil-clients-track { display:flex; animation:clientSlide 25s linear infinite; width:max-content; }
    .mil-clients-track:hover { animation-play-state:paused; }
    @keyframes clientSlide { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }

    .mil-client-slide { flex-shrink:0; padding:0 15px; }
    .mil-client-slide-inner { display:flex; align-items:center; justify-content:center; padding:20px 40px; border:1px solid #E1E5F5; border-radius:12px; transition:0.4s cubic-bezier(0,0,0.3642,1); cursor:pointer; }
    .mil-client-slide-inner:hover { border-color:#0597F2; transform:translateY(-3px); box-shadow:0 6px 20px rgba(5,151,242,0.1); }

    .mil-client-slide-text { font-size:16px; font-weight:600; color:#021350; letter-spacing:1px; white-space:nowrap; opacity:0.5; transition:0.4s; }
    .mil-client-slide-inner:hover .mil-client-slide-text { opacity:1; color:#0597F2; }

    @media(max-width:768px){
      .mil-client-slide-inner { padding:15px 28px; }
      .mil-client-slide-text { font-size:14px; }
    }

    /* Tech Stack */
    .mil-tech-tabs { display:flex; flex-wrap:wrap; gap:8px; }
    .mil-tech-tab { cursor:pointer; padding:10px 28px; border:1px solid #E1E5F5; border-radius:50px; font-size:12px; font-weight:600; text-transform:uppercase; letter-spacing:2px; color:#6B7280; background:#fff; font-family:'Outfit',sans-serif; transition:0.4s cubic-bezier(0,0,0.3642,1); }
    .mil-tech-tab:hover { border-color:#0597F2; color:#021350; }
    .mil-tech-tab.mil-active { background:#0597F2; border-color:#021350; color:#fff; }

    .mil-tech-grid { display:grid; grid-template-columns:repeat(5,1fr); gap:20px; }
    @media(max-width:1200px){ .mil-tech-grid { grid-template-columns:repeat(4,1fr); } }
    @media(max-width:992px){ .mil-tech-grid { grid-template-columns:repeat(3,1fr); } }
    @media(max-width:576px){ .mil-tech-grid { grid-template-columns:repeat(2,1fr); } }

    .mil-tech-card { position:relative; display:flex; flex-direction:column; align-items:center; text-align:center; padding:36px 16px 28px; background:#fff; border:1px solid #E1E5F5; border-radius:16px; cursor:pointer; transition:0.4s cubic-bezier(0,0,0.3642,1); overflow:hidden; animation:techFadeIn 0.4s ease both; }
    @keyframes techFadeIn { from { opacity:0; transform:translateY(12px); } to { opacity:1; transform:translateY(0); } }
    .mil-tech-card:hover { border-color:var(--accent, #0597F2); transform:translateY(-6px); box-shadow:0 12px 32px rgba(0,0,0,0.06); }

    .mil-tech-card-glow { position:absolute; bottom:-30px; left:50%; transform:translateX(-50%); width:80px; height:80px; border-radius:50%; background:var(--accent, #0597F2); opacity:0; filter:blur(30px); transition:0.5s; pointer-events:none; }
    .mil-tech-card:hover .mil-tech-card-glow { opacity:0.2; }

    .mil-tech-card-icon { width:52px; height:52px; margin-bottom:16px; display:flex; align-items:center; justify-content:center; }
    .mil-tech-card-icon svg { width:100%; height:100%; }

    .mil-tech-card-name { font-size:15px; font-weight:500; color:#021350; margin-bottom:4px; line-height:120%; }
    .mil-tech-card-cat { font-size:11px; font-weight:500; text-transform:uppercase; letter-spacing:1.5px; color:#9CA3AF; }

    @media(max-width:768px){
      .mil-tech-card { padding:28px 12px 22px; }
      .mil-tech-card-icon { width:42px; height:42px; }
      .mil-tech-card-name { font-size:13px; }
      .mil-tech-tabs { gap:6px; }
      .mil-tech-tab { padding:8px 18px; font-size:11px; }
    }

    /* Footer */
    .mil-footer-menu { margin-bottom:120px; }
    .mil-footer-menu ul li { list-style:none; margin-bottom:30px; }
    .mil-footer-menu ul li a { display:block; font-weight:500; font-size:28px; color:rgba(255,255,255,0.9); transition:0.4s; }
    .mil-footer-menu ul li a:hover { transform:translateX(10px); color:#0597F2; }
    .mil-footer-menu ul li.mil-active a { color:#0597F2; }
    @media(max-width:768px){.mil-footer-menu ul li a{font-size:22px;}.mil-footer-menu{margin-bottom:60px;}}
    .mil-subscribe-form { position:relative; height:70px; width:100%; }
    .mil-subscribe-form input { height:100%; width:100%; background-color:rgba(255,255,255,0.1); color:#021350; font-size:12px; font-weight:500; text-transform:uppercase; letter-spacing:2px; border:none; border-radius:70px; padding:0 0 0 50px; transition:0.4s; font-family:'Outfit',sans-serif; }
    .mil-subscribe-form input::placeholder { color:rgb(128,128,128); font-family:'Outfit',sans-serif; font-size:12px; font-weight:500; text-transform:uppercase; letter-spacing:2px; }
    .mil-subscribe-form input:focus { background-color:#fff; outline:none; }
    .mil-subscribe-form input:hover { background-color:#fff; }
    .mil-subscribe-form .mil-button { position:absolute; top:15px; right:15px; }

    /* Curtain */
    .mil-curtain { position:fixed; pointer-events:none; z-index:4; background-color:#021350; opacity:0; width:100%; height:100vh; transition:0.6s; }

    /* Progress bar */
    .mil-progress-track { position:fixed; z-index:10; top:0; right:0; width:4px; height:100%; background-color:#021350; }
    .mil-progress { width:4px; background-color:#0597F2; transition:height 0.1s; }
    @media(max-width:992px){.mil-progress-track{display:none;}}

    /* Preloader */
    .mil-preloader { position:fixed; z-index:999; top:0; left:0; width:100%; height:100vh; background-color:#021350; display:flex; justify-content:center; align-items:center; transition:opacity 0.6s, visibility 0.6s; }
    .mil-preloader.mil-hidden { opacity:0; visibility:hidden; }
    .mil-preloader-text { color:#fff; font-size:42px; font-weight:300; display:flex; gap:20px; }

    /* Partners infinite scroll */
    .mil-infinite-scroll { display:flex; overflow:hidden; }
    .mil-infinite-track { display:flex; animation:scroll 15s linear infinite; }
    @keyframes scroll { 0%{transform:translateX(0);} 100%{transform:translateX(-50%);} }
    .mil-partner-frame { display:flex; align-items:center; justify-content:center; padding:0 40px; }
    .mil-partner-frame img { width:100%; }

    /* Lines decoration */
    .mil-lines-deco { position:absolute; opacity:0.05; pointer-events:none; }
    @media(max-width:992px){.mil-lines-deco{display:none;}}

    /* Responsive containers */
    .container-inner { max-width:1200px; margin:0 auto; padding:0 60px; }
    @media(max-width:992px){.container-inner{padding:0 30px;}}
    @media(max-width:576px){.container-inner{padding:0 20px;}}

    /* Grid */
    .row { display:flex; flex-wrap:wrap; margin:0 -15px; }
    .row > [class*='col-'] { padding:0 15px; }
    .col-12 { width:100%; }
    .col-md-4 { width:100%; }
    .col-md-6 { width:100%; }
    .col-md-7 { width:100%; }
    .col-lg-3 { width:100%; }
    .col-lg-4 { width:100%; }
    .col-lg-5 { width:100%; }
    .col-lg-6 { width:100%; }
    .col-lg-7 { width:100%; }
    .col-lg-8 { width:100%; }
    .col-lg-10 { width:100%; }
    .col-xl-4 { width:100%; }
    .col-xl-5 { width:100%; }
    .col-xl-7 { width:100%; }
    @media(min-width:768px){.col-md-4{width:33.333%;}.col-md-6{width:50%;}.col-md-7{width:58.333%;}}
    @media(min-width:992px){.col-lg-3{width:25%;}.col-lg-4{width:33.333%;}.col-lg-5{width:41.666%;}.col-lg-6{width:50%;}.col-lg-7{width:58.333%;}.col-lg-8{width:66.666%;}.col-lg-10{width:83.333%;}}
    @media(min-width:1200px){.col-xl-4{width:33.333%;}.col-xl-5{width:41.666%;}.col-xl-7{width:58.333%;}}

    .justify-content-between { justify-content:space-between; }
    .justify-content-center { justify-content:center; }
    .justify-content-end { justify-content:flex-end; }
    .align-items-center { align-items:center; }
    .align-items-end { align-items:flex-end; }
    .m-0 { margin:0 !important; }
    .p-0 { padding:0 !important; }
    .flex-sm-row-reverse { flex-direction:row-reverse; }
    @media(max-width:576px){.flex-sm-row-reverse{flex-direction:column;}}

    /* Spacing utilities */
    .mil-p-120-120 { padding-top:120px; padding-bottom:120px; }
    .mil-p-120-30 { padding-top:120px; padding-bottom:30px; }
    .mil-p-120-60 { padding-top:120px; padding-bottom:60px; }
    .mil-p-120-0 { padding-top:120px; }
    .mil-p-0-120 { padding-bottom:120px; }
    .mil-p-0-90 { padding-bottom:90px; }
    @media(max-width:992px){.mil-p-120-120{padding-top:90px;padding-bottom:90px;}.mil-p-120-30{padding-top:90px;padding-bottom:0;}.mil-p-120-60{padding-top:90px;padding-bottom:30px;}.mil-p-120-0{padding-top:90px;}.mil-p-0-120{padding-bottom:90px;}}
    .mil-mb-5{margin-bottom:5px;}.mil-mb-10{margin-bottom:10px;}.mil-mb-15{margin-bottom:15px;}.mil-mb-20{margin-bottom:15px;}.mil-mb-30{margin-bottom:30px;}.mil-mb-60{margin-bottom:60px;}.mil-mb-90{margin-bottom:90px;}.mil-mb-120{margin-bottom:120px;}
    @media(max-width:992px){.mil-mb-120{margin-bottom:90px;}}
    .mil-adaptive-right { width:100%; display:flex; justify-content:flex-end; }
    @media(max-width:992px){.mil-adaptive-right{justify-content:flex-start;}}
    .mil-mobile-hidden { display:block; }
    @media(max-width:992px){.mil-mobile-hidden{display:none;}}
    .mil-vert-between { display:flex; flex-direction:column; justify-content:space-between; height:100%; }

    /* Arrow SVG used in buttons/links */
    .arrow-svg { width:24px; height:24px; }
    .arrow-svg path { fill:#0597F2; }
    .mil-link.mil-dark .arrow-svg path { fill:#021350; }
    .mil-link.mil-muted .arrow-svg path { fill:rgba(255,255,255,0.9); }

    /* Container (bootstrap-style) */
    .container { width:100%; padding-right:15px; padding-left:15px; margin-right:auto; margin-left:auto; max-width:1140px; }
    @media(min-width:576px){.container{max-width:540px;}}
    @media(min-width:768px){.container{max-width:720px;}}
    @media(min-width:992px){.container{max-width:960px;}}
    @media(min-width:1200px){.container{max-width:1140px;}}
    @media(min-width:1400px){.container{max-width:1320px;}}

    /* Inner Banner (Services page) */
    .mil-inner-banner { position:relative; }
    .mil-inner-banner .mil-banner-content { padding:150px 0 0 0; }
    @media(max-width:1200px){.mil-inner-banner .mil-banner-content{padding:180px 0 0 0;}}

    /* Breadcrumbs */
    .mil-breadcrumbs { display:inline-flex; align-items:center; position:relative; padding:0; margin:0; }
    .mil-breadcrumbs::before { content:''; position:absolute; right:calc(100% + 30px); top:10px; width:100vw; height:1px; background-color:rgba(2,19,80,0.1); }
    .mil-breadcrumbs li { list-style:none; }
    .mil-breadcrumbs li::after { content:'/'; margin:0 15px; color:#021350; }
    .mil-breadcrumbs li a { color:#021350; text-transform:uppercase; letter-spacing:2px; font-weight:500; font-size:12px; white-space:nowrap; transition:0.2s cubic-bezier(0,0,0.3642,1); }
    .mil-breadcrumbs li a:hover { color:#0597F2; }
    .mil-breadcrumbs li:last-child { cursor:not-allowed; }
    .mil-breadcrumbs li:last-child a { opacity:0.4; pointer-events:none; }
    .mil-breadcrumbs li:last-child::after { display:none; }
    .mil-breadcrumbs.mil-light::before { background-color:rgba(255,255,255,0.1); }
    .mil-breadcrumbs.mil-light li::after { color:rgba(255,255,255,0.9); }
    .mil-breadcrumbs.mil-light li a { color:rgba(255,255,255,0.9); }
    .mil-breadcrumbs.mil-light li a:hover { color:#0597F2 !important; }

    /* Service Card Large */
    .mil-service-card-lg { display:block; }
    .mil-service-card-lg .mil-descr { padding-right:30px; }
    .mil-service-card-lg.mil-offset { margin-top:60px; margin-bottom:60px; }
    @media(max-width:992px){.mil-service-card-lg.mil-offset{margin-top:0;}.mil-service-card-lg{margin-bottom:60px;}}

    /* Service List */
    .mil-service-list { padding:0; margin:0; }
    .mil-service-list li { border-bottom:solid 1px rgba(255,255,255,0.1); list-style:none; padding:15px 0; text-transform:uppercase; letter-spacing:2px; font-weight:500; font-size:12px; }
    .mil-service-list li:first-child { border-top:solid 1px rgba(255,255,255,0.1); }
    .mil-service-list.mil-light li { color:rgba(255,255,255,0.6); }
    .mil-service-list.mil-dark li { border-bottom:solid 1px rgba(2,19,80,0.1); }
    .mil-service-list.mil-dark li:first-child { border-top:solid 1px rgba(2,19,80,0.1); }

    /* Lines place */
    .mil-lines-place { position:relative; }
    .mil-lines-place .mil-lines { opacity:0.05; pointer-events:none; }
    @media(max-width:992px){.mil-lines-place .mil-lines{display:none;}}
    .mil-lines-place .mil-lines path,.mil-lines-place .mil-lines rect,.mil-lines-place .mil-lines line { stroke:#021350; }
    .mil-lines-place .mil-lines .mil-move { animation:move 10s linear infinite; }
    @keyframes move { from{transform:translateY(-75px);} 50%{transform:translateY(75px);} to{transform:translateY(-75px);} }
    .mil-lines-place.mil-light .mil-lines { opacity:0.2; }
    .mil-lines-place.mil-light .mil-lines path,.mil-lines-place.mil-light .mil-lines rect,.mil-lines-place.mil-light .mil-lines line { stroke:#FFFFFF; }

    /* Accent link */
    .mil-link.mil-accent svg { background-color:rgba(255,255,255,0.1); }
    .mil-link.mil-accent svg path { fill:#0597F2; }
    .mil-link.mil-accent .arrow-svg path { fill:#0597F2; }
    .mil-link.mil-down-arrow svg, .mil-link.mil-down-arrow .arrow-svg { transform:rotate(90deg); }
    .mil-link.mil-down-arrow:hover svg, .mil-link.mil-down-arrow:hover .arrow-svg { transform:scale(1.15) rotate(90deg); }

    /* Accordion */
    .mil-accordion-group { border-bottom:solid 1px rgba(2,19,80,0.2); margin-bottom:30px; }
    .mil-accordion-group .mil-accordion-menu { display:flex; align-items:center; justify-content:space-between; cursor:pointer; margin-bottom:30px; }
    .mil-accordion-group .mil-accordion-menu .mil-symbol { border-radius:50%; width:40px; height:40px; color:#021350; background-color:#E1E5F5; font-size:16px; display:flex; align-items:center; justify-content:center; position:relative; flex-shrink:0; }
    .mil-accordion-group .mil-accordion-menu .mil-symbol .mil-plus, .mil-accordion-group .mil-accordion-menu .mil-symbol .mil-minus { position:absolute; }
    .mil-accordion-group .mil-accordion-menu .mil-symbol .mil-minus { transform:translateY(-2px); }
    .mil-accordion-group .mil-accordion-menu .mil-accordion-head { font-size:12px; text-transform:uppercase; letter-spacing:2px; font-weight:500; color:#021350; }
    .mil-accordion-content { overflow:hidden; max-height:0; transition:max-height 0.5s cubic-bezier(0,0,0.3642,1); }
    .mil-accordion-content.mil-open { max-height:1000px; }
    .mil-accordion-content p { padding-bottom:0; }
    .mil-accordion-content > p:last-child { margin-bottom:30px; }

    /* Price Card */
    .mil-price-card { display:block; width:100%; border-top:solid 1px rgba(255,255,255,0.1); border-bottom:solid 1px rgba(255,255,255,0.1); padding:60px 0 30px; transition:0.4s cubic-bezier(0,0,0.3642,1); }
    .mil-price-card:hover { background-color:rgba(255,255,255,0.03); }
    .mil-price-card .mil-price-number { padding-top:10px; line-height:70%; font-size:54px; font-weight:500; }
    .mil-price-card .mil-price-number .mil-thin { font-weight:200; font-size:18px; }

    /* Other Services Card Variant */
    .mil-service-card-lg.mil-other-card { overflow:hidden; position:relative; border:solid 1px #E1E5F5; padding:60px; transition:0.4s cubic-bezier(0,0,0.3642,1); }
    .mil-service-card-lg.mil-other-card .mil-descr { padding-right:0; }
    .mil-service-card-lg.mil-other-card:hover { background-color:#0597F2; }
    .mil-service-card-lg.mil-other-card:hover .mil-link svg { background-color:#021350; }
    .mil-service-card-lg.mil-other-card:hover .mil-link svg path { fill:#0597F2; }
    @media(max-width:1200px){.mil-service-card-lg.mil-other-card{padding:30px;}}

    /* Accent cursor for service cards */
    .mil-accent-cursor { cursor:pointer; }
    
    /* --- form inputs --- */
    input, textarea {
      position:relative; width:100%; font-size:12px; text-transform:uppercase;
      letter-spacing:2px; font-weight:500; font-family:'Outfit',sans-serif;
      color:#021350; border:none; border-bottom:solid 1px rgba(2,19,80,0.2);
      margin-bottom:30px; background:transparent; display:block;
    }
    input { height:70px; padding:0 30px; }
    textarea { padding:20px 30px; height:200px; resize:none; }
    input:focus, textarea:focus { outline:none; border-bottom-color:#0597F2; }
    input::placeholder, textarea::placeholder {
      font-size:12px; text-transform:uppercase; letter-spacing:2px;
      font-weight:500; color:rgba(2,19,80,0.4);
    }
    
    /* --- map frame (contact page specific) --- */
    .mil-map-frame{background-color:#E1E5F5;pointer-events:all;height:600px;position:relative;overflow:hidden;}
    @media(max-width:992px){.mil-map-frame{height:400px;}}
    .mil-map-frame iframe{width:100%;height:100%;border:none;position:absolute;top:0;left:0;}

    /* --- contact info card --- */
    .mil-contact-info-card{padding:60px;border:solid 1px #E1E5F5;height:100%;transition:0.4s cubic-bezier(0,0,0.3642,1);}
    .mil-contact-info-card:hover{background-color:#0597F2;}
    .mil-contact-info-card:hover h5,.mil-contact-info-card:hover p,.mil-contact-info-card:hover a{color:#021350;}
    @media(max-width:1200px){.mil-contact-info-card{padding:30px;}}
    @media(max-width:992px){.mil-contact-info-card{margin-bottom:30px;}}
    .mil-contact-icon{width:60px;height:60px;border-radius:50%;background-color:#0597F2;display:flex;align-items:center;justify-content:center;margin-bottom:30px;font-size:22px;color:#021350;transition:0.4s;}
    .mil-contact-info-card:hover .mil-contact-icon{background-color:#021350;color:#0597F2;}

    /* ---- portfolio ---- */
    .mil-portfolio { position:relative; }
    .mil-portfolio .mil-lines-place { position:absolute; left:40.7%; }
    .mil-portfolio .mil-lines-place.mil-lines-long { top:1289px; }

    .mil-portfolio-item { display:block; }
    .mil-portfolio-item .mil-cover-frame { position:relative; overflow:hidden; margin-bottom:30px; }
    .mil-portfolio-item .mil-cover-frame .mil-cover { position:absolute; top:0; left:0; width:100%; height:100%; }
    .mil-portfolio-item .mil-cover-frame .mil-cover img { width:100%; height:100%; object-fit:cover; object-position:center; transition:0.4s cubic-bezier(0,0,0.3642,1); }
    .mil-portfolio-item .mil-cover-frame.mil-vert { padding-bottom:130%; }
    .mil-portfolio-item .mil-cover-frame.mil-hori { padding-bottom:65%; }
    .mil-portfolio-item:hover .mil-cover-frame .mil-cover img { transform:scale(1.05); }

    .mil-labels { display:flex; align-items:center; padding:0; }
    .mil-labels .mil-label { margin-right:15px; }
    .mil-labels .mil-label:last-child { margin-right:0; }

    /* ---- 404 ---- */
    .mil-404-banner{min-height:100vh;position:relative;}
    .mil-404-banner .mil-animation-frame{z-index:2;}

    .mil-404-frame{
      padding-top:100px;
      height:100vh;
      width:100%;
      display:flex;
      justify-content:center;
      flex-direction:column;
      align-items:center;
    }

    .mil-404-text{
      display:block;
      text-align:center;
      color:#FFFFFF;
    }

    .mil-scale-frame{
      transform:scale(2.3);
      text-align:center;
      margin-bottom:90px;
    }
    @media(max-width:530px){
      .mil-scale-frame{transform:scale(1.3);margin-bottom:50px;}
    }

    /* 404 glitch text */
    .mil-404{
      position:relative;
      color:#FFFFFF;
      font-size:6em;
      font-weight:500;
      animation:glitch-skew 1s infinite linear alternate-reverse;
    }
    .mil-404::before{
      content:attr(data-text);
      position:absolute;
      top:0;left:2px;
      width:100%;height:100%;
      text-shadow:-2px 0 #0597F2;
      clip:rect(44px,450px,56px,0);
      animation:glitch-anim 5s infinite linear alternate-reverse;
    }
    .mil-404::after{
      content:attr(data-text);
      position:absolute;
      top:0;left:-2px;
      width:100%;height:100%;
      text-shadow:-2px 0 #6B7280,2px 2px #E1E5F5;
      animation:glitch-anim2 1s infinite linear alternate-reverse;
    }

    @keyframes glitch-anim{
      0%{clip:rect(49px,9999px,31px,0);transform:skew(0.04deg);}
      5%{clip:rect(63px,9999px,92px,0);transform:skew(0.18deg);}
      10%{clip:rect(86px,9999px,74px,0);transform:skew(0.4deg);}
      15%{clip:rect(85px,9999px,19px,0);transform:skew(0.57deg);}
      20%{clip:rect(64px,9999px,75px,0);transform:skew(0.96deg);}
      25%{clip:rect(77px,9999px,17px,0);transform:skew(0.61deg);}
      30%{clip:rect(16px,9999px,76px,0);transform:skew(0.81deg);}
      35%{clip:rect(5px,9999px,61px,0);transform:skew(0.56deg);}
      40%{clip:rect(79px,9999px,81px,0);transform:skew(0.05deg);}
      45%{clip:rect(20px,9999px,97px,0);transform:skew(0.56deg);}
      50%{clip:rect(33px,9999px,100px,0);transform:skew(0.16deg);}
      55%{clip:rect(19px,9999px,76px,0);transform:skew(0.93deg);}
      60%{clip:rect(29px,9999px,59px,0);transform:skew(0.58deg);}
      65%{clip:rect(19px,9999px,95px,0);transform:skew(0.83deg);}
      70%{clip:rect(88px,9999px,30px,0);transform:skew(0.39deg);}
      75%{clip:rect(43px,9999px,45px,0);transform:skew(0.6deg);}
      80%{clip:rect(30px,9999px,4px,0);transform:skew(0.89deg);}
      85%{clip:rect(4px,9999px,96px,0);transform:skew(1deg);}
      90%{clip:rect(4px,9999px,91px,0);transform:skew(0.2deg);}
      95%{clip:rect(48px,9999px,80px,0);transform:skew(0.41deg);}
      100%{clip:rect(10px,9999px,58px,0);transform:skew(0.91deg);}
    }
    @keyframes glitch-anim2{
      0%{clip:rect(97px,9999px,84px,0);transform:skew(0.55deg);}
      5%{clip:rect(82px,9999px,21px,0);transform:skew(0.04deg);}
      10%{clip:rect(51px,9999px,99px,0);transform:skew(0.93deg);}
      15%{clip:rect(42px,9999px,97px,0);transform:skew(0.03deg);}
      20%{clip:rect(27px,9999px,25px,0);transform:skew(0.86deg);}
      25%{clip:rect(69px,9999px,5px,0);transform:skew(0.95deg);}
      30%{clip:rect(38px,9999px,67px,0);transform:skew(0.33deg);}
      35%{clip:rect(8px,9999px,90px,0);transform:skew(0.67deg);}
      40%{clip:rect(34px,9999px,31px,0);transform:skew(0.33deg);}
      45%{clip:rect(1px,9999px,25px,0);transform:skew(0.71deg);}
      50%{clip:rect(45px,9999px,40px,0);transform:skew(0.38deg);}
      55%{clip:rect(84px,9999px,96px,0);transform:skew(0.3deg);}
      60%{clip:rect(68px,9999px,59px,0);transform:skew(0.35deg);}
      65%{clip:rect(93px,9999px,48px,0);transform:skew(0.25deg);}
      70%{clip:rect(19px,9999px,40px,0);transform:skew(0.97deg);}
      75%{clip:rect(76px,9999px,56px,0);transform:skew(0.79deg);}
      80%{clip:rect(22px,9999px,82px,0);transform:skew(0.48deg);}
      85%{clip:rect(30px,9999px,63px,0);transform:skew(0.91deg);}
      90%{clip:rect(68px,9999px,44px,0);transform:skew(0.4deg);}
      95%{clip:rect(12px,9999px,36px,0);transform:skew(0.61deg);}
      100%{clip:rect(24px,9999px,5px,0);transform:skew(0.96deg);}
    }
    @keyframes glitch-skew{
      0%{transform:skew(3deg);} 10%{transform:skew(2deg);} 20%{transform:skew(0deg);}
      30%{transform:skew(0deg);} 40%{transform:skew(2deg);} 50%{transform:skew(-1deg);}
      60%{transform:skew(-3deg);} 70%{transform:skew(-1deg);} 80%{transform:skew(-1deg);}
      90%{transform:skew(4deg);} 100%{transform:skew(-3deg);}
    }
  `}</style>
);

export default GlobalStyles;
