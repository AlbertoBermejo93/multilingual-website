import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss',
    standalone: true,
    imports: [TranslateModule],
})
export class ContactComponent {
  public sendEmail(e: Event) {
    e.preventDefault();
    // emailjs
    //   .sendForm(
    //     'YOUR_SERVICE_ID',
    //     'YOUR_TEMPLATE_ID',
    //     e.target as HTMLFormElement,
    //     'YOUR_PUBLIC_KEY'
    //   )
    //   .then(
    //     (result: EmailJSResponseStatus) => {
    //       console.log(result.text);
    //     },
    //     (error) => {
    //       console.log(error.text);
    //     }
    //   );
  }
}
