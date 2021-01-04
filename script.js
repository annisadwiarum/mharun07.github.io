let input = document.getElementById('input');
let table = document.getElementsByClassName('table-group')[0];
let headerTable = document.getElementsByClassName('header-table')[0];
let navbar = document.getElementsByClassName('navbar-grooup-1')[0];
let noDataImage = document.createElement('img');
let noDataFont = document.createElement('div');
let isiNoDataFont = document.createTextNode("Sorry We Couldn't Find It");
// let scrolls = document.createElement('div');
// let isiScroll = document.createTextNode("");
// let body = document.getElementsByTagName('body')[0];
// scrolls.appendChild(isiScroll);
// body.appendChild(scrolls);
// scrolls.innerHTML = '&#11015; Tabel Dibawah Ini Bisa Discroll &#11015;';
// scrolls.setAttribute("class","scrolls-js");
noDataImage.setAttribute("src","image/cloud.png");
noDataImage.setAttribute("class","awan");
noDataFont.setAttribute("class","awan-font");
noDataFont.appendChild(isiNoDataFont);
table.appendChild(noDataImage);
table.appendChild(noDataFont);
noDataImage.style.display="none";
noDataFont.style.display="none";
table.style.background = 'url(image/paran-1.png) no-repeat center center fixed';
window.onscroll = function() {functionHeader()};
input.addEventListener("keydown",keyboard,false);

function keyboard(key) {
    if (key.keyCode == "13") {
        myfunction();
    }
}

// function navbarItem() {
//     document.getElementsByClassName("navbar-x")[0].style.display="none";
// }

// function navbarItemX() {
//     document.getElementsByClassName("navbar-x")[0].style.display="flex";
// }

function ulang() {
    for (let i = 0; i < 104; i++) {
        document.getElementsByClassName('isi-table')[i].style.display = 'none';
    }
    document.getElementsByClassName('header-table')[0].style.display="flex";
    noDataImage.style.display="none";
    noDataFont.style.display="none";
    table.style.background = 'url(image/paran-1.png) no-repeat center center fixed';
}

function ulang1() {
    for (let i = 0; i < 104; i++) {
        document.getElementsByClassName('isi-table')[i].style.display = 'flex';
    }
    document.getElementsByClassName('header-table')[0].style.display="flex";
    noDataImage.style.display="none";
    noDataFont.style.display="none";
    table.style.background = 'url(image/paran-1.png) no-repeat center center fixed';
}

function functionHeader() {
    if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) {
        navbar.style.top = '0px';
        navbar.style.opacity = '1';
        navbar.style.visibility = 'visible';
        navbar.style.zIndex = '1000000';
        navbar.style.background = 'white';
    }else{
        navbar.style.top = '-20%';
        navbar.style.opacity = '0';
        navbar.style.visibility = 'hidden';
        navbar.style.zIndex = '1000000';
    }
}

