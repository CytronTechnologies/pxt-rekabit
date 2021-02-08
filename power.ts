/*******************************************************************************
 * Functions for REKA:BIT power supply.
 *
 * Company: Cytron Technologies Sdn Bhd
 * Website: http://www.cytron.io
 * Email:   support@cytron.io
 *******************************************************************************/

namespace rekabit {
    /**
     * Return true if power is on.
     */
    //% weight=20
    //% blockGap=8
    //% blockId=rekabit_is_power_on
    //% block="power on"
    //% blockHidden=true
    export function isPowerOn(): boolean {
        if (rekabit.i2cRead(REG_ADD_PWR_STATE) != 0) {
            return true;
        }
        else {
            return false;
        }
    }



    /**
     * Return true if low batt.
     */
    //% weight=19
    //% blockGap=8
    //% blockId=rekabit_is_low_batt
    //% block="low batt"
    //% blockHidden=true
    export function isLowBatt(): boolean {
        if (rekabit.i2cRead(REG_ADD_LB_STATE) != 0) {
            return true;
        }
        else {
            return false;
        }
    }



    /**
     * Return true if overvoltage.
     */
    //% weight=18
    //% blockGap=40
    //% blockId=rekabit_is_overvoltage
    //% block="overvoltage"
    //% blockHidden=true
    export function isOvervoltage(): boolean {
        if (rekabit.i2cRead(REG_ADD_OV_STATE) != 0) {
            return true;
        }
        else {
            return false;
        }
    }



    /**
     * Return power input voltage.
     */
    //% weight=17
    //% blockGap=8
    //% blockId=rekabit_read_vin
    //% block="power input voltage"
    //% blockHidden=true
    export function readVin(): number {
        return (rekabit.i2cRead(REG_ADD_VIN) / 10);
    }
}
