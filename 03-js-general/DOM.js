const container = document.querySelector('#container')

const content = document.createElement('div')
content.classList.add('content')
content.textContent = 'This is the glorious text-content!'
container.appendChild(content)

const paragraph = document.createElement('p')
paragraph.style.cssText = 'color: red'
paragraph.textContent = "Hey I'm Red"
container.appendChild(paragraph)

const title = document.createElement('h3')
title.style.cssText = 'color: blue'
title.textContent = "i'm Blue and h3"
container.appendChild(title)


const pinkDiv = document.createElement('div')
pinkDiv.style.cssText = 'background: pink; border: black 5px solid;'

const pinkDivTitle = document.createElement('h1')
pinkDivTitle.textContent = "i'm in a div"

const pinkDivParagraph = document.createElement('p')
pinkDivParagraph.textContent = "ME TOO!"

pinkDiv.appendChild(pinkDivTitle)
pinkDiv.appendChild(pinkDivParagraph)
container.appendChild(pinkDiv)

const btn2 = document.querySelector('#btn2');
btn2.onclick = () => alert("Hello World");

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', function (e) {
  alert("Hello World");
  console.log(e);
});