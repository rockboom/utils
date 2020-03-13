exports.showMem = function showMem(){
    let mem = process.memoryUsage();
    const format = (bytes)=>{
        return (bytes/1024/1024) + 'MB';
    }
    console.log(`Process: heapTotal ${format(mem.heapTotal)} 
                heapUsage ${format(mem.heapUsage)} 
                rss ${format(mem.rss)}`);
    console.log('---------------------------');
}