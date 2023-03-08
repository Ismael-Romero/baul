const dbappURLAPI = '/api/dbapp/products';

fetch(dbappURLAPI)
    .then(response => response.json())
    .then(data => setData(data))
    .catch(error => console.error(error));

const setData = (data) => {
    let bodyTable = document.getElementById('body-table');
    data.map((item) =>{
        bodyTable.innerHTML += `
            <tr>
                <th scope="row">${item.code}</th>
                <td>${item.name}</td>
                <td>$ ${item.price} MXN</td>
                <th> 
                    <a href="${item.image}"> ver imagen </a>
                </th>
            </tr>
        `;
    })
}
