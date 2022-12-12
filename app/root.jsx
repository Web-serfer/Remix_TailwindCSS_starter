import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

// Tailwind css
import styles from "~/styles/app.css";

// globalStyles
import globalStyles from "~/styles/global.css";

export function links() {
  return [
    {
      // styles css
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "stylesheet",
      href: globalStyles,
    },
    // favicons
    {
      rel: 'apple-touch-icon',
      sizes: '180x180',
      href: '/favicons/apple-touch-icon.png'     
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '192x192',
      href: '/favicons/android-chrome-192x192.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '512x512',
      href: '/favicons/android-chrome-512x512.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      href: '/favicons/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '16x16',
      href: '/favicons/favicon-16x16.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '150x150',
      href: '/favicons/mstile-150x150.png',
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicons/favicon.ico',
    },
    { rel: 'manifest', href: '/favicons/site.webmanifest' },
    {
      rel: 'mask-icon',
      href: '/favicons/safari-pinned-tab.svg',
      color: '#5bbad5',
    },
  ];
}

// Meta tags
export const meta = () => ({
  charset: "utf-8",
  title: "Blog app",
  viewport: "width=device-width,initial-scale=1",
  description: "This is blog app",
  keywords: "blog, new posts, interest posts",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Layout>
          <Outlet />
          <ScrollRestoration />
          <Scripts />
          <LiveReload />
        </Layout>
      </body>
    </html>
  );
}

// Layout app
function Layout({ children }) {
  return (
    <div>
      <nav className="navbar">      
        <Link to="/" className="logo">
          Blog app
        </Link>
        <ul>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </nav>
      {/* Main content */}
      <div className="container">
        {children}
      </div>
    </div>
  );
}
