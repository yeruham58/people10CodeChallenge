const getFile = fileDir => {
  var reader = new FileReader();
  // const rawFile = new XMLHttpRequest();
  // rawFile.open("GET", fileDir, false);
  // const allText = rawFile.responseText;
  // console.log(allText);
};

const csvToJson = csvFileDir => {
  var lines = csvFileDir.split("\n");

  console.log("lines");
  console.log(lines);

  var result = [];

  var headers = lines[0].split(",");

  for (var i = 1; i < lines.length; i++) {
    var obj = {};
    var currentline = lines[i].split(",");

    for (var j = 0; j < headers.length; j++) {
      obj[headers[j]] = currentline[j];
    }

    result.push(obj);
  }

  //return result; //JavaScript object
  return JSON.stringify(result); //JSON
};

// csvToJson(data1);
getFile(
  "/Users/pro/Desktop/People10Challenges/ETL_Challenge/csvFiles/data1.csv"
);
