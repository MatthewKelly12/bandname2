
let k = 1;

function bandName(band) {
  let name = (k++)+ "." + " " + band  ;
  console.log(name);
}
bandName("Fistikuffs ");
bandName("Dope-A-Matic ");
bandName("SuperCrack ");

console.log(bandName("ugly"))