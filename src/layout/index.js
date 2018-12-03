// 引入Layout布局组件, Menu菜单组件, Icon图标组件
import { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import Link from 'umi/link';

// Header, Footer, Sider, Content组件在Layout组件模块下
const { Header, Footer, Sider, Content} = Layout;

// 引入子菜单组件
const SubMenu = Menu.SubMenu;

class BasicLayout extends Component{
    render() {
        return (
            <Layout>
                <Sider width={256} style={{ minHeight: '100vh', color: 'white' }}>
                    {/*Sider*/}
                    <div style={{ height: '32px', background: 'rgba(255,255,255,.2)', margin: '16px'}}/>
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>Helloworld</span>
                        </Menu.Item>
                        {/*需要配置导航，使得能在点击导航时，触发 URL 刷新，路由根据配置返回和当前 URL 匹配的内容.*/}
                        <SubMenu
                            key="sub1"
                            title={<span><Icon type="dashboard" /><span>Dashboard</span></span>}
                        >
                            <Menu.Item key="2"><Link to='/dashboard/analysis'>分析页</Link></Menu.Item>
                            <Menu.Item key="3"><Link to='/dashboard/monitor'>监控页</Link></Menu.Item>
                            <Menu.Item key="4"><Link to='/dashboard/workplace'>工作台</Link></Menu.Item>
                        </SubMenu>
                        <SubMenu
                            key="sub2"
                            title={<span><Icon type="dashboard" /><span>Dashboard2</span></span>}
                        >
                            <Menu.Item key="2">分析页2</Menu.Item>
                            <Menu.Item key="3">监控页2</Menu.Item>
                            <Menu.Item key="4">工作台2</Menu.Item>
                        </SubMenu>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', textAlign: 'center', padding: 0 }}>Header</Header>
                    <Content style={{ margin: '24px 16px 0' }}>
                        {/*Content*/}
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center'}}>
                        {/*Footer*/}
                        Ant Design ©2018 Created by Ant UED
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}

export default BasicLayout;