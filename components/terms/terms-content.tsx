import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export function TermsOfUseContent() {
  return (
    <Card className="p-6 space-y-8">
      <section>
        <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
        <p className="text-muted-foreground leading-relaxed">
          By accessing and using this website, you accept and agree to be bound by the terms and
          provision of this agreement.
        </p>
      </section>

      <Separator />

      <section>
        <h2 className="text-2xl font-semibold mb-4">2. Use License</h2>
        <ul className="list-disc list-inside space-y-3 text-muted-foreground">
          <li>
            Permission is granted to temporarily download one copy of the materials (information or
            software) on our website for personal, non-commercial transitory viewing only.
          </li>
          <li>
            This is the grant of a license, not a transfer of title, and under this license you may not:
            <ul className="list-disc list-inside ml-6 mt-2 space-y-2">
              <li>modify or copy the materials;</li>
              <li>use the materials for any commercial purpose;</li>
              <li>attempt to decompile or reverse engineer any software contained on our website;</li>
              <li>remove any copyright or other proprietary notations from the materials;</li>
            </ul>
          </li>
        </ul>
      </section>

      <Separator />

      <section>
        <h2 className="text-2xl font-semibold mb-4">3. Disclaimer</h2>
        <p className="text-muted-foreground leading-relaxed">
          The materials on our website are provided on an &apos;as is&apos; basis. We make no
          warranties, expressed or implied, and hereby disclaim and negate all other warranties
          including, without limitation, implied warranties or conditions of merchantability, fitness
          for a particular purpose, or non-infringement of intellectual property or other violation
          of rights.
        </p>
      </section>

      <Separator />

      <section>
        <h2 className="text-2xl font-semibold mb-4">4. Limitations</h2>
        <p className="text-muted-foreground leading-relaxed">
          In no event shall our company or our suppliers be liable for any damages (including,
          without limitation, damages for loss of data or profit, or due to business interruption)
          arising out of the use or inability to use the materials on our website, even if we or an
          authorized representative has been notified orally or in writing of the possibility of
          such damage.
        </p>
      </section>

      <Separator />

      <section>
        <h2 className="text-2xl font-semibold mb-4">5. Revisions and Errata</h2>
        <p className="text-muted-foreground leading-relaxed">
          The materials appearing on our website could include technical, typographical, or
          photographic errors. We do not warrant that any of the materials on our website are
          accurate, complete, or current. We may make changes to the materials contained on our
          website at any time without notice.
        </p>
      </section>

      <Separator />

      <section>
        <h2 className="text-2xl font-semibold mb-4">6. Contact Information</h2>
        <p className="text-muted-foreground leading-relaxed">
          If you have any questions about these Terms of Use, please contact us at:
          <br />
          <a href="mailto:support@example.com" className="text-primary hover:underline">
            support@example.com
          </a>
        </p>
      </section>
    </Card>
  );
}