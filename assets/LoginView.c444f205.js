import{_ as c,o as u,c as p,a as s,g as d,v as l,j as m}from"./index.d23e0d3e.js";const h={data(){return{user:{}}},methods:{signIn(){const n="https://vue3-course-api.hexschool.io/v2/admin/signin";this.$http.post(n,this.user).then(e=>{const{token:r,expired:i}=e.data;document.cookie=`hexToken=${r};expires=${new Date(i)};`,this.$router.push("/admin/products")}).catch(e=>{alert(e.response.data.message)})}}},_={class:"container mt-5"},f={class:"col-md-6"},b=s("h1",{class:"h3 mb-3 font-weight-normal"},"\u8ACB\u5148\u767B\u5165",-1),w={class:"mb-2"},v=s("label",{for:"inputEmail",class:"sr-only"},"Email address",-1),g={class:"mb-2"},x=s("label",{for:"inputPassword",class:"sr-only"},"Password",-1),y=s("div",{class:"text-end mt-4"},[s("button",{class:"btn btn-lg btn-primary btn-block",type:"submit"}," \u767B\u5165 ")],-1);function k(n,e,r,i,o,a){return u(),p("div",_,[s("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=m((...t)=>a.signIn&&a.signIn(...t),["prevent"]))},[s("div",f,[b,s("div",w,[v,d(s("input",{type:"email",id:"inputEmail",class:"form-control",placeholder:"Email address","onUpdate:modelValue":e[0]||(e[0]=t=>o.user.username=t),required:"",autofocus:""},null,512),[[l,o.user.username]])]),s("div",g,[x,d(s("input",{type:"password",id:"inputPassword",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>o.user.password=t),placeholder:"Password",required:""},null,512),[[l,o.user.password]])]),y])],32)])}const P=c(h,[["render",k]]);export{P as default};
