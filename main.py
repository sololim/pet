def on_gesture_six_g():
    basic.show_leds("""
        . . . . .
                . # . # .
                . . . . .
                . # # # .
                # . . . #
    """)
input.on_gesture(Gesture.SIX_G, on_gesture_six_g)

def on_gesture_shake():
    soundExpression.spring.play_until_done()
    basic.show_leds("""
        . . . . .
                . # . # .
                . . . . .
                # . # . #
                . # . # .
    """)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_gesture_logo_down():
    if input.sound_level() > 1:
        music.set_volume(95)
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

basic.show_string("------------")
basic.show_leds("""
    . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
""")

def on_forever():
    soundExpression.happy.play_until_done()
    basic.show_leds("""
        . # . # .
                . . . . .
                # . . . #
                . # # # .
                . . . . .
    """)
basic.forever(on_forever)

def on_forever2():
    if input.sound_level() > 50:
        music.set_volume(0)
basic.forever(on_forever2)
