let brightness: number;
while (true) {
    brightness = input.lightLevel()
    if (brightness >= 80) {
        basic.showIcon(IconNames.No, 0)
    } else {
        basic.clearScreen()
    }
    
    basic.pause(100)
}
