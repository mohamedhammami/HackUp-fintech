import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CustomValidators } from "ng2-validation";
import { Message } from "primeng/api";
import { AuthService } from "../../services/auth.service";
import { UserModel } from "../../models/user.model";

@Component({
  selector: "ms-login-session",
  templateUrl: "./login-component.html",
  styleUrls: ["./login-component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  UserForm: FormGroup;
  messages: Message[] = [];

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit() {
    if (this.authService.isLogged()) {
      this.router.navigateByUrl("/home");
    }
    this.UserForm = this.formBuilder.group({
      email: [
        "",
        Validators.compose([Validators.required, CustomValidators.email])
      ],
      password: ["", Validators.required]
    });
  }

  async onLogin() {
    try {
      const result: any = await this.authService.signIn(
        this.UserForm.value.email,
        this.UserForm.value.password
      );
      if (result && result.id) {
        const user: UserModel = result;
        this.authService.setUser(user);
        this.router.navigateByUrl("/home");
        return;
      } else {
        alert("incorrect credentials");
      }
    } catch (err) {
      console.log({ err });
    }
  }
}
