# REKA:BIT Extension for Microsoft MakeCode

This code provides the driver for [**REKA:BIT** - Simplifying robotics with micro:bit](https://www.cytron.io/p-rekabit-simplifying-robotics-with-microbit).

**REKA:BIT** aims at simplifying robots & projects making with micro:bit. With the built-in dual-channel DC motor driver, 4x servo control and dedicated power input, students can build projects with mechanical movements right away. The 6x Grove ports with LED status indicators on all its IO pins enable additional sensors and modules to be applied to any projects conveniently. REKA:BIT works with **micro:bit V1 & V2**.

'**REKA**' comes from the [*Malay*](https://en.wikipedia.org/wiki/Malay_language) word 'reka bentuk' which means design. 

Read more about REKA:BIT here: https://www.cytron.io/p-rekabit

![REKA:BIT](https://raw.githubusercontent.com/CytronTechnologies/pxt-rekabit/master/icon.png)

This is how you can add REKA:BIT extension to your MakeCode project.
![Adding Extension](https://raw.githubusercontent.com/CytronTechnologies/pxt-rekabit/master/rekabit-adding-extension.gif)

## DC Motors

Run Motor 1 forward at 50% speed when button A is pressed, brake the motor when button B is pressed.

```blocks
input.onButtonPressed(Button.A, function () {
    rekabit.runMotor(MotorChannel.M1, MotorDirection.Forward, 127)
})
input.onButtonPressed(Button.B, function () {
    rekabit.brakeMotor(MotorChannel.M1)
})
```

## Servos

Button A pressed - Rotate Servo 1 to 0 degree.
Button B pressed - Rotate Servo 1 to 180 degree.
Button A+B pressed - Disable Servo 1. No pulse is sent to Servo 1 and it can be rotated by hand.

```blocks
input.onButtonPressed(Button.A, function () {
    rekabit.setServoPosition(ServoChannel.S1, 0)
})
input.onButtonPressed(Button.B, function () {
    rekabit.setServoPosition(ServoChannel.S1, 180)
})
input.onButtonPressed(Button.AB, function () {
    rekabit.disableServo(ServoChannel.S1)
})
```

## RGB LEDs

Clear all RGB pixels.

```blocks
rekabit.clearAllRgbPixels()
```

Change the RGB pixels brightness to maximum.

```blocks
rekabit.setRgbBrightness(255)
```

Show color green on all RGB pixels and change the color one by one to red.

```blocks
rekabit.setAllRgbPixelsColor(0x00ff00)
basic.pause(1000)
rekabit.setRgbPixelColor(0, 0xff0000)
basic.pause(500)
rekabit.setRgbPixelColor(1, 0xff0000)
```

## Test Your REKA:BIT
REKA:BIT (with micro:bit) set is shipped with the default micro:bit out-of-the-box demo. If you wish to test the functionality of your REKA:BIT board, open and edit this [test program](https://makecode.microbit.org/_X6WCMYY2VWzK). Then upload it to your board.
>This test program contains Python code to manipulate the IO pins in a for-loop. You can view it in MakeCode Python mode. The code is compatible with micro:bit V1 & V2.
- **On startup**:
   - play _power up_ melody tune
   - perform a sequential LED lights (P9 LED will light up constantly on micro:bit V1 - it's shared with LED matrix)
- **Forever loop**:
   - RGB (Neopixel) LEDs perform color changing
- **Press micro:bit button A**:
   - light up all blue LEDs
   - run both DC motors in forward direction at 50% speed
   - move all servo motors to 0 degree
- **Press micro:bit button B**: 
   - turn off all blue LEDs (P9 LED will light up constantly on micro:bit V1 - it's shared with LED matrix)
   - run both DC motors in backward direction at 50% speed
   - move all servo motors to 180 degree
- **Press micro:bit button A + B**: 
   - stop both DC Motor 1 & 2
   - move all servo motors to 90 degree
- **Turn micro:bit/REKA:BIT upside down**: 
   - reset the board

REKA:BIT also comes with four DC motor quick test buttons. You may press the onboard M1A, M1B, M2A or M2B push buttons to run your DC motors without writing any code. This is very convenient for checking the DC motor connections and functionality.
  
  
## License  
MIT  
  
## Supported targets  
* for PXT/microbit  
  
  
  
> Open this page at [https://cytrontechnologies.github.io/pxt-rekabit/](https://cytrontechnologies.github.io/pxt-rekabit/)  
  
  
<script src="https://makecode.com/gh-pages-embed.js"></script><script>makeCodeRender("{{ site.makecode.home_url }}", "{{ site.github.owner_name }}/{{ site.github.repository_name }}");</script>  
