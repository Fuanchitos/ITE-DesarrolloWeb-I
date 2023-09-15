export default function Header({title}){
    const header = document.createElement('div')
    header.className = 'header'
    header.innerHTML = `
        <h1 class="title">${title}</h1>
    `
    return header;
}

