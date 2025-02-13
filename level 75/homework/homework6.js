var x = "Global var"; 

function testScope() {
  var x = "Function var";
  let y = "Function let"; 
  const z = "Function const";

  console.log(x); 
  console.log(y); 
  console.log(z); 
}

testScope();
console.log(x); 
