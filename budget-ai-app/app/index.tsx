import React from 'react';
import AppNavigator from './navigator/AppNavigator';
import { CategoriesProvider } from './context/Categories';
import { CategorySpendingProvider } from './context/CategorySpending';

export default function App() {
  console.log("App rendering"); 

  return (
    <CategoriesProvider>
      <CategorySpendingProvider>
        <AppNavigator />
      </CategorySpendingProvider>
    </CategoriesProvider>
  );
}
