import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})


export class ServerElementComponent implements
  OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewChecked, OnDestroy {

  //property binding
  @Input('srvElement') element: {
    type: string,
    name: string,
    content: string
  };


  //onChange method implementation - lect 78
  //changed in app-component ts - onChangeFirst()
  @Input() name: string;

  constructor() {
    console.log("constructor called...")
  }

  //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
  //Add '${implements OnChanges}' to the class.
  //- lect 78
  ngOnChanges(changes: SimpleChanges): void {
    console.log("on Changes called...")
  }

  //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
  //Add 'implements DoCheck' to the class.
  //- lect 78
  ngDoCheck() {
    console.log("do check called...")
  }

  ngOnInit(): void {
    console.log("on Init called...")
  }

  //Called after ngOnInit when the component's or directive's content has been initialized.
  //Add 'implements AfterContentInit' to the class.
  //- lect 78
  ngAfterContentInit(): void {
    console.log("After content init called...")
  }

  //Called after every check of the component's or directive's content.
  //Add 'implements AfterContentChecked' to the class.
  //- lect 78
  ngAfterContentChecked(): void {
    console.log("After content checked called...")
  }

  //Called after every check of the component's view. Applies to components only.
  //Add 'implements AfterViewChecked' to the class.
  //- lect 78
  ngAfterViewChecked(): void {
    console.log("After view checked called...")
  }

  //Called once, before the instance is destroyed.
  //Add 'implements OnDestroy' to the class.
  //- lect 78
  ngOnDestroy(): void {
    console.log("On destory called...")

  }


}
