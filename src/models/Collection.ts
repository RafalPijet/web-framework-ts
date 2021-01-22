import axios, { AxiosResponse } from 'axios'
import { Eventings } from './Eventings';

export class Collection<T, K> {
    models: T[] = [];
    events: Eventings = new Eventings();

    constructor(
        public rootUrl: string,
        public deserialize: (json: K) => T
    ) { }

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch() {
        axios.get(this.rootUrl).then((response: AxiosResponse) => {
            response.data.forEach((value: K) => {
                this.models.push(this.deserialize(value));
            })
        })
        this.trigger('change');
    }
} 