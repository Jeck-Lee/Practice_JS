const quotes = [
    {
        quote: "그래, 그렇다면 시간이 지나가는 걸 걱정하지는 마. 하루 속에도 영원은 있으니까.",
        author: "살아야 할 이유 / 매트 헤이그",
    },
    {
        quote: "강은 빠지는 곳이 아니라 건너가는 곳임을. 다리는 건너는 곳이지 뛰어내리는 곳이 아님을.",
        author: "불편한 편의점 / 김호연",
    },
    {
        quote: "영감이라는 말은 참 편리하지요. 아무것도 없는 상태에서 뭔가 대단한 게 툭하고 튀어나오는 것 같잖아요? 하지만 결국 고민의 시간이 차이를 만드는 거랍니다.",
        author: "달러구트 꿈 백화점 / 이미예",
    },
    {
        quote: "헤엄쳐야지 별수 있나요. 어쩌면 세상은 그 자체로 바닥없는 물이기도 하고.",
        author: "아가미 / 구병모",
    },
    {
        quote: "어쩌면 폐기해야 할 것은 소수자들의 신체적 결함이나 질병 그 자체가 아니라 그것을 극복해야 할 것으로 규정하는 정상성 개념 그 자체일지도 모른다고 말이다.",
        author: "우리가 빛의 속도로 갈 수 없다면 / 김초엽",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;