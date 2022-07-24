
document.getElementById("app").innerHTML = `
<div class="bulb">
<img id="bulb0" class="bulb one" src="src/bulb_dull.png">
<span class="bulb one cap">
0
</span>
</div><div class="bulb">
<img id="bulb1" class="bulb one" src="src/bulb_dull.png">
<span class="bulb one cap">
0
</span>
</div><div class="bulb">
<img id="bulb2" class="bulb one" src="src/bulb_dull.png">
<span class="bulb one cap">
0
</span>
</div><div class="bulb">
<img id="bulb3" class="bulb one" src="src/bulb_dull.png">
<span class="bulb one cap">
0
</span>
</div><div class="bulb">
<img id="bulb4" class="bulb one" src="src/bulb_dull.png">
<span class="bulb one cap">
0
</span>
</div><div class="bulb">
<img id="bulb5" class="bulb one" src="src/bulb_dull.png">
<span class="bulb one cap">
0
</span>
</div>
`;

document.getElementById("b1").onclick = function () {
  let st=Number(prompt("Enter binary form: ")).toString(2);
  console.log(st)
  for (let i=0;i<6;i++) {
    let image = document.getElementById("bulb"+i);
    let label = document.getElementsByClassName("bulb one cap")[i];
    image.src = "src/bulb_dull.png";
    label.innerHTML = "0";
  }
  for (let i=0;i<6;i++ ) {
      let image = document.getElementById("bulb"+i);
      let label = document.getElementsByClassName("bulb one cap")[i];
      console.log(image.src);
      if (st[i] == "1") {  
        if (image.src.match("bulb_dull")) {
          image.src = "src/bulb_glow.png";
          label.innerHTML = "1";
        }
      }
  }
};
