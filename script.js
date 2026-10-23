/* VIVA Driving School — configuration + behaviour (single file) */
/* ==========================================================
   VIVA DRIVING SCHOOL — central configuration
   Edit this file to change content. Keep commas and quotes.
   ========================================================== */
window.VIVA_CONFIG = {
  business: {
    name: "VIVA Driving School",
    phoneDisplay: "07908 969 686",
    phoneUrl: "tel:+447908969686",
    whatsappNumber: "447908969686",
    whatsappUrl: "https://wa.me/447908969686",
    instagramUrl: "https://www.instagram.com/vivadrivingschoolgb/",
    car: { model: "Red Vauxhall Corsa", registration: "GN14 VVA" },
    logo: "viva-logo.jpg"
  },

  colors: { lime: "#b6ff00", limeSoft: "#eaffb8", green: "#2d6a3e", greenDark: "#0f3d22", sky: "#2f9bff" },

  // status: "confirmed" or "to-confirm". "to-confirm" shows an "Ask if available" tag on the site.
  services: [
    { title: "Beginner driving lessons", status: "confirmed", icon: "wheel",
      text: "Start from the very beginning with a patient, one-to-one instructor." },
    { title: "Manual driving lessons", status: "to-confirm", icon: "gear",
      text: "Learn to drive a manual car." },
    { title: "Refresher lessons", status: "confirmed", icon: "refresh",
      text: "Already hold a licence? Rebuild your confidence behind the wheel." },
    { title: "Intensive courses", status: "to-confirm", icon: "bolt",
      text: "Concentrated lessons over a short period." },
    { title: "Mock driving tests", status: "confirmed", icon: "clipboard",
      text: "Practise under test-style conditions before the real thing." },
    { title: "Practical test preparation", status: "confirmed", icon: "flag",
      text: "Focused practice for the skills the practical test looks at." }
  ],

  // price: null shows "Contact us for prices". Otherwise write e.g. "£40" and optionally detail: "per hour".
  prices: [
    { name: "Single lesson", price: null, detail: "", featured: false },
    { name: "Lesson block", price: null, detail: "", featured: true },
    { name: "Intensive course", price: null, detail: "", featured: false }
  ],
  pricesNote: "Prices are being confirmed. Call or message us for a quote.",

  areas: ["Barnet","Hendon","Mill Hill","Colindale","Edgware","Stanmore","Hampstead","Wembley","Neasden",
    "Harlesden","Willesden","Kilburn","Bushey","Pinner","Golders Green","Finchley","Muswell Hill",
    "Cricklewood","Potters Bar","Borehamwood","Wood Green","Tottenham","Watford","Chingford","Southall"],

  // Leave empty to hide the whole section and its menu link.
  // Add verified centres like: { name: "Centre name", url: "https://official-link" }
  testCentres: [],

  // name/role/bio: leave "" if not confirmed. Add more objects to add more instructors.
  instructors: [
    { name: "", role: "Your VIVA instructor", photo: "instructor.jpg",
      alt: "VIVA Driving School instructor", bio: "" }
  ],

  // Add a photo: put the JPG in the same folder as index.html and add a line here.
  students: [
    { src: "student-1.jpg", alt: "Student holding a practical driving test pass certificate in front of a red VIVA car" },
    { src: "student-2.jpg", alt: "Student holding a practical driving test pass certificate outside a driving test centre" },
    { src: "student-3.jpg", alt: "Smiling student giving a thumbs up with a pass certificate in front of a red VIVA car" },
    { src: "student-4.jpg", alt: "Smiling student holding a pass certificate next to a red VIVA car" }
  ],

  faqs: [
    { q: "How do I book a lesson?", a: "Call 07908 969 686, message us on WhatsApp, or use the enquiry form on this page." },
    { q: "Does the enquiry form book my lesson?", a: "No. The form prepares a WhatsApp message for you. You must press Send in WhatsApp, and a booking is only confirmed once we reply." },
    { q: "Which areas do you cover?", a: "See the Areas We Cover section for the full list of North and North-West London areas." },
    { q: "What car will I learn in?", a: "A red Vauxhall Corsa, registration GN14 VVA." },
    { q: "How much do lessons cost?", a: "Contact us for prices. Call or message us and we will give you a quote." }
  ]
};

