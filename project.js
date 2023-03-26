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
function resetForm() {
  document.getElementById("Name").value = "";
  document.getElementById("ProductNumber").value = "";
  document.getElementById("Color").value = "";
  document.getElementById("StandartCost").value = "";
  document.getElementById("ListPrice").value = "";
  document.getElementById("Size").value = "";
  document.getElementById("Weight").value = "";
  document.getElementById("SellStartDate").value = "";
  selectedRow = "";
}
// bootsrap form validation
// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

// add data fields
var selectedRow = null;
document.querySelector("#booksForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  //forms value
  const name = document.querySelector("#Name").value;
  const ProductNumber = document.querySelector("#ProductNumber").value;
  const Color = document.querySelector("#Color").value;
  const SellStartDate = document.querySelector("#SellStartDate").value;
  const ListPrice = document.querySelector("#ListPrice").value;
    if (
      selectedRow == null
      ) {
      const list = document.querySelector("#bookList2");
      const row = document.createElement("tr");
      row.innerHTML = `
            <td>${name}</td>
            <td>${ProductNumber}</td>
            <td>${Color}</td>
            <td>${ListPrice}</td>
            <td>${SellStartDate}</td>
            <td>
            <a href="#" class="btn btn-secondary m-2 edit"onClick="myFunction()">Edit</a>
            <a href="#" class="btn btn-danger delete" >Delete</a>
            </td>
            `;

      list.appendChild(row);
      selectedRow = null;
    }
  
});
// edit data
// console.log(document.querySelector("#bookList2));
document.querySelector("#bookList2").addEventListener("click", (e)=>{
  target=e.target;
  if(target.classList.contains("edit")){
    selectedRow=target.parentElement.parentElement;

    document.getElementById("Name2").value = selectedRow.children[0].textContent;
    document.getElementById("ProductNumber2").value = selectedRow.children[1].textContent;
    document.getElementById("Color2").value =  selectedRow.children[2].textContent;
    document.getElementById("ListPrice2").value =  selectedRow.children[3].textContent;
    document.getElementById("SellStartDate2").value =  selectedRow.children[4].textContent;

  }
  let editPost = (e) => {
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  };
})


// delete field
document.querySelector("#bookList2").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
  }
});
// delete fields


