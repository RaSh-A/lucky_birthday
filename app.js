// console.log("app is connected!!");
const checkBtn = document.getElementById("btn");
const birthDate = document.getElementById("birth-date");
const luckyNum = document.getElementById("lucky-num");
const coverLine = document.getElementById("cover-line");
const resetBtn = document.getElementById("reset");
const front = document.getElementById("front");
const back = document.getElementById("back");

function getLucky() {
    checkBtn.style.bottom = "19.6rem"
    console.log(birthDate.value);
    console.log(luckyNum.value);

    if (!birthDate.value) {
        alert("Birth Date Cannot be empty")
        return reset()
        
    }
    else if (luckyNum.value === "") {
        alert("Lucky Number Cannot be empty")
        return reset()
    }


    let luck = luckyNum.value
    let regex = /-/ig
    let birth = birthDate.value.replaceAll(regex, "")
    console.log(birth)
    let sum = 0
    for (let i = 0; i < birth.length; i++) {
        sum = sum + Number(birth.charAt(i))
    }
    console.log(sum);
    if (sum % luck === 0) {
        luckyBoi()
    } else unluckyBoi()
}

function luckyBoi() {
    front.innerText = "!!!Lucckkkyyyy!!!"
    back.innerText = "!!!Lucckkkyyyy!!!"
    coverLine.innerText = "Congrats! U are born Lucky"
    resetBtn.style.visibility = "visible"
    checkBtn.setAttribute("disabled", "")
    checkBtn.removeAttribute("id")
    checkBtn.setAttribute("id", "no-hover")
    
}
function unluckyBoi() {
    front.innerText = "UnLucky"
    back.innerText = "UnLucky"
    coverLine.innerText = "Don't worry luck is not everything"
    resetBtn.style.visibility = "visible"
    checkBtn.setAttribute("disabled","")
    checkBtn.removeAttribute("id")
    checkBtn.setAttribute("id", "no-hover")
}

function reset() {
    front.innerText = "Birthday Luck"
    back.innerText = "Birthday Luck"
    birthDate.value = null
    luckyNum.value = null
    coverLine.innerText = "Check whether ur birth date favours ur luck or not?"
    resetBtn.style.visibility = "hidden"
    checkBtn.removeAttribute("disabled")
    checkBtn.style.bottom = "20rem"
    checkBtn.removeAttribute("id")
    checkBtn.setAttribute("id", "btn")
}
