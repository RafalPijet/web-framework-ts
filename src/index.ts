import { Eventings } from './models/Eventings';
import { User } from './models/User';

// const user = new User({ name: "Kratos", age: 30 });
const user = User.buildUser({ name: "Wow", age: 45 })
user.save();
console.log(user.get('name'));

// console.log(user.get('name'));
// user.save();