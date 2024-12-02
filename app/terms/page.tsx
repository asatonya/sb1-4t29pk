import { TermsOfUseContent } from '@/components/terms/terms-content';
import { TermsHeader } from '@/components/terms/terms-header';

export const metadata = {
  title: 'Terms of Use | Your Company',
  description: 'Terms and conditions for using our services',
};

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <TermsHeader />
        <TermsOfUseContent />
      </div>
    </main>
  );
}