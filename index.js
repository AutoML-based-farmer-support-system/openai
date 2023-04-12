
import { ChatGPTUnofficialProxyAPI } from 'chatgpt'
import express from 'express';


const app = express();
import bodyParser from 'body-parser'
var s=app.listen(4521);
app.use( bodyParser.json() );  
var urlencodedParser = bodyParser.urlencoded({ extended: false }) 
const api = new ChatGPTUnofficialProxyAPI({
  accessToken:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJjaGFyYW5uYXJ1a3VsbGFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWV9LCJodHRwczovL2FwaS5vcGVuYWkuY29tL2F1dGgiOnsidXNlcl9pZCI6InVzZXItaVdrUVVBVWYyM3JCUWZ5clpmaUZpWFNXIn0sImlzcyI6Imh0dHBzOi8vYXV0aDAub3BlbmFpLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMTYwNjM0NzE4NjEwOTgwNTg1OCIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkub3BlbmFpLmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2ODA0MjE3NTUsImV4cCI6MTY4MTYzMTM1NSwiYXpwIjoiVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEciLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIG1vZGVsLnJlYWQgbW9kZWwucmVxdWVzdCBvcmdhbml6YXRpb24ucmVhZCBvZmZsaW5lX2FjY2VzcyJ9.qnhQVNJ4zsswhQOOyMlwynQOhDK8nZ7QZzZyUFy7-bpBxzVssZNZZ1OFxVW_-qonYEQiVmeJpcgDmcwESMAVKdLLagELc1s-VPS1rUujHoU9mMXoaDwcK4nDJ9bZcWPWnKqUGDdgLIN84l4iU7_OW6jg14X7gbhuORMjLrwDIGfGkgzQjLD7LglgNMM-N2e3HoOCcCAbted5EKeQbYcDtMMYe-zywKL4ASEeKJJi1QE-J92ZJekJmdmfYo9luwmChSp0TjBzzuCloKkCNmSgBSIPwVYebkW5hq2FjonXbV3C7kIV-wJFpnCZrt-9lOFc2qJAUmYqVgEDAhj8t3xsrQ"
})

async function getmessage(q,res) {
 
 await api.sendMessage(q,res).then((value)=>{
  console.log(value.text)
    res.json({reply:(value.text)})
  })
 
}
app.get("/getopenaiinfo",urlencodedParser,async (req,res)=>{
  await getmessage(req.query.q,res) 
})
 