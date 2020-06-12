import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { AppComponent } from "../app.component";
@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  oneAuthor: any;
  editedAuthor: any;
  routeId: any;
  app: AppComponent;
  constructor(
    private _httpService: HttpService,
    private _route: ActivatedRoute,
    private _router: Router
  ) {}

  ngOnInit() {
    this.oneAuthor = { name: "" };
    this.editedAuthor = { name: "" };
    this._route.params.subscribe((params: Params) => {
      console.log(params["id"]);
      this.routeId = params["id"];
      this.getOneAuthor();
    });
  }
  getOneAuthor(): void {
    let obs = this._httpService.getOneAuthor(this.routeId);
    obs.subscribe((data: any) => {
      console.log(data);
      this.oneAuthor = data.results;
      this.editedAuthor = data.results;
    });
  }
  editAuthor(author: string): void {
    let obs = this._httpService.updateAuthor(author, this.routeId);
    obs.subscribe((data: any) => {
      this.editedAuthor = data.results;
      this.goHome();
    });
    // this.app.getAllAuthors();
  }

  cancel(): void {
    this.editedAuthor = { name: "" };
  }

  goHome(): void {
    this._router.navigate(["/"]);
  }
}
