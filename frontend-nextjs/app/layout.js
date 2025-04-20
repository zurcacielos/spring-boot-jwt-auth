'use client';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

export default function RootLayout({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setLoggedIn(!!token);
  });

  const logout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
    if (pathname !== '/auth') {
      router.push('/auth');
    }
  };

  return (
      <html lang="en">
      <body style={{ fontFamily: 'sans-serif', padding: 40 }}>
      <div style={{ marginBottom: 20 }}>
        {loggedIn ? (
            <>
              <strong>Logged in</strong>
              <button onClick={logout} style={{ marginLeft: 10 }}>Logout</button>
            </>
        ) : (
            <span>Not logged in</span>
        )}
      </div>
      {children}
      </body>
      </html>
  );
}
