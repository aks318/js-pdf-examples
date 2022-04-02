import './App.css';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

function App() {
  const pdfPrint = () => {
    const doc = new jsPDF()

    autoTable(doc, {
      styles: { fillColor: [255, 0, 0] },
      columnStyles: { 0: { halign: 'center', fillColor: [0, 255, 0] } }, // Cells in first column centered and green
      margin: { top: 10 },
      body: [
        ['Sweden', 'Japan', 'Canada'],
        ['Norway', 'China', 'USA'],
        ['Denmark', 'China', 'Mexico'],
      ],
    })
    
    // Example usage of columns property. Note that America will not be included even though it exist in the body since there is no column specified for it.
    autoTable(doc, ({
      columnStyles: { europe: { halign: 'start' } }, // European countries centered
      body: [
        { europe: 'Sweden', america: 'Canada', asia: 'China' },
        { europe: 'Norway', america: 'Mexico', asia: 'Japan' },
      ],
      columns: [
        { header: 'Europe', dataKey: 'europe' },
        { header: 'Asia', dataKey: 'asia' },
      ],
    }))

doc.save('table.pdf')
  }
  return (
    <div className="App">
      <button onClick={pdfPrint}>Print</button>
    </div>
  );
}

export default App;
