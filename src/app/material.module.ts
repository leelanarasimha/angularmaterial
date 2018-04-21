import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatListModule,
    MatToolbarModule,
    MatCardModule,
    MatTabsModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule
} from '@angular/material';


@NgModule({
    imports: [
        MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatCardModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatSidenavModule,
        MatTabsModule,
        MatToolbarModule,
        MatListModule,
        MatProgressSpinnerModule,
        MatDialogModule,
        MatSelectModule,
        MatNativeDateModule],
    exports: [MatButtonModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatCheckboxModule,
        MatCardModule,
        MatToolbarModule,
        MatListModule,
        MatTabsModule,
        MatDialogModule,
        MatSidenavModule,
        MatProgressSpinnerModule,
        MatNativeDateModule]
})

export class MaterialModule { }
