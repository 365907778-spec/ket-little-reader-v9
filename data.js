/* Only text visually checked against the retrieved textbook screenshots. */
globalThis.KET_DATA = (() => {
  const groups = [
    ['fragment','Sentence 04 · 水果与情态动词','Sentence 04 主题词截图（页24—28/461）', `vegetable|蔬菜;shall|将要;would|将，会；想要（would like）;may|也许，可能;might|可能，可以;apple|苹果;banana|香蕉;pear|梨;grape|葡萄;mango|芒果;melon|甜瓜;strawberry|草莓;lemon|柠檬;fresh|新鲜的`],
    ['04','Sentence 04 · 核心','IMG_5106.png 以外的 Sentence 04 用户截图', `learn|学习;what|什么;eat|吃;also|也;how|如何;fruit|水果;vegetable|蔬菜`],
    ['05','Sentence 05 · 核心','image(3).png + image(4).png', `bottle|瓶子;sparkling|起泡的；闪耀的;water|水;all|全部的;thing|东西，事物;sandwich|三明治;roll|小圆面包;cheese|奶酪;special|特别的；专门的;offer|特价；提供`],
    ['05x','Sentence 05 · 主题词','image(4).png', `pasta|意大利面;omelette|煎蛋卷;fast food|快餐;burger|汉堡;bread|面包;toast|吐司;chip|炸薯条;French fries|炸薯条`],
    ['06','Sentence 06 · 核心','image(5).png + image(6).png', `Italian|意大利人；意大利语;kind|种类；和蔼的;ice|冰;cream|奶油;call|打电话；把……称为;which|哪个，哪些;wonderful|精彩的，绝妙的;pizza|比萨饼;local|当地的;market|市场`],
    ['06x','Sentence 06 · 主题词','image(6).png + image(7).png', `sort|种类;variety|不同种类，多种式样;various|各种各样的;dessert|甜品;cake|蛋糕;pudding|布丁；甜点;jam|果酱;butter|黄油;candy|糖果;sugar|糖;chocolate|巧克力;ice cream|冰激凌;yoghurt|酸奶;honey|蜂蜜;snack|点心，小吃;biscuit|饼干;cookie|曲奇饼;popcorn|爆米花;nut|干果，坚果;peanut|花生`],
    ['07','Sentence 07 · 核心','image(8).png + image(9).png', `need|需要;own|自己的；拥有;meal|一餐，一顿饭;camp|露营;chef|厨师；厨师长;outdoor|户外的;in|在……中；在……期间;kitchen|厨房`],
    ['07x','Sentence 07 · 主题词','image(9).png + image(20261028-065012).png + image(10).png', `hungry|饥饿的;thirsty|口渴的;prepare|准备;ready|准备好的;cooking|烹饪;flour|面粉;cut|切，割;slice|片，薄片；切成薄片;mix|混合，调制;bake|烘焙，烤;roast|烘，烤;grilled|烤制的;fry|油炸，油煎;fried|油炸的，油煎的;stir|搅拌;boil|煮沸，烧开;boiled|水煮的;bathroom|浴室;bedroom|卧室;living room|客厅，起居室;toilet|厕所`]
  ];
  const words = groups.flatMap(([group,label,source,rows]) => rows.split(';').map((r,i) => {const [en,zh]=r.split('|');return {id:`${group}-${i}`,en,zh,group,label,source};}));
  // The following targets come from the approved 28-day recognition plan in the referenced chat.
  // They are learning targets, not a claim that they are the matching textbook sentence's vocabulary.
  const planGroups=[
    ['03','Sentence 03 · 计划目标','规划KET备考 · 第1天','only|只有；仅;few|少数的；不多的;food|食物;student|学生;available|可获得的；可用的'],
    ['04','Sentence 04 · 计划目标','规划KET备考 · 第2天','breakfast|早餐;lunch|午餐;supper|晚餐;daily|每天的；日常的;weekly|每周的'],
    ['p03','第3天 · 认读强化词','规划KET备考','soup|汤;noodles|面条;sweet|甜的;sour|酸的;spicy|辛辣的'],
    ['p04','第4天 · 认读强化词','规划KET备考','delicious|美味的;tasty|好吃的;type|种类;next|下一个；下次的;week|周'],
    ['p08','第6天 · 认读强化词','规划KET备考','shop|商店；购物;buy|买;price|价格;money|钱;change|零钱；改变'],
    ['p10','第8天 · 认读强化词','规划KET备考','book|书;look|看;cook|烹饪;moon|月亮'],
    ['p11','第9天 · 认读强化词','规划KET备考','see|看见;tree|树;green|绿色的;sleep|睡觉'],
    ['p12','第10天 · 认读强化词','规划KET备考','rain|雨;train|火车;paint|涂；画;wait|等待;day|天'],
    ['p13','第11天 · 认读强化词','规划KET备考','boat|船;coat|外套;road|路;snow|雪;grow|生长'],
    ['p14','第12天 · 认读强化词','规划KET备考','night|夜晚;light|光；轻的;right|对的；右边的;high|高的;bright|明亮的'],
    ['p15','第13天 · 认读强化词','规划KET备考','chair|椅子;fish|鱼'],
    ['p17','第15天 · 认读强化词','规划KET备考','morning|早晨;afternoon|下午;evening|晚上;today|今天'],
    ['p18','第16天 · 认读强化词','规划KET备考','yesterday|昨天;tomorrow|明天;weekend|周末;before|在……之前;after|在……之后'],
    ['p19','第17天 · 认读强化词','规划KET备考','always|总是;usually|通常;often|经常;sometimes|有时;never|从不'],
    ['p20','第18天 · 认读强化词','规划KET备考','school|学校;teacher|老师;lesson|课;classroom|教室;homework|家庭作业'],
    ['p21','第19天 · 认读强化词','规划KET备考','friend|朋友;family|家庭;cousin|表/堂兄弟姐妹;parent|父或母;sister|姐妹'],
    ['p22','第20天 · 认读强化词','规划KET备考','happy|开心的;worried|担心的;tired|疲倦的;excited|兴奋的;afraid|害怕的'],
    ['p24','第22天 · 认读强化词','规划KET备考','will|将会;can|能;should|应该;must|必须'],
    ['p25','第23天 · 认读强化词','规划KET备考','because|因为;but|但是;so|所以;when|当……时;if|如果'],
    ['p26','第24天 · 认读强化词','规划KET备考','go|去;went|去（过去式）;saw|看见（过去式）;take|拿；带走'],
    ['p27','第25天 · 认读强化词','规划KET备考','make|制作;made|制作（过去式）;bought|买（过去式）;have|有'],
    ['p28','第26天 · 认读强化词','规划KET备考','first|首先;then|然后;finally|最后;suddenly|突然'],
    ['p29','第27天 · 认读强化词','规划KET备考','notice|通知;time|时间;place|地点;ticket|票;meeting|会议']
  ];
  planGroups.forEach(([group,label,source,rows])=>rows.split(';').forEach((r,i)=>{const [en,zh]=r.split('|');if(!words.some(w=>w.en===en))words.push({id:`${group}-${i}`,en,zh,group,label,source});}));
  [['types','种类（复数）','03'],['lunch','午餐','03']].forEach(([en,zh,lesson])=>{if(!words.some(w=>w.en===en))words.push({id:`${lesson}-add-${en}`,en,zh,group:lesson,label:`Sentence ${lesson} · 核心`,source:'用户提供的原句与词表'});});
  const clippedGroups=new Set(['fragment','03','p03','p04','05','05x','06','06x','07','07x']);
  words.forEach(w=>{if(clippedGroups.has(w.group))w.audioClip=`audio/clips/${w.id}.mp3`;});
  const sentences = [
    {id:'03',title:'食物供应',source:'规划KET备考 · 已明确给出原句',text:'Only a few types of food will be available for student lunches next week.',zh:'下周学生午餐将只有几种食物可供选择。',chunks:['Only a few types of food','will be available for student lunches','next week.'],focus:['only','few','food','student','available'],cloze:[['a few types of food','few','少数几种食物'],['will be available','available','将会有供应']]},
    {id:'04',title:'健康饮食',source:'用户补充 Sentence 04 原句及词表截图，第24—28页/461',text:"Students learn what they should and shouldn't eat and also how to cook with fruit and vegetables.",zh:'学生们学习他们应该吃什么、不应该吃什么，以及如何用水果和蔬菜烹饪。',chunks:['Students learn what they should and shouldn\'t eat','and also how to cook','with fruit and vegetables.'],focus:['learn','should','eat','cook','fruit','vegetable'],cloze:[['learn how to cook','cook','学着烹饪'],['with fruit and vegetables','vegetables','水果和蔬菜']]},
    {id:'05',title:'野餐准备',source:'image(3).png',text:"I've got some bottles of sparkling water and all the things for the sandwiches—the rolls and the cheese were on special offer.",zh:'我买了几瓶气泡水和所有做三明治需要的东西——小圆面包和奶酪都是特价的。',chunks:["I've got some bottles of sparkling water",'and all the things for the sandwiches','the rolls and the cheese were on special offer.'],focus:['bottle','sparkling','water','sandwich','cheese','offer'],cloze:[['sparkling water','water','气泡水'],['on special offer','offer','特价销售']]},
    {id:'06',title:'市场里的美味',source:'image(5).png',text:'The Italians have a special kind of ice cream called “gelato” which is wonderful, but the best thing I had was a pizza at a local market.',zh:'意大利人吃一种特别的冰激凌，叫作“gelato”，非常美味，但我吃的最好的东西是当地市场里的一种比萨。',chunks:['The Italians have a special kind of ice cream called “gelato”','which is wonderful','but the best thing I had was a pizza at a local market.'],focus:['kind','ice cream','wonderful','pizza','local','market'],cloze:[['a kind of','kind','一种，一类'],['a local market','market','当地的市场']]},
    {id:'07',title:'营地小厨房',source:'image(8).png',text:"Also, we didn't need to make our own meals because there was a camp chef who cooked for us in an outdoor kitchen.",zh:'我们也不需要自己做饭，因为有一位营地厨师，他会在一个露天的厨房为我们做饭。',chunks:["Also, we didn't need to make our own meals",'because there was a camp chef','who cooked for us in an outdoor kitchen.'],focus:['need','own','meal','camp','chef','kitchen'],cloze:[['an outdoor kitchen','kitchen','露天的厨房'],['a camp chef','chef','营地厨师']]}
  ];
  const audio = ['03','04','05','06','07'].map(id=>({id,src:`audio/sentence-${id}.mp3`,title:`Sentence ${id}`,source:`Sentence ${id}.mp3`,textAvailable:sentences.some(s=>s.id===id)}));
  const findWords=names=>names.map(en=>words.find(w=>w.en===en)).filter(Boolean);
  const dailyPlans=[
    ['03',['only','few','types','student','available','lunch'],'随机认词10次；will be 填空5题','School Lunch Notice','用 only / available 说一条午餐通知'],
    ['04',['learn','should','eat','cook','fruit','vegetable'],'三餐词汇匹配5题；时间短文3题','时间信息匹配','用 daily 或 weekly 说自己的习惯'],
    ['05',['bottle','sparkling','sandwich','cheese','special','offer'],'菜单阅读5题；食物形容词填空5题','菜单阅读','描述一种喜欢的食物'],
    ['06',['kind','wonderful','local','market','dessert','snack'],'词组组合5题；next week 造句3句','词组组合','说一句 next week 计划'],
    ['07',['need','meal','camp','chef','outdoor','kitchen'],'旧词随机认读10次；换句识词5题','换句识词','用一个旧词造句'],
    ['08',['shop','buy','price','money','change'],'购物通知阅读5题；价格口语问答','购物通知','模拟询问价格'],
    ['09',[],'20词认读测试＋RAZ F陌生文本测试','第1周复盘','复述今天读的 RAZ 内容'],
    ['10',['book','look','cook','food','moon'],'区分 oo 发音；读5个新词','拼读辨认','读出一个新词'],
    ['11',['see','tree','green','sleep','week'],'ee 拼读；新句认读5题','新句认读','用 green 说一句'],
    ['12',['rain','train','paint','wait','day'],'ai / ay 拼读与拼写5题','拼读分类','说一个含 ai 或 ay 的词'],
    ['13',['boat','coat','road','snow','grow'],'oa / ow 分类5题；短文理解3题','拼读分类','读一句新句'],
    ['14',['night','light','right','high','bright'],'igh 辨认；陌生句朗读5句','陌生句朗读','用 bright 造句'],
    ['15',['chair','cheese','lunch','fish','shop'],'ch / sh 辨认；听词选字形8题','听词选字形','说一个午餐选择'],
    ['16',[],'20词随机认读、10个新词拼读、RAZ 阅读','第2周复盘','复述 RAZ'],
    ['17',['morning','afternoon','evening','night','today'],'时间信息匹配5题','时间信息匹配','说今天的时间安排'],
    ['18',['yesterday','tomorrow','weekend','before','after'],'时间顺序排序5题','时间顺序','说周末计划'],
    ['19',['always','usually','often','sometimes','never'],'频率副词填空8题','频率副词','说一个生活习惯'],
    ['20',['school','teacher','lesson','classroom','homework'],'学校通知阅读5题','学校通知','介绍一节课'],
    ['21',['friend','family','cousin','parent','sister'],'家庭人物阅读5题','人物阅读','介绍一位家人'],
    ['22',['happy','worried','tired','excited','afraid'],'情绪词匹配5题，造句3句','情绪匹配','说今天的感受'],
    ['23',[],'10句迁移测试＋KET阅读 Part 1 六题','第3周复盘','复述 RAZ'],
    ['24',['will','can','should','must','might'],'情态动词填空8题','情态动词','说一条建议'],
    ['25',['because','but','so','when','if'],'连接词填空8题','连接词','把两句话连起来'],
    ['26',['go','went','see','saw','take'],'现在时和过去时匹配8题','动词形式','说昨天做过的事'],
    ['27',['make','made','buy','bought','have'],'动词形式选择8题','动词形式','说一个过去发生的事'],
    ['28',['first','next','then','finally','suddenly'],'三图故事句子排序','故事排序','用 first / then 说故事'],
    ['29',['notice','time','place','ticket','meeting'],'学校通知6题＋短邮件','通知与邮件','写一条短便条'],
    ['30',[],'不增加专项词；28天综合测评＋RAZ升 G 判断','综合测评','口头复述一篇短文'],
    ['复习',[],'30天总结：复测、整理错词、设下一阶段目标','30天评估','告诉家长最想保持的习惯'],
    ['复习',[],'30天评估：熟词认读、句子迁移、RAZ独立阅读','30天评估','说明自己进步的地方']
  ].map(([sentenceId,names,drill,ket,output],i)=>({day:i+1,sentenceId,words:findWords(names),drill,ket,output}));
  const sentence04Exercise={
    title:'Sentence 04 · Healthy Eating',
    source:'补充自编练习 · 基于Sentence 04已提供教材词汇',
    questions:[
      {stem:'You ___ eat too much candy.',options:['should','shouldn\'t','are'],answer:1,explanation:'“不应该吃太多糖”用 shouldn\'t。'},
      {stem:'We can cook with fruit and ___.',options:['vegetables','bedrooms','tickets'],answer:0,explanation:'fruit and vegetables 是常见食物搭配。'},
      {stem:'My brother wants to learn ___ to cook.',options:['what','how','which'],answer:1,explanation:'learn how to cook 表示“学习怎样做饭”。'}
    ]
  };
  return {version:3,words,sentences,audio,dailyPlans,groups:[...groups,...planGroups].map(([id,label,source])=>({id,label,source})),missing:[],sentence04Exercise,assessment:['only','few','food','student','available','breakfast','lunch','weekly','bottle','kind','pizza','need']};
})();
