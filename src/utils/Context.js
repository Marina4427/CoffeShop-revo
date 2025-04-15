import { createContext, useState, useMemo, useEffect } from "react";

export const CustomContext = createContext();
export const Context = (props) => {
  const [basket, setBasket] = useState(() => {
    const savedBasket = localStorage.getItem("basket");
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);

  const addBasket = (product) => {
    const price = Number(product.price.replace(/\./g, "").replace(",", ".")); // превращаем '147.000' в 147000

    setBasket((prev) => {
      // Проверяем, есть ли товар уже в корзине
      const existing = prev.find((item) => item.id === product.id);

      if (existing) {
        return prev.map((item) =>
          item.id === product.id
            ? {
                ...item,
                count: item.count + 1,
                totalPrice: (item.count + 1) * item.price,
              }
            : item
        );
      } else {
        return [
          ...prev,
          {
            id: product.id,
            img: product.img,
            title: product.title,
            price,
            count: 1,
            totalPrice: price,
          },
        ];
      }
    });
  };

  const delBasket = (id) => {
    setBasket((prev) => prev.filter((item) => item.id !== id));
  };

  const plusOneBasket = (id) => {
    setBasket((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            count: item.count + 1,
            totalPrice: item.price * (item.count + 1),
          };
        }
        return item;
      })
    );
  };

  const minusOneBasket = (id) => {
    let count = basket.find((item) => item.id === id).count;

    if (count > 1) {
      setBasket((prev) =>
        prev.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              count: item.count - 1,
              totalPrice: item.price * (item.count - 1),
            };
          }
          return item;
        })
      );
    }
  };

  const total = useMemo(
    () => ({
      price: basket.reduce((sum, item) => sum + item.totalPrice, 0),
      count: basket.reduce((sum, item) => sum + item.count, 0),
    }),
    [basket]
  );

  const value = {
    basket,
    setBasket,
    addBasket,
    plusOneBasket,
    minusOneBasket,
    delBasket,
    total,
  };

  return (
    <CustomContext.Provider value={value}>
      {props.children}
    </CustomContext.Provider>
  );
};
