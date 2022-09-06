basic.forever(function () {
    basic.showIcon(IconNames.Rabbit)
    basic.pause(500)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # # # #
        . # # . #
        . # # # #
        `)
    basic.pause(500)
})
