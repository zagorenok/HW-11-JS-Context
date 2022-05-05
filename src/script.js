var name = 'Vic 2';
var user = {
  age: 5,
  name: 'Vic',
  getName: function() {
    return this.name;
  }
};

const getName = user.getName;
console.log(getName.call(user));


const user1 = {
  age: 5,
  name: 'Vic',
  getName: function() {
    return this.name;
  }
};
const user2 = {
  name: 'Arni',
}

const getName2 = user1.getName;
console.log(getName2.bind(user2)());
