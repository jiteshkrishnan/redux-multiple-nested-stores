import "./styles.css";
import { connect } from "react-redux";
import { asyncIncrement, increment } from "./actions";
import CounterApp from "./CounterApp";
import { ScreenContext } from "./StoreContext";
// A basic counter app, to show time it takes for
// sync dispatch and async dispatch (thunk action)
// In the reducer a delay of 2 secs is added for the
// increment action
const App = ({ dispatch }) => {
  // This is synchrounous dispatch
  const incrementAction = () => {
    const startTime = Date.now();
    dispatch(increment());
    const endTime = Date.now();
    console.log(
      "Time taken in sync dispatch: ",
      (endTime - startTime) / 1000,
      " secs"
    );
  };

  // This is asynchrounous dispatch

  const asyncIncrementAction = () => {
    const startTime = Date.now();
    dispatch(asyncIncrement());
    const endTime = Date.now();
    console.log(
      "Time taken in async dispatch: ",
      (endTime - startTime) / 1000,
      "secs"
    );
  };

  return (
    <div className="App">
      <CounterApp />
      <button onClick={incrementAction}>Increase count</button>
      <button onClick={asyncIncrementAction}>Aysnc Increase count</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch
  };
};

export default connect(null, mapDispatchToProps, null, {
  context: ScreenContext
})(App);
