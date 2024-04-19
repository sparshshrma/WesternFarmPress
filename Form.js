function call()
{
var FirstName=document.getElementById('fname').value;
var LastName=document.getElementById('lname').value;
var address=document.getElementById('address').value;
var PO = document.getElementById('PO').value;
var vegH = parseFloat(document.getElementById('vegH').value);
var FruitH = parseFloat(document.getElementById('FruitH').value);
var FreshChi =parseFloat(document.getElementById('FreshChicken').value);
var Pork = parseFloat(document.getElementById('Pork').value);

if (document.getElementById('Delivery').checked) {
    rate_value = document.getElementById('Delivery').value;
}
if ( document.querySelector('#PickUp:checked')){
    rate_value = document.getElementById('PickUp').value;
}
var billAmount=parseFloat(vegH*30.00+FruitH*20.00+FreshChi*7.00+Pork*5.00);

alert(FirstName+" "+ LastName+"\r\n"+address+"Postal Code:"+PO+"\r\n"+
rate_value+"\r\n"+"Order:"+"\r\n"+vegH+" Vegetable Hampers"+"\r\n"+FruitH+" Fruit Hampers"
+"\r\n"+FreshChi+" Fresh Chicken"+"\r\n"+Pork+" KG Pork"+"\r\n"+"Total Order: $"+billAmount);

}

document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('submit');
    if (btn) {
      btn.addEventListener('click', call);
    }
  });