import Expenses from "./components/Expenses/Expenses";

function App() {
  const expenses = [
    {
      id: 1,
      title: "cat",
      amount: 284,
      date: new Date(2022, 10, 7),
    },
    { id: 2, title: "car", amount: 2804, date: new Date(2021, 10, 18) },
    { id: 3, title: "kfc", amount: 6.40, date: new Date(2022, 4, 27) },
    { id: 4, title: "cake", amount: 284.33, date: new Date(2021, 12, 21) },
  ];

  return (
    <div>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
