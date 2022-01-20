let counting = document.getElementById("count")

let num = 0

function increment() {
    num = num + 1
    counting.innerText = num
    console.log(num)
}