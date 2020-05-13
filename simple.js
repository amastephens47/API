//declare constant variable
const app = document.getElementById('root')
//declare const logo variable
const logo = document.createElement('img')
//location of studio ghibli logo in file
logo.src = 'logo.png'
//declare constant variable container to make a div in the HTML (format)
const container = document.createElement('div')
container.setAttribute('class', 'container')
//put logo and container on page together
app.appendChild(logo)
app.appendChild(container)
//pull data from Ghibli API
fetch('https://ghibliapi.herokuapp.com/films')
  .then(res => res.json())
  .then(data => {
    // Here is where you denote the placement of the data on the DOM
    console.log(data);
    data.forEach(movie => {

      const card = document.createElement('div')
      card.setAttribute('class', 'card')
  
//create a card for each movie


      const h1 = document.createElement('h1')
      h1.textContent = movie.title
//format the movie title in H1 tag

      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300)
      p.textContent = `${movie.description}...`
//format the movie description in p tag

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
        
})
  
  })

data.forEach(movie => {
        const card = document.createElement('div')
      card.setAttribute('class', 'card')
  
//create a card for each movie


      const h1 = document.createElement('h1')
      h1.textContent = movie.title
//format the movie title in H1 tag

      const p = document.createElement('p')
      movie.description = movie.description.substring(0, 300)
      p.textContent = `${movie.description}...`
//ormat the movie description in p tag

      container.appendChild(card)
      card.appendChild(h1)
      card.appendChild(p)
//put it all together: card with title and movie description

})

