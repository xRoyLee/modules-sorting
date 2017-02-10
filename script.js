/*

Modules Sorting for SP

Short Project initiated by Mr Wong Chee Yong from Singapore Polytechnic

Done by Roy Lee Kok Bing
Started on: 09/02/2017
Completed on:
*/

function makeData() {

}

/* 
============================
Start Zero Padding

Add 2 leading zeroes infront of moduleNumber
if moduleNumber = 1,
(moduleNumber).pad();  //returns "001"
*/

Number.prototype.pad = function (size) {
    var s = String(this);
    while (s.length < (size || 3)) {
        s = "0" + s;
    }
    return s;
}

/* End zero padding 
============================
*/

/*
============================
Initialises Modules data from ET001 to ET258 
*/

for (var i = 0; i < 258; ++i) {

    var spModules = {
        moduleCode: "ET" + (i + 1).pad(),
        indexNumber: i + 1,
        rowNumber: 1,
        rowPosition: 1,
        rackNumber: 1,
        dummyNumber: 0
    }

    for (spModules.rowPosition = i + 1; spModules.rowPosition > 20; ++spModules.dummyNumber) {
        ++spModules.rowPosition;
        ++spModules.rowNumber;

        if (spModules.rowNumber === 2) {
            spModules.rowPosition = spModules.indexNumber - 20
        } else {
            spModules.rowPosition = spModules.indexNumber - ((spModules.rowNumber - 1) * 20)
        }

        if (spModules.rowNumber > 5) {
            a = spModules.rowNumber / (5 * spModules.rackNumber);
            ++spModules.rackNumber
            spModules.rowNumber - 4;
        }

    }

    console.log(spModules);
}

/* End initialising data
============================
*/









//function getData(code, index, rackNo, rowNo, rowPos) {
//
//
//    console.log("moduleCode : " + code + "\n" +
//        "indexNumber : " + index + "\n" +
//        "rackNumber : " + rackNo + "\n" +
//        "rowNumber : " + rowNo + "\n" +
//        "rowPosition : " + rowPos
//    );
//}
//
//
//getData(spModules.moduleCode, spModules.indexNumber, spModules.rackNumber, spModules.rowNumber, spModules.rowPosition);