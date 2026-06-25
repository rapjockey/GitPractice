
export function add (a,b) {
   return a + b;
}
export function sub (a,b) {
  return  a-b;
}
export function divide(a,b) {
   return a/b;
}
export function multi(a,b) {
  return  a*b;
}

//string Opertions

export const str =(str1)=>{
   return str1.toUpperCase();
  
}
// str();


export const reverse = (str2) => {
   return str2.split("").reverse().join("");
  
}
// reverse();


export const count = (str3) => {
return str3.length;
  
}
// count();