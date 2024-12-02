import { ScrollText } from 'lucide-react';

export function TermsHeader() {
  return (
    <div className="mb-8 text-center">
      <div className="flex justify-center mb-4">
        <ScrollText className="h-12 w-12 text-primary" />
      </div>
      <h1 className="text-4xl font-bold tracking-tight mb-4">Terms of Use</h1>
      <p className="text-muted-foreground">
        Last updated: {new Date().toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </p>
    </div>
  );
}