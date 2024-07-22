var stud_name =prompt("enter name : ");
var rno =prompt("enter roll no :");
var m1 = parseInt(prompt("enter marks m1"));
var m2 = parseInt(prompt("enter marks m2"));
var m3 = parseInt(prompt("enter marks m3"));
var  total = m1+m2+m3;
var per = parseInt(total/3);
var grade ;

if ( per >= 70)
{
    grade ="distiction";
}
else if ( per>=60 && per<70)
{
    garde="first class";
}
else if (per>=50 && per<60)
{
    grade="second class";
}
else if (per<=40 && per<50)
{
   grade="pass class";
}
else
{
grade="fail";
}

document.write("<table border =2 align=center width='300px'cellpadding=5> </caption><h1> <center>Student Marksheet</center> </h1></cation> <tr><th>Rol No</th><th> Student Name </th><th>m1</th> <th>m2</th> <th>m3</th> <th> total </th> <th> percentage</th> <th> grade</th> </tr>");


 document.write("<tr> <td> "+rno+" </td> <td>"+stud_name+"</td> <td>"+m1+"</td> <td>"+m2+"</td> <td>"+m3+"</td> <td>"+total+" </td> <td> "+per+"</td> <td>"+grade+"</td> </tr> </table>");


