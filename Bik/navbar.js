export default function loadNavbar(){
    document.querySelector("nav").innerHTML = 
    `
        <a href="index.html">Learnific</a>
        <div>
            <a href="create.html">Create Course</a>
            <a href="cart.html">Cart page</a>
        </div>
    `
}