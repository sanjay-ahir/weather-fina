import './App.css';
import Search from "./component/Search";
const API_KEY = '129bf7036e383759d113293d1ed1194e';

function App() {

    return (
        <div className='bgImage' >
                <Search API_KEY={API_KEY}/>
        </div>
    );
}

export default App;
