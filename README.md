# Persona React component in Angular


# Ref
https://blog.harveydelaney.com/integrating-react-components-into-an-angular-2-project/

## Installation

npm install

## Run the local server

npm run start

## Update your Persona Variables

Add your `templateId` & `environmentId` from your account in the src/react-to-ang-person-inquiry.component.ts @Line 27
Example:
  private renderComponent() {
    ReactDOM.render(
      React.createElement(PersonReactComponent, { templateId: 'xxxxx', environmentId: 'xxxx' }),
      document.getElementById(this.rootId)
    );
  }
## License

Information about the project's license and any applicable terms.
