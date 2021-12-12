import { Links, LiveReload, Outlet } from 'remix';
import type { LinksFunction } from 'remix';
import globalStylesUrl from './styles/global.css';
import darkStylesUrl from './styles/dark.css';

export let links: LinksFunction = () => {
  return [
    { rel: 'stylesheet', href: globalStylesUrl },
    {
      rel: 'stylesheet',
      href: darkStylesUrl,
      media: '(prefers-color-scheme: dark)',
    },
  ];
};

export default function App() {
  return (
    <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <title>My Blog</title>
        <Links />
      </head>
      <body>
        <Outlet />
        {process.env.NODE_ENV === 'development' ? <LiveReload /> : null}
      </body>
    </html>
  );
}
