import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { AppComponent } from "../app.component";
@Component({
  selector: "app-edit",
  templateUrl: "./new.component.html",
  styleUrls: ["./new.component.css"]
})
export class NewComponent implements OnInit {
  oneAuthor: any;
  addedAuthor: any;
  routeId: any;
  app: AppComponent;
  errorMessage: string;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.oneAuthor = { name: "" };
    this.addedAuthor = { name: "" };
    this.errorMessage = null;
  }
  createAuthor(author: string): void {
    console.log(author);
    let obs = this._httpService.addAuthor(author);

    obs.subscribe((data: any) => {
      if (data.message == "success") {
        this.addedAuthor = data.results;
        this.errorMessage = data.message;
      } else {
        this.errorMessage = "Name must be more than 3 characters";
      }
    });
    // this.app.getAllAuthors();
  }
}
