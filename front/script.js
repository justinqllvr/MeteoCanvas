const waveArray = [
  "1.7",
  "1.8",
  "1.9",
  "2.1",
  "2.2",
  "2.1",
  "2.1",
  "2.5",
  "3.1",
  "3.4",
  "3",
  "2.7",
  "2.7",
  "2.5",
  "2.3",
  "2.3",
  "2.2",
  "2.1",
  "2",
  "1.7",
  "1.6",
  "1.5",
  "1.4",
  "1.3",
  "1.2",
  "1.2",
  "1.1",
  "1.1",
  "1",
  "0.8",
  "0.8",
  "0.8",
  "0.7",
  "0.7",
  "0.7",
  "0.7",
  "0.8",
  "0.8",
  "1.1",
  "1.1",
  "1.2",
  "1.3",
  "1.2",
  "1.2",
  "1.2",
  "1.2",
  "1.9",
  "1.9",
  "1.9",
  "2",
  "2",
  "2",
  "2",
  "1.9",
  "1.9",
  "1.9",
  "1.7",
  "1.6",
  "1.7",
  "1.7",
  "1.8",
  "1.8",
  "1.9",
  "2.1",
  "2.3",
  "2.4",
  "2.5",
  "2.4",
  "2.3",
  "2.2",
  "2.2",
  "2.2",
  "2.1",
  "2.1",
  "2.1",
  "2.1",
  "2.1",
  "2",
];
const windArray = [
  "47",
  "51",
  "55",
  "54",
  "52",
  "55",
  "58",
  "70",
  "78",
  "65",
  "52",
  "43",
  "43",
  "38",
  "33",
  "32",
  "30",
  "36",
  "28",
  "17",
  "17",
  "15",
  "12",
  "14",
  "17",
  "19",
  "18",
  "13",
  "9",
  "13",
  "16",
  "16",
  "20",
  "24",
  "33",
  "33",
  "32",
  "36",
  "42",
  "41",
  "46",
  "42",
  "36",
  "30",
  "31",
  "20",
  "26",
  "15",
  "15",
  "16",
  "22",
  "24",
  "25",
  "25",
  "25",
  "22",
  "21",
  "31",
  "37",
  "32",
  "39",
  "39",
  "40",
  "47",
  "57",
  "55",
  "38",
  "38",
  "46",
  "51",
  "59",
  "58",
  "45",
  "49",
  "48",
  "55",
  "50",
  "38",
];
const temperatureArray = [
  "16",
  "16",
  "16",
  "16",
  "16",
  "16",
  "15",
  "14",
  "13",
  "13",
  "13",
  "12",
  "13",
  "14",
  "14",
  "13",
  "13",
  "12",
  "11",
  "10",
  "10",
  "10",
  "10",
  "12",
  "13",
  "13",
  "13",
  "12",
  "11",
  "8",
  "8",
  "8",
  "9",
  "10",
  "13",
  "14",
  "14",
  "12",
  "13",
  "12",
  "13",
  "15",
  "15",
  "16",
  "16",
  "14",
  "13",
  "12",
  "11",
  "12",
  "15",
  "15",
  "15",
  "14",
  "13",
  "13",
  "13",
  "15",
  "16",
  "15",
  "15",
  "15",
  "15",
  "16",
  "16",
  "16",
  "14",
  "14",
  "15",
  "17",
  "17",
  "15",
  "13",
  "14",
  "14",
  "16",
  "16",
  "14",
];
const dateArray = [
  "Me20.05h",
  "Me20.07h",
  "Me20.09h",
  "Me20.11h",
  "Me20.13h",
  "Me20.15h",
  "Me20.17h",
  "Me20.19h",
  "Me20.21h",
  "Je21.03h",
  "Je21.05h",
  "Je21.07h",
  "Je21.09h",
  "Je21.11h",
  "Je21.13h",
  "Je21.15h",
  "Je21.17h",
  "Je21.19h",
  "Je21.21h",
  "Ve22.03h",
  "Ve22.05h",
  "Ve22.07h",
  "Ve22.09h",
  "Ve22.11h",
  "Ve22.13h",
  "Ve22.15h",
  "Ve22.17h",
  "Ve22.19h",
  "Ve22.21h",
  "Sa23.03h",
  "Sa23.05h",
  "Sa23.07h",
  "Sa23.09h",
  "Sa23.11h",
  "Sa23.13h",
  "Sa23.15h",
  "Sa23.17h",
  "Sa23.19h",
  "Di24.05h",
  "Di24.07h",
  "Di24.09h",
  "Di24.11h",
  "Di24.13h",
  "Di24.15h",
  "Di24.17h",
  "Di24.19h",
  "Lu25.05h",
  "Lu25.07h",
  "Lu25.09h",
  "Lu25.11h",
  "Lu25.13h",
  "Lu25.15h",
  "Lu25.17h",
  "Lu25.19h",
  "Ma26.05h",
  "Ma26.08h",
  "Ma26.11h",
  "Ma26.14h",
  "Ma26.17h",
  "Ma26.20h",
  "Me27.05h",
  "Me27.08h",
  "Me27.11h",
  "Me27.14h",
  "Me27.17h",
  "Me27.20h",
  "Je28.05h",
  "Je28.08h",
  "Je28.11h",
  "Je28.14h",
  "Je28.17h",
  "Je28.20h",
  "Ve29.05h",
  "Ve29.08h",
  "Ve29.11h",
  "Ve29.14h",
  "Ve29.17h",
  "Ve29.20h",
];

