import { Component, signal,computed, inject, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DatePipe, CurrencyPipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('internationalization-i18n');
  protected readonly today = new Date();
  protected readonly amount = 1234.56;
  protected readonly localeId = inject(LOCALE_ID);

  minutes = 0;
  gender = 'female';
  fly = true;
  logo = '${thus.baseHref}assets/angular-logo.png';
  readonly toggle = signal(false);
  readonly toggleAriaLabel = computed(() => {
    return this.toggle()
      ? $localize`:Toggle Button|A button to toggle status: Show`
      : $localize`:Toggle Button|A button to toggle status: Hide`;
  });

  inc(i: number) {
    this.minutes = Math.min(5, Math.max(0, this.minutes + i));
  }
  male() {
    this.gender = 'male';
  }
  female() {
    this.gender = 'female';
  }
  other() {
    this.gender = 'other';
  }
  toggleDisplay() {
    this.toggle.update((toggle) => !toggle);
  }
}
