const menuBtns = document.querySelectorAll('.toggle');
const navBar = document.querySelector('nav')
const mainImage = document.querySelector('main > img')
const screenWidth = document.querySelector('body');



menuBtns.forEach(item =>{
    item.addEventListener('click', e=>{
        navBar.classList.toggle('nav-show')
    })
});

imageChange = () =>{
    if(window.innerWidth >= 800){
        mainImage.src = './assets/images/image-web-3-desktop.jpg'
    }else{
        mainImage.src = './assets/images/image-web-3-mobile.jpg'
    }
}
imageChange()


