export class InjectorToken {
    token!: Symbol;
    constructor(private _description: string) {
        this.token = Symbol.for(this._description);
    }
}