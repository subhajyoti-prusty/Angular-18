import { Component } from "@angular/core";

@Component({
    selector: 'app-navbar',
    standalone: true,
    template:`<h1>Navbar Component</h1> 
            <p>This is a Navbar.</p>
            <button>Submit</button>`,
    styles: [`h1 { color: red; 
            font-size: 2em;
            text-align: center; }`,
            `p { color: blue;
            font-size: 1.5em;
            text-align: center; }`,
            `button { color: green;
            font-size: 1.5em;
            text-align: center; }`
            ],
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class AppNavbar {

}