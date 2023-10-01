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
(function() {
    console.log('Start video script.');
    
    function detectSafari() {
        var ua = navigator.userAgent;
        var isSafari = ua.indexOf('Safari') > -1 && ua.indexOf('Chrome') === -1;
        console.log('Is Safari: ', isSafari); 
        return isSafari;
    }

    var video = document.getElementById('ospVideo');
    var source = document.getElementById('videoSource');

    if (video && source) {
        console.log('Video and Source exist');
        video.autoplay = true;
        video.muted = true;
        video.loop = true;

        if (detectSafari()) {
            console.log('Safari!!!');
            source.src = 'https://storage.googleapis.com/osp-video/osp_video_1780x1080.mp4';
            source.type = 'video/mp4';
            video.load(); 
        }
        video.play();
    } else {
        console.log('Video or Source does not exist');
    }
    console.log('End video script.');
})();
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
//</script>