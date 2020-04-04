import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';


@NgModule({
    declarations: [

    ],
    imports: [
        MatButtonModule,
        MatTableModule,
        MatIconModule,
        MatDialogModule
    ],
    exports: [
        MatButtonModule,
        MatTableModule,
        MatIconModule,
        MatDialogModule
    ]
})

export class MaterialModule { }