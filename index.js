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



const wrapper=document.querySelector('.wrapper'),
      form=wrapper.querySelectorAll('.form'),
      submitInput=form[0].querySelector('input[type="submit"]');



function createAnime(event){
    event.preventDefault();
    var formdata=new FormData(form[0]);
    alert(formdata.get('anime')+'-'+formdata.get('character'));

}

document.addEventListener('DOMContentLoaded',function(){
    submitInput.addEventListener('click',createAnime,false);
},false)

