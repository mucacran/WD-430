import { Component } from '@angular/core';
import { Contact } from '../contact.model';

//impor for user *ngFor
//import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-detail',
  standalone: true,
  imports: [],
  templateUrl: './contact-detail.component.html',
  styleUrl: './contact-detail.component.css'
})
export class ContactDetailComponent {
  contact: Contact = 
    new Contact(
      "1",
      "R. Kent Jackson",
      "jacksonk@byui.edu",
      "208-496-3771",
      "../../assets/images/jacksonk.jpg",
      )
}
