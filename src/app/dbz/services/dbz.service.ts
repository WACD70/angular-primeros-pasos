import { Injectable } from "@angular/core";

import { v4 as uuid } from "uuid";

console.log(uuid())

import { Character } from "../interfaces/character.interface";

@Injectable({providedIn: 'root'})
export class DbzService{
    public characters: Character[] = [{
       id:uuid(),
        name:'krillin',
        power:1000,
       
      },{
        id:uuid(),
        name:'goku',
        power:9000,
        
      },{
        id:uuid(),
        name:'vegeta',
        power:7500,
       
      }];
    
      addCharacter(character:Character):void{
        character.id = uuid();
       this.characters.push(character)
       console.log("characters: ",this.characters)
      }
    
      onDeleteID(id:string){
        this.characters = this.characters.filter((el)=>{
           return el.id !== id;
        }) 
      
      }
    
}