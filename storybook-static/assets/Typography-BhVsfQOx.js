import{j as l,c as t,p as s}from"./styled-components.browser.esm-Os6HxUGj.js";const o=({variant:e="typography4",weight:a="regular",as:r="div",color:p,...i})=>l.jsx(y,{as:r,$variant:e,$weight:a,$color:p,...i}),g={typography5:t`
    font-size: 20px;
    line-height: 140%;
  `,typography4:t`
    font-size: 16px;
    line-height: 140%;
  `,typography3:t`
    font-size: 15px;
    line-height: 140%;
  `,typography2:t`
    font-size: 14px;
    line-height: 140%;
  `,typography1:t`
    font-size: 13px;
    line-height: 140%;
  `},h={regular:"400",semibold:"600",bold:"700"},y=s.div`
  ${({$variant:e})=>g[e||"typography5"]}
  font-weight: ${({$weight:e})=>h[e||"regular"]};
  color: ${({$color:e})=>e||"var(--color-foreground)"};
`,u=o;o.__docgenInfo={description:"",methods:[],displayName:"Typography",props:{variant:{defaultValue:{value:"'typography4'",computed:!1},required:!1},weight:{defaultValue:{value:"'regular'",computed:!1},required:!1},as:{defaultValue:{value:"'div'",computed:!1},required:!1}}};export{u as T};
