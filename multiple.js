Object.prototype.classes = [];
Object.prototype.instanceof = function(_class) {
    if( this.classes.indexOf(_class) !== -1 ) {
        return true;
    }
    return this instanceof _class;
}
Object.extends = function (...classes) {
    let newClass = class {};
    for( let _class of classes) {
        // add class to the register class
        //check if the class is already in the register
        if( this.classes.indexOf(_class) === -1) {
            this.classes.push(_class );
        }

        let instance = new _class();
        let methods = Object.getOwnPropertyNames(Object.getPrototypeOf(instance))
            .filter(m => 'function' === typeof instance[m])
        for(let method of methods) {
            //add the method to the class
            newClass.prototype[method] = instance[method];
        }
        for(let property in instance) {
            //add the property to the class
            this[property] = instance[property];
            newClass.prototype[property] = instance[property];
        }
    }
    return newClass;
}
