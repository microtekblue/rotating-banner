let rotatingBanner = (function () {

    let next = 0;

    let timer = 15000;

    const bannersObject = [
        {
            "src": "discussing_ad.png",
            "cta_text": "Discussing",
            "cta_url": "window.location = 'https://www.discussing.ca/'"
        },
        {
            "src": "microtekblue_ad.png",
            "cta_text": "Web Design Development",
            "cta_url": "window.location = 'https://www.webdesigndevelopment.ca/'"
        },
        {
            "src": "ohta_ads_banner.png",
            "cta_text": "Advertise",
            "cta_url": "window.location.href = 'mailto:info@microtekblue.com'"
        }
    ];


    const image = document.createElement("div");

    const random = _getRandomIntInclusive(0, bannersObject.length - 1);

    function _incrementNext() {
        next++;
    }

    function _getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
    }

    console.log(random);
    function createImage() {
            // init image once and set properties
            let num = random;
            image.setAttribute("style", "background: url('banners/" + bannersObject[num].src + "') no-repeat center center;");
            image.className = "rotate-image";
            image.setAttribute("alt", bannersObject[num].cta_text);
            image.setAttribute("onclick", bannersObject[num].cta_url);
            // assign image to DOM
            document.getElementById('holder').appendChild(image);
    }

    function start() {

       setInterval(function () {

            if (next === 0) {
                next = random + 1;
            }

            console.log('next ' + next);

            if (next === bannersObject.length) {
                //reset next
                next = 0;

            }

            //update image properties
            image.style.backgroundImage = "url(banners/" + bannersObject[next].src + ")";
            image.setAttribute("onclick", bannersObject[next].cta_url);


            //increment next
            _incrementNext();

        }, timer);

    }

    // Reveal public pointers to
    // private functions and properties

    return {
      //  random: random,
        createImage: createImage,
        start: start
    };

})();





































