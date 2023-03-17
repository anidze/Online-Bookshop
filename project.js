function myFunction() {
  var elements1 = document.querySelector("#editProductDiv");
  elements1.style.display = "block";
  var tableDiv = document.querySelector("#tableDiv");
  tableDiv.style.display = "none";
}

function myFunction2() {
  var elements2 = document.querySelector("#newProductDiv");
  var tableDiv = document.querySelector("#tableDiv");
  elements2.style.display = "block";
  tableDiv.style.display = "none";
}
function gotoPageBack() {
  var elements1 = document.querySelector("#editProductDiv");
  elements1.style.display = "none";
  var elements2 = document.querySelector("#newProductDiv");
  elements2.style.display = "none";
  var tableDiv = document.querySelector("#tableDiv");
  tableDiv.style.display = "block";
}

// filterDiv
function showFilterDiv(){
  document.querySelector("#filterDiv").style.display="block"


}

////reset fields
var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Name"] = document.getElementById("Name").value;
    formData["ProductNumber"] = document.getElementById("ProductNumber").value;
    formData["StandartCost"] = document.getElementById("StandartCost").value;
    formData["ListPrice"] = document.getElementById("ListPrice").value;
    formData["SellStartDate"] = document.getElementById("SellStartDate").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("bookList1").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Name;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.ProductNumber;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.StandartCost;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.ListPrice;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.SellStartDate;
    cell6 = newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("Name").value = "";
    document.getElementById("ProductNumber").value = "";
    document.getElementById("StandartCost").value = "";
    document.getElementById("ListPrice").value = "";
    document.getElementById("SellStartDate").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Name").value = selectedRow.cells[0].innerHTML;
    document.getElementById("ProductNumber").value = selectedRow.cells[1].innerHTML;
    document.getElementById("StandartCost").value = selectedRow.cells[2].innerHTML;
    document.getElementById("ListPrice").value = selectedRow.cells[3].innerHTML;
    document.getElementById("SellStartDate").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Name;
    selectedRow.cells[1].innerHTML = formData.ProductNumber;
    selectedRow.cells[2].innerHTML = formData.StandartCost;
    selectedRow.cells[3].innerHTML = formData.ListPrice;
    selectedRow.cells[3].innerHTML = formData.SellStartDate;
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("bookList1").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Name").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}