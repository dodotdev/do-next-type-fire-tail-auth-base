import { footerNavigation } from '@/data/home';
import Link from 'next/link';

const FooterLinks = () => {
  return (
    <div className="xl:grid xl:grid-cols-3 xl:gap-8">
      <div className="grid grid-cols-2 gap-8 xl:col-span-2">
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Solutions
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {footerNavigation.solutions.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <a className="text-base text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Support
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {footerNavigation.support.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <a className="text-base text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="md:grid md:grid-cols-2 md:gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Company
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <a className="text-base text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 md:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">
              Legal
            </h3>
            <ul role="list" className="mt-4 space-y-3">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <a className="text-base text-gray-500 hover:text-gray-900">
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
