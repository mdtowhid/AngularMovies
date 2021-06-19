import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [],
  exports: [MatToolbarModule, MatIconModule, MatButtonModule],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class MaterialModule {}
