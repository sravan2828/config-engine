import React from 'react';
import { Menu, Icon } from 'antd';
import Logo from "../assets/config_logo.png";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class NavMenu extends React.Component {
  state = {
    current: 'mail'
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <div className="nav-block">
        <img className="logo" src={Logo} width="90px" height="30px" alt="logo"/>
      <Menu
        onClick={this.handleClick}
        selectedKeys={[this.state.current]}
        mode="horizontal"
        theme="dark"
      >
        <Menu.Item key="mail">
          <Icon type="code" />dev
        </Menu.Item>
        <SubMenu title={<span className="submenu-title-wrapper"><Icon type="team" />test</span>}>
          <MenuItemGroup title="regular">
            <Menu.Item key="setting:1">t1</Menu.Item>
            <Menu.Item key="setting:2">t2</Menu.Item>
          </MenuItemGroup>
          <MenuItemGroup title="e2e">
            <Menu.Item key="setting:3">t3</Menu.Item>
            <Menu.Item key="setting:4">t4</Menu.Item>
          </MenuItemGroup>
        </SubMenu>
        <Menu.Item key="app" disabled>
          <Icon type="appstore" />prod
        </Menu.Item>
      </Menu>
      </div>
    );
  }
}