import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  submitted = false;
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }


  ngOnInit(): void {
    this.contactForm = this.fb.group({
      fullName: ['', Validators.required],
      emailId: ['', [Validators.required, Validators.email]],
      comments: [''],
    });
  }

  // tslint:disable-next-line: typedef
  get f() { return this.contactForm.controls; }

  onContactFormSubmit(): void {
    this.submitted = true;

    if (this.contactForm.invalid){
      return;
    }
    alert('Form Submitted Successfully!');
    this.contactForm.reset();
    this.submitted = false;
  }

}
