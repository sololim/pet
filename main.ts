input.onGesture(Gesture.SixG, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `)
})
input.onGesture(Gesture.Shake, function () {
    soundExpression.spring.playUntilDone()
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . # . #
        . # . # .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    if (input.soundLevel() > 1) {
        music.setVolume(95)
    }
})
basic.showString("-----------------------")
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.forever(function () {
    soundExpression.happy.playUntilDone()
    basic.showLeds(`
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        . . . . .
        `)
})
basic.forever(function () {
    if (input.soundLevel() > 50) {
        music.setVolume(0)
    }
})