function myfunction() {
    if (input.value == 'doctype'){
        ulang();
        document.getElementsByClassName('isi-table')[0].style.display="flex";
    }else if (input.value == 'html'){
        ulang();
        document.getElementsByClassName('isi-table')[1].style.display="flex";
    }else if (input.value == 'title'){
        ulang();
        document.getElementsByClassName('isi-table')[2].style.display="flex";
    }else if (input.value == 'body'){
        ulang();
        document.getElementsByClassName('isi-table')[3].style.display="flex";
    }else if (input.value == 'heading'){
        ulang();
        document.getElementsByClassName('isi-table')[4].style.display="flex";
    }else if (input.value == 'p'){
        ulang();
        document.getElementsByClassName('isi-table')[5].style.display="flex";
    }else if (input.value == 'br'){
        ulang();
        document.getElementsByClassName('isi-table')[6].style.display="flex";
    }else if (input.value == 'hr'){
        ulang();
        document.getElementsByClassName('isi-table')[7].style.display="flex";
    }else if (input.value == 'komen'){
        ulang();
        document.getElementsByClassName('isi-table')[8].style.display="flex";
    }else if (input.value == 'abbr'){
        ulang();
        document.getElementsByClassName('isi-table')[9].style.display="flex";
    }else if (input.value == 'address'){
        ulang();
        document.getElementsByClassName('isi-table')[10].style.display="flex";
    }else if (input.value == 'b'){
        ulang();
        document.getElementsByClassName('isi-table')[11].style.display="flex";
    }else if (input.value == 'bdi'){
        ulang();
        document.getElementsByClassName('isi-table')[12].style.display="flex";
    }else if (input.value == 'bdo'){
        ulang();
        document.getElementsByClassName('isi-table')[13].style.display="flex";
    }else if (input.value == 'blockquote'){
        ulang();
        document.getElementsByClassName('isi-table')[14].style.display="flex";
    }else if (input.value == 'cite'){
        ulang();
        document.getElementsByClassName('isi-table')[15].style.display="flex";
    }else if (input.value == 'code'){
        ulang();
        document.getElementsByClassName('isi-table')[16].style.display="flex";
    }else if (input.value == 'del'){
        ulang();
        document.getElementsByClassName('isi-table')[17].style.display="flex";
    }else if (input.value == 'dfn'){
        ulang();
        document.getElementsByClassName('isi-table')[18].style.display="flex";
    }else if (input.value == 'i'){
        ulang();
        document.getElementsByClassName('isi-table')[19].style.display="flex";
    }else if (input.value == 'ins'){
        ulang();
        document.getElementsByClassName('isi-table')[20].style.display="flex";
    }else if (input.value == 'kbd'){
        ulang();
        document.getElementsByClassName('isi-table')[21].style.display="flex";
    }else if (input.value == 'mark'){
        ulang();
        document.getElementsByClassName('isi-table')[22].style.display="flex";
    }else if (input.value == 'meter'){
        ulang();
        document.getElementsByClassName('isi-table')[23].style.display="flex";
    }else if (input.value == 'pre'){
        ulang();
        document.getElementsByClassName('isi-table')[24].style.display="flex";
    }else if (input.value == 'progress'){
        ulang();
        document.getElementsByClassName('isi-table')[25].style.display="flex";
    }else if (input.value == 'q'){
        ulang();
        document.getElementsByClassName('isi-table')[26].style.display="flex";
    }else if (input.value == 'rp'){
        ulang();
        document.getElementsByClassName('isi-table')[27].style.display="flex";
    }else if (input.value == 'ruby'){
        ulang();
        document.getElementsByClassName('isi-table')[28].style.display="flex";
    }else if (input.value == 'rt'){
        ulang();
        document.getElementsByClassName('isi-table')[29].style.display="flex";
    }else if (input.value == 's'){
        ulang();
        document.getElementsByClassName('isi-table')[30].style.display="flex";
    }else if (input.value == 'samp'){
        ulang();
        document.getElementsByClassName('isi-table')[31].style.display="flex";
    }else if (input.value == 'small'){
        ulang();
        document.getElementsByClassName('isi-table')[32].style.display="flex";
    }else if (input.value == 'strong'){
        ulang();
        document.getElementsByClassName('isi-table')[33].style.display="flex";
    }else if (input.value == 'sub'){
        ulang();
        document.getElementsByClassName('isi-table')[34].style.display="flex";
    }else if (input.value == 'sup'){
        ulang();
        document.getElementsByClassName('isi-table')[35].style.display="flex";
    }else if (input.value == 'time'){
        ulang();
        document.getElementsByClassName('isi-table')[36].style.display="flex";
    }else if (input.value == 'u'){
        ulang();
        document.getElementsByClassName('isi-table')[37].style.display="flex";
    }else if (input.value == 'var'){
        ulang();
        document.getElementsByClassName('isi-table')[38].style.display="flex";
    }else if (input.value == 'wbr'){
        ulang();
        document.getElementsByClassName('isi-table')[39].style.display="flex";
    }else if (input.value == 'form'){
        ulang();
        document.getElementsByClassName('isi-table')[40].style.display="flex";
    }else if (input.value == 'input'){
        ulang();
        document.getElementsByClassName('isi-table')[41].style.display="flex";
    }else if (input.value == 'textarea'){
        ulang();
        document.getElementsByClassName('isi-table')[42].style.display="flex";
    }else if (input.value == 'button'){
        ulang();
        document.getElementsByClassName('isi-table')[43].style.display="flex";
    }else if (input.value == 'select'){
        ulang();
        document.getElementsByClassName('isi-table')[44].style.display="flex";
    }else if (input.value == 'optgroup'){
        ulang();
        document.getElementsByClassName('isi-table')[45].style.display="flex";
    }else if (input.value == 'option'){
        ulang();
        document.getElementsByClassName('isi-table')[46].style.display="flex";
    }else if (input.value == 'label'){
        ulang();
        document.getElementsByClassName('isi-table')[47].style.display="flex";
    }else if (input.value == 'legend'){
        ulang();
        document.getElementsByClassName('isi-table')[48].style.display="flex";
    }else if (input.value == 'fieldset'){
        ulang();
        document.getElementsByClassName('isi-table')[49].style.display="flex";
    }else if (input.value == 'datalist'){
        ulang();
        document.getElementsByClassName('isi-table')[50].style.display="flex";
    }else if (input.value == 'output'){
        ulang();
        document.getElementsByClassName('isi-table')[51].style.display="flex";
    }else if (input.value == 'iframe'){
        ulang();
        document.getElementsByClassName('isi-table')[52].style.display="flex";
    }else if (input.value == 'img'){
        ulang();
        document.getElementsByClassName('isi-table')[53].style.display="flex";
    }else if (input.value == 'map'){
        ulang();
        document.getElementsByClassName('isi-table')[54].style.display="flex";
    }else if (input.value == 'area'){
        ulang();
        document.getElementsByClassName('isi-table')[55].style.display="flex";
    }else if (input.value == 'canvas'){
        ulang();
        document.getElementsByClassName('isi-table')[56].style.display="flex";
    }else if (input.value == 'figcaption'){
        ulang();
        document.getElementsByClassName('isi-table')[57].style.display="flex";
    }else if (input.value == 'figure'){
        ulang();
        document.getElementsByClassName('isi-table')[58].style.display="flex";
    }else if (input.value == 'audio'){
        ulang();
        document.getElementsByClassName('isi-table')[59].style.display="flex";
    }else if (input.value == 'source'){
        ulang();
        document.getElementsByClassName('isi-table')[60].style.display="flex";
    }else if (input.value == 'track'){
        ulang();
        document.getElementsByClassName('isi-table')[61].style.display="flex";
    }else if (input.value == 'video'){
        ulang();
        document.getElementsByClassName('isi-table')[62].style.display="flex";
    }else if (input.value == 'a'){
        ulang();
        document.getElementsByClassName('isi-table')[63].style.display="flex";
    }else if (input.value == 'link'){
        ulang();
        document.getElementsByClassName('isi-table')[64].style.display="flex";
    }else if (input.value == 'nav'){
        ulang();
        document.getElementsByClassName('isi-table')[65].style.display="flex";
    }else if (input.value == 'ul'){
        ulang();
        document.getElementsByClassName('isi-table')[66].style.display="flex";
    }else if (input.value == 'ol'){
        ulang();
        document.getElementsByClassName('isi-table')[67].style.display="flex";
    }else if (input.value == 'li'){
        ulang();
        document.getElementsByClassName('isi-table')[68].style.display="flex";
    }else if (input.value == 'dl'){
        ulang();
        document.getElementsByClassName('isi-table')[69].style.display="flex";
    }else if (input.value == 'dt'){
        ulang();
        document.getElementsByClassName('isi-table')[70].style.display="flex";
    }else if (input.value == 'dd'){
        ulang();
        document.getElementsByClassName('isi-table')[71].style.display="flex";
    }else if (input.value == 'menu'){
        ulang();
        document.getElementsByClassName('isi-table')[72].style.display="flex";
    }else if (input.value == 'command'){
        ulang();
        document.getElementsByClassName('isi-table')[73].style.display="flex";
    }else if (input.value == 'table'){
        ulang();
        document.getElementsByClassName('isi-table')[74].style.display="flex";
    }else if (input.value == 'caption'){
        ulang();
        document.getElementsByClassName('isi-table')[75].style.display="flex";
    }else if (input.value == 'th'){
        ulang();
        document.getElementsByClassName('isi-table')[76].style.display="flex";
    }else if (input.value == 'tr'){
        ulang();
        document.getElementsByClassName('isi-table')[77].style.display="flex";
    }else if (input.value == 'td'){
        ulang();
        document.getElementsByClassName('isi-table')[78].style.display="flex";
    }else if (input.value == 'thead'){
        ulang();
        document.getElementsByClassName('isi-table')[79].style.display="flex";
    }else if (input.value == 'tbody'){
        ulang();
        document.getElementsByClassName('isi-table')[80].style.display="flex";
    }else if (input.value == 'tfoot'){
        ulang();
        document.getElementsByClassName('isi-table')[81].style.display="flex";
    }else if (input.value == 'col'){
        ulang();
        document.getElementsByClassName('isi-table')[82].style.display="flex";
    }else if (input.value == 'colgroup'){
        ulang();
        document.getElementsByClassName('isi-table')[83].style.display="flex";
    }else if (input.value == 'style'){
        ulang();
        document.getElementsByClassName('isi-table')[84].style.display="flex";
    }else if (input.value == 'div'){
        ulang();
        document.getElementsByClassName('isi-table')[85].style.display="flex";
    }else if (input.value == 'span'){
        ulang();
        document.getElementsByClassName('isi-table')[86].style.display="flex";
    }else if (input.value == 'header'){
        ulang();
        document.getElementsByClassName('isi-table')[87].style.display="flex";
    }else if (input.value == 'footer'){
        ulang();
        document.getElementsByClassName('isi-table')[88].style.display="flex";
    }else if (input.value == 'hgroup'){
        ulang();
        document.getElementsByClassName('isi-table')[89].style.display="flex";
    }else if (input.value == 'section'){
        ulang();
        document.getElementsByClassName('isi-table')[90].style.display="flex";
    }else if (input.value == 'article'){
        ulang();
        document.getElementsByClassName('isi-table')[91].style.display="flex";
    }else if (input.value == 'aside'){
        ulang();
        document.getElementsByClassName('isi-table')[92].style.display="flex";
    }else if (input.value == 'details'){
        ulang();
        document.getElementsByClassName('isi-table')[93].style.display="flex";
    }else if (input.value == 'dialog'){
        ulang();
        document.getElementsByClassName('isi-table')[94].style.display="flex";
    }else if (input.value == 'summary'){
        ulang();
        document.getElementsByClassName('isi-table')[95].style.display="flex";
    }else if (input.value == 'head'){
        ulang();
        document.getElementsByClassName('isi-table')[96].style.display="flex";
    }else if (input.value == 'meta'){
        ulang();
        document.getElementsByClassName('isi-table')[97].style.display="flex";
    }else if (input.value == 'base'){
        ulang();
        document.getElementsByClassName('isi-table')[98].style.display="flex";
    }else if (input.value == 'script'){
        ulang();
        document.getElementsByClassName('isi-table')[99].style.display="flex";
    }else if (input.value == 'noscript'){
        ulang();
        document.getElementsByClassName('isi-table')[100].style.display="flex";
    }else if (input.value == 'embed'){
        ulang();
        document.getElementsByClassName('isi-table')[101].style.display="flex";
    }else if (input.value == 'object'){
        ulang();
        document.getElementsByClassName('isi-table')[102].style.display="flex";
    }else if (input.value == 'param'){ 
        ulang();
        document.getElementsByClassName('isi-table')[103].style.display="flex";
    }else if (input.value == ''){
        ulang1();
    }else if (input.value !== 'doctype' || "html" || "title" || "body" || "heading" || "p" || "br" || "hr" || "komen" || "abbr" || "address" || "b" || "bdi" || "bdo" || "blockquote" || "cite" || "code" || "del" || "dfn" || "i" || "ins" || "kbd" || "mark" || "meter" || "pre" || "progress" || "q" || "rp" || "ruby" || "rt" || "s" || "samp" || "small" || "strong" || "sub" || "sup" || "time" || "u" || "var" || "wbr" || "form" || "input"  || "textarea"  || "button"  || "select"  || "optgroup" || "option" || "label" || "legend" || "fieldset" || "datalist" || "output" || "iframe" || "img" || "map" || "area" || "canvas" || "figcaption" || "figure" || "audio" || "source" || "track" || "video" || "a" || "link" || "nav" || "ul" || "ol" || "li" || "dl" || "dt" || "dd" || "menu" || "command" || "table" || "caption" || "th" || "tr" || "td" || "thead" || "tbody" || "tfoot" || "col" || "colgroup" || "style" || "div" || "span" || "header" || "footer" || "hgroup" || "section" || "article" || "aside" || "details" || "dialog" || "summary" || "head" || "meta" || "base" || "script" || "noscript" || "embed" || "object" || "param"){
        ulang();
        noDataImage.style.display="flex";
        noDataFont.style.display="flex";
        table.style.background = 'none';
        noDataImage.style.width="280px";
        noDataImage.style.filter="grayscale(100%)";
        noDataImage.style.margin="10px auto";
        noDataFont.style.fontSize="40px";
        noDataFont.style.margin="auto";
        noDataFont.style.marginTop="10px";
        noDataFont.style.color="gray";
        noDataFont.style.fontWeight="bold";
        document.getElementsByClassName('header-table')[0].style.display="none";
    }
}

// Responsive web js

function myFunctionResponsive(x) {
    if (x.matches) { 
      alert('Perhatian !! \n\n Tabel Tag HTML Bisa Discroll Kekanan')
    }
}

let x = window.matchMedia("(max-width: 440px)")
myFunctionResponsive(x) 
x.addListener(myFunctionResponsive) 