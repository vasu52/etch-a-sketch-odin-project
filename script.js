let gridSize = 6;

function getcolor()
{
    let red = Math.floor(Math.random()*256)
    let green = Math.floor(Math.random()*256)
    let blue = Math.floor(Math.random()*256)

    let redHex = red.toString(16).padStart(2,'0')
    let greenHex = green.toString(16).padStart(2,'0')
    let blueHex = blue.toString(16).padStart(2,'0')

    let color = '#' + redHex + greenHex + blueHex
    if(color==='#ffffff')return getcolor()
    return color    
}

let divs = document.getElementsByClassName('box')
Array.from(divs).forEach((div) => {
    div.addEventListener( 'mouseenter', (e)=> e.target.style.backgroundColor = getcolor() )
})


let set = document.getElementsByClassName('set')
set[0].addEventListener('click', (e) => {
    gridSize = prompt('Enter a number less than 100', 20)
    if (gridSize > 100) 
    {
        alert('Number greater than 100'); 
        return;
    }

    let container = document.getElementsByClassName('container')
    container[0].remove()
    container = document.createElement('div')
    container.className = 'container'
    
    let scr = document.querySelector('script')
    document.body.insertBefore(container, scr)

    console.log(gridSize)

    for (let i = 0; i < gridSize ** 2; i++) {
        let div = document.createElement('div')
        div.className = 'box'
        div.style.minWidth = `${60/gridSize}vw`
        div.addEventListener('mouseenter', (e) => e.target.style.backgroundColor = getcolor())
        container.appendChild(div)
    }
})

let reset = document.getElementsByClassName('reset')
reset[0].addEventListener('click', (e)=> {
    let boxes = document.getElementsByClassName('box')
    Array.from(boxes).forEach((box)=>box.style.backgroundColor='white')
})