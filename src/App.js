import './App.css';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import TemplateOne from './Templates/TemplateOne';

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

    autoTable(doc , ({
      margin: { top: 10 },
      columnStyles : {
        0 : {cellWidth : "auto"},
        1 : {cellWidth : 50}
      }, 
      body: [
        ['Aakash' , {
          rowSpan: 5,
          content: "",
          styles: { valign: 'middle', halign: 'center'}, 
        }],
        ['Aakash'],
        ['Aakash'],
        ['Aakash'],
        ['Aakash'],
        [{
          colSpan: 2,
          content: `Aakash ${256}`
        }],
      ],
      theme: 'grid',
      didDrawCell: (data) => {
        if(data.column.index === 1  && data.cell.raw && data.cell.section === 'body'){
          console.log(data.cell)
          let img = "http://101.53.133.164:1338/images/Diva_Invizio/shop/1/2.jpg"
          let dimW = data.cell.width;
          let dimH = data.cell.height;
          doc.addImage(img, data.cell.x, data.cell.y, dimW ,dimH)
        }
      }
    }))

doc.save('table.pdf')
  }
  return (
    <div className="App">
      <button onClick={pdfPrint}>Print</button>
      <TemplateOne />
    </div>
  );
}

export default App;