const chapter = document.createElement("div");

const BaseAudioContext = window.AudioContext || window.webkitAudioContext;
const context = new BaseAudioContext();

const button = document.getElementById("button");
button.style.backgroundColor = 'white'
button.style.color = '#00f'
button.style.border = '1px solid #00f'
button.style.width = '5vw'
button.style.height = '5vh'

const button2 = document.getElementById("button2");
button2.style.backgroundColor = 'white'
button2.style.color = '#00f'
button2.style.border = '1px solid #00f'
button2.style.width = '5vw'
button2.style.height = '5vh'

const saveButton = document.getElementById("saveButton");
saveButton.style.backgroundColor = 'white'
saveButton.style.color = '#00f'
saveButton.style.border = '1px solid #00f'
saveButton.style.width = '5vw'
saveButton.style.height = '5vh'

//Bouttons stop and play du son du context
button.addEventListener("click", () => {
  init();
});

button2.addEventListener("click", () => {
  context.suspend().then(() => {
    console.log("Playback suspend successfully");
  });
});

saveButton.addEventListener("click", () => {
  let dataURL = canvas.toDataURL("image/png");
  fetch("http://localhost:3001/experiment/", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    mode: "cors",
    body: JSON.stringify({
      title: "titre",
      file: dataURL,
    }),
  })
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
});

///////////////////////////////////////////////////////////////////////////////////////////
//Récupère les données des vagues
const waveByDayObject = {};
dateArray.forEach((day, i) => (waveByDayObject[day] = waveArray[i]));

let daysArray = [];
for (const property in waveByDayObject) {
  daysArray.push(property.slice(0, 4));
}

const filteredDaysArray = [...new Set(daysArray)];

const waveByDay = [[], [], [], [], [], [], [], [], [], []];

let numberDay = 1;
for (const property in waveByDayObject) {
  for (let i = 0; i < filteredDaysArray.length; i++) {
    if (property.slice(0, 4) == filteredDaysArray[i]) {
      waveByDay[i].push(waveByDayObject[property]);
    }
  }
  numberDay++;
}

console.log(waveByDay);
///////////////////////////////////////////////////////////////////////////////////////////////////
//récupère les données du vent et des vagues

const windByDayObject = {};
dateArray.forEach((day, i) => (windByDayObject[day] = windArray[i]));

let daysWindArray = [];
for (const property in windByDayObject) {
  daysWindArray.push(property.slice(0, 4));
}

const windByDay = [[], [], [], [], [], [], [], [], [], []];

let numberDayWin = 1;
for (const property in windByDayObject) {
  for (let i = 0; i < filteredDaysArray.length; i++) {
    if (property.slice(0, 4) == filteredDaysArray[i]) {
      windByDay[i].push((windByDayObject[property] / 78) * 523.2);
    }
  }
  numberDayWin++;
}
console.log(windByDay);

let iteration = 0;
let wait_time = 0;
const interval = 1;

const play = (osc, lfo) => {
  osc.start();
  lfo.start();

  for (let i = 0; i < windByDay.length; i++) {
    for (let j = 0; j < windByDay[i].length; j++) {
      osc.frequency.setValueAtTime(windByDay[i][j], wait_time);
      wait_time += interval;
    }
  }
  console.log(windByDay[0]);
};

const init = () => {
  const osc = context.createOscillator();
  osc.type = "sine";

  const amp = context.createGain();
  amp.gain.setValueAtTime(10, context.currentTime);

  let lfo = context.createOscillator();
  lfo.type = "sine";

  lfo.connect(amp.gain);
  osc.connect(amp).connect(context.destination);

  play(osc, lfo);

  //////////////////////////////////////////////////////
};

////////////////////////////////////////////////////////////
//Initialisation du Canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvasWidth = canvas.width = window.innerWidth * 7;
canvasHeight = canvas.height = window.innerHeight - 20;
var width = ctx.canvas.width;
var height = ctx.canvas.height;
let x = 0;
let cy = 0;
let y = 0;
let i = 0;
let frequence = 10;
let amplitude = 100;

const draw = () => {
  const day = Math.floor(x / width * 70)
  console.log(waveArray[day])


  cy = height / 2 + Math.sin(y / frequence) * amplitude * Math.pow(waveArray[day], 1.1) +5

  ctx.moveTo(y, cy);
  ctx.lineTo(
    x + 1,
    height / 2 + Math.sin(y / frequence) * amplitude *  Math.pow(waveArray[day], 1.1) 
  );

  x++;
  y++;
};
function gameLoop() {
  ctx.save();
  ctx.fillStyle = "#00f";
  ctx.strokeStyle = "#00f";
  ctx.lineWidth = 2;

  ctx.beginPath();
  draw(ctx);
  draw(ctx);
  draw(ctx);
  draw(ctx);
  draw(ctx);
  draw(ctx);
  draw(ctx);
  draw(ctx);
  draw(ctx);
  ctx.stroke();

  ctx.restore();

  requestAnimationFrame(gameLoop);
}

const section = document.createElement("section");
section.style.width = '80vw'
section.style.marginTop = '-10vh'
section.style.display = 'flex'
section.style.justifyContent = 'space-around'
section.style.position = 'fixed'
section.append(chapter);
section.append(button);
section.append(button2);
section.append(saveButton);

const app = document.getElementById("app");
app.append(canvas);
app.append(section);
gameLoop();
