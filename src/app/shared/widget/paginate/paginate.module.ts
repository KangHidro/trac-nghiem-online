import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TablePaginateComponent } from './paginate.component';

@NgModule({
    declarations: [
        TablePaginateComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        TablePaginateComponent
    ],
    providers: [],
})
export class PaginateModule { }
