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
    `;

    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    document.head.appendChild(style);
}
addCSS(); // Call this function to add the CSS to your page
//</script>