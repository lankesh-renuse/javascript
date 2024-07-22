var num = parseInt(prompt("enter number"));

var rem ;
var result = 0 ;

while(num!=0)
{
 rem = parseInt(num%10);
 result=(result*10)+rem;
 num =parseInt(num/10);
}

document.write(`reverse number :- ${result}`);
