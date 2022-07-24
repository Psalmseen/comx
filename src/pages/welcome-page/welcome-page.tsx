import { Button } from 'antd';
import './welcome-page.styles.css';
const WelcomePage = () => (
  <>
    <section className="welcome-page">
      <div className="welcome__wrapper">
        <h1 className="welcome__title">Sign in to Comx</h1>
        <p className="welcome__text">Welcome to Comx</p>
        <Button className="btn">Sign in</Button>
      </div>
      <div className="welcome__wrapper">
        <h1 className="welcome__title">Create an Account</h1>
        <p className="welcome__text">Join the Family</p>
        <Button className="btn btn--dark">Register</Button>
      </div>
    </section>
  </>
);

export default WelcomePage;
