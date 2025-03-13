let records = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" }
];

let found = records.find(function(record) {
    if (record.year === "2015" && record.result === "W") {
        return true;
    } else if (record.year === "2014" && record.result === "N/A") {
        return true;
    } else if (record.year === "2013" && record.result === "L") {
        return true;
    } else {
        return false;
    }
});

function superbowlWin(records) {

    const winningRecord = records.find(record => record.result === "W");

        return winningRecord ? winningRecord.year : undefined;
}

console.log(found);