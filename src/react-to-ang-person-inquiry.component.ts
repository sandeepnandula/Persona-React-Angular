import {
  Component,
  OnChanges,
  Input,
  AfterViewInit
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import PersonReactComponent from './persona-inquiry/PersonReactComponent';

@Component({
  selector: 'react-ang-persona-inquiry',
  template: '<div [id]="rootId"></div>'
})
export class ReactToAngularPersonaInquiryComponent implements OnChanges, AfterViewInit {
  public rootId = 'react-ang-persona-inquiry-root';
  public ngOnChanges() {
    this.renderComponent();
  }

  public ngAfterViewInit() {
    this.renderComponent();
  }

  private renderComponent() {
    ReactDOM.render(
      React.createElement(PersonReactComponent, { templateId: 'xxx', environmentId: 'xxxx' }),
      document.getElementById(this.rootId)
    );
  }
}