import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{ type: "server", name: "Testserver", content: "Initial test server" }];


  onServerAdded(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(blueprintData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.serverContent
    });
  }

  //- lect 78
  //onChange method in server-element.ts
  onChangeFirst() {
    this.serverElements[0].name = "Changed!";
  }

  //- lect 78
  onDestoryFirst() {
    this.serverElements.splice(0, 1)
  }

}
