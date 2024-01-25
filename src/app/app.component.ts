import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div className="app-container">
      <h1>I'm an Angular App. Below is the Persona.Inquiry React Component!</h1>
    </div>
    <react-ang-persona-inquiry></react-ang-persona-inquiry>
  `
})
export class AppComponent {
  title = 'default';
}