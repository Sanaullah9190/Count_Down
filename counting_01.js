
let endDate = "25 August 2023 6:16 PM"

document.getElementById("end-date").innerHTML=endDate

let inputs = document.querySelectorAll("input")



let clock =()=>{
    let end = new Date(endDate)
    let now = new Date()
    // console.log(end)
    // console.log(now)

    let diff = (end-now)/1000
    if(diff<0){
        document.body.innerHTML=`<h1><b>We can acess your data</b></h1>`
    }
    inputs[0].value = (Math.floor(diff/3600/24))
    inputs[1].value = (Math.floor(diff/3600)%24)
    inputs[2].value = (Math.floor(diff/60)%60)
    inputs[3].value = (Math.floor(diff)%60)
    
}
clock()

setInterval(
    ()=>{
        clock()
    },1000
)


// 1 day = 24 hour 
// 1 h= 60 min 
// 60 min =3600 sec