import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { User, Mail, Lock } from 'lucide-react';
import { register } from '../lib/api';

const Register: React.FC<{ onLoginClick: () => void }> = ({ onLoginClick }) => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
    try {
      const response = await register(firstname, lastname, email, password);
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <div className="relative">
            <User className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" />
            <Input type="text" placeholder="First Name" value={firstname} onChange={(e) => setFirstname(e.target.value)} className="pl-10" maxLength={100} />
          </div>
        </div>
        <div className="mb-4">
          <div className="relative">
            <User className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" />
            <Input type="text" placeholder="Last Name" value={lastname} onChange={(e) => setLastname(e.target.value)} className="pl-10" maxLength={100} />
          </div>
        </div>
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
        <div className="mb-6">
          <div className="relative">
            <Lock className="absolute left-2.5 top-2.5 h-5 w-5 text-gray-400" />
            <Input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} className="pl-10" />
          </div>
        </div>
        <Button type="submit" className="w-full mb-4">Register</Button>
        <div className="text-sm text-center">
          Already have an account?
          <button onClick={onLoginClick} className="text-blue-500 hover:underline ml-1">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
