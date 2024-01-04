console.log("**************Step 1*******************");

function Swap(n1, n2, n3) {
  console.log("Before swap", "n1->", n1, "n2->", n2, "n3->", n3);
  var temp = n1;
  n1 = n2;
  n2 = n3;
  n3 = temp;
  console.log("After swap", "n1->", n1, "n2->", n2, "n3->", n3);
}

Swap(100, 200, 300);

console.log("*****************Step 2*****************");

var n1 = "sweety";
var n2 = "cutie";

console.log("Before Swaping name:");
console.log("n1 ->", n1);
console.log("n2 ->", n2);

var temp = n1;
n1 = n2;
n2 = temp;

console.log("After Swaping name:");
console.log("n1 ->", n1);
console.log("n2 ->", n2);
