const grid = document.querySelector(".grid");
const orderBtn = document.querySelector("#order");
const translateBtn = document.querySelector("#translate");
let state = { order: 1, translate: 1 };

grid.addEventListener("mouseover", () => {
    const rand = randOrder();
    const randTranslating = randOrder();
    const randTranslatingReversed = randTranslating.reverse();

    grid.querySelectorAll("div").forEach((div, index) => {
        if (state.order) div.style.order = rand[index];
        if (state.translate)
            div.style.translate = `${randTranslating[index]}px ${randTranslatingReversed[index]}px`;
    });
});

function randOrder() {
    const gridChildren = Array.from(grid.querySelectorAll("div"));
    return gridChildren.map((_) =>
        Math.floor(Math.random() * gridChildren.length)
    );
}

orderBtn.addEventListener("click", (order) => {
    order.target.classList.toggle("btn-outline-primary");
    order.target.classList.toggle("btn-primary");
    state.order ^= 1;
});

translateBtn.addEventListener("click", (trans) => {
    trans.target.classList.toggle("btn-outline-primary");
    trans.target.classList.toggle("btn-primary");
    state.translate ^= 1;
});
