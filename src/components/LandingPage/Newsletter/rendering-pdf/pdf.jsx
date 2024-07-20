import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import FILE from '../rendering-pdf/sibling newsletter_Aug.pdf'
function App() {
    return (
        <div style={{ border: '1px solid rgba(0, 0, 0, 0.3)', height: '100%' }}>
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <Viewer fileUrl={FILE} />
            </Worker>
        </div>
    );
}

export default App;
