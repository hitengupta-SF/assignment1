var refresh = false;
function show() {
  if (refresh == false) {
    div = document.getElementById("div");
    table = document.createElement("table");
    div.appendChild(table);
    tablehead = document.createElement("thead");
    table.appendChild(tablehead);
    table.style.display = "block";
    table.setAttribute("id", "table");
    tablehead.setAttribute("id", "thead");

    //setting table heading
    th_json.forEach((item) => {
      var tableheading = document.createElement("th");
      tableheading.innerHTML = item.id;
      tablehead.appendChild(tableheading);
    });
    //setting table data
    tablerow_json.forEach((item, index) => {
      fun.tablerow(index);
      th_json.forEach((data) => {
        const value = item[data.name];
        if (value != "button") {
          var tabledata = document.createElement("td");
          tabledata.innerHTML = value;
          tablerow.appendChild(tabledata);
        } else if (value == "button") {
          tabledatabuttons = document.createElement("td");
          tabledatabuttons.setAttribute("id", `td${index}`);
          fun.editable(index);
          fun.deletable(index);
          tablerow.appendChild(tabledatabuttons);
        } else {
          var tabledata = document.createElement("td");
          tablerow.appendChild(tabledata);
        }
      });
    });
    //styling show data button
    refreshbutton = document.getElementById("bt");
    refreshbutton.value = "refresh data";
    refresh = true;
  } else {
    window.location.reload();
    refreshbutton.parentNode.removeChild(refreshbutton);
  }
}
//delete function
function del(name) {
  var dell = document.getElementById(name);
  dell.remove(name);
}
//edit function
function button_edit(btn) {
  var editid = document.getElementById("buttonEdit" + btn);
  var edit_delete = document.getElementById("td" + btn);
  edit_delete.contentEditable = "false";
  var edt = document.getElementById(btn);
  if (edt.contentEditable == "true") {
    edt.contentEditable = "false";
    editid.innerHTML = "EDIT";
  } else {
    edt.contentEditable = "true";
    editid.innerHTML = "SAVE";
  }
}
