import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerComponent } from './owner.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'list', component: OwnerListComponent }
    ])
  ],
  declarations: [OwnerComponent, OwnerListComponent]
})
export class OwnerModule { }
