const pParent = document.getElementsByClassName('item');
const buttonParent = document.getElementsByClassName('choices');
let i = -1;
let choice = 0;
function a() {
    choice = 0;
    update();
    let a = buttonParent[i].querySelector('button:nth-child(1)')
    a.id = `picked`;
    let b = buttonParent[i].querySelector('button:nth-child(3)')
    b.id = `unpicked`;
}
function b() {
    choice = 1;
    update();
    let a = buttonParent[i].querySelector('button:nth-child(3)')
    a.id = `picked`;
    let b = buttonParent[i].querySelector('button:nth-child(1)')
    b.id = `unpicked`;
}
function update() {
    i++;
    let firstParagraph = pParent[i].querySelector('p');
    firstParagraph.innerText = `You have chosen ${choices[i][choice]}`;
    let a = buttonParent[i+1].querySelector('button:nth-child(1)');
    a.removeAttribute('id');
    let b = buttonParent[i+1].querySelector('button:nth-child(3)');
    b.removeAttribute('id');
}
for (let x = 1; x < buttonParent.length; x++) {
    let a = buttonParent[x].querySelector('button:nth-child(1)');
    a.id = `disabled`;
    let b = buttonParent[x].querySelector('button:nth-child(3)');
    b.id = `disabled`;
}