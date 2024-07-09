import Header from './Header';
import Footer from './Footer'
import Studentsprops from './Studentsprops';
import background from './free-nature-images.jpg';
import style from './index.css'
function App() {
  const list = (
    <ul>
      <li>1</li>
      <li>2</li>
    </ul>
  );
  return (
    <div className="App" style={{
      backgroundImage: `url(${background})`,
      height: '800px',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat'
    }}>
      <Header />
      <h1>Hello This is my First react app</h1>
      <p>I am learning react in &copy; {new Date().getFullYear()}</p>
      {list}
      <Footer />
      <Studentsprops name="Eshwarkutty" age="25" isStudent={true} />
      <Studentsprops name="Flutter" age={1} isStudent={false} />
      <Studentsprops name="Eshu" />
    </div>
  );
}
export default App;
