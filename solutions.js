
function rideZsoltime(g,c) {let f=(i)=>i.split('').map(a=>a.charCodeAt(0)-64).reduce((a,b)=>a*b)%47;return f(g)===f(c)?'GO':'STAY'}

function rideBenGitter(c,g){x=1,y=1;for(i=0;i<6;i++){x*=(c.charCodeAt(i)-64)||1;y*=(g.charCodeAt(i)-64)||1;}return(x%47)==(y%47)?"GO":"STAY";}

function rideNewBorn(r,n){var e=r=>{let n=1;for(i=0;i<r.length;i++)n*=r.charCodeAt(i)-64;return n};return e(r)%47==e(n)%47?"GO":"STAY"}

let rideJacksonBates=(c,g)=>{let x=y=>{y=y.split('');y.forEach((e,i,a)=>a[i]=e.charCodeAt()-64);return y.reduce((p,z)=>{return p*z})%47};return x(c)==x(g)?'GO':'STAY'}

//let rideP1xt = (g,c) => (f=x=>[...x].reduce((a,b)=>a*(b.charCodeAt()-64),1)%47,f(g)==f(c)?"GO":"STAY");

function rideJenovs(c,g){function a(b){return b.split('').reduce((a,b)=>a*(b.charCodeAt()-64),1)%47}return a(c)==a(g)?'GO':'STAY'}

const rideOmegga=(c,u)=> (f=x=>x.split('').reduce((a,b)=>a*(b.charCodeAt()-64),1)%47)(c)==f(u)?'GO':'STAY'

const rideVelenir=(g,c)=>(f=s=>[...s].reduce((p,e)=>p*(e.charCodeAt()-64),1)%47,f(g)==f(c)?"GO":"STAY")

function ridekevcomedia(g,c){return x=a=>[...a].reduce((a,b)=>a*(b.charCodeAt()-64),1)%47,x(g)==x(c)?'GO':'STAY'}

function ridejoelpeyton(c,g){var g=g.split('');c=c.split('');function e(a){r=a.map(function(v){return v.charCodeAt()-64});r=r.reduce(function(p,c){return p*c});return r%47;}return e(g)==e(c)?"GO":"STAY"}

function ridealichristensen(m,n) {var l=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r", "s","t","u","v","w","x","y","z"],num1=[],num2=[],tot1=1,tot2=1,res1,res2;for(var i=0;i<m.length;i++) {for(var a=0;a<l.length;a++) {if(m[i].toLowerCase()==l[a]) {num1.push(a+1);}}}for(var i=0;i<n.length;i++){for(var a=0;a<l.length;a++){if(n[i].toLowerCase()==l[a]){num2.push(a+1);}}}for(var i=0;i<num1.length;i++){tot1*=num1[i];}for (var i=0; i<num2.length; i++){tot2*=num2[i];}res1=tot1%47;res2=tot2%47;if(res1===res2){return "GO";}else{return "STAY";}}

function rideZackWard(g, c) {var f=s=>s.split('').reduce((a,b)=>a*(b.charCodeAt(0)-64),1)%47;return f(g)==f(c)?'GO':'STAY'}

function rideNacla01(a, b){aP=bP=1;arr1=arr2=[];i=j=0;while(i<a.length){aP*=arr1.push(a.charCodeAt(i)-64);i++}while(j<b.length){bP*=arr2.push(b.charCodeAt(j)-64);j++}if(aP%47===bP%47){return"GO"}else{return"STAY"}}

function rideRayBB(f,g){function m(s){return s?(s.charCodeAt(0)-64)*m(s.slice(1)):1}return (m(f)-m(g))%47?"STAY":"GO"}

function rideappleJax(c, g){function s(x){return x.split('').map(y=>y.charCodeAt()-64).reduce((a,b)=>a*b)%47}return s(c)==s(g)?'GO':'STAY'}

//note, I changed the name of this one from rideX to rideNicksIdeaEngine to keep with the naming convention
function rideNicksIdeaEngine(c, g){var a=1,b=1;for(i=0;i<6;i++){a*=c.charCodeAt(i)-64;b*=g.charCodeAt(i)-64}a%=47;b%=47;if(a==b)return "GO";return "STAY"}

var rideCirych = (...g) =>(g.map(s=>[...s].reduce((a,b)=>a*(b.charCodeAt(0)-64),1)%47).every((r,_,a)=>a[0]==r)?'GO':'STAY')

function rideBhavik(g,c) {
t=x=>x.split('').reduce((a,b)=>a*(b.charCodeAt()-64),1)%47;
return t(g) == t(c) ? 'GO' : 'STAY';
}


module.exports =  { rideZsoltime,
    rideBenGitter,
    rideNewBorn,
    rideJacksonBates,
//    rideP1xt,
    rideJenovs,
    rideOmegga,
    rideVelenir,
    ridekevcomedia,
    ridejoelpeyton,
    ridealichristensen,
    rideZackWard,
    rideNacla01,
    rideRayBB,
    rideappleJax,
    rideNicksIdeaEngine,
    rideCirych,
    rideBhavik
};