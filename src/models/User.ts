import { Model } from './Model';
import { ApiSync } from './ApiSync';
import { Attributes } from './Attributes';
import { Eventings } from './Eventings';

export interface UserProps {
    id?: number;
    name?: string;
    age?: number
}

const rootUrl = 'http://localhost:3000/users';

export class User extends Model<UserProps> {
    static buildUser(data: UserProps): User {
        return new User(
            new Eventings(),
            new ApiSync<UserProps>(rootUrl),
            new Attributes<UserProps>(data)
        )
    }
}