const $gameover = createDivWithId('gameover');
setDomHtml($gameover, 'GAMEOVER<br><span>RETRY</span>');
const hideGameOver = () => setDomStyle($gameover, 'display', 'none');
hideGameOver();