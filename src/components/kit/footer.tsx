import Link from 'next/link';

export default function Footer() {
  return (
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">Features</Link></li>
                <li><Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">Solutions</Link></li>
                <li><Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">Pricing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">About</Link></li>
                <li><Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">Careers</Link></li>
                <li><Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">Blog</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">Documentation</Link></li>
                <li><Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">Help Center</Link></li>
                <li><Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">Privacy</Link></li>
                <li><Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">Terms</Link></li>
                <li><Link href="#" className="text-foreground/60 hover:text-foreground transition-colors">Security</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-center text-foreground/60">
              © 2024 Company, Inc. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
  );
}