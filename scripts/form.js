let productSelect = document.querySelector("#productId");
let productIMGDiv = document.querySelector("#productIMG");


document.addEventListener('DOMContentLoaded', function () {
    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            averagerating: 4.5,
            img: "flux-capacitor.webp"
        },
        {
            id: "fc-2050",
            name: "power laces",
            averagerating: 4.7,
            img: "power-laces.webp"
        },
        {
            id: "fs-1987",
            name: "time circuits",
            averagerating: 3.5,
            img: "time-circuits.webp"
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            averagerating: 3.9,
            img: "low-voltage-reactor.webp"
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            averagerating: 5.0,
            img: "warp-equalizer.webp"
        }
    ];
    products.forEach(product => {
        var opt = document.createElement("option");
        opt.value = product.id;
        opt.innerHTML = product.name;
        productSelect.appendChild(opt);
    });

    productSelect.addEventListener('change', function() {
        const selectedProductId = this.value;
        const selectedProduct = products.find(product => product.id === selectedProductId);

        productIMGDiv.innerHTML = '';

        if(selectedProduct) {
            const imgElement = document.createElement('img');
            imgElement.src = `images/${selectedProduct.img}`;
            imgElement.alt = selectedProductId;
            imgElement.title = selectedProduct.name;
            productIMGDiv.appendChild(imgElement);
        }
    });
});

function productCount() {

    function getQueryParam(name) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(name);
    }

    const productId = getQueryParam('productId');
    const reviewStoreElement = document.querySelector('.reviewStore');

    if (productId && reviewStoreElement) {
        const countNow = localStorage.getItem(productId);
        let addCount = 1;

        if(countNow) {
            addCount = parseInt(countNow) +1;
            message = `Your review about the product <strong>${productId}</strong> has been added, there are now ${addCount} number of reviews for this product.`;
        } else {
            message = `Congratulations! 🎉🎉🎉<br> You've shared the first review for the product <strong>${productId}</strong>.`;
        }

        localStorage.setItem(productId, addCount);

        reviewStoreElement.innerHTML = message;

        
    }
}

window.onload = productCount;