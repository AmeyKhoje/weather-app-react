import { ConfigProvider } from 'antd';
import Theme from './theme/Theme';
import Home from './pages/home/Home';

const App = () => {
  return (
    <ConfigProvider theme={Theme}>
      <Home />
    </ConfigProvider>
  );
};

export default App;
