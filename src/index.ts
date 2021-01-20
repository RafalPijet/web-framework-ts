import { Eventings } from './models/Eventings';
import { User } from './models/User';

const user = new User({ name: "Lopez", age: 30 });

console.log(user.get('name'));

user.on('click', () => console.log('Click function'));
user.set({ name: "Kratos" });