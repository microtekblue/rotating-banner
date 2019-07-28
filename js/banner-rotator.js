let next = 0;

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

const createImage = function (num) {
    // init images
    image.setAttribute("style", "background: url('banners/" + bannersObject[num].src + "') no-repeat center center;");
    image.className = "rotate-image";
    image.setAttribute("alt", bannersObject[num].cta_text);
    image.setAttribute("onclick", bannersObject[num].cta_url);

    document.getElementById('holder').appendChild(image);
};


const getRandomIntInclusive = function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
};

const randomize = getRandomIntInclusive(0, bannersObject.length - 1);


$(function () {
    // Handler for .ready() called.
    createImage(randomize);

    console.log(randomize);

    setInterval(function () {

        if (next === 0) {
            next = randomize + 1;
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
        next++;

    }, 10000);

});`    `   `    










































`