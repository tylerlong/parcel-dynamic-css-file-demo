import React from 'react';
import { Button, Space, Typography } from 'antd';
import { auto } from 'manate/react';

// prefix url, so that parcel won't process it
import css1 from 'url:./index1.css';
import css2 from 'url:./index2.css';

console.log(css1, css2);

import { Store } from './store';

const { Text, Title } = Typography;

const App = (props: { store: Store }) => {
  const { store } = props;
  const render = () => (
    <>
      <Title>Untitled App</Title>
      <Space>
        <Button
          onClick={() => {
            store.count -= 1;
          }}
        >
          -
        </Button>
        <Text>{store.count}</Text>
        <Button
          onClick={() => {
            store.count += 1;
          }}
        >
          +
        </Button>
        <Button
          onClick={() => {
            const element = document.getElementById('dynamic-css') as HTMLLinkElement;
            if (element.getAttribute('href') === css1) {
              element.setAttribute('href', css2);
            } else {
              element.setAttribute('href', css1);
            }
          }}
        >
          Toggle theme
        </Button>
      </Space>
    </>
  );
  return auto(render, props);
};

export default App;
