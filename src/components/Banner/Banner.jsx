import React from "react";
import { Container, Row, Col, Image } from 'react-bootstrap';


const Banner = () => {
  return (
    <div>
       <Container fluid className="p-3">
      <Row noGutters>
        <Col lg={6} className="text-center text-lg-left">
          <div className="p-5">
            <img width="100" height="50" src="/src/assets/icon.png" alt=""/>
            <h1 className="display-4"> <span className="text-danger">𝓢𝓐𝓚𝓤𝓡𝓐</span> 𝓚𝓘𝓣𝓒𝓗𝓔𝓝</h1>
            <p className="lead">"𝒮𝒶𝓉𝒾𝓈𝒻𝓎 𝓎ℴ𝓊𝓇 𝒸𝓇𝒶𝓋𝒾𝓃ℊ𝓈 𝒶𝓃𝒹 𝒾𝓃𝒹𝓊𝓁ℊℯ 𝒾𝓃 𝒶 𝓌ℴ𝓇𝓁𝒹 ℴ𝒻 𝒻𝓁𝒶𝓋ℴ𝓇 𝓌𝒾𝓉𝒽 ℴ𝓊𝓇 𝒻ℴℴ𝒹"</p>
          </div>
        </Col>
        <Col lg={6}>
          <Image className="opacity-75 rounded" src="https://c4.wallpaperflare.com/wallpaper/564/324/1011/food-fish-black-background-caviar-wallpaper-preview.jpg" fluid />
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Banner;
