import { Component, OnInit } from '@angular/core';
import { DataService } from 'app/data.service';
import {character} from 'app/character.model'
@Component({
  selector: 'app-messsage',
  templateUrl: './messsage.component.html',
  styleUrls: ['./messsage.component.css']
})
export class MesssageComponent implements OnInit {

  constructor(private dataserice:DataService) { }

  users :character 
  ngOnInit() {
  
  }
  get(){
    //this.data= this.dataservice.getData();
    this.users= this.dataserice.getCharacterList()
      }
}
