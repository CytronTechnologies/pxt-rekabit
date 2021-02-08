/**
 * Board initialization and helper function.
 */

// I2C slave address for PIC16F1827.
const I2C_ADDRESS = 0x08;

// Register address.
const REG_ADD_REVISION = 0;
const REG_ADD_SERVO_1 = 1;
const REG_ADD_SERVO_2 = 2;
const REG_ADD_SERVO_3 = 3;
const REG_ADD_SERVO_4 = 4;
const REG_ADD_M1A = 5;
const REG_ADD_M1B = 6;
const REG_ADD_M2A = 7;
const REG_ADD_M2B = 8;
const REG_ADD_LB_UTH = 9;
const REG_ADD_LB_LTH = 10;
const REG_ADD_OV_TH = 11;
const REG_ADD_VIN = 12;
const REG_ADD_PWR_STATE = 13;
const REG_ADD_LB_STATE = 14;
const REG_ADD_OV_STATE = 15;



/**
 * Blocks for REKA:BIT servos and motors driver.
 */
//% weight=10 color=#ff8000 icon="\uf085" block="REKA:BIT"
//% groups=['DC Motors', 'Servos', 'RGB LED']
namespace rekabit {
    // Brake the motors.
    brakeMotor(MotorChannel.M1);
    brakeMotor(MotorChannel.M2);

    // Disable the servos.
    disableServo(ServoChannel.S1);
    disableServo(ServoChannel.S2);
    disableServo(ServoChannel.S3);
    disableServo(ServoChannel.S4);



    // Background function to monitor the power switch and reset microbit when power cycled.
    let oldPowerState = isPowerOn();
    control.inBackground(function () {
        while (true) {
            if (isPowerOn()) {
                if (oldPowerState == false) {
                    control.reset();
                }
                oldPowerState = true;
            } else {
                oldPowerState = false;
            }

            basic.pause(200);
        }
    })



    /**
     * Limit the range of a number.
     * @param value The number we want to limit.
     * @param min Minimum value of the number.
     * @param max Maximum value of the number.
     */
    //% blockHidden=true
    //% blockId=rekabit_limit
    export function limit(value: number, min: number, max: number): number {
        if (value < min) {
            value = min;
        }
        else if (value > max) {
            value = max;
        }
        return value;
    }



    /**
     * I2C read from the register of PIC16F1827.
     * @param register Register address.
     */
    //% blockHidden=true
    //% blockId=rekabit_i2c_read
    export function i2cRead(register: number): number {
        let value = 0;
        pins.i2cWriteNumber(I2C_ADDRESS, register, NumberFormat.UInt8LE, true);
        value = pins.i2cReadNumber(I2C_ADDRESS, NumberFormat.UInt8LE);
        return value;
    }



    /**
     * I2C write to the register of PIC16F1827.
     * @param register Register address.
     * @param data Data to write.
     */
    //% blockHidden=true
    //% blockId=rekabit_i2c_write
    export function i2cWrite(register: number, data: number): void {
        let buffer = pins.createBuffer(2);
        buffer[0] = register;
        buffer[1] = data;
        pins.i2cWriteBuffer(I2C_ADDRESS, buffer);
    }

}