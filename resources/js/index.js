let dinos = [
    {
        id: 0,
        name: 'Scipionyx',
        img: 'http://images.dinosaurpictures.org/Scipionyx_QY_200_3742.jpg',
        cena: 221
    },
    {
        id: 1,
        name: 'Becklespinax',
        img: 'http://images.dinosaurpictures.org/altispinax-becklespinax_e05c.jpg',
        cena: 275
    },
    {
        id: 2,
        name: 'Sciurumimus',
        img: 'http://images.dinosaurpictures.org/Sciurumimus_albersdoerferi_web_fa15.jpg',
        cena: 341
    },
    {
        id: 3,
        name: 'Hypsilophodon',
        img: 'http://images.dinosaurpictures.org/hypsilophodon-1024x636_6963.jpg',
        cena: 189
    },
    {
        id: 4,
        name: 'Dacentrurus',
        img: 'http://images.dinosaurpictures.org/Dacentrurus_20140118_5d27.jpg',
        cena: 315
    },
    {
        id: 5,
        name: 'Iguanodon',
        img: 'http://images.dinosaurpictures.org/Iguanodon_1157950_ea00.jpg',
        cena: 374
    },
    {
        id: 6,
        name: 'Asylosaurus',
        img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Asylosaurus_NT.jpg/440px-Asylosaurus_NT.jpg',
        cena: 301
    },
    {
        id: 7,
        name: 'Efraasia',
        img: 'http://images.dinosaurpictures.org/efraasia_0a4e.jpg',
        cena: 199
    },
    {
        id: 8,
        name: 'Cryptosaurus',
        img: 'https://images.dinosaurpictures.org/Cryptosaurus/Cryptosaurus_tumblr_inline_on3a5nVchm1rx4yme_1280_94c8.jpg',
        cena: 218
    }
]

const inputKupac = document.getElementById('kupac')
const inputDino = document.getElementById('select-dino')
const inputNapomena = document.getElementsByClassName('textarea-field')
const orderBtn  = document.getElementById('order')
const writeAllBtn = document.getElementById('btn-all')
const itemCont = document.getElementById('item-container')
const sb = document.getElementById('select-dino')

let orders = []

dinos.forEach(dino => {
    const option = document.createElement('option')
    option.textContent = dino.name
    option.value = dino.name.toLowerCase()
    sb.appendChild(option)
})

orderBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let c = ''
    if(inputKupac.value.trim() !== '' && inputKupac.value.trim().length >= 4){ //provera za dinosaurusa? po defaultu je prvi selektovan
    const item = document.createElement('item')
    item.className = 'item'
    item.innerHTML = `
            <p><span>Купац:</span>${inputKupac.value}</p>
            <p><span>Напомена:</span>${inputNapomena[0].value.trim().length != 0 ? inputNapomena[0].value.trim() : '/'}</p>
            <p><span>Диносаурус: </span>${dinos[sb.selectedIndex].name}</p>
            <p><span>Цена: </span>${dinos[sb.selectedIndex].cena}</p>`
    
    const p = document.createElement('p')
    const dltBtn = document.createElement('dltBtn')       
    dltBtn.textContent = 'Обриши'
    // dltBtn.style.border = 'solid'
    dltBtn.id = ''
    p.append(dltBtn)
    item.append(p)
    itemCont.append(item)

    orders.push({
    Kupac:inputKupac.value,
    Napomena:inputNapomena[0].value,
    Dinosaurus: sb.value,
    Cena: dinos[sb.selectedIndex].cena
    })

    inputKupac.textContent = ''
    inputNapomena[0].textContent = ''
    
    dltBtn.addEventListener('click', function(){
        item.textContent = ''
        orders.splice(orders.findIndex(el => el.Kupac === item.Kupac))
        return orders
    })
    }
    else {const err = document.getElementById('err')
          err.textContent = 'Unos ne sme biti prazan i ime kupca mora sadržati bar 4 slova.'
          setTimeout(function(){
            err.innerText = ''
        },1000)  
    } 
})

writeAllBtn.addEventListener('click', function(){
    console.log(orders)
})