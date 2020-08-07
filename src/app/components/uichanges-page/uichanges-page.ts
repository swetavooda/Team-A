import { Component,OnInit ,Inject} from '@angular/core';
import { ButtonService } from '../services/button.service';
import { Button } from '../shared/button';

@Component({
    selector: "uichanges-page",
    templateUrl: "uichanges-page.html",
    moduleId: module.id,
})
export class uichangespage{
    
    public static numberOfButtons: number;
    buttons: Button[];
    errMess: string;
    public myImage="";

    constructor(private buttonService: ButtonService,
        @Inject('baseURL') private baseURL) {
            this.buttonService.getButtons()
            .subscribe(buttons => this.buttons = buttons,
              errmess => this.errMess = <any>errmess);
              }
    
    
    refresh()
    {
        this.buttonService.getButtons()
      .subscribe(buttons => this.buttons = buttons,
        errmess => this.errMess = <any>errmess);
        
    } 

}

