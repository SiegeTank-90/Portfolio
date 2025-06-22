import './App.css';

import Background from './Components/Background';
import Information from './Components/Information';
import Footer from './Components/Footer';

function App() {
    return (
        <>
            <Background />
            <div className='Information--Align'>
                <Information />
            </div>

            {/* <Footer /> Removed For Class Exercise will re-implment in professional*/}
        </>
    );
}

export default App;
