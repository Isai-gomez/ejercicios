export function validatePIN (pin) {
    const isnumber = new RegExp(/^[0-9]*$/)
    const result = isnumber.test(pin)
    // evaluate and return true or false
    if(result){

        return (pin.length===6 || pin.length===4)?true:false;
    }
    return false
    ;
}
