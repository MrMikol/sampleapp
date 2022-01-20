let counting = document.getElementById("count")

let num = 0

function increment() {
    num = num + 1
    counting.innerText = num
    console.log(num)
}

function decrease() {
    minus = counting.innerText
    minus = minus - 1
    counting.innerText = minus
}

