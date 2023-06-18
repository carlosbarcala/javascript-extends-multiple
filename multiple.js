Object.defineProperty(Object , 'classes', {
    enumerable: false ,
    value: []
  });
  
Object.defineProperty(Object.prototype, 'instanceof', {
    enumerable: false,
    value: function(_class) {
        if ( this.constructor.classes )
            if( this.constructor.classes.indexOf(_class) !== -1 )
                return true;
        return this instanceof _class;
    },
});

Object.extends = function (...classes) {
    let newClass = class {};
    let first = classes[0];
    let instance;
    if ( typeof first == 'object' )
        classes.shift();

    if ( classes.length == 0 ) {
        throw 'Don\'t have a classes';
        return;
    }

    newClass.classes = [];

    if ( typeof first == 'object' ) {
        if ( first.constructor.classes  )
            newClass.classes = first.constructor.classes.slice();
    }

    for( let _class of classes ) {

        if ( typeof _class == 'undefined' ) {
            throw 'Don\'t have a class';
            return;
        }

        instance = new _class();

        if ( instance.constructor.classes  )
            newClass.classes.push( ...instance.constructor.classes );

        if ( typeof first == 'object' ) {
            if ( newClass.classes.indexOf(_class) === -1 )
                newClass.classes.push(_class );

            let methods = Object.getOwnPropertyNames(Object.getPrototypeOf(instance))
                .filter(m => 'function' === typeof instance[m])
            for(let method of methods) {
                //add the method to the class
                if ( method != 'constructor' )
                    first[ method ] = instance[ method ];
            }
            for(let property in instance) {
                // add the property to the class
                first[ property ] = instance[ property ];
            }

            first.constructor = newClass;

        } else {

            if ( newClass.classes.indexOf(_class) === -1 )
                newClass.classes.push(_class );

            let methods = Object.getOwnPropertyNames(Object.getPrototypeOf(instance))
                .filter(m => 'function' === typeof instance[m])
            for(let method of methods) { 
                //add the method to the class
                if ( method != 'constructor' )
                    newClass.prototype[method] = instance[method];
            }
            for(let property in instance) {
                // add the property to the class
                newClass.prototype[property] = instance[property];
            }
        }
    }
    return newClass;
}