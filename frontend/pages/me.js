import Account from "../components/Account";
import PleaseSignIn from "../components/PleaseSignIn";
import RequestReset from "../components/RequestReset";

const Me = props => (
  <div>
    <PleaseSignIn>
      <Account />
      <RequestReset />
    </PleaseSignIn>
  </div>
);
export default Me;
