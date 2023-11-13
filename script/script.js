const pParent = document.getElementsByClassName('item');
const buttonParent = document.getElementsByClassName('choices');
let choice = 0;
function a(i) {
    choice = 0;
    update(i);
    let a = buttonParent[i].querySelector('button:nth-child(1)')
    a.id = `picked`;
    let b = buttonParent[i].querySelector('button:nth-child(2)')
    b.id = `unpicked`;
}
function b(i) {
    choice = 1;
    update(i);
    let a = buttonParent[i].querySelector('button:nth-child(2)')
    a.id = `picked`;
    let b = buttonParent[i].querySelector('button:nth-child(1)')
    b.id = `unpicked`;
}
function update(i) {
    let question = pParent[i].querySelector('p:nth-child(1)');
    question.innerText = `You have chosen ${choices[i][choice]}`;
    let a = buttonParent[i].querySelector('button:nth-child(1)');
    a.removeAttribute('id');
    let b = buttonParent[i].querySelector('button:nth-child(2)');
    b.removeAttribute('id');
    let pun = pParent[i].querySelector('p:nth-child(3)');
    pun.style.display = `block`;
}