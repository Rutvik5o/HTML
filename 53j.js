console.log("this is turtorial is 53");

// let name="abc";

// let name1="abbc";

// let name2="cysl";

// let name3="tsgs";

// console.log(name+ " is nice");
// console.log(name1+ " is nice");
// console.log(name2+ " is nice");
// console.log(name3+ " is nice");






// function greet(name)
// {
//     console.log(name+ " is a good ");
// }


// greet(name);
// greet(name1);
// greet(name2);
// greet(name3);







function g1(name,txt)
{
    console.log("Hello " + name+txt);


    let name1="hello";
  
}

 let txt=" , Good Morning";

g1("aks",txt); 

let name1="victm";

g1(name1,txt);



//default argument

function g2(name,txt="default argument")
{
    console.log(name+ " welcome that is "+ txt);
}


g2("hello","not default argument");

g2("hello");








function sum(a,b,c)
{
    let d=a+b+c;

    return d;

    // console.log("nor printed");  => this line will never exectued
}


let returnval1=sum(10,15,20);

console.log(returnval1);

console.log(sum(36,63,4));
