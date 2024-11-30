import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  onDeleteID: EventEmitter<string>= new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name:'trunks',
    power:10,
    id:"",
  }]


  onDeletCharacter(id?:string):void{

    if(!id) return;

    this.onDeleteID.emit(id);
  
  }
}
