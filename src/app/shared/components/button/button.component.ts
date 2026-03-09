import {
  Component,
  Output,
  EventEmitter,
  ElementRef,
  ContentChild,
  AfterViewInit,
} from '@angular/core';

// Объявляем параметры компонента
@Component({
  selector: 'app-button', // селектор используется в качестве html тега
  // в родительском компоненте для обозначения места вызова
  templateUrl: './button.component.html', // подключения html шаблона
  // компонента кнопки
  styleUrls: ['./button.component.scss'], // подключение стилей
  // компонента кнопки
})

// Объявляем класс компонента кнопки
export class ButtonComponent implements AfterViewInit {
  @Output() btnClick = new EventEmitter<string>();
  @ContentChild('buttonContent') btnRef: ElementRef | undefined;

  // Объявляем метод который сработает в момент нажатия на кнопку
  onBtnClick(): void {
    this.btnClick.emit('Данные из дочернего компонента');
  }

  ngAfterViewInit(): void {
    console.log(this.btnRef);
  }
}
