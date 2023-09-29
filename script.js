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
document.addEventListener('DOMContentLoaded', function() {
    
    var video = document.getElementById('ospVideo');
    
    var isFirefox = navigator.userAgent.indexOf('Firefox') > -1;
    var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    var isEdge = navigator.userAgent.indexOf('Edg') > -1;
    var isIE = /*@cc_on!@*/false || !!document.documentMode;
    
    // Assume MP4 source by default and apply styles
    var applyStyles = false;
    
    if(isSafari || isChrome) {
        video.src = 'https://storage.googleapis.com/osp-video/OSP_apply_the_law-1580x1080_hvec.mp4';
    } else {
        // For browsers viewing MP4 source, do not apply styles
        video.src = 'https://storage.googleapis.com/osp-video/OSP_apply_the_law-1580x1080.mp4';
        applyStyles = false;
    }
    
    // Apply inline styles to the elements with class '.applythelaw' only if applyStyles is true
    if(applyStyles) {
        var applyTheLawElements = document.querySelectorAll('.applythelaw');
        applyTheLawElements.forEach(function(element) {
            element.style.backgroundImage = 'url(https://storage.googleapis.com/osp-video/img/applythelaw_bg.png)';
            element.style.backgroundPosition = 'bottom center';
            element.style.backgroundSize = 'contain';
        });
    }
    
    // Apply inline style to body and html
    document.body.style.overflowX = 'hidden';
    document.documentElement.style.overflowX = 'hidden'; // html
    
    var exceptionalElements = document.querySelectorAll('.exceptional .flexbox');
    exceptionalElements.forEach(function(element) {
        element.style.gap = '128px';
    });
        
    var threeColumnElements = document.querySelectorAll('.threecolumn .flexbox');
    threeColumnElements.forEach(function(element) {
        element.style.gap = '128px';
    });
    
    video.autoplay = true;
    video.muted = true;
    video.loop = true;
    video.load(); // Important: load the video again after changing source
    video.play();
});


//</script>