light.setBrightness(100)
while (true) {
    light.setPixelColor(0, light.rgb(200, 100, 0))
    pause(300)
    light.setPixelColor(0, light.rgb(0, 0, 0))
    light.setPixelColor(1, light.rgb(100, 100, 0))
    pause(300)
    light.setPixelColor(1, light.rgb(0, 0, 0))
    light.setPixelColor(2, light.rgb(0, 100, 20))
    pause(300)
    light.setPixelColor(2, light.rgb(0, 0, 0))
    light.setPixelColor(3, light.rgb(0, 255, 0))
    pause(300)
    light.setPixelColor(3, light.rgb(0, 0, 0))
    light.setPixelColor(4, light.rgb(0, 200, 255))
    pause(300)
    light.setPixelColor(4, light.rgb(0, 0, 0))
    light.setPixelColor(5, light.rgb(0, 100, 255))
    pause(300)
    light.setPixelColor(5, light.rgb(0, 0, 0))
    light.setPixelColor(6, light.rgb(0, 50, 255))
    pause(300)
    light.setPixelColor(6, light.rgb(0, 0, 0))
    light.setPixelColor(7, light.rgb(0, 0, 255))
    pause(300)
    light.setPixelColor(7, light.rgb(0, 0, 0))
    light.setPixelColor(8, light.rgb(255, 0, 255))
    pause(300)
    light.setPixelColor(8, light.rgb(0, 0, 0))
    light.setPixelColor(9, light.rgb(255, 0, 0))
    pause(300)
    light.clear()
}
