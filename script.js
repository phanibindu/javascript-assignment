
let data = [{ name: "Divya", id: 25, phoneno: "12345678", grade: "A" },
{ name: "Raju", id: 30, phoneno: "12345678", grade: "B" },
{ name: "Mahesh", id: 35, phoneno: "12345678", grade: "C" },
{ name: "Sudha", id: 35, phoneno: "12345678", grade: "A" },
{ name: "Roja", id: 35, phoneno: "12345678", grade: "D" },
];


function myFunction() {
  console.log("mytable");
  var table = document.getElementById("myTable");
  const colors = ["green", "orange", "yellow", "red"];
  for (var i = 0; i < data.length; i++) {


    var row = table.insertRow(i + 1);

    var employeeId = row.insertCell(0);
    var employeeName = row.insertCell(1);
    var employeePhoneno = row.insertCell(2);
    var employeeGrade = row.insertCell(3);


    employeeId.innerHTML = data[i].id;
    employeeName.innerHTML = data[i].name;
    employeePhoneno.innerHTML = data[i].phoneno;
    employeeGrade.innerHTML = data[i].grade;


    var gradeColor = data[i].grade;
    var styleGrade = employeeGrade.style.backgroundColor;
    switch (gradeColor) {
      case "A":
        employeeGrade.style.backgroundColor = colors[0];
        break;
      case "B":
        employeeGrade.style.backgroundColor = colors[0];
        break;
      case "C":
        employeeGrade.style.backgroundColor = colors[1];
        break;
      case "D":
        employeeGrade.style.backgroundColor = colors[2];
        break;
      default:
        employeeGrade.style.backgroundColor = colors[3];
        break;
    }

  }
}
myFunction()
// document.getElementById("popup").style.display = "none";


function submitFunction(details) {

  var emId = document.getElementById("EmployeeId").value;
  var emName = document.getElementById("EmployeeName").value;
  var emPhoneno = document.getElementById("EmployeePhoneno").value;
  var emGrade = document.getElementById("EmployeeGrade").value;


  console.log(emId, emName, emPhoneno, emGrade);

  var details = {
    id: emId, name: emName, phoneno: emPhoneno, grade: emGrade

  }
  console.log(data);

  data = [];
  data.push(details);
  console.log(data);
  // console.log(data[data.length-1]);
  document.getElementById("EmployeeId").value = "";
  document.getElementById("EmployeeName").value = "";
  document.getElementById("EmployeePhoneno").value = "";
  document.getElementById("EmployeeGrade").value = "";
  document.getElementById("popup").style.display = "none";
  myFunction();


}
function Popup() {
  document.getElementById("popup").style.display = "block";
}
function deleteFunction(event) {
  event.stopPropagation();
  data.pop();
  // console.log(data.length);
  // data=[];
  // myFunction()
  // console.log(data);
  document.getElementById("myTable").deleteRow(1);
}



// function closePopup() 
//   document.getElementById("popup").style.display = "none";
// }
  // var row = table.insertRow(i+1);

  // var employeeId = row.insertCell(0);
  // var employeeName = row.insertCell(1);
  // var employeePhoneno = row.insertCell(2);
  // var employeeGrade = row.insertCell(3);

  // employeeId.innerHTML = data(1).id;
  // employeeName.innerHTML = "mahesh";
  // employeePhoneno.innerHTML = "12345678";
  // employeeGrade.innerHTML = "1";

  // var row = table.insertRow(i+1);

  // var employeeId = row.insertCell(0);
  // var employeeName = row.insertCell(1);
  // var employeePhoneno = row.insertCell(2);
  // var employeeGrade = row.insertCell(3);

  // employeeId.innerHTML = data(2).id;
  // employeeName.innerHTML = "siri";
  // employeePhoneno.innerHTML = "12345678";
  // employeeGrade.innerHTML = "2";

  // var row = table.insertRow(i+1);

  // var employeeId = row.insertCell(0);
  // var employeeName = row.insertCell(1);
  // var employeePhoneno = row.insertCell(2);
  // var employeeGrade = row.insertCell(3);

  // employeeId.innerHTML = data(3).id;
  // employeeName.innerHTML = "raju";
  // employeePhoneno.innerHTML = "12345678";
  // employeeGrade.innerHTML = "2";






