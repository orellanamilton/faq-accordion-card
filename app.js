
document.querySelectorAll('.faqs')
.forEach(Faq => {
    Faq.addEventListener('click' , () => {
        Faq.classList.toggle('active');
    })
})