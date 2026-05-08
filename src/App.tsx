import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import Login from "./features/auth/login/login";

const App = () => {
  let isLoggedIn : boolean = false;
  if(isLoggedIn) {
    return <MainLayout/>;
  }
  else{
    return <AuthLayout><Login /></AuthLayout>;
  }
};

export default App;