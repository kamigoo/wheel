input.onButtonPressed(Button.A, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 21)
    basic.showLeds(`
        # # . . #
        . . . . #
        . . # . .
        # . . . .
        # . . # #
        `)
    basic.showLeds(`
        # . . # #
        # . . . .
        . . # . .
        . . . . #
        # # . . #
        `)
    basic.showLeds(`
        . . # # .
        # . . . .
        # . # . #
        . . . . #
        . # # . .
        `)
    basic.showLeds(`
        . # # . .
        . . . . #
        # . # . #
        # . . . .
        . . # # .
        `)
    basic.showLeds(`
        # # . . #
        . . . . #
        . . # . .
        # . . . .
        # . . # #
        `)
})
input.onButtonPressed(Button.B, function () {
    wuKong.stopMotor(wuKong.MotorList.M1)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
