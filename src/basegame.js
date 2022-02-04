class BaseGame {
  constructor() {
    this.bases = [
      { "name": "binary", "radix": 2 },
      { "name": "octal", "radix": 8 },
      { "name": "decimal", "radix": 10 },
      { "name": "hexadecimal", "radix": 16 }
    ];
  }
  initElements() {
    this.eVMin = document.getElementById("vMin");
    this.eVMax = document.getElementById("vMax");
    this.eFromBase = document.getElementById("FromBase");
    this.eToBase = document.getElementById("ToBase");
    this.eFromValue = document.getElementById("FromValue");
    this.eToValue = document.getElementById("ToValue");
  }
  game(mn, mx) {
    this.initElements();
    this.eVMin.innerText = ""+mn;
    this.eVMax.innerText = ""+mx;
    this.iFrom = Math.floor(Math.random()*4);
    this.iTo = this.iFrom;
    while (this.iFrom==this.iTo) { this.iTo = Math.floor(Math.random()*4); }
    this.eFromBase.innerText = this.bases[this.iFrom].name;
    this.eToBase.innerText = this.bases[this.iTo].name;
    this.fromValue = Math.floor(Math.random()*(mx-mn));
    this.eFromValue.innerText = this.fromValue.toString(this.bases[this.iFrom].radix).toUpperCase();
    this.eToValue.focus();
  }
  checkAnswer() {
    this.initElements();
    let toValue = this.eToValue.value.toLowerCase();
    console.log(toValue);
    console.log(this.fromValue.toString(this.bases[this.iTo].radix));
    if (toValue==this.fromValue.toString(this.bases[this.iTo].radix)) {
      this.eToValue.style.color = "green";
      setTimeout(()=>history.go(),1000);
    } else {
      this.eToValue.style.color = "red";
    }
  }
};

const g = new BaseGame();

function game() {
  g.game(0,256);
}

function keyPress(event) {
  if (event.keyCode==13) {
    g.checkAnswer();
  }
}
