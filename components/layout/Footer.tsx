import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Mail, PhoneCall, MapPin } from 'lucide-react';
import { productCategories } from '@/src/data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#214842] text-white">
      <div className="container-custom py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-5 -ml-3">
              <Image
                src="/images/starhiherbs-logo-white.png"
                alt="Star Hi Herbs"
                width={180}
                height={42}
                className="object-contain"
                style={{ maxHeight: '42px' }}
                priority
              />
            </div>
            <p className="mb-6 text-white/80 text-sm leading-relaxed">
              Global manufacturer of premium herbal extracts, probiotics,
              and nutraceutical solutions for a healthier tomorrow.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#EFC368] transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#EFC368] transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-[#EFC368] transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="footer-link">About Us</Link>
              </li>
              <li>
                <Link href="/products" className="footer-link">Products</Link>
              </li>
              <li>
                <Link href="/innovation" className="footer-link">Innovation</Link>
              </li>
              <li>
                <Link href="/sustainability" className="footer-link">Sustainability</Link>
              </li>
              <li>
                <Link href="/blog" className="footer-link">Blog</Link>
              </li>
              <li>
                <Link href="/contact" className="footer-link">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/request-quote" className="footer-link">Request Quote</Link>
              </li>
              <li>
                <Link href="/request-sample" className="footer-link">Request Sample</Link>
              </li>
              <li>
                <Link href="/download-catalogue" className="footer-link">Download Catalogue</Link>
              </li>
              <li>
                <Link href="/request-meeting" className="footer-link">Request Meeting</Link>
              </li>
              <li>
                <Link href="/careers" className="footer-link">Careers</Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              {productCategories.map((category) => (
                <li key={category.id}>
                  <Link href={`/collections/${category.slug}`} className="footer-link">
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-[#EFC368] mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">
                  Plot #50, 3rd Road, 1st Phase<br />
                  K.I.A.D.B. Industrial Area, Jigani<br />
                  Bangalore - 560105, Karnataka, India
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneCall size={20} className="text-[#EFC368] flex-shrink-0" />
                <a href="tel:+919886422452" className="text-white/80 hover:text-white text-sm">
                  +91 98 8642 2452
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-[#EFC368] flex-shrink-0" />
                <a href="mailto:info@starhiherbs.com" className="text-white/80 hover:text-white text-sm break-all">
                  info@starhiherbs.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section with copyright and legal links */}
        <div className="mt-12 pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Star Hi Herbs Pvt Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-white/70">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-conditions" className="hover:text-white transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/sitemap" className="hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}