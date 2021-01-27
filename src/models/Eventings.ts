import { Events } from './Model';

type Callback = () => void;

export class Eventings implements Events {
    events: { [key: string]: Callback[] } = {};

    on = (eventName: string, callback: Callback): void => {
        const handlers = this.events[eventName] || [];
        handlers.push(callback);
        this.events[eventName] = handlers;
    }

    trigger = (eventName: string): void => {
        const handlers = this.events[eventName];

        if (!handlers || handlers.length === 0) return
        handlers.forEach(callback => callback());
    }
}