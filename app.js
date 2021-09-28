const luckyButton = document.querySelector("#check-btn")
luckyButton.addEventListener("click",handleClick)

const bdate = document.querySelector("#input-date")
const luckyNumber = document.querySelector("#input-number")
const result = document.querySelector("#final-message")


function handleClick(){
    //console.log("Birthdate is ",Number(bdate.value)," and lucky number is ",Number(luckyNumber.value))

    if(bdate.value && Number(luckyNumber.value) > 0 ){
        const sumofDigits = calculateSumOfDate(bdate.value)
        const finalMessage = isLucky(sumofDigits,Number(luckyNumber.value))
        result.innerHTML = finalMessage
    }
    else{
        result.innerHTML = "Please enter valid numbers"
    }
    

}

function calculateSumOfDate(birthdayDate){
    birthdayDate = birthdayDate.replaceAll("-","")
    birthdayDate = birthdayDate.replaceAll("/","")
    //console.log(birthdayDate)
    let sum = 0
    for(let i = 0 ; i < birthdayDate.length ; i++){
        sum = sum + Number(birthdayDate[i])
    }
    console.log("final sum is ",sum)
    return sum
}

function isLucky(sumOfDigits,luckyNumber){
    const remainder = sumOfDigits%luckyNumber
    //console.log("Remainder is ",remainder)
    if(remainder === 0){
        return "Your Birthday is Lucky !!!!"
    }
    else{
        return "Your Bday ain't lucky because you don't need luck to favour you !!"
    }
}
