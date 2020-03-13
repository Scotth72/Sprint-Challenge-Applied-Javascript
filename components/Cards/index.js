// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

function CreateCard (object){
    const card = document.createElement(`div`)
    const headline = document.createElement(`div`)
    const author = document.createElement(`div`)
    const imgContainer = document.createElement(`div`)
    const img = document.createElement(`img`)
    const authorName = document.createElement(`span`)

    card.classList.add(`card`)
    headline.classList.add(`headline`)
    author.classList.add(`author`)
    imgContainer.classList.add(`img-container`)

    card.append(headline)
    card.append(author)
    author.append(imgContainer)
    imgContainer.append(img)
    author.append(authorName)

    headline.textContent = object.headline
    img.src = object.authorPhoto
    authorName.textContent = `By ${object.authorName}`


    return card
}

const cards = document.querySelector(`.cards-container`)
//const javascript = []


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log (response.data.articles.javascript)
    response.data.articles.javascript.forEach( item => {
        cards.append(CreateCard(item))
    })
})
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response.data.articles.bootstrap)
    response.data.articles.bootstrap.forEach( item => {
            cards.append(CreateCard(item))
    })    
})
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response.data.articles.technology)
    response.data.articles.technology.forEach( item => {
        cards.append(CreateCard(item))
    })
   // return cards
})
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    console.log(response.data.articles.jquery)
    response.data.articles.jquery.forEach(item => {
        cards.append(CreateCard(item))
    })
})
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
    response.data.articles.node.forEach(item => {
        cards.append(CreateCard(item))
    })
})
