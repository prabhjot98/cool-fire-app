import { createContext, useContext, useReducer } from "react";

const NumberContext = createContext<number>(0);

const Number = ({ onDecrement }: { onDecrement: () => void }) => {
  const number = useContext(NumberContext);

  return (
    <div>
      <button type="button" onClick={onDecrement}>
        Decrement
      </button>
      <p>{number}</p>
    </div>
  );
};

type State = { number: number };
type Action = { type: "Decrement" } | { type: "DivideByTwo" };
const reducer = (state: State, action: Action) => {
  if (action.type === "Decrement") {
    return { number: state.number - 1 };
  }
};

export const App = () => {
  const [state, dispatch] = useReducer(reducer, { number: 0 } as State);

  return (
    <NumberContext.Provider value={state.number}>
      <div className="m-5">
        <div className="flex">
          <p>{state.number}</p>
          <button type="button" onClick={() => dispatch({ type: "Decrement" })}>
            Decrement!
          </button>
        </div>
      </div>
    </NumberContext.Provider>
  );
};
