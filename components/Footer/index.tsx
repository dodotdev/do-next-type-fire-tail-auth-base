import { footerNavigation } from '@/data/home';
import Link from 'next/link';
import FooterLinks from './FooterLinks';
import FooterNewsletter from './FooterNewsletter';

const Footer = () => {
  return (
    <footer aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <FooterLinks />
        <FooterNewsletter /> */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between lg:mt-4">
          <div className="flex justify-center space-x-6 md:order-2 mb-6  mt-0">
            {footerNavigation.social.map((item) => (
              <Link href={item.href} key={item.name}>
                <a className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
              </Link>
            ))}
          </div>
          <p className="flex justify-center mt-0  mb-6 text-base text-gray-400 md:order-1">
            &copy; 2022 SanCapBWA, All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
