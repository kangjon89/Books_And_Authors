import { Component, OnInit } from "@angular/core";
import { HttpService } from "./http.service";
@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  // allAuthors: any;
  // newAuthor: any;
  // constructor(private _httpService: HttpService) {}
  // ngOnInit() {
  //   this.allAuthors = [];
  //   this.newAuthor = {};
  //   this.getAllAuthors();
  // }
  // ngOnChanges() {
  //   this.getAllAuthors();
  // }
  // getAllAuthors(): void {
  //   let obs = this._httpService.getAuthors();
  //   obs.subscribe((data: any) => {
  //     this.allAuthors = data.results;
  //   });
  // }
  // deleteAuthor(id): void {
  //   console.log(id);
  //   this._httpService.deleteAuthor(id);
  //   // this.getAllAuthors();
  // }
}
