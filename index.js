let homeScoreBtn1 = document.getElementById("home-score-btn-1")
let homeScoreBtn2 = document.getElementById("home-score-btn-2")
let homeScoreBtn3 = document.getElementById("home-score-btn-3")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
console.log(homeScoreBtn1)

function btn1() {
    console.log(btn1)
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function btn2() {
    console.log(btn2)
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function btn3() {
    console.log(btn3)
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

let guestScoreBtn1 = document.getElementById("guest-score-btn-1")
let guestScoreBtn2 = document.getElementById("guest-score-btn-2")
let guestScoreBtn3 = document.getElementById("guest-score-btn-3")
let guestScoreEl = document.getElementById("guest-score")
let guestScore = 0
console.log(guestScoreBtn1)

function btn4() {
    console.log(btn4)
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function btn5() {
    console.log(btn5)
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function btn6() {
    console.log(btn6)
    guestScore += 3
    guestScoreEl.textContent = guestScore
}


function refresh() {
    console.log(refresh)
    homeScoreEl.textContent = 0
    homeScore = 0
    guestScoreEl.textContent = 0
    guestScore = 0
}
