import { Document, Page, pdfjs } from 'react-pdf';

const App = () => {
  pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.js', import.meta.url).toString();
  return (
    <Document
      file={'http://localhost:5173/혼인관계증명서.pdf'}
      onLoadSuccess={({ numPages }) => {
        console.log('Document loaded with ' + numPages + ' pages');
      }}
      options={{ workerSrc: '/pdf.worker.js' } as any}
    >
      <Page pageNumber={1} />
    </Document>
  );
};

export default App;
