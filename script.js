let box = document.querySelector('.box')

function reload(arr) {
    for(let item of arr) {
        let elem = document.createElement('div')
        let img = document.createElement('img')
        let span = document.createElement('span')

        elem.classList.add('elem')
        img.src = item.url
        span.innerHTML = item.title

        box.append(elem)
        elem.append(img,span)
    }
}

fetch('https://jsonplaceholder.typicode.com/photos')
    .then(photos => photos.json())
    .then(photo => reload(photo))