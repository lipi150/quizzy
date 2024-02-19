import './App.css';

import ChatSat from './components/ChatSat';
import CardSection from './components/CardSection';

function App() {
  return (
    <div className="flex flex-col lg:flex-row  ">
       <ChatSat/>
       <CardSection/>
    </div>
  );
}

export default App;
