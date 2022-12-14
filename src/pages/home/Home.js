//https://www.bilibili.com/video/BV1tU4y1z7md/?spm_id_from=autoNext&vd_source=974f1f040950ccb17151543976235d48
import { IconsContainer, Video, Content} from'./style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import background from "./background.mp4";
import AnimatedLetters  from '../../components/Layout/AnimatedLetters/AnimatedLetters.js';

// import Loader from 'react-loaders';

function Home() {


    return (
        <div className="home-page">
            <Video loop autoPlay muted src={background} type="video/mp4" />
            <Content>
            <h1><AnimatedLetters strArray={"Hello, I'm Vivian,".split('')} startIdx={1}  /></h1>
            <h4><AnimatedLetters strArray={"a Web-developer in training".split('')} startIdx={19}  /></h4>
           
            <hr/>
            <p>React | JavaScript | Ruby on Rail | Html | CSS | Git</p>
           <IconsContainer>
                <a href="https://www.linkedin.com/in/vivian-zhang-525923142" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
                <a href="https://github.com/vivian-bb" rel="noopener noreferrer" target="_blank">
                    <FontAwesomeIcon icon={faGithubSquare} />
                </a>
            </IconsContainer>
            </Content>
                {/* <Loader type="line-scale" color="black" width={500} /> */}

        </div>
    )
}


//must be export after import in app.js 
export default Home;