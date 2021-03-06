"use strict";
exports.__esModule = true;
var https = require("https");
var options = {
    method: 'GET',
    path: '/_matrix/federation/v1/send/',
    host: 'federation.rocket.chat',
    port: '8089'
};
console.log('Federating to matrix......');
var x = https.request(options, function (res) {
    console.log('Connected');
    res.on('data', function (data) {
        console.log(data);
        // console.log(String.fromCharCode.apply(null, new Uint16Array()));
    });
});
x.end();
/* export class Fields {
Content: string;
Destination: string;
Method: string;
Origin: string;
RequestURI: string;
constructor(destination: string, method: string, requestURI: string) {
this.Destination = destination;
this.Method = method;
this.RequestURI = requestURI;
  }

// }
// let FederationRequest: Fields;
NewFederationRequests() {
// FederationRequest.Destination = destination;
// FederationRequest.Method = method.toUpperCase();
// FederationRequest.RequestURI = requestURI;
return this.Destination + '' + this.Method + this.RequestURI;
}

/*Method() {
return this.Method;
} */
/*Content() {
return this.Content;
}*/
/*export function RequestURI() {
return this.RequestURI;
}*/
/* HTTPRequest() {
let urlStr = sprintf('matrix://%s%s', this.Destination, this.RequestURI);
let Content;
if (this.Content != null) {
Content = fs.readFileSync(this.Content);
  }
let httpreq;
httpreq = https.request(urlStr);
if (httpreq.URL.RequestURI() !== this.RequestURI) {
Error('Did not encode properly');
  }
if (this.Content != null) {
httpreq.setHeader('Content-Type', 'application/json');
  }
return httpreq;
}

readHTTPRequest(req, res, Body: string) {
let result: Fields;
result.Method = req.Method;
result.RequestURI = req.URL.RequestURI();
let content = JSON.parse(req.Body);
if (content.length !== 0) {
if (req.getHeader('Content-Type') !== 'application/json') {
Error('The request must be application/json');
    }
  }
result.Content = content;
return result;
  }
} */
// let Field = new Fields('localhost:8448', 'GET', '/_matrix/federation/v1/query/directory?room_alias=%23test%3Alocalhost%3A8448');
// console.log(Field);
// console.log(https.request());
