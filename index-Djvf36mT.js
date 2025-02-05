import{r as g,j as e,R as q}from"./react-CFCE4xZu.js";import{r as W,c as V}from"./react-dom-DxNr1Rbd.js";import{a as G}from"./axios-DXsv3KKR.js";import{u as S,i as T}from"./react-i18next-CePVTCl5.js";import{u as R,a as O,Q as H,b as Z}from"./@tanstack-CYFtUW9O.js";import{l as K}from"./socket.io-client-CDVIIGn8.js";import{v as J}from"./uuid-CQkTLCs1.js";import{i as Q}from"./i18next-B2185GOa.js";import"./scheduler-CzFDRTuY.js";import"./engine.io-client-C44f3zIw.js";import"./engine.io-parser-BiEtp6m2.js";import"./@socket.io-Dkula2eQ.js";import"./socket.io-parser-BBkuslX-.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();const Y="_bold_1h4om_1",X="_normal_1h4om_5",N={bold:Y,normal:X},p=g.forwardRef(({as:n="p",bold:i=!1,color:o,sx:a,fontSize:t,textAlign:s,mb:r,fontWeight:y,children:d,...m},c)=>{const h=o??N.defaultColor,l=`${N.typography} ${i?N.bold:N.normal}`;return e.jsx(n,{ref:c,style:{color:h,fontSize:t,textAlign:s,marginBottom:r,fontWeight:y,...a},className:l,...m,children:d})}),ee="data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M18%2031.5C19.7728%2031.5%2021.5283%2031.1508%2023.1662%2030.4724C24.8041%2029.7939%2026.2923%2028.7995%2027.5459%2027.5459C28.7995%2026.2923%2029.7939%2024.8041%2030.4724%2023.1662C31.1508%2021.5283%2031.5%2019.7728%2031.5%2018C31.5%2016.2272%2031.1508%2014.4717%2030.4724%2012.8338C29.7939%2011.1959%2028.7995%209.70765%2027.5459%208.45406C26.2923%207.20047%2024.8041%206.20606%2023.1662%205.52763C21.5283%204.84919%2019.7728%204.5%2018%204.5C14.4196%204.5%2010.9858%205.92232%208.45406%208.45406C5.92232%2010.9858%204.5%2014.4196%204.5%2018C4.5%2021.5804%205.92232%2025.0142%208.45406%2027.5459C10.9858%2030.0777%2014.4196%2031.5%2018%2031.5ZM17.652%2023.46L25.152%2014.46L22.848%2012.54L16.398%2020.2785L13.0605%2016.9395L10.9395%2019.0605L15.4395%2023.5605L16.6005%2024.7215L17.652%2023.46Z'%20fill='%2366A811'/%3e%3c/svg%3e",ne="_container_1r4mh_1",te="_description_1r4mh_12",ie="_titleWorry_1r4mh_18",oe="_descriptionWorry_1r4mh_28",ae="_success_1r4mh_38",se="_titleSuccess_1r4mh_44",B={container:ne,description:te,titleWorry:ie,descriptionWorry:oe,success:ae,titleSuccess:se},D="data:image/svg+xml,%3csvg%20width='64'%20height='64'%20viewBox='0%200%2064%2064'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M26.667%2042.6667H13.3337V56M37.3337%2021.3333H50.667V8M12.2217%2024.0091C13.7168%2020.3084%2016.2202%2017.1014%2019.4471%2014.7526C22.6741%2012.4038%2026.4986%2011.0067%2030.4797%2010.7214C34.4607%2010.436%2038.4396%2011.2731%2041.9686%2013.1376C45.4976%2015.0022%2048.4303%2017.8201%2050.438%2021.2697M51.7805%2039.9922C50.2853%2043.6928%2047.782%2046.8998%2044.555%2049.2487C41.328%2051.5975%2037.5074%2052.9928%2033.5264%2053.2781C29.5453%2053.5635%2025.5632%2052.7265%2022.0342%2050.862C18.5052%2048.9974%2015.5705%2046.18%2013.5628%2042.7305'%20stroke='black'%20stroke-width='2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",re=void 0,$=G.create({baseURL:`${re}/api`});$.interceptors.response.use(n=>n,n=>{var a,t;const i=(a=n.response)==null?void 0:a.status,o=(t=n==null?void 0:n.response)==null?void 0:t.data;throw i===403?new Error("Insufficient Access Rights"):((o==null?void 0:o.code)==="tokenExpired"&&window.location.replace("/login?reason=tokenExpired"),o!=null&&o.message&&(n.message=o.message),n)});const L="/image";async function ce(n){return(await $.post(`${L}/manipulate`,n,{headers:{"content-type":"multipart/form-data"}})).data}async function le(n){return(await $.get(`${L}/manipulate/${n}`)).data}async function de(n){return(await $.delete(`${L}/manipulate/${n}`)).data}async function ue(){return await $.get(`${L}/check-server-status`)}const ge="_button_xumxx_1",me="_primary_xumxx_33",pe="_secondary_xumxx_43",he="_tertiary_xumxx_48",fe="_error_xumxx_58",ye="_cancel_xumxx_63",we="_icon_xumxx_67",A={button:ge,primary:me,secondary:pe,tertiary:he,error:fe,cancel:ye,icon:we},C=g.forwardRef(({typeButton:n="primary",children:i,icon:o,iconPosition:a="left",sx:t,...s},r)=>e.jsxs("button",{ref:r,className:`${A.button} ${A[n]}`,style:t,...s,children:[o&&a==="left"&&e.jsx("img",{src:o,alt:"icon",className:A.icon}),i,o&&a==="right"&&e.jsx("img",{src:o,alt:"icon",className:A.icon})]})),be="_container_163uk_1",ve="_generatedImage_163uk_5",xe="_spinner_163uk_19",_e="_rotate_163uk_1",Ce="_title_163uk_34",Se="_description_163uk_40",je="_errorText_163uk_44",ke="_buttonContainer_163uk_50",Ie="_loaderContainer_163uk_57",f={container:be,generatedImage:ve,spinner:xe,rotate:_e,title:Ce,description:Se,errorText:je,buttonContainer:ke,loaderContainer:Ie},ze=({queueNumber:n=1,imageSrc:i,error:o,onClickBack:a})=>{const{t}=S(),[s,r]=g.useState(!1),y=()=>{if(!i)return;const c=document.createElement("a");c.href=i,c.download="image",c.target="_blank",document.body.appendChild(c),c.click(),document.body.removeChild(c)},d=()=>{const c=localStorage.getItem("imageManipulationUUID");c?de(c).then(()=>{localStorage.removeItem("imageManipulationUUID"),a()}):a()},m=()=>{r(!0)};return e.jsxs("div",{className:f.container,children:[e.jsx("div",{className:f.generatedImage,children:o?e.jsxs(e.Fragment,{children:[e.jsxs(p,{className:f.errorText,children:[t("something-went-wrong-please-try-again")," "]}),e.jsxs(C,{typeButton:"primary",onClick:d,children:[t("go-back-to-generate-image")," "]})]}):i?e.jsxs(e.Fragment,{children:[!s&&e.jsxs("div",{className:f.loaderContainer,children:[e.jsx("img",{src:D,alt:t("loading"),className:f.spinner}),e.jsxs(p,{className:f.title,textAlign:"center",children:[t("position"),n," ",t("in-queue")]}),e.jsx(p,{className:f.description,textAlign:"center",children:t("your-request-will-be-processed-soon-please-dont-close-this-tab")})]}),e.jsx("img",{src:i,alt:t("generated"),style:{display:s?"block":"none",width:"100%",height:"100%",objectFit:"cover"},onLoad:m})]}):e.jsxs("div",{className:f.loaderContainer,children:[e.jsx("img",{src:D,alt:t("loading"),className:f.spinner}),e.jsxs(p,{className:f.title,children:[t("position"),n," ",t("in-queue")]}),e.jsx(p,{className:f.description,children:t("your-request-will-be-processed-soon-please-dont-close-this-tab")})]})}),i&&!o&&s&&e.jsxs("div",{className:f.buttonContainer,children:[e.jsxs(C,{typeButton:"primary",onClick:y,children:[t("download")," "]}),e.jsxs(C,{typeButton:"secondary",onClick:a,children:[t("upload-another-image")," "]})]})]})},$e=({imageSrc:n,isError:i,onClickBack:o})=>{const{t:a}=S();return e.jsxs("div",{className:B.container,children:[e.jsx("div",{className:B.success,children:n?e.jsxs(e.Fragment,{children:[e.jsxs(p,{as:"h6",className:B.titleSuccess,sx:{width:"fit-content"},children:[a("completed")," "]}),e.jsx("img",{src:ee,alt:"Success"})]}):e.jsx(p,{as:"h6",className:B.title,children:a(i?"an-error-occurred-during-generation":"generating")})}),e.jsx(ze,{imageSrc:n,error:i,onClickBack:o})]})},Ee="data:image/svg+xml,%3csvg%20width='50'%20height='42'%20viewBox='0%200%2050%2042'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M44.814%200.171875H12.5244C9.94043%200.171875%207.83838%202.27393%207.83838%204.85791V7.51111H5.18604C2.60205%207.51111%200.5%209.61316%200.5%2012.1963V37.1475C0.5%2039.7314%202.60205%2041.8335%205.18604%2041.8335H37.4756C40.0596%2041.8335%2042.1616%2039.7314%2042.1616%2037.1475V34.4943H44.814C47.3979%2034.4943%2049.5%2032.3922%2049.5%2029.8091V4.85791C49.5%202.27393%2047.3979%200.171875%2044.814%200.171875ZM46%2029.8091C46%2030.4628%2045.4685%2030.9943%2044.814%2030.9943H42.1616V12.1963C42.1616%209.61316%2040.0596%207.51111%2037.4756%207.51111H11.3384V4.85791C11.3384%204.20422%2011.8699%203.67188%2012.5244%203.67188H44.814C45.4685%203.67188%2046%204.20422%2046%204.85791V29.8091ZM37.4756%2038.3335H5.18604C4.53149%2038.3335%204%2037.8011%204%2037.1475V30.2253L6.63867%2031.3173C8.12036%2031.9299%209.68066%2032.2307%2011.2324%2032.2307C13.9036%2032.2307%2016.5491%2031.3403%2018.7126%2029.6254L24.1729%2025.2922C27.3208%2022.792%2031.7043%2022.8099%2034.8352%2025.3444L38.6616%2028.4424V37.1475C38.6616%2037.8011%2038.1301%2038.3335%2037.4756%2038.3335ZM5.18604%2011.0111H37.4756C38.1301%2011.0111%2038.6616%2011.5426%2038.6616%2012.1963V23.9396L37.0364%2022.6237C32.6289%2019.0527%2026.4441%2019.0211%2021.9956%2022.551L16.5371%2026.8842C14.1138%2028.8059%2010.8308%2029.2631%207.97681%2028.0839L4%2026.4388V12.1963C4%2011.5426%204.53149%2011.0111%205.18604%2011.0111Z'%20fill='black'/%3e%3cpath%20d='M12.8623%2023.8228C15.8496%2023.8228%2018.2815%2021.3917%2018.2815%2018.4036C18.2815%2015.4154%2015.8496%2012.9844%2012.8623%2012.9844C9.87329%2012.9844%207.44141%2015.4154%207.44141%2018.4036C7.44141%2021.3917%209.87329%2023.8228%2012.8623%2023.8228ZM14.7815%2018.4036C14.7815%2019.4614%2013.9202%2020.3228%2012.8623%2020.3228C11.8027%2020.3228%2010.9414%2019.4614%2010.9414%2018.4036C10.9414%2017.3457%2011.8027%2016.4844%2012.8623%2016.4844C13.9202%2016.4844%2014.7815%2017.3457%2014.7815%2018.4036Z'%20fill='black'/%3e%3c/svg%3e",Ne="_dropZone_1w076_1",Be="_icon_1w076_16",Ae="_text_1w076_20",Le="_buttons_1w076_27",Me="_webcamContainer_1w076_33",De="_preview_1w076_44",Pe="_error_1w076_50",Ue="_button_1w076_27",Fe="_imageContainer_1w076_62",qe="_centerButtonContainer_1w076_68",w={dropZone:Ne,icon:Be,text:Ae,buttons:Le,webcamContainer:Me,preview:De,error:Pe,button:Ue,imageContainer:Fe,centerButtonContainer:qe},We=1024,Ve=({imageSrc:n,setImageSrc:i,setImage:o,centerButton:a})=>{const{t}=S(),[s,r]=g.useState(!1),y=l=>{l.preventDefault()},d=l=>{l.preventDefault();const u=l.dataTransfer.files[0];u&&m(u)},m=l=>{const u=new FileReader;u.onload=()=>{const v=u.result;i(v),o==null||o(l),c(v)},u.readAsDataURL(l)},c=l=>{const u=new Image;u.src=l,u.onload=()=>{r(u.width+u.height<We)}},h=()=>{const l=document.createElement("input");l.type="file",l.accept="image/*",l.onchange=u=>{var E;const v=(E=u.target.files)==null?void 0:E[0];v&&m(v)},l.click()};return e.jsxs(e.Fragment,{children:[e.jsx("div",{className:w.dropZone,onDragOver:y,onDrop:d,children:n?e.jsxs("div",{className:w.imageContainer,children:[e.jsx("img",{src:n,alt:t("preview"),className:w.preview}),a&&e.jsx("div",{className:w.centerButtonContainer,children:e.jsx(C,{type:"button",onClick:h,typeButton:"tertiary",children:t("upload-image")})})]}):e.jsxs(e.Fragment,{children:[e.jsx("img",{src:Ee,alt:t("icon"),className:w.icon}),e.jsx("p",{className:w.text,children:t("drag-image-here-or")}),e.jsx("div",{className:w.buttons,children:e.jsx(C,{type:"button",onClick:h,children:t("upload-image")})}),s&&e.jsx("p",{className:w.error,children:t("image-is-too-small")})]})}),n&&!a&&e.jsx("div",{className:w.button,children:e.jsx(C,{onClick:h,typeButton:"secondary",children:t("upload-new-image")})})]})},Ge="/assets/Dystopia-CRj9Gjwc.jpg",Te="/assets/Solar-BJhd6rTl.jpg",Re="/assets/Utopia-BG81Rc8E.jpg",Oe="/assets/Wind-DEC3sAEq.jpg",He="/assets/flood-CTBCJT5B.jpg",Ze="/assets/flux_wind-CFaS3GLC.jpg",Ke="/assets/flux_solar-C9PJHuzp.jpg",Je="/assets/vegetation-B6vJmNJ0.jpg",Qe="/assets/Dystopia-BRBqVWkk.jpg",Ye="/assets/Solar-DQYK6YVK.jpg",Xe="/assets/Utopia-CLIySRz1.jpg",en="/assets/Wind-rd7WgxnO.jpg",nn="/assets/flood-ClwLUPwG.jpg",tn="/assets/flux_wind-BZRFhGFh.jpg",on="/assets/flux_solar-DwWJ5Ekw.jpg",an="/assets/vegetation-Dzjz_Dys.jpg",sn=()=>{const{t:n}=S();return[{value:"solar",label:n("scenarios.solar"),image:Te,smallImage:Ye},{value:"wind",label:n("scenarios.wind"),image:Oe,smallImage:en},{value:"vegetation",label:n("scenarios.vegetation"),image:Je,isSelected:!0,smallImage:an},{value:"dystopia",label:n("scenarios.dystopia"),image:Ge,smallImage:Qe},{value:"utopia",label:n("scenarios.utopia"),image:Re,smallImage:Xe},{value:"flood",label:n("flood"),image:He,smallImage:nn}]},rn=()=>{const{t:n}=S();return[{value:"flux_wind",label:n("wind-version-2"),image:Ze,smallImage:tn},{value:"flux_solar",label:n("solar-version-2"),image:Ke,smallImage:on}]},cn="_card_xknid_1",ln="_imageWrapper_xknid_15",dn="_image_xknid_15",un="_title_xknid_29",gn="_dimmed_xknid_39",I={card:cn,imageWrapper:ln,image:dn,title:un,dimmed:gn},mn=({isDimmed:n,onClick:i,card:o})=>e.jsx("div",{className:`${I.card}  ${n?I.dimmed:""}`,onClick:i,children:e.jsxs("div",{className:I.imageWrapper,children:[e.jsx("img",{src:o.smallImage??o.image,alt:o.label,className:I.image}),e.jsx(p,{className:I.title,children:o.label})]})}),pn="_cardContainer_fndv3_1",hn="_lastCard_fndv3_11",M={cardContainer:pn,lastCard:hn},fn=({selectedCardValue:n,onCardClick:i})=>{const o=sn(),a=rn(),t=[...o,...a],s=o.length%2!==0;return e.jsx("div",{className:M.cardContainer,children:t.map((r,y)=>e.jsx("div",{className:`${M.card} ${s&&y===o.length-1?M.lastCard:""}`,children:e.jsx(mn,{card:r,isDimmed:n!==null&&n!==r.value,onClick:()=>i(r.value)})},r.label))})},yn="data:image/svg+xml,%3csvg%20width='18'%20height='14'%20viewBox='0%200%2018%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.5501%2013.0125L0.850098%207.3125L2.2751%205.8875L6.5501%2010.1625L15.7251%200.987503L17.1501%202.4125L6.5501%2013.0125Z'%20fill='black'/%3e%3c/svg%3e",wn="_checkboxContainer_1qe9s_1",bn="_checkbox_1qe9s_1",vn="_checkIcon_1qe9s_18",xn="_label_1qe9s_23",z={checkboxContainer:wn,checkbox:bn,checkIcon:vn,label:xn},_n=({label:n,isChecked:i,onChange:o,mb:a})=>{const t=()=>{o()};return e.jsxs("div",{className:z.checkboxContainer,onClick:t,style:{marginBottom:a},children:[e.jsx("div",{className:`${z.checkbox} ${i?z.checked:""}`,children:i&&e.jsx("img",{src:yn,alt:"Checked",className:z.checkIcon})}),e.jsx("span",{className:z.label,children:n})]})};var _=(n=>(n.connection="connection",n.disconnect="disconnect",n.createGroupForImageManipulation="createGroupForImageManipulation",n.imageManipulationFinished="imageManipulationFinished",n.imageManipulationFailed="imageManipulationFailed",n))(_||{});const U=void 0;console.log({socketURL:U});const k=K(U),Cn="_container_cei15_1",Sn="_containerDrop_cei15_17",jn="_start_cei15_29",kn="_description_cei15_35",In="_descriptionScenario_cei15_46",zn="_wrapperDrop_cei15_50",$n="_containerScenario_cei15_62",En="_containerOptional_cei15_79",Nn="_inputs_cei15_87",b={container:Cn,containerDrop:Sn,start:jn,description:kn,descriptionScenario:In,wrapperDrop:zn,containerScenario:$n,containerOptional:En,inputs:Nn},Bn=({setImageId:n})=>{const{t:i}=S(),[o,a]=g.useState(!1),[t,s]=g.useState(""),[r,y]=g.useState(),[d,m]=g.useState(!1),[c,h]=g.useState(""),l=x=>{h(x===c?"":x)},u=!!t&&d&&c!=="",{mutate:v}=R({mutationFn:ce,onSuccess:(x,j)=>{const F=j.get("imageManipulationUUID");n(F)},onError:()=>{a(!1)},onSettled:()=>{a(!1)}}),E=()=>{a(!0);const x=J();if(localStorage.setItem("imageManipulationUUID",x),k.emit(_.createGroupForImageManipulation,x),r){const j=new FormData;j.append("image",r),j.append("imageManipulationUUID",x),j.append("visualizationType",c),v(j)}};return e.jsxs("div",{className:b.container,children:[e.jsxs("div",{className:b.containerDrop,children:[!t&&e.jsxs(e.Fragment,{children:[e.jsx(p,{className:b.start,children:i("get-started")}),e.jsx(p,{as:"h3",className:b.title,children:i("upload-an-image")}),e.jsx(p,{className:b.description,children:i("upload-an-image-of-choice-to-start-ai-generation")})]}),e.jsx("div",{className:b.wrapperDrop,children:e.jsx(Ve,{imageSrc:t,setImage:y,setImageSrc:s})})]}),e.jsxs("div",{className:b.containerScenario,children:[e.jsxs("div",{children:[e.jsx(p,{as:"h6",children:i("select-a-scenario")}),e.jsx(p,{className:b.descriptionScenario,children:i("choose-and-apply-a-scenario-of-choice")})]}),e.jsx(fn,{selectedCardValue:c,onCardClick:l}),e.jsx(_n,{label:i("ich-bin-mit-den-nutzungsbedingungen-von-enervi-einverstanden"),isChecked:d,onChange:()=>m(!d)}),e.jsx(C,{disabled:!u,onClick:E,children:i(o?"generating":"generate")})]})]})},An="_wrapper_1mm8d_1",Ln={wrapper:An},Mn=({children:n,...i})=>e.jsx("section",{className:Ln.wrapper,...i,children:n}),Dn={Shorts:"shorts",Pins:"pins",ManipulatedImage:"manipulated-image",PinFromOpenStreetMapByCoordinates:"pin-from-open-street-map-by-coordinates",Pin:"pin",CheckServerStatus:"check-server-status"};function Pn(n){const{data:i,isError:o}=O({queryKey:[Dn.CheckServerStatus],queryFn:ue,enabled:!!n});return{data:i,isError:o}}const Un={},Fn=({isCompleted:n,isError:i,isManupulation:o})=>{const{t:a}=S(),t=o?a(n?"completed":i?"an-error-occurred-during-generation":"generating"):"";return e.jsx("div",{className:Un.status,children:e.jsx("span",{children:t})})},P="gen-img-content",qn=()=>{const[n,i]=g.useState(""),[o,a]=g.useState(void 0),[t,s]=g.useState(!1);g.useEffect(()=>{const d=localStorage.getItem("imageManipulationUUID")??"",m=localStorage.getItem("imageSrc")??"";i(d),a(m)},[]);const{isError:r}=Pn(n);g.useEffect(()=>{const d=()=>{s(!0)},m=async()=>{var c;try{const h=await le(n);if((c=h==null?void 0:h.manipulatedImage)!=null&&c.blobUrl){const l=h.manipulatedImage.blobUrl;a(l),localStorage.setItem("imageSrc",l),s(!1)}else d()}catch{d()}};return k.emit(_.createGroupForImageManipulation,n),k.on(_.imageManipulationFinished,m),k.on(_.imageManipulationFailed,d),()=>{k.off(_.imageManipulationFinished,m),k.off(_.imageManipulationFailed,d)}},[n]);const y=()=>{i(""),a(""),localStorage.removeItem("imageManipulationUUID"),localStorage.removeItem("imageSrc")};return e.jsxs(e.Fragment,{children:[e.jsx(Fn,{isCompleted:!!o,isError:r||t,isManupulation:!!n}),document.getElementById(P)&&W.createPortal(e.jsx(Mn,{children:n?e.jsx($e,{imageSrc:o,isError:r||t,onClickBack:y}):e.jsx(Bn,{setImageId:i})}),document.getElementById(P))]})};function Wn(){return e.jsx(qn,{})}const Vn=new H,Gn="Title",Tn="Description",Rn="Street",On="City",Hn="Latitude",Zn="Longitude",Kn="Cancel",Jn="Save",Qn="Decline",Yn="Accept",Xn="Preview",et="Icon",nt="Select",tt="Generated",it="Loading",ot="Position #",at="Download",st="Partnerships",rt="Images",ct="Logout",lt="Articles",dt="Generating...",ut="Generate",gt="Completed",mt="Visualization",pt={solar:"Solar",wind:"Wind",vegetation:"Vegetation",dystopia:"Dystopia",utopia:"Utopia"},ht="Home",ft="Flood",yt="Cookies",wt={"try-it-yourself":"Try it yourself!","visualizing-the-future-of-energy":"Visualizing the future of energy","discover-energy-transition-measures-around-germany-with-ai":"Discover energy transition measures around Germany with AI","title-is-required":"Title is required","message-is-required":"Message is required","image-is-required":"Image is required","street-is-required":"Street is required","post-code-is-required":"Post code is required","city-is-required":"City is required","edit-article":"Edit Article","add-new-article":"Add new article",title:Gn,"enter-title":"Enter title",description:Tn,"enter-description":"Enter description","add-to-map":"Add to map?",street:Rn,"enter-street":"Enter street","post-code":"Post Code","enter-post-code":"Enter post code",city:On,"enter-city":"Enter city",latitude:Hn,longitude:Zn,"delete-article":"Delete Article",cancel:Kn,save:Jn,"add-article":"Add Article","are-you-sure-you-want-to-remove-this-article":"Are you sure you want to remove this article?","upload-an-image-and-watch-our-ai-powered-visualization-tool-displays-the-generated-result":"Upload an image and watch our AI-powered visualization tool displays the generated result.","upload-an-image":"Upload an image","we-use-cookies-to-make-your-experience-better":"We use cookies to make your experience better",decline:Qn,accept:Yn,preview:Xn,"upload-image":"Upload image",icon:et,"drag-image-here-or":"Drag image here or","image-is-too-small":"Image is too small","upload-new-image":"Upload new image",select:nt,"selected-icon":"Selected icon","read-article":"Read article","something-went-wrong-please-try-again":"Something went wrong. Please try again.","go-back-to-generate-image":"Go back to Generate Image",generated:tt,loading:it,position:ot,"in-queue":"in queue","your-request-will-be-processed-soon-please-dont-close-this-tab":"Your request will be processed soon — Please don’t close this tab.",download:at,"upload-another-image":"Upload another image","how-it-works":"How it works","energy-transitions-visualized-with-ai":"Energy transitions visualized with AI","our-platform-offers-a-unique-ai-powered-experience-that-brings-the-countrys-energy-transition-to-life":"Our platform offers a unique, AI-powered experience that brings the country's energy transition to life.","the-enervi-project-is-funded-by-the-federal-ministry-for-economic-affairs-and-climate-protection-bmwk-and-implemented-by-borderstep-institute-for-innovation-and-sustainability-unetiq-gmbh-goethe-university-frankfurt-am-main-and-the-association-of-german-scientists-vdw":"The EnerVi project is funded by the Federal Ministry for Economic Affairs and Climate Protection (BMWK) and implemented by Borderstep Institute for Innovation and Sustainability, Unetiq GmbH, Goethe University Frankfurt am Main and the Association of German Scientists (VDW).",partnerships:st,"edit-pin":"Edit pin","add-pin":"Add pin","are-you-sure-you-want-to-remove-pin":"Are you sure you want to remove pin?","remove-pin":"Remove pin","enter-latitude":"Enter latitude","enter-longitude":"Enter longitude","please-upload-an-image-file":"Please upload an image file.",images:rt,"add-image":"Add image","admin-login":"Admin login",logout:ct,"manage-pins":"Manage pins","read-more":"Read more","upload-an-image-and-watch-our-ai-powered-visualization-tool-display-the-generated-result":"Upload an image and watch our AI-powered visualization tool display the generated result.","visualizing-with-enervi-scenarios":"Visualizing with EnerVi scenario’s","select-a-scenario-and-see-the-transformation":"Select a scenario and see the transformation","article-not-found":"Article not found","no-articles-found":"No articles found",articles:lt,"learn-everything-about-energy-transitions":"Learn everything about energy transitions","pin-not-found":"Pin not found","upload-an-image-of-choice-to-start-ai-generation":"Upload an image of choice to start AI generation","select-a-scenario":"Select a scenario","choose-and-apply-a-scenario-of-choice":"Choose and apply a scenario of choice","ich-bin-mit-den-nutzungsbedingungen-von-enervi-einverstanden":"I agree to the terms and conditions of EnerVi.",generating:dt,generate:ut,"an-error-occurred-during-generation":"An error occurred during generation",completed:gt,"dont-worry-you-can-read-while-your-image-is-being-generated":"Don’t worry — you can read while your image is being generated","404-not-found":"404 Not Found","404-error":"404 error","page-not-found":"Page not found","sorry-the-page-you-are-looking-for-doesnt-exist":"Sorry, the page you are looking for doesn't exist.","here-are-some-helpful-links":"Here are some helpful links:","go-back":"Go back","go-home":"Go Home","pins-not-found":"Pins not found","add-new-pin":"Add new pin",visualization:mt,scenarios:pt,home:ht,"upload-your-image":"Upload your image","start-by-uploading-an-image-this-could-be-a-location-facility-or-any-relevant-subject":"Start by uploading an image. This could be a location, facility, or any relevant subject.","select-scenario":"Select scenario","choose-from-a-variety-of-scenarios-such-as-wind-solar-flood-drought":"Choose from a variety of scenario’s such as wind, solar, flood, drought.","get-your-result":"Get your result","watch-as-our-ai-powered-visualization-tool-displays-the-generated-result":"Watch as our AI-powered visualization tool displays the generated result.","get-started":"Get started","funding-notice":"Funding Notice","project-partners":"Project Partners",flood:ft,"flux-api-wind":"Flux API Wind","flux-api-solar":"Flux API Solar","flux-api-free":"Flux API Free","optional-information":"Optional Information","own-home":"Own home","rented-flat":"Rented flat","own-flat":"Own flat","custom-prompt":"Custom prompt",cookies:yt,"living-conditions":"Living Conditions","enter-the-flux-prompt":"Enter the flux prompt","object-to-detect":"Object to detect","enter-the-object-to-detect":"Enter the object to detect","research-project-website":"Research Project Website","upload-an-image-and-see-the-energy-transition-in-your-environment":"Upload an image and see the energy transition in your environment.","wind-version-2":"Wind Version 2","solar-version-2":"Solar Version 2"},bt="Titel",vt="Beschreibung",xt="Straße",_t="Stadt",Ct="Breitengrad",St="Längengrad",jt="Abbrechen",kt="Speichern",It="Ablehnen",zt="Akzeptieren",$t="Vorschau",Et="Symbol",Nt="Auswählen",Bt="Generiert",At="Laden",Lt="Position #",Mt="Herunterladen",Dt="Partnerschaften",Pt="Bilder",Ut="Abmelden",Ft="Artikel",qt="Generieren...",Wt="Generieren",Vt="Abgeschlossen",Gt="Visualisierung",Tt={solar:"Solar",wind:"Wind",vegetation:"Vegetation",dystopia:"Dystopie",utopia:"Utopie"},Rt="Startseite",Ot="Überschwemmung",Ht="Cookies",Zt={"try-it-yourself":"Probieren Sie es selbst aus!","visualizing-the-future-of-energy":"Energiewende - Visualisiert","discover-energy-transition-measures-around-germany-with-ai":"Entdecken Sie Energiewendemaßnahmen in ganz Deutschland mit KI","title-is-required":"Titel ist erforderlich","message-is-required":"Nachricht ist erforderlich","image-is-required":"Bild ist erforderlich","street-is-required":"Straße ist erforderlich","post-code-is-required":"Postleitzahl ist erforderlich","city-is-required":"Stadt ist erforderlich","edit-article":"Artikel bearbeiten","add-new-article":"Neuen Artikel hinzufügen",title:bt,"enter-title":"Titel eingeben",description:vt,"enter-description":"Beschreibung eingeben","add-to-map":"Zur Karte hinzufügen?",street:xt,"enter-street":"Straße eingeben","post-code":"Postleitzahl","enter-post-code":"Postleitzahl eingeben",city:_t,"enter-city":"Stadt eingeben",latitude:Ct,longitude:St,"delete-article":"Artikel löschen",cancel:jt,save:kt,"add-article":"Artikel hinzufügen","are-you-sure-you-want-to-remove-this-article":"Sind Sie sicher, dass Sie diesen Artikel entfernen möchten?","upload-an-image-and-watch-our-ai-powered-visualization-tool-displays-the-generated-result":"Laden Sie ein Bild hoch und sehen Sie, wie unser KI-gestütztes Visualisierungstool das generierte Ergebnis anzeigt.","upload-an-image":"Ein Bild hochladen","we-use-cookies-to-make-your-experience-better":"Wir verwenden Cookies, um Ihr Erlebnis zu verbessern",decline:It,accept:zt,preview:$t,"upload-image":"Bild hochladen",icon:Et,"drag-image-here-or":"Bild hierher ziehen oder","image-is-too-small":"Bild ist zu klein","upload-new-image":"Neues Bild hochladen",select:Nt,"selected-icon":"Ausgewähltes Symbol","read-article":"Artikel lesen","something-went-wrong-please-try-again":"Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.","go-back-to-generate-image":"Zurück zur Bildgenerierung",generated:Bt,loading:At,position:Lt,"in-queue":"in der Warteschlange","your-request-will-be-processed-soon-please-dont-close-this-tab":"Ihre Anfrage wird bald bearbeitet — Bitte schließen Sie diesen Tab nicht.",download:Mt,"upload-another-image":"Ein anderes Bild hochladen","how-it-works":"Wie es funktioniert","energy-transitions-visualized-with-ai":"Energiewende visualisiert mit KI","our-platform-offers-a-unique-ai-powered-experience-that-brings-the-countrys-energy-transition-to-life":"Unsere Plattform bietet ein einzigartiges, KI-gestütztes Erlebnis, das die Energiewende des Landes zum Leben erweckt.","the-enervi-project-is-funded-by-the-federal-ministry-for-economic-affairs-and-climate-protection-bmwk-and-implemented-by-borderstep-institute-for-innovation-and-sustainability-unetiq-gmbh-goethe-university-frankfurt-am-main-and-the-association-of-german-scientists-vdw":"Das EnerVi-Projekt wird vom Bundesministerium für Wirtschaft und Klimaschutz (BMWK) gefördert und vom Borderstep Institut für Innovation und Nachhaltigkeit, der Unetiq GmbH, der Goethe-Universität Frankfurt am Main und der Vereinigung Deutscher Wissenschaftler (VDW) umgesetzt.",partnerships:Dt,"edit-pin":"Pin bearbeiten","add-pin":"Pin hinzufügen","are-you-sure-you-want-to-remove-pin":"Sind Sie sicher, dass Sie den Pin entfernen möchten?","remove-pin":"Pin entfernen","enter-latitude":"Breitengrad eingeben","enter-longitude":"Längengrad eingeben","please-upload-an-image-file":"Bitte laden Sie eine Bilddatei hoch.",images:Pt,"add-image":"Bild hinzufügen","admin-login":"Admin-Login",logout:Ut,"manage-pins":"Pins verwalten","read-more":"Mehr lesen","upload-an-image-and-watch-our-ai-powered-visualization-tool-display-the-generated-result":"Laden Sie ein Bild hoch und sehen Sie, wie unser KI-gestütztes Visualisierungstool das generierte Ergebnis anzeigt.","visualizing-with-enervi-scenarios":"Visualisierung mit EnerVi-Szenarien","select-a-scenario-and-see-the-transformation":"Wählen Sie ein Szenario und sehen Sie die Transformation","article-not-found":"Artikel nicht gefunden","no-articles-found":"Keine Artikel gefunden",articles:Ft,"learn-everything-about-energy-transitions":"Erfahren Sie alles über die Energiewende","pin-not-found":"Pin nicht gefunden","upload-an-image-of-choice-to-start-ai-generation":"Laden Sie ein Bild Ihrer Wahl hoch, um die KI-Generierung zu starten","select-a-scenario":"Wählen Sie ein Szenario","choose-and-apply-a-scenario-of-choice":"Wählen und wenden Sie ein Szenario Ihrer Wahl an","ich-bin-mit-den-nutzungsbedingungen-von-enervi-einverstanden":"Ich bin mit den Nutzungsbedingungen von EnerVi einverstanden.",generating:qt,generate:Wt,"an-error-occurred-during-generation":"Bei der Generierung ist ein Fehler aufgetreten",completed:Vt,"dont-worry-you-can-read-while-your-image-is-being-generated":"Keine Sorge — Sie können lesen, während Ihr Bild generiert wird","404-not-found":"404 Nicht gefunden","404-error":"404-Fehler","page-not-found":"Seite nicht gefunden","sorry-the-page-you-are-looking-for-doesnt-exist":"Entschuldigung, die gesuchte Seite existiert nicht.","here-are-some-helpful-links":"Hier sind einige hilfreiche Links:","go-back":"Zurück","go-home":"Zur Startseite","pins-not-found":"Pins nicht gefunden","add-new-pin":"Neuen Pin hinzufügen",visualization:Gt,scenarios:Tt,home:Rt,"upload-your-image":"Laden Sie Ihr Bild hoch","start-by-uploading-an-image-this-could-be-a-location-facility-or-any-relevant-subject":"Beginnen Sie mit dem Hochladen eines Bildes. Dies könnte ein Standort, eine Einrichtung oder ein anderes relevantes Thema sein.","select-scenario":"Szenario auswählen","choose-from-a-variety-of-scenarios-such-as-wind-solar-flood-drought":"Wählen Sie aus einer Vielzahl von Szenarien wie Wind, Solar, Überschwemmung, Dürre.","get-your-result":"Holen Sie sich Ihr Ergebnis","watch-as-our-ai-powered-visualization-tool-displays-the-generated-result":"Sehen Sie, wie unser KI-unterstütztes Visualisierungstool das generierte Ergebnis anzeigt.","get-started":"Loslegen","funding-notice":"Förderhinweis","project-partners":"Projekt-Partner",flood:Ot,"flux-api-wind":"Flux API Wind","flux-api-solar":"Flux API Solar","flux-api-free":"Flux API Free","optional-information":"Optionale Angaben","own-home":"Eigenheim","rented-flat":"Mietwohnung","own-flat":"Eigentumswohnung","custom-prompt":"Benutzerdefiniertes Prompt",cookies:Ht,"living-conditions":"Lebensbedingungen","enter-the-flux-prompt":"Flux Prompt eingeben","object-to-detect":"Objekt zu erkennen","enter-the-object-to-detect":"Objekt zu erkennen eingeben","research-project-website":"Webseite Forschungsprojekt","upload-an-image-and-see-the-energy-transition-in-your-environment":"Laden Sie ein Bild hoch und sehen Sie den Energiewandel in Ihrer Umgebung.","wind-version-2":"Wind Version 2","solar-version-2":"Solar Version 2"},Kt=localStorage.getItem("language")??"de";Q.use(T).init({resources:{en:{translation:wt},de:{translation:Zt}},lng:Kt,fallbackLng:"de",interpolation:{escapeValue:!1}});V.createRoot(document.getElementById("gen-img-status")).render(e.jsx(q.StrictMode,{children:e.jsx(Z,{client:Vn,children:e.jsx(Wn,{})})}));
