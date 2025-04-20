
'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AuthPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const call = async (type) => {
    try {
      const res = await fetch('http://localhost:8080/auth/' + type, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(errText);
      }

      const data = await res.json();
      if (type === 'login') {
        console.log();
        localStorage.setItem('token', data.token);
        router.push('/dashboard');
      } else {
        alert('User registered! Now log in.');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div>
      <h1>Auth</h1>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} /><br />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={() => call('register')}>Register</button>
      <button onClick={() => call('register-admin')}>Register Admin</button>
      <button onClick={() => call('login')}>Login</button>
    </div>
  );
}
