import './App.css';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  const notify = () => toast('Here is your toast.');
  return (
    <div>
      <button onClick={notify} className="|">Make me a toast</button>
      <Toaster />
    </div>
  );
}

export default App;
