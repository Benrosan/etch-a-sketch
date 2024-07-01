


let container = document.getElementById("container");

let flexBasisValue = `calc(100% / 16)`;

function createTable(size) {
for (let i = 0; i < size; i++)
        {
    let box = document.createElement(`div`);
    box.classList.add(`box`);
    box.style.flex = `1 0 ${flexBasisValue}`;
    container.appendChild(box);
    box.addEventListener(`mouseenter`, () => {
        box.style.backgroundColor = 'blue';
    })
}
};
createTable(257)



    //review flex basis and flex 1 0 1 etc...