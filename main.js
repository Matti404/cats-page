const btn = document.querySelector('.generate');
const cats = document.querySelector('.removal-container')
/*const cont = document.querySelector('.cats-container');*/
const loader = document.querySelector('.loader'); 
let catsImageDiv = document.querySelector('.cats-images') 



// Function remove container

const removeContainer = () => {
  //e.preventDefault();
  cats.style.display = 'none';
}


// get Cat images

const catsImages = async () => {
   
    
    try {
      catsImageDiv.innerHTML = '';
      showLoader();
      setTimeout(async () => {
      const res = await fetch('https://api.thecatapi.com/v1/images/search')
      const data = await res.json();
      console.log(data);
      let catsImage = data[0].url
      let catsImageEl = document.createElement('img')
      catsImageEl.setAttribute('src', `${catsImage}`)
      catsImageEl.classList.toggle('size');
      catsImageDiv.appendChild(catsImageEl);

    }, 2000)
  
  } catch (e) {
      console.log('Don`t Worry, Simple Error :p');
  }

}


// show loader
function showLoader() {
  loader.style.display = 'block'
  setTimeout(() => { 
    loader.style.display = 'none'
  }, 1000)
}

// Event Listeners

btn.addEventListener('click', () => {
  removeContainer();
  catsImages();
});

// btn.addEventListener('click', catsImages);