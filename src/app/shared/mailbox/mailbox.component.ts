import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
declare let Email:any;


@Component({
  selector: 'app-mailbox',
  templateUrl: './mailbox.component.html',
  styleUrls: ['./mailbox.component.css']
})
export class MailboxComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {

  }

  onSubmit(form:NgForm){
    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "fepolbot@gmail.com",
      Password : "AA44D553EA450BB4CA2F64BFDDAC3D0177E2",
      To : "fepolbot@gmail.com",
      From : `fepolbot@gmail.com`,
      Subject : "Mensaje desde la página de FEPOL",
      Body : `
      <i>This is sent as a feedback from my resume page.</i> <br/> <b>Name: </b>${form.value.nombre} <br /> <b>Email: </b>.${form.value.correo}<br /> <b>Subject: </b>${form.value.tema}<br /> <b>Message:</b> <br /> ${form.value.mensaje} <br><br> <b>~Fin del correo~</b> `
      }).then((data:any) =>{
        alert(data);
        form.resetForm();
      })
  }

}
