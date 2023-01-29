const verses = [
  {
    verse:
      "나는 포도나무요 너희는 가지라 그가 내 안에, 내가 그 안에 거하면 사람이 열매를 많이 맺나니 나를 떠나서는 너희가 아무 것도 할 수 없음이라",
    author: "요한복음 15:5",
  },
  {
    verse:
      "내가 하나님의 아들의 이름을 믿는 너희에게 이것을 쓰는 것은 너희로 하여금 너희에게 영생이 있음을 알게 하려 함이라",
    author: "요한일서 5:13",
  },
  {
    verse:
      "내가 진실로 진실로 너희에게 이르노니 내 말을 듣고 또 나 보내신 이를 믿는 자는 영생을 얻었고 심판에 이르지 아니하나니 사망에서 생명으로 옮겼느니라",
    author: "요한복음 5:24",
  },
  {
    verse:
      "너희가 내 안에 거하고 내 말이 너희 안에 거하면 무엇이든지 원하는 대로 구하라 그리하면 이루리라",
    author: "요한복음 15:7",
  },
  {
    verse:
      "아무 것도 염려하지 말고 다만 모든 일에 기도와 간구로, 너희 구할 것을 감사함으로 하나님꼐 아뢰라",
    author: "빌립보서 4:6",
  },
  {
    verse:
      "내가 복음을 부끄러워하지 아니하노니 이 복음은 모든 믿는 자에게 구원을 주시는 하나님의 능력이 됨이라 먼저는 유대인에게요 그리고 헬라인에게로다",
    author: "로마서 1:16",
  },
  {
    verse: "술 취하지 말라 이는 방탕한 것이니 오직 성령으로 충만함을 받으라",
    author: "에베소서 5:18",
  },
  {
    verse:
      "오직 각 사람이 시험을 받는 것은 자기 욕심에 끌려 미혹됨이니 욕심이 잉태한즉 죄를 낳고 죄가 장성한즉 사망을 낳느니라",
    author: "고린도전서 10:13",
  },
  {
    verse:
      "또 무리에게 이르시되 아무든지 나를 따라오려거든 자기를 부인하고 날마다 제 십자가를 지고 나를 따를 것이니라",
    author: "누가복음 9:23",
  },
  {
    verse:
      "우리는 하나님의 동역자들이요 너희는 하나님의 밭이요 하나님 집이니라",
    author: "고린도전서 3:9",
  },
];

const verse = document.querySelector("#verse span:first-child");
const author = document.querySelector("#verse span:last-child");
const todaysVerse = verses[Math.floor(Math.random() * verses.length)];

verse.innerText = todaysVerse.verse;
author.innerText = todaysVerse.author;
