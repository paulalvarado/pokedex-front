import React, { useState } from 'react';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const toggleForm = () => {
    setShowLogin(!showLogin);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        {showLogin ? (
          <Login onRegisterClick={toggleForm} />
        ) : (
          <Register onLoginClick={toggleForm} />
        )}
      </div>
    </div>
  );
}

export default App;
