import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import type { Route } from "./+types/root";
import { ThemeProvider } from "~/providers/theme-provider";
import "./app.css";

export const meta = ({}: Route.MetaArgs) => [
  { title: "Peerlist UI Animation Challenge by Fecony" },
  ,
  {
    name: "apple-mobile-web-app-title",
    content: "Peerlist UI Animation Challenge by Fecony",
  },
];

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.bunny.net" },
  { rel: "stylesheet", href: "https://fonts.bunny.net/css" },
  { rel: "preconnect", href: "https://unavatar.io" },
  { rel: "preconnect", href: "https://i.seadn.io" },

  {
    rel: "icon",
    type: "image/png",
    href: "/favicon-96x96.png",
    sizes: "96x96",
  },
  { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
  { rel: "shortcut icon", href: "/favicon.ico" },
  {
    rel: "apple-touch-icon",
    sizes: "180x180",
    href: "/apple-touch-icon.png",
  },
  { rel: "manifest", href: "/site.webmanifest" },
];

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <main className="mx-auto h-screen flex flex-col items-center justify-center max-w-screen-sm overflow-x-hidden px-6 py-24 md:overflow-x-visible ">
          {children}
        </main>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <Outlet />
    </ThemeProvider>
  );
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
