var th_json = [
  { name: "First_Name", id: "First Name" },
  { name: "Middle_Name", id: "Middle Name" },
  { name: "Last_Name", id: "Last Name" },
  { name: "Email", id: "Email" },
  { name: "Phone_Number", id: "Phone Number" },
  { name: "Role", id: "Role" },
  { name: "Address", id: "Address" },
  { name: "Edit_Delete", id: "Edit/Delete" },
  /*{
    First_Name:"First Name",
    Middle_Nam: "Middle Name",
    Last_Name: "Last Name",
    Email: "Email",
    Phone_Number: "Phone Number",
    Role: "Role",
    Address: "Address",
    Edit_Delete: "Edit/Delete",
  },
*/
];
var fun = {
  tablerow: function (index) {
    tablerow = document.createElement("tr");
    table.appendChild(tablerow);
    tablerow.setAttribute("id", index);
    tablerow.setAttribute("contenteditable", "false");
  },
  create: function (index) {
    document.createElement("table");
  },
  editable: function (index) {
    var button_edit = document.createElement("button"); //button for edit
    button_edit.innerHTML = "EDIT";
    button_edit.setAttribute("id", "buttonEdit" + index); //giving id to button edit
    button_edit.setAttribute("onclick", `button_edit(${index})`);
    button_edit.setAttribute("class", "edit");
    tabledatabuttons.appendChild(button_edit);
  },
  deletable: function (index) {
    var button_delete = document.createElement("button");
    button_delete.innerHTML = "DELETE";
    button_delete.setAttribute("id", index); //giving id to delete button
    button_delete.setAttribute("onclick", `del(${index})`);
    button_delete.setAttribute("class", "delete");
    tabledatabuttons.appendChild(button_delete);
  },
};
