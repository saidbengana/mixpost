import{o,k as m,w as t,b as e,a as s,u as h,l as b,K as V,d,f,c as p,_ as F,r as v,n as D,O as $,h as j,F as w,e as B,Z as N,P,m as y,p as L,t as C,q as E}from"./app.7a64cfa1.js";import{u as M}from"./useNotifications.e3a4e3f0.js";import{_ as O}from"./PageHeader.987f2c53.js";import{_ as R}from"./Panel.16e7074b.js";import{_ as G,a as H,b as q,T as z,c as U}from"./Trash.e007c95d.js";import{_ as X}from"./Account.03023137.js";import{T as Y,F as I,M as K}from"./ProviderIcon.ffdeb76d.js";import{_ as Z}from"./Badge.f5d68b9f.js";import{_ as J}from"./Input.30e3f39f.js";import{_ as S}from"./PrimaryButton.4a06c814.js";import{_ as Q}from"./HorizontalGroup.07e0a23c.js";import{E as W}from"./EllipsisVertical.4b972192.js";import{_ as ee}from"./Alert.cd587495.js";import"./ExclamationCircle.29248bd3.js";const se={class:"flex mr-4"},te=e("span",{class:"flex flex-col items-start"},[e("span",{class:"font-semibold"},"X"),e("span",null,"Connect a new X profile")],-1),oe={__name:"AddTwitterAccount",setup(_){return(a,r)=>(o(),m(h(b),{href:a.route("mixpost.accounts.add",{provider:"twitter"}),method:"post",as:"button",type:"button",class:"w-full flex items-center px-lg py-4 hover:bg-twitter hover:bg-opacity-20 ease-in-out duration-200"},{default:t(()=>[e("span",se,[s(Y,{class:"text-twitter"})]),te]),_:1},8,["href"]))}},ae={class:"flex mr-4"},ne=e("span",{class:"flex flex-col items-start"},[e("span",{class:"font-semibold"},"Facebook Page"),e("span",null,"Connect a new Facebook page")],-1),re={__name:"AddFacebookPage",setup(_){return(a,r)=>(o(),m(h(b),{href:a.route("mixpost.accounts.add",{provider:"facebook_page"}),method:"post",as:"button",type:"button",class:"w-full flex items-center px-lg py-4 hover:bg-facebook hover:bg-opacity-20 ease-in-out duration-200"},{default:t(()=>[e("span",ae,[s(I,{class:"text-facebook"})]),ne]),_:1},8,["href"]))}},ce={class:"flex mr-4"},le={class:"flex flex-col items-start"},ie={class:"font-semibold"},ue=e("span",null,"Connect a new Facebook group",-1),de={key:0,class:"text-xs text-red-500 text-left"},_e={__name:"AddFacebookGroup",setup(_){const a=V().props.additionally.meta_app_version;return(r,n)=>(o(),m(h(b),{href:r.route("mixpost.accounts.add",{provider:"facebook_group"}),method:"post",as:"button",type:"button",class:"w-full flex items-center px-lg py-4 hover:bg-facebook hover:bg-opacity-20 ease-in-out duration-200"},{default:t(()=>[e("span",ce,[s(I,{class:"text-facebook"})]),e("span",le,[e("span",ie,[d("Facebook Group "),h(a)==="v19.0"?(o(),m(Z,{key:0,variant:"error"},{default:t(()=>[d("Deprecated in v19")]),_:1})):f("",!0)]),ue,h(a)==="v19.0"?(o(),p("span",de,"The Facebook Groups API is deprecated in v19.")):f("",!0)])]),_:1},8,["href"]))}},pe={},fe={xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor",class:"w-6 h-6"},me=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"},null,-1),he=[me];function ve(_,a){return o(),p("svg",fe,he)}const ge=F(pe,[["render",ve]]),be={class:"flex mr-md"},xe=e("span",{class:"flex flex-col items-start"},[e("span",{class:"font-semibold"},"Mastodon"),e("span",null,"Connect a new Mastodon profile")],-1),ke={key:0,class:"px-lg py-md"},$e=e("span",{class:"mr-xs"},"Next",-1),we={__name:"AddMastodonAccount",setup(_){const{notify:a}=M(),r=v(!1),n=v(""),u=v(!1),x=()=>new Promise((c,i)=>{axios.post(route("mixpost.services.createMastodonApp"),{server:n.value}).then(()=>{c()}).catch(function(l){i(l)})}),k=()=>{r.value=!0,$.post(route("mixpost.accounts.add",{provider:"mastodon"}),{server:n.value},{onSuccess(){r.value=!1}})},g=async()=>{r.value=!0,await x().then(()=>{k()}).catch(c=>{if(c.response.status!==422){a("error",c.response.data.message);return}a("error",c.response.data.errors)}).finally(()=>{r.value=!1})};return(c,i)=>(o(),p("div",{class:D({"bg-mastodon bg-opacity-20":u.value})},[e("div",{role:"button",onClick:i[0]||(i[0]=l=>u.value=!u.value),type:"button",class:"w-full flex items-center px-lg py-md hover:bg-mastodon hover:bg-opacity-20 ease-in-out duration-200"},[e("span",be,[s(K,{class:"text-mastodon"})]),xe]),u.value?(o(),p("div",ke,[s(Q,null,{title:t(()=>[d("Enter your Mastodon server")]),default:t(()=>[s(J,{type:"text",modelValue:n.value,"onUpdate:modelValue":i[1]||(i[1]=l=>n.value=l),placeholder:"example.server"},null,8,["modelValue"])]),_:1}),s(S,{onClick:g,disabled:!n.value||r.value,isLoading:r.value,class:"mt-xs md:mt-0"},{default:t(()=>[$e,e("span",null,[s(ge,{class:"!w-5 !h-5"})])]),_:1},8,["disabled","isLoading"])])):f("",!0)],2))}},ye={},Ce={xmlns:"http://www.w3.org/2000/svg",class:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor","stroke-width":"2"},Ae=e("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"},null,-1),Fe=[Ae];function Me(_,a){return o(),p("svg",Ce,Fe)}const Ie=F(ye,[["render",Me]]),Se={key:0,class:"mb-md"},Te={key:0},Ve={key:1},De=e("p",{class:"mt-xs italic"},"Click on the button below to configure the third-party services.",-1),je={__name:"AlertUnconfiguredService",props:{isConfigured:{type:Object,required:!0}},setup(_){const a=_,r=j(()=>Object.keys(a.isConfigured).some(n=>!["tenor","unsplash"].includes(n)&&a.isConfigured[n]!==!0));return(n,u)=>r.value?(o(),p("div",Se,[s(ee,{variant:"warning",closeable:!1,class:"mb-md"},{default:t(()=>[_.isConfigured.facebook?f("",!0):(o(),p("p",Te,"You have not configured Facebook service.")),_.isConfigured.twitter?f("",!0):(o(),p("p",Ve,"You have not configured Twitter service.")),De]),_:1}),s(h(b),{href:n.route("mixpost.services.index"),class:"inline-block"},{default:t(()=>[s(S,null,{default:t(()=>[d("Configure services")]),_:1})]),_:1},8,["href"])])):f("",!0)}},Be={class:"w-full mx-auto row-py"},Ne={class:"mt-lg row-px w-full"},Pe={class:"w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 gap-6"},Le={class:"block p-lg"},Ee={class:"flex flex-col justify-center items-center"},Oe=e("span",{class:"mt-xs text-lg"},"Add account",-1),Re={class:"absolute top-0 right-0 mt-sm mr-sm"},Ge={class:"flex flex-col justify-center"},He={class:"mt-sm font-semibold text-center break-words"},qe={class:"mt-1 text-center text-stone-800"},ze={class:"flex flex-col"},A="Social Accounts",rs={__name:"Accounts",setup(_){const{notify:a}=M(),r=v(!1),n=v(null),u=v(!1),x=c=>{$.put(route("mixpost.accounts.update",{account:c}),{},{preserveScroll:!0,onSuccess(i){i.props.flash.error||a("success","The account has been refreshed")}})},k=()=>{$.delete(route("mixpost.accounts.delete",{account:n.value}),{preserveScroll:!0,onStart(){u.value=!0},onSuccess(){n.value=null,a("success","Account deleted")},onFinish(){u.value=!1}})},g=()=>{u.value||(n.value=null)};return(c,i)=>(o(),p(w,null,[s(h(N),{title:A}),e("div",Be,[s(O,{title:A},{description:t(()=>[d(" Connect a social account you'd like to manage. ")]),_:1}),e("div",Ne,[s(je,{isConfigured:c.$page.props.is_configured_service},null,8,["isConfigured"]),e("div",Pe,[e("button",{onClick:i[0]||(i[0]=l=>r.value=!0),class:"border border-indigo-800 rounded-lg hover:border-indigo-500 hover:text-indigo-500 transition-colors ease-in-out duration-200"},[e("span",Le,[e("span",Ee,[s(P,{class:"w-7 h-7"}),Oe])])]),(o(!0),p(w,null,B(c.$page.props.accounts,l=>(o(),m(R,{key:l.id,class:"relative"},{default:t(()=>[e("div",Re,[s(L,{"width-classes":"w-32"},{trigger:t(()=>[s(q,null,{default:t(()=>[s(W)]),_:1})]),content:t(()=>[s(y,{onClick:T=>x(l.id),as:"button"},{default:t(()=>[s(Ie,{class:"!w-5 !h-5 mr-1"}),d(" Refresh ")]),_:2},1032,["onClick"]),s(y,{onClick:T=>n.value=l.id,as:"button"},{default:t(()=>[s(z,{class:"!w-5 !h-5 mr-1 text-red-500"}),d(" Delete ")]),_:2},1032,["onClick"])]),_:2},1024)]),e("div",Ge,[s(X,{size:"lg","img-url":l.image,provider:l.provider,active:!0},null,8,["img-url","provider"]),e("div",He,C(l.name),1),e("div",qe,"Added: "+C(l.created_at),1)])]),_:2},1024))),128))])])]),s(G,{show:n.value!==null,onClose:g,variant:"danger"},{header:t(()=>[d(" Delete account ")]),body:t(()=>[d(" Are you sure you want to delete this account? ")]),footer:t(()=>[s(E,{onClick:g,disabled:u.value,class:"mr-xs"},{default:t(()=>[d("Cancel ")]),_:1},8,["disabled"]),s(U,{onClick:k,"is-loading":u.value,disabled:u.value},{default:t(()=>[d("Delete ")]),_:1},8,["is-loading","disabled"])]),_:1},8,["show"]),s(H,{show:r.value,closeable:!0,onClose:i[1]||(i[1]=l=>r.value=!1)},{default:t(()=>[e("div",ze,[c.$page.props.is_configured_service.facebook?(o(),m(re,{key:0})):f("",!0),c.$page.props.is_configured_service.facebook?(o(),m(_e,{key:1})):f("",!0),s(we),c.$page.props.is_configured_service.twitter?(o(),m(oe,{key:2})):f("",!0)])]),_:1},8,["show"])],64))}};export{rs as default};