const apiRequest = fetch("https://fakestoreapi.com/products")

const products = document.querySelector(".products")

apiRequest.then((resolve)=>{
    return resolve.json();
}).then((data)=>{
    console.log(data);
    


for(product of data){
    const productElement = document.createElement("div")
    productElement.classList.add("product");
    productElement.innerHTML=
    `<img width = "250px" src="${product.image}">
    <h3> ${product.title}<\h3>
    <p> ${product.price}<\p>
    <p> ${product.rating.rate}<\p>
    <p> ${product.category}<\p>`;
    products.appendChild(productElement)
}
})