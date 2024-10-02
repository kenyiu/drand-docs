"use strict";(self.webpackChunkdrand_docs=self.webpackChunkdrand_docs||[]).push([[3044],{912:(e,t,n)=>{n.r(t),n.d(t,{Highlight:()=>c,assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=n(4848),s=n(8453);const i={slug:"fastnet-sunsetting-dates-set",title:"fastnet sunsetting dates are set",description:"The drand fastnet network is being shut down. This post contains the dates and other important information.",authors:["yolan"],tags:["news","update","league-of-entropy","major"],date:new Date("2024-09-14T00:00:00.000Z")},o=void 0,a={permalink:"/blog/fastnet-sunsetting-dates-set",editUrl:"https://github.com/drand/drand-docs/tree/master/blog/2024-09-14-fastnet-sunsetting-dates-set.mdx",source:"@site/blog/2024-09-14-fastnet-sunsetting-dates-set.mdx",title:"fastnet sunsetting dates are set",description:"The drand fastnet network is being shut down. This post contains the dates and other important information.",date:"2024-09-14T00:00:00.000Z",tags:[{inline:!1,label:"News",permalink:"/blog/tags/news",description:"news tag"},{inline:!1,label:"update",permalink:"/blog/tags/update",description:"update tag"},{inline:!1,label:"League-of-Entropy",permalink:"/blog/tags/League-of_entropy",description:"league of entropy tag"},{inline:!1,label:"Major",permalink:"/blog/tags/major",description:"major tag"}],readingTime:3.04,hasTruncateMarker:!0,authors:[{name:"Yolan Romailler",title:"Co-Founder & Cryptographer",description:"Applied cryptographer with a leaning for broader security/vulnerability research. \n\nWorked on the Distributed Randomness project, drand, at Protocol Labs and also on CBDC and SSI at SICPA, as well as broader cryptographic engineering at Kudelski Security. I've also been a Security Engineer on the Diem security team for Novi (Facebook/Meta).\nA subject matter expert in secure coding. As a consultant, I've supported customers by answering complex questions on security critical systems such as blockchain technologies, and by designing, evaluating and implementing complex cryptography such as key management systems or cryptographic primitives.\n",page:{permalink:"/blog/authors/yolan"},imageURL:"/img/author/yolan.jpeg",key:"yolan"}],frontMatter:{slug:"fastnet-sunsetting-dates-set",title:"fastnet sunsetting dates are set",description:"The drand fastnet network is being shut down. This post contains the dates and other important information.",authors:["yolan"],tags:["news","update","league-of-entropy","major"],date:"2024-09-14T00:00:00.000Z"},unlisted:!1,nextItem:{title:"Notion Widget for drand Public Randomness!",permalink:"/blog/create-a-notion-widget"}},l={authorsImageUrls:[void 0]},c=({children:e,color:t="green"})=>{const n={span:"span",...(0,s.R)()};return(0,r.jsx)(n.span,{style:{color:t},children:e})},d=[{value:"TL;DR",id:"tldr",level:3},{value:"The Details",id:"the-details",level:2},{value:"Timeline",id:"timeline",level:3},{value:"Why a scream test?",id:"why-a-scream-test",level:2},{value:"Effect on timelocked ciphertexts",id:"effect-on-timelocked-ciphertexts",level:2},{value:"Wait, I\u2019m using <Highlight><code>fastnet</code></Highlight>",id:"wait-im-using-fastnet",level:2}];function h(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h3,{id:"tldr",children:"TL;DR"}),"\n",(0,r.jsxs)(t.p,{children:["If you\u2019re currently using ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"fastnet"})})," you must migrate to ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"quicknet"})})," by October 31st."]}),"\n",(0,r.jsx)(t.h2,{id:"the-details",children:"The Details"}),"\n",(0,r.jsxs)(t.p,{children:["It\u2019s been a little over a year since we ",(0,r.jsx)(t.a,{href:"https://drand.love/blog/fastnet-is-being-sunset-long-live-quicknet",children:"announced"})," that the League of Entropy ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"fastnet"})})," Mainnet network would be discontinued."]}),"\n",(0,r.jsxs)(t.p,{children:["It is being discontinued as it uses a Domain Separation Tag (DST) in its HashToCurve functions that is non-conformant to the HashToCurve ",(0,r.jsx)(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc9380",children:"RFC9380"})," specification."]}),"\n",(0,r.jsxs)(t.p,{children:["It is now time for us to finally decommission it, since our newer, RFC-conforming Mainnet network, ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"quicknet"})}),", has been operating flawlessly.\nOur biggest consumer (the Filecoin network) ",(0,r.jsx)(t.a,{href:"https://github.com/drand/FIPs/blob/master/FIPS/fip-0063.md",children:"recently started using it"})," rather than our older, less storage-efficient default one."]}),"\n",(0,r.jsx)(t.h3,{id:"timeline",children:"Timeline"}),"\n",(0,r.jsxs)(t.p,{children:["We will deprecate the ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"fastnet"})})," network in gradual steps:"]}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"This post is the first step: we\u2019re publicly announcing its deprecation timeline!"}),"\n",(0,r.jsxs)(t.li,{children:["We will be performing so-called \u201cscream tests\u201d in September, starting on ",(0,r.jsx)(t.strong,{children:"September 30th"})," until the end of the month.\nThis will translate in practice to stopping all of our HTTP(S) and Gossipsub relays from serving the beacons created by the network for small periods of time, starting with an hour and increasing up to a full day by mid-October.\nOur other relay partners Cloudflare and Storswift will be shutting down their ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"fastnet"})})," relays in September in order to enable us to execute these scream tests.\n(As usual, note that you should not be relying on any specific relay but have some sort of fallback mechanism using all available relays if liveness is critical to your project.)"]}),"\n",(0,r.jsxs)(t.li,{children:["We will stop operating HTTP and Gossipsub relays for the ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"fastnet"})})," network completely on ",(0,r.jsx)(t.strong,{children:"October 21st"}),". The nodes and the network itself will continue to run until November 6th."]}),"\n",(0,r.jsxs)(t.li,{children:["On ",(0,r.jsx)(t.strong,{children:"November 6th"}),", the League of Entropy nodes running the ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"fastnet"})})," network will stop operating it and ",(0,r.jsx)(t.strong,{children:"delete ALL secret key material"})," related to it, effectively preventing any future beacons being produced or the network restarting."]}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"why-a-scream-test",children:"Why a scream test?"}),"\n",(0,r.jsx)(t.p,{children:"The goal of a scream test is that any affected users should notice that the network is not being relayed anymore and should be able to take action to prevent any significant downtime of their own services."}),"\n",(0,r.jsx)(t.p,{children:"Note that the network will continue to operate without disturbance during this time and all beacons that are meant to be produced in September and October will still be produced."}),"\n",(0,r.jsx)(t.h2,{id:"effect-on-timelocked-ciphertexts",children:"Effect on timelocked ciphertexts"}),"\n",(0,r.jsxs)(t.p,{children:["As you may know, the League of Entropy ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"fastnet"})})," and ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"quicknet"})})," networks both enable you to timelock messages that cannot be decrypted until a given beacon round has been emitted by the network. You can read more about timelock in ",(0,r.jsx)(t.a,{href:"https://docs.drand.love/docs/concepts/2-4-concepts-timelock-encryption",children:"our documentation"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["The destruction of all key material related to the ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"fastnet"})})," network has the unfortunate side-effect of preventing ciphertexts that were timelocked using it towards later dates to ever be decryptable."]}),"\n",(0,r.jsx)(t.p,{children:"The alternative to allow timelocked ciphertexts to be decryptable in the future would be to reveal all key material, however this would mean that ciphertexts not meant to be decrypted for years and years could be decrypted early, which would break the security guarantees that the League of Entropy timelock service, tlock, strives to achieve."}),"\n",(0,r.jsxs)(t.p,{children:["If you believe there would be value in having a timelock service with the guarantee that ciphertexts can be decrypted, even in the case of a network deprecation even if that means decrypting them too early, please come and discuss it with us on our Slack workspace.\nIf there is high demand, the League of Entropy could create a new network with the promise of revealing secret material should it ever need to shut it down.\nHowever this is currently not the case for the ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"fastnet"})})," and ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"quicknet"})})," networks and therefore we prefer to destroy all key material."]}),"\n",(0,r.jsxs)(t.h2,{id:"wait-im-using-fastnet",children:["Wait, I\u2019m using ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"fastnet"})})]}),"\n",(0,r.jsxs)(t.p,{children:["If you are still using the ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"fastnet"})})," network, we recommend you plan migrating to our ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"quicknet"})})," network."]}),"\n",(0,r.jsx)(t.p,{children:"They are both operating with signatures on the smaller G1 group of BLS12-381, they are both enabling timelock encryption and they are both running with a period of 3 seconds."}),"\n",(0,r.jsxs)(t.p,{children:["There are only two gotchas with migrating to the ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"quicknet"})})," network."]}),"\n",(0,r.jsxs)(t.p,{children:["The first gotcha is that you will have to properly \u201cmap\u201d which ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"quicknet"})})," round corresponds to what \u201cepoch\u201d in your own systems, since the ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"fastnet"})})," network is older and running at the same frequency as ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"quicknet"})}),", you will be \u201cre-using\u201d the same round numbers as you\u2019ve already used in ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"fastnet"})})," for the next year or so."]}),"\n",(0,r.jsx)(t.p,{children:"If you were previously just using the drand rounds based on the genesis time and the current time, note that you might not have to change anything other than using the new genesis time and the new public key for the network."}),"\n",(0,r.jsx)(t.p,{children:"The second one is that we\u2019re now conforming to RFC9380 and using the correct DST on G1, so if you\u2019ve re-implemented the cryptographic operations needed to verify signatures or do timelock encryption, you might have to change your code"}),"\n",(0,r.jsxs)(t.p,{children:["Otherwise if you\u2019re relying on one of our own libraries in ",(0,r.jsx)(t.a,{href:"https://github.com/drand/go-clients",children:"Go"}),", ",(0,r.jsx)(t.a,{href:"https://github.com/drand/drand-client",children:"Typescript"}),", or ",(0,r.jsx)(t.a,{href:"https://github.com/randa-mu/drand-client-rs",children:"Rust"}),", as well as the third party rust libraries ",(0,r.jsx)(t.a,{href:"https://github.com/noislabs/drand-verify/",children:"drand-verify"})," or Rust client ",(0,r.jsx)(t.a,{href:"https://github.com/thibmeu/drand-rs",children:"dee"}),", these already support the ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"quicknet"})})," network."]}),"\n",(0,r.jsxs)(t.p,{children:["If you need help or advice with migrating away from ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"fastnet"})})," to ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"quicknet"})}),", once again, don\u2019t be shy: there are many members in the League of Entropy, and we\u2019re always delighted to discuss with our users in our Slack workspace.\nYou can also reach us by email: ",(0,r.jsx)(c,{children:(0,r.jsx)(t.code,{children:"leagueofentropy@googlegroups.com"})})]}),"\n",(0,r.jsx)(t.hr,{})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var r=n(6540);const s={},i=r.createContext(s);function o(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);