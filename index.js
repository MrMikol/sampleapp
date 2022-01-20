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



async function createAnime(event){
    event.preventDefault();
    var formdata=new FormData(form[0]);
    alert(formdata.get('name')+'-'+formdata.get('image'));

}

document.addEventListener('DOMContentLoaded',function(){
    submitInput.addEventListener('click',createAnime,false);
},false)

