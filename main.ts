finch.startFinch()
let isAngry = false
let distance = 0

basic.forever(function(){
    finch.setBeak(255, 255, 255)
})
loops.everyInterval(1, function () {
    distance = finch.getDistance()
    if (distance <= 100) {
        isAngry = true
    } else {
        isAngry = false
    }
})

loops.everyInterval(1, function(){
    distance = finch.getDistance()
    if (isAngry) {
        basic.showIcon(IconNames.Angry)
        finch.setMove(MoveDir.Forward, distance * 2.75, 100)
    } else {
        basic.showIcon(IconNames.Asleep)
        finch.setTurn(RLDir.Right, 15, 100)
    }
})