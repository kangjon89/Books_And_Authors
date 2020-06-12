import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: "root"
})
export class HttpService {
  constructor(private _http: HttpClient) {}

  getAuthors() {
    let tempObservable = this._http.get("api/Authors");
    tempObservable.subscribe(data => console.log("Got our Authors!", data));
    return this._http.get("/api/Authors");
  }
  getOneAuthor(Author_id) {
    return this._http.get(`/api/Authors/${Author_id}`);
  }
  addAuthor(newAuthor) {
    console.log(newAuthor);
    return this._http.post("/api/Authors", newAuthor);
  }
  updateAuthor(updatedAuthor, id) {
    return this._http.put(`/api/Authors/${id}`, updatedAuthor);
  }
  deleteAuthor(id: any) {
    console.log(id);
    return this._http.delete(`/api/Authors/${id}`);
  }
}
