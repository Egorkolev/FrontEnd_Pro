    function createTable() {
        var table = document.createElement("table");

        var count = 1;

        for (var i = 0; i < 10; i++) {
            var row = table.insertRow();

            for (var j = 0; j < 10; j++) {
                var cell = row.insertCell();
                cell.textContent = count;
                count++;
            }
        }

        document.body.appendChild(table);
    }

    window.onload = createTable;