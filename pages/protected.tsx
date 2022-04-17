import { useRouter } from 'next/router';

// import FrameworkAuthed from '@/components/UI/Framework/FrameworkAuthed';

export { getServerSideProps } from '@/lib/auth/serverSideAuth';

const page = 'Protected';

const protectedPage = ({ user }) => {
  const router = useRouter();

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 md:max-w-9xl lg:px-8 bg-white mx-8 h-360 rounded-lg p-5 shadow">
      <h1 className="text-3xl font-bold mb-2">{page}</h1>
      <p>This is the {page} page</p>
      <h1 className="font-bold text-4xl pb-6 pt-6">Props</h1>
      <div className="overflow-hidden ">
        <pre>{JSON.stringify(user, null, 2)}</pre>
      </div>
    </div>
  );
};

export default protectedPage;
