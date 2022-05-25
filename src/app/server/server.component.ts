import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
    username: string = ' ';
    isValid: boolean = false
    
    validateUsername(event: Event){
        this.username = (<HTMLInputElement>event.target).value
        if (this.username != ' '){
            return this.isValid = true
        }
        else{
            return this.isValid = false
        }
    }
}