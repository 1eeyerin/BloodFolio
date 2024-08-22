import{j as a,p as l}from"./styled-components.browser.esm-Os6HxUGj.js";import{T as n}from"./Typography-BhVsfQOx.js";import{r as m}from"./index-CDs2tPxN.js";import"./tslib.es6-CRos2fHm.js";const p=({children:e,...o})=>{const s=m.Children.count(e);return a.jsx(b,{$tabCount:s,...o,children:e})},r=({children:e,active:o,as:s="div",...u})=>a.jsx(T,{as:s,$active:o,...u,children:e}),b=l.nav`
  display: grid;
  grid-template-columns: repeat(${e=>e.$tabCount}, 1fr);
  border-bottom: 1px solid #555555;
`,T=l.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  padding: 0 24px;
  grid-column: span 1;
  border-bottom: 1px solid transparent;
  border-bottom-color: ${e=>e.$active?"#ffffff":"transparent"};
`;r.__docgenInfo={description:"",methods:[],displayName:"Tab",props:{as:{defaultValue:{value:"'div'",computed:!1},required:!1}}};p.__docgenInfo={description:"",methods:[],displayName:"Tabs"};const x={title:"Components/Tabs",component:p,subcomponents:{Tab:r},parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:!1,description:"Tab 컴포넌트만 들어갈 수 있습니다."}}},t=e=>a.jsxs(p,{...e,children:[a.jsx(r,{active:!0,children:a.jsx(n,{children:"프로필"})}),a.jsx(r,{children:a.jsx(n,{children:"작성글"})}),a.jsx(r,{children:a.jsx(n,{children:"댓글"})})]});t.args={};t.__docgenInfo={description:"",methods:[],displayName:"Default"};var i,d,c;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`args => <Tabs {...args}>
    <Tab active>
      <Typography>프로필</Typography>
    </Tab>
    <Tab>
      <Typography>작성글</Typography>
    </Tab>
    <Tab>
      <Typography>댓글</Typography>
    </Tab>
  </Tabs>`,...(c=(d=t.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};const j=["Default"];export{t as Default,j as __namedExportsOrder,x as default};
