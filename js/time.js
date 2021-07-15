// time = 12345 === 4:03:59
timeDisplay(time) {
    let hrs = Math.floor(time / 3600);
    let mins = Math.floor((time % 3600) / 60);
    let secs = Math.floor(time % 60);
    // Output like "1:01" or "4:03:59" or "123:03:59"
    let output = '';
    if (hrs > 0) {
        output += '' + hrs + ':' + (mins < 10 ? '0' : '');
    }
    output += '' + mins + ':' + (secs < 10 ? '0' : '');
    output += '' + secs;
    return output;
},
