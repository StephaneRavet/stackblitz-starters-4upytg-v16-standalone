import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AutofocusDirective } from './autofocus.directive';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SearchBarComponent, HeaderComponent, AutofocusDirective],
  exports: [SearchBarComponent, HeaderComponent, AutofocusDirective],
})
export class SharedModule {}
