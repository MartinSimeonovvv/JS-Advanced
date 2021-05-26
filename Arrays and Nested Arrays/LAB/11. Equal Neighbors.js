function equal(args) {

    let counter = 0;

    for (let i = 0; i < args.length - 1; i++) {
        for (let j = 1; j < args[i].length; j++) {
            if (args[i][j] == args[i + 1][j]) {
                counter++;
            }
            if (args[i][j] == args[i][j - 1]) {
                counter++;
            }
        }
    }
    for (let i = 0; i < args[args.length - 1].length; i++) {
        if (args[args.length - 1][i] == args[args.length - 1][i + 1]) {
            counter++;
        }
    }

    for (let i = 0; i < args.length - 1; i++) {
        if (args[i][0] == args[i + 1][0]) {
            counter++;
        }
    }

    console.log(counter)
}
equal([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]

)