var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/69a4e57df376451c37354702/1jim20spf';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
})();

const isSlowDevice = /(Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet)/i.test(navigator.userAgent)
    && !/Chrome|Safari|Firefox|Edge|SamsungBrowser|Opera/i.test(navigator.userAgent);

if (isSlowDevice) {
    document.documentElement.style.setProperty('--animation-duration', '0.5s');
}