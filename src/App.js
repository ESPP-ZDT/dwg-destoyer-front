import { useDispatch } from 'react-redux';
import { createFile } from './actions/FileActions';
import { useRef } from 'react';
import DwgViewer from './components/DwgViewer';


function App() {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const handleFileSubmit = (e) => {
      e.preventDefault();
      const file = inputRef.current.files[0];
      dispatch(createFile(file));
  }

  return (
    <>
    <div className="App">
        <form onSubmit={handleFileSubmit}>
            <input type="file" ref={inputRef} name="file" />
            <button type="submit">upload</button>
        </form>
    </div>
    <div>
      <DwgViewer/>
    </div>
    </>
  );
}



export default App;
