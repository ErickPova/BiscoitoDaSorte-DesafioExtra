const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnOnClick =document.querySelector("#btnOnClick")

//Váriavel está pegando ID da tag p
let randomPhrase = document.querySelector("#changePharseOnClick")
let generateRandomPhrase

const phrases =[
  'A vida trará coisas boas se tiver paciência.',
  'Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.',
  'São os nossos amigos que nos ensinam as mais valiosas lições.',
  'A sua visão se tornará mais clara apenas quando conseguir olhar para dentro do seu coração.',
  'Nós somos o que pensamos.',
  'Nada é por acaso… Acredite em seus sonhos e nos seus potenciais….Na vida tudo se supera..',
  'Realize o óbvio, pense no improvável e conquiste o impossível.'
]

function toggleScreen(){
  screen2.classList.toggle("hide")
  screen1.classList.toggle("hide")
}
function openingCookieANDchangeScreen(event){
  event.preventDefault()//parando loop do form
  toggleScreen() //Troca de tela

  //Vai realizar sorteio entre 0 e 6 que é o tamanhho array phrases
  generateRandomPhrase = Math.floor(Math.random() * phrases.length);
  randomPhrase.innerText = phrases[generateRandomPhrase]
}
function pressEnterKey(e){
  if(e.key == 'Enter'){
      toggleScreen()
  }
}
 btnOnClick.addEventListener('click', openingCookieANDchangeScreen, pressEnterKey
 )
 document.addEventListener('keydown', pressEnterKey)






