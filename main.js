const genBtn = document.querySelector('.wrapper__btnGen');
const backBtn = document.querySelector('.btnBack');
const cats = document.querySelector('.cats--remove')
const loader = document.querySelector('.loader'); 
let catsImageDiv = document.querySelector('.cats__images') 

// Function remove container

const removeContainer = () => {
  cats.style.display = 'none';
}

// Get Cat images

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

    }, 1000)
  
  } catch (e) {
      console.log('Something went wrong. Please try again :)');
  }
}

// show loader

function showLoader() {
    loader.style.display = 'none'
    setTimeout(() => { 
      loader.style.display = 'block'
  }, 1000)
}

// Event Listeners

genBtn.addEventListener('click', () => {
  removeContainer();
  catsImages();
  catsImageDiv.style.display = 'block';
});

backBtn.addEventListener('click', () => {
  loader.style.display = 'none';
  catsImageDiv.style.display = 'none';
  cats.style.display = 'flex';
});