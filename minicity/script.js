/* ここのソースコード見るなんて君は変わり者だね
でもせっかく来てくれたのにごめんね、超スパゲッティーコードなんだ
コードの真相はハムカスのみぞ知るよ */

var population = 0;
var money = 50000;
var happiness = 50;
var buildmode = "";
var naturepoint = 0;
var maxpopulation = 0;
var tax = "medium";
var parks = 0;

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
    document.getElementById("setting_btn").innerText = "設定";
    document.getElementById("footer").style.display = "block";
    money = money - 300;
    document.getElementById("money").innerText = `💵お金: $${money.toString()}`;
    maxpopulation = maxpopulation + 4;
    buildmode = "";
  }
  if(buildmode === "apartment"){
    if(money < 1600){
      return alert("お金が足りません。");
    }
    document.getElementById(tile).src = "minicityapartment.png";
    document.getElementById("population").innerText = `👤人口: ${population}人`;
    document.getElementById("money").style.display = "block";
    document.getElementById("happiness").style.display = "block";
    document.getElementById("setting_btn").innerText = "設定";
    document.getElementById("footer").style.display = "block";
    money = money - 1600;
    document.getElementById("money").innerText = `💵お金: $${money.toString()}`;
    maxpopulation = maxpopulation + 12;
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
    document.getElementById("setting_btn").innerText = "設定";
    document.getElementById("footer").style.display = "block";
    money = money - 1;
    document.getElementById("money").innerText = `💵お金: $${money.toString()}`;
    naturepoint = naturepoint + 1;
    buildmode = "";
  }
  if(buildmode === "park"){
    if(money < 20){
      return alert("お金が足りません。");
    }
    document.getElementById(tile).src = "minicitypark.png";
    document.getElementById("population").innerText = `👤人口: ${population}人`;
    document.getElementById("money").style.display = "block";
    document.getElementById("happiness").style.display = "block";
    document.getElementById("setting_btn").innerText = "設定";
    document.getElementById("footer").style.display = "block";
    money = money - 20;
    document.getElementById("money").innerText = `💵お金: $${money.toString()}`;
    happiness = happiness + 1;
    document.getElementById("happiness").innerText = `😀幸福度: ${happiness.toString()}%`;
    parks = parks + 1;
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
    if(document.getElementById(tile).src === "https://hamutan86.github.io/hamks-forever/minicity/minicitypark.png"){
      happiness = happiness - 1;
      document.getElementById("happiness").innerText = `😀幸福度: ${happiness.toString()}%`;
      parks = parks - 1;
    }
    if(document.getElementById(tile).src === "https://hamutan86.github.io/hamks-forever/minicity/minicityhouse.png"){
      population = population - Math.floor(population / (maxpopulation / 4));
      document.getElementById("population").innerText = `👤人口: ${population}人`;
      maxpopulation = maxpopulation - 4;
    }
    if(document.getElementById(tile).src === "https://hamutan86.github.io/hamks-forever/minicity/minicityapartment.png"){
      population = population - Math.floor(population / (maxpopulation / 12));
      document.getElementById("population").innerText = `👤人口: ${population}人`;
      maxpopulation = maxpopulation - 12;
    }
    document.getElementById(tile).src = "minicityblank.png";
    document.getElementById("population").innerText = `👤人口: ${population}人`;
    document.getElementById("money").style.display = "block";
    document.getElementById("happiness").style.display = "block";
    document.getElementById("setting_btn").innerText = "設定";
    document.getElementById("footer").style.display = "block";
    buildmode = "";
  }
};

function changetab(tab) {
  document.getElementById("panel1").style.display = "none";
  document.getElementById("panel2").style.display = "none";
  document.getElementById("panel3").style.display = "none";
  document.getElementById("panel4").style.display = "none";
  document.getElementById(tab).style.display = "flex";
};

