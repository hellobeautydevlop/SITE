import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container">
        {/* Logo Section */}
        <div className="flex justify-center mb-12">
          <img 
            src="/manus-storage/IMG_1191_ac255bfa.PNG"
            alt="Hello Beauty Lounge"
            className="h-16 w-auto opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="/gallery" className="hover:text-accent transition-colors">Gallery</a></li>
              <li><a href="/kevin-murphy" className="hover:text-accent transition-colors">Kevin Murphy</a></li>
              <li><a href="/blog" className="hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>
          
          {/* Follow Us */}
          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <div className="flex justify-center gap-6">
              <a href="https://www.instagram.com/hello.beauty.lounge/" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="Instagram">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.facebook.com/reddeerhellobeauty" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="Facebook">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="https://twitter.com/hellobeautyhair" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors" title="Twitter">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+15872731668" className="hover:text-accent transition-colors">+1 (587) 273-1668</a></li>
              <li><a href="mailto:info@hellobeautylounge.com" className="hover:text-accent transition-colors">info@hellobeautylounge.com</a></li>
              <li className="text-xs mt-3">4919 59 St Unit 120<br/>Red Deer, AB T4N 6C9</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/70">
          <p>&copy; {new Date().getFullYear()} Hello Beauty Lounge. All rights reserved.</p>
          <p className="mt-2">Crafted with passion in Red Deer, Alberta</p>
        </div>
      </div>
    </footer>
  );
}
