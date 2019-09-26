class Deeplearning {
  constructor(year, price, isfool) {
    this.year = year;
    this.cyberpunk_2077 = price;
    this.isfool = isfool;
  }

  get buyornot() {
    return this.zhangisfool();
  }

  zhangisfool() {
    if (!this.isfool) {
      if (this.year === new Date().getFullYear() + 1) {
        let cyberpunk_3077 = false;
        setTimeout(() => {
          cyberpunk_3077 = true;
        }, 999999999999);
        if (cyberpunk_3077) {
          return "行,我给你买一个";
        } else {
          this.cyberpunk_2077 /= 10;
          return `出了3077打一折${this.cyberpunk_2077}在搞一个，不买`;
        }
      } else {
        return "2020才出2077，不买";
      }
    } else {
      return "你是个智障，不买";
    }
  }
}
let min = 70;
let max = 100;
let percent = getRandomNum(min, max);

document.addEventListener("DOMContentLoaded", function(e) {
  e.preventDefault();
  setTimeout(() => {
    document.getElementById("buy").textContent = "买个几把";
  }, 3000);
  setTimeout(() => {
    document.getElementById("buy").textContent = "要不你给我买一个得了屌丝";
  }, 6000);
});

document.querySelector("#main").addEventListener("submit", getResult);

function getResult(e) {
  e.preventDefault();
  let year = parseInt(document.getElementById("year").value);
  let money = parseInt(document.getElementById("game").value);
  let fool = document.getElementById("fool").value;
  let fool_content = fool;

  if (fool === "我傻") {
    fool = true;
    document.getElementById(
      "choice-fool"
    ).textContent = `你说\'${fool_content}\' 哈哈哈哈`;
  } else {
    fool = false;
    document.getElementById("choice-fool").textContent = `liar!`;
  }
  if (year === "") {
    document.getElementById("year-valid").style.display = "block";
  } else if (game === "") {
    document.getElementById("game-valid").style.display = "block";
  } else {
    loading();
    setTimeout(() => {
      console.log(year, money, fool);
      getPercent();
      document.querySelector(".spin").style.display = "none";
      document.querySelector("#rs").style.display = "block";

      const stupid = new Deeplearning(year, money, fool);
      if (year === 2019) {
        document.getElementById("choice-year").textContent = `${year}还没出啊`;
      } else {
        document.getElementById(
          "choice-year"
        ).textContent = `${year}年,搞笑呢？`;
      }
      if (year > 2020) {
        document.getElementById(
          "choice-year"
        ).textContent = `${year}年也太远了`;
      }
      if (money > 1000) {
        document.getElementById(
          "choice-game"
        ).textContent = `这游戏${money}元吗 不买了`;
      } else {
        document.getElementById(
          "choice-game"
        ).textContent = `打一折再买，${money / 10}块`;
      }

      document.getElementById("output").style.display = "block";

      const result = stupid.buyornot;
      document.getElementById("result").innerHTML = result;
    }, 2000);
  }
}

function loading() {
  document.querySelector(".spin").style.display = "block";
}
document.querySelector("#rs").addEventListener("click", function(e) {
  e.preventDefault();
  window.location.reload();
});
function getPercent() {
  document.getElementById("percent").textContent = `${percent}%`;
}

function getRandomNum(min, max) {
  return Math.random() * (max - min + 1) + min;
}
