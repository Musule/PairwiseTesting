var chalk = require('chalk');
var fs = require("fs");
var csv_stringify = require('csv-stringify');
var xlsx = require('node-xlsx');
var Excel = require('exceljs');
var workbook = new Excel.Workbook();
var stringifyObject = require('stringify-object');
var convert = require('xml-js');
var module = require('covertable');
var make = module.default;
var sorters = module.sorters;
var result = [];

describe("", () => {
it("成对测试", () => {
    var workSheetsFromFile = xlsx.parse(`${__dirname}/fields_enumerator.xlsx`);
    var xlsx_data = workSheetsFromFile[0].data;
    var row_num = workSheetsFromFile[0].data.length;
    console.log(chalk.blue.bold("行数(row num):"), chalk.green.bold(row_num))
    var column_num = workSheetsFromFile[0].data[0].length;
    console.log(chalk.blue.bold("列数(column num):"), chalk.green.bold(column_num))
    var row_name = workSheetsFromFile[0].data[0];
    console.log(`${chalk.blue.bold("列名(column name):")}${chalk.green.bold(row_name)}`)
    var row_values = []; 
    for (let column_index = 0; column_index < column_num; column_index++) {
        var row_values2 = []; 
        for (let row_index = 1; row_index < row_num; row_index++) {
            var cell = xlsx_data[row_index][column_index]
            if (cell !== undefined) {
                row_values2[row_index - 1] = cell;
            }
        }
        row_values[column_index] = row_values2

    }
    console.log(chalk.blue.bold("行值(row value)："), row_values)
    var columns = row_values;
    var csv_columns_name = row_name;

    result = make(columns, { sorter: sorters.random })
    console.log(result);
    for (let index = 0; index < result.length; index++) {
        const element = result[index];
        fs.writeFile(`./output/${formatTime(new Date())}.txt`, element + "\n", { flag: "a" }, function (err) {
            if (err) {
                return console.log(err);
            }
        })
    }
    csv_stringify(result, { header: true, columns: arrayToObj(csv_columns_name) }, (err, output) => {
        if (err) throw err;
        fs.writeFile(`./output/${formatTime(new Date())}.csv`, output, (err) => {
            if (err) {
                logger.error(err);
            };
        });
    });
    var pretty = stringifyObject(arrayToObj(result), {
        indent: '  ',
        singleQuotes: false
    });
    fs.writeFile(`./output/${formatTime(new Date())}.json`, pretty, (err) => {
        if (err) {
            logger.error(err);
        };
    });
    var options = { compact: true, ignoreComment: true, spaces: 4 };
    var json_to_xml = convert.json2xml(pretty, options);
    fs.writeFile(`./output/${formatTime(new Date())}.xml`, json_to_xml, (err) => {
        if (err) {
            logger.error(err);
        };
    });
})
})

function split_array(arr, len) {
    var a_len = arr.length;
    var result = [];
    for (var i = 0; i < a_len; i += len) {
        result.push(arr.slice(i, i + len));
    } return result;
}
function formatTime(time) {
    const t = new Date(time);
    const y = t.getFullYear();
    const m = t.getMonth();
    const d = t.getDate();
    const h = t.getHours();
    const f = t.getMinutes();
    const s = t.getSeconds();
    return `${y}-${m}-${d}-${h}-${f}-${s}`
}
function arrayToObj(arr) {

    return Object.assign({}, arr);

}
