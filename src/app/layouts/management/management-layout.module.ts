import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// layout components
import { ManagementFooterComponent } from './management-footer/management-footer.component';
import { ManagementHeaderComponent } from './management-header/management-header.component';
import { ManagementLayoutComponent } from './management-layout/management-layout.component';
import { ManagementSidebarComponent } from './management-sidebar/management-sidebar.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [
        ManagementLayoutComponent,
        ManagementHeaderComponent,
        ManagementFooterComponent,
        ManagementSidebarComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule,
        SharedModule,
    ],
    exports: [
        ManagementLayoutComponent,
        ManagementHeaderComponent,
        ManagementFooterComponent
    ],
    providers: [
    ],
})
export class ManagementLayoutModule { }
