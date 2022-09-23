enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("RECIVED")
    basic.showString("" + (receivedNumber))
})
input.onButtonPressed(Button.A, function () {
    basic.showString("TOTAL")
    basic.showNumber(PLAYCOIN)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("SENT")
    radio.sendString("" + (PLAYCOIN))
})
input.onButtonPressed(Button.B, function () {
    PLAYCOIN += -50
    basic.showString("UPGRADED")
    upgrade = 1
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        . . . # .
        . . . . #
        . # # # #
        . . . . #
        . . . # .
        `)
    basic.showLeds(`
        . # # # .
        # . # . #
        . . # . .
        . . # . .
        . . . . .
        `)
    if (upgrade == 0) {
        PLAYCOIN += 1
    } else if (upgrade == 1) {
        PLAYCOIN += 5
    }
})
let PLAYCOIN = 0
let upgrade = 0
radio.setGroup(1)
upgrade = 0
PLAYCOIN = 0
basic.showLeds(`
    . # # # .
    # . # . #
    . . # . .
    . . # . .
    . . . . .
    `)
basic.forever(function () {
    if (PLAYCOIN < 0) {
        upgrade = 0
        basic.showString("DEBT")
    }
})
