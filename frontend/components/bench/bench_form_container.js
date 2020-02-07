import { connect } from "react-redux";
import { createBench } from "../../actions/benches_actions";
import BenchForm from "./bench_form";

const mSTP = (state, { location }) => ({
    lat: new URLSearchParams(location.search).get("lat"),
    lng: new URLSearchParams(location.search).get("lng")
});

const mDTP = dispatch =>({
    createBench: (bench)=>dispatch(createBench(bench))
});

export default connect(mSTP, mDTP)(BenchForm);