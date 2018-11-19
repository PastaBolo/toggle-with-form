import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component'
import { CheckboxComponent } from './checkbox/checkbox.component'
import { CheckboxDirective } from './checkbox/checkbox.directive';
import { CheckboxRequiredDirective } from './checkbox/checkbox-required.directive'

@NgModule({
  declarations: [AppComponent, CheckboxComponent, CheckboxDirective, CheckboxRequiredDirective],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
