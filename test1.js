const n = 5;

// Upper part
for (let i = 1; i <= n; i++) {
    let row = "";

    // leading spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    // stars and inner spaces
    if (i === 1) {
        row += "*";
    } else {
        row += "*";
        for (let j = 1; j <= (2 * i - 3); j++) {
            row += " ";
        }
        row += "*";
    }

    console.log(row);
}

// Lower part
for (let i = n - 1; i >= 1; i--) {
    let row = "";

    // leading spaces
    for (let j = 1; j <= n - i; j++) {
        row += " ";
    }

    if (i === 1) {
        row += "*";
    } else {
        row += "*";
        for (let j = 1; j <= (2 * i - 3); j++) {
            row += " ";
        }
        row += "*";
    }

    console.log(row);
}