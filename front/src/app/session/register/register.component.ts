import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { Router } from "@angular/router";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from "@angular/forms";
import { Message } from "primeng/api";
import { CustomValidators } from "ng2-validation";
import { UsersService } from "../../services/users.service";
import { AuthService } from "../../services/auth.service";

const password = new FormControl("", Validators.required);
const confirmPassword = new FormControl("", CustomValidators.equalTo(password));

@Component({
  selector: "ms-register-session",
  templateUrl: "./register-component.html",
  styleUrls: ["./register-component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  messages: Message[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private userservice: UsersService
  ) {}

  ngOnInit() {
    if (this.authService.isLogged()) {
      this.router.navigateByUrl("/home");
    }
    this.form = this.formBuilder.group({
      firstname: [null, Validators.compose([Validators.required])],
      lastname: [null, Validators.compose([Validators.required])],
      login: [null, Validators.compose([Validators.required])],
      email: [
        null,
        Validators.compose([Validators.required, CustomValidators.email])
      ],
      password: password,
      confirmPassword: confirmPassword
    });
  }

  async onSubmit() {
    this.messages = [];
    if (!this.form.valid) {
      return;
    }
    try {
      const result: any = this.authService.signUp(this.form.value);
      console.log({ result });
      if (result) {
        this.router.navigateByUrl("/authentication/login");
        return;
      }
    } catch (err) {
      console.log({ err });
    }
  }
}
