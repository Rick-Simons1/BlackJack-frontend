# BlackjackFrontend

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.29.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


<form (ngSubmit)="onSubmit()" #userForm="ngForm">
      <div class="form-group">
        <label for="username">username</label>
        <input type="text" [(ngModel)]="user.username"
               class="form-control"
               id="username"
               name="username"
               placeholder="Enter your username"
               required #username="ngModel">
      </div>
      <div [hidden]="!username.pristine" class="alert alert-danger">username is required</div>
      <div class="form-group">
        <label for="password">password</label>
        <input type="text" [(ngModel)]="user.password"
               class="form-control"
               id="password"
               name="password"
               placeholder="Enter the password you want to use"
               required #password="ngModel">
        <div [hidden]="!password.pristine" class="alert alert-danger">the password is required</div>
      </div>
      <button id="loginButton" type="submit" [disabled]="!userForm.form.valid"
              class="btn btn-info">
        Submit
      </button>
    </form>
