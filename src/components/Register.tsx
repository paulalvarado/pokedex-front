import React from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { User, Mail, Lock } from 'lucide-react';

const Register: React.FC<{ onLoginClick: () => void }> = ({ onLoginClick }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <div className="w-full max-w-sm">
        <div className="mb-4">
          <div className="relative">
            <User className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" />
            <Input type="text" placeholder="Username" className="pl-10" />
          </div>
        </div>
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
        <Button className="w-full mb-4">Register</Button>
        <div className="text-sm text-center">
          Already have an account?
          <button onClick={onLoginClick} className="text-blue-500 hover:underline ml-1">
            Login
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;
