// tests go here; this will not be compiled when this package is used as a library

// Loop forever.
basic.forever(function () {
    // Plot the power input voltage on 4th row LED 1.
    if (rekabit.readVin() > 4.0) {
        led.plot(0, 3);
    } else {
        led.unplot(0, 3);
    }

    // Plot the power state on 4th row LED 2.
    if (rekabit.isPowerOn()) {
        led.plot(1, 3);
    } else {
        led.unplot(1, 3);
    }

    // Plot the low batt state on 4th row LED 3.
    if (rekabit.isLowBatt()) {
        led.plot(2, 3);
    } else {
        led.unplot(2, 3);
    }

    // Plot the overvoltage state on 4th row LED 4.
    if (rekabit.isOvervoltage()) {
        led.plot(3, 3);
    } else {
        led.unplot(3, 3);
    }



    // Show red color on all RGB pixels.
    rekabit.setAllRgbPixelsColor(0xff0000)
    basic.pause(1000)

    // Show different color on each RGB pixels.
    rekabit.setRgbPixelColor(0, 0xff0000)
    rekabit.setRgbPixelColor(1, 0x00ff00)
    basic.pause(1000)

    // Change the brightness to 100% and show rainbow color.
    rekabit.setRgbBrightness(255)
    basic.pause(1000)

    // Clear all RGB pixels.
    rekabit.clearAllRgbPixels()



    // Run Motor 1 forward at 50% speed for 1 second.
    rekabit.runMotor(MotorChannel.M1, MotorDirection.Forward, 127)
    basic.pause(1000)
    rekabit.brakeMotor(MotorChannel.M1)

    // Run Motor 2 backward at 100% speed for 1 second.
    rekabit.runMotor(MotorChannel.M2, MotorDirection.Backward, 255)
    basic.pause(1000)
    rekabit.brakeMotor(MotorChannel.M2)



    // Move Servo 1 to 0 degree.
    rekabit.setServoPosition(ServoChannel.S1, 0)
    basic.pause(1000)

    // Disable Servo 1.
    rekabit.disableServo(ServoChannel.S1)



    // Move Servo 2 to 180 degrees.
    rekabit.setServoPosition(ServoChannel.S2, 180)
    basic.pause(1000)

    // Disable Servo 2.
    rekabit.disableServo(ServoChannel.S2)



    // Move Servo 3 to 0 degree.
    rekabit.setServoPosition(ServoChannel.S3, 0)
    basic.pause(1000)

    // Disable Servo 3.
    basic.pause(1000)
    rekabit.disableServo(ServoChannel.S3)
	
	
	
	// Move Servo 4 to 180 degree.
    rekabit.setServoPosition(ServoChannel.S4, 180)
    basic.pause(1000)

    // Disable Servo 4.
    basic.pause(1000)
    rekabit.disableServo(ServoChannel.S4)
})
