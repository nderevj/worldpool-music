setcpm(111 / 4);

const drumBank = "akaixr10";

$: s("hh*8, - [- hh*2] - -")
  .bank(drumBank)
  .gain(".33")
  ._punchcard({ labels: 1 });

$: s("bd sh bd sh, - sd - sd")
  .bank(drumBank)
  ._punchcard({ labels: 1 });
