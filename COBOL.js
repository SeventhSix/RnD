// ==================================================================================================================================

let COBOLMessageDataType = {
	/**
	 * This can be seen as a normal string
	 */
	STRING : 1,
	/**
	 * This can be seen as a int or long depending on the length of the field
	 */
	INTEGER : 2,
	/**
	 * This is a date format coming in from COBOL as 21022012
	 */
	DATE_DDMMYYYY : 3,
	/**
	 * This is a date format coming in from COBOL as 20120612
	 */
	DATE_YYYYMMDD : 4,
	/**
	 * This is a date format coming in from COBOL as 21/02/2012
	 */
	DATE_DDSMMSYYYY : 5,
	/**
	 * This is a date format coming in from COBOL as 210212
	 */
	DATE_DDMMYY : 6,
	/**
	 * S=Scale (i.e. no decimal point)<br/>
	 * This should now be look at as having a decimal.
	 * 
	 * Example: <br/>
	 * <code>00000 = 0000.0</code>
	 */
	DECIMAL_S2 : 7,
	/**
	 * S=Scale (i.e. no decimal point)<br/>
	 * This should now be look at as having a decimal.
	 * 
	 * Example: <br/>
	 * <code>00000 = 000.00</code><br/>
	 * <code>PIC S9(14)V999 </code>
	 */
	DECIMAL_S3 : 8,
	/**
	 * S=Scale (i.e. no decimal point)<br/>
	 * This should now be look at as having a decimal.
	 * 
	 * Example: <br/>
	 * <code>00000 = 000.00</code><br/>
	 * <code>PIC S9(14)V9(4) </code>
	 */
	DECIMAL_S4 : 9,
	/**
	 * This value contains a decimal point that is from the 5th char<br/>
	 * Example:<br/>
	 * <code>000000.0</code>
	 */
	DECIMAL_P2 : 10,
	/**
	 * This value contains a decimal point that is from the 5th char<br/>
	 * Example:<br/>
	 * <code>00000.00</code>
	 */
	DECIMAL_P3 : 11,
	/**
	 * This value contains a decimal point that is from the 5th char<br/>
	 * Example:<br/>
	 * <code>0000.000</code>
	 */
	DECIMAL_P4 : 12,
	/**
	 * This value contains a decimal point that is from the 5th char<br/>
	 * Example:<br/>
	 * <code>000.0000</code>
	 */
	DECIMAL_P5 : 13,
	/**
	 * This will check for the check digit "<code>-</code>" in the returned value and remove it.
	 */
	INTEGER_CHECK_DIGIT : 14,
	/**
	 * This will remove the check digit when a account is sent to COBOL. When a account comes from COBOL it will not remove anything.
	 */
    INTEGER_REMOVE_CHECK_DIGIT : 15
}

// ==================================================================================================================================

// This class handles the building of the actual flat structure COBOL message compatibile with the generic AMQ SOAP call

class COBOLAMQInputMessage {
    constructor(name) {
        this.name = name;
    }

    sayHi(name) {
        let surname = name;
        console.log("My name is: " + this.name + " " + surname);
    };
}

// ==================================================================================================================================

let current = COBOLMessageDataType.DATE_DDSMMSYYYY;
if(current == COBOLMessageDataType.DECIMAL_S4) {
    console.log("DECIMAL_S4 [" + current + "]");
}
else {
    console.log("NOT DECIMAL_S4 [" + current + "]");
}
