import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav ,Navbar, Container, Tab, Tabs, Sonnet, Card, Button, Modal} from 'react-bootstrap'
import { Routes, Route, Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faCircle, faPaperclip, faUser,faHandFist,  } from "@fortawesome/free-solid-svg-icons"
import htmlCssJs from './img/htmlCssJs.png';
import react from './img/react.png';
import jquery from './img/jquery.png';
import fontAwesome from './img/fontAwesome.png';
import java from './img/Java.png';
import spring from './img/spring.png';
import maven from './img/maven.png';
import idPicture from './img/idPicture.jpg';
import bootstrap from './img/bootstrap.png';
import youtubeImg from './img/main.png';
import mybatis from './img/mybatis.png';
import shopImg from './img/shopMain.png';
import youtubeVideo from './img/videoAdd.mp4';
import youtubeSearch from './img/search.mp4';
import shopMain from './img/shopVideo.mp4';
import addCart from './img/addCart.mp4';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';




// import {faGithub} from "@fortawesome/free-regular-svg-icons"




function App() {

let [tab, setTab] = useState(0)
let [active, setActive] = useState(false)



  return (
    <div>
      <Header></Header>

      <Nav variant="pills" defaultActiveKey='link-1'>
    <Nav.Item>
      <Nav.Link className='aboutMe' eventKey="link-1" onClick={(e)=>  {setTab(0)}}>About Me</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link  className='project' eventKey="link-2" onClick={(e)=> {setTab(1)}}>Project</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='mainSkill' eventKey="link-3" onClick={(e)=> {setTab(2)}}>Main Skill</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link className='resolution' eventKey="link-4" onClick={()=> {setTab(3)}}>Resolution</Nav.Link>
    </Nav.Item>
  </Nav>

      <TabContent tab = {tab}/>
    </div>
    
  );

  function Header(params) {
    return  <Navbar bg="dark" variant="dark">
    <Nav className='linkNav' >
      <Nav.Item className='title'>
          <Nav>Jump for my experience</Nav>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link><BasicButton/></Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href='https://github.com/Tissue94'><FontAwesomeIcon icon={faGithub} style={{width:"50", height:"50"}}/></Nav.Link>
      </Nav.Item>
    </Nav>
  </Navbar>
  }

  function BasicButton() {
    return  (
    <Dropdown autoClose="outside">
    <Dropdown.Toggle id="dropdown-autoclose-outside" title=''>
      <img src={idPicture} className="id-picture"/>
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item >생년월일 : 1994.09.09</Dropdown.Item>
      <Dropdown.Item >휴대번호 : 010-8831-2979</Dropdown.Item>
      <Dropdown.Item >주소 : 경기도 군포시 금산로91 거주</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
    )
  }
}

 function TabContent({tab}) {

    const [showYoutube, setShowYoutube] = useState(false);
    const [showShop, setShowShop] = useState(false);

    const youtubeHandleClose = () => setShowYoutube(false);
    const youtubeHandleShow = () => setShowYoutube(true);

    const shopHandleClose = () => setShowShop(false);
    const shopHandleShow = () => setShowShop(true);

  
  
    switch (tab) {
      case 0: 
     
      
      return <div className='tab-containner'>
        <div className='about-containner'>
         <div>
            <h2><FontAwesomeIcon icon={faPaperclip}/> 직무 선택 계기</h2>
            <div >
              <div className='about-contents'><FontAwesomeIcon icon={faCircle}/>  타 직무에서 근무 중 더존 ERP 기능 관련해서 개발자와 비지니스 연락을 하다가 관심을 갖게 되었습니다.</div>
              <div className='about-contents'><FontAwesomeIcon icon={faCircle}/>  이후 과감히 이직을 결정하고 42서울 프로그램에 지원하며 프로그래밍이 성격에 맞는지 확인하였습니다.</div>
              <div className='about-contents'><FontAwesomeIcon icon={faCircle}/>  막히고 문제가 생기더라도 고민하고 해결해나가는 매력을 느껴 이 분야에서의 커리어를 시작하려고 합니다.</div>
            </div>
          </div>
          <div style={{marginTop : "5%"}}>
            <h2><FontAwesomeIcon icon={faPaperclip}/> 경력 사항</h2>
            <div>
              <div className='about-contents'><FontAwesomeIcon icon={faCircle}/>  42서울 프로그램으로 코딩프로그램에 처음 접하였습니다. (21.09 ~ 21.10)</div>
              <div className='about-contents'><FontAwesomeIcon icon={faCircle}/>  비트캠프 국비지원 프로그램을 통해 자바기반 웹플랫폼 서비스 구축과정을 수료하였습니다. (21.11 ~ 22.05)</div>
              <div className='about-contents'><FontAwesomeIcon icon={faCircle}/>  동료들과 유튜브 클론 프로젝트를 하였습니다.(22.07 ~ 22.11)</div>
              <div className='about-contents'><FontAwesomeIcon icon={faCircle}/>  개인 리액트 공부로 쇼핑몰 프로젝트와 포트폴리오 준비를 하였습니다.(22.10 ~ 22.11)</div>
            </div>
          </div>
        </div>
      </div> 
        
      case 1: return <div className='tab-containner'>
      <div className='project-containner'>
          <div style={{ width : "1100px", height: "93%"}}>
            <div className='d-flex'>
              <Card style={{ width : "19rem"}} onClick={youtubeHandleShow}>
                <Card.Img variant="top" src={youtubeImg} />
                  <Card.Body>
                    <Card.Title>YouTube Clone Project</Card.Title>
                    <Card.Text>
                      유튜브 클론 프로젝트입니다.
                      메인페이지와 검색페이지를 구현하였습니다.<br></br>
                    
                    </Card.Text>
                  </Card.Body>
              </Card>
              <Card style={{ width : "20rem"}} onClick={shopHandleShow}>
                <Card.Img variant="top" src={shopImg} />
                  <Card.Body>
                    <Card.Title>shop project</Card.Title>
                    <Card.Text>
                      리액트를 공부하기 위해 <br></br>
                      인터넷 강의를 들으며 신발 쇼핑몰을 구현해보았습니다.
                    </Card.Text>
                  </Card.Body>
              </Card>
              
              </div>
          </div>
          
      </div>

      {/* 유튜브 모달 */}
      <Modal show={showYoutube} onHide={youtubeHandleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Youtube Clone Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ width : "40%", height : "1300px", borderRight : "1px solid #d3d3d3"}}>
            <div style={{fontSize : "25px", fontWeight : "bold", marginLeft : "40px"}}>프로젝트 설명</div>
            <p>
                유튜브 클론 프로젝트를 팀원 1명과 구현하며
                HTML, CSS, JS, DB, MVC구조 등을 
                다루는 법을 배우고 익히고자 하였습니다.
            </p>
            <div style={{fontSize : "25px", fontWeight : "bold", marginLeft : "40px"}}>참여 기간</div>
            <div className='modal-desc'>2022.07 ~ 2022.11</div>
            <div style={{fontSize : "25px", fontWeight : "bold", marginLeft : "40px"}}>기술</div>
            <div className='modal-skill-containner' >
              <div className='d-flex'>
                <div className='modal-skill' style={{width : "70px"}}>html</div> 
                <div className='modal-skill' style={{width : "60px"}}>css</div>
                <div className='modal-skill' style={{width : "60px"}}>js</div>
                <div className='modal-skill' style={{width : "80px"}}>jquery</div>
                <div className='modal-skill' style={{width : "110px"}}>bootstrap</div>
                <div className='modal-skill' style={{width : "80px"}}>spring</div> 
              </div>
              <div className='d-flex' style={{marginTop : "10px"}}>
               <div className='modal-skill' style={{width : "90px"}}>mybatis</div> 
               <div className='modal-skill' style={{width : "70px"}}>mysql</div> 
               <div className='modal-skill' style={{width : "150px"}}>font awesome</div> 
              </div>
            </div>
          </div>
          <div style={{ width : "60%", height : "1300px", marginLeft: "10px"}}>
            <div className='video-desc'>무한스크롤과 데이터 추가</div>
              <video playsInline={true} muted={true} controls={true}>
                <source src={youtubeVideo} type="video/mp4"></source>
              </video>
            <div className='video-desc' style={{marginTop : "30px"}}>검색기능</div>
              <video playsInline={true} muted={true} controls={true} style={{marginTop : "30px"}}>
                <source src={youtubeSearch} type="video/mp4"></source>
              </video>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={youtubeHandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* 샵 모달 */}
      <Modal show={showShop} onHide={shopHandleClose}>
      <Modal.Header closeButton>
          <Modal.Title>Shop Project</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{ width : "40%", height : "1300px", borderRight : "1px solid #d3d3d3"}}>
            <div style={{fontSize : "25px", fontWeight : "bold", marginLeft : "40px"}}>프로젝트 설명</div>
            <p>
                리액트를 처음으로 다뤄본 개인프로젝트입니다.
                전반적인 리액트 라이브러리와 구현 방식을 <br></br>
                배우고 익히고자 노력하였습니다.
            </p>
            <div style={{fontSize : "25px", fontWeight : "bold", marginLeft : "40px"}}>참여 기간</div>
            <div className='modal-desc'>2022.10 ~ 2022.11</div>
            <div style={{fontSize : "25px", fontWeight : "bold", marginLeft : "40px"}}>기술</div>
            <div className='modal-skill-containner' >
              <div className='d-flex' >
                <div className='modal-skill' style={{width : "70px"}}>html</div> 
                <div className='modal-skill' style={{width : "60px"}}>css</div>
                <div className='modal-skill' style={{width : "60px"}}>js</div>
                <div className='modal-skill' style={{width : "70px"}}>react</div>
                <div className='modal-skill' style={{width : "110px"}}>bootstrap</div>
              </div>
              <div className='d-flex'style={{marginTop : "10px"}} >
              <div className='modal-skill' style={{width : "150px"}}>font awesome</div> 
              </div>
            </div>
          </div>
          <div style={{ width : "60%", height : "1300px", marginLeft: "10px"}}>
            <div className='video-desc'>메인화면 렌더링과 최근 본 목록</div>
              <video playsInline={true} muted={true} controls={true}>
                <source src={shopMain} type="video/mp4"></source>
              </video>
            <div className='video-desc' style={{marginTop : "30px"}}>장바구니 기능</div>
              <video playsInline={true} muted={true} controls={true} style={{marginTop : "30px"}}>
                <source src={addCart} type="video/mp4"></source>
              </video>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={shopHandleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>


    </div> 
           
      case 2: 

      return  <div className='tab-containner'>
      <div className='skill-containner'>
        <h2><FontAwesomeIcon icon={faPaperclip}/> 메인 스킬</h2>
        <div className='d-flex'>
          <div className='front-containner'>
            <div className='d-flex'>
              <img src={htmlCssJs} style={{width:"70%", height:"150px",  marginTop : "15px", marginLeft: "2%"  }}/>
              <img src={react} style={{width:"18%", height:"100px", marginTop:"38px", borderRadius:"20px", marginRight:"2%"}}/>
            </div>
            <div className='d-flex'>
              <img src={jquery} style={{width:"25%", height:"120px", marginLeft : "4%", marginTop : "20px"}} />
              <img src={fontAwesome} style={{width:"38%", height:"120px", marginTop : "20px"}} />
              <img src={bootstrap} style={{width:"25%", height:"120px", marginTop : "20px"}} />
            </div>
          </div>
          <div className='back-containner'>
            <div className='d-flex'> 
               <img src={java} style={{width:"45%", height:"120px", marginTop : "20px"}} />
               <img src={spring} style={{width:"45%", height:"120px", marginTop : "20px", marginRight:"2%" }} />
            </div>
            <div className='d-flex'>
               <img src={maven} style={{width:"30%", height:"100px", marginLeft : "8%", marginTop : "30px"}} />
               <img src={mybatis} style={{width:"45%", height:"140px", marginLeft : "8%", marginTop : "10px"}} />
            </div>
          </div>
        </div>
      </div>
    </div> 
        
      case 3: return  <div className='tab-containner'>
            <div className='about-containner'>
         <div>
            <h2><FontAwesomeIcon icon={faPaperclip}/> 포부 </h2>
            <div style={{marginTop : "50px"}}>
              <div className='resolution-contents'><FontAwesomeIcon icon={faHandFist}/> 저는 이 직무를 선택하면서 항상 배우고 끊임없이 성장하는 개발자가 되겠다고 결심하였습니다.</div>
              <div className='resolution-contents'><FontAwesomeIcon icon={faHandFist}/> 아직 부족한게 많지만 무조건 공부하고 배워서 프로젝트에 도움이 될 수 있도록 노력하겠습니다.</div>
            </div>
          </div>
        </div>
    </div> 
       
    }
  

}




export default App;
