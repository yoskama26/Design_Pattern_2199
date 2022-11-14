export class Yamato{
    private static instance: Yamato;


    name : string;
    components: Map<string, Object>;;
    shieldsOn: boolean;
    TirCannonDispo: number;

    private constructor(name: string, TirCannonRestant: number){
        this.name = name;
        this.shieldsOn = false;
        this.TirCannonDispo = TirCannonRestant;
        this.components = new Map<string, Object>();
    }

    public static getInstance(): Yamato{
        if(!Yamato.instance){
            console.log("Le Yamato n'est pas présent");
        }
        return Yamato.instance;
    }

    public static setInstance(name: string, TirCannonRestant: number): void{
        if(Yamato.instance){
            console.log("vous ne pouvez avoir qu'un seul Yamato présent a la fois");
        }
        Yamato.instance = new Yamato(name, TirCannonRestant);
    }
    
    public addComponent(componentName:string, component:object): void{
        this.components.set(componentName, component);
    }

    public cockpitMessage(message: string): void{
        console.log(this.name + " message : " + message);
    }

    shieldsSystem(){
        this.shieldsOn = !this.shieldsOn;
        if(this.shieldsOn == true){
            this.cockpitMessage(`Les boucliers sont activé`);
        }
        else{
            this.cockpitMessage(`Les bouclier sont désactivé`);
        } 
    }

    feuuuu(count: number){
        if(count > this.TirCannonDispo){
            this.cockpitMessage(`Le Cannon ne peux plus tirer (c'est la merde) : ${this.TirCannonDispo}`);
        }
        this.TirCannonDispo -= count;
        this.cockpitMessage(`${count} Tir de cannon éffectué, il en reste : ${this.TirCannonDispo}`);

        if(this.TirCannonDispo == 0){
            this.cockpitMessage(`Le nombre de tir disponible est a 0`);
        }
    }
}