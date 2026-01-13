import { currentUser } from '@clerk/nextjs/server';

const News = async () => {
  const user = await currentUser();

  return (
    <div>
      <h1>Welcome, {user?.fullName}!</h1>
      <p>This is your protected page.</p>
    </div>
  );
};

export default News;
