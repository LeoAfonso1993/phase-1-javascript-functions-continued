// code your solution here
function saturdayFun(arg = 'roller-skate'){
    return `This Saturday, I want to ${arg}!`
}
console.log(saturdayFun())
console.log(saturdayFun("bathe my dog"))

function mondayWork(act = 'go to the office') {
    return `This Monday, I will ${act}.`

}

console.log(mondayWork())
console.log(mondayWork("work from home"))

/*function wrapAdjective(sym) {
    if (sym == "*") {
        return `You are ${sym}a hard worker${sym}!`
    } else if (sym == "||") {
        return `You are ${sym}a dedicated programmer${sym}!`
    }
    
}

console.log(wrapAdjective('*'))
console.log(wrapAdjective('||'))*/

function wrapAdjective(sym = '*') {
    return function (result = "special") {
        return `You are ${sym}${result}${sym}!`
    }
}

console.log(wrapAdjective("*")("a hard worker"))
wrapAdjective("||")("a dedicated programmer")
wrapAdjective()()