(function(){
"use strict";
var C=window.VIVA_CONFIG,B=C.business,$=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
function h(tag,attrs,kids){var e=document.createElement(tag);for(var k in(attrs||{}))e.setAttribute(k,attrs[k]);(kids||[]).forEach(function(c){e.appendChild(typeof c==="string"?document.createTextNode(c):c)});return e}
var reduce=window.matchMedia("(prefers-reduced-motion: reduce)");
/* brand colours from config */
var r=document.documentElement.style;r.setProperty("--lime",C.colors.lime);r.setProperty("--lime-soft",C.colors.limeSoft);r.setProperty("--green",C.colors.green);r.setProperty("--green-dark",C.colors.greenDark);r.setProperty("--sky",C.colors.sky);
/* contact bits */
$$("[data-call]").forEach(function(a){a.href=B.phoneUrl});$$("[data-wa]").forEach(function(a){a.href=B.whatsappUrl});$$("[data-ig]").forEach(function(a){a.href=B.instagramUrl});
$$("[data-phone]").forEach(function(s){s.textContent=B.phoneDisplay});$$("[data-logo]").forEach(function(i){i.style.backgroundImage="url('"+B.logo+"')"});
$("[data-reg]").textContent=B.car.registration;$("#yr").textContent=new Date().getFullYear();
document.body.classList.add("hero-in");

/* icons */
var ICONS={wheel:'<circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2.4"/><circle cx="12" cy="12" r="2.5" fill="currentColor"/><path d="M3.5 10.500h6M14.5 10.500h6M12 14.500V21" stroke="currentColor" stroke-width="2.4" fill="none"/>',
gear:'<circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" stroke="currentColor" stroke-width="2.4"/>',
refresh:'<path d="M20 12a8 8 0 1 1-2.5-5.800M20 4v5h-5" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>',
bolt:'<path d="M13 2 4 14h7l-1 8 9-12h-7z" fill="currentColor"/>',
clipboard:'<rect x="5" y="4" width="14" height="17" rx="2" fill="none" stroke="currentColor" stroke-width="2.4"/><path d="M9 3h6v3H9zM8.5 12l2.5 2.5 4.5-5" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',
flag:'<path d="M6 21V4M6 4h12l-2.5 4 2.5 4H6" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linejoin="round"/>'};
function icon(n){var d=document.createElement("div");d.className="badge-ic";d.innerHTML='<svg viewBox="0 0 24 24" aria-hidden="true">'+(ICONS[n]||ICONS.wheel)+'</svg>';return d}

/* services */
C.services.forEach(function(s){var c=h("article",{class:"card rv"},[icon(s.icon),h("h3",{},[s.title]),h("p",{},[s.text])]);
 if(s.status!=="confirmed")c.appendChild(h("span",{class:"tag"},["Ask if available"]));$("#services").appendChild(c)});
/* prices */
$("#pricesNote").textContent=C.pricesNote||"";
C.prices.forEach(function(p){var c=h("article",{class:"card rv"+(p.featured?" feat":"")},[h("h3",{},[p.name]),h("div",{class:"amount"},[p.price?p.price+(p.detail?" "+p.detail:""):"Contact us for prices"])]);$("#prices-list").appendChild(c)});
/* areas */
C.areas.forEach(function(a){$("#areasList").appendChild(h("li",{},[a]));var o=h("option",{value:a},[a]);$("[name=area]").appendChild(o)});
C.services.forEach(function(s){$("[name=service]").appendChild(h("option",{value:s.title},[s.title]))});
/* test centres: hidden unless data supplied */
var hasCentres=C.testCentres&&C.testCentres.length>0;
if(hasCentres){$("#centres").hidden=false;C.testCentres.forEach(function(t){var li=h("li",{});li.appendChild(t.url?h("a",{href:t.url,target:"_blank",rel:"noopener"},[t.name]):document.createTextNode(t.name));$("#centresList").appendChild(li)})}
/* instructors */
C.instructors.forEach(function(i){var img=h("img",{src:i.photo,alt:i.alt||"Driving instructor",width:640,height:640,loading:"lazy"});
 var d=h("div",{},[h("h3",{},[i.name||i.role||"Instructor"])]);if(i.name&&i.role)d.appendChild(h("p",{},[i.role]));if(i.bio)d.appendChild(h("p",{},[i.bio]));
 if(!i.name&&!i.bio)d.appendChild(h("p",{},["Friendly, patient one-to-one lessons in a red Vauxhall Corsa."]));
 $("#instructors").appendChild(h("article",{class:"inst rv"},[img,d]))});
/* faqs */
C.faqs.forEach(function(f){$("#faqList").appendChild(h("details",{},[h("summary",{},[f.q]),h("p",{},[f.a])]))});

/* nav */
var links=[["home","Home"],["about","About"],["lessons","Lessons"],["prices","Prices"],["areas","Areas"]];
if(hasCentres)links.push(["centres","Test centres"]);links.push(["success","Success"],["faqs","FAQs"],["contact","Contact"]);
links.forEach(function(l){var li=h("li",{},[h("a",{href:"#"+l[0]},[l[1]])]);$("#navList").appendChild(li)});
var burger=$("#burger"),nav=$("#nav");
function closeMenu(){nav.classList.remove("open");burger.setAttribute("aria-expanded","false");burger.setAttribute("aria-label","Open menu")}
burger.addEventListener("click",function(){var o=nav.classList.toggle("open");burger.setAttribute("aria-expanded",o);burger.setAttribute("aria-label",o?"Close menu":"Open menu")});
$$("#navList a").forEach(function(a){a.addEventListener("click",closeMenu)});
document.addEventListener("keydown",function(e){if(e.key==="Escape")closeMenu()});
var secs=links.map(function(l){return document.getElementById(l[0])});
if("IntersectionObserver"in window){var so=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){$$("#navList a").forEach(function(a){a.classList.toggle("active",a.getAttribute("href")==="#"+e.target.id)})}})},{rootMargin:"-45% 0px -50% 0px"});secs.forEach(function(s){so.observe(s)})}

