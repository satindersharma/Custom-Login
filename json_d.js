var tt = [{"srl":7655,"date_time":"2020-01-01T11:01:10Z","volt1":200,"amp1":700,"kw1":200,"pf1":300,"kvar1":400,"kva1":700,"clo1":0,"rct1":0,"volt2":201,"amp2":701,"kw2":201,"pf2":301,"kvar2":401,"kva2":701,"clo2":0,"rct2":0,"volt3":202,"amp3":703,"kw3":202,"pf3":302,"kvar3":402,"kva3":702,"clo3":0,"rct3":0,"cap1":1,"cap2":1,"cap3":1,"cap4":1,"cap5":1,"cap6":1,"cap7":1,"cap8":1,"cap9":1,"cap10":1,"cap11":1,"cap12":1},{"srl":10814,"date_time":"2020-01-01T14:41:41Z","volt1":230,"amp1":500,"kw1":100,"pf1":-400,"kvar1":300,"kva1":900,"clo1":1,"rct1":1,"volt2":231,"amp2":501,"kw2":101,"pf2":-401,"kvar2":301,"kva2":901,"clo2":1,"rct2":1,"volt3":232,"amp3":503,"kw3":102,"pf3":-402,"kvar3":302,"kva3":902,"clo3":1,"rct3":1,"cap1":0,"cap2":0,"cap3":0,"cap4":0,"cap5":0,"cap6":0,"cap7":0,"cap8":0,"cap9":0,"cap10":0,"cap11":0,"cap12":0},{"srl":17720,"date_time":"2020-01-01T05:34:30Z","volt1":230,"amp1":500,"kw1":100,"pf1":-400,"kvar1":300,"kva1":900,"clo1":1,"rct1":1,"volt2":231,"amp2":501,"kw2":101,"pf2":-401,"kvar2":301,"kva2":901,"clo2":1,"rct2":1,"volt3":232,"amp3":503,"kw3":102,"pf3":-402,"kvar3":302,"kva3":902,"clo3":1,"rct3":1,"cap1":0,"cap2":0,"cap3":0,"cap4":0,"cap5":0,"cap6":0,"cap7":0,"cap8":0,"cap9":0,"cap10":0,"cap11":0,"cap12":0},{"srl":33000,"date_time":"2020-01-01T00:31:30Z","volt1":230,"amp1":500,"kw1":100,"pf1":-400,"kvar1":300,"kva1":900,"clo1":1,"rct1":1,"volt2":231,"amp2":501,"kw2":101,"pf2":-401,"kvar2":301,"kva2":901,"clo2":1,"rct2":1,"volt3":232,"amp3":503,"kw3":102,"pf3":-402,"kvar3":302,"kva3":902,"clo3":1,"rct3":1,"cap1":0,"cap2":0,"cap3":0,"cap4":0,"cap5":0,"cap6":0,"cap7":0,"cap8":0,"cap9":0,"cap10":0,"cap11":0,"cap12":0},{"srl":34895,"date_time":"2020-01-01T00:54:09Z","volt1":200,"amp1":700,"kw1":200,"pf1":300,"kvar1":400,"kva1":700,"clo1":0,"rct1":0,"volt2":201,"amp2":701,"kw2":201,"pf2":301,"kvar2":401,"kva2":701,"clo2":0,"rct2":0,"volt3":202,"amp3":703,"kw3":202,"pf3":302,"kvar3":402,"kva3":702,"clo3":0,"rct3":0,"cap1":1,"cap2":1,"cap3":1,"cap4":1,"cap5":1,"cap6":1,"cap7":1,"cap8":1,"cap9":1,"cap10":1,"cap11":1,"cap12":1},{"srl":43846,"date_time":"2020-01-01T18:30:19Z","volt1":200,"amp1":700,"kw1":200,"pf1":300,"kvar1":400,"kva1":700,"clo1":0,"rct1":0,"volt2":201,"amp2":701,"kw2":201,"pf2":301,"kvar2":401,"kva2":701,"clo2":0,"rct2":0,"volt3":202,"amp3":703,"kw3":202,"pf3":302,"kvar3":402,"kva3":702,"clo3":0,"rct3":0,"cap1":1,"cap2":1,"cap3":1,"cap4":1,"cap5":1,"cap6":1,"cap7":1,"cap8":1,"cap9":1,"cap10":1,"cap11":1,"cap12":1},{"srl":58784,"date_time":"2020-01-01T23:18:46Z","volt1":230,"amp1":500,"kw1":100,"pf1":-400,"kvar1":300,"kva1":900,"clo1":1,"rct1":1,"volt2":231,"amp2":501,"kw2":101,"pf2":-401,"kvar2":301,"kva2":901,"clo2":1,"rct2":1,"volt3":232,"amp3":503,"kw3":102,"pf3":-402,"kvar3":302,"kva3":902,"clo3":1,"rct3":1,"cap1":0,"cap2":0,"cap3":0,"cap4":0,"cap5":0,"cap6":0,"cap7":0,"cap8":0,"cap9":0,"cap10":0,"cap11":0,"cap12":0}]

console.log(tt)


var sum = Object.values(tt).reduce((acc, current) => acc + current.volt1, 0);

var average = sum / Object.values(tt).length;
console.log(average);




function getAverages(array, groupKeys, averageKeys) {
    var groups = {},
        result = [];

    array.forEach(o => {
        var key = groupKeys.map(k => o[k]).join('|'),
            group = groups[key];

        if (!group) {
            groups[key] = { count: 0, payload: {} };
            group = groups[key];
            averageKeys.forEach(k => group[k] = 0);
            groupKeys.forEach(k => group.payload[k] = o[k]);
            result.push(group.payload);
        }
        groups[key].count++;
        averageKeys.forEach(k => group.payload[k] = (group[k] += o[k]) / group.count);
    })
    return result;
}
groupke = ["volt1","amp1","kw1","pf1","kvar1","kva1","clo1","rct1","volt2","amp2","kw2","pf2","kvar","kva2","clo2","rct2","volt3","amp3","kw3","pf3","kvar3","kva3","clo3","rct3","cap1","cap2","cap3","cap4","cap5","cap6","cap7","cap8","cap9","cap10","cap11","cap12"]
const users = [{ name: 'Adam', age: 20, country: 'France', weight: 100 }, { name: 'Adam', age: 28, country: 'Germany', weight: 100 }, { name: 'Adam', age: 28, country: 'India', weight: 200 }, { name: 'Adam', age: 40, country: 'France', weight: 200 }, { name: 'Oliver', age: 28, country: 'France', weight: 200 }];

console.log(getAverages(users, ['name', 'country'], ['age', 'weight']));
console.log(getAverages(users, ['name'], ['age', 'weight']));

console.log(getAverages(tt, ['name', 'country'], ['age', 'weight']));
console.log(getAverages(tt, groupke, groupke));
console.log(getAverages(tt, ["srl"], groupke));

