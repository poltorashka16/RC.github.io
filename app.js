function calculatePrice(row) {
    const quantity = parseInt(document.getElementById(`productTable`).rows[row + 1].cells[3].getElementsByTagName('input')[0].value);
    const costRRP = parseInt(document.getElementById(`productTable`).rows[row + 1].cells[4].innerText.replace(/,/g, ''));
    const price = quantity * costRRP;
    document.getElementById(`productTable`).rows[row + 1].cells[5].innerText = price;
    updateTotalCost();
  }

  function updateTotalCost() {
    const rows = document.getElementById('productTable').rows;
    let totalCost = 0;
  
    for (let i = 1; i < rows.length - 1; i++) {
      const quantity = parseInt(rows[i].cells[3].getElementsByTagName('input')[0].value) || 0;
      const costRRP = parseInt(rows[i].cells[4].innerText.replace(/,/g, '')) || 0;
      const price = quantity * costRRP;
      rows[i].cells[5].innerText = price;
      totalCost += price;
    }
  
    document.getElementById('totalCost').innerText = 'Итоговая цена за декор и лист: ' + totalCost.toLocaleString();
    return totalCost;
  }
  

  function calculatePrice2(row) {
    const quantity = parseFloat(document.getElementById(`productTable2`).rows[row + 1].cells[2].getElementsByTagName('input')[0].value) || 0;
    const cost = parseFloat(document.getElementById(`productTable2`).rows[row + 1].cells[3].innerText.replace(/,/g, '')) || 0;
    const price = quantity * cost;
    document.getElementById(`productTable2`).rows[row + 1].cells[4].innerText = formatNumber(price);
    updateTotalCost2();
}

function calculatePrice2(row) {
    const quantity = parseFloat(document.getElementById(`productTable2`).rows[row + 1].cells[2].getElementsByTagName('input')[0].value) || 0;
    const cost = parseFloat(document.getElementById(`productTable2`).rows[row + 1].cells[3].innerText.replace(/,/g, '')) || 0;
    const price = quantity * cost;
    document.getElementById(`productTable2`).rows[row + 1].cells[4].innerText = formatNumber(price);
    updateTotalCost2();
}

function updateTotalCost2() {
    const rows = document.getElementById('productTable2').rows;
    let totalCost2 = 0;

    for (let i = 1; i < rows.length - 1; i++) {
        const quantity = parseFloat(rows[i].cells[2].getElementsByTagName('input')[0].value) || 0;
        const cost = parseFloat(rows[i].cells[3].innerText.replace(/,/g, '')) || 0;
        const price = quantity * cost;
        rows[i].cells[4].innerText = formatNumber(price);
        totalCost2 += price;
    }

    document.getElementById('totalCost2').innerText = 'Итоговая цена за Плинтус HPL compact: ' + formatNumber(totalCost2);
    return totalCost2;
}

function formatNumber(number) {
    return parseFloat(number).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 10 }).replace(/,/g, '');
}
  

function calculatePrice3(row) {
    const quantity = parseFloat(document.getElementById(`productTable3`).rows[row + 1].cells[2].getElementsByTagName('input')[0].value) || 0;
    const cost = parseFloat(document.getElementById(`productTable3`).rows[row + 1].cells[3].innerText.replace(/,/g, '')) || 0;
    const price = quantity * cost;
    document.getElementById(`productTable3`).rows[row + 1].cells[4].innerText = formatNumber(price);
    updateTotalCost3();
}

function updateTotalCost3() {
    const rows = document.getElementById('productTable3').rows;
    let totalCost3 = 0;

    for (let i = 1; i < rows.length - 1; i++) {
        const quantity = parseFloat(rows[i].cells[2].getElementsByTagName('input')[0].value) || 0;
        const cost = parseFloat(rows[i].cells[3].innerText.replace(/,/g, '')) || 0;
        const price = quantity * cost;
        rows[i].cells[4].innerText = formatNumber(price);
        totalCost3 += price;
    }

    document.getElementById('totalCost3').innerText = 'Итоговая цена за услуги по обработке: ' + formatNumber(totalCost3);
    return totalCost3;
}

function formatNumber(number) {
    return parseFloat(number).toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 10 }).replace(/,/g, '');
}
  
  function calculatePrice4(row) {
    const quantity = parseInt(document.getElementById(`productTable4`).rows[row + 1].cells[2].getElementsByTagName('input')[0].value);
    const cost = parseInt(document.getElementById(`productTable4`).rows[row + 1].cells[3].innerText);
    const price = quantity * cost;
    document.getElementById(`productTable4`).rows[row + 1].cells[4].innerText = price;
    updateTotalCost4();
  }
  
  function updateTotalCost4() {
    const rows = document.getElementById('productTable4').rows;
    let totalCost4 = 0;
  
    for (let i = 1; i < rows.length - 1; i++) {
      const quantity = parseInt(rows[i].cells[2].getElementsByTagName('input')[0].value) || 0;
      const cost = parseInt(rows[i].cells[3].innerText.replace(/,/g, '')) || 0;
      const price = quantity * cost;
      rows[i].cells[4].innerText = price;
      totalCost4 += price;
    }
  
    document.getElementById('totalCost4').innerText = 'Итоговая цена за услуги монтажа под ключ: ' + totalCost4.toLocaleString();
    return totalCost4;
  }

  function updateOverallTotal() {
    const totalCost = updateTotalCost();
    const totalCost2 = updateTotalCost2();
    const totalCost3 = updateTotalCost3();
    const totalCost4 = updateTotalCost4();
  
    const overallTotal = totalCost + totalCost2 + totalCost3 + totalCost4;
    document.getElementById('overallTotal').innerText = 'Общая стоимость: ' + overallTotal.toLocaleString();
  }
  
  function calculateTotal() {
    var button = document.getElementById('calculateButton');
    // После какого-то действия (например, расчета) измените стиль кнопки
    button.style.backgroundColor = '#ffd700';
    button.style.color = '#000';
  }

document.getElementById('calculateButton').addEventListener('click', updateOverallTotal);



