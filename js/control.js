let colors = ['red','blue','black','pink','green'] ;
let getColor = () =>{
    let num = Math.floor(Math.random() * colors.length);
    return colors[num];
};

document.addEventListener('keydown', event => {

    switch(event.key) {
        case 'ArrowUp':
            movePlayerUp();
            plusScore(10);
            break;
        case 'ArrowDown':
            movePlayerDown();
            plusScore(10);
            break;
        case 'ArrowLeft':
            movePlayerLeft();
            plusScore(10);
            break;
        case 'ArrowRight':
            movePlayerRight();
            plusScore(10);
            break;
        case 'x':
            setDomStyle($player,'background',getColor());
            break;
    }
});