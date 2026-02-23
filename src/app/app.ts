import { Component, signal } from '@angular/core';
import { ButtonComponent } from './shared/components/button/button.component';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Purple-Wallet');
}
