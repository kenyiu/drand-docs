"use strict";(self.webpackChunkdrand_docs=self.webpackChunkdrand_docs||[]).push([[5218],{3027:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>t,metadata:()=>o,toc:()=>h});var s=i(4848),r=i(8453);const t={id:"2-1-concepts-cryptography",title:"2.1 Cryptography",description:"An overview of drand's cryptographic building blocks"},a="2.1 Concepts: Cryptography",o={id:"concepts/2-1-concepts-cryptography",title:"2.1 Cryptography",description:"An overview of drand's cryptographic building blocks",source:"@site/docs/02_concepts/02-01-Concepts_Cryptography.md",sourceDirName:"02_concepts",slug:"/concepts/2-1-concepts-cryptography",permalink:"/docs/concepts/2-1-concepts-cryptography",draft:!1,unlisted:!1,editUrl:"https://github.com/drand/drand-docs/tree/master/docs/02_concepts/02-01-Concepts_Cryptography.md",tags:[],version:"current",frontMatter:{id:"2-1-concepts-cryptography",title:"2.1 Cryptography",description:"An overview of drand's cryptographic building blocks"},sidebar:"docsSidebar",previous:{title:"2.0 Concepts",permalink:"/docs/concepts/2-0-concepts"},next:{title:"2.2 Security Model",permalink:"/docs/concepts/2-2-concepts-security-model"}},c={},h=[{value:"\ud83d\udd73\ufe0f Threshold Cryptography",id:"\ufe0f-threshold-cryptography",level:2},{value:"1. Setup Phase",id:"1-setup-phase",level:2},{value:"\ud83e\udd10 Secret Sharing",id:"-secret-sharing",level:3},{value:"\ud83e\udd2b Verifiable Secret Sharing",id:"-verifiable-secret-sharing",level:3},{value:"\ud83d\udd11 Distributed Key Generation (DKG)",id:"-distributed-key-generation-dkg",level:3},{value:"\ud83d\udea8 2. Beacon Phase",id:"-2-beacon-phase",level:2},{value:"\ud83d\udc6b Pairing-Based Cryptography",id:"-pairing-based-cryptography",level:3},{value:"\ud83c\udfb2 Randomness Generation",id:"-randomness-generation",level:3},{value:"\ud83d\udd0f Smaller Signatures for Resource-Constrained Applications",id:"-smaller-signatures-for-resource-constrained-applications",level:3},{value:"\u26d3\ufe0f Chained and Unchained Modes",id:"\ufe0f-chained-and-unchained-modes",level:3},{value:"\ud83c\udf93 Learning More",id:"-learning-more",level:2}];function d(e){const n={a:"a",h1:"h1",h2:"h2",h3:"h3",header:"header",hr:"hr",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"21-concepts-cryptography",children:"2.1 Concepts: Cryptography"})}),"\n",(0,s.jsx)(n.p,{children:"This document provides an overview of the cryptographic building blocks that drand uses to generate publicly verifiable, unbiased, and unpredictable randomness in a distributed manner."}),"\n",(0,s.jsx)(n.h2,{id:"\ufe0f-threshold-cryptography",children:"\ud83d\udd73\ufe0f Threshold Cryptography"}),"\n",(0,s.jsxs)(n.p,{children:["drand relies on ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Threshold_cryptosystem",children:"threshold cryptography"}),", where a minimum number of participants must work together to execute cryptographic operations. This approach avoids single points of failure and enhances security."]}),"\n",(0,s.jsx)(n.p,{children:"The drand beacon operates in two phases: 1.) the setup phase and 2.) the beacon phase."}),"\n",(0,s.jsx)(n.h2,{id:"1-setup-phase",children:"1. Setup Phase"}),"\n",(0,s.jsxs)(n.p,{children:["The setup phase creates a collective private and public key pair shared among participants. This is done through a ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Distributed_key_generation",children:"Distributed Key Generation"})," (DKG) process, ensuring that no individual node knows the entire collective private key. Each private key share is used for cryptographic threshold computations, such as generating threshold signatures."]}),"\n",(0,s.jsx)(n.h3,{id:"-secret-sharing",children:"\ud83e\udd10 Secret Sharing"}),"\n",(0,s.jsxs)(n.p,{children:["Secret sharing allows a secret value to be split into shares, which can be reconstructed only if a threshold of shares is available. drand uses ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Shamir%27s_secret_sharing",children:"Shamir's Secret Sharing"})," (SSS) scheme, which is well-known for its reliability and security."]}),"\n",(0,s.jsx)("aside",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("img",{src:"https://www.notion.so/icons/mathematics_green.svg",alt:"https://www.notion.so/icons/mathematics_green.svg",width:"40px"})," In Shamir's Secret Sharing (SSS), a polynomial of degree $t\u22121$ is constructed, where $t$ is the threshold. The secret is the constant term of this polynomial, and each share is a point on the polynomial. To reconstruct the secret, at least $t$ shares are needed to solve the polynomial equation."]})}),"\n",(0,s.jsx)(n.h3,{id:"-verifiable-secret-sharing",children:"\ud83e\udd2b Verifiable Secret Sharing"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Verifiable_secret_sharing",children:"Verifiable Secret Sharing"})," (VSS) ensures that participants can verify their shares, protecting against malicious dealers. drand uses Feldman's VSS scheme, an extension of SSS, to ensure the shared secret can be correctly reconstructed."]}),"\n",(0,s.jsx)("aside",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("img",{src:"https://www.notion.so/icons/mathematics_green.svg",alt:"https://www.notion.so/icons/mathematics_green.svg",width:"40px"})," Feldman's VSS enhances SSS by adding commitments to the polynomial's coefficients. These commitments allow participants to verify their shares against the public commitments, ensuring that the dealer has distributed consistent shares."]})}),"\n",(0,s.jsx)(n.h3,{id:"-distributed-key-generation-dkg",children:"\ud83d\udd11 Distributed Key Generation (DKG)"}),"\n",(0,s.jsx)(n.p,{children:"DKG creates a collectively shared secret without any single participant knowing it. drand uses Pedersen's DKG scheme, running multiple instances of Feldman's VSS in parallel to create a final share for each participant. This collective public key is then used in the randomness generation phase."}),"\n",(0,s.jsx)("aside",{children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("img",{src:"https://www.notion.so/icons/mathematics_green.svg",alt:"https://www.notion.so/icons/mathematics_green.svg",width:"40px"})," In Pedersen's DKG, each participant generates their own secret and shares it using VSS. The participants then combine these shares to form the collective secret, ensuring that no single participant knows the entire secret."]})}),"\n",(0,s.jsx)(n.h2,{id:"-2-beacon-phase",children:"\ud83d\udea8 2. Beacon Phase"}),"\n",(0,s.jsxs)(n.p,{children:["In the beacon phase, drand uses pairing-based cryptography to generate publicly verifiable, unbiased, and unpredictable randomness. The process involves threshold ",(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/BLS_digital_signature",children:"Boneh-Lynn-Shacham"})," (BLS) signatures."]}),"\n",(0,s.jsx)(n.h3,{id:"-pairing-based-cryptography",children:"\ud83d\udc6b Pairing-Based Cryptography"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Pairing-based_cryptography",children:"Pairing-based cryptography"})," uses bilinear groups to create efficient cryptographic operations. drand currently uses the ",(0,s.jsx)(n.a,{href:"https://hackmd.io/@benjaminion/bls12-381",children:"BLS12-381"})," curve."]}),"\n",(0,s.jsx)("aside",{children:(0,s.jsx)(n.p,{children:"\ud83d\uddfa\ufe0f Pairing-based cryptography involves a bilinear map, usually denoted as $e: G_1 \\times G_2 \\to G_T$, where $G_1$, $G_2$, and $G_T$ are groups with certain mathematical properties. This map allows for efficient verification of signatures and is central to constructing BLS signatures."})}),"\n",(0,s.jsx)(n.h3,{id:"-randomness-generation",children:"\ud83c\udfb2 Randomness Generation"}),"\n",(0,s.jsx)(n.p,{children:"To generate randomness, drand uses threshold BLS signatures. Each participant creates a partial signature, which are then combined to form a collective BLS signature. This signature is hashed to produce the final random value."}),"\n",(0,s.jsx)("aside",{children:(0,s.jsx)(n.p,{children:"\ud83d\udd73\ufe0f In threshold BLS signatures, each participant generates a partial signature using their private key share. These partial signatures are then combined using Lagrange interpolation over the subgroup $G_1$ to form the final signature. This ensures that no single participant can control the output, and the signature is verifiable using the pairing function."})}),"\n",(0,s.jsx)(n.h3,{id:"-smaller-signatures-for-resource-constrained-applications",children:"\ud83d\udd0f Smaller Signatures for Resource-Constrained Applications"}),"\n",(0,s.jsx)(n.p,{children:"drand supports schemes, which are network-level configurations that determine the cryptographic methods and protocols used to generate randomness.  These scheme aim to minimize the size of signatures, reducing storage requirements and improving efficiency."}),"\n",(0,s.jsx)(n.h3,{id:"\ufe0f-chained-and-unchained-modes",children:"\u26d3\ufe0f Chained and Unchained Modes"}),"\n",(0,s.jsx)(n.p,{children:"drand operates in two modes: chained and unchained. In chained mode, each random value depends on all previous values, ensuring security and consistency. In unchained mode, each random value is generated independently."}),"\n",(0,s.jsx)("aside",{children:(0,s.jsx)(n.p,{children:"\u2139\ufe0f In chained mode, the randomness of each round is linked to the previous rounds, forming a chain. This ensures that any tampering with the randomness of a previous round affects all subsequent rounds. In unchained mode, each round's randomness is independent, simplifying verification but not providing the same level of historical integrity."})}),"\n",(0,s.jsx)(n.h2,{id:"-learning-more",children:"\ud83c\udf93 Learning More"}),"\n",(0,s.jsx)(n.p,{children:"For more detailed information, refer to the drand project specifications and related research papers on scalable bias-resistant distributed randomness."}),"\n",(0,s.jsx)(n.hr,{})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var s=i(6540);const r={},t=s.createContext(r);function a(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);