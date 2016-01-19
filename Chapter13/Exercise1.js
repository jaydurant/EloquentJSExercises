/*
Build a table

We built plaintext tables in Chapter 6. HTML makes laying out tables quite a bit easier. An HTML table is built with the following tag structure:

<table>
  <tr>
    <th>name</th>
    <th>height</th>
    <th>country</th>
  </tr>
  <tr>
    <td>Kilimanjaro</td>
    <td>5895</td>
    <td>Tanzania</td>
  </tr>
</table>
For each row, the <table> tag contains a <tr> tag. Inside of these <tr> tags, we can put cell elements: either heading cells (<th>) or regular cells (<td>).

The same source data that was used in Chapter 6 is again available in the MOUNTAINS variable in the sandbox. It can also be downloaded from the website.

Write a function buildTable that, given an array of objects that all have the same set of properties, builds up a DOM structure representing a table. The table should have a header row with the property names wrapped in <th> elements and should have one subsequent row per object in the array, with its property values in <td> elements.

The Object.keys function, which returns an array containing the property names that an object has, will probably be helpful here.

Once you have the basics working, right-align cells containing numbers by setting their style.textAlign property to "right".
*/
<!doctype html>
<script src="code/mountains.js"></script>
<script src="code/chapter/13_dom.js"></script>

<style>
  /* Defines a cleaner look for tables */
  table  { border-collapse: collapse; }
  td, th { border: 1px solid black; padding: 3px 8px; }
  th     { text-align: left; }
</style>

<script>
  function buildTable(data) {
    var table = document.createElement("table");
    var header = Object.keys(data[0]);
    var hrow = document.createElement("tr");
    header.forEach(function(val){
      	var textNode = document.createTextNode(val);
    	var th =  document.createElement("th");
      	th.appendChild(textNode);
        hrow.appendChild(th);
    });
    table.appendChild(hrow);
    data.forEach(function(val){
    	var row = document.createElement("tr");
        header.forEach(function(arg){
        	var td = document.createElement("td");
          	var text = document.createTextNode(val[arg]);
            td.appendChild(text);
            row.appendChild(td);
        });
        table.appendChild(row);
    });
    return table;
  }

  document.body.appendChild(buildTable(MOUNTAINS));
</script>