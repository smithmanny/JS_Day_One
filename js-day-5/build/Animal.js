'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Animal = exports.Animal = function () {
    function Animal(name, sound) {
        _classCallCheck(this, Animal);

        this._name = name;
        this._sound = sound;
    }

    _createClass(Animal, [{
        key: 'makeSound',
        value: function makeSound() {
            console.log(this._sound);
        }
    }, {
        key: 'name',
        get: function get() {
            return this._name;
        },
        set: function set(name) {
            this._name = name;
        }
    }, {
        key: 'sound',
        get: function get() {
            return this._sound;
        },
        set: function set(sound) {
            this._sound = sound;
        }
    }]);

    return Animal;
}();

var Dog = exports.Dog = function (_Animal) {
    _inherits(Dog, _Animal);

    function Dog(name, sound) {
        _classCallCheck(this, Dog);

        return _possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this, name, sound = 'Bark'));
    }

    return Dog;
}(Animal);

var Cat = exports.Cat = function (_Animal2) {
    _inherits(Cat, _Animal2);

    function Cat(name, sound) {
        _classCallCheck(this, Cat);

        return _possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this, name, sound = 'Meow'));
    }

    return Cat;
}(Animal);

var Cow = exports.Cow = function (_Animal3) {
    _inherits(Cow, _Animal3);

    function Cow(name, sound) {
        _classCallCheck(this, Cow);

        return _possibleConstructorReturn(this, (Cow.__proto__ || Object.getPrototypeOf(Cow)).call(this, name, sound = 'Moo'));
    }

    return Cow;
}(Animal);