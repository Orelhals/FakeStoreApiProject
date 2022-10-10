const url = "https://fakestoreapi.com/products";

const loadingElement = document.querySelector("#loading");
const postsContainer = document.querySelector("#posts-container");

async function getAllProducts() {
    try {
        const response = await fetch(url);
    
        const data = response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.log(err);
    }
    
    
}

getAllProducts();