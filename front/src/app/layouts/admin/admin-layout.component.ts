import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  HostListener
} from "@angular/core";
import { Router, NavigationEnd } from "@angular/router";
import { MenuItems } from "../../shared/menu-items/menu-items";
import { HorizontalMenuItems } from "../../shared/menu-items/horizontal-menu-items";
import { Subscription } from "rxjs";
import { filter } from "rxjs/operators";
import { TranslateService } from "@ngx-translate/core";
import PerfectScrollbar from "perfect-scrollbar";
import { PerfectScrollbarConfigInterface } from "ngx-perfect-scrollbar";
import { AuthService } from "../../services/auth.service";
import { SharedService } from "app/services/shared.service";
import { UserModel } from "../../models/user.model";

@Component({
  selector: "app-layout",
  templateUrl: "./admin-layout.component.html"
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
  private _router: Subscription;

  today: number = Date.now();
  url: string;
  showSettings = false;
  dark: boolean;
  boxed: boolean;
  collapseSidebar: boolean;
  compactSidebar: boolean;
  sidebarBg = true;
  currentLang = "en";
  layoutDir = "ltr";

  menuLayout: any = "vertical-menu";
  selectedSidebarImage: any = "bg-1";
  selectedSidebarColor: any = "sidebar-default";
  selectedHeaderColor: any = "header-default";
  collapsedClass: any = "side-panel-opened";
  notifications = [];
  @ViewChild("sidemenu") sidemenu;
  public config: PerfectScrollbarConfigInterface = {};
  profile: UserModel;
  constructor(
    private router: Router,
    public menuItems: MenuItems,
    public horizontalMenuItems: HorizontalMenuItems,
    private authService: AuthService,
    public translate: TranslateService,
    public sharedService: SharedService
  ) {
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : "en");
  }

  ngOnInit(): void {
    if (!this.authService.isLogged()) {
      this.router.navigateByUrl("/authentication/login");
    }
    this.profile = this.authService.getUser();
    const elemSidebar = <HTMLElement>(
      document.querySelector(".sidebar-container ")
    );

    if (
      window.matchMedia(`(min-width: 960px)`).matches &&
      !this.isMac() &&
      !this.compactSidebar &&
      this.layoutDir != "rtl"
    ) {
      const ps = new PerfectScrollbar(elemSidebar, {
        wheelSpeed: 2,
        suppressScrollX: true
      });
    }

    this._router = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.url = event.url;
        if (this.isOver()) {
          this.sidemenu.close();
        }

        if (
          window.matchMedia(`(min-width: 960px)`).matches &&
          !this.isMac() &&
          !this.compactSidebar &&
          this.layoutDir != "rtl"
        ) {
          // Ps.update(elemContent);
        }
      });
  }

  MyProfile() {
    this.router.navigate(["/users/profile"]);
  }

  logOut() {
    this.authService.logout();
    this.router.navigate(["/authentication/login"]);
  }

  @HostListener("click", ["$event"])
  onClick(e: any) {
    const elemSidebar = <HTMLElement>(
      document.querySelector(".sidebar-container ")
    );
    setTimeout(() => {
      if (
        window.matchMedia(`(min-width: 960px)`).matches &&
        !this.isMac() &&
        !this.compactSidebar &&
        this.layoutDir != "rtl"
      ) {
        const ps = new PerfectScrollbar(elemSidebar, {
          wheelSpeed: 2,
          suppressScrollX: true
        });
      }
    }, 350);
  }

  ngOnDestroy() {
    this._router.unsubscribe();
  }

  isOver(): boolean {
    if (
      this.url === "/apps/messages" ||
      this.url === "/apps/calendar" ||
      this.url === "/apps/media" ||
      this.url === "/maps/leaflet"
    ) {
      return true;
    } else {
      return window.matchMedia(`(max-width: 960px)`).matches;
    }
  }

  isMac(): boolean {
    let bool = false;
    if (
      navigator.platform.toUpperCase().indexOf("MAC") >= 0 ||
      navigator.platform.toUpperCase().indexOf("IPAD") >= 0
    ) {
      bool = true;
    }
    return bool;
  }

  menuMouseOver(): void {
    if (
      window.matchMedia(`(min-width: 960px)`).matches &&
      this.collapseSidebar
    ) {
      this.sidemenu.mode = "over";
    }
  }

  menuMouseOut(): void {
    if (
      window.matchMedia(`(min-width: 960px)`).matches &&
      this.collapseSidebar
    ) {
      this.sidemenu.mode = "side";
    }
  }

  menuToggleFunc() {
    this.sidemenu.toggle();

    if (this.collapsedClass == "side-panel-opened") {
      this.collapsedClass = "side-panel-closed";
    } else {
      this.collapsedClass = "side-panel-opened";
    }
  }

  changeMenuLayout(value) {
    console.log(value);
    if (value) {
      this.menuLayout = "top-menu";
    } else {
      this.menuLayout = "vertical-menu";
    }
  }

  onSelectSidebarImage(selectedClass, event) {
    this.selectedSidebarImage = selectedClass;
  }

  onSelectedSidebarColor(selectedClass) {
    this.selectedSidebarColor = selectedClass;
  }

  onSelectedHeaderColor(selectedClass) {
    this.selectedHeaderColor = selectedClass;
  }

  isBgActive(value) {
    if (value == this.selectedSidebarImage) {
      return true;
    } else {
      return false;
    }
  }

  isSidebarActive(value) {
    if (value == this.selectedSidebarColor) {
      return true;
    } else {
      return false;
    }
  }

  isHeaderActive(value) {
    if (value == this.selectedHeaderColor) {
      return true;
    } else {
      return false;
    }
  }

  addMenuItem(): void {
    this.menuItems.add({
      state: "menu",
      name: "MENU",
      type: "sub",
      icon: "trending_flat",
      children: [
        { state: "menu", name: "MENU" },
        { state: "timelmenuine", name: "MENU" }
      ]
    });
  }
}
