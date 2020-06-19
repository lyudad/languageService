import React  from 'react'

import {Cards} from '../../Blocks/Cards'
import {HeaderStyle, GameStyle, FooterStyle} from './style'
import {Row, Col, Layout, Menu, Button} from 'antd';
import YouTube from 'react-youtube';
import {BookOutlined, PlayCircleOutlined, SettingOutlined} from '@ant-design/icons';

const {Content} = Layout;
const {SubMenu} = Menu;

export const Home = ({data, content}) => {

    console.log("data>>>>", data)
    console.log("content>>>>", content)

/////Menu elenent

    const handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    const renderCards = (item) => (
        <Col span={8}>
            <Cards elem={item}/>
        </Col>
    )


///Youtybe element

    const playVideo = () => {
        const opts = {
            height: '240',
            width: '240',
            playerVars: {
                autoplay: 1,
            },
        };
        return <YouTube videoId="https://youtu.be/MixZfUIiSvY" opts={opts} onReady={_onReady}/>;
    }

    const _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.playVideo();
    }


    return (
        <Layout >
            <HeaderStyle>
                <Menu style={{backgroundColor: "#61dafb"}} onClick="" selectedKeys="" mode="horizontal">
                    <Menu.Item key="mail" icon={<BookOutlined />}>
                        Navigation One
                    </Menu.Item>
                    <Menu.Item key="app" icon={<PlayCircleOutlined />}>
                        Video lesson
                    </Menu.Item>
                    <SubMenu icon={<SettingOutlined />} title="Alphabet">
                        <Menu.ItemGroup title="Item 1">
                            <Menu.Item key="setting:1">Option 1</Menu.Item>
                            <Menu.Item key="setting:2">Option 2</Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Item 2">
                            <Menu.Item key="setting:3">Option 3</Menu.Item>
                            <Menu.Item key="setting:4">Option 4</Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item disabled key="alipay">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                            Navigation Four - Link
                        </a>
                    </Menu.Item>
                </Menu>
            </HeaderStyle>
            <Layout>
                <Content >
                    <Row justify="space-around">
                        <Col span={8}> <GameStyle alt="Game1" name="Game1"/></Col>
                        <Col span={8}> <GameStyle alt="Game2" name="Game2"/></Col>
                        <Col span={8}> <GameStyle alt="Game3" name="Game3"/></Col>
                        { /*   <Col span={8}> <YouTube /> </Col> */}
                        {/* {content.map(item => renderCards(item}*/}
                    </Row>
                </Content>
            </Layout>
            <FooterStyle> Footer </FooterStyle>
        </Layout>
    )
}



