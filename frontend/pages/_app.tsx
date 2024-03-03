import '@/styles/globals.scss';
import { wrapper } from './api/store';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { ProjectProvider } from './api/context';

const App = ({ Component, ...rest }: AppProps) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <ProjectProvider>
        <Component {...props.pageProps} />
      </ProjectProvider>
    </Provider>
  );
};

export default App;
