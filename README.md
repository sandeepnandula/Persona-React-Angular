# Persona React component in Angular

<img width="1186" alt="Screenshot 2024-01-25 at 9 42 32 PM" src="https://github.com/sandeepnandula/Persona-React-Angular/assets/23185756/3bbc3605-00e9-4da4-932c-a44c7d1e89bf">


# Ref
https://blog.harveydelaney.com/integrating-react-components-into-an-angular-2-project/

## Installation

npm install

## Run the local server

npm run start

## Update your Persona Variables

Add your `templateId` & `environmentId` from your account in the src/react-to-ang-person-inquiry.component.ts @Line 27
Example:
```
  private renderComponent() {
    ReactDOM.render(
      React.createElement(PersonReactComponent, { templateId: 'xxxxx', environmentId: 'xxxx' }),
      document.getElementById(this.rootId)
    );
  }
```
## License

Information about the project's license and any applicable terms.
