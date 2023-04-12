"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chatgpt_1 = require("chatgpt");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const bodyParser = __importStar(require("body-parser"));
var s = app.listen(4521);
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });
function getmessage(q) {
    return __awaiter(this, void 0, void 0, function* () {
        const api = new chatgpt_1.ChatGPTUnofficialProxyAPI({
            accessToken: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Ik1UaEVOVUpHTkVNMVFURTRNMEZCTWpkQ05UZzVNRFUxUlRVd1FVSkRNRU13UmtGRVFrRXpSZyJ9.eyJodHRwczovL2FwaS5vcGVuYWkuY29tL3Byb2ZpbGUiOnsiZW1haWwiOiJjaGFyYW5uYXJ1a3VsbGFAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWV9LCJodHRwczovL2FwaS5vcGVuYWkuY29tL2F1dGgiOnsidXNlcl9pZCI6InVzZXItaVdrUVVBVWYyM3JCUWZ5clpmaUZpWFNXIn0sImlzcyI6Imh0dHBzOi8vYXV0aDAub3BlbmFpLmNvbS8iLCJzdWIiOiJnb29nbGUtb2F1dGgyfDExMTYwNjM0NzE4NjEwOTgwNTg1OCIsImF1ZCI6WyJodHRwczovL2FwaS5vcGVuYWkuY29tL3YxIiwiaHR0cHM6Ly9vcGVuYWkub3BlbmFpLmF1dGgwYXBwLmNvbS91c2VyaW5mbyJdLCJpYXQiOjE2NzkyMTE1MzEsImV4cCI6MTY4MDQyMTEzMSwiYXpwIjoiVGRKSWNiZTE2V29USHROOTVueXl3aDVFNHlPbzZJdEciLCJzY29wZSI6Im9wZW5pZCBwcm9maWxlIGVtYWlsIG1vZGVsLnJlYWQgbW9kZWwucmVxdWVzdCBvcmdhbml6YXRpb24ucmVhZCBvZmZsaW5lX2FjY2VzcyJ9.eHj1PO43L4U9SpHbNrotr3ilpsnsso6w8AUtrqy2IXeckthA6CU7iUXx1b7E0acfIYLqlBFqxG1vIynRBRNMFCS4YSGRczX15J-HXCM12DUDAmckyn3lDdTm-CHnLaG5HIh-hm7Q2sGCLabxtuiiRwTj_usU5Yzh0cSuSbSPm-LHikhbq6Tp6ugU8_cTsvQAXMv2YiNZYPLOvakxPV9Er9Fowz6eAuKimDUEdJ726EGlGPrruKCAEZK5hoqt8KcMK_TQtStPzb32DdSzLsA1oGrno9gSzIvscEZKm7As-4IBY243Z2vroWKAxnDebD7OgKdndLPpricyHS2hcmuUjw"
        });
        const res = yield api.sendMessage(q);
        return (res.text);
    });
}
app.get("/getopenaiinfo", urlencodedParser, (req, res) => {
    res.json(getmessage(req.query.q));
});
