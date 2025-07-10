const modal = document.querySelector('.modal');
const previews = document.querySelectorAll('.display_gallery img');
const original = document.querySelector('.full-image')

previews.forEach(preview => {
    preview.addEventListener('click', () => {
        const originalSrc = preview.getAttribute('data-original')
        original.src = `./${originalSrc}`
        modal.classList.add("open");
        original.classList.add("open")
    })
})

modal.addEventListener('click', (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open")
        original.classList.remove("open")
    }
})