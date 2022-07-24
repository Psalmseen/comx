import { Layout } from 'antd';
import { useState } from 'react';
import Tooltip from '../../components/tooltip/tooltip';
import Logo from '../../assets/comx.png';
import ChatIcon from '../../assets/chat.svg';
import './authentication-layout.styles.css';

const { Header, Content, Footer } = Layout;
const AuthLayout = ({ children }: { children: any }) => {
  const [isToolTipShown, setIsToolTipShown] = useState(false);
  return (
    <div className="auth-wrapper">
      <Header>
        <img className="logo" src={Logo} />
      </Header>
      <Content>{children}</Content>
      <Footer className="footer">
        <Tooltip isToolTipShown={isToolTipShown}>
          <span
            onMouseEnter={() => setIsToolTipShown(true)}
            onMouseLeave={() => setIsToolTipShown(false)}
            className="chat"
          >
            <img src={ChatIcon} />
          </span>
        </Tooltip>
      </Footer>
    </div>
  );
};
export default AuthLayout;
