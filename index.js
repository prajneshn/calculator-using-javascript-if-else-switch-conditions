var a=prompt("Enter a operator + - * /");
const num1= parseFloat( prompt("Enter a num1"));
const num2= parseFloat( prompt("Enter a num2"));
var result;
// if(a=="+")
// {   
//     result=num1+num2;
//     alert("sum is "+result);
// }
// else if(a=="-")
// {   
//     result=num1-num2;
//     alert("sub is "+result);
// }
// else if(a=="*")
// {   
//     result=num1*num2;
//     alert("mul is "+result);
// }
// else if(a=="/")
// {   
//     result=num1/num2;
//     alert("div is "+result);
// }
// else{
//     alert("invalid");
// }
switch(a){
    case '+':result=num1+num2;
            //  alert("sum is "+result);
             break;
    case '-':result=num1-num2;
            //  alert("sub is "+result);
             break;  
    case '*':result=num1*num2;
            //  alert("mul is "+result);
             break;  
    case '/':result=num1/num2;
            //  alert("div is "+result);
             break;    
    default:alert("Invalid");
             break;
    exit();
}
alert("the answer is "+result);