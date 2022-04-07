import Link from 'next/link';
import { useRouter } from 'next/router';

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 bg-white mx-8 h-60 rounded-lg p-5 shadow">
      <h1 className="text-3xl font-bold mb-2">{slug}</h1>
      <p>This is the {slug} page</p>
    </div>
  );
};

export default Slug;
