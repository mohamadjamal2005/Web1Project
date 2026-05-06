import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

const App = () => {
  let isLoggedIn : boolean = false;
  if(isLoggedIn) {
    return <MainLayout/>;
  }
  return <AuthLayout/>;
};

export default App;