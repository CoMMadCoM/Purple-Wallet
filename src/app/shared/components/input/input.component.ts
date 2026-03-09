import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input', // селектор используется в качестве html тега
  // в родительском компоненте для обозначения места вызова
  templateUrl: './input.component.html', // подключения html шаблона
  // компонента кнопки
  styleUrls: ['./input.component.scss'], // подключение стилей
  // компонента кнопки
  standalone: true,
  imports: [FormsModule],
})
export class InputComponent {
  @Input() type: 'text' | 'email' = 'text';
  @Input() placeholder = 'Email';
  @Input() disabled = false;
  @Input() iconURL: string | null = null;
  @Input() value: string | null = null;
  @Output() controlValue = new EventEmitter<string | null>();

  onInput(value: string | null): void {
    this.controlValue.emit(value);
  }
}
