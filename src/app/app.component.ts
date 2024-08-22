import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppNavbar } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppNavbar, HeaderComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'This is loaded Dynamically';
  imgSrc: string = 'https://angular.io/assets/images/logos/angular/angular.png';
  isDisabled: boolean = true;
  isActive: boolean = true;
  fruitName: string = 'Apple';

  onClick() {
    console.log('Button Clicked');
  }

  keyupFiltering() {
    console.log('keyupFiltering');
  }

  keyupFiltering1(user:HTMLInputElement) {
    console.log(user.value);
  }

  userName: string = 'John Doe';
  updateUserName(username: HTMLInputElement){
    this.userName = username.value;
    console.log(this.userName);
    
  }
}
