 export default function navbar (){
    // inportar uma funcao exposta
    const nav = document.getElementById("navbar")
    nav.innerHTML = `
        <a href="index.html">Home</a>
        <a href="quemSomos.html">Quem Somos</a>
        <a href="#">Produtos</a>
        <a href="#">Fique Sabendo</a>
        <a href="#">Contato</a>
    `

}