"use strict";(self.webpackChunkdrand_docs=self.webpackChunkdrand_docs||[]).push([[8817],{3367:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=t(4848),a=t(8453);const i={slug:"drand-explainer-for-begginers",title:"drand Explainer for Beginners",authors:["yolan"],tags:["beginner","features","how-to"],date:new Date("2023-06-01T00:00:00.000Z")},s=void 0,o={permalink:"/blog/drand-explainer-for-begginers",editUrl:"https://github.com/drand/drand-docs/tree/master/blog/2023-06-01-drand-explainer-for-beginners.mdx",source:"@site/blog/2023-06-01-drand-explainer-for-beginners.mdx",title:"drand Explainer for Beginners",description:"drand is software for running a threshold network that generates publicly verifiable random numbers.",date:"2023-06-01T00:00:00.000Z",tags:[{inline:!1,label:"Beginner",permalink:"/blog/tags/beginner",description:"beginner tag"},{inline:!1,label:"Features",permalink:"/blog/tags/features",description:"begginer tag"},{inline:!1,label:"How-to",permalink:"/blog/tags/how-to",description:"how to tag"}],readingTime:5.19,hasTruncateMarker:!0,authors:[{name:"Yolan Romailler",title:"Co-Founder & Cryptographer",description:"Applied cryptographer with a leaning for broader security/vulnerability research. \n\nWorked on the Distributed Randomness project, drand, at Protocol Labs and also on CBDC and SSI at SICPA, as well as broader cryptographic engineering at Kudelski Security. I've also been a Security Engineer on the Diem security team for Novi (Facebook/Meta).\nA subject matter expert in secure coding. As a consultant, I've supported customers by answering complex questions on security critical systems such as blockchain technologies, and by designing, evaluating and implementing complex cryptography such as key management systems or cryptographic primitives.\n",page:{permalink:"/blog/authors/yolan"},imageURL:"/img/author/yolan.jpeg",key:"yolan"}],frontMatter:{slug:"drand-explainer-for-begginers",title:"drand Explainer for Beginners",authors:["yolan"],tags:["beginner","features","how-to"],date:"2023-06-01T00:00:00.000Z"},unlisted:!1,prevItem:{title:"Announcing the drand Code Walkthroughs",permalink:"/blog/announcing-drand-code-walkthrough"},nextItem:{title:"Security Assessment of tlock",permalink:"/blog/security-assessment-of-tlock"}},l={authorsImageUrls:[void 0]},d=[{value:"\ud83d\udd22 <strong>Random Numbers</strong>",id:"-random-numbers",level:3},{value:"\ud83c\udfd9\ufe0f <strong>Public Random Numbers vs. Private Random Numbers</strong>",id:"\ufe0f-public-random-numbers-vs-private-random-numbers",level:3},{value:"\ud83d\udd0d <strong>Verifiability</strong>",id:"-verifiability",level:3},{value:"\ud83d\udd0f <strong>Digital Signatures</strong>",id:"-digital-signatures",level:3},{value:"\ud83d\udd73\ufe0f <strong>Threshold Cryptography</strong>",id:"\ufe0f-threshold-cryptography",level:3},{value:"\ud83d\udc5f <strong>Tying It All Together</strong>",id:"-tying-it-all-together",level:3},{value:"Suggested References for Learning More:",id:"suggested-references-for-learning-more",level:3}];function h(e){const r={a:"a",code:"code",em:"em",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"drand is software for running a threshold network that generates publicly verifiable random numbers."})}),"\n",(0,n.jsx)(r.p,{children:"Boy, that's a mouthful."}),"\n","\n",(0,n.jsx)(r.p,{children:"To the uninitiated, a bunch of questions spring to mind: What on earth is a threshold network? How can random numbers be verified?! Surely they're random? Why would I want my random numbers to be public?"}),"\n",(0,n.jsx)(r.p,{children:"Well, this blog post is the right place to uncover all the mysteries of the above statement. Let's work backwards to build up a picture of what drand is and how it works."}),"\n",(0,n.jsxs)(r.h3,{id:"-random-numbers",children:["\ud83d\udd22 ",(0,n.jsx)(r.strong,{children:"Random Numbers"})]}),"\n",(0,n.jsx)(r.p,{children:"What constitutes a random number?"}),"\n",(0,n.jsx)(r.p,{children:"There are some fancy mathematical definitions, but stated simply: it's a number that cannot be guessed at a rate better than chance. Suppose we choose a random number in the range 1 and 100 (including 100). If we asked 100 people to guess our number, on average only one of those people would guess the number correctly, even with a fully random selection process."}),"\n",(0,n.jsx)(r.p,{children:"For cryptographic purposes, it's often important that two people don't select the same random number. For example, if two people used the same random number as their Bitcoin private key, they'd be sharing a wallet (and the wallet's funds)!"}),"\n",(0,n.jsx)(r.p,{children:"While this is impossible to prevent entirely, cryptographic schemes use astronomically large number ranges (on the order of the number of atoms in the universe!) to ensure users get unique random numbers if they use proven selection methods."}),"\n",(0,n.jsxs)(r.h3,{id:"\ufe0f-public-random-numbers-vs-private-random-numbers",children:["\ud83c\udfd9\ufe0f ",(0,n.jsx)(r.strong,{children:"Public Random Numbers vs. Private Random Numbers"})]}),"\n",(0,n.jsxs)(r.p,{children:["Random numbers are used by everybody daily: connecting to a website over HTTPS, signing into our bank account, creating a user account, or purchasing an item online generates random identifiers. Most of these are ",(0,n.jsx)(r.em,{children:"private"})," random numbers. If you shared random numbers associated with your bank account publicly, a malicious actor might be able to steal all your money."]}),"\n",(0,n.jsxs)(r.p,{children:["Public random numbers are different. These are numbers we ",(0,n.jsx)(r.em,{children:"want"})," everybody to see: think lottery numbers, the roll of a dice in a board game, selecting a business to be audited at random, or a coin flip for who takes the kick-off in a football match. This is exactly the type of randomness that drand provides\u2014you definitely ",(0,n.jsx)(r.em,{children:(0,n.jsx)(r.strong,{children:"shouldn't"})})," generate your Bitcoin private key using drand!"]}),"\n",(0,n.jsxs)(r.h3,{id:"-verifiability",children:["\ud83d\udd0d ",(0,n.jsx)(r.strong,{children:"Verifiability"})]}),"\n",(0,n.jsx)(r.p,{children:"In examples of public randomness, humans have created procedures to ensure fairness: lottery numbers are drawn from fancy machines, dice are shared in board games to prevent cheating, and a referee picks the coin and flips it for a fair start in football."}),"\n",(0,n.jsxs)(r.p,{children:["However, these solutions are not truly ",(0,n.jsx)(r.em,{children:"verifiable"})," and require trusting third parties (e.g., referees, dice & lotto manufacturers, etc.) For generating random numbers fast and at scale, proving fairness is more challenging:"]}),"\n",(0,n.jsxs)("aside",{children:[(0,n.jsx)(r.p,{children:"\u2753"}),(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"If I trust a third party to generate the random number, how do I know they really chose it randomly?"}),"\n",(0,n.jsx)(r.li,{children:"If I trust a third party to run a random number generator I have audited, how do I know they're running the code they say they are?"}),"\n",(0,n.jsx)(r.li,{children:"If I run some code to generate a random number, how do I know the code is statistically random and bug-free?"}),"\n"]})]}),"\n",(0,n.jsx)(r.p,{children:"Human intuition can mislead us when it comes to randomness. If you were to look at the following binary numbers, which do you think is the most random?"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{children:"1111111111111111\n0000000000000000\n1001011010001001\n"})}),"\n",(0,n.jsxs)(r.p,{children:["At first glance, the first two seem far too uniform to be random, but from a random selection of values from ",(0,n.jsx)(r.code,{children:"0000000000000000"})," to ",(0,n.jsx)(r.code,{children:"1111111111111111"})," (inclusive), they are all equally likely to occur!"]}),"\n",(0,n.jsx)(r.p,{children:"How can we verify a randomly selected number was really random? It seems impossible. However, in drand, we exploit some cryptographic principles to make this possible. To fully understand it, we need a bit of background."}),"\n",(0,n.jsxs)(r.h3,{id:"-digital-signatures",children:["\ud83d\udd0f ",(0,n.jsx)(r.strong,{children:"Digital Signatures"})]}),"\n",(0,n.jsx)(r.p,{children:"Digital signatures are similar to human signatures: we take some piece of data (like a contract or a letter) and append a message that uniquely identifies us and binds the signature to the data. Digital signatures differ from human signatures in several ways:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"Human signatures map to a single person; digital signatures map to a single private key (and a person could own multiple private keys)."}),"\n",(0,n.jsx)(r.li,{children:"Human signatures can be copied to another piece of data and still be valid; digital signatures are bound to a single piece of data, as the data is 'included' in the signature in a mathematical sense."}),"\n",(0,n.jsx)(r.li,{children:"Digital signatures are verifiable; we can run mathematical operations to verify that the person who created the signature had access to the data and the private key."}),"\n"]}),"\n",(0,n.jsx)("aside",{children:(0,n.jsx)(r.p,{children:"\ud83d\udd10 SIDE NOTE: private keys are like a password. They're a huge (private) random number used in lieu of a password. They're more secure than passwords due to their size, and users tend to store them somewhere rather than typing them by hand. In digital signature schemes, users also create a public key, a mathematical counterpart to the private key used to verify signatures. The public key can be shared publicly, and anyone can use it to validate signatures."})}),"\n",(0,n.jsx)(r.p,{children:"So why are we talking about signatures?! This post is about randomness, and I even said we need randomness to generate a signature! Some properties of digital signatures are particularly interesting for randomness. Given some data, an attacker who has our public key but not our private key cannot predict a valid signature for it better than chance. To create a valid signature, they would have to create all possible signatures and verify them against the public key, which would take more computing power than exists in the world. Additionally, there's exactly one valid signature for a given message and private key combination."}),"\n",(0,n.jsx)(r.p,{children:"Another way to look at this: for users without access to a private key, a signature is indistinguishable from a random number and can be verified using the associated message and public key. If we had a way to create signatures with a private key that nobody could access, we would have publicly verifiable random numbers!"}),"\n",(0,n.jsxs)(r.h3,{id:"\ufe0f-threshold-cryptography",children:["\ud83d\udd73\ufe0f ",(0,n.jsx)(r.strong,{children:"Threshold Cryptography"})]}),"\n",(0,n.jsx)(r.p,{children:"We're close to explaining drand now. We've identified a way to create publicly verifiable numbers that are random under some assumptions but with a small problem: somebody needs to be a custodian for the private key used to create signatures. That amounts to trusting a third party, which we identified as an issue."}),"\n",(0,n.jsx)(r.p,{children:"Enter threshold cryptography."}),"\n",(0,n.jsx)(r.p,{children:"Threshold cryptography is like a business bank account: to reduce risk, transactions over a certain value require multiple parties to sign off. A threshold signature scheme is similar in that multiple parties must work together to create a valid signature."}),"\n",(0,n.jsxs)(r.p,{children:["Each party has their own private key and signs a message with it to create a 'partial signature'. When enough partial signatures are created, they can be aggregated into a final valid signature. There's no hierarchy between signers in a threshold scheme; any group of partial signatures will do. 'Enough' is a parameter of the protocol called 'threshold'. It's also called a ",(0,n.jsx)(r.code,{children:"t of n"})," signature scheme, where ",(0,n.jsx)(r.code,{children:"t"})," (threshold) of ",(0,n.jsx)(r.code,{children:"n"})," (total) parties must sign to create a valid signature."]}),"\n",(0,n.jsxs)(r.p,{children:["Threshold signature schemes improve our security model compared to normal signature schemes. Instead of relying on a single trusted third party, we can trust a group of numerous, unrelated parties. The probability that ",(0,n.jsx)(r.code,{children:"t"})," parties collude against us is lower than that of a single party. Another key piece of intuition is that the group shares a public key and private key, but ",(0,n.jsx)(r.em,{children:"nobody"})," has access to the private key. This is created during a distributed key generation protocol at the foundation of a network."]}),"\n",(0,n.jsxs)(r.p,{children:["The threshold signing scheme exploits mathematical properties of ",(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Pairing-based_cryptography",children:(0,n.jsx)(r.strong,{children:"pairing-based cryptography"})}),", which is outside the scope of this post, to create signatures without ever needing the private key."]}),"\n",(0,n.jsxs)(r.h3,{id:"-tying-it-all-together",children:["\ud83d\udc5f ",(0,n.jsx)(r.strong,{children:"Tying It All Together"})]}),"\n",(0,n.jsx)(r.p,{children:"We've covered a lot of ground, so let's pull it back into the real world and show how drand works in practice."}),"\n",(0,n.jsxs)(r.p,{children:["At the foundation of a drand network, all parties generate their own private key and initiate a distributed key generation protocol to create a shared pair of private and public keys. Recall that ",(0,n.jsx)(r.em,{children:"NO"}),' single party has access to that private key. Every epoch (30 seconds for our default mainnet network), each party signs the same message (the epoch number) and sends their partial signature to the network. Upon receiving partial signatures from others, each party verifies their validity and, upon reaching a threshold number, aggregates them into a single valid group signature. This single group signature is effectively a random number that can be verified as having been created by the drand network. This randomness is released publicly for others to verify and use. Because drand epochs coincide with times on the clock, consumers can commit to certain future random values for use in their applications (e.g., "I will draw the lottery using the random number generated at 12 PM tomorrow by the drand network, which will be epoch 123456").']}),"\n",(0,n.jsx)(r.p,{children:"This was a whistle-stop tour of how drand works, and some details were omitted for clarity."}),"\n",(0,n.jsxs)(r.p,{children:["If you'd like to dive deeper into the cryptography or operation of the drand network, check out our ",(0,n.jsx)(r.a,{href:"https://docs.drand.love/docs/category/20-concepts-getting-started",children:(0,n.jsx)(r.strong,{children:"documentation"})}),", ",(0,n.jsx)(r.a,{href:"https://join.slack.com/t/drandworkspace/shared_invite/zt-19u4rf6if-bf7lxIvF2zYn4~TrBwfkiA",children:(0,n.jsx)(r.strong,{children:"join our Slack workspace"})}),", or email us at: ",(0,n.jsx)(r.a,{href:"mailto:leagueofentropy@googlegroups.com",children:"leagueofentropy@googlegroups.com"}),"."]}),"\n",(0,n.jsx)(r.hr,{}),"\n",(0,n.jsx)(r.h3,{id:"suggested-references-for-learning-more",children:"Suggested References for Learning More:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Random_number",children:"Random Number"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Elliptic_curve",children:"Elliptic Curve"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Threshold_cryptography",children:"Threshold Cryptography"})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"https://en.wikipedia.org/wiki/Digital_signature",children:"Digital Signature"})}),"\n"]})]})}function c(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},8453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>o});var n=t(6540);const a={},i=n.createContext(a);function s(e){const r=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:r},e.children)}}}]);