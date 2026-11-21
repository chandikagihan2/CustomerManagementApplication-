function addCustomer() {
    const cId = document.getElementById("txtCid").value;
    const name = document.getElementById("txtName").value;
    const age = document.getElementById("txtAge").value;
    const city = document.getElementById("txtCity").value;
    const salary = document.getElementById("txtSalary").value;

    const customer = {  cId, name, age, city, salary };
    customerNames.push(customer);
    loadCustomerTable();
}

const customerNames = [];

function loadCustomerTable() {
    let body = `<tr>
        <th>Customer ID</th>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
        <th>Salary</th>
    </tr>`;


    for (let customer of customerNames) {
        body += `<tr>
            <td>${customer.cId}</td>
            <td>${customer.name}</td>
            <td>${customer.age}</td>
            <td>${customer.city}</td>
            <td>${customer.salary}</td>
        </tr>`;
    }
    document.getElementById("CustomerTable").innerHTML = body;

}


function addItem() {
    const id = document.getElementById("txtItemId").value;
    const name = document.getElementById("txtItemName").value;
    const price = document.getElementById("txtPrice").value;
    const discount = document.getElementById("txtDiscount").value;

    const item = { id, name, price, discount };
    ItemNames.push(item);
    loadItemTable();
}

const ItemNames = [];

function loadItemTable() {
    let body = `<tr>
        <th>Item ID</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Discount</th>
    </tr>`;


    for (let item of ItemNames) {
        body += `<tr>
            <td>${item.id}</td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>${item.discount}</td>
        </tr>`;
    }
    document.getElementById("ItemTable").innerHTML = body;

}


