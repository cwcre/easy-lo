const category = document.getElementById("category_id");
const installment = document.getElementById("installment_id");
const options = document.querySelector(".options");
const totalPrice = document.getElementById("total-price");


category.addEventListener("change", () => {
    if (category.value == "first") {
        options[1].setAttribute("price", "$99412");
        options[2].setAttribute("price", "$53102");
        options[3].setAttribute("price", "$73902");
    } else if (category.value == "second") {
        options[1].setAttribute("price", "$60340");
        options[2].setAttribute("price", "$50132");
        options[3].setAttribute("price", "$42920");
    } else {
        options[1].setAttribute("price", "$30321");
        options[2].setAttribute("price", "$20321");
        options[3].setAttribute("price", "$10392");
    }
    if (!installment.disabled) {
        if (installment.value == 'year') {
            totalPrice.innerHTML = options[1].getAttribute("price");
        } else if (installment.value == "six-months") {
            totalPrice.innerHTML = options[2].getAttribute("price");
        } else {
            totalPrice.innerHTML = options[3].getAttribute("price");
        }
    }
    installment.removeAttribute("disabled");
});

installment.addEventListener("change", (event) => {
    if (event.target.selectedIndex == 1) {
        totalPrice.innerHTML = options[1].getAttribute("price");
    } else if (event.target.selectedIndex == 2) {
        totalPrice.innerHTML = options[2].getAttribute("price");
    } else if (event.target.selectedIndex == 3) {
        totalPrice.innerHTML = options[3].getAttribute("price");
    } else {
        totalPrice.innerHTML = "$0";
    }
});

const header = document.querySelector('.header');
const nav = document.querySelector('.nav');
// Sticky Navigation: Intersection Observer API
const stickyNav = (entries) => {
    const [entry] = entries;
    if (!entry.isIntersecting) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
};

const headerobserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0
});
headerobserver.observe(header);


// ! Revwies //
let vParag = document.getElementById('parag');
let vPerson = document.getElementById('personImg');
let vPersonName = document.getElementById('personName');
let vPersonJob = document.getElementById('personJob');
let vFirst = document.getElementById('firstPoint');
let vSecond = document.getElementById('secondPoint');
let vThird = document.getElementById('ThirdPoint');


let firstPerson = {
    parag: "I've good experience dealing with EasyLo. company, they are so professional including their services and customre care, they have so much expericnce in order to procide high quality services, I would recommend this company to all people" +
        " that I know for sure, Thank you!.",
    id: 'person-1.jpg',
    name: 'Oliver Break',
    job: 'Seo developer',
};

let secondPerson = {
    parag: 'This was fantastic experience when Ive been dealing with this company for many years, they help me a lot and my life is being better with them and because of getting benefit of their good services, recommended for sure for everyone!',
    id: 'person-2.jpg',
    name: 'Emaa Marcos',
    job: 'Designer',

}

let thirdPerson = {
    parag: ' I just want to say, at first I was afraid of dealing with loans companies but when I visited the company and talk to them, they ahve convinced me in a good and safe method where everthing was clarified perfectly and everyone can ensore that!',
    id: 'person-3.jpg',
    name: 'William Bicco',
    job: 'Front-End',
}

vFirst.addEventListener('click', function() {
    vParag.innerHTML = firstPerson.parag;
    vPerson.style.background = `url('images/${firstPerson.id}') no-repeat`;
    vPerson.style.backgroundSize = "100%";
    vPersonName.innerHTML = firstPerson.name;
    vPersonJob.innerHTML = firstPerson.job;
    vFirst.style.backgroundColor = 'rgba(0, 0, 0, 0.356)';
    vFirst.style.backgroundBlendMode = 'darken';
    vSecond.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    vThird.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    vParag.style.opacity = 0;
    vPerson.style.opacity = 0;
    vPersonName.style.opacity = 0;
    vPersonJob.style.opacity = 0;
    setTimeout(function() {
        vParag.style.opacity = 1;
        vPerson.style.opacity = 1;
        vPersonName.style.opacity = 1;
        vPersonJob.style.opacity = 1;
    }, 230)
});

vSecond.addEventListener('click', function() {
    vParag.innerHTML = secondPerson.parag;
    vPerson.style.background = `url('images/${secondPerson.id}') no-repeat`;
    vPerson.style.backgroundSize = "100%";
    vPersonName.innerHTML = secondPerson.name;
    vPersonJob.innerHTML = secondPerson.job;
    vSecond.style.backgroundColor = 'rgba(0, 0, 0, 0.356)'
    vSecond.style.backgroundBlendMode = 'darken'
    vFirst.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    vThird.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    vParag.style.opacity = 0;
    vPerson.style.opacity = 0;
    vPersonName.style.opacity = 0;
    vPersonJob.style.opacity = 0;
    setTimeout(function() {
        vParag.style.opacity = 1;
        vPerson.style.opacity = 1;
        vPersonName.style.opacity = 1;
        vPersonJob.style.opacity = 1;
    }, 230)

});

vThird.addEventListener('click', function() {
    vParag.innerHTML = thirdPerson.parag;
    vPerson.style.background = `url('images/${thirdPerson.id}') no-repeat`;
    vPerson.style.backgroundSize = "100%";
    vPersonName.innerHTML = thirdPerson.name;
    vPersonJob.innerHTML = thirdPerson.job;
    vThird.style.backgroundColor = 'rgba(0, 0, 0, 0.356)'
    vThird.style.backgroundBlendMode = 'darken'
    vSecond.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    vFirst.style.backgroundColor = 'rgba(0, 0, 0, 0)'
    vParag.style.opacity = 0;
    vPerson.style.opacity = 0;
    vPersonName.style.opacity = 0;
    vPersonJob.style.opacity = 0;
    setTimeout(function() {
        vParag.style.opacity = 1;
        vPerson.style.opacity = 1;
        vPersonName.style.opacity = 1;
        vPersonJob.style.opacity = 1;
    }, 230)
});

let vIcon = document.getElementById('icon');
let vUpBtn = document.getElementById('upButton');


window.addEventListener('scroll', function() {
    if (window.scrollY > 449) {
        vUpBtn.style.opacity = 0.9;
        vUpBtn.style.cursor = 'pointer';
        vIcon.style.cursor = 'pointer'
    } else {
        vUpBtn.style.opacity = 0;
        vUpBtn.style.cursor = 'context-menu';
        vIcon.style.cursor = 'context-menu'
    }
})

vUpBtn.addEventListener('click', function() {
    setTimeout(function() {
        window.scrollTo(0, 0)
    }, 100);
    vUpBtn.classList.add('isClicked');
    setTimeout(function() {
        vUpBtn.classList.remove('isClicked')
    }, 750)
})


// ! Loder //


let loader = document.getElementById("load");
let vHeader = document.querySelector('#header')

window.addEventListener("load", () => {

    window.scrollTo(0, 0);
    loader.style.display = 'flex'
    loader.style.opacity = '1'
    vHeader.style.display = 'none'
    setTimeout(() => {
        setTimeout(() => {
            hideLoader()
        }, 750);
        loader.style.opacity = "0";
        setTimeout(() => {}, 2000);
    }, 1600);
    showLoader();



});



function showLoader() {
    loader.style.display = "none";

    console.log("Show The Loader");
    loader.style.display = 'flex';

}

function hideLoader() {
    vHeader.style.display = 'flex'
    console.log("Hide The Loader");
    loader.style.display = 'none';
}