import { LoaderFunction, Outlet, useLoaderData } from 'remix';
import { db } from '~/utils/db.server';
import type { Post } from '@prisma/client';
import { Link } from 'react-router-dom';

export const loader: LoaderFunction = async () => {
  const posts: Post[] = await db.post.findMany();
  return posts;
};

export default function PostsRoute() {
  const posts = useLoaderData();

  return (
    <div>
      <header className='remix-app__header'>
        <h1>Posts</h1>
        <Link to='/posts/new'>
          <h1>New Post</h1>
        </Link>
      </header>
      <main>
        <ul>
          {posts.map((post: Post) => (
            <li key={post.id}>
              <p>{post.title}</p>
              <p>{post.content}</p>
              <p>Created at {new Date(post.createdAt).toLocaleString()}</p>
            </li>
          ))}
        </ul>
        <Outlet />
      </main>
    </div>
  );
}
