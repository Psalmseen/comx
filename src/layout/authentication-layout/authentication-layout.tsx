import { Layout } from 'antd';

const AuthLayout = () => {
  const { Header, Content, Footer } = Layout;

  return (
    <>
      <Header>This is the page header</Header>
      <Content>This is the content</Content>
      <Footer>This is the footer</Footer>
    </>
  );
};

export default AuthLayout;
