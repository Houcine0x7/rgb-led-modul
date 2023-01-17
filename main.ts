let y = 0
let x = 0
let strip = neopixel.create(DigitalPin.P0, 8, NeoPixelMode.RGB)
basic.forever(function () {
    x = pins.analogReadPin(AnalogPin.P2)
    y = pins.analogReadPin(AnalogPin.P1)
    if (y > 1000) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
    } else if (y < 20) {
        strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    } else if (x > 1000) {
        strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    } else if (x < 20) {
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    } else {
        strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    }
})
