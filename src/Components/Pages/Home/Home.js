import React  from 'react'

import {Row, Col, Layout, Menu, Carousel} from 'antd';
import {BookOutlined, PlayCircleOutlined, SettingOutlined} from '@ant-design/icons';

import 'antd/dist/antd.css';
import {Cards} from '../../Blocks/Cards'
import {ContentCarousel} from '../../Blocks/Carousel'
import PlayVideoYoutube from '../../Blocks/YouTube'
import {HeaderStyle, GameStyle, FooterStyle, CarouselStyle} from './style'


const {Content} = Layout;
const {SubMenu} = Menu;

export const Home = ({data, content}) => {

    console.log("data>>>>", data)
    console.log("content>>>>", content)

    const contentCard = [
        {
            id: 1,
            name: "Буква «A»",
            url: "https://lim-english.com/uploads/images/all/alphabet/Alphabet_new/a-letter.png",
            type: "video",
            difficulty: 3,
        },
        {
            id: 2,
            name: "Буква «B»",
            url: "https://lim-english.com/uploads/images/all/alphabet/Alphabet_new/b-letter.png",
            type: "video",
            difficulty: 3,
        },
        {
            id: 3,
            name: "Буква «C»",
            url: "https://lim-english.com/uploads/images/all/alphabet/Alphabet_new/c-letter.png",
            type: "image",
            difficulty: 3,
        },
        {
            id: 4,
            name: "Буква «D»",
            url: "https://lim-english.com/uploads/images/all/alphabet/Alphabet_new/d-letter.png",
            type: "image",
            difficulty: 3,
        },
        {
            id: 5,
            name: "Буква «E»",
            url: "https://lim-english.com/uploads/images/all/alphabet/Alphabet_new/e-letter.png",
            type: "video",
            difficulty: 3,
        },
        {
            id: 6,
            name: "Video",
            url: "https://youtu.be/MixZfUIiSvY",
            type: "image",
            difficulty: 3,

        },
    ];


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

    const sliderCards = (item) => {
        return (
            <div>
                <ContentCarousel elem={item.url}/>
            </div>)
    }


///Youtybe element
//
//     const playVideo = () => {
//         const opts = {
//             height: '240',
//             width: '240',
//             playerVars: {
//                 autoplay: 1,
//             },
//         };
//         ;
//     }
//
//     const videoOnReady = (event) => {
//         // access to player in all event handlers via event.target
//         event.target.playVideo();
//     }


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

                        <PlayVideoYoutube videoIdYoutube="MixZfUIiSvY"/>

                        {contentCard.map(item => renderCards(item))}

                        {/*<Col span={18}>
                         {contentCard.map(item => sliderCards(item))}
                         </Col>*/}


                        <Col span={8}>
                            <CarouselStyle>
                                <Carousel autoplay>
                                    {contentCard.map(item => {
                                        return (
                                            <div>
                                                <img src={item.url}/>
                                            </div>
                                        )
                                    })}
                                </Carousel>
                            </CarouselStyle>
                        </Col>
                        <Col span={8}>
                            <PlayVideoYoutube videoIdYoutube="_nBlN9yp9R8"/>
                        </Col>
                    </Row>

                </Content>
            </Layout>
            <FooterStyle> Footer </FooterStyle>
        </Layout>
    )
}