/* scroll reveal */
if("IntersectionObserver"in window&&!reduce.matches){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.15});$$(".rv").forEach(function(e){io.observe(e)})}else{$$(".rv").forEach(function(e){e.classList.add("in")})}


/* animation helpers: scroll progress, header state, staggered reveals, headings */
$$("h2").forEach(function(h2){h2.classList.add("rv","hd")});
$$(".cards,.areas,.instructors").forEach(function(g){$$(".rv,li",g).forEach(function(c,i){c.style.setProperty("--d",Math.min(i,12)*60+"ms")})});
$$("#areasList li").forEach(function(l){l.classList.add("rv")});
var bar=$("#progress"),hdr=$(".site-header"),tick=false;
function onScroll(){var y=window.pageYOffset,max=document.documentElement.scrollHeight-innerHeight;bar.style.transform="scaleX("+(max>0?y/max:0)+")";hdr.classList.toggle("scrolled",y>20);tick=false}
window.addEventListener("scroll",function(){if(!tick){tick=true;requestAnimationFrame(onScroll)}},{passive:true});onScroll();

/* gallery marquee: one group >= viewport, duplicated, shifted by exactly one group width => seamless, left-to-right */
var TICK='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12.500l4.5 4.500L19 7"/></svg>';
function shot(s,dup){var d=h("figure",{class:"shot"});d.style.margin="0 20px 0 0";var im=h("img",{src:s.src,alt:dup?"":s.alt,width:360,height:480,loading:"lazy",draggable:"false"});d.appendChild(im);
 var p=h("div",{class:"pass"});p.innerHTML=TICK+"<span>PASSED</span>";d.appendChild(p);return d}
function group(reps,dup){var g=h("div",{style:"display:flex"});if(dup)g.setAttribute("aria-hidden","true");for(var i=0;i<reps;i++)C.students.forEach(function(s){g.appendChild(shot(s,dup||i>0))});return g}
function buildMarquee(){var t=$("#track"),m=$("#marquee");t.innerHTML="";if(!C.students.length){$("#success").hidden=true;return}
 var one=C.students.length*(parseFloat(getComputedStyle(document.documentElement).fontSize)>0?(window.innerWidth<=860?240:280):280),reps=Math.max(1,Math.ceil(m.clientWidth/one));
 var g1=group(reps,false);t.appendChild(g1);if(reduce.matches)return;var g2=group(reps,true);t.appendChild(g2);
 var shift=g1.getBoundingClientRect().width;t.style.setProperty("--shift",shift+"px");t.style.setProperty("--dur",(shift/60)+"s");}
var rt;buildMarquee();window.addEventListener("resize",function(){clearTimeout(rt);rt=setTimeout(buildMarquee,200)});
window.addEventListener("load",buildMarquee);reduce.addEventListener&&reduce.addEventListener("change",buildMarquee);

/* enquiry form -> prepares WhatsApp message only */
var form=$("#enquiry");
function setErr(n,msg){var f=form.elements[n];$("[data-for="+n+"]").textContent=msg;f.classList.toggle("invalid",!!msg);f.setAttribute("aria-invalid",msg?"true":"false")}
form.addEventListener("submit",function(e){e.preventDefault();var f=form.elements,ok=true,name=f.name.value.trim(),ph=f.phone.value.trim();
 setErr("name",name.length<2?"Please enter your name.":"");setErr("phone",/^[+()\d\s-]{10,16}$/.test(ph)&&ph.replace(/\D/g,"").length>=10?"":"Please enter a valid phone number.");setErr("area",f.area.value?"":"Please choose your area.");
 $$(".invalid",form).length?ok=false:0;if(!ok){var first=$(".invalid",form);first&&first.focus();$("#ready").hidden=true;return}
 var lines=["Hello VIVA Driving School, I would like to enquire about driving lessons.","Name: "+name,"Phone: "+ph,"Area: "+f.area.value];
 if(f.service.value)lines.push("Lesson type: "+f.service.value);if(f.message.value.trim())lines.push("Message: "+f.message.value.trim());
 var url="https://wa.me/"+B.whatsappNumber+"?text="+encodeURIComponent(lines.join("\n"));var a=$("#waOpen");a.href=url;$("#ready").hidden=false;a.focus()});
})();
