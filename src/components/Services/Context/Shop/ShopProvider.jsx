import { createContext, useState } from "react";

export const ShopContext = createContext(null); // ✅ Ensure it's exported

export const ShopProvider = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <ShopContext.Provider value={{ selectedCategory, setSelectedCategory }}>
      {children}
    </ShopContext.Provider>
  );
};
