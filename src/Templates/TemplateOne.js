import React from 'react'
import jsPDF from 'jspdf'
import autoTable from 'jspdf-autotable'

const TemplateOne = () => {

     function DownloadSchedulePDF () {
        var doc = new jsPDF('p', 'pt')
        doc.text('Rowspan and colspan', 40, 50)
      
        var raw = bodyRows(40)
        var body = []
      
        for (var i = 0; i < raw.length; i++) {
          var row = []
          for (var key in raw[i]) {
            row.push(raw[i][key])
          }
          if (i % 5 === 0) {
            row.push({
              rowSpan: 5,
              content: i / 5 + 1,
              styles: { valign: 'middle', halign: 'center' },
            })
          }
          body.push(row)
        }
      console.log(body)
        autoTable(doc , ({
          startY: 60,
          head: [
            [
              {
                content: 'People',
                colSpan: 6,
                styles: { halign: 'center', fillColor: [22, 160, 133] },
              },
            ],
          ],
          body: body,
          theme: 'grid',
        }))
        doc.save('demo.pdf')
      }
    
      function bodyRows(rowCount) {
        rowCount = rowCount || 10
        var body = []
        for (var j = 1; j <= rowCount; j++) {
          body.push({
            id: j,
            name: "akash",
            email: "akash@gmail.com",
            city: "mumbai",
            expenses: "50000",
          })
        }
        return body
      }

  return (
    <div>
        <button onClick={DownloadSchedulePDF}>
            Template One
        </button>
    </div>
  )
}

export default TemplateOne