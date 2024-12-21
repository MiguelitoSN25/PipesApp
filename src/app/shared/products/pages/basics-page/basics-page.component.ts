import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
 public nameLowerCase :string = 'fernando'
 public uppercase :string = 'FERNANDO'
 public fullname :string = 'FeRNaNdo heRRERA'
 public customDate:Date = new Date()

}
