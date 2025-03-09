import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, Lock } from 'lucide-react';
import { login } from '../lib/api';

const Login: React.FC<{ onRegisterClick: () => void }> = ({ onRegisterClick }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await login(email, password);
      console.log('Login successful:', response.data);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <div className="relative">
            <Mail className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" />
            <Input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-10" />
          </div>
        </div>
        <div className="mb-6">
          <div className="relative">
            <Lock className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" />
            <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="pl-10" />
          </div>
        </div>
        <Button type="submit" className="w-full mb-4">Log In</Button>
        <div className="text-sm text-center">
          Don't have an account?
          <button onClick={onRegisterClick} className="text-blue-500 hover:underline ml-1">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
