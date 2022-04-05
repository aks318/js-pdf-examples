import React from 'react'
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

const Catalogue = () => {
    const gencatalogue = () => {
        // let doc = new jsPDF();
        // let y = 10
        // let pageHeight = doc.internal.pageSize.height
        // let pageWidth = doc.internal.pageSize.width
        // console.log(pageHeight)
        // for(let i=0 ; i<10 ; i++){
        //     if(y+40>pageHeight) {
        //         doc.addPage();
        //         y=10
        //     }
        //     doc.addImage("http://101.53.133.164:1338/images/Diva_Invizio/shop/1/2.jpg" , (pageWidth/2)-15, y, 30, 30 ,'alias1')
        //     y=y+40
        // }
        // doc.save("catalogue.pdf")

        var doc = new jsPDF();
        let pageWidth = doc.internal.pageSize.getWidth();
        let pageHeight = doc.internal.pageSize.getHeight();
        let finalY = pageHeight * 0.03;
        doc.setFontSize(10);
        doc.text('ITEM LIST', pageWidth / 2, finalY, 'center');
        let y = finalY + 15;
        for (let i = 0; i < 10; i++){
            let designNumber = 111
            let dataFile  = "http://101.53.133.164:1338/images/Diva_Invizio/shop/1/2.jpg"
            let columns = [["Sr", "SKU Number", "Design No.", "Gr Wt", "Gold Wt", "D 1 Wt", "D 1 Pcs", "D 2 Wt", "D 2 Pcs", "Pt Wt", "Size"]];
            let rows = [[(i + 1), 111, 111, 111, 111, 111, 111, 111, 111 , 111, 111]];

            doc.autoTable({
                head: columns,
                body: rows,
                bodyStyles: { minCellHeight: 5, fontSize: 8, lineColor: [0, 0, 0] },
                headStyles: {
                  lineColor: [0, 0, 0],
                  fillColor: [192, 192, 192],
                  textColor: 0,
                  fontSize: 8,
                  fontStyle: 'bold',
                  lineWidth: 0.2
                },
                startY: y + 80,
                columnStyles: {
                  0: { cellWidth: 10 },
                  1: { "overflow": "linebreak" },
                  2: { "overflow": "linebreak" },
                  3: { "overflow": "linebreak" },
                  4: { "overflow": "linebreak" },
                  5: { "overflow": "linebreak" },
                },
                rowPageBreak: 'avoid',
                theme: 'grid',
                tableLineColor: [0, 0, 0],
                // eslint-disable-next-line no-loop-func
                didDrawCell: async (data) => {
                  if (data.column.index === 1 && data.cell.section === 'body') {
                    doc.addImage(dataFile, 'JPEG', (pageWidth / 2) - 35, y, 70, 70)
                    doc.text(`111`, (pageWidth / 2), y + 75, 'center')
                  }
                }
              });
              y += 120;
              if (y >= pageHeight - 50 && i < 10 - 1) {
                doc.addPage();
                y = 20
                finalY = 40
            }
        }
        finalY = doc.previousAutoTable.finalY + 10
        doc.save("catalogue.pdf")
    }
  return (
    <div>
        <button onClick={gencatalogue}>
            Catalogue
        </button>
    </div>
  )
}

export default Catalogue