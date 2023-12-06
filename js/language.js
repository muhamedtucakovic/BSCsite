function switchLanguage(language) {
    // Logic to hide/show content based on the selected language
    if (language === 'en') {
        document.getElementById('content-en').style.display = 'block';
        document.getElementById('content-bs').style.display = 'none';
        document.getElementById('content-de').style.display = 'none';
    } else if (language === 'bs') {
        document.getElementById('content-en').style.display = 'none';
        document.getElementById('content-bs').style.display = 'block';
        document.getElementById('content-de').style.display = 'none';
    } else if (language === 'de') {
        document.getElementById('content-en').style.display = 'none';
        document.getElementById('content-bs').style.display = 'none';
        document.getElementById('content-de').style.display = 'block';
    }
}