import title from './Title.png'
import floor from './floor-level.png'
import over from './default-view.png'
import over2 from './default-view-2.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1><a href='https://github.com/Joshua-00030/AlienDefense'>Alien Defense</a></h1>
          <h3>An OpenGL project by Joshua Romero</h3>
          <p>Hello, welcome to the Alien Defense project. It was created in OpenGL with a few supporting libraries such as <a href='https://github.com/tinyobjloader/tinyobjloader'>tinyobj</a>, <a href='https://www.opengl.org/resources/libraries/glut/glut_downloads.php'>glut</a>, <a href='https://www.opengl.org/sdk/libs/GLM/'>glm</a> and <a href='https://www.ambiera.com/irrklang/index.html'>irrklang</a>.</p>
        </div>
      </header>
      <div className='video'>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/CaoJBpe-n8c" title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen/>
      </div>
        <div className='pictureBox'>
          <img className='img' alt="Alien Defence's Title view" src={title}/>
          <img className='img' alt="Alien Defence's Default view" src={over}/>
          <img className='img' alt="Alien Defence's Default view" src={over2}/>
          <img className='img' alt="Alien Defence's Floor view" src={floor}/>
        </div>
        <div className='mainText'>
          <p>For this game you press 'n' to go to the next level, 't' after selecting a tile to build or sell towers, and escape to exit the game.</p>
          <p>If you would like to add music to the game you must edit the song names at lines 152 and 436 of main.cpp to your desired mp3 file. These flies must be placed in AlienDefence/TestGLProj/audio for the music to play</p>
        </div>
    </div>
  );
}

export default App;
