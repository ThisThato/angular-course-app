import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

  newServerName: string = '';
  newServerContent: string = '';
  //finding html input reference
  @ViewChild('serverContentInput') serverContentInput: ElementRef;

  //component communication
  @Output() serverCreated = new EventEmitter<{ serverName: string, serverContent: string }>();
  @Output() blueprintCreated = new EventEmitter<{ serverName: string, serverContent: string }>();


  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverNameInput) {
    this.serverCreated.emit({ serverName: serverNameInput.value, serverContent: this.serverContentInput.nativeElement.value })
  }

  onAddBlueprint(serverNameInput) {
    this.blueprintCreated.emit({ serverName: serverNameInput.value, serverContent: this.serverContentInput.nativeElement.value })
  }

}
