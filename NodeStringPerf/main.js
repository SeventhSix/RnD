// ====================================================================================
//
// https://nodejs.org/api/process.html#process_process_hrtime_time
//
// ====================================================================================

const NS_PER_SEC = 1e9;
const NS_PER_MS = 1e6;

// ====================================================================================

function StartHRTimer()
{
    return process.hrtime();
}

// ====================================================================================

function StopHRTimer(startTimer)
{
    let te = process.hrtime(startTimer);    
    return ((te[0] * NS_PER_SEC) + te[1]);
}

// ====================================================================================

function FormatHRTime(nanoSeconds)
{
    return `${nanoSeconds} ns (${nanoSeconds / NS_PER_MS} ms)`;
}

// ====================================================================================

function TimeStringPlus()
{
    let ss = "";
    ss = ss + "Louis,";

    let ts = StartHRTimer();

    for(var i = 0; i < 1000; i++)
    {
        ss = ss + "Louis,";
    }

    let tv = StopHRTimer(ts);
    console.log(`TimeStringPlus-Diff: ${FormatHRTime(tv)}`);
}

// ====================================================================================

function TimeStringConcat()
{
    let ss = "";
    ss =  ss + "Louis,";

    let ts = StartHRTimer();

    for(var i = 0; i < 1000; i++)
    {
        ss = ss + "Louis,";
    }

    let tv = StopHRTimer(ts);
    console.log(`TimeStringConcat-Diff: ${FormatHRTime(tv)}`);
}

// ====================================================================================

function TimeArrayConcat()
{
    let sArr = [];
    for(var i = 1000; i > 0; i--)
    {
        sArr[i] = "Louis,";
    }

    let ts = StartHRTimer();

    let bs = sArr.join("");

    let tv = StopHRTimer(ts);
    console.log(`TimeArrayConcat-Diff: ${FormatHRTime(tv)}`);
}

// ====================================================================================

for(var i = 0; i < 10; i++)
{
    TimeStringPlus();
}

console.log('=======================================================');

for(var i = 0; i < 10; i++)
{
    TimeArrayConcat();
}
