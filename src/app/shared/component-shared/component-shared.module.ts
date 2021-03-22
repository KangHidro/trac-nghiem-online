import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WidgetModule } from '../widget/widget.module';
import { PipeUserModule } from '../widget/pipes/pipe-user.module';
import { SharedModule } from '../shared.module';

const formComponents = [
  // ViewFileComponent,
  // UploadFileComponent,
];

@NgModule({
  declarations: [
    formComponents,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    WidgetModule,
    PipeUserModule,
  ],
  exports: [
    formComponents
  ],
  providers: []
})
export class ComponentSharedModule { }
