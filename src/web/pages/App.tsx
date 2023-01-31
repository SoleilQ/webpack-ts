import { useRoutes } from 'react-router-dom';
import { ConfigProvider, theme } from 'antd';
import routes from '../routes/index';
import Config from '../../config';

const App = (): JSX.Element => {
  const routing = useRoutes(routes);
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: Config.themeColor,
        },
        algorithm: theme.defaultAlgorithm,
      }}
    >
      {routing}
    </ConfigProvider>
  );
};
App.whyDidYouRender = true;
export default App;
