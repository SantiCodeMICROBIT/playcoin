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
    radio.sendString("" + (PLAYCOIN))
})
input.onGesture(Gesture.Shake, function () {
    PLAYCOIN += 1
})
let PLAYCOIN = 0
radio.setGroup(1)
PLAYCOIN = 0
let group = 0
