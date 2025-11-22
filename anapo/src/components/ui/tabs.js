// src/components/ui/tabs.js
import React, { createContext, useContext } from 'react';

const TabsContext = createContext();

export const Tabs = ({ value, onValueChange, children, className }) => {
  return (
    <TabsContext.Provider value={{ activeTab: value, setActiveTab: onValueChange }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
};

export const TabsList = ({ children, className }) => {
  return <div className={className}>{children}</div>;
};

export const TabsTrigger = ({ value, children, className }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext);
  const isActive = activeTab === value;
  const activeClasses = 'bg-white text-blue-600 shadow-sm';
  const inactiveClasses = 'bg-transparent text-gray-500';

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`p-3 rounded-md font-semibold transition-colors duration-200 ${isActive ? activeClasses : inactiveClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, children, className }) => {
  const { activeTab } = useContext(TabsContext);
  return activeTab === value ? <div className={className}>{children}</div> : null;
};