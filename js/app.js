var main = document.querySelector("main");


// const getAnimes = async () =>{

//     const res = await fetch('https://animechan.vercel.app/api/random')
//     const data = await res.json()
//     return printar(data)
// }

// function printar(dados) {
//     main.innerHTML = `${dados}`
//     console.log(dados)
// }
// getAnimes()
// const getAnimes = async () => {
//     const res = await fetch('https://kitsu.io/api/edge/anime?filter[text]=demon%20slayer')
//     const data = await res.json()

//     return animes(data)
// }
// const animes = (data) => {

//     for (itens of data.data) {

//         console.log(itens)
//         main.innerHTML += `
//         <img class="img-tiny" src="${itens.attributes.coverImage.tiny}">
//         `
//     }
// }

// getAnimes()