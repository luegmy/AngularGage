import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ContactService } from '../service/contact.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public _contactForm: FormGroup;

  constructor(private _formBuilder: FormBuilder,
  private dialogRef: MatDialogRef<ContactComponent>,
  private _contactService: ContactService,
  @Inject(MAT_DIALOG_DATA) public data: any) { }

  onNoClick(): void {
    this.dialogRef.close();
   }

  ngOnInit() {

    this._contactForm = this._formBuilder.group({
      ID:[this.data.ID],
      nombre: [this.data.nombre, [Validators.required]],
      direccion: [this.data.direccion, [Validators.required]],
      documento: [this.data.documento,[ Validators.required]],
      nroDocumento: [this.data.nroDocumento, [Validators.required]],
      telefono: [this.data.telefono],
      correo: [this.data.correo, [Validators.email]]

    })
}

  onSubmit() {
    if (isNaN(this.data.ID)) {
      this._contactService.addContact(this._contactForm.value);
      this.dialogRef.close();
    } else {
      this._contactService.editContact(this._contactForm.value);
      this.dialogRef.close();
    }
  }

}
