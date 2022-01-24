var rd=false;
function show(event) {
 if(rd==false)
 {
    console.log(event);
  let tabledata = document.getElementById("tab");
  let tablerow = document.getElementById("main");
  tabledata.appendChild(tablerow);
  tabledata.style.display="block";
    /*users.forEach(i => {
      console.log(i);
  })
  for(let user of users)
  {
  //console.log(user);
  //}*/
    //for (let i = 0; i < x.length; i++) {
        for(let i in x){
      var tr = document.createElement("tr"); //Create table rows
      tr.setAttribute("id", i); //give id to table rows
      tr.setAttribute("contenteditable","false")
     var tablecell =  document.getElementById("tab")
     tablecell.appendChild(tr); //append table row to table
      var td1 = document.createElement("td"); // creating table data
      td1.innerHTML = x[i].First_Name; //assigning data to them by taking it from x variable
      tr.appendChild(td1);
      var td2 = document.createElement("td");
      td2.innerHTML = x[i].Middle_Name;
      tr.appendChild(td2);
      var td3 = document.createElement("td");
      td3.innerHTML = x[i].Last_Name;
      tr.appendChild(td3);
      var td4 = document.createElement("td");
      td4.innerHTML = x[i].Email;
      tr.appendChild(td4);
      var td5 = document.createElement("td");
      td5.innerHTML = x[i].Phone_Number;
      tr.appendChild(td5);
      var td6 = document.createElement("td");
      td6.innerHTML = x[i].Role;
      tr.appendChild(td6);
      var td7 = document.createElement("td");
      td7.innerHTML = x[i].Address;
      tr.appendChild(td7);
      var td8 = document.createElement("td");
      //creating button
      var button = document.createElement("button"); //button for edit
      var button1 = document.createElement("button"); //button for delete
      button.innerHTML = "EDIT";
      button.setAttribute("id","button"+ i); //giving id to button edit
      button.setAttribute("onclick", `edit(${i})`);
      button1.innerHTML = "DELETE";
      button1.setAttribute("id", i); //giving id to delete button
      button1.setAttribute("onclick", `del(${i})`);
      td8.appendChild(button); //appending button in table data
      td8.appendChild(button1);
      //button.className += "edit"+i; //giving class to edit buttons
      //button1.className += "delete"+i; //giving class to delete buttons
      
      tr.appendChild(td8);
    }
    var buttonn = document.getElementById("bt");
    buttonn.value="refresh data";
    rd=true;
}
else{
    window.location.reload();
}  
}
  function del(name) {
    //console.log(name);
    var dell = document.getElementById(name);
        dell.remove(name);
    //document.getElementById
  }
  function edit(btnn)
  {     var takebtnid=document.getElementById("button"+btnn);
        var edt = document.getElementById(btnn);
        if (edt.contentEditable == "true") {
          edt.contentEditable = "false";
          takebtnid.innerHTML = "EDIT";
        } else {
          edt.contentEditable = "true";
          takebtnid.innerHTML = "SAVE";
        }
  } 

