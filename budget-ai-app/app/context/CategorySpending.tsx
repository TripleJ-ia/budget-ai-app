import React, { createContext, useState, ReactNode } from 'react';

interface CategorySpendingContextType {
  spending: { [category: string]: number };
  addSpending: (category: string, amount: number) => void;
  setSpending: React.Dispatch<React.SetStateAction<{ [category: string]: number }>>;
}

export const CategorySpendingContext = createContext<CategorySpendingContextType>({
  spending: {},
  addSpending: () => {},
  setSpending: () => {},
});

export const CategorySpendingProvider = ({ children }: { children: ReactNode }) => {
  const [spending, setSpending] = useState<{ [category: string]: number }>({});

  const addSpending = (category: string, amount: number) => {
    setSpending(prev => ({
      ...prev,
      [category]: Number(((prev[category] || 0) + amount).toFixed(2)),
    }));
  };

  return (
    <CategorySpendingContext.Provider value={{ spending, addSpending, setSpending }}>
      {children}
    </CategorySpendingContext.Provider>
      );
};