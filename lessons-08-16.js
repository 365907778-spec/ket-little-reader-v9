/* 教材截图 Sentence 08–16；音频待用户提供。 */
(() => {
  const lessons = [
    ['08','新衣服店',"I'm looking forward to going to that new clothes shop opposite the department store.",'我很期待去百货商店对面那家新开的服装店。',"I'm looking forward to|going to that new clothes shop|opposite the department store.", 'look|看；看起来;forward|向前；向将来;that|那个;shop|商店；购物;opposite|在……对面;department|部门；科；系;store|商店；仓库;seem|似乎;appear|显得；似乎;mall|购物中心;rent|租用；租金;grocery store|杂货店;supermarket|超市'],
    ['09','买毛巾','I wanted to get a towel Ben can use after swimming, but they were all very expensive.','我本来想买一条毛巾，本游泳后可以用，但它们都很贵。','I wanted to get a towel|Ben can use after swimming,|but they were all very expensive.', 'get|获得；收到;towel|毛巾;can|能；可以;use|使用;after|在……之后;swimming|游泳;very|很；非常;expensive|昂贵的;mirror|镜子;soap|肥皂;shampoo|洗发水;price|价格;sale|销售；特价销售;discount|折扣;bill|账单;money|钱;credit card|信用卡;receipt|收据;cash|现金;coin|硬币;cheque|支票'],
    ['10','生日礼物',"She had to go and choose a present for her dad's birthday, so she went to a department store.",'她得去为她爸爸的生日挑选礼物，所以她去了一家百货商店。',"She had to go and choose a present|for her dad's birthday,|so she went to a department store.", 'have to|必须；不得不;go|去;present|礼物;dad|爸爸;birthday|生日;so|所以；因此;gift|礼物;doll|玩偶;toy|玩具;scooter|踏板车;pearl|珍珠;balloon|气球;candle|蜡烛;break|打破；休息;broken|破损的;vase|花瓶;introduce|介绍;hello|你好;wave|挥手;bye|再见;goodbye|再见;kiss|吻;greet|打招呼;treat|对待；招待;guest|客人;pour|倒'],
    ['11','买书包','I wanted a pale colour bag but this was the only one in the shop that was big enough for all my school stuff!','我本来想要一个浅色的包，但店里只有这一个包够大，可以装下我所有的学习用品！','I wanted a pale colour bag|but this was the only one in the shop|that was big enough for all my school stuff!', 'pale|浅色的;colour|颜色;bag|袋子；手提包;this|这；这个;enough|足够的;school|学校;stuff|东西；物品;packet|小包；包裹;handbag|手提包;purse|钱包;wallet|钱包;list|清单;basket|篮子;box|箱；盒;broom|扫帚;move|移动；搬家;heavy|沉重的;housewife|家庭主妇;housework|家务'],
    ['12','露营装备',"You don't need to bring tents or anything like that, but you will need boots.",'你不需要带帐篷之类的东西，但你会需要靴子。',"You don't need to bring tents|or anything like that,|but you will need boots.", 'bring|带来;tent|帐篷;or|或者；还是;anything|任何事物;like|像；喜欢;but|但是;boot|靴子;anyway|不管怎样;anymore|不再;anywhere|在任何地方;however|然而;rope|绳索;hide|躲藏;step|脚步；台阶;hike|远足;picnic|野餐;barbecue|户外烧烤'],
    ['13','课堂穿着',"It's nice that the teachers let us take our jackets off in class—they usually do.",'老师让我们在课堂上脱掉外套，这样很好——他们通常都这样做。',"It's nice that the teachers let us|take our jackets off in class—|they usually do.", 'nice|令人愉快的;teacher|教师;let|让；允许;take|拿；带去;jacket|夹克;class|课；班级;usually|通常;skirt|半身裙;clothes|衣服;coat|外套;jumper|针织套衫;thick|厚的;thin|薄的;blouse|女式衬衫;head teacher|校长;blackboard|黑板;classroom|教室'],
    ['14','博物馆的制服','Dan, I saw your mum at the museum yesterday, wearing a staff uniform.','丹，我昨天在博物馆看到你妈妈了，她穿着员工制服。','Dan, I saw your mum|at the museum yesterday,|wearing a staff uniform.', 'see|看见;yesterday|昨天;wear|穿；戴;staff|全体职工;uniform|制服;suit|套装；适合;costume|服装；戏服;bathing suit|泳衣;swimsuit|泳衣;boss|老板;leader|领导者;customer|顾客;shop assistant|店员;shopkeeper|店主'],
    ['15','太阳镜','It was so bright all week that I had to wear sunglasses whenever I went outside.','那一周天气一直非常晴朗，以至于我无论何时出门都得戴上太阳镜。','It was so bright all week|that I had to wear sunglasses|whenever I went outside.', 'bright|明亮的;sunglasses|太阳镜;whenever|无论何时;outside|在外面;hat|帽子;cap|帽子;glasses|眼镜;mask|面具;tie|领带；系;belt|腰带;glove|手套;scarf|围巾;jewellery|珠宝；首饰;necklace|项链;earring|耳环;bracelet|手镯;dressed|穿着衣服的;make-up|化妆品;perfume|香水'],
    ['16','舒适的衣服',"When I wore shorts and a T-shirt, they weren't warm enough, and trainers and a sweater aren't good for dancing in, so I just wear comfortable trousers and a shirt.",'当我穿短裤和T恤衫时，它们不够暖和，运动鞋和毛衣不适合跳舞，所以我只穿舒适的长裤和衬衫。',"When I wore shorts and a T-shirt, they weren't warm enough,|and trainers and a sweater aren't good for dancing in,|so I just wear comfortable trousers and a shirt.", 'when|当……时;shorts|短裤;T-shirt|T恤衫;warm|温暖的;trainer|运动鞋；教练员;sweater|毛衣;good|好的;dance|跳舞;just|只；刚才;comfortable|舒服的;trousers|裤子;shirt|衬衫;pants|裤子;jeans|牛仔裤;tights|连裤袜;sock|短袜;pocket|口袋']
  ];
  const D = globalThis.KET_DATA;
  for (const [id,title,text,zh,chunkText,rows] of lessons) {
    const words = rows.split(';').map((pair,i) => { const [en,meaning] = pair.split('|'); return {id:`lesson${id}-${i}`,en,zh:meaning,group:`${id}new`,label:`Sentence ${id} · 教材词`,source:`用户提供的 Sentence ${id} 截图与原音`,audioClip:`audio/clips/lesson${id}-${i}.mp3`}; });
    D.words.push(...words);
    D.groups.push({id:`${id}new`,label:`Sentence ${id} · 教材词`,source:`用户提供的 Sentence ${id} 截图与原音`});
    D.sentences.push({id,title,text,zh,chunks:chunkText.split('|'),focus:words.slice(0,6).map(w=>w.en),cloze:[],source:`用户提供的 Sentence ${id} 截图与原音`});
    D.audio.push({id,src:`audio/sentence-${id}.mp3`,title:`Sentence ${id}`,source:`Sentence ${id}.mp3`,textAvailable:true});
    const plan = D.dailyPlans.find(p=>p.sentenceId===id);
    if (plan) plan.words = words;
  }
})();

