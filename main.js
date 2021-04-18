const btn = document.querySelector('.generate');
const cats = document.querySelector('.removal-container')
const cont = document.querySelector('.cats-container');





// Function remove container

const removeContainer = (e) => {
  e.preventDefault();
  cats.style.display = 'none';
}


// get Cat images

const catsImages = async () => {

    try {
    let catsImageDiv = document.querySelector('.cats-images')  
    catsImageDiv.innerHTML = '';
    
    const res = await fetch('https://api.thecatapi.com/v1/images/search')

    const data = await res.json();
    console.log(data);
    let catsImage = data[0].url
    
    let catsImageEl = document.createElement('img')
    catsImageEl.setAttribute('src', `${catsImage}`)
    catsImageEl.classList.add('size');

    catsImageDiv.appendChild(catsImageEl);

} catch (e) {
    console.log('Don`t Worry, Simple Error :p');
}
}


// Event Listeners

btn.addEventListener('click', removeContainer);

btn.addEventListener('click', catsImages);