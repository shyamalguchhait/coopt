import { Component, OnInit } from "@angular/core";
import { delay, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import * as $ from "jquery";

@Component({
  selector: "app-committees",
  templateUrl: "./committees.component.html",
  styleUrls: ["./committees.component.scss"],
})
export class CommitteesComponent implements OnInit {
  public data: any = [];
  constructor(private http: HttpClient) {
    var path = "../../../assets/" + "committees.json";
    // var path = "https://students.iiserkol.ac.in/~sg16ip022/assets/" + "committees.json";
    this.getJSON(path).subscribe((res) => {
      // console.log(data);
      this.data = res;
      console.log(this.data);
    });
    $(document).ready(function () {
      $(".index").hide(1000);
    });
  }

  ngOnInit(): void {}
  public getJSON(path: any): Observable<any> {
    return this.http.get(path);
  }
}
