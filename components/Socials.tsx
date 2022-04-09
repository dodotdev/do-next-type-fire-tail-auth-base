import { footerNavigation } from '@/data/home';

const Socials = () => {
  return (
    <div>
      <div className="rounded-lg bg-white overflow-hidden shadow">
        <div className="flex justify-between p-4">
          {footerNavigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Socials;
