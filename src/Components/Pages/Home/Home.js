import React  from 'react'

import {Cards} from '../../Blocks/Cards'
import { HeaderStyle, GameStyle, FooterStyle } from './style'
import { Row, Col, Layout, Menu,  Button} from 'antd';
import YouTube from 'react-youtube';
import { BookOutlined, PlayCircleOutlined, SettingOutlined } from '@ant-design/icons';

const {Content} = Layout;
const { SubMenu } = Menu;

export const Home = (showContent, ...rest ) => {

    // const data = [
    //     {
    //         id: 1,
    //         name: "Video",
    //         url: "https://youtu.be/MixZfUIiSvY",
    //         type: "image | video",
    //         difficulty: 3,
    //     },
    //     {
    //         id: 2,
    //         name: "Буква «A»",
    //         url: "https://lim-english.com/uploads/images/all/alphabet/Alphabet_new/a-letter.png",
    //         type: "image|video",
    //         difficulty: 3,
    //     },
    //     {
    //         id: 3,
    //         name: "Буква «B»",
    //         url: "https://lim-english.com/uploads/images/all/alphabet/Alphabet_new/b-letter.png",
    //         type: "image|video",
    //         difficulty: 3,
    //     },
    //     {   id: 4,
    //         name: "Буква «C»",
    //         url: "https://lim-english.com/uploads/images/all/alphabet/Alphabet_new/c-letter.png",
    //         type: "image|video",
    //         difficulty: 3,
    //     },
    //     {
    //         id: 5,
    //         name: "Буква «D»",
    //         url: "https://lim-english.com/uploads/images/all/alphabet/Alphabet_new/d-letter.png",
    //         type: "image | video",
    //         difficulty: 3,
    //     },
    //     {
    //         id: 6,
    //         name: "Буква «E»",
    //         url: "https://lim-english.com/uploads/images/all/alphabet/Alphabet_new/e-letter.png",
    //         type: "image|video",
    //         difficulty: 3,
    //     },
    // ];
    
    
    
/////Menu elenent
    
    
   const handleClick = (e) => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

/////Show content 
    
    const buttonShowCard = (showContent) => {
        console.log("showContent>>>>>>", showContent)
        {showContent.map(el => renderCards(el))}
        
    }
    
    const renderCards = (el) => (
        <Col span={8}>
            <Cards elem={el}/>
        </Col>
    )

    const imageGame = () =>{
        <img src="https://d1iiooxwdowqwr.cloudfront.net/pub/appsubmissions/20181102132913_L2S_Icon_Android.png"/>
    }
///Youtybe element
    
    const playVideo = () => {
        const opts = {
            height: '240',
            width: '240',
            playerVars: {
                autoplay: 1,
            },
        };
        return <YouTube videoId="https://youtu.be/MixZfUIiSvY" opts={opts}  onReady = {_onReady}/>;
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
                <Menu.Item key="app"  icon={<PlayCircleOutlined />}>
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
                <Menu.Item  disabled key="alipay">
                    <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                        Navigation Four - Link
                    </a>
                </Menu.Item>
            </Menu>
            </HeaderStyle>
            <Layout>
                <Content >
                    <Row justify="space-around" >
                        <Col span={8}> <GameStyle alt="Game1" name="Game1" /></Col>
                        <Col span={8}> <GameStyle alt="Game2" name="Game2"/></Col>
                        <Col span={8}> <GameStyle alt="Game3" name="Game3"/></Col>
                        { /*   <Col span={8}> <YouTube /> </Col> */}
                        <Button
                            type="primary"
                            onClick={{buttonShowCard}}
                        >
                            Show Card
                        </Button>
                    </Row>
                </Content>
            </Layout>
            <FooterStyle> Footer </FooterStyle>
        </Layout>
    )
}



