import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WardrobeContextType {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  activeFilters: string[];
  setActiveFilters: (filters: string[]) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const WardrobeContext = createContext<WardrobeContextType | undefined>(undefined);

interface WardrobeProviderProps {
  children: ReactNode;
}

export function WardrobeProvider({ children }: WardrobeProviderProps) {
  const [activeTab, setActiveTab] = useState('Collections');
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const value = {
    activeTab,
    setActiveTab,
    activeFilters,
    setActiveFilters,
    selectedCategory,
    setSelectedCategory,
  };

  return (
    <WardrobeContext.Provider value={value}>
      {children}
    </WardrobeContext.Provider>
  );
}

export function useWardrobeContext() {
  const context = useContext(WardrobeContext);
  if (context === undefined) {
    throw new Error('useWardrobeContext must be used within a WardrobeProvider');
  }
  return context;
}
