"use client";
import React, { useState } from "react";
import "prismjs/themes/prism.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark  } from "react-syntax-highlighter/dist/esm/styles/prism";

// Define language code and corresponding code for each language
const codeMap: { [key: string]: string } = {
  curl: `#curl code
curl -X 'POST' \
'https://call.toingg.com/api/make_toingg/?apiKey=apiKeyStringValue' \
-H 'accept: application/json' \
-H 'Content-Type: application/json' \
-d '{
    "campaign": "Campaign name",
    "language": "Language like hindi or english",
    "name": "Call receiver name",
    "phoneNumber": "Call receiver phone number"
}'`,
  python: `#Python code
import requests

headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
}

params = {
    'apiKey': 'apiKeyStringValue',
}

json_data = {
    'campaign': 'Campaign name',
    'language': 'Language like hindi or english',
    'name': 'Call receiver name',
    'phoneNumber': 'Call receiver phone number',
}

response = requests.post('https://call.toingg.com/api/make_toingg/',
                          params=params, headers=headers, json=json_data)`,
  ruby: `#ruby code
require 'net/http'
require 'json'

uri = URI('https://call.toingg.com/api/make_toingg/')
params = {
  :apiKey => 'apiKeyStringValue',
}
uri.query = URI.encode_www_form(params)

req = Net::HTTP::Post.new(uri)
req.content_type = 'application/json'
req['accept'] = 'application/json'

req.body = {
  'campaign': 'Campaign name',
  'language': 'Language like hindi or english',
  'name': 'Call receiver name',
  'phoneNumber': 'Call receiver phone number'
}.to_json

req_options = {
  use_ssl: uri.scheme == 'https'
}
res = Net::HTTP.start(uri.hostname, uri.port, req_options) do |http|
  http.request(req)
end`,
  swift: `//Swift code
import Foundation

let jsonData = [
    "campaign": "Campaign name",
    "language": "Language like hindi or english",
    "name": "Call receiver name",
    "phoneNumber": "Call receiver phone number"
] as [String : Any]
let data = try! JSONSerialization.data(withJSONObject: jsonData, options: [])
let url = URL(string: "https://call.toingg.com/api/make_toingg/?apiKey=apiKeyStringValue")!
let headers = [
    "accept": "application/json",
    "Content-Type": "application/json"
]

var request = URLRequest(url: url)
request.httpMethod = "POST"
request.allHTTPHeaderFields = headers
request.httpBody = data as Data

let task = URLSession.shared.dataTask(with: request) { (data, response, error) in
    if let error = error {
        print(error)
    } else if let data = data {
        let str = String(data: data, encoding: .utf8)
        print(str ?? "")
    }
}

task.resume()`,
  dart: `//Dart code 
import 'package:http/http.dart' as http;

void main() async {
  var headers = {
    'accept': 'application/json',
    'Content-Type': 'application/json',
  };

  var params = {
    'apiKey': 'apiKeyStringValue',
  };

  var data = '{
  "campaign": "Campaign name",
  "language": "Language like hindi or english",
  "name": "Call receiver name",
  "phoneNumber": "Call receiver phone number"
}';

  var url = Uri.parse('https://call.toingg.com/api/make_toingg/?$query');
  var res = await http.post(url, headers: headers, body: data);
  print(res.body);
}
`,
  javascript: `//JavaScript code
fetch('https://call.toingg.com/api/make_toingg/?apiKey=apiKeyStringValue', {
  method: 'POST',
  headers: {
    'accept': 'application/json',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    'campaign': 'Campaign name',
    'language': 'Language like hindi or english',
    'name': 'Call receiver name',
    'phoneNumber': 'Call receiver phone number'
  })
});
`,
  php: `//PHP code
<php
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, 'https://call.toingg.com/api/make_toingg/?apiKey=apiKeyStringValue');
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'POST');
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'accept: application/json',
    'Content-Type: 'application/json',
]);
curl_setopt($ch, CURLOPT_POSTFIELDS, "{\n  \"campaign\": \"Campaign name\",\n  \"language\": \"Language like hindi or english\",\n  \"name\": \"Call receiver name\",\n  \"phoneNumber\": \"Call receiver phone number\"\n}");

$response = curl_exec($ch);

curl_close($ch);`,
};

// Define image links for each coding language
const languageImages: { [key: string]: string } = {
  curl: "https://call.toingg.com/images/bash.png",
  python: "https://call.toingg.com/images/python.png",
  ruby: "https://call.toingg.com/images/ruby2.png",
  swift: "https://call.toingg.com/images/swift.png",
  dart: "https://call.toingg.com/images/ruby.png",
  javascript: "https://call.toingg.com/images/javascript.png",
  php: "https://call.toingg.com/images/php.png",
};

const CodeComponent: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("curl");

  const handleLanguageChange = (language: string) => {
    setSelectedLanguage(language);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(codeMap[selectedLanguage]);
  };

  return (
    <div className="flex h-[500px] w-full">
      <div className="flex-1 border-r border-gray-300 w-[10%]">
        {Object.keys(codeMap).map((language) => (
          <div
            key={language}
            className="p-4 cursor-pointer border-b border-gray-300 flex items-center"
            onClick={() => handleLanguageChange(language)}
          >
            <img
              src={languageImages[language]}
              alt={language}
              className="mr-2 max-w-8"
            />
          </div>
        ))}
      </div>
      <div className="flex-3 p-4 overflow-y-scroll bg-[#1D1F21] w-[90%]">
        <div className="flex text-white justify-between mb-4">
          <div>{selectedLanguage.toUpperCase()}</div>
          <button
            className="text-sm text-white px-4 py-2 rounded"
            onClick={handleCopyClick}
          >
            Copy
          </button>
        </div>
        <SyntaxHighlighter language={selectedLanguage} style={atomDark}>
          {codeMap[selectedLanguage]}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeComponent;
