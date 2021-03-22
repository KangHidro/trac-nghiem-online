import { NgModule } from '@angular/core';
import { WidgetModule } from './widget/widget.module';
import { PluginModule } from './plugin.module';
import { PipeUserModule } from './widget/pipes/pipe-user.module';

@NgModule({
  declarations: [],
  imports: [
    WidgetModule,
    PluginModule,
    PipeUserModule,
  ],
  exports: [
    WidgetModule,
    PluginModule,
    PipeUserModule,
  ],
  providers: []
})
export class SharedModule { }
