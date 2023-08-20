import { Document, Page } from 'react-pdf';

const PdfPage = () => {
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

export default PdfPage;
