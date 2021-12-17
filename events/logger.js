EventEmmiter = require('events');

class Logger extends EventEmmiter{

    customerUpdateEmit() {
        this.emit('customer_updated');
    }

}


module.exports = Logger;