import React from 'react';
import { Menu } from 'antd';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';


function LeftMenu(props) {

  return (
    <Menu mode={props.mode}>
      <Menu.Item key="favorite">
        <a href="https://mayurmallavsaikia.github.io/movie-client/#/favorite">Favorite</a>
      </Menu.Item>
    </Menu>
  )
}

export default LeftMenu