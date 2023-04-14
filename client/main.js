const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")

const form = document.querySelector('form')
const input = document.querySelector('input')
const list = document.querySelector('ul')

const gameContainer = document.querySelector('h1')
const plusBtn = document.querySelector('#plus')
const minusBtn = document.querySelector('#minus')

// const createGame =  body => axios.post(baseURL, body).then(housesCallback).catch(errCallback)
// const deleteGame = ()


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment")
        .then(res => {
            const data = res.data
            alert(data)
    })
}

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
        .then(res => {
            const data = res.data
            alert(data)
    })
}


///////////////////////////////////////////////////////////////////////////////

const getGame = () => {
    axios.get('http://localhost:4000/api/game')
        .then((response) => {
            console.log(response.data)
            displayGame(response.data)
        })
}

const getPrice = () => {
    axios.get('http://localhost:4000/api/price')
    .then((response) => {
        console.log(response.data)
        displayPrice(response.data)
    })
}


const displayGame = arr => {
    list.innerHTML = ''

    arr.forEach((game,index) => {
        const listItem = document.createElement('li')
        const gameSpan = document.createElement('span')
        const deleteBtn = document.createElement('button')

        gameSpan.textContent = game
        deleteBtn.textContent = '-'
        deleteBtn.id = index

        deleteBtn.addEventListener('click', deleteGame)

        listItem.appendChild(gameSpan)
        listItem.appendChild(deleteBtn)

        list.appendChild(listItem)
    })

}

const displayPrice = arr => {
    let { price } = obj
    priceContainer.textContent = price
}


const addGame = evt => {
    evt.preventDefault()

    let body = {
        game: input.value
    }

    axios.post('http://localhost:4000/api/game', body)
        .then((response) => {
            console.log(response.data)
            displayGame(response.data)
        })
        .catch((err) => {
            console.log(err)
        })

    input.value = ''
}


const deleteGame = evt => {
    console.log(evt.target)

    axios.delete(`http://localhost:4000/api/Game/${evt.target.id}`)
        .then((response) => {
            console.log(response.data)
            displayGame(response.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

// /////////////////////////////////////////////////////////////////////////////

// const submitHandler {
//     preventDefault()
//     let title = document.querySelector('#title')
//     let price = document.querySelector('#price')

// let bodyObj = {
//     title: title.value,
//     price: price.value
// }

// createGame(bodyObj)
//     title.value = ''
//     price.value = ''
// }


fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)

form.addEventListener('click', addGame)


getGame()
getPrice()