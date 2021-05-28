import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { AlertService } from 'src/app/services/alert.service';

@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html'
})

export class AlertComponent implements OnInit, OnDestroy {
    private subscription: Subscription;
    message: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        console.log('alert message');
        this.subscription = this.alertService.getMessage().subscribe(message => { 
            this.message = message; 
            console.log('alert message',this.message);
            
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}