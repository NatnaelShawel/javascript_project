
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

    document.write("<br/>");
    function number(value2){
      let code = value2 * 30;
      return code;
    }
    document.write( number(3) + "<br/>");

    document.write("<br/>");
    let key = 42;
    function number1(value3){
      let keyGenerator = function(){
      let key = 12;
      document.write('in keyGenerator:' , key,"<br/>");
      return key;
    }
    let code1 = value3 * keyGenerator();
    document.write('in number3:' , key , "<br/>");
    return code1;
   }
   let number2 = number1(2);
    document.write( number2 + "<br/>");

    document.write("<br/>");
    let person1 = {
       name:'Jhon',
       age:42,
       Id:0025
    };
    document.write("Obeject method it's show name:" + person1.name + "<br/>");

    document.write("<br/>");
    let person2 = {
       name:'Jhon',
       age:42,
       Id:0025
    };
    document.write( "Obeject method it's show age:" + person2.age + "<br/>");

    
    document.write("<br/>");
    let person3 = {
       name:'Jhon',
       age:42,
       Id:'0025'
    };
    document.write(  "Obeject method it's show Id:" + person3.Id + "<br/>");

    document.write("<br/>");
    let person4 = {
       name:'Jhon',
       age:42,
       Id:'0025'
    };
    person4['age'] =50;
    document.write(  "Obeject method it's show update age:" + person4.age + "<br/>");

    document.write("<br/>");
    let person5 = {
       name:'Jhon',
       age:42,
       Id:'0025',
       showinfo: function() {
         document.write("Obeject method it's show information about person:" + 'In showInfo' + "<br/>");
       }
      
    };
    person5.showinfo();
    //document.write(person5.age + "<br/>");

    document.write("<br/>");
    let person6 = {
       name:'Jhon',
       age:42,
       Id:'0025',
       showinfo: function() {
         document.write( "Obeject method it's show person name and age:" + this.name + "&nbsp"+ 'is' + "&nbsp" + this.age + "<br/>");
       }
      
    };
    person6.showinfo();

    document.write("<br/>");
    let message1 = 'Hello';
    function changeMessage(message1){
      message1 = 'Hi!';
    }
    changeMessage(message1);
    document.write(message1 + "<br/>");

    document.write("<br/>");
    let person7 = {
       name:'Jhon',
       age:42,
       Id:0025
    };
     function Incrementage(person7){
       person7.age++;
     }
     Incrementage(person7);
    document.write( "Passing by reference it's show age change:" + person7.age + "<br/>");

    
    document.write("<br/>");
    let now = new Date();
    document.write( "Standard Built-in Object:" + now.toDateString() + "<br/>");

    document.write("<br/>");
     document.write( "Standard Built-in Object:" + Math.abs(-70) + "<br/>");

     document.write("<br/>");
     let s = 'Hello';
     document.write( "Standard Built-in Object Position:" + s.charAt(0) + "<br/>");

     document.write("<br/>");
     const values = ['a','b','c'];
     document.write("Array:"+values + "<br/>"); 

     document.write("<br/>");
     const value1 = ['a','b','c'];
     document.write("Array:"+ Array.isArray(values) + "<br/>"); 

     document.write("<br/>");
     const value2 = ['a','b','c'];
     document.write(" Accessig Array:"+value2[0] + "<br/>"); 

     document.write("<br/>");
     const value3 = ['a','b','c'];
     document.write(" Accessig Array:"+value3[10] + "<br/>"); 

     document.write("<br/>");
     const value4 = ['a','b','c'];
     document.write(" Accessig Array:"+value4[2] + "<br/>"); 

     document.write("<br/>");
     const value5 = ['a','b','c'];
     value5[0] = 'EEE';
     document.write(" Accessig Array change value:"+value5[0] + "<br/>"); 

     document.write("<br/>");
     const value6 = ['a','b','c'];
     value6.push('d','e','f');
     document.write(" Push Array value:"+value6 + "<br/>"); 

     document.write("<br/>");
     const value7 = ['a','b','c'];
     const last = value7.pop();
     document.write(" Pop Array value:"+value7 , last + "<br/>"); 

     document.write("<br/>");
     const value8 = ['a','b','c'];
     const first = value8.shift();
     document.write(" Shift Array value:"+value8 , first + "<br/>"); 

     document.write("<br/>");
     const value9 = ['a','b','c','d','e'];
     value9.unshift('Hello','Nati');
     document.write(" Unshift Array value:"+value9  + "<br/>"); 

     document.write("<br/>");
     const values1 = ['a','b','c','d','e'];
     const newvalues1 = values1.slice(1,4);
     document.write(" Slice Array value:"+ newvalues1 + "<br/>"); 

     document.write("<br/>");
     const values2 = ['a','b','c','d','e'];
     values2.splice(2,1);
     document.write(" Splice Array value:"+ values2 + "<br/>"); 

     document.write("<br/>");
     const values3 = ['a','b','c','d','e'];
     values3.splice(2,0,'Hello');
     document.write(" Splice inserting Array value:"+ values3 + "<br/>"); 

     document.write("<br/>");
     const values4 = ['a','b','c','d','e'];
     values4.splice(2,1,'Hello');
     document.write(" Splice inserting and delete Array value:"+ values4 + "<br/>"); 

     document.write("<br/>");
     const values5 = ['a','b','c'];
     document.write(" Array index value:"+values5.indexOf('a') + "<br/>"); 

     document.write("<br/>");
     const values6 = ['a','b','c'];
     document.write(" Array index value:"+values6.indexOf('c') + "<br/>"); 

     document.write("<br/>");
     const values7 = ['a','b','c'];
     document.write(" Array index value:"+values7.indexOf('v') + "<br/>"); 

     document.write("<br/>");
     const values8 = ['a','b','c','d','e','z'];
     const set = values8.filter(function(item) {
      document.write('item:' , item + "<br/>");
      return item > 'b';
     });
     document.write(" Array index value:"+(set) + "<br/>"); 

     document.write("<br/>");
     const values9 = ['a','b','c','d'];
     values.forEach(function(item) {
      document.write(" Array items:"+ item + "<br/>");
     });
     //document.write(" Array items:"+(item) + "<br/>"); 