
var entry = document.getElementById("submit-data-button");
entry.addEventListener("click", showData);

var row =1;
function showData(){
     var fname = document.getElementById("fname").value;
     var lname = document.getElementById("lname").value;
     var name = fname + ' ' + lname;
     var strDob = document.getElementById("Dob").value;
     var strStates = document.getElementById("states").value;
     var strGender = document.getElementsByTagName('input');

     if(!name || !strDob || !strStates || !strGender){
          alert("please fill all the boxes");
          return;
     }
    
     var display = document.getElementById("display");
     var newRow = display.insertRow(row);

     var cell1 = newRow.insertCell(0);
     var cell2 = newRow.insertCell(1);
     var cell3 = newRow.insertCell(2);
     var cell4 = newRow.insertCell(3);

     cell1.innerText = name;
     cell2.innerText = strDob;
     cell3.innerText = strStates;
     cell4.innerText = strGender;
     row++;

}

