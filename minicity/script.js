var population = 0;
var money = 50000;
var happiness = 50;
var buildmode = "";
var naturepoint = 0;
var maxpopulation = 0;
var tax = "medium";

function changetile(tile) {
  if(document.getElementById(tile).src != "https://hamutan86.github.io/hamks-forever/minicity/minicityblank.png" && buildmode != "remove" && buildmode != ""){
    return alert("そこは既に他の建物が建っています。")
  }

  if(buildmode === "house"){
    if(money < 300){
      return alert("お金が足りません。");
    }
    document.getElementById(tile).src = "minicityhouse.png";
    document.getElementById("population").innerText = `👤人口: ${population}人`;
    document.getElementById("money").style.display = "block";
    document.getElementById("happiness").style.display = "block";
    document.getElementById("setting").style.display = "block";
    document.getElementById("footer").style.display = "block";
    money = money - 300;
    document.getElementById("money").innerText = `💵お金: $${money.toString()}`;
    maxpopulation = maxpopulation + 4;
    buildmode = "";
  }
  if(buildmode === "tree"){
    if(money < 1){
      return alert("お金が足りません。");
    }
    document.getElementById(tile).src = "minicitytree.jpg";
    document.getElementById("population").innerText = `👤人口: ${population}人`;
    document.getElementById("money").style.display = "block";
    document.getElementById("happiness").style.display = "block";
    document.getElementById("setting").style.display = "block";
    document.getElementById("footer").style.display = "block";
    money = money - 1;
    document.getElementById("money").innerText = `💵お金: $${money.toString()}`;
    naturepoint = naturepoint + 1;
    buildmode = "";
  }
  if(buildmode === "remove"){
    if(document.getElementById(tile).src === "https://hamutan86.github.io/hamks-forever/minicity/minicitytree.jpg"){
      if(naturepoint === 0){
        happiness = happiness - 1;
        document.getElementById("happiness").innerText = `😀幸福度: ${happiness.toString()}%`;
        naturepoint = 4;
      }else{
        naturepoint = naturepoint - 1;
      }
    }
    if(document.getElementById(tile).src === "https://hamutan86.github.io/hamks-forever/minicity/minicityhouse.png"){
      population = population - Math.floor(population / (maxpopulation / 4));
      document.getElementById("population").innerText = `👤人口: ${population}人`;
      maxpopulation = maxpopulation - 4;
    }
    document.getElementById(tile).src = "minicityblank.png";
    document.getElementById("population").innerText = `👤人口: ${population}人`;
    document.getElementById("money").style.display = "block";
    document.getElementById("happiness").style.display = "block";
    document.getElementById("setting").style.display = "block";
    document.getElementById("footer").style.display = "block";
    buildmode = "";
  }
};

function changetab(tab) {
  document.getElementById("panel1").style.display = "none";
  document.getElementById("panel2").style.display = "none";
  document.getElementById("panel3").style.display = "none";
  document.getElementById("panel4").style.display = "none";
  document.getElementById(tab).style.display = "block";
};

function changebuildmode(building) {
  if(building === "house"){
    document.getElementById("population").innerText = "建設モード";
    document.getElementById("money").style.display = "none";
    document.getElementById("happiness").style.display = "none";
    document.getElementById("setting").style.display = "none";
    document.getElementById("footer").style.display = "none";
    buildmode = "house";
  }
  if(building === "tree"){
    document.getElementById("population").innerText = "建設モード";
    document.getElementById("money").style.display = "none";
    document.getElementById("happiness").style.display = "none";
    document.getElementById("setting").style.display = "none";
    document.getElementById("footer").style.display = "none";
    buildmode = "tree";
  }
  if(building === "remove"){
    document.getElementById("population").innerText = "撤去モード";
    document.getElementById("money").style.display = "none";
    document.getElementById("happiness").style.display = "none";
    document.getElementById("setting").style.display = "none";
    document.getElementById("footer").style.display = "none";
    buildmode = "remove";
  }
};

window.onload = function(){
  var dialog = document.getElementById("dialog");
  dialog.showModal();
  setInterval(() => {
    if(naturepoint > 4){
      happiness = happiness + 1;
      document.getElementById("happiness").innerText = `😀幸福度: ${happiness.toString()}%`;
      naturepoint = 0;
    }
  }, 50)
  setInterval(() => {
    if(population < maxpopulation && population != maxpopulation){
      if(Math.floor(Math.random() * 50) <= maxpopulation / 4){
        if(Math.floor(Math.random() * 100) <= happiness){
          population = population + 1;
          document.getElementById("population").innerText = `👤人口: ${population}人`;
        }
      }
    }
    if(population != 0){
      if(Math.floor(Math.random() * 50) <= maxpopulation / 4){
        if(Math.floor(Math.random() * 160) >= happiness * 15){
          population = population - 1;
          document.getElementById("population").innerText = `👤人口: ${population}人`;
        }
      }
    }
  }, 100)
  setInterval(() => {
    if(tax === "low"){
      money = money + (population * 5);
    }
    if(tax === "medium"){
      money = money + (population * 10);
    }
    if(tax === "high"){
      money = money + (population * 20);
    }
    if(maxpopulation > population && maxpopulation != population){
      money = money - ((maxpopulation - population) * 3);
    }
    document.getElementById("money").innerText = `💵お金: $${money.toString()}`;
  }, 1000)
}
