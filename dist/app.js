const missions = {
  fairtrade: {
    number:'01', code:'SYS / 01.25', org:'FAIR TRADE USA', title:'Making<br>information<br><em>move.</em>', plainTitle:'Making information move.', category:'REPORTING · CONTENT OPERATIONS', short:'CONTENT / DATA', period:'2025 — 2026',
    description:'Connecting CRM data, project updates, and digital content into reporting workflows that helped teams and partners see the bigger picture.',
    tags:['SALESFORCE','CONTENTFUL','REPORTING'],
    intro:'Good reporting is more than a finished document. It is the work of bringing the right information together, clearly and consistently.',
    context:'At Fair Trade USA, I supported impact reporting and content operations across teams, sectors, and major retail partners.',
    bullets:['Coordinated annual and baseline reporting workflows using Salesforce, Asana, and Contentful.','Organized a centralized content library spanning six industry sectors.','Worked with data teams, producer representatives, and stakeholders to verify information and coordinate deliverables.','Supported client-facing reports and content for partners including Walmart, Target, Costco, Hershey’s, and Amazon.','Additional examples from Fair Trade USA’s broader partner network include Cadbury, Sam’s Club, Frito-Lay, and Kellogg’s.'],
    tools:'SALESFORCE / ASANA / CONTENTFUL / REPORTING', palette:0
  },
  creatordeck: {
    number:'02', code:'SYS / 02.24', org:'CREATOR DECK', title:'The right<br>people, in the<br><em>right orbit.</em>', plainTitle:'The right people, in the right orbit.', category:'INFLUENCER · CAMPAIGN OPERATIONS', short:'CREATORS / CULTURE', period:'2024 — 2025',
    description:'Supporting beauty and fragrance campaigns by bringing structure to creator research, campaign coordination, and performance reporting.',
    tags:['CREATOR RESEARCH','CAMPAIGNS','REPORTING'],
    intro:'A strong creator campaign begins with a thoughtful match, and continues with careful coordination behind the scenes.',
    context:'At Creator Deck, I supported influencer marketing campaigns for global beauty and fragrance brands.',
    bullets:['Researched and vetted creators using audience demographics, engagement rates, and campaign KPIs.','Managed creator databases, outreach, and coordination to support partnership execution.','Tracked content deliverables and prepared reports on engagement and campaign performance.','Supported campaigns involving Yves Saint Laurent, Sephora, Redken, IT Cosmetics, Kylie Cosmetics, L’Oréal, Flower Knows, and Azzaro.'],
    tools:'CREATOR RESEARCH / CAMPAIGN COORDINATION / REPORTING', palette:1
  },
  lihtc: {
    number:'03', code:'SYS / 03.26', org:'LIHTC LEADERS', title:'A community<br>with shared<br><em>purpose.</em>', plainTitle:'A community with shared purpose.', category:'COMMUNITY · B2B MARKETING', short:'COMMUNITY / CONNECTION', period:'2026 — PRESENT',
    description:'Connecting affordable housing professionals with relevant opportunities through community, content, employer relationships, and a specialized job board.',
    tags:['COMMUNITY','CRM','B2B OUTREACH'],
    intro:'The most useful communities make it easier for people to find the right opportunities and one another.',
    context:'At LIHTC Leaders, I support a professional community and job board serving the affordable housing industry.',
    bullets:['Manage company and employee LinkedIn profiles, with a combined audience of more than 21,000 followers as reported in my profile.','Coordinate employer outreach and maintain relationships across the affordable housing sector, with work involving organizations such as Wells Fargo, April Housing, Dominium, Pennrose, and Fairstead.','Manage employer profiles, professional accounts, and job listings on a specialized job board.','Maintain CRM records, monitor partnership opportunities, and report on job-posting performance.'],
    tools:'LINKEDIN / CRM / COMMUNITY / EMPLOYER SUPPORT', palette:2
  },
  feishu: {
    number:'04', code:'SYS / 04.26', org:'FEISHU', title:'Beyond<br>translation.<br><em>Into context.</em>', plainTitle:'Beyond translation. Into context.', category:'LOCALIZATION · CONSUMER RESEARCH', short:'LANGUAGE / CULTURE', period:'2026 — PRESENT',
    description:'Helping marketing materials speak more naturally to U.S. audiences through cultural research, clear language, and organized recommendations.',
    tags:['LOCALIZATION','RESEARCH','MESSAGING'],
    intro:'Language is only the beginning. Useful localization considers the way people actually think, talk, and decide.',
    context:'As a U.S. Marketing Localization Assistant, I help adapt marketing language and context for American consumers.',
    bullets:['Review landing pages, product descriptions, and promotional materials for natural U.S. English and audience fit.','Research consumer discussions across Reddit, TikTok, and YouTube to understand language, references, and purchasing concerns.','Maintain localization trackers with suggested copy revisions, competitor messaging examples, and recommendations.'],
    tools:'LOCALIZATION / CONSUMER RESEARCH / GOOGLE SHEETS', palette:3
  }
};
const capabilities={
  operations:{number:'01',text:'Organizing CRM records, project details, and repeatable workflows so teams can spend less time searching and more time doing.',tools:'SALESFORCE / HUBSPOT / ZOHO / ASANA'},
  content:{number:'02',text:'Keeping content clear, consistent, and ready to reach its audience across websites, social channels, and content libraries.',tools:'CONTENTFUL / WORDPRESS / SHOPIFY / WEBFLOW'},
  campaigns:{number:'03',text:'Connecting people, timelines, and deliverables across influencer partnerships, community work, and digital campaigns.',tools:'CREATOR RESEARCH / SOCIAL MEDIA / COORDINATION'},
  insights:{number:'04',text:'Bringing scattered data into clear reports, tracking performance, and asking better questions about what comes next.',tools:'SPREADSHEETS / CRM REPORTING / CAMPAIGN KPIs'}
};
const caseDetails = {
  fairtrade:{challenge:'Partner reporting depends on information spread across systems and teams. The work was to organize inputs and make updates easier to navigate.',flow:['CRM DATA','PROJECT UPDATES','CONTENT LIBRARY','PARTNER REPORTS'],outcome:'A centralized content library spanning six sectors and client-facing annual and baseline reports. The work supported consistency and collaboration across teams.'},
  creatordeck:{challenge:'Influencer campaigns bring together creator fit, deliverables, communication, and reporting. Each needs attention to keep work coordinated.',flow:['CAMPAIGN BRIEF','CREATOR RESEARCH','COORDINATION','PERFORMANCE REPORT'],outcome:'Campaign support across global beauty and fragrance brands, with creator research, deliverable coordination, and reporting brought together for the teams involved.'},
  lihtc:{challenge:'Affordable housing employers need ways to reach relevant professionals while job listings and community communications remain organized.',flow:['EMPLOYERS','CRM & OUTREACH','JOB BOARD','PROFESSIONAL COMMUNITY'],outcome:'Ongoing community and employer support across a specialized job board and social profiles. The 21K+ figure is the combined audience reported in my profile, not a claim of follower growth.'},
  feishu:{challenge:'Marketing language needs to sound natural to U.S. audiences and reflect the cultural context in which it appears.',flow:['U.S. RESEARCH','LANGUAGE REVIEW','LOCALIZATION TRACKER','RECOMMENDATIONS'],outcome:'Organized copy recommendations and research notes that help teams adapt landing pages and promotional materials for U.S. audiences.'}
};
const $=selector=>document.querySelector(selector);
const menu=$('.mobile-menu'); const toggle=$('.menu-toggle');
toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')==='true';toggle.setAttribute('aria-expanded',String(!open));toggle.setAttribute('aria-label',open?'Open navigation':'Close navigation');menu.hidden=open;});
menu.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{menu.hidden=true;toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation');}));
let current='fairtrade'; let scenes=null;
function selectMission(key){
  const m=missions[key];if(!m)return;current=key;
  document.querySelectorAll('.mission-tab').forEach(button=>{const active=button.dataset.mission===key;button.classList.toggle('active',active);button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});
  $('#planet-stage').dataset.palette=String(m.palette);$('#mission-code').textContent=m.code;$('#planet-short').textContent=m.short;$('#mission-category').textContent=m.category;$('#mission-figure').textContent=m.number;$('#mission-number').textContent=m.number+' / 04';$('#mission-org').textContent=m.org;$('#mission-title').innerHTML=m.title;$('#mission-description').textContent=m.description;$('#mission-period').textContent=m.period;
  $('#mission-tags').replaceChildren(...m.tags.map(tag=>{const el=document.createElement('span');el.textContent=tag;return el;}));
  if(scenes) scenes.setMission(m.palette);
}
document.querySelectorAll('.mission-tab').forEach(button=>button.addEventListener('click',()=>selectMission(button.dataset.mission)));
document.querySelectorAll('[data-mission-link]').forEach(link=>link.addEventListener('click',()=>selectMission(link.dataset.missionLink)));
function selectCapability(key){const item=capabilities[key];if(!item)return;document.querySelectorAll('.cap-item').forEach(button=>{const active=button.dataset.cap===key;button.classList.toggle('active',active);button.setAttribute('aria-selected',String(active));button.tabIndex=active?0:-1;});$('#cap-label').textContent='SELECTED CAPABILITY / '+item.number;$('#cap-description').textContent=item.text;$('#cap-tools').textContent=item.tools;if(scenes)scenes.setCapability(Number(item.number)-1);}
document.querySelectorAll('.cap-item').forEach(button=>button.addEventListener('click',()=>selectCapability(button.dataset.cap)));
function enableTabKeys(selector){const tabs=[...document.querySelectorAll(selector)];tabs.forEach((tab,i)=>tab.addEventListener('keydown',event=>{let next=i;if(event.key==='ArrowRight'||event.key==='ArrowDown')next=(i+1)%tabs.length;else if(event.key==='ArrowLeft'||event.key==='ArrowUp')next=(i-1+tabs.length)%tabs.length;else if(event.key==='Home')next=0;else if(event.key==='End')next=tabs.length-1;else return;event.preventDefault();tabs[next].click();tabs[next].focus();}));}
enableTabKeys('.mission-tab');enableTabKeys('.cap-item');selectMission(current);selectCapability('operations');
const dialog=$('#mission-dialog');
$('#mission-detail').addEventListener('click',()=>{const m=missions[current],detail=caseDetails[current];$('#dialog-index').textContent=m.number;$('#case-visual-index').textContent=m.number+' / 04';$('#case-visual').dataset.case=current;$('#dialog-org').textContent=m.org;$('#dialog-title').textContent=m.plainTitle;$('#dialog-intro').textContent=m.intro;$('#dialog-context').textContent=m.context;$('#dialog-challenge').textContent=detail.challenge;$('#dialog-outcome').textContent=detail.outcome;$('#dialog-tools').textContent=m.tools;$('#dialog-bullets').replaceChildren(...m.bullets.map(b=>{const li=document.createElement('li');li.textContent=b;return li;}));$('#case-flow').replaceChildren(...detail.flow.map((item,i)=>{const node=document.createElement('div');node.className='flow-node';const count=document.createElement('span');count.textContent='0'+(i+1);const label=document.createElement('strong');label.textContent=item;node.append(count,label);return node;}));dialog.showModal();});
document.querySelectorAll('.field-copy [data-mission-link]').forEach(link=>link.addEventListener('click',event=>{event.preventDefault();selectMission(link.dataset.missionLink);$('#mission-detail').click();}));
$('#dialog-close').addEventListener('click',()=>dialog.close());$('#dialog-bottom-close').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
const quick=$('#quick-dialog');$('#quick-open').addEventListener('click',()=>quick.showModal());$('#quick-close').addEventListener('click',()=>quick.close());$('#quick-work').addEventListener('click',()=>quick.close());$('#quick-gallery').addEventListener('click',()=>quick.close());quick.addEventListener('click',event=>{if(event.target===quick)quick.close();});
// Keep the narrative and controls available even on browsers that cannot start WebGL.
import('./scenes.bundle.js?v=2').then(module=>{scenes=module.initScenes({onMissionSelect:index=>selectMission(['fairtrade','creatordeck','lihtc','feishu'][index])});scenes.setMission(missions[current].palette);const active=document.querySelector('.cap-item.active');scenes.setCapability(Number(capabilities[active.dataset.cap].number)-1);}).catch(error=>{document.documentElement.classList.add('no-webgl');$('.drag-hint').textContent='SELECT A DESTINATION TO EXPLORE';console.warn('Space scenes unavailable:',error);});
