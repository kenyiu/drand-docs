"use strict";(self.webpackChunkdrand_docs=self.webpackChunkdrand_docs||[]).push([[4342],{8818:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var i=t(4848),r=t(8453);const s={id:"2-4-concepts-timelock-encryption",title:"2.4 Timelock Encryption",description:"Describes timelock encryption and how it works."},o="2.4 Concepts: Timelock Encryption",c={id:"concepts/2-4-concepts-timelock-encryption",title:"2.4 Timelock Encryption",description:"Describes timelock encryption and how it works.",source:"@site/docs/02_concepts/02-04-Concepts_Timelock_Encryption.md",sourceDirName:"02_concepts",slug:"/concepts/2-4-concepts-timelock-encryption",permalink:"/drand-docs/docs/concepts/2-4-concepts-timelock-encryption",draft:!1,unlisted:!1,editUrl:"https://github.com/drand/drand-docs/tree/main/docs/02_concepts/02-04-Concepts_Timelock_Encryption.md",tags:[],version:"current",frontMatter:{id:"2-4-concepts-timelock-encryption",title:"2.4 Timelock Encryption",description:"Describes timelock encryption and how it works."},sidebar:"docsSidebar",previous:{title:"2.3 Specification",permalink:"/drand-docs/docs/concepts/2-3-concepts-specification"},next:{title:"3.0 DEVELOPERS GUIDE",permalink:"/drand-docs/docs/category/30-developers-guide"}},l={},a=[{value:"\ud83e\udd14 <strong>What is Timelock Encryption?</strong>",id:"-what-is-timelock-encryption",level:2},{value:"<strong>How drand enables Timelock Encryption</strong>",id:"how-drand-enables-timelock-encryption",level:2},{value:"\ud83c\udf93 <strong>Learn more about Timelock Encryption</strong>",id:"-learn-more-about-timelock-encryption",level:2},{value:"\ud83d\udee1\ufe0f <strong>Security Assumptions</strong>",id:"\ufe0f-security-assumptions",level:2},{value:"\ud83d\udccb <strong>Use Cases</strong>",id:"-use-cases",level:2},{value:"\ud83e\uddee <strong>The Math behind Timelock Encryption</strong>",id:"-the-math-behind-timelock-encryption",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"24-concepts-timelock-encryption",children:"2.4 Concepts: Timelock Encryption"})}),"\n",(0,i.jsxs)(n.h2,{id:"-what-is-timelock-encryption",children:["\ud83e\udd14 ",(0,i.jsx)(n.strong,{children:"What is Timelock Encryption?"})]}),"\n",(0,i.jsx)(n.p,{children:"Timelock encryption allows you to encrypt information now that can only be decrypted at a future time. Traditional methods have used either trusted third parties to store keys or proof of work, requiring users to perform computations to decrypt the information. Proof of work has become ineffective due to advancements in hardware and computational science, and it also wastes a lot of energy. Using a trusted third party avoids these issues but relies on trusting that party and hoping they aren't breached."}),"\n",(0,i.jsx)(n.h2,{id:"how-drand-enables-timelock-encryption",children:(0,i.jsx)(n.strong,{children:"How drand enables Timelock Encryption"})}),"\n",(0,i.jsx)(n.p,{children:"With the launch of our unchained scheme, drand supports a new paradigm for timelock encryption. drand acts as a reference clock: each drand round is mapped to a specific time, and network nodes share their signature over that round number once the time is reached. These signatures form a full randomness beacon, attesting that the network believes the clock time has been reached."}),"\n",(0,i.jsx)(n.p,{children:"Our timelock scheme uses identity-based encryption to allow users to create ciphertexts using a future round's random value as the private key. The drand network won't release that randomness until the specified time, providing accurate timelock encryption without wasting energy or relying on a single third party. Users can decrypt their timelock ciphertext offline without needing a third party."}),"\n",(0,i.jsxs)(n.h2,{id:"-learn-more-about-timelock-encryption",children:["\ud83c\udf93 ",(0,i.jsx)(n.strong,{children:"Learn more about Timelock Encryption"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.notion.so/Timelock-Encryption-is-now-supported-on-drand-mainnet-327425b1e16d4c22aa0d785dbf1c5fbb?pvs=21",children:"Our blog post announcing the new network and timelock encryption"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.youtube.com/watch?v=Xh849Ij3lhU",children:(0,i.jsx)(n.strong,{children:"Yolan's talk at Real World Crypto on timelock encryption"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://eprint.iacr.org/2023/189",children:"The Timelock Paper on ePrint"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.notion.so/fastnet-to-be-sunset-long-live-quicknet-5d125025752146b5bc307c834435d49e?pvs=21",children:"Our post about deprecating fastnet in favor of quicknet"})}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"\ufe0f-security-assumptions",children:["\ud83d\udee1\ufe0f ",(0,i.jsx)(n.strong,{children:"Security Assumptions"})]}),"\n",(0,i.jsx)(n.p,{children:"While our timelock scheme has been assessed by Kudelski Security, it's essential to understand its limitations:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Malicious Nodes"}),": If a threshold number of malicious nodes join the network, they could generate all future random values and decrypt future timelock ciphertexts. Our quicknet network started with 18 organizations running 22 nodes, minimizing this risk."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Quantum Resistance"}),": Our cryptography does not use quantum-resistant algorithms. If you encrypt something for 1000 years and a viable quantum computer emerges, it could decrypt it. Currently, no widespread quantum-resistant schemes exist for threshold identity-based encryption (IBE) cryptography."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Network Shutdown"}),": If the ",(0,i.jsx)(n.a,{href:"https://leagueofentropy.org",children:"League of Entropy"})," shuts down, members would delete their keys. This means ciphertexts created after the network's cessation would be un-decryptable until quantum computers can break them."]}),"\n"]}),"\n",(0,i.jsxs)(n.h2,{id:"-use-cases",children:["\ud83d\udccb ",(0,i.jsx)(n.strong,{children:"Use Cases"})]}),"\n",(0,i.jsx)(n.p,{children:"Timelock encryption has various applications, including:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Responsible vulnerability disclosures"}),"\n",(0,i.jsx)(n.li,{children:"Transfer of assets/passwords upon death"}),"\n",(0,i.jsx)(n.li,{children:"Sealed-bid auctions"}),"\n",(0,i.jsx)(n.li,{children:"Maximal extractable value (MEV) prevention"}),"\n",(0,i.jsx)(n.li,{children:"Public, turn-based games"}),"\n",(0,i.jsx)(n.li,{children:"Voting"}),"\n",(0,i.jsx)(n.li,{children:"Quizzes"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Join our ",(0,i.jsx)(n.a,{href:"https://drandworkspace.slack.com",children:"Slack"})," and post your ideas in the #drand-use-cases channel for discussion!"]}),"\n",(0,i.jsxs)(n.h2,{id:"-the-math-behind-timelock-encryption",children:["\ud83e\uddee ",(0,i.jsx)(n.strong,{children:"The Math behind Timelock Encryption"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Encryption"}),": A client encrypts a message to be decrypted at a specific epoch by:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:'Computing the "round public key.\u201d'}),"\n",(0,i.jsx)(n.li,{children:'Choosing a random "mask."'}),"\n",(0,i.jsx)(n.li,{children:"Setting the ephemeral secret key."}),"\n",(0,i.jsx)(n.li,{children:"Outputting the ciphertext with the ephemeral public key, mask commitment, and one-time pad."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Decryption"}),": A client decrypts a ciphertext using the epoch signature by:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Computing the necessary values."}),"\n",(0,i.jsx)(n.li,{children:"Verifying the ciphertext."}),"\n",(0,i.jsx)(n.li,{children:"Extracting the plaintext."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Libraries for Timelock Encryption"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/drand/tlock",children:(0,i.jsx)(n.strong,{children:"tlock"})}),": A Go CLI and library.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"tlock is a go CLI and library developed and maintained by the drand team for performing timelock encryption and decryption."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/drand/tlock-js",children:(0,i.jsx)(n.strong,{children:"tlock-js"})}),": A JavaScript library written in Typescript.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"tlock-js is a JavaScript library developed and maintained by the drand team for performing timelock encryption and decryption written in Typescript."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/thibmeu/drand-rs",children:(0,i.jsx)(n.strong,{children:"dee"})}),": A Rust CLI by Thibault Meunier from ",(0,i.jsx)(n.a,{href:"https://leagueofentropy.org/cloudflare/",children:"Cloudflare"}),".","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["dee is a rust CLI developed and maintained by Thibault Meunier from ",(0,i.jsx)(n.a,{href:"https://leagueofentropy.org/cloudflare",children:"Cloudflare"}),". It can perform timelock encryption and decryption, as well as retrieve beacons from any of the drand networks."]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://timevault.drand.love/",children:(0,i.jsx)(n.strong,{children:"timevault"})}),": A web app for timelock encryption and decryption.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"timevault is a web app for timelock encrypting and decrypting vulnerability reports for responsible disclosure as well as arbitrary text. It is developed and maintained by the drand team."}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"tlock-fvm"}),":","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Timelock encryption and decryption will be available on the\xa0",(0,i.jsx)(n.a,{href:"https://fvm.bilecoin.io/",children:(0,i.jsx)(n.strong,{children:"Filecoin Virtual Machine"})}),"\xa0in the second half of 2023. Stay tuned to our blog for updates!"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);