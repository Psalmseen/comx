import AuthLayout from './layout/authentication-layout/authentication-layout';
import WelcomePage from './pages/welcome-page/welcome-page';
const App = () => (
  <div>
    <AuthLayout>
      <WelcomePage />
    </AuthLayout>
  </div>
);

export default App;
