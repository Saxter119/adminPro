import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-incrementor-bar',
  templateUrl: './incrementor-bar.component.html',
  styles: [
  ]
})
export class IncrementorBarComponent implements OnInit {

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`
  }

  @Input()
  public progress: number = 25

  @Input()
  btnClass: string = 'btn-primary'

  @Output()
  public emitProgressPercent: EventEmitter<number> = new EventEmitter<number>()

  changeValue(value: number) {

    if (this.progress >= 100 && value > 0) {
      this.emitProgressPercent.emit(100)
      return this.progress = 100
    }

    if (this.progress <= 0 && value < 0) {
      this.emitProgressPercent.emit(0)
      return this.progress = 0
    }

    this.progress = this.progress + value
    this.emitProgressPercent.emit(this.progress)
  }

  onChange(newValue: number) {
    if (newValue >= 100) {
      this.progress = 100
    }else if(newValue <= 0){
      this.progress = 0
    }else{
      this.progress = newValue
    }

    this.emitProgressPercent.emit(newValue)
  }

}
