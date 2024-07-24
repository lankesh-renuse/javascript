function add()
{
    var n1 =parseInt(f1.no1.value);
    var n2 = parseInt(f1.no2.value);
    var sum = n1+n2;
    f1.no3.value = sum
    alert(sum);

    var hedElement  = document.getElementById("head");
    hedElement.innerHTML = `Addition:- ${sum}` ;
}
var count = 1 ;

function clickfun()
{
    count++;
    if(count%2==0)
        {
            p1.innerHTML = "this is a new para";
        }
        else
        {
            p1.innerHTML = "this is a old para";
        }
}