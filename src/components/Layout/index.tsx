import NavBar from '../NavBar';
import { LayoutContainer } from './styles';

type AppLayoutProps = {
  children?: React.ReactNode;
};

const AppLayout: React.FC<AppLayoutProps> = ({ children }: AppLayoutProps) => {
  return (
    <>
      <NavBar />
      <LayoutContainer>{children}</LayoutContainer>
    </>
  );
};

export default AppLayout;
