import { mealType } from "../types";

export const fetchOrder = async () => {
  const fetchData = async () => {
    const res = await fetch("http://localhost:8010/proxy/order/fetchOrder");
    if (!res.ok) {
      throw new Error("Fetch error leh");
    }
    return res;
  };

  try {
    const res = await fetchData();
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const submitOrder = async (meals: mealType[]) => {
  const submitData = async () => {
    const res = await fetch("http://localhost:8010/proxy/order/submitOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(meals),
    });
    if (!res.ok) {
      throw new Error("Submit error leh");
    }
    return res;
  };

  try {
    const res = await submitData();
    console.log(res.json());
    return res.json();
  } catch (err) {
    console.log(err);
  }
};
