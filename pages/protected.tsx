import { useRouter } from 'next/router';

const page = 'Protected';

const protectedPage = () => {
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 bg-white mx-8 h-60 rounded-lg p-5 shadow">
      <h1 className="text-3xl font-bold mb-2">{page}</h1>
      <p>This is the {page} page</p>
    </div>
  );
};

export default protectedPage;