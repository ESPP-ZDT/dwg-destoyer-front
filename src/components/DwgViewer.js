import { useSelector } from 'react-redux';
import WebglViewer from 'webgl-viewer';

const DwgViewer = () => {
  const currentFile = useSelector(state => state.currentFile);

  if (!currentFile) {
    return <p>No file selected</p>
  }

  return (
    <WebglViewer file={currentFile} />
  );
}

export default DwgViewer;
