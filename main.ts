finch.startFinch()
let isAngry = false

basic.forever(function(){
    finch.setBeak(255, 255, 255)
    loops.everyInterval(1, function(){
        let distance = finch.getDistance()
        if (distance <= 100) {
            isAngry = true
        } else {
            isAngry = false
        }
    })
})

loops.everyInterval(1, function(){
    if (isAngry) {
        let distance1 = finch.getDistance()
        basic.showIcon(IconNames.Angry)
        finch.setMove(MoveDir.Forward, distance1 * 1.25, 100)
    } else {
        basic.showIcon(IconNames.Asleep)
        finch.setTurn(RLDir.Right, 15, 100)
    }
})

input.onButtonPressed(Button.A, function(){
    isAngry = true
})
input.onButtonPressed(Button.B, function () {
    isAngry = false
})