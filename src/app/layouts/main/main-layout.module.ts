import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';

// layout components

@NgModule({
  declarations: [
    MainHeaderComponent,
    MainFooterComponent,
    MainLayoutComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModule,
  ],
  exports: [
  ],
  providers: [
  ],
})
export class MainLayoutModule { }
