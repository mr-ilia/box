while True:
    brightness = input.light_level()
    if brightness >= 80:
        basic.show_icon(IconNames.NO, 0)
    else:
        basic.clear_screen()
    basic.pause(100)
