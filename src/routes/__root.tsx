import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import type { ErrorComponentProps } from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "~/styles/app.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#252627" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      // ico for legacy clients, svg for everything modern, the rest via the manifest
      { rel: "icon", href: "/favicon.ico", sizes: "32x32" },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png", sizes: "180x180" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
      },
    ],
  }),
  shellComponent: RootDocument,
  component: () => <Outlet />,
  errorComponent: ErrorPage,
  notFoundComponent: NotFound,
});

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <head>
        <HeadContent />
      </head>
      <body className="h-full">
        {children}
        <div className="noise-overlay" />
        <Scripts />
      </body>
    </html>
  );
}

function Message({ title, detail }: { title: string; detail: ReactNode }) {
  return (
    <main className="container mx-auto flex flex-col gap-4 p-4 pt-16 text-[var(--cream)]">
      <h1 className="text-4xl font-black uppercase">{title}</h1>
      <div className="font-light">{detail}</div>
    </main>
  );
}

function NotFound() {
  return <Message title="404" detail="The requested page could not be found." />;
}

function ErrorPage({ error }: ErrorComponentProps) {
  const isDev = import.meta.env.DEV;
  return (
    <Message
      title="Oops!"
      detail={
        <>
          <p>{isDev ? error.message : "An unexpected error occurred."}</p>
          {isDev && error.stack && (
            <pre className="w-full overflow-x-auto p-4">
              <code>{error.stack}</code>
            </pre>
          )}
        </>
      }
    />
  );
}
