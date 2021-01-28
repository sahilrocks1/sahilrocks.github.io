function changefont(){


    function getRandomNumber(min, max) {
        let step1 = max - min + 1;
        let step2 = Math.random() * step1;
        let result = Math.floor(step2) + min;
        return result;
    }
    var pos = document.querySelector(':root');
    for (let index = 1; index != 20; index++) {


        randomnumber = getRandomNumber(1, 20)
        setInterval(function () {
            randomnumber = getRandomNumber(0, 20)
            console.log(randomnumber)
            if (randomnumber == 0) {
                pos.style.setProperty('--font-family', 'Alex Brush')
            }
            else if (randomnumber == 1) {
                pos.style.setProperty('--font-family', 'Melinda')
            }
            else if (randomnumber == 2) {
                pos.style.setProperty('--font-family', 'MonotypeOldEnglishTextW01')
            }
            else if (randomnumber == 3) {
                pos.style.setProperty('--font-family', 'Aguafina Script')
            }
            else if (randomnumber == 4) {
                pos.style.setProperty('--font-family', 'Bad Script')
            }
            else if (randomnumber == 5) {
                pos.style.setProperty('--font-family', 'Bungee Hairline')
            }
            else if (randomnumber == 6) {
                pos.style.setProperty('--font-family', 'Bungee Inline')
            }
            else if (randomnumber == 7) {
                pos.style.setProperty('--font-family', 'Clicker Script')
            }
            else if (randomnumber == 8) {
                pos.style.setProperty('--font-family', 'Dancing Script')
            }
            else if (randomnumber == 9) {
                pos.style.setProperty('--font-family', 'Faster One')
            }
            else if (randomnumber == 10) {
                pos.style.setProperty('--font-family', 'Monoton')
            }
            else if (randomnumber == 11) {
                pos.style.setProperty('--font-family', 'Monsieur La Doulaise')
            }
            else if (randomnumber == 12) {
                pos.style.setProperty('--font-family', 'Nova Script')
            }
            else if (randomnumber == 13) {
                pos.style.setProperty('--font-family', 'Oleo Script Swash Caps')
            }
            else if (randomnumber == 14) {
                pos.style.setProperty('--font-family', 'Petit Formal Script')
            }
            else if (randomnumber == 15) {
                pos.style.setProperty('--font-family', 'Pinyon Script')
            }
            else if (randomnumber == 16) {
                pos.style.setProperty('--font-family', 'Press Start 2P')
            }
            else if (randomnumber == 17) {
                pos.style.setProperty('--font-family', 'Raleway Dots')
            }
            else if (randomnumber == 18) {
                pos.style.setProperty('--font-family', 'Ribeye Marrow')
            }
            else if (randomnumber == 19) {
                pos.style.setProperty('--font-family', 'Rouge Script')
            }
            else if (randomnumber == 20) {
                pos.style.setProperty('--font-family', 'Rye')
            }
            else if (randomnumber == 20) {
                pos.style.setProperty('--font-family', 'Zilla Slab Highlight')
            }
        },2050)
    }
}
changefont()
