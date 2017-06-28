# ngx-fs

Based on the `ngx-electron` package this wraps the fs node API for Angular applications which are running inside an electron app

## Installation

`ngx-fs` can be installed easily using either `yarn` or `npm` commands in the scope of an angular project.

```
$ yarn add ngx-fs --save
# or
$ npm install ngx-fs --save
```

`ngx-fs` is exposing a module called `NgxFsModule` which needs to be imported in your `AppModule`.

``` typescript
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {NgxFsModule} from 'ngx-fs';
import {AppComponent} from './app.component';
 
@NgModule({
    declarations: [],
    imports: [
      BrowserModule,
      NgxFsModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
 
}
```

Once the module has been imported, you can easily use angular DI to ask for `FsService`.

``` typescript
import {Component} from '@angular/core';
import {FsService} from 'ngx-fs';
 
@Component({
  selector: 'my-app',
  templateUrl: 'app.html'
})
export class AppComponent {
 
    constructor(private _fsService: FsService) { }
}
```
