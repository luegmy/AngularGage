import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import {  MatSidenavModule} from '@angular/material/sidenav';

@NgModule({
    declarations: [

    ],
    imports: [
        MatButtonModule,
        MatTableModule,
        MatIconModule,
        MatDialogModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatGridListModule,
        MatCardModule,
        MatPaginatorModule,
        MatSidenavModule
    ],
    exports: [
        MatButtonModule,
        MatTableModule,
        MatIconModule,
        MatDialogModule,
        MatToolbarModule,
        MatInputModule,
        MatSelectModule,
        MatGridListModule,
        MatCardModule,
        MatPaginatorModule,
        MatSidenavModule
    ]
})

export class MaterialModule { }