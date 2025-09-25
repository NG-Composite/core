import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from './components/Button/Button';

@NgModule({
  imports: [CommonModule, Button],
  exports: [Button],
})
export class CompositeModule {}
