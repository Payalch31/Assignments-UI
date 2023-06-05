/*document.getElementById('btn').addEventListener('mouseover', function () {
    document.getElementById('div-1').innerHTML = "<h1 style='color: red;'>HELLO</h1>"
})

document.getElementById('btn').addEventListener('mouseleave', function () {
    document.getElementById('div-1').innerHTML = "<h1 style='color: green;'>HELLO</h1>"
})

async function search() {
    var val = document.getElementById('inp').value;
    
    var result =  await fetch('https://dummyjson.com/products/'+val, {method: 'GET'})
    var finalResult =  await result.json();
    document.getElementById('div-2').innerText =  finalResult.title;
}
*/
document.getElementById('btn1').addEventListener('click',function(){
    document.getElementById('div-5').innerHTML="<h1 style=color:green;'>Hello to Testing Shasra</h1>"
})


document.getElementById('btn1').addEventListener('mouseover',function(){
    document.getElementById('div-4').innerHTML="<h1 style=color:purple;'>Welcome Carnation 23 UI batch Hello to Testing Shasra</h1>"
})


async function search() {
    var val = document.getElementById('inp').value;
    
    var result =  await fetch('https://dummyjson.com/products/'+val, {method: 'GET'})
    var finalResult =  await result.json();
    //document.getElementById('div-2').innerText =  finalResult.title;
   // document.getElementById('divNew').innerText =  finalResult.description;

   // Get the reference to the <h1> element
  var h1Element = document.getElementById('h1Result');

  // Set the result as the inner text of the <h1> element
  h1Element.innerText = finalResult.title;
  h1Element.style.color = 'red';
  h1Element.style.fontSize = '30px';

  var h2Element = document.getElementById('h2Result');

  // Set the result as the inner text of the <h1> element
  h2Element.innerText = finalResult.description;
  h2Element.style.color = 'magenta';
  h2Element.style.fontSize = '40px';


  document.getElementById('divimg').innerHTML = "<img src='" + finalResult.thumbnail + "' />";

}