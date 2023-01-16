import { useRoutes } from 'react-router-dom';
import routes from '../routes/index';

const App = (): JSX.Element => {
  const routing = useRoutes(routes);
  return <>{routing}</>;
};
App.whyDidYouRender = true;
export default App;
