// @ts-ignore
var FantasyName = /** @class */ (function () {
    function FantasyName() {
        this.vowels = "aeiou";
        this.consonants = "bcdfghjklmnpqrstvwxyz";
        this.new_name = [];
    }
    FantasyName.prototype.getConsonant = function () {
        return this.consonants[(Math.floor(Math.random() * this.consonants.length))];
    };
    FantasyName.prototype.getVowel = function () {
        return this.vowels[Math.floor(Math.random() * this.vowels.length)];
    };
    FantasyName.prototype.getName = function (len) {
        if (!len) {
            len = 4;
        }
        for (var i = 0; i < len; i++) {
            if (i === 0) {
                this.new_name.push(this.getConsonant());
            }
            else if (i % 2 === 0 || i % 5 === 0) {
                this.new_name.push(this.getConsonant());
            }
            else {
                this.new_name.push(this.getVowel());
            }
        }
        return this.new_name.join("");
    };
    return FantasyName;
}());
module.exports = FantasyName;
