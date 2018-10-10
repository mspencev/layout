
let table = undefined;

function initializeTable() {
    const tableDiv = document.getElementById('table-div');

    tableDiv.innerHTML = `
    <table>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
        <tr>
    </table>`;

    table = document.getElementsByTagName('table')[0];

    populateTable();
}

function populateTable() {
    let i = 1;

    const addRow = (i) => {
                
        var row = table.insertRow(i);

        for(let i = 0; i < 4; ++i){
            const cell = row.insertCell(i);
            cell.innerHTML = `${Math.random() * 1000}`;
        }
    }

    setTimeout(function run() {
        addRow(i);
        i += 1;

        if(i > 200){
            return;
        }
        setTimeout(run, 500);
    }, 500);
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initializeTable);
} else {  
    // We missed the DOMContentLoaded, it already loaded.
    initializeTable();
}



