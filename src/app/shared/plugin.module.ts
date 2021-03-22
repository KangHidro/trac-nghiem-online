import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxSpinnerModule } from 'ngx-spinner';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzModalModule } from 'ng-zorro-antd/modal';

import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

// Zorro
const NgZorroAntdModules = [
  NzButtonModule,
  NzModalModule,
  NzDropDownModule,
  NzDatePickerModule,
  NzInputModule,
  NzSelectModule,
  NzPopoverModule,
  NzTableModule,
  NzTagModule,
  NzToolTipModule,
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModules,
    NgxSpinnerModule,
    CKEditorModule,
  ],
  providers: []
})
export class PluginModule { }
