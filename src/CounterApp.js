import { connect } from "react-redux";
import { ScreenContext, GlobalContext } from "./StoreContext";
import { compose } from "redux";
const CounterApp = ({ counter, name }) => {
  return (
    <h1>
      {name}:{counter}
    </h1>
  );
};

const mapScreenStateToProps = (state) => ({
  counter: state.counter
});
const mapGlobalStateToProps = (state) => ({
  name: state.userReducer.name
});

export default compose(
  connect(mapScreenStateToProps, null, null, { context: ScreenContext }),
  connect(mapGlobalStateToProps, null, null, { context: GlobalContext })
)(CounterApp);
