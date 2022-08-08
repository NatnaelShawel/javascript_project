
let pricee = 40;
pricee = pricee -1;
showMessage("Subtraction operator: "+pricee);

let num = 10;
num*=5;
document.write("Product operator: "+num +"<br/>");
document.write("<br/>");

let num1 = 30;
num1/=5;
document.write("Division operator:"+num1+"<br/>");
document.write("<br/>");

let num2=20;
num2%=3;
document.write("Remainder operator:"+num2+"<br/>");

document.write("<br/>");
let num3=20;
num3=++num3;
document.write("Increment operator:"+num3+"<br/>");

document.write("<br/>");
let num4=20;
num4=--num4;
document.write("Decrement operator:"+num4+"<br/>");

document.write("<br/>");
let num5=6+4*4/2;
num5=num5;
document.write("Multi operator:"+num5+"<br/>");

document.write("<br/>");
let num6=(6+4)*4-5;
num6=num6;
document.write("Bodimax law:"+num6+"<br/>");

document.write("<br/>");
let num7=5.7 + 3.2 ;
num7=num7;
document.write("Precison number:"+num7+"<br/>");

document.write("<br/>");
let name='Samuel';
let num8='Hello';
//num8=num8;
document.write(num8+" "+name+"<br/>");

document.write("<br/>");
let num9='Natnael';
 num9=num9+" "+'Shawel';
document.write(num9+"<br/>");

document.write("<br/>");
let num10='NATNAEL';
 num10=num10.toLowerCase();
document.write("LowerCase:"+num10+"<br/>");

document.write("<br/>");
let num11='natnael';
 num11=num11.toUpperCase();
document.write("UpperCase:"+num11+"<br/>");

document.write("<br/>");
let num12='Natnael';
 num12=num12.substring(1);
document.write("substring:"+num12+"<br/>");

document.write("<br/>");
let num13='Natnael';
 num13=num13.length;
document.write("length:"+num13+"<br/>");

document.write("<br/>");
let num14='123';
 //num14=num14.length;
document.write("type of message:"+typeof num14+"<br/>");

document.write("<br/>");
let num15=123;
document.write("type of message:"+typeof num15+"<br/>");

document.write("<br/>");
let num16=123;
num16 = num16.toString();
document.write("Converting number to string:"+typeof num16+"<br/>");

document.write("<br/>");
let num17="Nati";
num17 = Number.parseFloat();
document.write("Converting String to Number:"+typeof num17+"<br/>");

document.write("<br/>");
let num18=true;
document.write("Boolean Variable:"+num18+"<br/>");

document.write("<br/>");
let num19=false;
document.write("Boolean Variable:"+num19+"<br/>");

document.write("<br/>");
let num20;
document.write("This value is not initialized:"+num20+"<br/>");

document.write("<br/>");
let num21 = 12;
num21=null;
document.write("This value is removed:"+num21+"<br/>");

document.write("<br/>");
let person={
    firstname:"Ruth",
    lastname:"Shawel"
};
document.write("This is type of method:"+typeof person+"<br/>");

document.write("<br/>");
document.write("This is the name of the object: "+ person.firstname+" "+person.lastname+"<br/>");

document.write("<br/>");
 if(6 === 6) {
    document.write('true');
 }
 document.write("<br/>");

 document.write("<br/>");
 if(10 <= 6) {
    document.write('false');
    console.log('No');
 }
 document.write("<br/>");

 document.write("<br/>");
 if(8 >= 8) {
    document.write('true');
 }
 document.write("<br/>");

 document.write("<br/>");
 let price2 = 30;
 if (price2 !== 15) {
    document.write('discounted');
 }
 document.write("<br/>");

 document.write("<br/>");
 if("0") {
    document.write('true');
 }
 document.write("<br/>");

 document.write("<br/>");
 /*if(false) {
    document.write(Boolean);
 }
 document.write("<br/>");*/

 document.write("<br/>");
let price1 = 4;
 if(price1 > 10) {
    document.write('true');
 }
 else if (price1 < 5){
    document.write('less than 5');
 }
 document.write("<br/>");

 document.write("<br/>");
 if(1 === "1") {
    document.write('true');
 }
 else {
    document.write('false')
 }
 document.write("<br/>");
 document.write("<br/>");
 if(6 === 6) {
    document.write('true');
 }
 document.write("<br/>");

 document.write("<br/>");
 let price3 = 20;
    (price3 < 10) ? document.write('yes') : document.write('no');
 document.write("<br/>");

 document.write("<br/>");
 let price4 = 20;
    (price4 > 10) ? document.write('yes') : document.write('no');
 document.write("<br/>");

 document.write("<br/>");
 if(true) {
    let value = 'yes';
    document.write('value');
 }
 document.write("<br/>");

 document.write("<br/>");
 document.write("for loop: ");
 for (let i=0; i<6; i++) {
    document.write("<br/>"+i);
 }
 document.write("<br/>");

 document.write("<br/>");
 document.write(" while loop: ");
  let i = 5; 
    while(i>0){
    document.write("<br/>"+i);
    i--;
 }
 document.write("<br/>");
 document.write("do while loop: ");

 let j = -5; 
   do {
   document.write(j);
   j--;
 } while (j>0);

  document.write("<br/>");
  document.write("function" +"<br/>");
   function logMessagee(){
    document.write("Here is message for function declaration and calling." +"<br/>" );
 }
  logMessagee();

  document.write("<br/>");
  let fn=function(){
   document.write("Here is the message for function expression and calling."+ "<br/>");

  }
  fn();
 
  document.write("<br/>");
  let myfunction = function (message){
  document.write(message);
  }
    myfunction('Hello' + "<br/>");

    document.write("<br/>");
  let my = function (message , firstname){
  document.write(message);
  document.write(firstname);
  }
    my('Hello' , "&nbsp" + 'Sami'+ "<br/>");