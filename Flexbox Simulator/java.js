function resetFlexbox() {
    const container = document.getElementById('flexboxContainer');
    container.style.flexDirection = 'row';
    container.style.justifyContent = 'flex-start';
    container.style.alignItems = 'flex-start';
    container.style.gap = '0px';
    document.getElementById('gap').value = 0;
    resetFlexGrow();
}

function setGap() {
    const gapValue = document.getElementById('gap').value;
    document.getElementById('flexboxContainer').style.gap = `${gapValue}px`;
}

function setFlexDirection(direction) {
    document.getElementById('flexboxContainer').style.flexDirection = direction;
}

function setJustifyContent(justify) {
    document.getElementById('flexboxContainer').style.justifyContent = justify;
}

function setAlignItems(align) {
    document.getElementById('flexboxContainer').style.alignItems = align;
}

function resetFlexGrow() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => box.style.flexGrow = '0');
    document.getElementById('grow-b1').value = 0;
    document.getElementById('grow-b2').value = 0;
    document.getElementById('grow-b3').value = 0;
}

function setFlexGrow(boxNumber) {
    const growValue = document.getElementById(`grow-b${boxNumber}`).value;
    document.querySelector(`.box:nth-child(${boxNumber})`).style.flexGrow = growValue;
}

function setFlexGrowAll() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.flexGrow = '1';
    });
    document.getElementById('grow-b1').value = 1;
    document.getElementById('grow-b2').value = 1;
    document.getElementById('grow-b3').value = 1;
}
