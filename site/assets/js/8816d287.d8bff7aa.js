"use strict";(self.webpackChunkdrand_docs=self.webpackChunkdrand_docs||[]).push([[4435],{9033:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>l,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var i=s(4848),d=s(8453);const t={id:"3-5-dev-guide-pubsub-network-integration",title:"3.5 PubSub Network Integration",description:"A list of public endpoints with usage instructions."},r="3.5 PubSub Network Integration",o={id:"dev-guide/3-5-dev-guide-pubsub-network-integration",title:"3.5 PubSub Network Integration",description:"A list of public endpoints with usage instructions.",source:"@site/docs/03_dev-guide/03-05-PubSub_Network_Integration.md",sourceDirName:"03_dev-guide",slug:"/dev-guide/3-5-dev-guide-pubsub-network-integration",permalink:"/docs/dev-guide/3-5-dev-guide-pubsub-network-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/drand/drand-docs/tree/master/docs/03_dev-guide/03-05-PubSub_Network_Integration.md",tags:[],version:"current",frontMatter:{id:"3-5-dev-guide-pubsub-network-integration",title:"3.5 PubSub Network Integration",description:"A list of public endpoints with usage instructions."},sidebar:"docsSidebar",previous:{title:"3.4 HTTP API",permalink:"/docs/dev-guide/3-4-dev-guide-http-api"},next:{title:"3.6 Code Examples",permalink:"/docs/dev-guide/3-6-dev-guide-code-examples"}},a={},c=[{value:"<strong>Public endpoints</strong>",id:"public-endpoints",level:2},{value:"<strong>Usage</strong>",id:"usage",level:2}];function u(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"35-pubsub-network-integration",children:"3.5 PubSub Network Integration"})}),"\n",(0,i.jsxs)(n.p,{children:["drand is able to publish randomness on a\xa0",(0,i.jsx)(n.a,{href:"https://libp2p.io/",children:(0,i.jsx)(n.strong,{children:"libp2p"})})," PubSub network using the\xa0",(0,i.jsx)(n.a,{href:"https://docs.libp2p.io/concepts/publish-subscribe/",children:(0,i.jsx)(n.strong,{children:"gossipsub protocol"})}),"\xa0, using what is known as a\xa0",(0,i.jsx)(n.em,{children:"gossip relay"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"public-endpoints",children:(0,i.jsx)(n.strong,{children:"Public endpoints"})}),"\n",(0,i.jsxs)(n.p,{children:["The public\xa0",(0,i.jsx)(n.a,{href:"https://blog.cloudflare.com/league-of-entropy/",children:(0,i.jsx)(n.strong,{children:"League Of Entropy"})}),"\xa0network provides the following 1st-tier gossip relays (all existing gossip relays will form a mesh to distribute randomness around):"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/dnsaddr/api.drand.sh"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/dnsaddr/api2.drand.sh"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"/dnsaddr/api3.drand.sh"})}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The pubsub topic on which randomness is published is based to the drand's chain hash as follows:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"/drand/pubsub/v0.0.0/<chain_hash>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["for the public network being\xa0",(0,i.jsx)(n.code,{children:"/drand/pubsub/v0.0.0/8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"usage",children:(0,i.jsx)(n.strong,{children:"Usage"})}),"\n",(0,i.jsxs)(n.p,{children:["The published messages are encoded protobufs of type\xa0",(0,i.jsxs)(n.a,{href:"https://github.com/drand/drand/blob/799190bff8e1a2ce46dccfcf4e7f7d75075495b2/protobuf/drand/api.proto#L42-L53",children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"PublicRandResponse"})}),"(RandResponse)"]}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["In order to receive randomness using this method you will need to run an application that creates a libp2p host that can connect to a pubsub relay and subscribe to the PubSub topic. We recommend using drand's\xa0",(0,i.jsx)(n.a,{href:"3-3-dev-guide-client-libraries",children:(0,i.jsx)(n.strong,{children:"client libraries"})}),"\xa0or the\xa0",(0,i.jsx)(n.a,{href:"3-2-dev-guide-drand-client-cli",children:(0,i.jsx)(n.strong,{children:"drand-client"})}),"\xa0tool, which automatically perform\xa0",(0,i.jsx)(n.em,{children:"verification"}),"\xa0for this task."]}),"\n",(0,i.jsxs)(n.p,{children:["As a side note, IPFS can be used to subscribe to PubSub topics (running with\xa0",(0,i.jsx)(n.code,{children:"ipfs daemon --enable-pubsub-experiment"}),"):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:"ipfs swarm connect /dnsaddr/api.drand.sh\nipfs pubsub sub /drand/pubsub/v0.0.0/8990e7a9aaed2ffed73dbd7092123d6f289930540d7651336225dc172e51b2ce\n"})}),"\n",(0,i.jsx)("aside",{children:(0,i.jsx)(n.p,{children:"\u2139\ufe0f NOTE: You will only see raw protobuf as the output."})}),"\n",(0,i.jsx)(n.hr,{})]})}function l(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var i=s(6540);const d={},t=i.createContext(d);function r(e){const n=i.useContext(t);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);