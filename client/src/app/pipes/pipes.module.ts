import { NgModule } from '@angular/core';
import { ImagePipe } from './image.pipe';
import { SpacePipe } from './space.pipe';
import { CalificationPipe } from './calification.pipe';

@NgModule({
  imports: [],
  declarations: [ImagePipe, SpacePipe, CalificationPipe],
  exports: [
    ImagePipe,
    SpacePipe,
    CalificationPipe
  ]
})
export class PipesModule { }
