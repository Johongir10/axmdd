const body=document.getElementsByTagName("body")[0]
const card=document.createElement("div")
const a=document.createElement("img")
const h1=document.createElement("h1")
const p=document.createElement("p")
const button=document.createElement("button")




h1.textContent="Twitter"


p.textContent="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus rerum aut ipsum quo delectus adipisci quod incidunt accusamus velit."
button.textContent="Button";
button.classList.add("btn")
a.src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png"
card.classList.add("card")
button.style="font-size:25px;"

card.appendChild(a)
card.appendChild(h1)
card.appendChild(p)
card.appendChild(button)
body.appendChild(card)





















const card1=document.createElement("div")
const b=document.createElement("img")
const h1=document.createElement("h1")
const p=document.createElement("p")
const button=document.createElement("button")





h1.textContent="Instagram"





p.textContent="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim temporibus rerum aut ipsum quo delectus adipisci quod incidunt accusamus velit."
button.textContent="Button";
button.classList.add("btnn")
a.src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/220px-Logo_of_Twitter.svg.png"
card1.classList.add("card1")
button.style="font-size:25px;"






card1.appendChild(b)
card1.appendChild(h1)
card1.appendChild(p)
card1.appendChild(button)
body.appendChild(card1)
