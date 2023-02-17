const popup = document.querySelector(".popup")
let isOnline = true, intervalId, timer = 10

async function checkConnection(){
    try{
        const response = await fetch("http://jsonplaceholder.typicode.com/posts")
        isOnline = response.status >= 200 && response.status < 300
        console.log(isOnline)
    } catch(err){
        isOnline = false
        console.log(isOnline)
    }

    handlePopup(isOnline)
}

function handlePopup(status){
    if(status){
        return popup.classList.remove("show")
    }

    popup.classList.add("show")

    intervalId = setInterval(() => {
        timer--
        popup.querySelector(".description strong").innerText = timer
    }, 1000)
}

// setInterval(checkConnection, 3000)