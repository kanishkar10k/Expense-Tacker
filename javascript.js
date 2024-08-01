function add(){
   var tab=document.getElementById('tab');
   var tr = document.createElement("tr");
   var d1 = document.createElement("td");
   var val1=document.getElementById("name").value;
   var text1 = document.createTextNode(val1);
   d1.appendChild(text1);
   tr.appendChild(d1);

   var d2 = document.createElement("td");
   var val2=document.getElementById("amount").value;
   var text2 = document.createTextNode('$'+val2);
   d2.appendChild(text2);
   tr.appendChild(d2);

   var d3 = document.createElement("td");
   var val3=document.getElementById("category").value;
   var text3 = document.createTextNode(val3);
   d3.appendChild(text3);
   tr.appendChild(d3);

   var d4 = document.createElement("td");
   var val4=document.getElementById("date").value;
   var text4 = document.createTextNode(val4);
   d4.appendChild(text4);
   tr.appendChild(d4);

   var d5 = document.createElement("td");
   var b1 = document.createElement("button");
   var b2 = document.createElement("button");
   b1.textContent="Edit";
   b2.addEventListener('click',()=>{
      var rval1=document.getElementById("name").value;
      this.d1.textContent=rval1;
   })
   b2.textContent="Delete";
   b2.addEventListener('click',()=>{
      tab.removeChild(tr);
   })
   d5.appendChild(b1);
   d5.appendChild(b2);
   tr.appendChild(d5);
   tab.appendChild(tr);
}