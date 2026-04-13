import { inject, Injectable } from '@angular/core';
import { HotToastService } from '@ngxpert/hot-toast';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private toast = inject(HotToastService);

  info(text: string) {
    this.toast.info(text, { duration: 2000 });
  }
}
