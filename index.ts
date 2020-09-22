import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CircleProgressComponent, CircleProgressOptionsInterface, CircleProgressOptions } from './circle-progress.component';

export * from './circle-progress.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CircleProgressComponent,
  ],
  exports: [
    CircleProgressComponent,
  ]
})
export class DevNgCircleProgressModule {
  static forRoot(options: CircleProgressOptionsInterface = {}): ModuleWithProviders<DevNgCircleProgressModule> {
    return {
      ngModule: DevNgCircleProgressModule,
      providers: [
        {provide: CircleProgressOptions, useValue: options}
      ]
    };
  }
}
