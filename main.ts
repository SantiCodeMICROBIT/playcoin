enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
})
input.onButtonPressed(Button.A, function () {
    basic.showString("P-COIN")
    basic.showNumber(PLAYCOIN)
})
input.onGesture(Gesture.ScreenDown, function () {
    radio.sendString("" + (group && PLAYCOIN))
})
input.onGesture(Gesture.Shake, function () {
    PLAYCOIN += 1
})
let group = 0
let PLAYCOIN = 0
PLAYCOIN = 0
group = 0
basic.forever(function () {
    radio.setGroup(1)
})
