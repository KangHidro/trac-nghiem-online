import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from './breadcrumb/breadcumb.component';
import { RouterModule } from '@angular/router';
import { FieldErrorDisplayComponent } from './field-error-display/field-error-display.component';
import { PaginateModule } from './paginate/paginate.module';
import { DirectiveUserModule } from './directives/directive-user.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        PaginateModule,
        DirectiveUserModule,
    ],
    declarations: [
        BreadcrumbComponent,
        FieldErrorDisplayComponent
    ],
    exports: [
        BreadcrumbComponent,
        FieldErrorDisplayComponent,
        PaginateModule,
        DirectiveUserModule,
    ]
})
export class WidgetModule { }
