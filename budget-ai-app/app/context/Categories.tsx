import React, { createContext, useState, ReactNode } from 'react';

interface CategoryContextType {
  categories: string[];
  addCategory: (name: string) => void;
}

export const CategoriesContext = createContext<CategoryContextType>({
  categories: [],
  addCategory: () => {},
});

export const CategoriesProvider = ({ children }: { children: ReactNode }) => {
  const [categories, setCategories] = useState<string[]>([]);

  const addCategory = (name: string) => {
    if (!categories.includes(name.trim()) && name.trim() !== "") {
      setCategories([...categories, name.trim()]);
    }
  };

  return (
    <CategoriesContext.Provider value={{ categories, addCategory }}>
      {children}
    </CategoriesContext.Provider>
  );
};
