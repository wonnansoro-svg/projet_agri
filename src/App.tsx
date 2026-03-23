import React from 'react';
// Assurez-vous que le nom du fichier correspond bien à celui que vous avez créé
import CoopDashboard from './CoopDashboard'; 

const App: React.FC = () => {
  return (
    <div className="h-screen w-full bg-gray-50">
      <CoopDashboard />
    </div>
  );
};

export default App;