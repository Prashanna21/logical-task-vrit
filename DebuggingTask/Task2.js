const a = { name: "example" };
const b = { name: "example" };
console.log(a === b);

//fasle because we are comparing the whole object instead of like for eg a.name === b.name so javascript is confused on what to compare the output will be same on both "==" and "===" strict comparision
