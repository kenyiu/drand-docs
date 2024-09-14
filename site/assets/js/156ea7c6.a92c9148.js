"use strict";(self.webpackChunkdrand_docs=self.webpackChunkdrand_docs||[]).push([[3729],{3231:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var i=n(4848),s=n(8453);const r={slug:"security-assessment-of-tlock",title:"Security Assessment of tlock",authors:["yolan"],tags:["news","updates"],date:new Date("2023-05-25T00:00:00.000Z")},o=void 0,a={permalink:"/blog/security-assessment-of-tlock",editUrl:"https://github.com/drand/drand-docs/tree/master/blog/2023-05-25-security-assessment-of-tlock.mdx",source:"@site/blog/2023-05-25-security-assessment-of-tlock.mdx",title:"Security Assessment of tlock",description:'We are happy to announce that our timed release encryption scheme "tlock" and its implementations, which we introduced in our\xa0previous blog post, have recently undergone a comprehensive security assessment by\xa0Kudelski Security. This was a crucial step in ensuring the robustness and reliability of our encryption system in order to guarantee that timelocked content remains encrypted until the time has come for it to be decrypted and never before.',date:"2023-05-25T00:00:00.000Z",tags:[{inline:!1,label:"News",permalink:"/blog/tags/news",description:"news tag"},{inline:!1,label:"Updates",permalink:"/blog/tags/updates",description:"updates tag"}],readingTime:1.7633333333333334,hasTruncateMarker:!0,authors:[{name:"Yolan Romailler",title:"Co-Founder & Cryptographer",description:"Applied cryptographer with a leaning for broader security/vulnerability research. \n\nWorked on the Distributed Randomness project, drand, at Protocol Labs and also on CBDC and SSI at SICPA, as well as broader cryptographic engineering at Kudelski Security. I've also been a Security Engineer on the Diem security team for Novi (Facebook/Meta).\nA subject matter expert in secure coding. As a consultant, I've supported customers by answering complex questions on security critical systems such as blockchain technologies, and by designing, evaluating and implementing complex cryptography such as key management systems or cryptographic primitives.\n",url:"https://romailler.ch/",page:{permalink:"/blog/authors/yolan"},socials:{linkedin:"https://www.linkedin.com/in/anomalroil/",github:"https://github.com/AnomalRoil",blog:"https://romailler.ch/"},imageURL:"https://media.licdn.com/dms/image/v2/C5603AQHKMl2eqMuNaw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1587563958538?e=1731542400&v=beta&t=P3xWRN9Vxshih2vPsvbdBKWmBo8mH5rTQGQljBlMEYg",key:"yolan"}],frontMatter:{slug:"security-assessment-of-tlock",title:"Security Assessment of tlock",authors:["yolan"],tags:["news","updates"],date:"2023-05-25T00:00:00.000Z"},unlisted:!1,prevItem:{title:"drand Explainer for Beginners",permalink:"/blog/drand-explainer-for-begginers"},nextItem:{title:"Randomness Summit Tokyo 2023",permalink:"/blog/randomness-summit-tokyo-2023"}},c={authorsImageUrls:[void 0]},l=[{value:"<strong>Overview</strong>",id:"overview",level:2},{value:"\ud83d\udccb <strong>Audit Findings</strong>",id:"-audit-findings",level:2},{value:"\ud83d\udee1\ufe0f <strong>Security Considerations</strong>",id:"\ufe0f-security-considerations",level:2},{value:"\ud83c\udfc6 <strong>Conclusion</strong>",id:"-conclusion",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:['We are happy to announce that our timed release encryption scheme "',(0,i.jsx)(t.a,{href:"https://eprint.iacr.org/2023/189",children:(0,i.jsx)(t.strong,{children:"tlock"})}),'" and its implementations, which we introduced in our\xa0',(0,i.jsx)(t.a,{href:"Timelock%20Encryption%20is%20now%20supported%20on%20drand%20main%20327425b1e16d4c22aa0d785dbf1c5fbb.md",children:(0,i.jsx)(t.strong,{children:"previous blog post"})}),", have recently undergone a comprehensive security assessment by\xa0",(0,i.jsx)(t.a,{href:"../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Kudelski%20Security%20d800657770494c6cb39cffb5480407a4.md",children:"Kudelski Security"}),". This was a crucial step in ensuring the robustness and reliability of our encryption system in order to guarantee that timelocked content remains encrypted until the time has come for it to be decrypted and never before."]}),"\n","\n",(0,i.jsx)(t.h2,{id:"overview",children:(0,i.jsx)(t.strong,{children:"Overview"})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"../The%20League%20of%20Entropy%201e76674b75e249699445799c5083fe78/League%20Partners%2089fecb56737044e5bdfbbb3f6864a422/Kudelski%20Security%20d800657770494c6cb39cffb5480407a4.md",children:"Kudelski Security"}),", a renowned provider of cybersecurity solutions, was engaged to review the implementation of drand\u2019s timelock encryption scheme and timelock responsible disclosure demo. The work covered:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"tlock"}),", our\xa0",(0,i.jsx)(t.a,{href:"https://github.com/drand/tlock/",children:"**Go implementation"}),"** as both a library and a command line tool (",(0,i.jsx)(t.code,{children:"tle"}),") for timelock encryption."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"tlock-js"}),", our interoperable\xa0",(0,i.jsx)(t.a,{href:"https://github.com/drand/tlock-js/",children:"**TypeScript implementation"}),"** of timelock encryption."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"timevault"}),", our web demo for timelock encryption, which is available at\xa0",(0,i.jsx)(t.a,{href:"https://timevault.drand.love/",children:(0,i.jsx)(t.strong,{children:"https://timevault.drand.love/"})}),"."]}),"\n",(0,i.jsx)(t.li,{children:"Their critical security dependencies."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The audit primarily focused on code security, protocol security, and ensuring our implementations matched the\xa0",(0,i.jsx)(t.a,{href:"https://eprint.iacr.org/2023/189",children:"tlock paper"}),"."]}),"\n",(0,i.jsxs)(t.h2,{id:"-audit-findings",children:["\ud83d\udccb ",(0,i.jsx)(t.strong,{children:"Audit Findings"})]}),"\n",(0,i.jsx)(t.p,{children:"During the audit, Kudelski Security identified:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"1 High severity issue"}),"\n",(0,i.jsx)(t.li,{children:"5 Medium severity issues"}),"\n",(0,i.jsx)(t.li,{children:"3 Low severity issues"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["It is worth highlighting that none of the identified issues would have put existing encrypted data at risk. We are pleased to report that all identified issues have been addressed and corrected. The\xa0",(0,i.jsx)(t.strong,{children:"detailed audit report is available on IPFS"}),"\xa0with CID\xa0",(0,i.jsx)(t.a,{href:"https://ipfs.io/ipfs/QmWQvTdiD3fSwJgasPLppHZKP6SMvsuTUnb1vRP2xM7y4m",children:(0,i.jsx)(t.strong,{children:"QmWQvTdiD3fSwJgasPLppHZKP6SMvsuTUnb1vRP2xM7y4m"})}),"."]}),"\n",(0,i.jsxs)(t.h2,{id:"\ufe0f-security-considerations",children:["\ud83d\udee1\ufe0f ",(0,i.jsx)(t.strong,{children:"Security Considerations"})]}),"\n",(0,i.jsx)(t.p,{children:"The security of our timelock encryption system relies on four main aspects:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["The security of the\xa0",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Boneh%E2%80%93Franklin_scheme",children:"**Identity Encryption Scheme"}),"** from 2001 that we used, and our implementation of it."]}),"\n",(0,i.jsxs)(t.li,{children:["The security of the underlying threshold\xa0",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/BLS_digital_signature",children:"**BLS scheme"}),"** from 2003 that we used, and our implementation of it."]}),"\n",(0,i.jsxs)(t.li,{children:["The security of\xa0",(0,i.jsx)(t.code,{children:"age"}),"'s underlying primitives, and that of the\xa0",(0,i.jsx)(t.code,{children:"age"}),"\xa0implementation used to encrypt the actual data. (See\xa0",(0,i.jsx)(t.a,{href:"https://age-encryption.org/",children:"**https://age-encryption.org/"}),"** for details about\xa0",(0,i.jsx)(t.code,{children:"age"}),".)"]}),"\n",(0,i.jsx)(t.li,{children:"The security of the threshold network providing you with its BLS signatures at a given frequency."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:'Please note that neither the BLS, nor the IBE scheme are "quantum resistant". However, a quantum computer that is able to break them seems unlikely to be built within the next 5-10 years, therefore we currently believe you can expect a "long term security" horizon of about five years by relying on our design for timed release encryption.'}),"\n",(0,i.jsxs)(t.h2,{id:"-conclusion",children:["\ud83c\udfc6 ",(0,i.jsx)(t.strong,{children:"Conclusion"})]}),"\n",(0,i.jsx)(t.p,{children:"We are grateful to the Kudelski Security Research team for their thorough and professional audit. Their expertise has been critical in helping us improve the security of drand's timelock encryption functionality. We also want to thank the Kudelski team for the smooth collaboration and availability throughout the assessment."}),"\n",(0,i.jsx)(t.p,{children:"However, it's important to note that no security assessment can guarantee 100% security. While we've taken extensive measures to ensure the security of our timelock encryption system, we encourage users to understand the security considerations and make informed decisions, especially when encrypting data for a long time period."}),"\n",(0,i.jsxs)(t.p,{children:["Our code being entirely open-source, further scrutiny and reviews are always welcome. Don't hesitate to\xa0",(0,i.jsx)(t.a,{href:"https://join.slack.com/t/drandworkspace/shared_invite/zt-19u4rf6if-bf7lxIvF2zYn4~TrBwfkiA",children:"**join our Slack workspace"}),"** to discuss our Timelock design, possible use-cases, or to show us what you've done with it!"]}),"\n",(0,i.jsx)(t.p,{children:"We look forward to continuing to enhance the security and reliability of our systems, and we remain committed to transparency and collaboration in all our endeavors."}),"\n",(0,i.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const s={},r=i.createContext(s);function o(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);