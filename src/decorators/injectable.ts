

export function Injectable(): ClassDecorator {

    return function(target: any): any {
        console.log(target);
        
    }
}
