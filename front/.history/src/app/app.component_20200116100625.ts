import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
  constructor(
    translate: TranslateService,
    location: Location,
    private router: Router
  ) {
    translate.addLangs(["en", "fr"]);
    translate.setDefaultLang("en");
    //    this.router.navigateByUrl("/home");
    if (location.path() != "") {
      console.log(location.path());
    } else {
      this.router.navigateByUrl("/authentication/login");
      return;
    }
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : "en");
  }
}
