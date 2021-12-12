import { Form, redirect, Link } from 'remix';
import { db } from '~/utils/db.server';

export let action = async ({ request }: any) => {
  const form = await request.formData();
  const title = form.get('title');
  const content = form.get('content');

  try {
    const post = await db.post.create({
      data: {
        title,
        content,
      },
    });
  } catch (error) {
    console.log(error);
  }
  return redirect('/');
};

export default function Post() {
  return (
    <>
      <Link to={'/'}>
        <h1>Posts</h1>
      </Link>
      <h4>Create a post</h4>
      <form method='post'>
        <label htmlFor='title'>Title</label>
        <input type='text' name='title'></input>
        <label htmlFor='content'>Content</label>
        <input type='text' name='content'></input>
        <button type='submit'>Submit</button>
      </form>
    </>
  );
}
