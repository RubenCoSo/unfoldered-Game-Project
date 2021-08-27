window.onload = () => {
  const playPause = document.getElementById("playpause");
  const music = document.getElementById("music");
  const startGame = document.getElementById("startGame");
  const instructions = document.getElementById("instructions");
  const counter = document.getElementById("counter");
  const timer = document.getElementById("timer");
  const gameSide = document.querySelector(".gameTittle");

  playPause.addEventListener("click", () => {
    if (playPause.getAttribute("class") === "pause") {
      playPause.setAttribute("class", "play");
      playPause.src = "./play.png";
      music.src = "";
    } else if (playPause.getAttribute("class") === "play") {
      playPause.setAttribute("class", "pause");
      playPause.src = "./pause.png";
      music.src = "./Magicka Soundtrack 8 Encounter.mp3";
    }
  });

  startGame.onclick = () => {
    const canvas = document.querySelector("#canvas");
    canvas.style.display = "block";
    gameApp.init(canvas);
    music.src = "./Magicka Soundtrack 8 Encounter.mp3";
    startGame.remove();
    instructions.remove();
    let gemsBox = document.createElement("div");
    gemsBox.setAttribute("id", "gemsBox");
    counter.appendChild(gemsBox);
    let timeShow = document.createElement("p");
    timeShow.setAttribute("id", "timerShow");
    timer.appendChild(timeShow);
    gameSide.className = "gameSide";
  };
};
