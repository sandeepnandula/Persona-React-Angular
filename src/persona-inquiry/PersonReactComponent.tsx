import React from 'react'
import Persona from 'persona';

export default function PersonReactComponent({ templateId = '', environmentId = '' }: { templateId: string, environmentId: string }) {
  return (
      <Persona.Inquiry
      iframeTitle='Persona-Inquiry'
        styleVariant="base"
        templateId={templateId}
        environmentId={environmentId}
        onLoad={() => { console.log('Loaded inline'); }}
        onComplete={({ inquiryId, status, fields }) => {
          // Inquiry completed. Optionally tell your server about it.
          console.log(`Sending finished inquiry ${inquiryId} to backend`);
        }}
      />
  )
}
