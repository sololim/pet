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
music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
basic.showString("Loading")
basic.showString("-----------------------")
basic.showLeds(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)
basic.forever(function () {
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
