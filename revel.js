var fs = require("fs");

var csv = require("fast-csv");

fs
    .createReadStream('./dailyFiles/24.csv')
    .pipe(csv())
    .on('data', function (data) {
        function JSONstringify(data) {
            if (typeof data != 'string') {
                data = JSON.stringify(data, null, '\t');
            }

            var arr = [],
                _string = 'color:green',
                _number = 'color:darkorange',
                _boolean = 'color:blue',
                _null = 'color:magenta',
                _key = 'color:red';

            data = data.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
                var style = _number;
                if (/^"/.test(match)) {
                    if (/:$/.test(match)) {
                        style = _key;
                    } else {
                        style = _string;
                    }
                } else if (/true|false/.test(match)) {
                    style = _boolean;
                } else if (/null/.test(match)) {
                    style = _null;
                }
                arr.push(style);
                arr.push('');
                return '%c' + match + '%c';
            });

            arr.unshift(data);

            console
                .log
                .apply(console, arr);
        }
        console.log(JSON.stringify(data, undefined, 4));
    })
    .on('end', function (data) {
        console.log('Read finished');
    });