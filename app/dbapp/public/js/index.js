const dbappURLAPI = '/api/dbapp/products';

fetch(dbappURLAPI)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error));

const setData = (data) => {
    let bodyTable = document.getElementById('cn-card');
    data.map((item) =>{
        bodyTable.innerHTML += `
            <div class="card" id="card-1">
                <img src="${item.image}" alt="">
                <h2>${item.name}</h2>
                <p>$${item.price} MXN</p>
                <button> Comprar </button>
            </div>
        `;
    })
}
