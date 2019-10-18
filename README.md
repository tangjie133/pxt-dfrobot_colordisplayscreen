
# i2cLCD1602

makecode I2C LCD1602 package for micro:bit  

Author: tangjie  
Date:   2019.October  
  

## Add extension

open your microbit makecode project, in Extension, paste  
(https://github.com/tangjie133/pxt-rgb_lcd
to search box then search.
Get the module here  
http://www.dfrobot.com.cn/goods-1727.html
## Basic usage

```
let x = 0
RGB_LCD.showColor(0x00ff00)
RGB_LCD.ShowString("DFRobot", 0, 0)
basic.forever(function () {
    RGB_LCD.ShowNumber(x, 0, 2)
    basic.pause(1000)
    x += 1
    RGB_LCD.clear(clear.block2)
})
```


## API

- ShowNumber(n: number, x: number, y: number)  
show a number in LCD at given position.  
n: number will be show  
x: is LCD column position, [0 - 15]  
y: is LCD row position, [0 - 1]  

- ShowString(s: string, x: number, y: number)  
show a string in LCD at given position.  
s: string will be show  
x: is LCD column position, [0 - 15]  
y: is LCD row position, [0 - 1]  
  
- clear(c: clear)  
clear LCD content  

- clear1(y: number, s: number, x: number)
Remove content specified location

- RGB(R: number, G: number, B: number) 
Set the RGB

- showColor(rgb: number)
Set screen color


## License

MIT

Copyright (c) 2018, microbit/micropython Chinese community  


## Supported targets

* for PXT/microbit
(The metadata above is needed for package search.)
