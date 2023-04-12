function checkoddeven(a){
    let result
if(a%2==0){
    result="The given number " +`${a}`+" is Even"
}
else{
    result="The given number "+`${a}`+" is Odd"
}
return result
}
console.log(checkoddeven(13))
console.log(checkoddeven(16))
