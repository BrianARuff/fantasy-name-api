interface FantasyNameInterface {
  vowels: string,
  consonants: string,
  new_name: string[]
}

// @ts-ignore
class FantasyName implements FantasyNameInterface {
  vowels: string;
  consonants: string;
  new_name: string[];

  constructor() {
    this.vowels = "aeiou";
    this.consonants = "bcdfghjklmnpqrstvwxyz";
    this.new_name = [];
  }

  private getConsonant() {
    return this.consonants[(Math.floor(Math.random() * this.consonants.length))];
  }

  private getVowel() {
    return this.vowels[Math.floor(Math.random() * this.vowels.length)];
  }

  getName(len: number) {
    if (!len) {
      len = 4;
    }
    for (let i = 0; i < len; i++) {
      if (i === 0) {
        this.new_name.push(this.getConsonant())
      } else if (i % 2 === 0 || i % 5 === 0) {
        this.new_name.push(this.getConsonant());
      } else {
        this.new_name.push(this.getVowel());
      }
    }
    return this.new_name.join("");
  }
}

module.exports = FantasyName;