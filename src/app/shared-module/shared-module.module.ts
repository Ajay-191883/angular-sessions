import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WeightPipePipe } from '../custom-pipe/weight-pipe.pipe';

@NgModule({
  declarations: [WeightPipePipe],
  imports: [CommonModule],
  exports: [CommonModule, WeightPipePipe],
})
export class SharedModuleModule {}
