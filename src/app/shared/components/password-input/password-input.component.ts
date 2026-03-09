import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

export enum EPasswordInputIcons {
  Opened = 'icons/eye_opened.svg',
  Closed = 'icons/eye_closed.svg',
}

@Component({
  selector: 'app-password-input', // селектор используется в качестве html тега
  // в родительском компоненте для обозначения места вызова
  templateUrl: './password-input.component.html', // подключения html шаблона
  // компонента кнопки
  styleUrls: ['./password-input.component.scss'], // подключение стилей
  // компонента кнопки
  standalone: true,
  imports: [FormsModule, CommonModule],
})
export class PasswordInputComponent {
  @Input() type: 'text' | 'password' = 'password';
  @Input() placeholder = 'Password';
  @Input() disabled = false;
  @Input() iconURL: string | null = null;
  @Input() value: string | null = null;
  @Output() controlValue = new EventEmitter<string | null>();
  buttonIcon = EPasswordInputIcons.Closed;

  onInput(value: string | null): void {
    this.controlValue.emit(value);
  }

  onButtonToggleClick() {
    if (this.type === 'password') {
      this.type = 'text';
      this.buttonIcon = EPasswordInputIcons.Opened;
    } else {
      this.type = 'password';
      this.buttonIcon = EPasswordInputIcons.Closed;
    }
  }
}
