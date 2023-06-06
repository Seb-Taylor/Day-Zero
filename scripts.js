// Get the language parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang');

const enElements = document.getElementsByClassName('en');
const arElements = document.getElementsByClassName('ar');
const ukElements = document.getElementsByClassName('uk');
const zhElements = document.getElementsByClassName('zh');
const psElements = document.getElementsByClassName('ps');

// Initial language based on URL parameter
let currentLang = lang || 'en';

function setLanguage() {
    const langElements = {en: enElements, ar: arElements, uk: ukElements, zh: zhElements, ps: psElements};
    for (const language in langElements) {
        const elements = langElements[language];
        const displayStyle = language === currentLang ? 'block' : 'none';
        for (let i = 0; i < elements.length; i++) {
            elements[i].style.display = displayStyle;
        }
    }
}

// Set initial language
setLanguage();

document.getElementById('switch-lang').addEventListener('click', function() {
    // Redirect to the homepage when the switch language button is clicked
    window.location.href = 'home.html';
});
