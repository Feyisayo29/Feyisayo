window.addEventListener('scroll', function() {
    const header = document.getElementById('headergangan');
    if (window.scrollY > 50) {
        header.style.backgroundColor = 'black';
    } else {
        header.style.backgroundColor = 'transparent';
    }
});