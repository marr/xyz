import{a as i,E as o,k as c,N as h,O as a,ai as u,y as m,ah as p,s as d,q as g}from"./BFq535HO.js";const l="img",f=i({__name:"ProseImg",props:{src:{type:String,default:""},alt:{type:String,default:""},width:{type:[String,Number],default:void 0},height:{type:[String,Number],default:void 0}},setup(n){const t=n,r=o(()=>{var s;if((s=t.src)!=null&&s.startsWith("/")&&!t.src.startsWith("//")){const e=m(p(d().app.baseURL));if(e!=="/"&&!t.src.startsWith(e))return g(e,t.src)}return t.src});return(s,e)=>(c(),h(u(a(l)),{src:a(r),alt:t.alt,width:t.width,height:t.height},null,8,["src","alt","width","height"]))}}),S=Object.assign(f,{__name:"ProseImg"});export{S as default};
