function clearForm() {
    document.getElementById("updateDiv").innerHTML = "<input id='saveForm' name='saveForm' type='button' value='Save' class='btn btn-primary' onclick='AddData()''>";
    document.getElementById("editEmp").innerHTML = " <h3>Add New Employee</h3>";
    document.getElementById("empName").value = "";
    document.getElementById("empAge").value = "";
    document.getElementById("inputDept").value = "";
    document.getElementById("inputDesig").value = "";
}

function AddData() {
    var a = document.getElementById("empName").value;
    var b = document.getElementById("empAge").value;
    var c = document.getElementById("inputDept").value;
    var d = document.getElementById("inputDesig").value;
    if ("" == a) {
       document.getElementById("alertDiv").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  Name..!!</font></h5>";
        return false;
    } else if ("" == b) {
        document.getElementById("alertDiv").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  Age..!!</font></h5>";
        return false;
       
    }
    if ("" == c) {
        document.getElementById("alertDiv").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  Department..!!</font></h5>";
        
        return false;
    } else if ("" == d) {
      document.getElementById("alertDiv").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  Designation..!!</font></h5>";
        return false;
    } else if (isNaN(b) || b <= 0) {
       document.getElementById("alertDiv").innerHTML = " <h5><font color='#ff0000' align='center'>Invalid Age..!!</font></h5>";

        return false;
    } else {
        var e = "";
        e += "<td>" + a + "</td><td>" + b + "</td><td>" + c + "</td><td>" + d + "</td><td onclick='editData(this)'><a href='#myPopup' data-rel='popup' data-position-to='window' id='alink'><img src='assets/images/edit.png'><a></td><td onclick='deleteData(this)'> <img src='assets/images/delete.png'></td>";
        var f = document.querySelector("#empTable tbody");
        var g = document.createElement("tr");
        g.innerHTML = e;
        f.appendChild(g);
        document.getElementById("empName").value = "";
        document.getElementById("empAge").value = "";
        document.getElementById("inputDept").value = "";
        document.getElementById("inputDesig").value = "";
        window.history.back();
    }
}

function editData(a) {
    document.getElementById("updateDiv").innerHTML = "<input id='saveForm' name='saveForm' type='button' value='Update' class='btn btn-primary' onclick='updateData()'>";
    document.getElementById("editEmp").innerHTML = " <h3>Edit Employee</h3>";
    var b = a.parentNode.rowIndex;
    var c = document.getElementById("empTable");
    var d = c.rows[b].cells[0].innerHTML;
    var e = c.rows[b].cells[1].innerHTML;
    var f = c.rows[b].cells[2].innerHTML;
    var g = c.rows[b].cells[3].innerHTML;
    document.getElementById("empName").value = d;
    document.getElementById("empAge").value = e;
    document.getElementById("inputDept").value = f;
    document.getElementById("inputDesig").value = g;
    document.getElementById("rowVal").value = b;
}

function updateData(a) {
    var b = document.getElementById("rowVal").value;
    var c = document.getElementById("empName").value;
    var d = document.getElementById("empAge").value;
    var e = document.getElementById("inputDept").value;
    var f = document.getElementById("inputDesig").value;
    if ("" == c) {
        document.getElementById("alertDiv").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  Name..!!</font></h5>";
        return false;
    } else if ("" == d) {
       document.getElementById("alertDiv").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  Age..!!</font></h5>";
        return false;
    }
    if ("" == e) {
        document.getElementById("alertDiv").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  Department..!!</font></h5>";
        return false;
    } else if ("" == f) {
        document.getElementById("alertDiv").innerHTML = " <h5><font color='#ff0000' align='center'>Please input  Designation..!!</font></h5>";
        return false;
    } else if (isNaN(d) || d <= 0) {
        document.getElementById("alertDiv").innerHTML = " <h5><font color='#ff0000' align='center'>Invalid Age..!!</font></h5>";
        return false;
    } else {
        var g = document.getElementById("empTable");
        g.rows[b].cells[0].innerHTML = c;
        g.rows[b].cells[1].innerHTML = d;
        g.rows[b].cells[2].innerHTML = e;
        g.rows[b].cells[3].innerHTML = f;
        document.getElementById("empName").value = "";
        document.getElementById("empAge").value = "";
        document.getElementById("inputDept").value = "";
        document.getElementById("inputDesig").value = "";
        window.history.back();
    }
}

function deleteData(a) {
    var b = a.parentNode.rowIndex;
    var c = document.getElementById("empTable");
    c.deleteRow(b);
}

function ResetForm() {
    document.getElementById("empTable").reset();
}
//Saerch in Table
function doSearch() {
    var searchText = document.getElementById('searchItem').value;
    var targetTable = document.getElementById('empTable');
    var targetTableColCount;
            
    //Loop through table rows
    for (var rowIndex = 0; rowIndex < targetTable.rows.length; rowIndex++) {
        var rowData = '';

        //Get column count from header row
        if (rowIndex == 0) {
           targetTableColCount = targetTable.rows.item(rowIndex).cells.length;
           continue; //do not execute further code for header row.
        }
                
        //Process data rows. (rowIndex >= 1)
        for (var colIndex = 0; colIndex < targetTableColCount; colIndex++) {
            rowData += targetTable.rows.item(rowIndex).cells.item(colIndex).textContent;
        }

        //If search term is not found in row data
        //then hide the row, else show
        if (rowData.indexOf(searchText) == -1)
            targetTable.rows.item(rowIndex).style.display = 'none';
        else
            targetTable.rows.item(rowIndex).style.display = 'table-row';
    }
}

//Table sorting
 function sortTable(table, col, reverse) {
    var tb = table.tBodies[0], // use `<tbody>` to ignore `<thead>` and `<tfoot>` rows
        tr = Array.prototype.slice.call(tb.rows, 0), // put rows into array
        i;
    reverse = -((+reverse) || -1);
    tr = tr.sort(function (a, b) { // sort rows
        return reverse // `-1 *` if want opposite order
            * (a.cells[col].textContent.trim() // using `.textContent.trim()` for test
                .localeCompare(b.cells[col].textContent.trim())
               );
    });
    for(i = 0; i < tr.length; ++i) tb.appendChild(tr[i]); // append each row in order
}

function makeSortable(table) {
    var th = table.tHead, i;
    th && (th = th.rows[0]) && (th = th.cells);
    if (th) i = th.length;
    else return; // if no `<thead>` then do nothing
    while (--i >= 0) (function (i) {
        var dir = 1;
        th[i].addEventListener('click', function () {sortTable(table, i, (dir = 1 - dir))});
    }(i));
}

function makeAllSortable(parent) {
    parent = parent || document.body;
    var t = parent.getElementsByTagName('table'), i = t.length;
    while (--i >= 0) makeSortable(t[i]);
}

window.onload = function () {makeAllSortable();};
