// Todos os botões da sessão Informations
const btn = document.querySelectorAll('.section-info a, .sectionOutubroRosa a')
const btnHeader = document.querySelectorAll('.header-topo a')
console.log(btn, btnHeader)

// Sections Campanhas/Doações/Sobre/Contato
let campanha = document.getElementById('campanhas')
let doacoes = document.getElementById('doacoes')
let dropBtn = document.querySelectorAll('.dropdown .dropdown-content li a')

// Sections Informações/Exames/Equipe Médica/Tratamento
let information = document.getElementById('informations')
let equipeMedica = document.getElementById('section-equipe-medica')
let exames = document.getElementById('section-exames')
let tratamento = document.getElementById('section-tratamento')

// Botão Campanhas
btnHeader[1].addEventListener('click', () => {
    campanha.style.display = 'flex'
})

dropBtn[0].addEventListener('click', () => {
    campanha.style.display = 'flex'
})

// Botão Doações
btnHeader[2].addEventListener('click', () => {
    doacoes.style.display = 'flex'
})

dropBtn[1].addEventListener('click', () => {
    doacoes.style.display = 'flex'
})

// Botão Saiba Mais
btn[0].addEventListener('click', () => {
    information.style.display = 'flex'
})

// Botão Exames
btn[1].addEventListener('click', () => {
    exames.style.display = 'flex'
    equipeMedica.style.display = 'none'
    tratamento.style.display = 'none'

    if (exames.style.display == 'flex') {
        btn[1].style.background = 'red'
        btn[1].style.border = '1px solid red'
        btn[1].style.color = 'white'

        btn[2].style.backgroundColor = '#29d0f2'
        btn[2].style.border = '1px solid #29d0f2'
        btn[2].style.color = 'black'
        
        btn[3].style.backgroundColor = '#29d0f2'
        btn[3].style.border = '1px solid #29d0f2'
        btn[3].style.color = 'black'

    }
})

// Botão Equipe Médica
btn[2].addEventListener('click', () => {
    equipeMedica.style.display = 'flex'
    exames.style.display = 'none'
    tratamento.style.display = 'none'

    if (equipeMedica.style.display == 'flex') {
        btn[2].style.background = 'red'
        btn[2].style.border = '1px solid red'
        btn[2].style.color = 'white'

        btn[1].style.backgroundColor = '#29d0f2'
        btn[1].style.border = '1px solid #29d0f2'
        btn[1].style.color = 'black'
        
        btn[3].style.backgroundColor = '#29d0f2'
        btn[3].style.border = '1px solid #29d0f2'
        btn[3].style.color = 'black'

    }
})

// Botão Tratamento
btn[3].addEventListener('click', () => {
    tratamento.style.display = 'flex'
    equipeMedica.style.display = 'none'
    exames.style.display = 'none'

    if (tratamento.style.display == 'flex') {
        btn[3].style.background = 'red'
        btn[3].style.border = '1px solid red'
        btn[3].style.color = 'white'

        btn[1].style.backgroundColor = '#29d0f2'
        btn[1].style.border = '1px solid #29d0f2'
        btn[1].style.color = 'black'
        
        btn[2].style.backgroundColor = '#29d0f2'
        btn[2].style.border = '1px solid #29d0f2'
        btn[2].style.color = 'black'
    }
})

const myAnimation = document.querySelectorAll('.carousel, .redesSociais')

myAnimation.forEach((e) => {
    setTimeout(() => {
        document.querySelector('.section-texto').style.display = 'flex'
        document.querySelector('.redesSociais').style.display = 'flex'
        e.classList.add('textAnimation')

    }, 3000)
})