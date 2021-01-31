let slides = document.getElementsByClassName('kotak-isi-bagian-bawah')
let index = 0

let btnLeft = document.querySelector('.arrow-button-left')
let btnRight = document.querySelector('.arrow-button-right')

btnLeft.addEventListener('click',()=> {
    if (index == 0) index = slides.length-3;
    else index--;
    slides[0].style.marginLeft = `-${index * 370}px`
})

btnRight.addEventListener('click',()=> {
    if (index == slides.length-3) index = 0;
    else index++;
    slides[0].style.marginLeft = `-${index * 370}px`
})

function goRight() {
    if (index == slides.length-3) index = 0;
    else index++;
    slides[0].style.marginLeft = `-${index * 370}px`
}

function goRightF(x) {
    if (index == slides.length-x) index = 0;
    else index++;
    slides[0].style.marginLeft = `-${index * 370}px`
}

setInterval(goRight,5000)

let putar = document.getElementsByClassName('masuk-login-2')[0]
let putarDua = document.getElementsByClassName('masuk-login-1')[0]
putar.addEventListener("click", ()=> { 
    document.querySelector('.kotak-login-bagian-footer-tengah-dua').classList.add('happy')
    document.querySelector('.kotak-login-bagian-footer-tengah-satu').classList.add('happyDua')
})
putarDua.addEventListener("click", ()=> { 
    document.querySelector('.kotak-login-bagian-footer-tengah-dua').classList.remove('happy')
    document.querySelector('.kotak-login-bagian-footer-tengah-satu').classList.remove('happyDua')
})

let burger = document.getElementById('humburger')
let links = document.getElementById('links')
let closer = document.getElementById('close')
let burgerJs = document.getElementById('humburger-js')
let linksJs = document.getElementById('links-js')
let closerJs = document.getElementById('close-js')

burger.addEventListener("click", function () {
    links.style.visibility = 'visible'
    links.style.transform = 'scale(1)'
    links.style.opacity = '1'
})

closer.addEventListener("click", function () {
    links.style.visibility = 'hidden'
    links.style.transform = 'scale(.4)'
    links.style.opacity = '0'
})

burgerJs.addEventListener("click", function () {
    linksJs.style.visibility = 'visible'
    linksJs.style.transform = 'scale(1)'
    linksJs.style.opacity = '1'
})

closerJs.addEventListener("click", function () {
    linksJs.style.visibility = 'hidden'
    linksJs.style.transform = 'scale(.4)'
    linksJs.style.opacity = '0'
})

window.onscroll = function() {myFunctionScroll(),gmbLeftF(),gmbRightF(),askF()}
let body = document.getElementsByTagName(`body`)[0];
let atas = document.getElementById('kumpulan-header-atas-js')
let gmbLeft = document.querySelector('.gambar-bagian-isi-atas')
let gmbRight = document.querySelector('.gambar-bagian-isi-tengah')
let relatif = document.querySelector('.relatif')

function myFunctionScroll() {
    if (document.body.scrollTop > 530 || document.documentElement.scrollTop > 530) {
      atas.style.top = `0`
    }else{
        atas.style.top = `-20%`
    }
}

function gmbLeftF() {
    if (document.body.scrollTop > 470 || document.documentElement.scrollTop > 470){
        gmbLeft.style.marginLeft = '0px'
        gmbLeft.style.opacity = '1'
    }
}

function gmbRightF() {
    if (document.body.scrollTop > 1100 || document.documentElement.scrollTop > 1100){
        gmbRight.style.marginLeft = '-20px'
        gmbRight.style.opacity = '1'
    }
}

function askF() {
    if (document.body.scrollTop > 2800 || document.documentElement.scrollTop > 2800) {
        relatif.style.marginLeft= '30px'
        relatif.style.opacity= '1'
    }
}