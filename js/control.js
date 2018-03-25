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
    if(playerHitWall()) {
        setGameOver();
    }
});

/**
 * デフォルトのスピードを設定しておきます。
 */
const defaultSpeed = 500;

/**
 * タイマーを始動させます。
 */
const step = speed => {
    const timer = setTimeout(() => {
        plusScore(10);

        findDomAll('.wall').forEach($wall => {
            moveWall($wall);
            removeWallIfProtruded($wall)
        });

        if(getDomPositions(findDom('.wall:last-child')).right === 140) {
            $field.appendChild(createWall(0));
        }

        if(playerHitWall()) {
            setGameOver();
        }

        const currentScore = getCurrentScore();
        const division = Math.floor(currentScore / 10);
        const newSpeed = defaultSpeed - division;
        step(newSpeed);
    }, speed);
};

step(defaultSpeed);

/**
 * ゲームオーバーにします。
 */
const setGameOver = () => {
    setDomAttr($app, 'data-gamveover', 'true');
    showGameOver();
};
