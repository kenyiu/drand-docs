"use strict";(self.webpackChunkdrand_docs=self.webpackChunkdrand_docs||[]).push([[7103],{167:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=r(4848),i=r(8453);const o={slug:"the-league-of-entropy-launches-drand",title:"The League of Entropy launches drand v1.0 to become the Internet\u2019s first production-grade, publicly verifiable, randomness beacon!",authors:["yolan"],tags:["release","major","league-of-entropy"],date:new Date("2020-08-10T00:00:00.000Z")},a=void 0,s={permalink:"/blog/the-league-of-entropy-launches-drand",editUrl:"https://github.com/drand/drand-docs/tree/master/blog/2020-08-10-the-league-of-entropy-launches-drand-v1-0-to-becom.md",source:"@site/blog/2020-08-10-the-league-of-entropy-launches-drand-v1-0-to-becom.md",title:"The League of Entropy launches drand v1.0 to become the Internet\u2019s first production-grade, publicly verifiable, randomness beacon!",description:"Welcome to the brand-new website for the drand project! We are thrilled to announce that drand is now in production, offering publicly verifiable randomness as a foundational internet service.",date:"2020-08-10T00:00:00.000Z",tags:[{inline:!1,label:"Release",permalink:"/blog/tags/release",description:"release tag"},{inline:!1,label:"Major",permalink:"/blog/tags/major",description:"major tag"},{inline:!1,label:"League-of-Entropy",permalink:"/blog/tags/League-of_entropy",description:"league of entropy tag"}],readingTime:2.8966666666666665,hasTruncateMarker:!0,authors:[{name:"Yolan Romailler",title:"Co-Founder & Cryptographer",description:"Applied cryptographer with a leaning for broader security/vulnerability research. \n\nWorked on the Distributed Randomness project, drand, at Protocol Labs and also on CBDC and SSI at SICPA, as well as broader cryptographic engineering at Kudelski Security. I've also been a Security Engineer on the Diem security team for Novi (Facebook/Meta).\nA subject matter expert in secure coding. As a consultant, I've supported customers by answering complex questions on security critical systems such as blockchain technologies, and by designing, evaluating and implementing complex cryptography such as key management systems or cryptographic primitives.\n",page:{permalink:"/blog/authors/yolan"},imageURL:"/img/author/yolan.jpeg",key:"yolan"}],frontMatter:{slug:"the-league-of-entropy-launches-drand",title:"The League of Entropy launches drand v1.0 to become the Internet\u2019s first production-grade, publicly verifiable, randomness beacon!",authors:["yolan"],tags:["release","major","league-of-entropy"],date:"2020-08-10T00:00:00.000Z"},unlisted:!1,prevItem:{title:"drand v1.0 and the League of Entropy: Two Weeks In",permalink:"/blog/drand-v1.0-and-the-league-of-entropy-two-weeks-in"}},d={authorsImageUrls:[void 0]},l=[{value:"New to drand? Here&#39;s a Primer",id:"new-to-drand-heres-a-primer",level:2},{value:"drand v1.1",id:"drand-v11",level:2},{value:"Three-Layered Architecture",id:"three-layered-architecture",level:3},{value:"New Features",id:"new-features",level:3},{value:"Deployment Monitoring",id:"deployment-monitoring",level:3},{value:"drand\u2019s Specification &amp; Security Model",id:"drands-specification--security-model",level:3},{value:"Security Audit",id:"security-audit",level:3},{value:"Code Quality, Refactor &amp; Testing",id:"code-quality-refactor--testing",level:3},{value:"New Website &amp; Logo",id:"new-website--logo",level:2},{value:"The League of Entropy Main Network (LoE mainnet) Becomes a Production Service",id:"the-league-of-entropy-main-network-loe-mainnet-becomes-a-production-service",level:2},{value:"New League of Entropy Partners",id:"new-league-of-entropy-partners",level:3},{value:"League of Entropy\u2019s Governance",id:"league-of-entropys-governance",level:3},{value:"Filecoin Becomes Drand\u2019s First High-Profile Production User",id:"filecoin-becomes-drands-first-high-profile-production-user",level:2},{value:"Join Us on August 13 for The Randomness Summit",id:"join-us-on-august-13-for-the-randomness-summit",level:2}];function c(e){const n={a:"a",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Welcome to the brand-new website for the drand project! We are thrilled to announce that drand is now in production, offering publicly verifiable randomness as a foundational internet service."}),"\n",(0,t.jsx)(n.p,{children:"In this post, we'll introduce drand, highlight recent protocol upgrades, share details about the expansion of the League of Entropy's largest deployment, and provide a glimpse into the future of drand and the League of Entropy."}),"\n",(0,t.jsx)(n.h2,{id:"new-to-drand-heres-a-primer",children:"New to drand? Here's a Primer"}),"\n",(0,t.jsx)(n.p,{children:"Randomness is crucial for many business-critical operations and protocols we use daily, such as secure communications cryptography and public lotteries. Despite its importance, there hasn't been a source of public randomness capable of delivering truly unbiased randomness at scale\u2014until now. Drand was created to fill this gap."}),"\n",(0,t.jsx)(n.p,{children:"Drand provides a universally accessible source of publicly verifiable, unbiasable, and unpredictable randomness. After an initial multi-party computation to establish a distributed key, drand nodes operated by independent parties periodically broadcast information. This data is aggregated into a final random beacon, whose validity users can easily verify."}),"\n",(0,t.jsxs)(n.p,{children:["Drand originated as a research project in the ",(0,t.jsx)(n.a,{href:"https://dedis.epfl.ch/",children:"DEDIS lab at EPFL"})," and launched its first network experiment in 2019. After nearly a year of research, drand transitioned into a production-level public service. Recently, we introduced several changes and improvements and deployed drand's largest network, the ",(0,t.jsx)(n.a,{href:"https://leagueofentropy.com/",children:"League of Entropy"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"We believe drand can become a foundational internet service for randomness, accessible to everyone online, much like DNS or NTP."}),"\n",(0,t.jsx)(n.h2,{id:"drand-v11",children:"drand v1.1"}),"\n",(0,t.jsx)(n.p,{children:"drand v1.0 launched in July, and we upgraded to v1.1 in August with many new features and architectural improvements. Key updates include:"}),"\n",(0,t.jsx)(n.h3,{id:"three-layered-architecture",children:"Three-Layered Architecture"}),"\n",(0,t.jsxs)(n.p,{children:["The network architecture is now divided into three layers, enhancing node protection and scalability. This includes a distribution network utilizing ",(0,t.jsx)(n.a,{href:"https://api.drand.sh/public/latest",children:"HTTP CDNs"}),", ",(0,t.jsx)(n.a,{href:"https://blog.ipfs.io/2020-05-20-gossipsub-v1.1/",children:"libp2p Gossipsub"})," relays, a ",(0,t.jsx)(n.a,{href:"https://drandeokfd5aaz3hr4hfk7mlr23vc63boxrpr44ertumtbousmdgbhad.onion/public/latest",children:"Tor hidden service"}),", and a ",(0,t.jsx)(n.a,{href:"https://twitter.com/loebot",children:"Twitter bot"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"new-features",children:"New Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Round-to-timestamps guarantees"}),": Nodes quickly generate randomness to catch up after downtime."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Chain download functionality"}),": Nodes can download a full copy of an existing chain before joining."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Enhanced security"}),": New curve (",(0,t.jsx)(n.a,{href:"https://electriccoin.co/blog/new-snark-curve/",children:"BLS12-381"}),") for better security and compatibility with major blockchains like Filecoin and Ethereum 2.0."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Improved client implementation"}),": Failover and optimizations in Go and JS."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Broadcast channel"}),": Enables more robust setup ceremonies."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"deployment-monitoring",children:"Deployment Monitoring"}),"\n",(0,t.jsxs)(n.p,{children:["We've introduced tools to monitor drand nodes and alert operators to incidents. A ",(0,t.jsx)(n.a,{href:"https://drand.statuspage.io/",children:"status page"})," shows system status and planned maintenance. Additionally, a network observatory measures performance and reliability from global vantage points."]}),"\n",(0,t.jsx)(n.h3,{id:"drands-specification--security-model",children:"drand\u2019s Specification & Security Model"}),"\n",(0,t.jsxs)(n.p,{children:["The drand protocol now has a ",(0,t.jsx)(n.a,{href:"https://www.notion.so/2-3-Concepts-Specification-3c6b9de90dfd4ccbbdce860edc19b238?pvs=21",children:"full specification"})," and a documented ",(0,t.jsx)(n.a,{href:"https://www.notion.so/2-2-Concepts-Security-Model-e28de9e2a7a94dcab08d06160879b6c5?pvs=21",children:"security model"}),"."]}),"\n",(0,t.jsx)(n.h3,{id:"security-audit",children:"Security Audit"}),"\n",(0,t.jsxs)(n.p,{children:["drand underwent a thorough end-to-end security audit by ",(0,t.jsx)(n.a,{href:"https://sigmaprime.io/",children:"SigmaPrime"}),". Check out the ",(0,t.jsx)(n.a,{href:"https://drive.google.com/file/d/1fCy1ynO78gJLCNbqBruzHx7bh72Tu-q2/view?usp=sharing",children:"full report"})," to learn about the findings and our collaborative process with SigmaPrime."]}),"\n",(0,t.jsx)(n.h3,{id:"code-quality-refactor--testing",children:"Code Quality, Refactor & Testing"}),"\n",(0,t.jsx)(n.p,{children:"We\u2019ve improved our development practices, including a testnet for pre-deployment evaluations, increased code coverage, linting, and regression testing. We've merged over 400 pull requests in the past few months, ensuring drand is a reliable production environment."}),"\n",(0,t.jsx)(n.h2,{id:"new-website--logo",children:"New Website & Logo"}),"\n",(0,t.jsx)(n.p,{children:"Our new website is the primary repository for drand's growing documentation. It's also the home for our community of developers, operators, and end-users, where we\u2019ll share important updates and news. We also unveiled a new logo for the drand project."}),"\n",(0,t.jsx)(n.h2,{id:"the-league-of-entropy-main-network-loe-mainnet-becomes-a-production-service",children:"The League of Entropy Main Network (LoE mainnet) Becomes a Production Service"}),"\n",(0,t.jsx)(n.p,{children:"Drand\u2019s true power comes from its decentralized network of independent nodes. With significant protocol upgrades, we\u2019ve strengthened the League of Entropy."}),"\n",(0,t.jsx)(n.p,{children:"In 2019, Cloudflare, EPFL, the University of Chile, Kudelski Security, and Protocol Labs formed the League of Entropy to run the drand network. Since then, it has expanded to include partners from six countries, spanning universities and infrastructure companies."}),"\n",(0,t.jsx)(n.h3,{id:"new-league-of-entropy-partners",children:"New League of Entropy Partners"}),"\n",(0,t.jsx)(n.p,{children:"With the LoE Main Network upgrade, new partners have joined, increasing robustness and quality of service. Current members include:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://drand.love/dc94bcdadab64950aa1e6bc96cb1e39a",children:"EPFL Center for Digital Trust (C4DT)"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://drand.love/480ac8864a33408dae64fad706c38a8e",children:"ChainSafe Systems"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://drand.love/8125559f2fb44804b9e6ca63da70f6b6",children:"c**\xb7**Labs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://drand.love/12bbcd90be5f4e42af18599f65019e7e",children:"Cloudflare"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://emeraldonion.org/",children:"Emerald Onion"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.epfl.ch/labs/dedis/",children:"EPFL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://ethereum.foundation/",children:"Ethereum Foundation"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.initc3.org/",children:"IC3"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.kudelskisecurity.com/",children:"Kudelski Security"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://protocol.ai/",children:"Protocol Labs"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://ptisp.pt/",children:"PTisp"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://tierion.com/",children:"Tierion"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.ucl.ac.uk/",children:"UCL"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://www.uchile.cl/",children:"University of Chile"})}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"We\u2019ll continue growing the network over the years to come."}),"\n",(0,t.jsx)(n.h3,{id:"league-of-entropys-governance",children:"League of Entropy\u2019s Governance"}),"\n",(0,t.jsx)(n.p,{children:"Drand\u2019s strength lies in its decentralized governance model. We\u2019ve established rules and requirements to maintain high network security, ensure effective operation, and foster continuous improvement. This model also outlines procedures for adding new members equitably."}),"\n",(0,t.jsx)(n.h2,{id:"filecoin-becomes-drands-first-high-profile-production-user",children:"Filecoin Becomes Drand\u2019s First High-Profile Production User"}),"\n",(0,t.jsxs)(n.p,{children:["We\u2019re thrilled to announce that the ",(0,t.jsx)(n.a,{href:"https://filecoin.io/blog/filecoin-testnet-phase-2-is-here/",children:"Filecoin project"})," at Protocol Labs is adopting drand for unbiased randomness in leader election on its blockchain. This is a significant milestone, showcasing drand\u2019s potential in the blockchain space. Filecoin\u2019s integration will drive innovation, testing, and development for drand."]}),"\n",(0,t.jsx)(n.h2,{id:"join-us-on-august-13-for-the-randomness-summit",children:"Join Us on August 13 for The Randomness Summit"}),"\n",(0,t.jsxs)(n.p,{children:["To celebrate this launch, the drand team, ETHGlobal, Protocol Labs Research, and ResNetLab are hosting a ",(0,t.jsx)(n.a,{href:"https://randomness2020.com/",children:"one-day virtual summit"})," on the state of the art and future directions for randomness beacons. ",(0,t.jsx)(n.a,{href:"https://airtable.com/shrTsIV4Btd8Wugqb",children:"Register now"})," to learn from top cryptographers and randomness beacon experts, League of Entropy partners, and drand developers. Hear from Ethereum and Filecoin project leads about the critical role of randomness in their networks."]}),"\n",(0,t.jsx)(n.p,{children:"That\u2019s all for now! Stay tuned for more updates on drand\u2019s new online home."}),"\n",(0,t.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>s});var t=r(6540);const i={},o=t.createContext(i);function a(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);