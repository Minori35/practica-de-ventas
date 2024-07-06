import { Component } from '@angular/core';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
})
export class LoadingComponent {

  public loading = false;

  constructor(public loadingService: LoadingService) { 
    this.loadingService.showLoading.subscribe(
      (show: boolean)  => this.loading = show
    );
  }

}
