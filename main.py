light.set_brightness(100)
while True:
    light.set_pixel_color(0, light.rgb(200, 100, 0))
    light.set_pixel_color(1, light.rgb(100, 100, 0))
    light.set_pixel_color(2, light.rgb(0, 100, 20))
    light.set_pixel_color(3, light.rgb(0, 255, 0))
    light.set_pixel_color(4, light.rgb(0, 200, 255))
    light.set_pixel_color(5, light.rgb(0, 100, 255))
    light.set_pixel_color(6, light.rgb(0, 50, 255))
    light.set_pixel_color(7, light.rgb(0, 0, 255))
    light.set_pixel_color(8, light.rgb(255, 0, 255))
    light.set_pixel_color(9, light.rgb(255, 0, 0))
    pause(3000) #pauses for 3 seconds
    light.clear()
    pause(2000) #pauses for 2 seconds
    


