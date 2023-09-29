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
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.play();
    // Select all the elements with .exceptional .flexbox
    var elements = document.querySelectorAll('.exceptional .flexbox');
    
    // Loop through the NodeList and apply the style to each element
    elements.forEach(function(element) {
        element.style.gap = '128px';
    });
});