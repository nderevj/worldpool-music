setcpm(111 / 4);

// const drumBank = "akaixr10"
// const drumBank = "hr16"; // use rim, or sh instead of cp
// const drumBank = "rolandr8";
// const drumBank = "rolandtr707";
// const drumBank = "sakatadpm48";
// const drumBank = "yamaharm50";
const drumBank = "yamahary30"; // best with cp instead of sh

$: s("hh*8, - [- hh*2] - -")
  .bank(drumBank)
  .gain(".33")

$: s("bd cp bd cp, - sd - sd")
  .bank(drumBank)
  .gain("1 .5 1 .5")
