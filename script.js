//<script>
// <!-- GA4 -->
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-VH41JYZ1B0');
// <!-- GTM -->
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-T8JZT2G2');
// <!-- Start Video Player -->
// Enhanced Video Player
(function() {
    console.log('Start video script.');

    // Detect Safari
    function detectSafari() {
        var ua = navigator.userAgent;
        return ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') === -1;
    }

    // Detect iOS
    function isIOS() {
        return [
            'iPad Simulator',
            'iPhone Simulator',
            'iPod Simulator',
            'iPad',
            'iPhone',
            'iPod'
        ].includes(navigator.platform) || (navigator.userAgent.includes("Mac") && "ontouchend" in document);
    }

    var video = document.getElementById('ospVideo');
    var source = document.getElementById('videoSource');

    if (video && source) {
        console.log('Video and Source exist');

        // Redundancy checks
        if (!video.autoplay) video.autoplay = true;
        if (!video.hasAttribute("playsinline")) video.setAttribute("playsinline", "");
        if (!video.muted) video.muted = true;
        if (!video.loop) video.loop = true;

        // Check for both Safari and iOS
        if (detectSafari() && isIOS() && source.src.indexOf(".mp4") === -1) {
            console.log('iOS & Safari detected. Switching to MP4.');
            source.src = 'https://storage.googleapis.com/osp-video/osp_video_1780x1080.mp4';
            source.type = 'video/mp4';
            video.load(); 
        }

        // Error handling
        video.onerror = function() {
            console.error('Video playback error:', video.error);
        };
        
        video.play();
    } else {
        console.log('Video or Source does not exist');
    }
    console.log('End video script.');
})();
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('protostarsVideo').controls = true;
    document.getElementById('protostarsVideo').autoplay = false;
    document.getElementById('protostarsVideo').setAttribute("playsinline", "");
    document.getElementById('protostarsVideo').muted = false;
    document.getElementById('protostarsVideo').loop = false;
});
// <!-- End Video Player -->
// <!-- Dom Loader -->
document.addEventListener('DOMContentLoaded', function() {
    // Apply inline style to body and html.
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden'; // html
    
    // Define a function to apply styles to multiple classes.
    function applyStylesToClasses(selectors, styles) {
        selectors.forEach(function(selector) {
            var elements = document.querySelectorAll(selector);
            elements.forEach(function(element) {
                for (var styleProperty in styles) {
                    element.style[styleProperty] = styles[styleProperty];
                }
            });
        });
    }
    // Apply styles to elements with class 'applythelaw'.
    applyStylesToClasses(['.applythelaw'], {
        'backgroundImage': 'url(https://storage.googleapis.com/osp-video/img/applythelaw_bg.png)',
        'backgroundPosition': 'bottom center',
        'backgroundSize': 'cover',
        'gap': '8vw',
    });
    // Apply styles to elements within '.exceptional .flexbox' and '.threecolumn .flexbox'.
    applyStylesToClasses([
        '.exceptional .flexbox',
        '.threecolumn .flexbox',
        '.whatittakes .flexbox',
        '.service .flexbox'],{
        'display': 'flex',
        'align-items': 'flex-start',
        'gap': '8vw',
    });
});
function addCSS() {
    var css = `
    // START CSS
    *, *:before, *:after {
        box-sizing: border-box;
    }
    body, html {
        overflow-x: hidden;
    }
    body {
        margin: 0 !important;
        padding: 0 !important;
        background-color: #25294F !important;
    }
    video::-webkit-media-controls-panel {
        display: none !important;
        opacity: 0 !important;
    }
    header.or-header, .or-page-title, .or-show-if-side-navigation, .helpfulPoll, #OregonSideNavigation {
        display: none !important;
    }
    .row, .col-md-12, .col-md-9, .col-md-6, .col-md-3, .col-md-2, .col-md-1 {
        margin: 0 !important;
        padding: 0 !important;
        border: none !important;
    }
    .col-md-9 {
        width: 100vw !important;
    }
    .or-navbar, .or-navbar-search-wrapper {
        background-color: #25294F !important;
    }
    #main {
        width: 100vw;
        margin: 0 !important;
        padding: 0 !important;
    }
    .container {
        width: 100vw !important;
        margin: 0 !important;
        padding: 0 !important;
    }
    footer {
        box-shadow: none !important;
        padding: 0 !important;
        background-color: #25294F !important;
    }
    main a, footer a, .alert a {
        color: #ADA076 !important;
        text-decoration: none !important;
    }
    h3, footer li {
        color: #DEDEDE !important;
    }
    /* GENERAL CSS */
    .fullwidth {
        display: flex !important;
        width: 100vw;
        margin: 0;
        padding: 0;
    }
    .apply-now-btn {
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
        text-decoration: none;
        font-size: 125%;
        width: 200px;
        padding: 12px 24px;
        color: #000000;
        background-color: #f2b827;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
    .apply-now-btn:active,.apply-now-btn:hover,.apply-now-btn:focus,.apply-now-btn:visited {
        background-color: #f2b827;
        color: #000000;
    }
    .apply-now-btn.serv {
        background-color: #92A5BA !important;
        color: #25294F !important;
    }
    .apply-now-btn.serv:active,.apply-now-btn.serv:hover,.apply-now-btn.serv:focus,.apply-now-btn.serv:visited {
        background-color: #92A5BA !important;
        color: #25294F !important;
    }
    .flexbox {
        display: flex;
        position: relative;
        z-index: 1;
        width: 100%;
        align-items: center;
        padding: 0;
    }
    /* Apply the Law. Apply Yourself. Apply Today. */
    .applythelaw {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        position: relative;
        overflow: hidden;
        width: 100vw;
        height: calc(100vmin - 130px);
        margin: 0;
        padding: 0 128px;
        z-index: 1;
        background-color: #25294F;
    }
    .applythelaw {
        background-image: url(https://storage.googleapis.com/osp-video/img/applythelaw_bg.png);
        background-position: bottom center;
        background-size: cover;
    }
    .applythelaw .bg-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        overflow: hidden;
    }
    .applythelaw .bg-container img {
        min-width: 100%;
        min-height: 100%;
        max-width: none;
        max-height: none;
        display: block;
        margin: auto;
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
    }
    .applythelaw .text {
        width: 40vw;
    }
    .applythelaw .video {
        width: 60vw;
    }
    .applythelaw h1 {
        font-family: 'Roboto Serif', Times, serif;
        font-size: 55px;
        font-weight: 700;
        line-height: 65px;
        text-align: left;
        margin: 0;
        color: #FFFEFE;
    }
    .applythelaw h1 span {
        color: #F2B827;
    }
    .applythelaw p {
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        color: #DEDEDE;
        margin: 35px 0 70px 0;
        width: 80%;
    }
    .applythelaw .video {
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }  
    .applythelaw .video video {
        width: 100%;
        object-fit: cover;
        border: none;
    }
    /* An Exceptional Force Seeking Exceptional Cadets */
    .exceptional {
        background-color: #FFFEFE;
        padding: 128px;
    }
    .exceptional .flexbox {
        gap: 128px;
    }
    .osp_bike {
        width: 125vw;
    }
    .osp_bike img {
        width: 100%;
    }
    .exceptional h2 {
        font-family: 'Roboto Serif', Times, serif;
        font-size: 55px;
        font-weight: 700;
        line-height: 65px;
        text-align: left;
        letter-spacing: 0px;
        color: #25294F;
        padding: 0;
        margin: 0;
    }
    .exceptional p {
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        letter-spacing: 0px;
        color: #000000;
        margin: 35px 0 70px 0;
    }
    /* Join Our Modern, Multi-Disciplinary Police Force */
    .modern {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        text-align: center;
        background-color: #92A5BA;
        padding: 96px;
    }
    
    .modern .bg {
        position: absolute;
        z-index: 0;
        overflow: hidden;
    }
    
    .modern .bg img {
        width: 380px;
    }
    
    .modern .text {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        z-index: 1;
    }
    
    .modern .text h2 {
        font-family: 'Roboto Serif', Times, serif;
        font-size: 55px;
        font-weight: 700;
        line-height: 65px;
        text-align: center;
        letter-spacing: 0px;
        color: #25294F;
        margin-bottom: 35px;
        text-shadow:
            -2px -2px 0 #92A5BA,
            2px -2px 0 #92A5BA,
            -2px 2px 0 #92A5BA,
            2px 2px 0 #92A5BA;
    }
    /* More than a job. A calling. */
    .threecolumn {
        display: grid;
        place-items: center;
        background-color: #FFFEFE;
        padding: 128px;
    }
    .threecolumn .flexbox {
        gap: 128px;
    }
    .threecolumn h3 {
        font-family: 'Roboto Serif', Times, serif;
        font-size: 35px;
        font-weight: 700;
        line-height: 40px;
        text-align: left;
        letter-spacing: 0px;
        color: #25294F !important;
    }
    .threecolumn p {    
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        font-size: 18px;
        font-weight: 400;
        line-height: 20px;
        text-align: left;
        letter-spacing: 0px;
        color: #000000;
    }
    /* Do You Have What it Takes? */
    .whatittakes {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        position: relative;
        overflow: hidden;
        width: 100vw;
        /* height: calc(100vh - 200px); */
        margin: 0;
        padding: 128px;
        z-index: 1;
    }
    .whatittakes .bg-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        overflow: hidden;
    }
    .whatittakes .bg-container img {
        max-width: none;
        max-height: 100%;
        margin: auto;
        position: absolute;
        top: 0;
        right: 0;
        opacity: 20%;
    }
    .whatittakes .text {
        width: 50%;
    }
    .whatittakes .video {
        width: 600px;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
    }  
    .whatittakes .video video {
        width: 100%;
        object-fit: cover;
        border: none;
    }
    .whatittakes h2 {
        font-family: 'Roboto Serif', Times, serif;
        font-size: 55px;
        font-weight: 700;
        line-height: 65px;
        text-align: left;
        margin: 0;
        color: #92A5BA;
    }
    .whatittakes p {
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        color: #DEDEDE;
        margin: 35px 0 70px 0;
        width: 80%;
    }
    /* A Natural Next Step for Military Veterans */
    .service {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        position: relative;
        overflow: hidden;
        width: 100vw;
        margin: 0;
        padding: 0;
        z-index: 1;
        background-color: #D3D3D0;
        padding: 128px;
    }
    .service .bg-container {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -1;
        overflow: hidden;
    }
    .service .bg-container img {
        max-width: none;
        max-height: 100%;
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 100%;
    }
    .service .flexbox .column {
        width: 100%;
    }
    .service h2 {
        font-family: 'Roboto Serif', Times, serif;
        font-size: 55px;
        font-weight: 700;
        line-height: 65px;
        text-align: left;
        margin: 0;
        color: #25294F;
    }
    .service p {
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        color: #000000;
        margin: 35px 0 70px 0;
        width: 80%;
    }
    /* Responsive design for screens */
    @media (max-width: 1260px) {
        .osp_bike {
            width: 150vw;
        }
    }
    @media (max-width: 1024px) {
        .exceptional .flexbox,
        .threecolumn .flexbox {
            gap: 64px;
        }
        .exceptional h2,
        .modern .text h2,
        .whatittakes h2,
        .service h2,
        .applythelaw h1 {
            font-size: 45px;
            line-height: 55px;
        }
        .exceptional p,
        .threecolumn p,
        .whatittakes p,
        .service p {
            font-size: 18px;
            line-height: 22px;
        }
        .applythelaw .text,
        .applythelaw .video,
        .whatittakes .text,
        .whatittakes .video,
        .service .flexbox .column {
            width: 80%;
            margin: 0 10%;
        }
        .applythelaw,
        .whatittakes {
            height: auto;
            padding: 64px 0;
        }
        .modern .bg img {
            width: 100%;
        }
        .service {
            padding: 128px 0;
        }
    }
    @media (max-width: 812px) {
        br.hide {
            display: none;
        }
        /* .applythelaw .flexbox .video {
            display: none;
        } */
        .flexbox, .applythelaw, .whatittakes, .service {
            display: flex !important;
            flex-direction: column !important;
        }
        .flexbox {
            gap: 28px !important;
        }
        .applythelaw,
        .exceptional,
        .threecolumn,
        .whatittakes,
        .service {
            padding: 40px 20px;
        }
        .modern {
            padding: 40px;
            height: 100vmin;
        }
        .modern .bg {
            position: absolute;
            z-index: 0;
            overflow: hidden;
            height: 100vmin;
        }
        .modern .bg img {
            height: 100vmin;
            width: unset;
        }
        .exceptional h2,
        .modern .text h2,
        .whatittakes h2,
        .service h2,
        .applythelaw h1 {
            font-size: 40px;
            line-height: 55px;
        }
        .applythelaw p,
        .exceptional p,
        .threecolumn p,
        .whatittakes p,
        .service p {
            width: 100%;
            font-size: 22px;
            line-height: 34px;
        }
        .applythelaw .text,
        .applythelaw .video,
        .whatittakes .text,
        .whatittakes .video,
        .service .flexbox .column {
            width: 100%;
            margin: 0;
            padding: 0;
        }
        .video.protostars{
            margin: 60px 0 0 0 !important;
        }
        .video.protostars video{
            width: 100% !important;
        }
        .exceptional .flexbox,
        .threecolumn .flexbox {
            gap: 32px !important; /* Adjust the gap as per your design */
        }
        .osp_bike {
            width: 100%;
        }
        .modern .bg img {
            width: 100%;
        }
        .service {
            padding: 64px 0; /* Adjust the padding as per your design */
        }
        .applythelaw .video {
            display: block;
            align-items: center;
            padding-top: 60px !important;
        }
        .apply-now-btn {
            display: block;
            width: 220px !important;
            margin: 0 auto;
            text-align: center;
        }
        .service .flexbox .column.one,
        .service .flexbox .column.two {
            padding: 20px;
        }
    }
    @media (max-width: 576px) {
        .flexbox, .applythelaw, .whatittakes, .service {
            display: -webkit-box !important;
            display: -ms-flexbox !important;
            display: -webkit-flex !important;
            display: flex !important;
            flex-direction: column !important;
        }
        .applythelaw .text,
        .whatittakes .text,
        .whatittakes .video,
        .service .flexbox .column {
            width: 100% !important;
            margin: 0;
            padding: 0 10px;
        }
        .exceptional .flexbox,
        .threecolumn .flexbox {
            gap: none !important;
        }
        .osp_bike {
            width: 100%;
        }
        .modern .bg {
            position: absolute;
            z-index: 0;
            overflow: hidden;
            width: 100vmin;
            height: unset;
        }
        .modern .bg img {
            height: unset;
            width: 100vmin;
        }
        .service {
            padding: 32px 0;
        } 
    }
    /* Add or modify these styles in your styles.css file */
    .deadline {
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        text-align: center;
        text-decoration: none;
        font-size: 125%;
        padding: 24px;
        color: #000000;
        background-color: #f2b827;
    }
    .steps-section {
        background-color: #f2f2f2;
        padding: 96px 0px;
    }
    .steps {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 48px;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
    } @media (max-width: 812px) {
        .steps {
            grid-template-columns: 1fr; /* Single column layout */
        }
    }
    .steps .row {
        grid-column: 1 / -1;
    }
    .steps .button {
        text-align: center;
        margin-top: 48px;
    }
    .steps .title {
        text-align: center;
        font: normal normal bold 55px/65px Roboto Serif;
        letter-spacing: 0px;
        color: #25294F;
        margin: 0px;
        margin-bottom: 24px;
    }
    .column {
        margin: 12px 0;
    }
    .column.last {
        justify-self: center;
        grid-column: auto / span 2;
    }
    .steps h4 {
        font: normal normal bold 35px/40px Roboto Serif;
        letter-spacing: 0px;
        color: #92A5BA;
        margin: 0;
    }
    .steps p, .steps li {
        font: normal normal normal 20px/24px Montserrat;
        letter-spacing: 0px;
        color: #000000;
        margin: 0;
        margin-top: 24px;
    }
    .faq {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        position: relative;
        overflow: hidden;
        width: 100vw;
        margin: 0;
        padding: 128px;
        z-index: 1;
    }
    .faq .text {
        margin: 62px 0;
    }
    .faq .button {
        text-align: center !important;
        margin: 62px 0;
    } @media (max-width: 812px) {
        .faq { padding: 24px;}
        .faq .text, .faq .button { margin: 24px 0;}
    }
    .faq h2 {
        font-family: 'Roboto Serif', Times, serif;
        font-size: 55px;
        font-weight: 700;
        line-height: 65px;
        text-align: left;
        margin: 0;
        color: #FFF;
    }
    .faq h3 {
        font-family: 'Roboto Serif', Times, serif;
        font-size: 45px;
        font-weight: 700;
        line-height: 55px;
        text-align: left;
        margin: 0;
        margin-bottom: 48px;
        color: #92A5BA !important;
    }
    .faq p {
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        color: #DEDEDE;
        margin: 12px 0;
    }
    .faq li {
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
        font-size: 20px;
        font-weight: 400;
        line-height: 32px;
        text-align: left;
        color: #DEDEDE;
        margin: 12px 0;
        list-style: none;
    }
    .faq li::before {
        content: '●';
        left: 0;
        color: #f2b827;
        font-size: 20px;
        line-height: 24px;
        padding-right: 18px;
    }  
    // END CSS
    `;
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
}
addCSS(); // Call this function to add the CSS to your page
//</script>