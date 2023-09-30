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
// <!-- Video Player -->
// Define the function to detect Apple devices or Safari.
function detectAppleDevicesOrSafari() {
    var ua = navigator.userAgent;
    var isSafari = /^((?!chrome|android).)*safari/i.test(ua);
    var isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;
    return {
        isApple: isSafari || isIOS
    };
}

// Get the video and source elements by ID.
var video = document.getElementById('ospVideo');
var source = document.getElementById('videoSource');

// Check if the elements exist.
if (video && source) {
    // Set the src and type attributes based on the browser.
    if (detectAppleDevicesOrSafari().isApple) {
        source.src = 'https://storage.googleapis.com/osp-video/osp_video_1780x1080.mp4';
        source.type = 'video/mp4';
    } else {
        source.src = 'https://storage.googleapis.com/osp-video/osp_video_1780x1080.webm';
        source.type = 'video/webm';
    }

    // Set video properties.
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    
    // Load and play the video.
    video.load();
    video.play();
}
// <!-- Dom Loader -->
// The DOMContentLoaded event listener for other functionalities.
document.addEventListener('DOMContentLoaded', function() {
    // Apply inline style to body and html.
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden'; // html
    
    // Apply background image to elements with class 'applythelaw'.
    var applyTheLawElements = document.querySelectorAll('.applythelaw');
    applyTheLawElements.forEach(function(element) {
        element.style.backgroundImage = 'url(https://storage.googleapis.com/osp-video/img/applythelaw_bg.png)';
        element.style.backgroundPosition = 'bottom center';
        element.style.backgroundSize = 'cover';
        element.style.gap = '8vw';
    });

    // Apply gap to elements within '.exceptional .flexbox'.
    var exceptionalElements = document.querySelectorAll('.exceptional .flexbox');
    exceptionalElements.forEach(function(element) {
        element.style.gap = '8vw';
    });
        
    // Apply gap to elements within '.threecolumn .flexbox'.
    var threeColumnElements = document.querySelectorAll('.threecolumn .flexbox');
    threeColumnElements.forEach(function(element) {
        element.style.gap = '8vw';
    });
});
//</script>