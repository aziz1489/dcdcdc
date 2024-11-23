const imgs = document.querySelectorAll('img');


const hideContent = () => {
    imgs.forEach(c => {
        c.style.display = 'none';
    });
};

hideContent();

const showContent = (i) => {
    imgs[i].style.display = 'block';
};

showContent(2);

const ddd1 = document.querySelectorAll('.ddd1');
const ddd2 = document.querySelectorAll('.ddd2');
const ddd3 = document.querySelectorAll('.ddd3');
const ddd4 = document.querySelectorAll('.ddd4');

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');


btn1.addEventListener('click', function() {
    ddd1.forEach(c => {
        c.style.display = 'block'; 
    });
    ddd2.forEach(c => {
        c.style.display = 'none'; 
    });
    ddd3.forEach(c => {
        c.style.display = 'none'; 
    });
    ddd4.forEach(c => {
        c.style.display = 'none';  
    });
});


btn2.addEventListener('click', function() {
    ddd2.forEach(c => {
        c.style.display = 'block'; 
    });
    ddd1.forEach(c => {
        c.style.display = 'none';  
    });
    ddd3.forEach(c => {
        c.style.display = 'none';  
    });
    ddd4.forEach(c => {
        c.style.display = 'none';
    });
});

btn3.addEventListener('click', function() {
    ddd3.forEach(c => {
        c.style.display = 'block';  
    });
    ddd1.forEach(c => {
        c.style.display = 'none';  
    });
    ddd2.forEach(c => {
        c.style.display = 'none';  2
    });
    ddd4.forEach(c => {
        c.style.display = 'none';
    });
});

btn4.addEventListener('click', function() {
    ddd4.forEach(c => {
        c.style.display = 'block'; 
    });
    ddd1.forEach(c => {
        c.style.display = 'none'; 
    });
    ddd2.forEach(c => {
        c.style.display = 'none';  
    });
    ddd3.forEach(c => {
        c.style.display = 'none'; 
    });
});
