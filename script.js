const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
    
    if (e.target.classList.contains('active')) {

    } else {
        const active = document.querySelector('.active');
        active.classList.remove('active');
        e.target.classList.add('active');
    }
})