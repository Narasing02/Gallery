let galleryContainer=document.querySelector('.gallery-container');
const card1 =document.querySelector('.card1');
const card2 =document.querySelector('.card2');
const card3 =document.querySelector('.card3');
const card4 =document.querySelector('.card4');
const card5 =document.querySelector('.card5');
const card6 =document.querySelector('.card6');
const card7 =document.querySelector('.card7');
const card8 =document.querySelector('.card8');
const card9 =document.querySelector('.card9');
const overallImg =document.querySelector('.overall-img');

card1.addEventListener('click',()=>{
   
    let img1 =document.createElement('img');
    overallImg.classList.add('img1');

    img1.src="https://cdn.pixabay.com/photo/2023/10/16/03/44/daughter-8318355_1280.jpg";
    img1.classList.add('img-size')
    overallImg.appendChild(img1);
    let icon =document.createElement('span');
    icon.innerHTML='<i class="fas fa-times"></i>';
    icon.classList.add('icon');
    overallImg.appendChild(icon);
    galleryContainer.classList.add('overLap');

    icon.addEventListener('click',()=>{
        overallImg.removeChild(img1);
        overallImg.removeChild(icon);
        galleryContainer.classList.remove('overLap');
    })



})
card2.addEventListener('click',()=>{
   
    let img1 =document.createElement('img');
    overallImg.classList.add('img1');

    img1.src="https://cdn.pixabay.com/photo/2023/11/06/02/16/butterfly-8368603_1280.jpg";
    img1.classList.add('img-size')
    overallImg.appendChild(img1);
    let icon =document.createElement('span');
    icon.innerHTML='<i class="fas fa-times"></i>';
    icon.classList.add('icon');
    overallImg.appendChild(icon);
    galleryContainer.classList.add('overLap');

    icon.addEventListener('click',()=>{
        overallImg.removeChild(img1);
        overallImg.removeChild(icon);
        galleryContainer.classList.remove('overLap');
    })

})
card3.addEventListener('click',()=>{
    let img1 =document.createElement('img');
    overallImg.classList.add('img1');

    img1.src="https://cdn.pixabay.com/photo/2023/10/16/10/57/fountain-8318963_1280.jpg";
    img1.classList.add('img-size')
    overallImg.appendChild(img1);
    let icon =document.createElement('span');
    icon.innerHTML='<i class="fas fa-times"></i>';
    icon.classList.add('icon');
    overallImg.appendChild(icon);
    galleryContainer.classList.add('overLap');

    icon.addEventListener('click',()=>{
        overallImg.removeChild(img1);
        overallImg.removeChild(icon);
        galleryContainer.classList.remove('overLap');
    })

})
card4.addEventListener('click',()=>{
    let img1 =document.createElement('img');
    overallImg.classList.add('img1');

    img1.src="https://cdn.pixabay.com/photo/2023/11/30/07/51/bridge-8420945_1280.jpg";
    img1.classList.add('img-size')
    overallImg.appendChild(img1);
    let icon =document.createElement('span');
    icon.innerHTML='<i class="fas fa-times"></i>';
    icon.classList.add('icon');
    overallImg.appendChild(icon);
    galleryContainer.classList.add('overLap');

    icon.addEventListener('click',()=>{
        overallImg.removeChild(img1);
        overallImg.removeChild(icon);
        galleryContainer.classList.remove('overLap');
    })

})
card5.addEventListener('click',()=>{
    let img1 =document.createElement('img');
    overallImg.classList.add('img1');

    img1.src="https://cdn.pixabay.com/photo/2023/11/24/10/15/cockatoo-8409655_1280.jpg";
    img1.classList.add('img-size')
    overallImg.appendChild(img1);
    let icon =document.createElement('span');
    icon.innerHTML='<i class="fas fa-times"></i>';
    icon.classList.add('icon');
    overallImg.appendChild(icon);
    galleryContainer.classList.add('overLap');

    icon.addEventListener('click',()=>{
        overallImg.removeChild(img1);
        overallImg.removeChild(icon);
        galleryContainer.classList.remove('overLap');
    })

})
card6.addEventListener('click',()=>{
    let img1 =document.createElement('img');
    overallImg.classList.add('img1');

    img1.src="https://cdn.pixabay.com/photo/2023/11/01/11/08/path-8357154_1280.jpg";
    img1.classList.add('img-size')
    overallImg.appendChild(img1);
    let icon =document.createElement('span');
    icon.innerHTML='<i class="fas fa-times"></i>';
    icon.classList.add('icon');
    overallImg.appendChild(icon);
    galleryContainer.classList.add('overLap');

    icon.addEventListener('click',()=>{
        overallImg.removeChild(img1);
        overallImg.removeChild(icon);
        galleryContainer.classList.remove('overLap');
    })

})

card7.addEventListener('click',()=>{
    let img1 =document.createElement('img');
    overallImg.classList.add('img1');

    img1.src="https://cdn.pixabay.com/photo/2023/11/03/11/59/viper-8362870_1280.jpg";
    img1.classList.add('img-size')
    overallImg.appendChild(img1);
    let icon =document.createElement('span');
    icon.innerHTML='<i class="fas fa-times"></i>';
    icon.classList.add('icon');
    overallImg.appendChild(icon);
    galleryContainer.classList.add('overLap');

    icon.addEventListener('click',()=>{
        overallImg.removeChild(img1);
        overallImg.removeChild(icon);
        galleryContainer.classList.remove('overLap');
    })

})
card8.addEventListener('click',()=>{
    let img1 =document.createElement('img');
    overallImg.classList.add('img1');

    img1.src="https://cdn.pixabay.com/photo/2023/10/24/09/23/black-peppercorn-8337820_1280.jpg";
    img1.classList.add('img-size')
    overallImg.appendChild(img1);
    let icon =document.createElement('span');
    icon.innerHTML='<i class="fas fa-times"></i>';
    icon.classList.add('icon');
    overallImg.appendChild(icon);
    galleryContainer.classList.add('overLap');

    icon.addEventListener('click',()=>{
        overallImg.removeChild(img1);
        overallImg.removeChild(icon);
        galleryContainer.classList.remove('overLap');
    })

})
card9.addEventListener('click',()=>{
    let img1 =document.createElement('img');
    overallImg.classList.add('img1');

    img1.src="https://cdn.pixabay.com/photo/2023/10/17/02/14/lotus-8320293_1280.jpg";
    img1.classList.add('img-size')
    overallImg.appendChild(img1);
    let icon =document.createElement('span');
    icon.innerHTML='<i class="fas fa-times"></i>';
    icon.classList.add('icon');
    overallImg.appendChild(icon);
    galleryContainer.classList.add('overLap');

    icon.addEventListener('click',()=>{
        overallImg.removeChild(img1);
        overallImg.removeChild(icon);
        galleryContainer.classList.remove('overLap');
    })

})
