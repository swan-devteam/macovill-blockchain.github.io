(this.webpackJsonpdeep_link=this.webpackJsonpdeep_link||[]).push([[0],{201:function(e,n,t){},215:function(e,n){},217:function(e,n){},222:function(e,n){},223:function(e,n){},250:function(e,n){},252:function(e,n){},265:function(e,n){},267:function(e,n){},281:function(e,n){},312:function(e,n){},313:function(e,n){},383:function(e,n){},385:function(e,n){},391:function(e,n){},403:function(e,n){},406:function(e,n){},411:function(e,n){},496:function(e,n,t){"use strict";t.r(n);var a=t(29),i=t.n(a),s=t(190),o=t.n(s),r=(t(201),t(105)),p=t(107),u=t(18),d=t.n(u),y=t(191),l=t.n(y);var c=function(){var e=Object(a.useState)(),n=Object(p.a)(e,2),t=(n[0],n[1]),i=Object(a.useState)(""),s=Object(p.a)(i,2),o=s[0],u=s[1],y=function(){var e=Object(r.a)(d.a.mark((function e(){var n,t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:n=e.sent,console.log(n),u(n[0]),window.focus(),navigator.clipboard.writeText(n[0]),t=navigator.userAgent.toLowerCase(),window.location.href=t.indexOf("android")>-1?"macodl://mylink":"?";case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=Object(r.a)(d.a.mark((function e(){var n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,window.ethereum.request({method:"eth_requestAccounts"});case 2:n=e.sent,console.log(n),u(n[0]);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(a.useEffect)((function(){console.log("location >>>",window.location),console.log("location.search >>>",window.location.search);var e=new URLSearchParams(window.location.search);if("undefined"!==typeof window.ethereum)try{var n=new l.a(window.ethereum);t(n);var a=new n.eth.Contract([{inputs:[],stateMutability:"nonpayable",type:"constructor"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"approved",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"owner",type:"address"},{indexed:!0,internalType:"address",name:"operator",type:"address"},{indexed:!1,internalType:"bool",name:"approved",type:"bool"}],name:"ApprovalForAll",type:"event"},{inputs:[{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"approve",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"burn",outputs:[],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"previousOwner",type:"address"},{indexed:!0,internalType:"address",name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{inputs:[],name:"renounceOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"to",type:"address"}],name:"safeMint",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"},{internalType:"bytes",name:"_data",type:"bytes"}],name:"safeTransferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"operator",type:"address"},{internalType:"bool",name:"approved",type:"bool"}],name:"setApprovalForAll",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"uint256",name:"_price",type:"uint256"}],name:"setMintPirce",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,internalType:"address",name:"from",type:"address"},{indexed:!0,internalType:"address",name:"to",type:"address"},{indexed:!0,internalType:"uint256",name:"tokenId",type:"uint256"}],name:"Transfer",type:"event"},{inputs:[{internalType:"address",name:"from",type:"address"},{internalType:"address",name:"to",type:"address"},{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"transferFrom",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],stateMutability:"nonpayable",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"}],name:"balanceOf",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"getApproved",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[],name:"getMintPrice",outputs:[{internalType:"uint256",name:"",type:"uint256"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"address",name:"owner",type:"address"},{internalType:"address",name:"operator",type:"address"}],name:"isApprovedForAll",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"name",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[],name:"owner",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"ownerOf",outputs:[{internalType:"address",name:"",type:"address"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"bytes4",name:"interfaceId",type:"bytes4"}],name:"supportsInterface",outputs:[{internalType:"bool",name:"",type:"bool"}],stateMutability:"view",type:"function"},{inputs:[],name:"symbol",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"},{inputs:[{internalType:"uint256",name:"tokenId",type:"uint256"}],name:"tokenURI",outputs:[{internalType:"string",name:"",type:"string"}],stateMutability:"view",type:"function"}],"0xd9145CCE52D386f254917e481eB44e9943F39138"),i=e.get("action");"sign"==i?y():"send"==i?(""==o&&c(),a.methods.setMintPirce(150).send({from:o}).on("receipt",(function(e){console.log(e);var n=navigator.userAgent.toLowerCase();window.location.href=n.indexOf("android")>-1?"macodl://mylink":"?"}))):"deep"==i&&(window.location.href="macodl://mylink")}catch(s){console.log(s)}}),[])},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,499)).then((function(n){var t=n.getCLS,a=n.getFID,i=n.getFCP,s=n.getLCP,o=n.getTTFB;t(e),a(e),i(e),s(e),o(e)}))},f=t(106);o.a.render(Object(f.jsx)(i.a.StrictMode,{children:Object(f.jsx)(c,{})}),document.getElementById("root")),m()}},[[496,1,2]]]);
//# sourceMappingURL=main.1c823f41.chunk.js.map