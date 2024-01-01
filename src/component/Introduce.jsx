import { Container, Col, Row } from 'react-bootstrap'; // Make sure to import Bootstrap CSS
import introduceProduct1 from '../assets/introduceProduct1.jpg';
import introduceProduct2 from '../assets/introduceProduct2.png';
import introduceProduct3 from '../assets/introduceProduct3.jpg';
import introduceProduct4 from '../assets/introduceProduct4.jpg';

const Introduce = () => {
    return (
        <Container className='introduceContainer my-5'>
            <Row>
                <Col lg={12} className='d-flex flex-column flex-column-reverse flex-md-row  mb-4 mb-md-0'>
                    <Col className='d-flex align-items-center justify-content-center p-0 pt-3 pt-md-0'>
                        <div className='productBox'>
                            <h2 className='h2 fw-bold'>Gabrielle CHANEL</h2>
                            <p className='fs-5'>
                                全新嗅覺體驗，花香四溢、明亮馥郁。結合茉莉、依蘭依蘭、橙花和最迷人的格拉斯晚香玉之花香，呈現出夢幻花香氣息。極具女性特質的香奈兒嘉柏麗香水，專為光芒四射的她而生。
                            </p>
                            <a href='#' className='text-decoration-none more'>
                                查看更多
                            </a>
                        </div>
                    </Col>
                    <Col className='p-0 perfumeImgBox'>
                        <img className='w-100 object-fit-cover perfumeImg' src={introduceProduct1} alt='Gabrielle CHANEL' />
                    </Col>
                </Col>

                <Col lg={12} className='d-flex flex-column flex-md-row mb-4 mb-md-0'>
                    <Col className='p-0 m-0 perfumeImgBox'>
                        <img className='w-100 object-fit-cover perfumeImg' src={introduceProduct2} alt='Five O’clock Au Gingembre' />
                    </Col>
                    <Col className='d-flex align-items-center justify-content-center p-0 m-0 pt-3 pt-md-0'>
                        <div className='productBox'>
                            <h2 className='h2 fw-bold'>Five O’clock Au Gingembre</h2>
                            <p className='fs-5'>
                                生薑與溫醇的肉桂香、紅糖的香甜摻和成一氣，溫暖微辛的氣息反倒形成一股輕煙氤氳開來，還帶點微微煙醺感漫溢在整個鼻息之間，細聞之下,又還有溫溫淡淡的木香，溫和而暖心。
                            </p>
                            <a href='#' className='text-decoration-none more'>
                                查看更多
                            </a>
                        </div>
                    </Col>
                </Col>

                <Col lg={12} className='d-flex flex-column flex-column-reverse flex-md-row mb-4 mb-md-0'>
                    <Col className='d-flex align-items-center justify-content-center p-0 m-0 pt-3 pt-md-0'>
                        <div className='productBox'>
                            <h2 className='h2 fw-bold'>CHANEL N°5</h2>
                            <p className='fs-5'>
                                N°5，女性魅力的極致精髓。散發柔美澄透的乙醛花束香氣。經典傳奇香氛，蘊藏於極簡設計的獨特瓶身。
                            </p>
                            <a href='#' className='text-decoration-none more'>
                                查看更多
                            </a>
                        </div>
                    </Col>
                    <Col className='p-0 m-0 perfumeImgBox'>
                        <img className='w-100 object-fit-cover perfumeImg' src={introduceProduct3} alt='CHANEL N°5' />
                    </Col>
                </Col>

                <Col lg={12} className='d-flex flex-column flex-md-row mb-4 mb-md-0'>
                    <Col className='p-0 m-0 perfumeImgBox'>
                        <img className='w-100 object-fit-cover perfumeImg' src={introduceProduct4} alt='D’Perfume Introduction' />
                    </Col>
                    <Col className='d-flex align-items-center justify-content-center p-0 m-0 pt-3 pt-md-0'>
                        <div className='productBox'>
                            <div className='mb-5'>
                                <h2 className='h4 fw-bold mb-3'>
                                    1.
                                    <br />
                                    Levels of Preventive Maintenance Compliance
                                </h2>
                                <p className='fs-6'>
                                    The core idea of preventative maintenance is the performance of proactive actions against unscheduled downtime
                                    in order to identify potential defects before they evolve into something more severe.
                                </p>
                            </div>
                            <div className='mb-5'>
                                <h2 className='h4 fw-bold mb-3'>
                                    2.
                                    <br />
                                    Percentage of Planned Maintenance
                                </h2>
                                <p className='fs-6'>
                                    The planned maintenance percentage is the total planned maintenance time in your CMMS software over a date range
                                    over the total number of hours of a service performed by the technicians.
                                </p>
                            </div>
                            <div className='mb-5'>
                                <h2 className='h4 fw-bold mb-3'>
                                    3.
                                    <br className='pb-2' />
                                    Critical percentage of planned maintenance
                                </h2>
                                <p className='fs-6'>
                                    Calculating the critical percentage of planned maintenance will help you prioritize the most important operations
                                    that should be performed immediately.
                                </p>
                            </div>
                            <a href='#' className='text-black text-decoration-none border border-2 border-black rounded-5 fs-5 px-4 py-2 d-inline-block w-100 text-center'>
                                Plan a free online training
                            </a>
                        </div>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

export default Introduce;
