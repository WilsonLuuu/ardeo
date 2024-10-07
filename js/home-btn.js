document.addEventListener('DOMContentLoaded', function () {
const homeButton = document.getElementById("hbtn");
    if (homeButton) {
        homeButton.addEventListener('pointermove', moveBg);
    }
    function moveBg(e) {
        const rect = e.target.getBoundingClientRect();
        e.target.style.setProperty('--x', (e.clientX - rect.x) / rect.width * 100);
        e.target.style.setProperty('--y', (e.clientY - rect.y) / rect.height * 100);
    }
});
let x;
document.addEventListener('DOMContentLoaded', function () {
function intro() {
    let i = 4; 
    let $b = document.getElementById("hbtn");
    $b.style.setProperty( "--a", '100%' );
    x = setInterval(() => {
        $b.style.setProperty( 
            "--x", -50
        );
        $b.style.setProperty( 
            "--y", 50
        );
        i+= 0.03;
        if( i > 11.5 ) {
            clearInterval(x);
            $b.style.setProperty( "--a", '' );
        }
    },16);
}
intro();
document.querySelector("button").addEventListener('pointerover', (e) => {
    clearInterval(x);
    e.target.style.setProperty( "--a", '' );
});})