function changebuildmode(building) {
  if(building === "house"){
    document.getElementById("population").innerText = "建設モード";
    document.getElementById("money").style.display = "none";
    document.getElementById("happiness").style.display = "none";
    document.getElementById("setting_btn").innerText = "キャンセル";
    document.getElementById("footer").style.display = "none";
    buildmode = "house";
  }
  if(building === "apartment"){
    document.getElementById("population").innerText = "建設モード";
    document.getElementById("money").style.display = "none";
    document.getElementById("happiness").style.display = "none";
    document.getElementById("setting_btn").innerText = "キャンセル";
    document.getElementById("footer").style.display = "none";
    buildmode = "apartment";
  }
  if(building === "tree"){
    document.getElementById("population").innerText = "建設モード";
    document.getElementById("money").style.display = "none";
    document.getElementById("happiness").style.display = "none";
    document.getElementById("setting_btn").innerText = "キャンセル"
    document.getElementById("footer").style.display = "none";
    buildmode = "tree";
  }
  if(building === "park"){
    document.getElementById("population").innerText = "建設モード";
    document.getElementById("money").style.display = "none";
    document.getElementById("happiness").style.display = "none";
    document.getElementById("setting_btn").innerText = "キャンセル"
    document.getElementById("footer").style.display = "none";
    buildmode = "park";
  }
  if(building === "remove"){
    document.getElementById("population").innerText = "撤去モード";
    document.getElementById("money").style.display = "none";
    document.getElementById("happiness").style.display = "none";
    document.getElementById("setting_btn").innerText = "キャンセル";
    document.getElementById("footer").style.display = "none";
    buildmode = "remove";
  }
};

function setting(){
  if(buildmode === ""){
    var settingdialog = document.getElementById("setting");
    settingdialog.showModal();
  }else{
    document.getElementById("population").innerText = `👤人口: ${population}人`;
    document.getElementById("money").style.display = "block";
    document.getElementById("happiness").style.display = "block";
    document.getElementById("setting_btn").innerText = "設定";
    document.getElementById("footer").style.display = "block";
    buildmode = "";
  }
};

function changetax(rate){
  if(rate != tax){
    alert("変更を保存しました。")
    document.getElementById("taxpreview").innerText = `税金 現在：${rate}`.replace("low", "低い").replace("medium", "普通").replace("high", "高い");
  }
  if (rate === "low"){
    if(tax === "medium"){
      tax = "low";
      happiness = happiness + 20;
      document.getElementById("happiness").innerText = `😀幸福度: ${happiness.toString()}%`;
    }
    if(tax === "high"){
      tax = "low";
      happiness = happiness + 40;
      document.getElementById("happiness").innerText = `😀幸福度: ${happiness.toString()}%`;
    }
  }
  if (rate === "medium"){
    if(tax === "low"){
      tax = "medium";
      happiness = happiness - 20;
      document.getElementById("happiness").innerText = `😀幸福度: ${happiness.toString()}%`;
    }
    if(tax === "high"){
      tax = "medium";
      happiness = happiness + 20;
      document.getElementById("happiness").innerText = `😀幸福度: ${happiness.toString()}%`;
    }
  }
  if (rate === "high"){
    if(tax === "medium"){
      tax = "high";
      happiness = happiness - 20;
      document.getElementById("happiness").innerText = `😀幸福度: ${happiness.toString()}%`;
    }
    if(tax === "low"){
      tax = "high";
      happiness = happiness - 40;
      document.getElementById("happiness").innerText = `😀幸福度: ${happiness.toString()}%`;
    }
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
          if(buildmode === ""){
            document.getElementById("population").innerText = `👤人口: ${population}人`;
          }
        }
      }
    }
    if(population != 0){
      if(Math.floor(Math.random() * 50) <= maxpopulation / 4){
        if(Math.floor(Math.random() * 100) <= Math.floor(850 / happiness)){
          population = population - 1;
          if(buildmode === ""){
            document.getElementById("population").innerText = `👤人口: ${population}人`;
          }
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
    if(parks != 0){
      money = money - (parks * 2);
    }
    if(money < 0){
      alert("ゲームオーバー！\nお金がマイナスになってしまいました...");
      location.reload();
    }
    document.getElementById("money").innerText = `💵お金: $${money.toString()}`;
  }, 1000)
}
