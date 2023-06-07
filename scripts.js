// Get the language parameter from the URL
const urlParams = new URLSearchParams(window.location.search);
const lang = urlParams.get('lang') || 'en';

// Initial language based on URL parameter
let currentLang = lang;

let languages = ['ar', 'en', 'uk', 'zh', 'ps']; // All supported languages

const translations = {
    'ar': {
        'addAttraction': 'أضف جذب',
        'title': 'عنوان',
        'img': 'رابط الصورة',
        'desc': 'وصف',
        'submit': 'خضع',
        'thanks': 'شكرا على مشاركتك. سيقوم المشرف بمراجعة هذا في غضون 72 ساعة.'
    },

    'en': {
        'addAttraction': 'Add Attraction',
        'title': 'Title',
        'img': 'Image URL',
        'desc': 'Description',
        'submit': 'Submit',
        'thanks': 'Thank you for your submission. The admin will review this within 72 hours.'
    },

    'uk': {
        'addAttraction': 'Додати привабливість',
        'title': 'Заголовок',
        'img': 'URL зображення',
        'desc': 'Опис',
        'submit': 'Подати',
        'thanks': 'Дякуємо за вашу пропозицію. Адміністратор перегляне це протягом 72 годин.'
    },

    'zh': {
        'addAttraction': '添加景点',
        'title': '标题',
        'img': '图片网址',
        'desc': '描述',
        'submit': '提交',
        'thanks': '感谢您的提交。管理员将在72小时内审核此内容。'
    },

    'ps': {
        'addAttraction': 'د جذب اضافه کړئ',
        'title': 'سرلیک',
        'img': 'د عکس URL',
        'desc': 'تشریح',
        'submit': 'پیښه کړئ',
        'thanks': 'مننه چې د خپلو ملګرو سره ورکړئ. ادمین دا له 72 ساعتونو کې چیک کړي.'
    }
};

function setLanguage() {
    const langElements = document.querySelectorAll(`[lang="${currentLang}"]`);
    for (let i = 0; i < langElements.length; i++) {
        langElements[i].style.display = 'block';
    }
    const otherLangElements = document.querySelectorAll(`[lang]:not([lang="${currentLang}"])`);
    for (let i = 0; i < otherLangElements.length; i++) {
        otherLangElements[i].style.display = 'none';
    }
}

function switchLanguage() {
    window.location.href = 'home.html';
}



function toggleAttraction(attractionId) {
    const attraction = document.getElementById(attractionId);
    const description = attraction.querySelector("div:last-child");
    if (description.style.display === "none" || !description.style.display) {
        description.style.display = "block";
    } else {
        description.style.display = "none";
    }
}

function addAttraction(form) {
    const title = form.title.value;
    const img = form.img.value;
    const desc = form.desc.value;

    const newAttraction = document.createElement('div');
    newAttraction.className = 'attraction';
    newAttraction.innerHTML = `
    <div class="attraction-header" style="display: none;">
        <img src="${img}" alt="${title}">
        <h2>
            <span lang="en">${title}</span>
            <span lang="ar" style="display: none;">${title}</span>
            <span lang="uk" style="display: none;">${title}</span>
            <span lang="zh" style="display: none;">${title}</span>
            <span lang="ps" style="display: none;">${title}</span>
        </h2>
    </div>
    <div style="display: none;">
        <p lang="en">${desc}</p>
        <p lang="ar" style="display: none;">${desc}</p>
        <p lang="uk" style="display: none;">${desc}</p>
        <p lang="zh" style="display: none;">${desc}</p>
        <p lang="ps" style="display: none;">${desc}</p>
    </div>
`;
    document.querySelector('.attractions').appendChild(newAttraction);
    form.reset(); // reset the form
}

window.addEventListener("DOMContentLoaded", (event) => {
    const attractionDescriptions = document.querySelectorAll('.attraction div:last-child');
    attractionDescriptions.forEach(description => {
        description.style.display = 'none';
    });

    // Set initial language
    setLanguage();

    const addAttractionButton = document.getElementById('add-attraction');
    if (addAttractionButton) {
        addAttractionButton.addEventListener('click', function() {
            // Check if form already open
            const existingForm = document.getElementById('new-attraction-form');
            if (existingForm) {
                return;
            }

            const newForm = document.createElement('form');
            newForm.id = 'new-attraction-form';
            newForm.innerHTML = `
                <label for="title">${translations[currentLang]['title']}:</label><br>
                <input type="text" id="title" name="title" required><br>
                <label for="img">${translations[currentLang]['img']}:</label><br>
                <input type="text" id="img" name="img" required><br>
                <label for="desc">${translations[currentLang]['desc']}:</label><br>
                <textarea id="desc" name="desc" required></textarea><br>
                <input type="submit" value="${translations[currentLang]['submit']}">
            `;
            document.body.appendChild(newForm);

            newForm.addEventListener('submit', function(e) {
                e.preventDefault(); // prevent the form from submitting normally
                addAttraction(this); // pass the form to the addAttraction function
                document.body.removeChild(newForm);  // Remove form after submission
                alert(translations[currentLang]['thanks']);  // Show a pop-up message
            });
        });
    }
    const switchLangButton = document.getElementById('switch-lang');
    if (switchLangButton) { // Check if switch language button exists
        switchLangButton.addEventListener('click', function() {
            switchLanguage(); // Redirect to home.html when the switch language button is clicked
        });
    }
});
