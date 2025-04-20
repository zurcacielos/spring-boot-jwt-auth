
'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const [response, setResponse] = useState('');
  const router = useRouter();

  const call = async (path) => {
    const token = localStorage.getItem('token');
    if (!token) return router.push('/auth');

    const res = await fetch('http://localhost:8080/' + path, {
      headers: { Authorization: 'Bearer ' + token }
    });

    if (res.status === 403 || res.status === 401) {
      setResponse('🚫 Unauthorized or forbidden');
      return;
    }

    const text = await res.text();
    setResponse(text);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={() => call('public')}>Public</button>
      <button onClick={() => call('user')}>User</button>
      <button onClick={() => call('admin')}>Admin</button>
      <pre style={{ background: '#eee', padding: 10 }}>{response}</pre>
    </div>
  );
}
