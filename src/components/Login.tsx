import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Mail, Lock } from 'lucide-react';

const Login: React.FC<{ onRegisterClick: () => void }> = ({ onRegisterClick }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-semibold mb-4">Login</h2>
      <div className="w-full max-w-sm">
        <div className="mb-4">
          <div className="relative">
            <Mail className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" />
            <Input type="email" placeholder="Email" className="pl-10" />
          </div>
        </div>
        <div className="mb-6">
          <div className="relative">
            <Lock className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" />
            <Input type="password" placeholder="Password" className="pl-10" />
          </div>
        </div>
        <Button className="w-full mb-4">Log In</Button>
        <div className="text-sm text-center">
          Don't have an account?
          <button onClick={onRegisterClick} className="text-blue-500 hover:underline ml-1">
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
