import React from 'react';
import Header from './components/Header';
import LoginForm from './components/LoginForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <LoginForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
