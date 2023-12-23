/* ここのソースコード見るなんて君は変わり者だね
でもせっかく来てくれたのにごめんね、超スパゲッティーコードなんだ
コードの真相はハムカスのみぞ知るよ */

window.onload = function(){
  let cookies = 0;
  let cps = 0;
  let price = 50;
  let cursors = 0;

  setInterval(() => {
    cookies = cookies + cps;
    document.getElementById('cookiecount').innerText = `${cookies} クッキー`;
  }, 1000);
  
  document.getElementById("cookiee").onclick = function(){
    cookies = cookies + 1;
    document.getElementById('cookiecount').innerText = `${cookies} クッキー`;
  }
  document.getElementById("buycursor").onclick = function(){
    if (cookies < price){
      return alert("クッキーが足りません。")
    }
    cps = cps + 1;
    cursors = cursors + 1;
    cookies = cookies - price;
    price = price + 30;
    document.getElementById('cpscount').innerText = `${cps}クッキー/秒`;
    document.getElementById('cookiecount').innerText = `${cookies} クッキー`;
    document.getElementById('buycursor').innerText = `購入 / ${price} クッキー`;
    document.getElementById('cursorcount').innerText = `${cursors} カーソル`;
  }
}
