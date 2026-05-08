import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  let isLoggedIn : boolean = false;
  if(isLoggedIn) {
    return <MainLayout/>;
  }
  else{
    return <AuthLayout>{null}</AuthLayout>;
  }
};

export default App;