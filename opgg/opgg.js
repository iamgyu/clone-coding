var input = document.getElementById("player_name");
input.addEventListener("keydown", event => enterKey(event));

var search_button = document.getElementsByClassName("search_button");
search_button[0].addEventListener('click', search);
search_button[0].addEventListener('click', randomNumber_lp);

function search() {
    var search_name = document.querySelector(".player_name #name");
    search_name.textContent = input.value;
}

function randomNumber_lp() {
    const randomNum = Math.floor(Math.random() * 2000);
    var tier_score = document.querySelector("#tier_and_score #tier_score");
    tier_score.textContent = randomNum + "LP";
}

function randomNumber_winrate() {
    var winrate = document.querySelectorAll(".champion_winrate #winrate");
    winrate.forEach(p =>{
        const randomNum = Math.floor(Math.random() * 101);
        p.textContent = randomNum + "%";
        if(randomNum >= 60){
            p.style.color = "rgb(203, 76, 89)";   
        } else {
            p.style.color = "gray";
        }
    })
}

function enterKey(event) { 
    if(event.key === "Enter") {
        search();
        randomNumber_lp();
        randomNumber_winrate();
    }
}

var btns = document.querySelectorAll(".one_game .buttons .more_info");

btns.forEach(function(btn, index){
    btn.addEventListener('click', function(){
        btnClick(index);
    });
});

function btnClick(index) {
    var divs = document.querySelectorAll(".one_game .show_more_info");

    if(divs[index].style.display === 'flex') {
        divs[index].style.display = 'none';
        btns[index].textContent = 'v';
    } else {
        divs[index].style.display = 'flex';
        btns[index].textContent = '^';
    }
}

function copy_btnClick() {
    var text = document.querySelector(".url .box .link");
    window.navigator.clipboard.writeText(text.value);
    var btn = document.getElementById("copy_btn");
    btn.textContent = 'Copied';
    btn.style.width = "8%";
}