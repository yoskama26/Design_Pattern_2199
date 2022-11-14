export interface IObserver{
    update(data: Map<string, string>);
}


export class EventManager{
    private static instance: EventManager;
    private subscribers : Record<string, IObserver[]>;


    private constructor(){
        this.subscribers = {};
    }

    public static getInstance(): EventManager{
        if(!EventManager.instance){
            EventManager.instance = new EventManager;
        }
        return EventManager.instance;
    }

    on(event: string, observable: IObserver){
        if(!this.subscribers[event]) this.subscribers[event] = [];
        this.subscribers[event].push(observable);
    }

    emit(event: string, data: Map<string, string>){
        this.subscribers[event]?.forEach((observable) => observable.update(data));
    }

}


