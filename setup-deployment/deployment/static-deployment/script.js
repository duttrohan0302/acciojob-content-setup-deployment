const increase = document.getElementById("increase")
const decrease = document.getElementById("decrease")
const count = document.getElementById("count")

const savedCount = localStorage.getItem("count")

if(savedCount){
    count.innerHTML = savedCount
}

increase.addEventListener("click",function(){
    count.innerHTML = parseInt(count.innerHTML)+1

    localStorage.setItem("count",count.innerHTML)
})


decrease.addEventListener("click",function(){
    count.innerHTML = parseInt(count.innerHTML)-1

    localStorage.setItem("count",count.innerHTML)
})