let x = 0
DFRobotColorDisplayScreen.showColor(0x00ff00)
DFRobotColorDisplayScreen.ShowString("DFRobot", 0, 0)
basic.forever(function () {
    DFRobotColorDisplayScreen.ShowNumber(x, 0, 2)
    basic.pause(1000)
    x += 1
    DFRobotColorDisplayScreen.clear(clearScreen.SECOND_LINE)
})
