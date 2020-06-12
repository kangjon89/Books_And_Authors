import { Component, OnInit } from "@angular/core";
import { HttpService } from "../http.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  allAuthors: any;
  newAuthor: any;
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.allAuthors = [];
    this.newAuthor = {};
    this.getAllAuthors();
  }

  ngOnChanges() {
    this.getAllAuthors();
  }
  getAllAuthors(): void {
    let obs = this._httpService.getAuthors();
    obs.subscribe((data: any) => {
      this.allAuthors = data.results;
    });
  }
  deleteAuthor(id): void {
    console.log(id);
    let obs = this._httpService.deleteAuthor(id);
    obs.subscribe(data => {
      this.getAllAuthors();
    });
    // this.getAllAuthors();
  }
}
