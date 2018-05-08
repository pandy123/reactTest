import * as React from "react";
import * as  ReactDOM from "react-dom";
import { SideMenu } from "./SideMenu"
import { Layout, Breadcrumb } from 'antd';
import { Avatar } from 'antd';
import { Menu, Dropdown, Icon } from 'antd';
const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

export class Main extends React.Component<any, any> {
   public constructor(props?: any, context?: any) {
      super(props, context);
      // 设置属性
   }
   public render() {
      const menu = (
         <Menu>
            <Menu.Item>
               <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">个人信息</a>
            </Menu.Item>
            <Menu.Item>
               <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">退出</a>
            </Menu.Item>
         </Menu>
      );
      return (
         <Layout>
            <Layout>
               <Header className="header">
                  <div id="hearder-titile">
                     数据分析系统
               </div>
                  <div id="hearder-user">
                     <Avatar icon="user" />
                     <Dropdown overlay={menu}>
                        <a id="hearder-user-dropdown-content" className="ant-dropdown-link" href="#">
                           游客 <Icon type="down" />
                        </a>
                     </Dropdown>
                  </div>
               </Header>
            </Layout>
         </Layout>
      );
   }
}
