"use strict";(self.webpackChunkpatch_docs=self.webpackChunkpatch_docs||[]).push([[510],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return h}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=c(a),h=i,d=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return a?n.createElement(d,r(r({ref:t},m),{},{components:a})):n.createElement(d,r({ref:t},m))}));function h(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},1166:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},assets:function(){return m},toc:function(){return u},default:function(){return h}});var n=a(7462),i=a(3366),o=(a(7294),a(3905)),r=["components"],s={slug:"Architecture and Idea",title:"The Architecture and Idea",authors:["sayan","sayan1"],tags:["patch management","MVP","idea","Project Overviiew","Overview"]},l="The Architecture and Idea",c={permalink:"/PatchDocs/blog/Architecture and Idea",editUrl:"https://sayanmondal2098.github.io/PatchDocs/blog/blog/2021-12-4-MVPIdea.md",source:"@site/blog/2021-12-4-MVPIdea.md",title:"The Architecture and Idea",description:"The MVP Design",date:"2021-12-04T00:00:00.000Z",formattedDate:"December 4, 2021",tags:[{label:"patch management",permalink:"/PatchDocs/blog/tags/patch-management"},{label:"MVP",permalink:"/PatchDocs/blog/tags/mvp"},{label:"idea",permalink:"/PatchDocs/blog/tags/idea"},{label:"Project Overviiew",permalink:"/PatchDocs/blog/tags/project-overviiew"},{label:"Overview",permalink:"/PatchDocs/blog/tags/overview"}],readingTime:7.94,truncated:!0,authors:[{name:"Sayan Mondal",title:"Project Manager of Patch Management",url:"https://github.com/sayanmondal2098",imageURL:"https://github.com/sayanmondal2098.png",key:"sayan"},{name:"Sayan Mondal",title:"Documentation Admin of Patch Management",url:"https://github.com/sayanmondal2098",imageURL:"https://github.com/sayanmondal2098.png",key:"sayan1"}],nextItem:{title:"Welcome",permalink:"/PatchDocs/blog/welcome"}},m={authorsImageUrls:[void 0,void 0]},u=[{value:"The MVP Design",id:"the-mvp-design",children:[],level:2},{value:"Why do we need patch management?",id:"why-do-we-need-patch-management",children:[],level:2},{value:"How your organization benefits from an efficient patch management program",id:"how-your-organization-benefits-from-an-efficient-patch-management-program",children:[],level:2},{value:"The patch management process",id:"the-patch-management-process",children:[],level:2},{value:"Patch management best practices",id:"patch-management-best-practices",children:[],level:2},{value:"Embedding patch management into your vulnerability management efforts",id:"embedding-patch-management-into-your-vulnerability-management-efforts",children:[],level:2},{value:"The Execution",id:"the-execution",children:[{value:"Server Model",id:"server-model",children:[],level:3},{value:"Client Model",id:"client-model",children:[{value:"TechStack",id:"techstack",children:[],level:4}],level:3}],level:2}],p={toc:u};function h(e){var t=e.components,a=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"the-mvp-design"},"The MVP Design"),(0,o.kt)("p",null,"The MVP should contain basic feature of the full project.Patch management is the process of distributing and applying updates to software. These patches are often necessary to correct errors (also  referred to as \u201cvulnerabilities\u201d or \u201cbugs\u201d) in the software."),(0,o.kt)("p",null,"Common areas that will need patches include operating systems, applications, and embedded systems (like network equipment). When a vulnerability is found after the release of a piece of software, a patch can be used to fix it. Doing so helps ensure that assets in your environment are not susceptible to exploitation."),(0,o.kt)("h2",{id:"why-do-we-need-patch-management"},"Why do we need patch management?"),(0,o.kt)("p",null,"Patch management is important for the following key reasons:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Security:")," Patch management fixes vulnerabilities on your software and applications that are susceptible to  cyber-attacks, helping your organization reduce its security risk.  ")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"System uptime:"),"  Patch management ensures your software and applications are kept up-to-date and run smoothly, supporting system uptime.  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Compliance:")," With the continued rise in cyber-attacks, organizations are often required by regulatory bodies to maintain a certain level of compliance. Patch management is a necessary piece of adhering to  compliance standards."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Feature improvements:"),"  Patch management can go beyond software bug fixes to also include feature/functionality updates. Patches can be critical to ensuring that you have the latest and greatest that a product has to offer.")),(0,o.kt)("h2",{id:"how-your-organization-benefits-from-an-efficient-patch-management-program"},"How your organization benefits from an efficient patch management program"),(0,o.kt)("p",null,"Your company can benefit from patch management in a variety of ways:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"A more secure environment:"),"  When you\u2019re regularly patching vulnerabilities, you\u2019re helping to manage and reduce the risk that exists in your environment. This helps protect your organization from potential security breaches.  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Happy customers:"),"  If your organization sells a product or service that requires customers to use your technology, you know how important it is that the technology actually works. Patch management is the process of fixing software bugs, which helps keep your systems up and running.  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"No unnecessary fines:")," If your organization is not patching and, therefore, not meeting compliance standards, you could be hit with some monetary fines from regulatory bodies. Successful patch management ensures that you are in compliance.  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Continued product innovation:")," You can implement patches to update your technology with improved features and functionality. This can provide your organization with a way to deploy your latest innovations to your software at scale.")),(0,o.kt)("h2",{id:"the-patch-management-process"},"The patch management process"),(0,o.kt)("p",null,"It would be a poor strategy to just install new patches the second they become available for all assets in your organization's inventory without considering the impact. Instead, a more strategic approach should be taken. Patch management should be implemented with a detailed, organizational process that is both cost-effective and security-focused."),(0,o.kt)("p",null,"Key steps to the patch management process include:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Develop an up-to-date inventory of all your production systems:"),"  Whether this be on a quarterly or monthly basis, this is the only way to truly monitor what assets exist in your ecosystem. Through diligent asset management, you\u2019ll have an informed view of operating systems, version types, and IP addresses that exist, along with their geographic locations and organizational \u201cowners.\u201d As a general rule, the more frequently you maintain your asset inventory, the more informed you're going to be.  "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Devise a plan for standardizing systems and operating systems to the same version type:")," Although difficult to execute on, standardizing your asset inventory makes patching faster and more efficient. You\u2019ll want to standardize your assets down to a manageable number so that you can accelerate your remediation process as new patches are released. This will help save both you and technical teams time spent remediating.  "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Make a list of all security controls that are in place within your organization:")," Keep track of your firewalls, antivirus, and  vulnerability management tool. You\u2019ll want to know where these are sitting, what they\u2019re protecting, and which assets are associated with them.  "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Compare reported vulnerabilities against your inventory:"),"  Using your vulnerability management tool  to assess which vulnerabilities exist for which assets in your ecosystem is going to help you understand your security risk as an organization.  "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Classify the risk:"),"  Through vulnerability management tools you can easily manage which assets you consider to be critical to your organization and, therefore,  prioritize what needs to be remediated accordingly.  "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"TEST!")," Apply the patches to a representative sample of assets in your lab environment. Stress test the machines to ensure that the patches will not cause issues in your production environment.  "),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Apply the patches:"),"  Once you\u2019ve prioritized what needs to be remediated first, start patching to actually reduce the risk in your environment. More advanced vulnerability management tools also offer the ability to  automate the time-consuming parts of the patching process.\nConsider rolling the patches out to batches of assets; although you already tested in your lab environment (you did do that right!?) there may still be unexpected results in production. Dip a few toes in before jumping in all the way to make there won\u2019t be any widespread issues.",(0,o.kt)("br",{parentName:"li"}),""),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Track your progress:"),"  Reassess your assets to ensure patching was successful.")),(0,o.kt)("h2",{id:"patch-management-best-practices"},"Patch management best practices"),(0,o.kt)("p",null,"Some best practices to keep in mind when implementing patch management include:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Set clear expectations and hold teams accountable:")," Leveraging organizational agreements, such as service-level agreements, can keep teams in check, and ensure that the work of reducing risk is actually being done.  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Work collaboratively with technical teams to ensure a common language:"),"  Security teams often refer to software errors as a \u201crisk,\u201d whereas IT/DevOps teams may use the term \u201cpatch.\u201d Making sure that everyone is on the same page and recognizes the importance of patching is key to a successful patch management process.  "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Establish a disaster recovery process:")," In case your patch management process does fail and causes issues, it\u2019s always a good idea to have a backup plan.")),(0,o.kt)("h2",{id:"embedding-patch-management-into-your-vulnerability-management-efforts"},"Embedding patch management into your vulnerability management efforts"),(0,o.kt)("p",null,"Patch management is a vital part of every  vulnerability management program. However, having a consistent approach to patch management doesn\u2019t always mean slapping a fix on everything in sight. When a vulnerability is identified, you essentially have three options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install a patch for the vulnerability, if available, to fix the issue.  "),(0,o.kt)("li",{parentName:"ol"},"Implement compensating controls so the vulnerability is mitigated without being fully patched. This route is common when a proper fix or patch is not yet available, and can be used to buy time before eventual remediation.  "),(0,o.kt)("li",{parentName:"ol"},"Accept the risk posed by that vulnerability and do nothing.  ")),(0,o.kt)("p",null,"It\u2019s up to organizations to decide which option is best for them in specific situations, though patching is the ideal treatment to ultimately strive for."),(0,o.kt)("p",null,"The terms \u201cpatch management\u201d and \u201cvulnerability management\u201d are sometimes used interchangeably, but it is important to understand the difference. Though both strategies aim to mitigate risk, patch management (the process of managing software updates) is limited in scope. To gain a deeper understanding of your environment and make informed, impactful decisions, you need to move to a more holistic approach through vulnerability management.  Vulnerability management  is a continuous process of identifying, prioritizing, remediating, and reporting on security vulnerabilities in systems and the software that runs on them."),(0,o.kt)("p",null,"Patch management is a critical component of vulnerability management, but it\u2019s just one piece of the puzzle. To successfully  embed patch management into your vulnerability management program the following steps should be implemented:  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Establish asset management"),". Your ability to reduce risk is only as good as the visibility you have into your environment. An asset management solution helps you gain a full understanding of the assets you have and the vulnerabilities associated with each asset. With that knowledge, you are equipped to prioritize vulnerabilities, remediate issues, and communicate effectively with stakeholders."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Prioritize vulnerabilities"),". With limited time and resources and an ever-changing threat landscape, it\u2019s unrealistic to think that you can fix every vulnerability as soon as it appears. Consequently, prioritization is one of the most critical aspects of vulnerability management."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Remediate vulnerabilities"),"  ",(0,o.kt)("strong",{parentName:"li"},"to reduce risk"),". Identifying and prioritizing vulnerabilities is important, but you\u2019re not actually reducing risk unless you\u2019re remediating the issues."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Measure the success of your vulnerability management program"),". No matter how many fancy features a vulnerability management solution has, it\u2019s only worth the investment if it meets your organization\u2019s unique needs and adds value for you and your team. To determine if you\u2019re achieving a good ROI\u2014and justify the purchase to senior leadership\u2014you\u2019ll have to determine how to measure success."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Develop partnerships and support"),". When something goes wrong, you want to know you have a team of people you can rely on to help troubleshoot.")),(0,o.kt)("h2",{id:"the-execution"},"The Execution"),(0,o.kt)("h3",{id:"server-model"},"Server Model"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Implementation of the Communication Tunnel "),(0,o.kt)("li",{parentName:"ul"},"Able to recive the clients sended request and send cmd to client "),(0,o.kt)("li",{parentName:"ul"},"Need to implement the MQTT "),(0,o.kt)("li",{parentName:"ul"},"Web View/Interface , In the view , should able to monitor all of the clients "),(0,o.kt)("li",{parentName:"ul"},"Send cmd from webview"),(0,o.kt)("li",{parentName:"ul"},"Maintain and Create the SSH "),(0,o.kt)("li",{parentName:"ul"},"File Server"),(0,o.kt)("li",{parentName:"ul"},"Get Client Jobs and all "),(0,o.kt)("li",{parentName:"ul"},"PGP Connect etc.")),(0,o.kt)("h3",{id:"client-model"},"Client Model"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Connect with a particular server "),(0,o.kt)("li",{parentName:"ul"},"Recive cmd from the server "),(0,o.kt)("li",{parentName:"ul"},"Send device info and others in the tunnel "),(0,o.kt)("li",{parentName:"ul"},"Device Admin "),(0,o.kt)("li",{parentName:"ul"},"Shell access"),(0,o.kt)("li",{parentName:"ul"},"Remote Management"),(0,o.kt)("li",{parentName:"ul"},"Contnious Health Check etc.")),(0,o.kt)("h4",{id:"techstack"},"TechStack"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The Node Server ")),(0,o.kt)("p",null,"More Features are added in trello,\nTo be added in Server /Client please fill the form : ",(0,o.kt)("a",{parentName:"p",href:"https://forms.gle/MiiH2t1eQ7F6FdmaA"},"Google Form Link")),(0,o.kt)("p",null,"To Check our repository visit -\nClient Repo - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sayanmondal2098/PatchClient"},"Click Here"),"\nand\nServer Repo - ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/sayanmondal2098/PatchServer"},"Click Here")))}h.isMDXComponent=!0}}]);