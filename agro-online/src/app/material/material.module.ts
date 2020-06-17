import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatTabsModule} from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule} from '@angular/material/list';
import { MatGridListModule} from '@angular/material/grid-list';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatChipsModule } from '@angular/material/chips';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatChipsModule,
    
  ],
  exports: [
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatTabsModule,
    MatMenuModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatExpansionModule,
    MatInputModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatChipsModule,
    
  ]
})
export class MaterialModule { }
