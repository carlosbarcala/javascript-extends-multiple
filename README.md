# javascript-extends-multiple
The code extends multiple classes in JavaScript by creating a new class that combines the properties and methods of the given classes


## how to use
```javascript
class GameObject {
    enable = true;  
}
class Sprite extends GameObject {
    resource = null;
}

class Character extends Object.extends(GameObject, Sprite) {
    name = 'Character';
}

class Spatial3D {
    position = new Vector3D();
    velocity = new Vector3D();
    acceleration = new Vector3D();
    update() {
    }
}

class Spatial2D {
    position = new Vector2D();
    velocity = new Vector2D();
    acceleration = new Vector2D();
    update() {
    }
}

class Character2D extends Object.extends( Spatial2D, Character ) {
    position = new Vector2D();
    velocity = new Vector2D();
    acceleration = new Vector2D();
    update() {
    }
}

class Character3D extends Object.extends( Spatial3D, Character ) {
    position = new Vector3D();
    velocity = new Vector3D();
    acceleration = new Vector3D();
    update() {
    }
}

let sprite = new Sprite();
let character = new Character();
let character2D = new Character2D();
let character3D = new Character3D();

console.log( sprite.instanceof( GameObject ) );
console.log( character.instanceof(Character) );
console.log( character2D.instanceof(Character) );
console.log( character3D.instanceof(Character) );
```



