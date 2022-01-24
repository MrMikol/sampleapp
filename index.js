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

function initMap() {
    var location = {lat: 10.641420, lng: -61.400574};
    var map = new google.maps.Map(document.getElementById("sample-map"), {zoom: 13, center: location});
    var marker = new google.maps.Marker({
        position: location, 
        map: map
    });
}
