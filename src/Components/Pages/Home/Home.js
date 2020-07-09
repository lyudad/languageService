import React  from 'react'
import {Row, Col, Layout, Menu, Carousel} from 'antd';
import {BookOutlined, PlayCircleOutlined, SettingOutlined} from '@ant-design/icons';
import 'antd/dist/antd.css';

import {Cards} from 'Components/Blocks/Cards'
import PlayVideoYoutube from 'Components/Blocks/YouTube'
import {HeaderStyle, GameStyle, FooterStyle, CarouselStyle} from './style'

const {SubMenu} = Menu;

export const Home = ({data, content}) => {

    console.log("data>>>>", data);
    console.log("content>>>>", content);

    const contentCard = [
        {
            id: 1,
            name: "Буква «A»",
            url: "_nBlN9yp9R8",
            type: "video",
            difficulty: 3,
        },
        {
            id: 2,
            name: "Буква «B»",
            url: "VeQ-Dx2Tqx0",
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
            type: "image",
            difficulty: 3,
        },
        {
            id: 6,
            name: "Video",
            url: "_nBlN9yp9R8",
            type: "video",
            difficulty: 3,

        },
    ];

    const renderCarousel = (item) => {
        if ((item.type) === "video") {
            return (
                <Col span={4}>
                    <PlayVideoYoutube videoId={item}/>
                </Col>
            )
        }
        if ((item.type) === "image") {
            return (
                <Col span={4}>
                    <Cards elem={item}/>
                </Col>
            )
        }
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
                <Row justify="space-around">
                    <Col span={8}> <GameStyle alt="Game1" name="Game1"/></Col>
                    <Col span={8}> <GameStyle alt="Game2" name="Game2"/></Col>
                    <Col span={8}> <GameStyle alt="Game3" name="Game3"/></Col>
                </Row>
                <Row>
                    <CarouselStyle>
                        <Carousel
                            dots={true}
                            showSides={true}
                            sidesOpacity={.5}
                            sideSize={.1}
                            slidesToScroll={3}
                            slidesToShow={3}
                            scrollOnDevice={true}
                            autoplay>
                            {contentCard.map(item => ( renderCarousel(item)))}
                        </Carousel>
                    </CarouselStyle>
                </Row>
            </Layout>
            <FooterStyle> Footer </FooterStyle>
        </Layout>
    )
}
