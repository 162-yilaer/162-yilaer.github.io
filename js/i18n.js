(function() {
'use strict';
// 翻译字典 Translation Dictionary
var translations = {
// ========== 导航栏 Navigation ==========
'nav.home': { zh: '首页', en: 'Home' },
'nav.brand_story': { zh: '品牌故事', en: 'Brand Story' },
'nav.color_system': { zh: '色彩体系', en: 'Color System' },
'nav.product_center': { zh: '产品中心', en: 'Products' },
'nav.all_products': { zh: '全部产品', en: 'All Products' },
'nav.texture': { zh: '质感类', en: 'Texture' },
'nav.solid_color': { zh: '实色类', en: 'Solid Color' },
'nav.stucco': { zh: '灰泥类', en: 'Stucco' },
'nav.pearl': { zh: '珠光类', en: 'Pearl' },
'nav.floor_wall': { zh: '地墙一体涂装', en: 'Floor-Wall System' },
'nav.latex_paint': { zh: '乳胶漆系列', en: 'Latex Paint' },
'nav.exterior': { zh: '外墙系列', en: 'Exterior' },
'nav.aesthetic_inspiration': { zh: '美学灵感', en: 'Inspiration' },
'nav.case_studies': { zh: '实景案例', en: 'Case Studies' },
'nav.construction_tutorial': { zh: '施工教程', en: 'Tutorials' },
'nav.certificate': { zh: '门内证书', en: 'Certificates' },
'nav.contact_us': { zh: '联系我们', en: 'Contact' },
// ========== 产品名称 Product Names ==========
'product.shaying': { zh: '砂影', en: 'Sand Shadow' },
'product.jingzuancai': { zh: '晶钻彩', en: 'Crystal Diamond' },
'product.shishang': { zh: '石上', en: 'Stone Texture' },
'product.marong': { zh: '玛绒', en: 'Ma Velvet' },
'product.yajingshi': { zh: '雅晶石', en: 'Elegant Stone' },
'product.baobaorong': { zh: '宝宝绒', en: 'Baby Velvet' },
'product.xiaoniupi': { zh: '小牛皮', en: 'Calfskin' },
'product.xiaoyangpi': { zh: '小羊皮', en: 'Lambskin' },
'product.zhiyou': { zh: '致优蛋壳光', en: 'Premium Eggshell' },
'product.lupirong': { zh: '鹿皮绒por', en: 'Suede Por' },
'product.jipirong': { zh: '麂皮绒', en: 'Suede' },
'product.chengbaohuini': { zh: '城堡灰泥', en: 'Castle Stucco' },
'product.tuosikanahui': { zh: '托斯卡纳灰泥', en: 'Tuscan Stucco' },
'product.xixiahunni': { zh: '西夏灰泥', en: 'Xixia Stucco' },
'product.zhujishi': { zh: '珠玑石', en: 'Pearl Stone' },
'product.helanshi': { zh: '贺兰石', en: 'Helan Stone' },
'product.mogaohuiruotu': { zh: '莫高灰岩-若土', en: 'Mogao Limestone - Earth' },
'product.mogaohuiruo': { zh: '莫高灰岩-若石', en: 'Mogao Limestone - Rock' },
'product.yunshu': { zh: '云舒', en: 'Cloud Drift' },
'product.xingyu': { zh: '星雨', en: 'Star Rain' },
'product.yunzhu': { zh: '蕴珠', en: 'Pearl Essence' },
'product.ajilisi': { zh: '阿基里斯', en: 'Achilles' },
'product.chouduan': { zh: '绸缎', en: 'Silk Satin' },
'product.weiyanci': { zh: '微岩瓷', en: 'Micro Rock Porcelain' },
'product.weiyanyou': { zh: '微岩釉', en: 'Micro Rock Glaze' },
'product.jingjie': { zh: '净界', en: 'Pure Zone' },
'product.jingdun': { zh: '净盾', en: 'Pure Shield' },
'product.guanjing': { zh: '冠晶石', en: 'Crown Crystal' },
'product.anxihong': { zh: '安溪红', en: 'Anxi Red' },
'product.binghuahui': { zh: '冰花灰', en: 'Ice Flower Grey' },
'product.huangjinma': { zh: '黄金麻', en: 'Golden Grain' },
'product.shanqingshi': { zh: '山青石', en: 'Mountain Green Stone' },
// ========== 页脚 Footer ==========
'footer.brand_story': { zh: '品牌故事', en: 'Brand Story' },
'footer.about_mennei': { zh: '关于门内', en: 'About MENNEI' },
'footer.color_system': { zh: '色彩体系', en: 'Color System' },
'footer.products': { zh: '产品', en: 'Products' },
'footer.all_products': { zh: '全部产品', en: 'All Products' },
'footer.texture': { zh: '质感类', en: 'Texture' },
'footer.solid_color': { zh: '实色类', en: 'Solid Color' },
'footer.stucco': { zh: '灰泥类', en: 'Stucco' },
'footer.pearl': { zh: '珠光类', en: 'Pearl' },
'footer.floor_wall': { zh: '地墙一体涂装', en: 'Floor-Wall System' },
'footer.latex_paint': { zh: '乳胶漆系列', en: 'Latex Paint' },
'footer.exterior': { zh: '外墙系列', en: 'Exterior' },
'footer.inspiration': { zh: '美学灵感', en: 'Inspiration' },
'footer.case_studies': { zh: '实景案例', en: 'Case Studies' },
'footer.tutorials': { zh: '施工教程', en: 'Tutorials' },
'footer.certificates': { zh: '门内证书', en: 'Certificates' },
'footer.service': { zh: '服务', en: 'Service' },
'footer.stores': { zh: '线下门店', en: 'Stores' },
'footer.contact': { zh: '联系我们', en: 'Contact Us' },
'footer.phone_label': { zh: '电话：', en: 'Tel: ' },
'footer.service_hours': { zh: '(周一到周六 8:30-17:30)', en: '(Mon-Sat 8:30-17:30)' },
'footer.search_placeholder': { zh: '输入中文关键词', en: 'Enter English keywords' },
'footer.search_btn': { zh: '搜索', en: 'Search' },
// ========== 搜索 Search ==========
'search.results_title': { zh: '搜索结果', en: 'Search Results' },
'search.no_results': { zh: '未找到相关结果', en: 'No results found' },
'search.close': { zh: '关闭', en: 'Close' },
'footer.copyright': { zh: 'CopyRight © 2018 门内艺术涂料 All Rights Reserved. 江门市门内涂料科技有限公司', en: 'CopyRight © 2018 MENNEI Artistic Coatings All Rights Reserved. Jiangmen MENNEI Coating Technology Co., Ltd.' },
'footer.tagline': { zh: '门内官网 - 中国传统文化美学的现代演绎者', en: 'MENNEI Official - Modern Interpreter of Traditional Chinese Aesthetics' },
'footer.wechat_mini': { zh: '点击查看小程序', en: 'Mini Program' },
// ========== 首页 Homepage ==========
'home.banner_subtitle': { zh: '让绿色承诺，从墙开始，成为每个家的底色。', en: 'Let the green promise start from the walls and become the foundation of every home.' },
'home.brand_since': { zh: '门内 · 自 2004 始', en: 'MENNEI · Since 2004' },
'home.brand_desc1': { zh: '不空谈美学，不赶一时潮流，', en: 'No empty talk about aesthetics, no fleeting trends,' },
'home.brand_desc2': { zh: '以善其用心、知行合一为品牌根本哲学，打造有温度、有灵魂、有担当的东方美学涂料品牌。', en: 'With sincerity and integrity as our core philosophy, we create an Oriental aesthetic coating brand with warmth, soul, and responsibility.' },
'home.product_intro_zh': { zh: '门内立足东方人居需求，融合古法哲学与现代科技，打造多元化、场景化、功能化的艺术涂料产品矩阵，覆盖家装、工装全场景，兼顾美学质感、健康环保与实用耐久。', en: 'Rooted in Oriental living space needs, MENNEI integrates ancient philosophy with modern technology to create a diversified, scenario-oriented, functional artistic coating portfolio. Catering to all residential and commercial scenarios, our offerings balance aesthetic texture, eco-friendliness, and long-lasting durability.' },
'home.color_intro_zh': { zh: '我们从东方传统自然中撷取色彩，用手工制作的痕迹记录时间——用实际表现的真实温润色系，适配各类高端家居风格。', en: 'Drawing colors from Eastern natural traditions, we capture time through artisanal textures. Our genuine, soft-hued palette delivers tangible warmth, suited for all high-end interior aesthetics.' },
'home.cases_title_en': { zh: 'REAL CASES · SPACE AESTHETICS', en: 'REAL CASES · SPACE AESTHETICS' },
'home.cases_title': { zh: '实景案例 · 空间美学', en: 'Case Studies · Spatial Aesthetics' },
'home.cases_intro1': { zh: '从商业美学空间到私宅生活场域，从原生粗粝到意式极简，', en: 'From commercial aesthetic spaces to private residences, from raw textures to Italian minimalism,' },
'home.cases_intro2': { zh: '门内艺术涂料以每一处真实落地，诠释空间的呼吸与骨相。', en: 'MENNEI artistic coatings interpret the breath and essence of space through every real project.' },
'home.stats_years': { zh: '年深耕艺术涂料', en: 'Years of Dedication' },
'home.stats_stores': { zh: '线下品牌门店', en: 'Brand Stores Nationwide' },
'home.stats_partners': { zh: '全国合作网点', en: 'Partner Locations' },
'home.stats_projects': { zh: '实景落地案例', en: 'Completed Projects' },
'home.stats_unit': { zh: '万㎡', en: 'm²' },
'home.service_title_en': { zh: 'SERVICE GUARANTEE · END-TO-END CARE', en: 'SERVICE GUARANTEE · END-TO-END CARE' },
'home.service_title': { zh: '安心之选 · 选之安心', en: 'Peace of Mind · Assured Choice' },
'home.service_pro_title': { zh: '专业施工', en: 'Professional Application' },
'home.service_pro_desc': { zh: '持证工匠团队标准化施工，每道工序严格把控品质', en: 'Certified craftsmen team with standardized application, strict quality control at every step' },
'home.service_quality_title': { zh: '品质保障', en: 'Quality Assurance' },
'home.service_quality_desc': { zh: '全项有害物未检出、A2级防火、长效抗菌防霉，用实力兑现健康承诺', en: 'Zero harmful substances detected, A2 fire rating, long-term antibacterial and mold resistance' },
'home.service_after_title': { zh: '售后无忧', en: 'Worry-free After-sales' },
'home.service_after_desc': { zh: '完善的售后体系，质保期内免费维护，让每一次选择都安心', en: 'Comprehensive after-sales system, free maintenance during warranty period' },
'home.cta_english': { zh: 'EXPERIENCE IN PERSON', en: 'EXPERIENCE IN PERSON' },
'home.cta_title': { zh: '到店感受，触手可及的美学', en: 'Experience Aesthetics Firsthand' },
'home.cta_desc': { zh: '亲临门内线下门店，触摸真实肌理，感受色彩温度<br>让专业的空间美学顾问，为您量身定制专属墙面方案', en: 'Visit MENNEI stores to touch real textures and feel the warmth of colors<br>Let our professional spatial aesthetic consultants create a custom wall solution for you' },
'home.cta_btn': { zh: '探索线下门店', en: 'Find a Store' },
'home.faq_english': { zh: 'Frequently asked question', en: 'Frequently Asked Questions' },
'home.faq_title': { zh: '常见问题解答', en: 'FAQ' },
'home.faq_subtitle': { zh: '关于门内艺术涂料的常见问题', en: 'Common questions about MENNEI artistic coatings' },
'home.faq.q1': { zh: '使用寿命在多久？', en: 'How long is the service life?' },
'home.faq.a1': { zh: '正常基层处理和施工下，门内艺术涂料系列产品的使用寿命一般可达 10—15年甚至与建筑同寿命。<br>门内艺术涂料系列产品一般具有良好的耐擦洗、抗开裂和保色性能，比普通乳胶漆更耐用，也不容易出现起皮、脱落。', en: 'With proper substrate preparation and application, MENNEI artistic coating products typically last 10–15 years or even as long as the building itself.<br>MENNEI artistic coatings generally offer excellent scrub resistance, crack resistance and color retention, making them more durable than regular latex paint and less prone to peeling or flaking.' },
'home.faq.q2': { zh: '不刮腻子可以吗？', en: 'Can I skip the putty (skim coat)?' },
'home.faq.a2': { zh: '不建议省略。<br>腻子负责找平、加固基层，艺术涂料负责质感和装饰。艺术涂料对基层平整度要求较高，如果直接在毛坯墙或不平整基层上施工，容易影响质感和使用寿命。不然再好的涂料，也容易在基层上出问题。', en: 'It is not recommended to skip it.<br>Putty is responsible for leveling and reinforcing the substrate, while artistic coatings provide texture and decoration. Artistic coatings require a high level of substrate flatness. Applying directly on rough or uneven substrates can affect both the texture and service life. Even the best coating can have problems if the substrate is not properly prepared.' },
'home.faq.q3': { zh: '材料有味道吗？', en: 'Does the material have any odor?' },
'home.faq.a3': { zh: '门内艺术涂料采用水性环保配方，施工中和干透后几乎没有刺激性气味。<br>通风良好的情况下，干燥后即可入住，对气味敏感的人群也比较友好。', en: 'MENNEI artistic coatings use a water-based eco-friendly formula with virtually no irritating odor during application or after curing.<br>With good ventilation, you can move in shortly after it dries, making it friendly even to odor-sensitive individuals.' },
'home.faq.q4': { zh: '材料可以与皮肤接触吗？', en: 'Can the material come into contact with skin?' },
'home.faq.a4': { zh: '正常施工中偶尔蹭到皮肤，及时用清水清洗即可，无需过度担心。<br>产品环保温和、低刺激，但施工未干时建议避免直接接触，敏感人群在施工期间尽量不要待在现场。', en: 'If you accidentally get it on your skin during application, simply rinse with clean water promptly — there is no need for excessive concern.<br>The product is eco-friendly, mild and low-irritation. However, avoid direct contact before it dries, and sensitive individuals should not stay on-site during application.' },
'home.faq.q5': { zh: '不懂施工的人可以施工这个材料吗？', en: 'Can someone without construction experience apply this material?' },
'home.faq.a5': { zh: '艺术涂料有一定工艺要求，不太建议完全没有经验的人直接上手。<br>不过门内提供施工指导和培训，也可以推荐合作师傅。<br>部分平涂、基础肌理系列，跟着教学视频可以尝试DIY；但艺术涂料的纹理、收光、质感很考验手法，想要高级效果，建议由专业师傅施工。', en: 'Artistic coatings require certain craftsmanship, so it is not recommended for complete beginners to attempt directly.<br>However, MENNEI provides application guidance and training, and can also recommend partnered professionals.<br>Some flat-coating and basic texture series can be tried as DIY following tutorial videos. However, the texture, finishing and quality of artistic coatings rely heavily on technique — for high-end results, professional application is recommended.' },
'home.faq.q6': { zh: '不做底漆可以做这个材料吗？', en: 'Can I skip the primer when applying this material?' },
'home.faq.a6': { zh: '不建议省略底漆。<br>底漆的作用是封闭基层、增加附着力、防止泛碱和反潮，能让面层效果更均匀、更省料。<br>底漆做得好，墙面才会更稳、更出效果。', en: 'It is not recommended to skip the primer.<br>Primer seals the substrate, enhances adhesion, prevents efflorescence and moisture wicking, and helps the topcoat appear more even while using less material.<br>A well-applied primer ensures a more stable wall surface and better final results.' },
'home.faq.q7': { zh: '回南天会怎么样？', en: 'What happens during humid "return-south" weather?' },
'home.faq.a7': { zh: '艺术涂料具有一定的透气防潮性，相比墙纸不容易发霉、翘边。<br>回南天墙面可能出现轻微凝水，这是空气湿度造成的，及时通风除湿即可。<br>如果墙面长期泡水或渗水，任何涂料都难以保证。', en: 'Artistic coatings have a degree of breathability and moisture resistance, making them less prone to mold or edge curling compared to wallpaper.<br>During return-south weather, walls may develop slight condensation — this is caused by air humidity and can be managed with timely ventilation and dehumidification.<br>If walls are exposed to prolonged water soaking or seepage, no coating can be guaranteed.' },
'home.faq.q8': { zh: '为什么选的颜色上墙后不准？', en: 'Why does the chosen color look different on the wall?' },
'home.faq.a8': { zh: '颜色上墙后和色卡有轻微差异是正常的。<br>原因主要有：光线环境不同、基层颜色不同、施工厚度不同、手机/屏幕显示色差等。<br>建议在选定颜色后，先做小面积试色，在不同光线下确认效果再大面积施工。', en: 'Minor differences between the wall color and the color card are normal.<br>The main reasons include: different lighting conditions, substrate color variations, application thickness differences, and screen/display color variations.<br>After selecting a color, it is recommended to do a small-area test patch first and confirm the effect under different lighting conditions before full-scale application.' },
'home.faq.q9': { zh: '能用在厨房、卫生间吗？', en: 'Can it be used in kitchens and bathrooms?' },
'home.faq.a9': { zh: '可以，但要看区域。<br>厨房、卫生间干区可以放心使用；淋浴区、长期泡水区域建议选择微岩瓷系列专用材料，需要做好防水基层和面层保护。<br>门内建议在这些区域搭配专用底漆和防水处理，效果更持久。', en: 'Yes, but it depends on the area.<br>Dry zones of kitchens and bathrooms can be used with confidence. For shower areas and zones with prolonged water exposure, the Weiyanci (Micro-Rock Ceramic) series is recommended, with proper waterproof substrate and surface protection.<br>MENNEI recommends pairing these areas with dedicated primer and waterproofing treatment for more lasting results.' },
'home.faq.q10': { zh: '家里有孕妇、小孩、老人，可以施工吗？', en: 'Can it be applied in homes with pregnant women, children, or elderly?' },
'home.faq.a10': { zh: '可以，但建议注意施工安排。<br>选择环保水性艺术涂料，干燥后正常居住没有问题。<br>施工期间会有一定粉尘和气味，建议\u00a0孕妇、小孩、老人暂时回避，完工后通风几天再入住，会更加安心。', en: 'Yes, but attention to the application schedule is recommended.<br>Choosing eco-friendly water-based artistic coatings means normal living after drying is not a problem.<br>During application, there will be some dust and odor. It is recommended that pregnant women, children and the elderly temporarily leave the area, and ventilate for a few days after completion before moving back in for greater peace of mind.' },
// ========== 案例展示 Case Studies ==========
'case.page_title': { zh: '案例展示', en: 'Case Studies' },
'case.case1.title': { zh: '深圳·在野南杂（RISOCIAL）', en: 'Shenzhen · Zaiye Nanza (RISOCIAL)' },
'case.case1.desc': { zh: '原生矿石美学空间，选用莎安娜洞石艺术涂料', en: 'Native ore aesthetic space, using Shaanna Travertine artistic coating' },
'case.case2.title': { zh: '重庆家装案例', en: 'Chongqing Residential Project' },
'case.case2.desc': { zh: '全屋大面积使用门内艺术涂料石上，呈现原始温暖的美学', en: 'Whole-house application of MENNEI Stone Texture coating, presenting primal warm aesthetics' },
'case.case3.title': { zh: '江门海悦天玺', en: 'Jiangmen Haiyue Tianxi' },
'case.case3.desc': { zh: '江畔四代宅，以涂料为笔，绘意式极简的呼吸与骨相', en: 'Riverside four-generation residence, painting Italian minimalism with coatings' },
'case.case4.title': { zh: '宝宝绒案例赏析', en: 'Baby Velvet Showcase' },
'case.case4.desc': { zh: '一绒多面，定义高级住宅新质感', en: 'One velvet, many faces — defining premium residence texture' },
'case.case5.title': { zh: '江门碧桂园', en: 'Jiangmen Country Garden' },
'case.case5.desc': { zh: '当现代极简遇见艺术涂料，材料本身即是最佳叙事者', en: 'When modern minimalism meets artistic coatings, materials become the ultimate storyteller' },
'case.case6.title': { zh: '中山案例', en: 'Zhongshan Project' },
'case.case6.desc': { zh: '精神领地--中山中1892', en: 'Spiritual Realm — Zhongshan 1892' },
'case.case7.title': { zh: '中古风案例', en: 'Mid-Century Modern Style' },
'case.case7.desc': { zh: '中古美学的墙面应用', en: 'Wall applications of mid-century aesthetics' },
'case.case8.title': { zh: '宋式美学', en: 'Song Dynasty Aesthetics' },
'case.case8.desc': { zh: '宋式美学的墙面应用', en: 'Wall applications of Song Dynasty aesthetics' },
'case.case9.title': { zh: '洞石案例', en: 'Travertine Project' },
'case.case9.desc': { zh: '自然之韵，空间之魂', en: 'Natural rhythm, the soul of space' },
'case.case10.title': { zh: '液态金属', en: 'Liquid Metal' },
'case.case10.desc': { zh: '以光影，重塑空间灵魂', en: 'Reshaping the soul of space with light and shadow' },
'case.case11.title': { zh: '设计师事务所', en: 'Designer Studio' },
'case.case11.desc': { zh: '黑白之间，见本真', en: 'Between black and white, finding authenticity' },
'case.case12.title': { zh: '玛曼奴', en: 'Mamanu' },
'case.case12.desc': { zh: '经典&创新', en: 'Classic & Innovation' },
// ========== 联系我们 Contact ==========
'contact.page_title': { zh: '联系我们', en: 'Contact Us' },
'contact.info_title': { zh: '联系方式', en: 'Contact Information' },
'contact.company_name': { zh: '江门市门内门外涂料科技有限公司', en: 'Jiangmen City Mennei Coating Technology Co.,Ltd.' },
'contact.phone_label': { zh: '电话：', en: 'TEL: ' },
'contact.fax_label': { zh: '传真：', en: 'FAX: ' },
'contact.hours_label': { zh: '服务时间：', en: 'Service Hours: ' },
'contact.hours': { zh: '周一到周六 8:30-17:30', en: 'Mon-Sat 8:30-17:30' },
'contact.email_label': { zh: '邮箱：', en: 'Email: ' },
'contact.address_label': { zh: '地址：', en: 'ADD: ' },
'contact.address': { zh: '广东省江门（杜阮）万洋科技城特耐涂大厦1楼', en: '1st floor, Technocol Building, WanYang Technology Zone, Duruan Distirct, Jiangmen City, Guangdong Province.' },
'contact.map_title': { zh: '卫星定位', en: 'Location' },
'contact.map_address1': { zh: '江门市特耐涂化工有限公司', en: 'Jiangmen Tenaite Chemical Co., Ltd.' },
'contact.map_address2': { zh: '广东省江门市蓬江区杜阮北三路盈江科技园东南侧约260米', en: 'About 260m SE of Yingjiang Tech Park, Duruan Beisan Road, Pengjiang District, Jiangmen, Guangdong' },
'contact.hours_html': { zh: '<strong>服务时间：</strong>周一到周六 8:30-17:30', en: '<strong>Service Hours: </strong>Mon-Sat 8:30-17:30' },
'contact.address_html': { zh: '<strong>地址：</strong>广东省江门（杜阮）万洋科技城特耐涂大厦1楼', en: '<strong>ADD: </strong>1st floor, Technocol Building, WanYang Technology Zone, Duruan Distirct, Jiangmen City, Guangdong Province.' },
'contact.map_address_html': { zh: '江门市特耐涂化工有限公司<br>广东省江门市蓬江区杜阮北三路盈江科技园东南侧约260米', en: 'Jiangmen Tenaite Chemical Co., Ltd.<br>About 260m SE of Yingjiang Tech Park, Duruan Beisan Road, Pengjiang District, Jiangmen, Guangdong' },
// ========== 产品中心 Products ==========
'product.texture_title': { zh: '质感类', en: 'Texture Series' },
'product.texture_desc': { zh: '质感类艺术涂料是当下高端家装、商业空间的主流饰面品类，主打触觉美学，又别于普通乳胶漆的平整光滑，依靠天然矿物骨料打造多层次立体颗粒肌理，形成不可复制的空间视觉记忆点，是门店提升客单价、打造差异化竞争力的核心产品。', en: 'Texture artistic coatings are the mainstream finish category for high-end residential and commercial spaces. Focusing on tactile aesthetics, they differ from the smoothness of ordinary latex paint by using natural mineral aggregates to create multi-dimensional granular textures, forming unique spatial visual highlights.' },
'product.solid_title': { zh: '实色类', en: 'Solid Color Series' },
'product.solid_desc': { zh: '哑光柔雾平整饰面，无凹凸颗粒，色彩体系丰富，奶油风、极简、现代、轻奢、中古风均可适配；可做通铺纯色、分色拼色、弧形转角无缝一体施工，色彩均匀细腻，落地效果远优于普通家装乳胶漆，是设计师首选基础墙面材料。', en: 'Matte soft-mist smooth finish with no granular texture, rich color system, compatible with cream style, minimalism, modern, light luxury, and mid-century styles; can be applied as solid color, color blocking, seamless curved corners, with uniform and delicate color, far superior to ordinary residential latex paint.' },
'product.stucco_title': { zh: '灰泥类', en: 'Stucco Series' },
'product.stucco_desc': { zh: '传承千年古法灰泥工艺，以天然石灰、砂岩等无机矿物为原料，打造粗砺质朴的墙面肌理。防火阻燃、防霉透气，兼具极佳的耐擦洗性与硬度，是高端侘寂风、地中海风、自然风的首选墙面材料。', en: 'Inheriting thousand-year-old stucco craftsmanship, using natural lime, sandstone and other inorganic minerals as raw materials to create rough and natural wall textures. Fire-resistant, mold-resistant, breathable, with excellent washability and hardness, the preferred wall material for high-end wabi-sabi, Mediterranean, and natural styles.' },
'product.pearl_title': { zh: '珠光类', en: 'Pearl Series' },
'product.pearl_desc': { zh: '以云母、贝壳等天然珠光材料为骨，在光线下呈现若隐若现的灵动光泽。触感丝滑如绸，色彩随角度流转变化，为空间注入低调的奢华感，是卧室、客厅等私密空间的点睛之笔。', en: 'With natural pearlescent materials like mica and shells as the core, they present a subtle dynamic sheen under light. Silky smooth to the touch, colors shift with viewing angles, infusing spaces with understated luxury, perfect for bedrooms, living rooms and other private spaces.' },
'product.floorwall_title': { zh: '地墙一体涂装', en: 'Floor-Wall System' },
'product.floorwall_desc': { zh: '打破墙地界限，实现地面与墙面的材质统一。微岩瓷与微岩釉具备瓷砖般的硬度与耐磨性，同时保留艺术涂料的温润质感，防水防滑、无缝一体，是现代极简空间的无界美学解决方案。', en: 'Breaking the boundary between wall and floor, achieving material unity. Micro Rock Porcelain and Micro Rock Glaze have tile-like hardness and wear resistance while retaining the warm texture of artistic coatings. Waterproof, anti-slip, seamless integration — the boundless aesthetic solution for modern minimalist spaces.' },
'product.latex_title': { zh: '乳胶漆系列', en: 'Latex Paint Series' },
'product.latex_desc': { zh: '以健康环保为核心，零甲醛、零VOC释放，抗菌防霉性能卓越。净界系列净味配方适合儿童房与卧室，净盾系列耐擦洗抗污性能强，是普通家装的安心之选，也是艺术涂料的理想打底材料。', en: 'With health and environmental protection at the core, zero formaldehyde, zero VOC emission, excellent antibacterial and mold resistance. Pure Zone series with odorless formula is suitable for children\'s rooms and bedrooms; Pure Shield series has strong washability and stain resistance — a reassuring choice for ordinary home decoration and an ideal base coat for artistic coatings.' },
'product.exterior_title': { zh: '外墙系列', en: 'Exterior Series' },
'product.exterior_desc': { zh: '专为建筑外立面研发，冠晶石以天然彩砂为核心骨料，具备超强耐候性、抗紫外线能力与自洁功能。仿真石效果逼真，纹理粗犷大气，经得起风吹日晒，为建筑赋予持久魅力。', en: 'Specially developed for building facades. Crown Crystal uses natural colored sand as core aggregate, with super weather resistance, UV resistance, and self-cleaning function. Realistic stone effect, bold and majestic texture, withstands wind and sun, endowing buildings with lasting charm.' },
// ========== 产品卡片简介 Product Card Descriptions ==========
'product_card_desc.shaying': { zh: '一款卓越的涂料，以其细腻纹理与顺滑手感脱颖而出。', en: 'An exceptional coating that stands out with its delicate texture and smooth feel.' },
'product_card_desc.jingzuancai': { zh: '以高纯度烧结砂为骨，高品质乳液为脉，交融成一面可触摸的星河，手感丝滑，温润顺畅。', en: 'With high-purity sintered sand as the bone and high-quality emulsion as the vein, blending into a touchable galaxy of stars, silky smooth and warm.' },
'product_card_desc.shishang': { zh: '灵感源自自然界中岩石的万千形态，将石材的坚韧质感与艺术灵动创意巧妙结合。', en: 'Inspired by the myriad forms of rocks in nature, cleverly combining the tough texture of stone with artistic creativity.' },
'product_card_desc.marong': { zh: '让温柔可触，也让坚韧可依。在方寸之间，安放既细腻又从容的绵长诗意。', en: 'Making gentleness touchable and resilience reliable. Within a small space, placing both delicate and calm enduring poetry.' },
'product_card_desc.baobaorong': { zh: '肌肤轻绒质感，手感柔和，视觉上斑驳效果若隐若现。', en: 'Skin-like velvet texture, soft to the touch, with subtly mottled visual effect.' },
'product_card_desc.xiaoniupi': { zh: '指尖划过，顺滑如丝绸拂过掌心，又如触摸一块上好的小牛皮，细腻而有韧性。', en: 'Gliding fingertips across, smooth as silk brushing the palm, like touching fine calfskin — delicate yet resilient.' },
'product_card_desc.xiaoyangpi': { zh: '并非平滑如镜，而是带着微微起伏的橘皮纹理——细密而均匀，如小羊皮般柔韧而有筋骨。', en: 'Not mirror-smooth, but with gently undulating orange peel texture — fine and uniform, as supple and structured as lambskin.' },
'product_card_desc.zhiyou': { zh: '不刺目，不暗沉，恰似晨光轻抚蛋壳，泛起一层内敛而温润的光晕。', en: 'Neither harsh nor dull, just like morning light gently touching an eggshell, raising a layer of restrained and warm halo.' },
'product_card_desc.chengbaohuini': { zh: '以天然石灰为骨，大理石粉为肌，在墙面上形成独一无二的斑驳纹理。', en: 'With natural lime as the bone and marble powder as the flesh, forming unique mottled textures on walls.' },
'product_card_desc.tuosikanahui': { zh: '掘于西北贺兰矿山的自然宝藏，经数亿年地壳岁月淬炼，在时光轮回中沉淀风骨。', en: 'Natural treasure excavated from Helan mines in the northwest, tempered by hundreds of millions of years of crustal time, forging character through the cycles of time.' },
'product_card_desc.xixiahunni': { zh: '以纯净赋墙面以细腻与斑驳的交融之美，在方寸之间，铺展西北大地的苍古与温柔。', en: 'With purity endowing walls with the beauty of delicate and mottled fusion, within a small space, spreading the ancient majesty and gentleness of the northwest land.' },
'product_card_desc.zhujishi': { zh: '以矿物的质朴语言，为墙面铭刻大地的记忆。方寸之间，见山，见石，见时间。', en: 'In the rustic language of minerals, engraving the memory of the earth on walls. Within a small space, see mountains, see stones, see time.' },
'product_card_desc.yunshu': { zh: '明暗花纹在光影映射中相互交融，犹如云卷云舒，随光线、角度变化给视觉带来不同的惊喜。', en: 'Light and dark patterns blend in the interplay of light and shadow, like drifting clouds, bringing different visual surprises as light and angle change.' },
'product_card_desc.xingyu': { zh: '不耀眼，不喧哗，却在不经意的一瞥间，捕捉到那转瞬即逝的微光，如流星划过夜幕，如雨丝落入静水。', en: 'Not dazzling, not loud, but in a casual glance, capturing that fleeting glimmer — like a meteor across the night sky, like raindrops falling into still water.' },
'product_card_desc.yunzhu': { zh: '将光芒内敛于心，为墙面沉淀一席温润的珠光梦境。', en: 'Holding light within, weaving a warm pearlescent dream for the walls.' },
'product_card_desc.ajilisi': { zh: '立体布纹肌理自带珠光，织物般的层次在光影下舒展，适配现代、极简、轻奢、中式等多元风格。', en: 'Three-dimensional fabric-weave texture with built-in pearlescence, unfolding like a woven layer under light and shadow, adaptable to modern, minimalist, light luxury, Chinese and other styles.' },
'product_card_desc.weiyanci': { zh: '不设限，不妥协，以一体涂装的自由，打造无缝一体自由空间。', en: 'No limits, no compromise — with the freedom of integrated coating, creating seamless unified free spaces.' },
'product_card_desc.weiyanyou': { zh: '以广泛适用之姿，将坚固与美学无缝相融，在方寸之间，为生活铺陈一层温润而笃定的底色。', en: 'With wide applicability, seamlessly blending strength and aesthetics, within a small space, laying a warm and assured foundation for life.' },
'product_card_desc.jingjie': { zh: '净无止境，以洁净之名，为空间筑起一道无形的健康屏障。', en: 'Purity without end, in the name of cleanliness, building an invisible health barrier for spaces.' },
'product_card_desc.jingdun': { zh: '以扎实的守护，让家成为真正安心的港湾。', en: 'With solid protection, making home a truly reassuring harbor.' },
'product_card_desc.guanjing': { zh: '以坚韧守护建筑的立面，用石材的质感与时间的从容，为每一栋建筑加冕历久弥新的风骨。', en: 'Guarding building facades with resilience, with the texture of stone and the serenity of time, crowning every building with timeless character.' },
// ========== 产品描述 Product Descriptions ==========
'product_desc.shaying': { zh: '砂影，一款质感卓越的涂料，以其细腻纹理与顺滑手感脱颖而出。其独特的细砂微纹效果，营造出低调淡雅的氛围，完美适配多种设计风格，在千变万化的空间中展现从容不迫的魅力。<br>砂影艺术涂料宛如一位神奇的魔法师，将自然元素巧妙融入墙面。纹理方面既有如波浪般流畅起伏的线条带来优雅动感，也有不规则的斑驳纹理，展现出随性自由的艺术气息，每一面墙都宛如一幅独一无二的艺术画作。', en: 'Shaying, a coating of exceptional quality that stands out with its delicate texture and smooth feel. Its unique fine-sand micro-texture creates an understated and elegant atmosphere, perfectly adaptable to diverse design styles, revealing a composed charm in ever-changing spaces.<br>Shaying artistic coating is like a magical wizard, cleverly blending natural elements into walls. The texture features both flowing, undulating lines that bring elegant dynamism and irregular mottled patterns that express a free-spirited artistic character — every wall is a unique work of art.' },
'product_desc.jingzuancai': { zh: '晶钻彩，以高纯度烧结砂为骨，高品质乳液为脉，交融成一面可触摸的星河，手感丝滑，温润顺畅。<br>墙面浮现细腻而圆润的颗粒感，仿佛阳光下的浅滩细沙，光滑中藏着质朴的呼吸。那些彩砂斑点并非浮于表面，而是深融于肌理，如璞玉中天然生就的晶点，纯净、和谐，无一丝突兀。它粗细有度，不花不乱，硬度卓然。每一次凝视，都见星芒隐耀，光华内敛，仿佛有万千晶钻沉入肌理。<br>晶钻彩，不止是墙面，更是空间里一首无声的矿物诗。', en: 'Jingzuancai, with high-purity sintered sand as its bone and high-quality emulsion as its vein, blends into a touchable galaxy of stars, silky smooth and warm.<br>The wall surface reveals a delicate and rounded granular feel, like fine sand on a sunlit shallow beach — smooth yet hiding a rustic breath. The colored sand specks do not merely sit on the surface but are deeply fused into the texture, like crystal points naturally born within jade — pure, harmonious, without a trace of discordance. Its texture is perfectly balanced — neither chaotic nor flat — with outstanding hardness. Every gaze reveals hidden starlight and restrained brilliance, as if thousands of crystal diamonds have sunk into the texture.<br>Jingzuancai is not merely a wall — it is a silent mineral poem within the space.' },
'product_desc.shishang': { zh: '石上艺术涂料，灵感源自自然界中岩石的万千形态，将石材的坚韧质感与艺术的灵动创意巧妙融合。它以优质天然矿物为主要原料，不添加有害化学物质，从源头保障环保健康，让家居空间更安心。通过不同的施工工艺，可呈现出仿岩石的粗糙颗粒感、平滑细腻的石面质感，或是带有自然裂隙的独特纹路，仿佛将山川巨石的灵气浓缩于墙面之上。', en: 'Shishang artistic coating draws inspiration from the myriad forms of rocks in nature, ingeniously fusing the rugged texture of stone with the fluid creativity of art. Using premium natural minerals as its primary raw material, it adds no harmful chemicals, ensuring environmental health from the source and making home spaces more reassuring. Through different application techniques, it can present the coarse granular feel of faux rock, the smooth and refined texture of a stone surface, or unique veining with natural fissures — as if condensing the spirit of mountains and boulders onto the wall.' },
'product_desc.marong': { zh: '玛绒，一种刚柔并济的肌理革新的质感类材料。<br>它巧妙融合玛曼奴的斑驳气韵与绒类的温润触感，让墙面在光影下透着恰到好处的层次——不张扬，不寡淡，似岁月晕染的旧画，斑驳得刚刚好。指尖划过，细腻绒感如晨雾拂过掌心，柔软却有骨。<br>更难得的是，它打破了绒类薄浆产品娇弱的印象。以坚韧为底色，硬度出众，无惧日常磕碰；耐擦洗的特性，让这份诗意经得起生活的摩挲与擦拭，长久如新。<br>玛绒，让温柔可触，也让坚韧可依。在方寸之间，安放既细腻又从容的绵长诗意。', en: 'Marong, a texture-innovative material that balances strength and softness.<br>It ingeniously blends the mottled character of Mamanu with the warm touch of suede, giving walls just the right layering under light and shadow — neither showy nor bland, like an old painting washed by time, mottled to perfection. Fingertips glide across to reveal a delicate suede feel, like morning mist brushing the palm — soft yet with substance.<br>More remarkably, it breaks the fragile impression of thin suede-paste products. With resilience as its foundation, it offers outstanding hardness, unafraid of daily bumps and knocks; its washable nature lets this poetry withstand the rubbing and wiping of life, staying fresh for years.<br>Marong makes gentleness touchable and resilience reliable. Within every inch, it places a delicate, composed, and enduring poetry.' },
'product_desc.baobaorong': { zh: '稚甄宝宝绒，肌肤轻绒质感，手感柔和，视觉上斑驳效果若隐若现。配备全新净化甲醛技术，持续净化室内空气，时刻守护宝宝健康，让甲醛无处可藏。通过法国室内环境检测A+认证，是严苛标准下的匠心之作。强耐磨，易修补，区别传统同类产品，产品优秀的工艺水准及原材料，带来优异修补能力与远超于绒类产品的耐磨能力，同时赋予墙面更长久的使用寿命。', en: 'Zhizhen Baobaorong features a skin-like soft velvet texture with gentle tactility and a subtly mottled visual effect. Equipped with advanced formaldehyde-purification technology, it continuously purifies indoor air, safeguarding baby\'s health at all times and leaving formaldehyde nowhere to hide. Certified by France\'s indoor environment A+ standard, it is a conscientious work under stringent criteria. Highly wear-resistant and easy to repair, it distinguishes itself from traditional similar products through superior craftsmanship and raw materials, delivering outstanding repairability and wear resistance far exceeding that of suede products, while granting walls a longer service life.' },
'product_desc.xiaoniupi': { zh: '小牛皮，为墙面覆上一层温润如脂的细腻光泽。<br>它并非夺目的亮，亦非沉寂的哑，而是恰好介于二者之间——蛋壳般柔和的光感，如晨光轻吻浅滩，如小牛皮般温润而有质感。光线流转间，墙面泛起一层细腻的、内敛的微光，不刺眼，不张扬，却让空间在不动声色中透出高级感。指尖划过，顺滑如丝绸拂过掌心，又如触摸一块上好的小牛皮，细腻而有韧性。', en: 'Xiaoniupi cloaks walls in a layer of warm, lustrous refinement.<br>It is neither blindingly bright nor deadeningly matte, but precisely between the two — an eggshell-like soft luminosity, like morning light kissing a shallow shore, warm and textured like fine calfskin. As light flows across, the wall radiates a delicate, restrained micro-glow — not glaring, not showy, yet giving the space an understated sophistication. Fingertips glide across, smooth as silk brushing the palm, like touching fine calfskin — delicate yet resilient.' },
'product_desc.xiaoyangpi': { zh: '小羊皮，并非平滑如镜，而是带着微微起伏的橘皮纹理——细密而均匀，如小羊皮般柔韧而有筋骨。光线洒落，纹理间泛起柔和的光泽，不刺眼，不暗哑，恰似晨光穿过薄纱，温润而有层次。指尖划过，顺滑中藏着细腻的凹凸感，仿佛触摸一块上好的小羊皮，柔软而不失质感。这细腻的橘纹，赋予墙面生命的呼吸感，让空间在光影流转间透出低调的雅致。光泽与纹理在此交融，不争不抢，却处处妥帖。小羊皮，以纹为韵，以光为魂，让墙面在细腻中流露不凡质感。', en: 'Xiaoyangpi is not mirror-smooth, but carries a gently undulating orange-peel texture — fine and uniform, supple yet structured like lambskin. When light falls, the texture radiates a soft glow — neither harsh nor dim, like morning light through sheer fabric, warm and layered. Fingertips glide across to reveal a subtle tactile undulation, as if touching fine lambskin — soft without losing substance. This delicate orange-peel grain gives walls a living breath, letting the space exude understated elegance through the flow of light and shadow. Luster and texture intertwine here, never competing, yet perfectly resolved. Xiaoyangpi — with texture as rhyme and light as soul — lets walls reveal extraordinary quality through delicacy.' },
'product_desc.zhiyou': { zh: '致优蛋壳光，选用的高品质乳液，如丝绸般细腻纯净，赋予漆膜柔顺的触感与恒久的韧性。哑光度拿捏得恰到好处——不刺目，不暗沉，恰似晨光轻抚蛋壳，泛起一层内敛而温润的光晕。光线游走间，墙面如凝脂般细腻，如绸缎般柔滑，空间在不动声色中透出高贵的气息。<br>这份顺滑，源自至臻的乳液与匠心调校，让墙面不再是冰冷的隔断，而成为可亲可触的艺术品。<br>致优蛋壳光，以优秀品质，让家在极简中流露不凡气度。', en: 'Zhiyou Danke Guang uses high-quality emulsion, as pure and refined as silk, granting the film a supple touch and enduring resilience. The matte level is perfectly calibrated — neither harsh nor dim, like morning light gently caressing an eggshell, raising a restrained and warm halo. As light travels across, the wall is as refined as congealed cream, as silky as satin, and the space exudes a noble aura without effort.<br>This smoothness comes from the finest emulsion and meticulous calibration, transforming walls from cold partitions into approachable, touchable artworks.<br>Zhiyou Danke Guang, with exceptional quality, lets the home reveal extraordinary character through minimalism.' },
'product_desc.chengbaohuini': { zh: '城堡灰泥，一款石灰基高定艺术涂料，它以天然石灰为骨，大理石粉为肌，在墙面上形成独一无二的斑驳纹理。每一次抹刀起落，都留下独一无二的痕迹——深与浅、疏与密、起与伏，如同大地的纹理。它的美，不是第一眼的惊艳，是日夜相对的耐看。光影游走时，纹理深浅变幻，如一幅看不倦的画。触手温润，砂砾感细腻如抚过风化的岩石。它安静、笃定、不争不抢，却把一个家的气质稳稳托住。<br>城堡灰泥，一面值得凝视的墙。', en: 'Chengbao Huini, a lime-based bespoke artistic coating, uses natural lime as its bone and marble powder as its flesh, forming unique mottled textures on walls. Every trowel stroke leaves an unrepeatable mark — deep and shallow, sparse and dense, rising and falling, like the texture of the earth itself. Its beauty is not love at first sight, but the enduring appeal of daily companionship. As light and shadow travel, the texture shifts in depth, like a painting one never tires of. To the touch it is warm, with a sandy refinement like stroking weathered rock. It is quiet, resolute, unassuming, yet holds up the character of a home with steady grace.<br>Chengbao Huini — a wall worthy of contemplation.' },
'product_desc.tuosikanahui': { zh: '掘于西北贺兰矿山的自然宝藏，经数亿年地壳岁月淬炼，在时光轮回中沉淀风骨，秉持以石制石、溯源归真的原生匠造理念。石质刚柔相宜，轻叩铿锵有声，承袭西北山石雄浑底蕴。<br>产品属性：全系天然矿物原料生态无害，严苛质检达标低碳标准；基材致密硬度优越，耐刮耐磨经久耐用；肌理自带原生自然斑驳质感，粗粝内敛的石材肌理，适配侘寂、复古、新中式等追求自然原石质感的空间。', en: 'Excavated from the natural treasure of the northwest Helan mines, tempered by hundreds of millions of years of crustal time, forging character through the cycles of epochs, upholding the native craftsmanship philosophy of stone-from-stone and returning to authenticity. The stone is suitably hard and soft, ringing clear when tapped, inheriting the rugged character of northwest mountain stone.<br>Product properties: All-natural mineral raw materials, ecologically harmless, passing stringent quality inspections for low-carbon standards; the dense substrate offers superior hardness, scratch-resistant and durable; the texture carries a native natural mottled quality, with rustic, understated stone character suitable for wabi-sabi, vintage, and new-Chinese spaces that pursue the look of natural raw stone.' },
'product_desc.xixiahunni': { zh: '西夏灰泥，以千年西夏故地的纯净石灰为源，为墙面覆上一层大漠深处的细腻记忆。天然食品级高纯度石灰粉，是这款产品的灵魂——纯净，温润。细腻丝滑，仿佛触摸被风沙打磨千年的古老岩壁。斑驳感在细颗粒间层层晕染，如同莫高窟壁画上岁月留下的浅痕，不深不浅，恰到好处，每一道纹理都是时光的轻柔落款。<br>西夏灰泥，以纯净赋墙面以细腻与斑驳的交融之美，在方寸之间，铺展西北大地的苍古与温柔。', en: 'Xixia Huini draws from the pure limestone of the ancient Xixia territory, cloaking walls in the delicate memory of the deep desert. Natural food-grade high-purity limestone powder is the soul of this product — pure, warm. Delicate and silky, as if touching ancient cliff walls polished by a thousand years of wind and sand. The mottled effect layers softly among fine particles, like the faint traces left by time on Mogao Grottoes murals — neither too deep nor too shallow, just right, every line a gentle inscription of time.<br>Xixia Huini, with purity, endows walls with the beauty of delicate and mottled fusion, spreading the ancient majesty and gentleness of the northwest land within every inch.' },
'product_desc.yajingshi': { zh: '雅晶石，以大地脉动为灵感，将时光的刻痕凝于墙面。<br>它呈现出经典的纹路效果——纹理蜿蜒游走，如雨后泥土上细腻的蜿蜒，如微缩的地脉在墙面舒展。每一道纹路都自然流畅，不重复，不刻意，仿佛大地轻柔的呼吸被瞬间定格。硬度出众，是它沉默的坚韧。漆膜致密坚实，无惧日常磕碰与刮擦，经得起岁月的反复摩挲。纯净度极好，纹理清晰而不含糊，色彩干净透彻，不掺杂一丝浑浊，让墙面在粗犷中透着清爽与利落。', en: 'Yajingshi, inspired by the pulse of the earth, condenses the marks of time onto walls.<br>It presents a classic veining effect — textures winding gracefully, like delicate meanders on rain-soaked earth, like miniature geological veins unfurling across the wall. Every line is natural and fluid, unrepeatable, unstudied, as if the earth\'s gentle breathing was frozen in an instant. Outstanding hardness is its silent resilience. The dense, solid film fears no daily bumps or scratches, withstanding the repeated rubbing of years. Its purity is excellent — veining clear and unambiguous, color clean and transparent, without a trace of turbidity, giving walls a crisp and sharp clarity amid their ruggedness.' },
'product_desc.lupirong': { zh: '鹿皮绒，以极致哑光为幕，为墙面覆上一层令人沉溺的温柔。<br>它的哑，是收敛了一切锋芒的沉静——不反射一丝喧嚣，如深夜雪落，如鹿皮轻覆，将光线温柔吞纳，只留下一片柔和纯粹。指尖划过，绒制手感极为舒服，绵密、温润、细腻，仿佛触摸初生小鹿的绒毛，每一次触碰都是一次与温柔的对话。极哑的幕布上，细微的斑驳感隐现其间，不抢眼，不刻意，如岁月轻抚过的痕迹，为这份静谧增添了一层内敛的层次与深度。正是这种不事张扬的斑驳，成就了它不动声色的高级感。', en: 'Lupirong, with extreme matte as its canvas, cloaks walls in an intoxicating gentleness.<br>Its matte quality is the stillness that has gathered all sharpness — reflecting not a single ray of clamor, like snow falling in the deep night, like deer hide gently draped, softly absorbing light, leaving only a pure softness. Fingertips glide across to reveal an extremely comfortable suede touch — dense, warm, refined, as if touching the down of a newborn fawn, every contact a dialogue with gentleness. On the extreme-matte canvas, a subtle mottled effect appears — unobtrusive, unstudied, like traces gently left by time, adding a layer of restrained depth to this tranquility. It is precisely this unassuming mottling that achieves its understated sophistication.' },
'product_desc.jipirong': { zh: '麂皮绒，一份沉静而笃定的温柔。<br>它的绒感，在细腻之上添一分风骨。指尖划过，绒感极为舒服，绵密温润，如触摸一块上好的麂皮，软而不浮，柔而有物。绒面肌理间微微可辨的层次，让每一次触碰都有回音，每一寸抚摸都觉踏实。这份略强的质感悄然浮现，不争不抢，却为墙面注入一种沉静的生命力。它以更笃定的质感纹理，在低调中透出不动声色的分量。', en: 'Jipirong, a calm and assured gentleness.<br>Its suede feel adds a touch of substance atop delicacy. Fingertips glide across to reveal an extremely comfortable suede touch — dense and warm, like stroking fine chamois leather, soft without floating, gentle yet substantial. The faintly perceptible layering within the suede texture gives every touch an echo, every caress a sense of groundedness. This slightly stronger texture emerges quietly — not competing, not grabbing — yet injects the wall with a calm vitality. With its more resolute textured grain, it conveys an unobtrusive weight through understatement.' },
'product_desc.helanshi': { zh: '贺兰石，以苍茫笔触为墙面刻下山河的筋骨。<br>采贺兰山石矿物，经匠心调校，铺陈出一派西北大地的雄浑气魄。它的颗粒度较粗，肌理更显磊落。斑驳如贺兰山岩画般沧桑，粗犷的颗粒质感似千年风沙削过的石壁，坦荡而有风骨。细微彩砂隐于其间，如矿石结晶般星星点点，赋予墙面逼真的天然石材厚重感——仿佛一整块从山体中劈出的原石，带着山风与时光的印记，每一寸都在诉说岩石的棱角与力量。石灰基的呼吸天性，让这份豪迈不失通透。贺兰石，不取巧，不迎合，为空间留下一面有风骨的墙。', en: 'Helanshi, with vast brushstrokes, carves the sinews of mountains and rivers onto walls.<br>Sourcing minerals from the Helan Mountains, through meticulous calibration, it lays out the majestic spirit of the northwest. Its granular coarseness is more pronounced, the texture more forthright. The mottling is weathered like Helan rock paintings, and the rugged granular feel resembles cliff walls carved by a millennium of wind and sand — open and characterful. Fine colored sand hides within, like mineral crystals dotted like stars, giving walls a remarkably realistic natural-stone feel — as if an entire block of raw stone were hewn from the mountain, bearing the marks of mountain wind and time, every inch telling of the edges and power of rock. The lime-based breathing nature keeps this boldness yet transparent. Helanshi — without cleverness, without compromise — leaves a wall of character in the space.' },
'product_desc.mogaohuiruotu': { zh: '莫高灰岩·若土，以大漠细尘为灵感，为墙面铺陈一层温润如丝的地质记忆。<br>它的颗粒度较细，斑驳感却更强——如风沙经年累月拂过黄土崖壁，留下层层晕染的痕迹，深浅交叠，朦胧而有层次。批刮之间，触感如丝绸滑过指尖，细腻丝滑，仿佛在抚摸被时光打磨过的古老岩壁。<br>细，却有力；柔，却有骨。石灰基的天然吐纳，让墙面保持呼吸的通透，让空间在温润中安然自在。', en: 'Mogao Limestone · Ruotu, inspired by the fine dust of the desert, lays a warm, silk-like geological memory across walls.<br>Its granular fineness is finer, yet the mottling is stronger — like wind and sand brushing yellow-earth cliffs over years, leaving layered traces of varying depth, hazy yet dimensional. During application, the touch is like silk gliding through fingers, delicate and smooth, as if stroking ancient rock walls polished by time.<br>Fine, yet powerful; soft, yet with substance. The lime-based natural breathability keeps the wall transparent and breathing, letting the space rest in warm serenity.' },
'product_desc.mogaohuiruo': { zh: '莫高灰岩·若石，以苍茫大漠为灵感，用矿物语言书写的洞石之诗。<br>天然石灰粉为基，水泥成分为骨，干粉形态中蕴藏无限塑造可能。颗粒度粗犷有力，斑驳感如莫高窟崖壁千年风蚀的痕迹，层层叠叠，深浅有致。批刮之间，自然走砂，墙面浮现出洞石独有的孔洞与纹理——那是大地呼吸的印记，是时光在岩石上雕琢的落款。<br>更因其粗粝的纹理基底，匠人之手可尽情挥洒，多种夸张效果皆可驾驭。不拘泥于平整，不妥协于规矩，让每一面墙都成为独一无二的地质拓片。', en: 'Mogao Limestone · Ruoshi, inspired by the vast desert, is a poem of travertine written in the language of minerals.<br>With natural limestone powder as its base and cement as its bone, the dry-powder form holds infinite shaping potential. The granular coarseness is bold and forceful, the mottling like the wind-eroded traces of Mogao Grottoes cliffs across a millennium — layered, with depth and dimension. During application, natural sand-drag occurs, and the wall surface reveals the distinctive pores and veins of travertine — the imprint of the earth\'s breathing, the inscription of time sculpted on stone.<br>Thanks to its rugged texture base, artisan hands can freely express themselves, mastering a variety of dramatic effects. Unbound by flatness, uncompromising on convention, every wall becomes a unique geological rubbing.' },
'product_desc.zhujishi': { zh: '珠玑石，取宁夏高品质天然石灰粉为基，融合大理石粉为骨，再调入细微彩砂为魂——三种矿石原料，经匠心调校而成。肌理间，斑驳恰到好处，不繁不碎，如天然岩层历经风蚀后的自然留白；颗粒质感温朴内敛，指尖划过，是石头原始的呼吸。细微彩砂隐于其中，不浮不跳，赋予墙面一种浑然天成的石材真意，仿佛这块墙面本就是从山体中切出的一整块原石。<br>珠玑石，以矿物的质朴语言，为墙面铭刻大地的记忆。方寸之间，见山，见石，见时间。', en: 'Zhujishi takes high-quality natural limestone powder from Ningxia as its base, fuses marble powder as its bone, and blends in fine colored sand as its soul — three mineral ingredients, calibrated with craftsmanship. Within the texture, the mottling is just right — neither excessive nor fragmented, like the natural blank space of rock strata after wind erosion; the granular feel is warm and understated, and fingertips gliding across sense the primal breathing of stone. Fine colored sand hides within, neither floating nor jumping, giving walls a seamlessly natural stone authenticity, as if the wall were a single block of raw stone cut from the mountain.<br>Zhujishi, in the rustic language of minerals, engraves the memory of the earth onto walls. Within every inch — see mountains, see stone, see time.' },
'product_desc.yunshu': { zh: '珠光类薄浆艺术涂料。明暗花纹在光影映射中相互交融，犹如云卷云舒，随光线、角度变化给视觉带来不同的惊喜。<br>云舒以其独特的质感和视觉效果成为墙面装饰的热门选择。它呈现出丝绒柔滑的质感，如同云朵般细腻，给人一种高贵典雅的视觉感受。云舒具有金属光泽，能在不同光线下呈现出斑驳光影，能够轻松融入各种装饰风格，营造出独特的艺术效果，满足消费者对于高品质生活的追求。', en: 'A pearl-category thin-paste artistic coating. Light and dark patterns blend in the interplay of light and shadow, like drifting clouds, bringing different visual surprises as light and angle change.<br>Yunshu, with its unique texture and visual effect, has become a popular choice for wall decoration. It presents a silky-smooth suede texture, as delicate as clouds, giving a noble and elegant visual impression. Yunshu has a metallic luster that can present mottled light and shadow under different lighting, easily integrating into various decorative styles to create a unique artistic effect, satisfying consumers\' pursuit of a high-quality life.' },
'product_desc.xingyu': { zh: '星雨，不是夺目的璀璨，而是收敛了锋芒的含蓄。哑光的墙面上，星光点点，如夜空中最远的星系，如细雨轻洒湖面的微光。扫砂工艺赋予墙面细腻的颗粒肌理，珠光隐于其间，不浮不跃，只在光线流转时，才悄然泛起一层若有若无的星芒。不耀眼，不喧哗，却在不经意的一瞥间，捕捉到那转瞬即逝的微光，如流星划过夜幕，如雨丝落入静水。', en: 'Xingyu is not blindingly brilliant, but a restrained subtlety. On the matte wall, points of starlight appear — like the farthest galaxies in the night sky, like the faint glimmer of fine rain sprinkled on a lake. The sand-sweeping technique gives the wall a delicate granular texture, with pearlescence hidden within — neither floating nor leaping, only quietly welling up a faint, almost-illusory starlight when light flows across. Not dazzling, not clamorous, yet in an accidental glance, it captures that fleeting glimmer — like a meteor streaking across the night sky, like rain threads falling into still water.' },
'product_desc.yunzhu': { zh: '蕴珠，将光芒内敛于心，为墙面沉淀一席温润的珠光梦境。它并非外放的闪耀，而是以极哑为底色，将珠光轻轻藏起。扫砂工艺赋予墙面细腻的颗粒肌理，珠光如珍珠沉入细沙，不浮于表，不跃于光，只在某个转角、某缕光线恰好经过时，才微微泛出温润的光泽——像蚌壳初启，珍珠含而不露的光芒，宁静而有风骨。<br>这份美，不止于目之所及，更经得起生活的反复触碰。耐擦洗性出众，日常的印记、岁月的痕迹，皆可轻轻拭去，让墙面日久依然如新，让蕴藏的光芒始终纯净如初。', en: 'Yunzhu holds light within, settling a warm pearlescent dream onto walls. It is not an outward brilliance, but with extreme matte as its base, gently conceals the pearlescence. The sand-sweeping technique gives the wall a delicate granular texture, and the pearlescence is like a pearl sinking into fine sand — not floating on the surface, not leaping in the light, only when a certain corner or a certain ray of light happens to pass, does it softly emanate a warm glow — like a shell just opened, the pearl\'s light, contained and unrevealed, serene yet characterful.<br>This beauty goes beyond the visible; it withstands the repeated touch of life. Outstanding washability means daily marks and the traces of time can be gently wiped away, keeping walls fresh as new over the years, and the hidden glow forever pure.' },
'product_desc.ajilisi': { zh: '阿基里斯，一款质感出众的珠光类布纹肌理艺术涂料。<br>富有立体感的布纹肌理，身经百战，与各类风格协调百搭。独特的织物般立体布纹效果，晕染出柔和高级的空间氛围，完美适配现代、极简、轻奢、中式等多元设计风格，在各式各样的空间场景中释放从容雅致的格调魅力。', en: 'Achilles, an outstanding pearl-category artistic coating with fabric-weave texture.<br>Three-dimensional fabric-weave texture, time-tested and harmoniously versatile across all styles. Its unique woven fabric-like dimensional effect paints a soft, refined spatial atmosphere, perfectly adapting to modern, minimalist, light luxury, Chinese and other diverse design styles, releasing a composed and elegant charm across all kinds of spatial scenes.' },
'product_desc.chouduan': { zh: '绸缎，新型珠光类薄浆艺术涂料。<br>明暗花纹在光影映射中相互交融，随光线、角度变化给视觉带来不同的惊喜。独特的珠光薄浆肌理，晕染出雅致高级的空间氛围，完美适配轻奢、现代、意式、极简等多元设计风格，在各类空间场景中尽显优雅灵动的格调。<br>肌理之上，既有丝料流转般柔和顺滑的明暗纹路，自带细腻华贵的珠光氛围感；又有层次变幻的明暗花纹，在不同光线与视角下呈现丰富多变的视觉层次。<br>每一面经由绸缎塑造的墙面，都如同一块独一无二的定制高级丝缎，光随影动，步步皆有新意。', en: 'Silk Satin, a new pearl-category thin-paste artistic coating.<br>Light and shade patterns blend in the interplay of light and shadow, bringing different visual surprises as light and angle change. Its unique pearlescent thin-paste texture paints an elegant, refined spatial atmosphere, perfectly adapting to light luxury, modern, Italian, minimalist and other diverse design styles, revealing elegant and灵动 character across all kinds of spaces.<br>Beneath the texture, there are silky smooth light-and-shade veins carrying a delicate, luxurious pearlescent mood, alongside layered shifting patterns that present rich visual dimensions under varying light and angles.<br>Every wall shaped by Silk Satin becomes a one-of-a-kind bespoke silk panel — light moves with shadow, and every step offers a new delight.' },
'product_desc.weiyanci': { zh: '微岩瓷，以瓷之名，为空间描绘天地墙一体的从容。<br>它可以自由延展于屋内的任意角落——墙面、地面、天花，皆可一体涂装，让空间在视觉中浑然贯通，无界无痕。<br>微岩瓷附着力强劲，如岩石扎根于墙体，牢扣不脱；硬度高而坚韧，无惧日常磕碰与磨损，经得起岁月的反复丈量；耐水性出众，潮湿环境依旧稳固如初；耐污能力卓然，生活的痕迹轻轻一拭便消散无踪，让纯净长久驻留。<br>微岩瓷，不设限，不妥协，以一体涂装的自由，打造无缝一体自由空间。', en: 'Weiyanci, in the name of porcelain, paints the composure of floor-wall integration for the space.<br>It can freely extend to any corner of the home — walls, floors, ceilings — all can be integrally coated, making the space visually seamless and boundless.<br>Weiyanci has strong adhesion, like rock rooted in the wall, gripping firmly without peeling; high hardness and resilience, unafraid of daily bumps and wear, withstanding the repeated measure of years; outstanding water resistance, remaining stable in humid environments; remarkable stain resistance, where the traces of life vanish with a gentle wipe, keeping purity for the long term.<br>Weiyanci — without limits, without compromise — with the freedom of integrated coating, creates a seamless, unified, free space.' },
'product_desc.weiyanyou': { zh: '微岩釉，为空间覆上一层坚韧而温润的铠甲。<br>轻易滚刷之间，如釉彩流淌，均匀覆盖，将旧的底色轻轻藏起，让新的质感悄然浮现。遮盖力出色，能轻松驾驭空间改色、改造等各种项目，无论是焕新还是风格重塑，皆可游刃有余。它附着力强，紧贴墙面如天生一体，不剥不落；硬度出众，无惧日常碰撞刮擦，坚韧从容。<br>微岩釉，以广泛适用之姿，将坚固与美学无缝相融，在方寸之间，为生活铺陈一层温润而笃定的底色。', en: 'Weiyanyou cloaks the space in a resilient and warm armor.<br>With easy rolling, like glaze flowing, it covers evenly, gently concealing the old base color, letting new texture quietly emerge. Outstanding coverage makes it effortlessly handle color-change and renovation projects — whether refreshing or redefining style, it navigates with ease. Its strong adhesion clings to walls as if born as one, not peeling or flaking; its outstanding hardness fears no daily bumps or scratches, resilient and composed.<br>Weiyanyou, with its wide applicability, seamlessly fuses strength and aesthetics, laying a warm and assured foundation for life within every inch.' },
'product_desc.jingjie': { zh: '净界，净无止境，以洁净之名，为空间筑起一道无形的健康屏障。它抗菌防霉，让细菌无处滋生，让霉菌无从蔓延，即使潮湿角落亦能长久保持清爽洁净。<br>这是一款回归初心的产品，不求浮华，只以扎实的守护，为家筑起一面纯净之墙。好而不贵，安而可靠，让健康与美，触手可及。', en: 'Jingjie — purity without end, in the name of cleanliness, building an invisible health barrier for the space. It is antibacterial and anti-mold, leaving bacteria nowhere to breed and mold nowhere to spread, keeping even damp corners fresh and clean for the long term.<br>This is a product that returns to original intent — not seeking flashiness, only building a wall of purity for the home through solid protection. Good yet affordable, safe yet reliable, making health and beauty within reach.' },
'product_desc.jingdun': { zh: '净盾，为家筑起一道坚韧而安心的防线。它深谙守护之道——遮盖力出色，轻轻滚涂，便可将瑕疵与旧痕悄然藏起，还墙面一片匀净无瑕。耐擦洗性出众，生活的印记、孩童的涂鸦，皆可反复擦拭而不留痕迹，墙面日久弥新。<br>更可贵的是它内在的防护之力。抗菌防霉的功能，如一道无形的屏障，抵御潮湿与霉斑的侵扰，让角落常保清爽洁净。环保配方，让每一次呼吸都安心自在。<br>净盾，以扎实的守护，让家成为真正安心的港湾。', en: 'Jingdun builds a resilient and reassuring line of defense for the home. It understands the art of protection — outstanding coverage means a gentle roll can quietly conceal blemishes and old marks, restoring the wall to a flawless, uniform surface. Outstanding washability means the marks of life and children\'s doodles can be repeatedly wiped without a trace, keeping walls fresh over the years.<br>More valuable is its inherent protective power. Antibacterial and anti-mold functions act as an invisible barrier, resisting the intrusion of damp and mildew, keeping corners fresh and clean. The eco-friendly formula makes every breath safe and at ease.<br>Jingdun, with solid protection, makes the home a truly reassuring harbor.' },
'product_desc.guanjing': { zh: '冠晶石，为建筑外墙披上一件历久弥新的石材铠甲。<br>墙面呈现逼真的天然石材质感，粗犷而沉着，仿佛将一整块山岩嵌入了建筑肌体。采用特殊乳液为基，赋予它超乎寻常的耐水韧性——长期泡水不易软化，风雨侵蚀下依然坚挺如初。硬度出众，无惧外力冲击；色彩保持性极佳，任凭日晒雨淋，色泽依旧沉稳如新。<br>冠晶石，以坚韧守护建筑的立面，用石材的质感与时间的从容，为每一栋建筑加冕历久弥新的风骨。', en: 'Guanjingshi cloaks building facades in a stone armor that grows more timeless with age.<br>The wall surface presents a remarkably realistic natural stone texture — rugged and poised, as if an entire block of mountain rock were embedded in the building\'s body. Using special emulsion as its base, it grants extraordinary water-resistant resilience — not softening even after prolonged immersion, remaining firm through wind and rain erosion. Outstanding hardness fears no external impact; excellent color retention means the hue stays composed and fresh despite sun and rain.<br>Guanjingshi, with resilience, guards the building\'s facade, and with the texture of stone and the serenity of time, crowns every building with an enduring, timeless character.' },
// ========== 品牌故事 Brand Story ==========
'story.origin_title': { zh: '品牌溯源 · 故事启章', en: 'Brand Origin · The Beginning' },
'story.origin_p1': { zh: '深耕艺术涂料行业近三十载，创始人郑冰江先生始终执着于空间美学的探索，坚守对品质与艺术的极致追求，见证了行业工业化、同质化的发展浪潮，也始终怀揣着打造本土高端美学涂料品牌的初心。', en: 'With nearly three decades in the artistic coating industry, founder Mr. Zheng Bingjiang has been dedicated to exploring spatial aesthetics, upholding the pursuit of quality and art, witnessing the wave of industrialization and homogenization, while always harboring the original aspiration of building a local high-end aesthetic coating brand.' },
'story.origin_p2': { zh: '2016年，一场惊艳的美学邂逅，开启了门内的品牌序章。郑冰江先生探访成都阿玛尼艺术公寓——全球仅两座的乔治·阿玛尼亲自操刀设计的顶级住宅之一，该建筑打破传统设计边界，将西方极简线条与东方兰草、竹影的雅致意象完美交融，诠释出"空间才是真正的奢侈品"的高阶美学理念。', en: 'In 2016, a stunning aesthetic encounter opened the prologue of MENNEI. Mr. Zheng Bingjiang visited the Armani Art Apartment in Chengdu — one of only two top residences worldwide personally designed by Giorgio Armani. The building breaks traditional design boundaries, perfectly blending Western minimalist lines with the elegant imagery of Eastern orchids and bamboo shadows, interpreting the high-end aesthetic concept that "space is the true luxury."' },
'story.origin_p3': { zh: '极简的建筑轮廓、温润的空间氛围、藏于细节的东方风骨，让郑先生深受震撼。他深刻认知：真正的空间奢华，从不是金碧辉煌的堆砌，而是流淌于方寸之间的文化底蕴与心灵安宁。', en: 'The minimalist architectural silhouette, warm spatial atmosphere, and Oriental character hidden in the details deeply moved Mr. Zheng. He deeply realized: true spatial luxury is never about gilded opulence, but about cultural heritage and peace of mind flowing within every inch of space.' },
'story.origin_highlight': { zh: '「门」，是连接内外的桥梁<br>「内」，是回归本心的归宿', en: '"Men" (Door), is the bridge connecting inside and outside<br>"Nei" (Within), is the return to one\'s true self' },
'story.overview_title': { zh: '品牌概览 · 初心立本', en: 'Brand Overview · Rooted in Purpose' },
'story.overview_tagline': { zh: '中国传统文化美学的现代演绎者', en: 'Modern Interpreter of Traditional Chinese Aesthetics' },
'story.overview_desc': { zh: '区别于一味模仿欧式、意式审美的行业品牌，门内立足中华千年文化底蕴，将传统东方美学、哲学智慧与现代家居需求、高新工艺技术深度融合，打破传统复古的刻板局限，以极简、温润、雅致的现代表达，重塑当代人居空间美学。', en: 'Different from industry brands that merely imitate European and Italian aesthetics, MENNEI is rooted in thousands of years of Chinese culture, deeply integrating traditional Oriental aesthetics and philosophical wisdom with modern home needs and advanced technology. Breaking the rigid limitations of traditional revival, we reshape contemporary residential spatial aesthetics with minimalist, warm, and elegant modern expression.' },
'story.tone_title': { zh: '品牌调性', en: 'Brand Tone' },
'story.tone_keywords': { zh: '温润 · 从容 · 雅致', en: 'Warm · Calm · Elegant' },
'story.tone_warm': { zh: '温润，源自《礼记》"温润而泽，仁也"。摒弃工业材质的冷硬棱角，以天然肌理、柔和质感赋予空间温度。', en: 'Warm, from "The Book of Rites" — "Warm and smooth, that is benevolence." Rejecting the cold edges of industrial materials, endowing spaces with warmth through natural textures and soft tactility.' },
'story.tone_calm': { zh: '从容，取自《庄子》"鯈鱼出游从容，是鱼之乐也"。于喧嚣尘世中打造一方静谧天地。', en: 'Calm, from "Zhuangzi" — "The minnows swim about so leisurely, that is the joy of fish." Creating a tranquil realm in the hustle and bustle of the world.' },
'story.tone_elegant': { zh: '雅致，源于《诗经》"雅者，正也"。不堆砌奢华、不盲从潮流，于简约细节中彰显高阶品味。', en: 'Elegant, from "The Book of Songs" — "The refined is the proper." No ostentatious display of luxury, no blind following of trends, revealing high-end taste through minimalist details.' },
'story.core_title': { zh: '品牌内核', en: 'Brand Essence' },
'story.core_heart_title': { zh: '善用其心', en: 'Good Heart' },
'story.core_heart_desc': { zh: '常怀感恩、利他、敬畏之心。感恩伙伴携手同行、感恩客户信任托付、感恩自然馈赠万物。以善意待人、以匠心做事，摒弃浮躁功利，坚守本心。', en: 'Always with gratitude, altruism, and reverence. Grateful for partners walking together, for clients\' trust, for nature\'s gifts of all things. Treating others with kindness, doing things with craftsmanship, rejecting impetuous utilitarianism, staying true to our original aspiration.' },
'story.core_action_title': { zh: '知行合一', en: 'Unity of Knowledge & Action' },
'story.core_action_desc': { zh: '知是初心，行是落地。门内不做空谈美学的品牌，坚持"所想即所做"，将东方美学理念百分百落地于产品、施工与服务。', en: 'Knowledge is the original aspiration, action is the implementation. MENNEI is not a brand of empty aesthetic talk — we adhere to "what we think is what we do," fully implementing Oriental aesthetic concepts in products, application, and service.' },
'story.core_value_title': { zh: '核心价值观', en: 'Core Values' },
'story.core_value_desc': { zh: '文化扎根、内生成长、共生共赢、匠心精进。深耕本土文化，坚守核心竞争力内生迭代，与客户伙伴共生长。', en: 'Cultural roots, endogenous growth, symbiotic win-win, craftsmanship refinement. Deeply rooted in local culture, adhering to endogenous iteration of core competitiveness, growing together with clients and partners.' },
'story.vision_title': { zh: '品牌愿景', en: 'Brand Vision' },
'story.vision_highlight': { zh: '让每面墙都成为东方美学的现代演绎，让家成为心灵的栖息地。', en: 'Let every wall be a modern interpretation of Oriental aesthetics, let home be the habitat of the soul.' },
'story.vision_desc': { zh: '我们不止于装饰墙面，更致力于重构当代人居生活方式。<br>以东方美学治愈都市焦虑，以健康工艺守护家人健康，<br>让每一个归家之人，都能在方寸空间里卸下疲惫、回归本真、享受自在。<br>打造精而美、有底蕴、有温度的专业艺术涂料标杆企业，成为国内东方美学艺术涂料领军品牌，<br>让东方墙面美学走进万千家庭，让传统东方智慧在现代人居中持续新生、永续传承。', en: 'We are more than wall decoration — we are committed to reshaping contemporary living.<br>Healing urban anxiety with Oriental aesthetics, protecting family health with healthy craftsmanship,<br>so that everyone returning home can let go of fatigue, return to authenticity, and enjoy freedom in their space.<br>Building a refined, beautiful, profound, and warm professional artistic coating benchmark enterprise, becoming the leading brand of Oriental aesthetic artistic coatings in China,<br>bringing Oriental wall aesthetics into thousands of homes, letting traditional Oriental wisdom continue to be reborn and inherited in modern living.' },
'story.diff_title': { zh: '品牌差异', en: 'Brand Differentiation' },
'story.diff_culture_title': { zh: '文化差异化', en: 'Cultural Differentiation' },
'story.diff_culture_desc': { zh: '深耕中华千年美学，萃取故宫、敦煌、山水、竹兰等传统东方元素，将诗词、禅意、自然风骨融入墙面设计。', en: 'Deeply rooted in thousands of years of Chinese aesthetics, extracting traditional Oriental elements from the Forbidden City, Dunhuang, landscapes, bamboo and orchids, integrating poetry, Zen, and natural character into wall design.' },
'story.diff_product_title': { zh: '产品差异化', en: 'Product Differentiation' },
'story.diff_product_desc': { zh: '复刻自然原生肌理，还原珠玑石的颗粒温润、贺兰石的粗砺质感、鹿皮绒的亲肤柔软，告别工业化墙面的冰冷单调。', en: 'Recreating natural native textures, recreating the warm granularity of Pearl Stone, the rough texture of Helan Stone, the skin-friendly softness of suede, bidding farewell to the cold monotony of industrial walls.' },
'story.diff_tech_title': { zh: '技术差异化', en: 'Technical Differentiation' },
'story.diff_tech_desc': { zh: '搭载双重核心技术，无机石灰体系传承千年古法智慧，呼吸型甲醛净化技术主动分解室内有害气体。', en: 'Equipped with dual core technologies: inorganic lime system inheriting thousand-year-old wisdom, breathing-type formaldehyde purification technology actively decomposing indoor harmful gases.' },
'story.diff_service_title': { zh: '服务差异化', en: 'Service Differentiation' },
'story.diff_service_desc': { zh: '推行"一区一店"专属服务模式，从设计选材、色彩定制、标准化施工到售后维护，全流程一对一赋能。', en: 'Implementing the "one district, one store" exclusive service model, from design and material selection, color customization, standardized application to after-sales maintenance, full-process one-on-one empowerment.' },
// ========== 色彩体系 Color System ==========
'color.banner_line1': { zh: '门内色彩从哪里来？', en: 'Where Do MENNEI Colors Come From?' },
'color.banner_line2': { zh: '土地、矿物、植物——从实物上来。', en: 'Earth, minerals, plants — derived from nature itself.' },
'color.banner_line3': { zh: '取于自然，试于墙面，成于体系', en: 'Sourced from nature, tested on walls, perfected through system' },
'color.theme_title': { zh: '门内的主题色', en: 'MENNEI Signature Colors' },
'color.caomu_huang': { zh: '草木黄', en: 'Grass & Wood Yellow' },
'color.caomu_huang_desc': { zh: '是山的野望。浅得似秋草初枯，深得似老树。<br>深浅之间，是大地在季节流转。', en: 'The wild ambition of mountains. Light like early withered autumn grass, deep like ancient trees.<br>Between shades, the earth turns through the seasons.' },
'color.bilu_hui': { zh: '壁炉灰', en: 'Fireplace Ash' },
'color.bilu_hui_desc': { zh: '是火的余烬。浅得像烟，深得似炭。<br>深浅之间，是温度从明到暗。', en: 'The embers of fire. Light like smoke, deep like charcoal.<br>Between shades, temperature fades from bright to dark.' },
'color.xingzi_bai': { zh: '杏子白', en: 'Apricot White' },
'color.xingzi_bai_desc': { zh: '是纸的素润。浅得像宣纸，深得似杏壳。<br>深浅之间，是材质内外呼吸。', en: 'The plain warmth of paper. Light like rice paper, deep like apricot shell.<br>Between shades, the material breathes from within.' },
'color.gallery_01': { zh: '色彩体系01', en: 'Color System 01' },
'color.gallery_02': { zh: '色彩体系02', en: 'Color System 02' },
'color.gallery_03': { zh: '色彩体系03', en: 'Color System 03' },
'color.gallery_04': { zh: '色彩体系04', en: 'Color System 04' },
// ========== 施工教程 Tutorials ==========
'tutorial.image_alt': { zh: '施工教程', en: 'Construction Tutorial' },
'tutorial.view_full': { zh: '点击查看完整施工教程 →', en: 'Click to View Full Tutorial →' },
// ========== 产品详情页 Product Detail ==========
'product_detail.intro_title': { zh: '产品介绍', en: 'Product Introduction' },
'product_detail.details_title': { zh: '产品详情', en: 'Product Details' },
'product_detail.suitable_style': { zh: '适宜风格', en: 'Suitable Styles' },
'product_detail.features': { zh: '特点', en: 'Features' },
'product_detail.applicable_areas': { zh: '可做区域', en: 'Applicable Areas' },
'product_detail.sample_showcase': { zh: '样册展示', en: 'Sample Showcase' },
'product_detail.view_more': { zh: '查看更多 →', en: 'Learn More →' },
'product_detail.style_all': { zh: '所有风格适用', en: 'Suitable for all styles' },
// ========== 案例详情 Case Detail ==========
'case_detail.intro': { zh: '案例简介', en: 'Case Introduction' },
'case_detail.project_info': { zh: '项目信息', en: 'Project Info' },
'case_detail.project_name': { zh: '项目名称 / ', en: 'Project / ' },
'case_detail.area': { zh: '项目面积 / ', en: 'Area / ' },
'case_detail.materials': { zh: '材料应用 / ', en: 'Materials / ' },
'case_detail.applied_areas': { zh: '应用区域：', en: 'Applied Areas: ' },
'case_detail.product': { zh: '应用产品 / ', en: 'Product / ' },
'case_detail.scope': { zh: '涂装范围 / ', en: 'Scope / ' },
'case_detail.supplier': { zh: '艺术涂料供应 / ', en: 'Coating Supplier / ' },
'case_detail.contractor': { zh: '落地工程 / ', en: 'Contractor / ' },
'case_detail.location': { zh: '地点 / ', en: 'Location / ' },
'case_detail.concept': { zh: '理念 / ', en: 'Concept / ' },
'case_detail.details': { zh: '案例详情', en: 'Case Details' },
'case_detail.gallery': { zh: '案例图集', en: 'Gallery' },
// ========== 线下门店 Stores ==========
'stores.title': { zh: '线下门店', en: 'Stores' },
'stores.intro1': { zh: '门内在全国设有多家线下体验店，欢迎您亲临体验产品质感。', en: 'MENNEI has multiple offline experience stores nationwide. Welcome to visit and experience the product texture firsthand.' },
'stores.intro2': { zh: '专业的导购团队将为您提供一对一的咨询服务，帮助您找到最适合的墙面装饰方案。', en: 'Our professional sales team provides one-on-one consulting services to help you find the most suitable wall decoration solution.' },
// ========== 产品详情信息项值 Product Detail Values ==========
'product_detail.shaying_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.shaying_features': { zh: '透气性良好，硬度高，抗刮擦，耐擦洗，施工可塑性强，环保无毒无异味', en: 'Good breathability, high hardness, scratch-resistant, washable, highly workable, eco-friendly, non-toxic, odorless' },
'product_detail.shaying_areas': { zh: '室内墙面顶面，地下室墙面，卫生间干区墙面', en: 'Interior walls and ceilings, basement walls, bathroom dry-area walls' },
'product_detail.jingzuancai_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.jingzuancai_features': { zh: '透气性良好，硬度高，抗刮擦，耐擦洗，施工可塑性强，环保无毒无异味', en: 'Good breathability, high hardness, scratch-resistant, washable, highly workable, eco-friendly, non-toxic, odorless' },
'product_detail.jingzuancai_areas': { zh: '室内墙面顶面，地下室墙面，卫生间干区墙面', en: 'Interior walls and ceilings, basement walls, bathroom dry-area walls' },
'product_detail.shishang_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.shishang_features': { zh: '透气性良好，硬度高，抗刮擦，耐擦洗，施工可塑性强，环保无毒无异味', en: 'Good breathability, high hardness, scratch-resistant, washable, highly workable, eco-friendly, non-toxic, odorless' },
'product_detail.shishang_areas': { zh: '室内墙面顶面，地下室墙面，卫生间干区墙面', en: 'Interior walls and ceilings, basement walls, bathroom dry-area walls' },
'product_detail.marong_style': { zh: '现代、新中式、侘寂风、工业风等', en: 'Modern, New Chinese, Wabi-sabi, Industrial, etc.' },
'product_detail.marong_features': { zh: '斑驳感强，耐擦洗，易清洁，触感细腻多样，环保无毒无异味', en: 'Strong mottled effect, washable, easy to clean, diverse delicate touch, eco-friendly, non-toxic, odorless' },
'product_detail.marong_areas': { zh: '室内墙面顶面，卫生间干区墙面', en: 'Interior walls and ceilings, bathroom dry-area walls' },
'product_detail.yajingshi_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.yajingshi_features': { zh: '透气性良好，硬度高，抗刮擦，耐擦洗，施工可塑性强，环保无毒无异味', en: 'Good breathability, high hardness, scratch-resistant, washable, highly workable, eco-friendly, non-toxic, odorless' },
'product_detail.yajingshi_areas': { zh: '室内墙面顶面，地下室墙面，卫生间干区墙面', en: 'Interior walls and ceilings, basement walls, bathroom dry-area walls' },
'product_detail.baobaorong_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.baobaorong_features': { zh: '触感细腻丝绒，可修复性强，净化空气分解甲醛，哑光光泽，环保无毒无异味', en: 'Fine velvet touch, highly repairable, air-purifying and formaldehyde-decomposing, matte finish, eco-friendly, non-toxic, odorless' },
'product_detail.baobaorong_areas': { zh: '室内墙面顶面', en: 'Interior walls and ceilings' },
'product_detail.xiaoniupi_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.xiaoniupi_features': { zh: '触感丝滑细腻，光泽柔和，耐擦洗，环保无毒无异味', en: 'Silky smooth touch, soft luster, washable, eco-friendly, non-toxic, odorless' },
'product_detail.xiaoniupi_areas': { zh: '室内墙面顶面', en: 'Interior walls and ceilings' },
'product_detail.xiaoyangpi_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.xiaoyangpi_features': { zh: '橘皮纹理，触感柔韧有筋骨，光泽柔和，耐擦洗，环保无毒无异味', en: 'Orange peel texture, supple and structured touch, soft luster, washable, eco-friendly, non-toxic, odorless' },
'product_detail.xiaoyangpi_areas': { zh: '室内墙面顶面', en: 'Interior walls and ceilings' },
'product_detail.zhiyou_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.zhiyou_features': { zh: '蛋壳光质感，丝滑触感，耐擦洗，抗污性强，环保无毒无异味', en: 'Eggshell finish, silky touch, washable, stain-resistant, eco-friendly, non-toxic, odorless' },
'product_detail.zhiyou_areas': { zh: '室内墙面顶面', en: 'Interior walls and ceilings' },
'product_detail.lupirong_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.lupirong_features': { zh: '鹿皮绒触感，哑光质感，耐擦洗，环保无毒无异味', en: 'Suede touch, matte finish, washable, eco-friendly, non-toxic, odorless' },
'product_detail.lupirong_areas': { zh: '室内墙面顶面', en: 'Interior walls and ceilings' },
'product_detail.jipirong_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.jipirong_features': { zh: '麂皮绒质感，绒面细腻饱满，耐擦洗，环保无毒无异味', en: 'Suede texture, fine and plump velvety surface, washable, eco-friendly, non-toxic, odorless' },
'product_detail.jipirong_areas': { zh: '室内墙面顶面', en: 'Interior walls and ceilings' },
'product_detail.chengbaohuini_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.chengbaohuini_features': { zh: '灰泥质感，1级防霉0级抗菌，VOC等有害物全未检出，环保无毒无异味，A2级防火阻燃，斑驳感适中', en: 'Stucco texture, Class 1 mold resistance, Class 0 antibacterial, zero VOC detected, eco-friendly, A2 fire rating, moderate mottled effect' },
'product_detail.chengbaohuini_areas': { zh: '室内墙面顶面，卫生间干区墙面', en: 'Interior walls and ceilings, bathroom dry-area walls' },
'product_detail.tuosikanahui_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.tuosikanahui_features': { zh: '灰泥质感，透气防霉，硬度高，耐擦洗，环保无毒无异味', en: 'Stucco texture, breathable and mold-resistant, high hardness, washable, eco-friendly, non-toxic, odorless' },
'product_detail.tuosikanahui_areas': { zh: '室内墙面顶面，卫生间干区墙面', en: 'Interior walls and ceilings, bathroom dry-area walls' },
'product_detail.xixiahunni_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.xixiahunni_features': { zh: '灰泥质感，粗砺古朴，透气防霉，硬度高，耐擦洗，环保无毒无异味', en: 'Stucco texture, rough and rustic, breathable and mold-resistant, high hardness, washable, eco-friendly, non-toxic, odorless' },
'product_detail.xixiahunni_areas': { zh: '室内墙面顶面，卫生间干区墙面', en: 'Interior walls and ceilings, bathroom dry-area walls' },
'product_detail.zhujishi_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.zhujishi_features': { zh: '矿物质感，颗粒温润，透气防霉，硬度高，耐擦洗，环保无毒无异味', en: 'Mineral texture, warm granular feel, breathable and mold-resistant, high hardness, washable, eco-friendly, non-toxic, odorless' },
'product_detail.zhujishi_areas': { zh: '室内墙面顶面，卫生间干区墙面', en: 'Interior walls and ceilings, bathroom dry-area walls' },
'product_detail.helanshi_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.helanshi_features': { zh: '矿物质感，粗犷硬朗，硬度极高，耐候性强，环保无毒无异味', en: 'Mineral texture, bold and rugged, extremely high hardness, weather-resistant, eco-friendly, non-toxic, odorless' },
'product_detail.helanshi_areas': { zh: '室内墙面顶面，卫生间干区墙面', en: 'Interior walls and ceilings, bathroom dry-area walls' },
'product_detail.mogaohuiruotu_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.mogaohuiruotu_features': { zh: '灰泥质感，土黄色调，透气防霉，硬度高，耐擦洗，环保无毒无异味', en: 'Stucco texture, earthy yellow tones, breathable and mold-resistant, high hardness, washable, eco-friendly, non-toxic, odorless' },
'product_detail.mogaohuiruotu_areas': { zh: '室内墙面顶面，卫生间干区墙面', en: 'Interior walls and ceilings, bathroom dry-area walls' },
'product_detail.mogaohuiruo_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.mogaohuiruo_features': { zh: '灰泥质感，层叠肌理，透气防霉，硬度高，耐擦洗，环保无毒无异味', en: 'Stucco texture, layered texture, breathable and mold-resistant, high hardness, washable, eco-friendly, non-toxic, odorless' },
'product_detail.mogaohuiruo_areas': { zh: '室内墙面顶面，卫生间干区墙面', en: 'Interior walls and ceilings, bathroom dry-area walls' },
'product_detail.yunshu_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.yunshu_features': { zh: '珠光质感，明暗花纹交融，光泽随角度变化，耐擦洗，环保无毒无异味', en: 'Pearlescent texture, interplay of light and dark patterns, angle-dependent luster, washable, eco-friendly, non-toxic, odorless' },
'product_detail.yunshu_areas': { zh: '室内墙面顶面', en: 'Interior walls and ceilings' },
'product_detail.xingyu_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.xingyu_features': { zh: '珠光质感，微光闪烁，光泽随角度变化，耐擦洗，环保无毒无异味', en: 'Pearlescent texture, shimmering glimmer, angle-dependent luster, washable, eco-friendly, non-toxic, odorless' },
'product_detail.xingyu_areas': { zh: '室内墙面顶面', en: 'Interior walls and ceilings' },
'product_detail.yunzhu_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.yunzhu_features': { zh: '珠光质感，内敛光泽，温润触感，耐擦洗，环保无毒无异味', en: 'Pearlescent texture, subtle luster, warm touch, washable, eco-friendly, non-toxic, odorless' },
'product_detail.yunzhu_areas': { zh: '室内墙面顶面', en: 'Interior walls and ceilings' },
'product_detail.ajilisi_style': { zh: '现代、极简、轻奢、中式等', en: 'Modern, Minimalist, Light Luxury, Chinese, etc.' },
'product_detail.ajilisi_features': { zh: '立体布纹肌理，珠光质感柔和，触感细腻，风格百搭，环保无毒无异味', en: 'Three-dimensional fabric-weave texture, soft pearlescent feel, delicate touch, versatile across styles, eco-friendly, non-toxic, odorless' },
'product_detail.ajilisi_areas': { zh: '室内墙面顶面', en: 'Interior walls and ceilings' },
'product_detail.chouduan_style': { zh: '轻奢、现代、意式、极简等', en: 'Light Luxury, Modern, Italian, Minimalist, etc.' },
'product_detail.chouduan_features': { zh: '珠光薄浆肌理，明暗花纹流转，光影层次丰富，触感柔滑，环保无毒无异味', en: 'Pearlescent thin-paste texture, flowing light-and-shade patterns, rich light-shadow layers, silky touch, eco-friendly, non-toxic, odorless' },
'product_detail.chouduan_areas': { zh: '室内墙面顶面', en: 'Interior walls and ceilings' },
'product_detail.weiyanci_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.weiyanci_features': { zh: '瓷砖般硬度，耐磨防滑，防水，无缝一体，环保无毒无异味', en: 'Tile-like hardness, wear-resistant, anti-slip, waterproof, seamless integration, eco-friendly, non-toxic, odorless' },
'product_detail.weiyanci_areas': { zh: '地面、墙面顶面', en: 'Floors, walls and ceilings' },
'product_detail.weiyanyou_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.weiyanyou_features': { zh: '坚硬质感，耐磨防滑，广泛适用，环保无毒无异味', en: 'Hard texture, wear-resistant, anti-slip, widely applicable, eco-friendly, non-toxic, odorless' },
'product_detail.weiyanyou_areas': { zh: '地面、墙面顶面', en: 'Floors, walls and ceilings' },
'product_detail.jingjie_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.jingjie_features': { zh: '零甲醛零VOC，净味配方，抗菌防霉，环保无毒无异味', en: 'Zero formaldehyde, zero VOC, odorless formula, antibacterial and mold-resistant, eco-friendly, non-toxic, odorless' },
'product_detail.jingjie_areas': { zh: '室内墙面顶面', en: 'Interior walls and ceilings' },
'product_detail.jingdun_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.jingdun_features': { zh: '耐擦洗抗污，抗菌防霉，环保无毒无异味', en: 'Washable and stain-resistant, antibacterial and mold-resistant, eco-friendly, non-toxic, odorless' },
'product_detail.jingdun_areas': { zh: '室内墙面顶面', en: 'Interior walls and ceilings' },
'product_detail.guanjing_style': { zh: '所有风格适用', en: 'Suitable for all styles' },
'product_detail.guanjing_features': { zh: '天然彩砂骨料，耐候性强，抗紫外线，自洁功能，仿真石效果', en: 'Natural colored sand aggregate, weather-resistant, UV-resistant, self-cleaning, realistic stone effect' },
'product_detail.guanjing_areas': { zh: '建筑外立面', en: 'Building exterior facades' },
// ========== 分类页卡片描述 Category Card Descriptions ==========
'product_card_desc.zhigan.shaying': { zh: '优质艺术涂料，细腻质感与顺滑触感兼备。独特砂质纹理如波浪流转，以不规则肌理营造低调优雅空间。', en: 'Premium artistic coating with delicate texture and smooth touch. Unique sand textures flow like waves, creating a低调 elegant space with irregular patterns.' },
'product_card_desc.zhigan.jingzuancai': { zh: '以高纯度烧结砂为骨，优质乳液为脉，交融成可触摸的星河。手感丝滑温润，颗粒细腻如浅滩细沙。', en: 'With high-purity sintered sand as bone and quality emulsion as vein, blending into a touchable galaxy. Silky smooth and warm, with fine particles like beach sand.' },
'product_card_desc.zhigan.shishang': { zh: '灵感源自天然岩石万千形态，以天然矿物为基材，环保无有害添加。可呈现从粗糙到光滑等多种质感效果。', en: 'Inspired by myriad forms of natural rock, using natural minerals as base material, eco-friendly with no harmful additives. Can present textures from rough to smooth.' },
'product_card_desc.zhigan.marong': { zh: '刚柔并济的肌理革新材料，融合斑驳气韵与绒类温润触感。以坚韧为底，硬度出众，耐擦洗，温柔可触。', en: 'A texture-revolutionary material blending strength and flexibility, combining mottled aura with velvet warmth. Resilient foundation, outstanding hardness, washable, gently touchable.' },
'product_card_desc.zhigan.yajingshi': { zh: '以大地脉动为灵感，将时光刻痕凝于墙面。纹理如雨后泥土蜿蜒游走，自然流畅。硬度出众，无惧磕碰。', en: 'Inspired by the pulse of the earth, condensing time marks onto walls. Textures wind like rain-soaked earth, natural and flowing. Outstanding hardness, impact-resistant.' },
'product_card_desc.shise.baobaorong': { zh: '肌肤般细腻绒感，手感柔和温润，斑驳效果若隐若现。搭载甲醛分解技术，获法国A+认证，耐用可修复。', en: 'Skin-like delicate velvet touch, soft and warm, with subtle mottled effect. Features formaldehyde decomposition technology, French A+ certified, durable and repairable.' },
'product_card_desc.shise.xiaoniupi': { zh: '为墙面覆上温润如脂的细腻光泽，如高级小牛皮般精致。光线流转间泛起内敛微光，顺滑如丝，有韧性。', en: 'Endowing walls with a warm, silky-smooth fine luster, as refined as premium calfskin. Subtle shimmer as light flows, smooth as silk, with resilience.' },
'product_card_desc.shise.xiaoyangpi': { zh: '带微微起伏的橘皮纹理，细密均匀，如小羊皮般柔韧有筋骨。光线洒落泛柔和光泽，顺滑中藏细腻凹凸感。', en: 'Gently undulating orange peel texture, fine and uniform, as supple and structured as lambskin. Soft luster under light, with delicate tactile variation beneath smoothness.' },
'product_card_desc.shise.zhiyou': { zh: '高品质乳液赋予丝般顺滑触感与恒久韧性。哑光度恰到好处，不刺目不暗沉，恰似晨光轻抚蛋壳般温润。', en: 'High-quality emulsion provides silky smooth touch and lasting resilience. Perfectly balanced matte finish, neither harsh nor dull, like morning light on an eggshell.' },
'product_card_desc.shise.lupirong': { zh: '以极致哑光为幕，为墙面覆上令人沉溺的温柔。绒制手感绵密温润，如触摸初生小鹿绒毛，低调奢华。', en: 'With ultimate matte as the canvas, endowing walls with irresistible gentleness. Dense and warm velvet touch, like stroking newborn fawn fur, understated luxury.' },
'product_card_desc.shise.jipirong': { zh: '一份沉静笃定的温柔，绒感在细腻之上添一分风骨。指尖划过绵密温润，软而不浮，柔而有物，笃定有分量。', en: 'A calm and assured gentleness, adding character to delicate velvet. Fingertips glide over dense warmth, soft yet substantial, gentle yet grounded.' },
// ========== 首页案例卡片 Homepage Case Cards ==========
'home.case.title_1': { zh: '深圳·在野南杂', en: 'Shenzhen · Zaiye Nanza' },
'home.case.desc_1': { zh: '莎安娜洞石 · 原生矿石美学', en: 'Shaanna Travertine · Native Ore Aesthetics' },
'home.case.title_2': { zh: '重庆家装案例', en: 'Chongqing Residential' },
'home.case.desc_2': { zh: '石上 · 原始温暖美学', en: 'Stone Texture · Primal Warm Aesthetics' },
'home.case.title_3': { zh: '江门海悦天玺', en: 'Jiangmen Haiyue Tianxi' },
'home.case.desc_3': { zh: '莫高灰岩 · 石桦奴 · 意式极简', en: 'Mogao Limestone · Stone Texture · Italian Minimalism' },
'home.case.title_4': { zh: '宝宝绒案例赏析', en: 'Baby Velvet Showcase' },
'home.case.desc_4': { zh: '一绒多面 · 定义高级住宅新质感', en: 'One Velvet, Many Faces · Defining Premium Residence' },
'home.case.title_5': { zh: '江门碧桂园', en: 'Jiangmen Country Garden' },
'home.case.desc_5': { zh: '现代极简 · 艺术涂料为空间叙事者', en: 'Modern Minimalism · Artistic Coatings as Spatial Storytellers' },
'home.case.title_6': { zh: '中山案例', en: 'Zhongshan Project' },
'home.case.desc_6': { zh: '精神领地 · 中山中1892', en: 'Spiritual Realm · Zhongshan 1892' },
'home.banner_alt_1': { zh: '安心之选', en: 'Peace of Mind' },
'home.main_series_alt': { zh: '主推系列新品', en: 'Featured New Products' },
'home.color_system_alt': { zh: '色彩体系图', en: 'Color System' },
'home.experience_video_alt': { zh: '线下体验邀约视频', en: 'Experience Video' },
'home.product_video_alt': { zh: '产品视频', en: 'Product Video' },
'home.color_video_alt': { zh: '色彩视频', en: 'Color Video' },
'home.cta_bg_alt': { zh: '线下体验', en: 'Offline Experience' },
// ========== 分类页卡片描述(续) Category Card Descriptions (cont.) ==========
'product_card_desc.huini.chengbaohuini': { zh: '以天然石灰为骨，大理石粉为肌，手工抹刀起落留下独一无二斑驳痕迹。零甲醛、无VOC，环保纯净。', en: 'With natural lime as bone and marble powder as flesh, hand-trowel strokes leave unique mottled marks. Zero formaldehyde, zero VOC, eco-friendly and pure.' },
'product_card_desc.huini.tuosikanahui': { zh: '原料源自意大利托斯卡纳采石场，历经亿万年天然矿藏沉淀。以天然矿物打造，低碳环保，耐久性佳。', en: 'Materials sourced from Italian Tuscan quarries, tempered by billions of years of natural mineral deposits. Crafted from natural minerals, low-carbon, eco-friendly, and highly durable.' },
'product_card_desc.huini.xixiahunni': { zh: '以千年西夏故地纯净石灰为源，食品级高纯度石灰粉。细腻丝滑如古老岩壁，斑驳如壁画般岁月痕迹。', en: 'Sourced from pure lime of the ancient Xixia land, food-grade high-purity lime powder. Silky smooth as ancient rock walls, mottled like the traces of time on murals.' },
'product_card_desc.huini.zhujishi': { zh: '取宁夏高品质天然石灰粉为基，大理石粉为骨，细微彩砂为魂。斑驳恰到好处，颗粒温朴，铭刻大地记忆。', en: 'Using Ningxia high-quality natural lime powder as base, marble powder as bone, fine colored sand as soul. Perfectly mottled, warm granular texture, engraving earth memory.' },
'product_card_desc.huini.helanshi': { zh: '采贺兰山石矿物，以苍茫笔触为墙面刻下山河筋骨。颗粒较粗，肌理磊落，斑驳如岩画般沧桑而粗犷。', en: 'Sourcing Helan Mountain stone minerals, etching mountain character onto walls with bold strokes. Coarser particles, bold texture, mottled like weathered rock paintings.' },
'product_card_desc.huini.mogaohuiruotu': { zh: '以大漠细尘为灵感，颗粒细而斑驳感强。如风沙经年拂过黄土崖壁，层层晕染，触感如丝绸，细腻有骨。', en: 'Inspired by fine desert dust, fine particles with strong mottled effect. Like wind-blown sand on loess cliffs over years, layered and diffused, silky touch with substance.' },
'product_card_desc.huini.mogaohuiruo': { zh: '以苍茫大漠为灵感，天然石灰粉为基，水泥成分为骨。颗粒粗犷，斑驳如崖壁风蚀痕迹，浮现洞石纹理。', en: 'Inspired by vast deserts, natural lime powder as base, cement components as bone. Bold particles, mottled like wind-eroded cliff traces, emerging travertine texture.' },
'product_card_desc.zhuguang.yunshu': { zh: '明暗花纹在光影映射中交融，犹如云卷云舒。丝柔质感如云朵般细腻，具金属光泽，不同光线下斑驳流转。', en: 'Light and dark patterns blend in light and shadow, like drifting clouds. Silky texture as delicate as clouds, metallic luster, mottled flow under different lighting.' },
'product_card_desc.zhuguang.xingyu': { zh: '不是夺目的璀璨，而是收敛锋芒的含蓄。扫砂工艺赋予细腻颗粒肌理，珠光隐于其间，泛起若有若无星芒。', en: 'Not dazzling brilliance, but restrained subtlety. Sand-sweeping process creates fine granular texture, pearlescence hidden within, shimmering with faint starlight.' },
'product_card_desc.zhuguang.yunzhu': { zh: '将光芒内敛于心，以极哑为底色将珠光藏起。扫砂工艺赋予细腻颗粒肌理，珠光沉入细砂，泛温润光泽。', en: 'Holding light within, using ultra-matte as base to conceal pearlescence. Sand-sweeping process creates fine granular texture, pearl sinking into fine sand, warm luster.' },
'product_card_desc.zhuguang.ajilisi': { zh: '立体布纹肌理自带珠光，织物般的层次在光影下舒展，适配现代、极简、轻奢、中式等多元风格。', en: 'Three-dimensional fabric-weave texture with built-in pearlescence, unfolding like a woven layer under light and shadow, adaptable to modern, minimalist, light luxury, Chinese and other styles.' },
'product_card_desc.zhuguang.chouduan': { zh: '珠光薄浆肌理明暗交织，光影流转间呈现丝绸般的柔顺光泽，适配轻奢、现代、意式、极简风格。', en: 'Pearlescent thin-paste texture with interwoven light and shade, presenting silk-like soft luster under flowing light and shadow, adaptable to light luxury, modern, Italian and minimalist styles.' },
'product_card_desc.diqiangyiti.weiyanci': { zh: '以瓷之名，为空间描绘天地墙一体的从容。可延展于墙面、地面、天花，一体涂装。硬度高，耐水耐污。', en: 'In the name of porcelain, painting the composure of unified floor-wall for spaces. Extends to walls, floors, ceilings as one coating. High hardness, water and stain resistant.' },
'product_card_desc.diqiangyiti.weiyanyou': { zh: '为空间覆上坚韧温润的铠甲。滚刷间如釉彩流淌，遮盖力出色，附着力强。硬度出众，无惧刮擦，坚固相融。', en: 'Endowing spaces with resilient and warm armor. Flows like glaze during rolling, excellent coverage, strong adhesion. Outstanding hardness, scratch-resistant, solid and fused.' },
'product_card_desc.rujiaoqi.jingjie': { zh: '净无止境，以洁净之名为空间筑起无形健康屏障。抗菌防霉，让细菌无处滋生，潮湿角落亦能保持清爽洁净。', en: 'Endless purity, building an invisible health barrier in the name of cleanliness. Antibacterial and mold-resistant, leaving bacteria nowhere to grow, keeping damp corners fresh and clean.' },
'product_card_desc.rujiaoqi.jingdun': { zh: '为家筑起坚韧安心的防线。遮盖力出色，耐擦洗出众，生活印记与孩童涂鸦皆可反复擦拭不留痕。抗菌防霉。', en: 'Building a resilient and reassuring defense for home. Excellent coverage, outstanding washability, life marks and children doodles can be wiped repeatedly without traces. Antibacterial and mold-resistant.' },
'product_card_desc.waiqiang.guanjing': { zh: '为建筑外墙披上历久弥新的石材铠甲。逼真天然石材质感，粗犷沉着。耐水性超凡，风雨中依然坚挺。', en: 'Clothing exterior walls with lasting stone armor. Realistic natural stone texture, bold and composed. Extraordinary water resistance, standing firm through wind and rain.' },
// ========== 案例详情翻译 Case Detail Translations ==========
'case_detail.case1.details': { zh: '在野南杂的品牌核心理念，从其一脉相承的标志性原生矿石瓶盖就可见一斑。为了将这种"矿石、原生、自然"的野性之美从产品延续到整个空间，我们选用了门内莎安娜洞石。这种涂料区别于市面上平滑的微水泥，它自带天然洞石特有的微孔肌理与斑驳的流纹，触感既有岩石的粗粝，又不失温润的呼吸感。', en: 'The brand concept of Zaiye Nanza is evident from its iconic native ore bottle cap. To extend this "ore, native, natural" wild beauty from products to the entire space, we chose MENNEI Shaanna Travertine. Unlike smooth micro-cement on the market, it features natural travertine micro-pore textures and mottled flow patterns, offering both the ruggedness of rock and a warm, breathing quality.' },
'case_detail.case1.area': { zh: '约500m²', en: 'Approx. 500m²' },
'case_detail.case1.material': { zh: '莎安娜洞石艺术涂料', en: 'Shaanna Travertine artistic coating' },
'case_detail.case1.scope': { zh: '墙面(含造型壁龛)、天花板、定制展柜/吧台', en: 'Walls (including niches), ceilings, custom display cabinets/bar counters' },
'case_detail.case1.supplier': { zh: '门内艺术涂料', en: 'MENNEI Artistic Coatings' },
'case_detail.case2.details': { zh: '屋主是一位小红书博主，热爱植物、音乐与真实的生活。没有繁复的硬装，全屋大面积使用了门内艺术涂料——石上，配合涂装的特殊手法。这种带有天然粗粝感和颗粒感的材质，没有刻意追求光滑，反而在光影流转中，呈现出一种原始、温暖、且极具生命力的美学。', en: 'The homeowner is a lifestyle blogger who loves plants, music, and authentic living. Without elaborate hard finishes, the entire house extensively uses MENNEI Stone Texture artistic coating with special application techniques. This material with natural roughness and granular texture does not pursue smoothness, but instead presents a primal, warm, and vibrant aesthetic in the interplay of light and shadow.' },
'case_detail.case2.material': { zh: '石上', en: 'Stone Texture' },
'case_detail.case2.scope': { zh: '全屋', en: 'Entire house' },
'case_detail.case2.supplier': { zh: '门内艺术涂料', en: 'MENNEI Artistic Coatings' },
'case_detail.case3.details': { zh: '真正的豪宅，从不靠堆砌，而靠骨相。在这套复式挑高的江景"四代宅"中，艺术涂料不再是配角，而是空间的绝对主角。设计师彻底摒弃了复杂的造型，以门内艺术涂料为笔，用奶白色的莫高灰岩与石桦奴两种灰泥，勾勒出一个极简、克制且充满呼吸感的空间。', en: 'True luxury never relies on accumulation, but on character. In this duplex riverside "four-generation residence," artistic coatings are no longer supporting players but the absolute protagonists of the space. The designer completely abandoned complex modeling, using MENNEI artistic coatings as a brush, with ivory-white Mogao Limestone and Stone Texture stucco to outline a minimalist, restrained, and breathing space.' },
'case_detail.case3.project_name': { zh: '江门·海悦天玺四代宅', en: 'Jiangmen · Haiyue Tianxi Four-Generation Residence' },
'case_detail.case3.area': { zh: '约500m²', en: 'Approx. 500m²' },
'case_detail.case3.contractor': { zh: '门内江门经销商 马总', en: 'MENNEI Jiangmen Dealer · Mr. Ma' },
'case_detail.case3.mat1_name': { zh: '莫高灰岩', en: 'Mogao Limestone' },
'case_detail.case3.mat1_areas': { zh: '墙面，柜面', en: 'Walls, cabinet surfaces' },
'case_detail.case3.mat2_name': { zh: '石桦奴', en: 'Stone Texture' },
'case_detail.case3.mat2_areas': { zh: '墙面', en: 'Walls' },
'case_detail.case3.mat3_name': { zh: '八爪鱼底漆', en: 'Octopus Primer' },
'case_detail.case3.mat3_areas': { zh: '扶手，岩台', en: 'Handrails, stone platforms' },
'case_detail.case3.mat4_name': { zh: '微岩釉', en: 'Micro Rock Glaze' },
'case_detail.case3.mat4_areas': { zh: '扶手，岩台', en: 'Handrails, stone platforms' },
'case_detail.case4.details': { zh: '涂料不仅是色彩的载体，更是空间情绪的传递者，门内艺术涂料深耕绒面质感领域，宝宝绒以其独特的微粒绒面结构，实现了视觉上的均匀柔和与触觉上的亲肤温润。它以其极强的风格包容性，成为当下高阶家居设计的常选肌理。', en: 'Coatings are not merely carriers of color but transmitters of spatial emotion. MENNEI artistic coatings deeply cultivates the velvet texture field. Baby Velvet, with its unique micro-particle velvet structure, achieves visual uniformity and softness with tactile skin-friendly warmth. Its exceptional style versatility makes it a popular texture for high-end residential design.' },
'case_detail.case5.details': { zh: '艺术涂料，让材料的选择，比造型的创造更能定义空间的本质。在这栋现代别墅的设计中，艺术涂料成为空间的"第一叙述者"，用肌理、光影与触感，构建一场沉浸式的居住体验。当现代设计的理性骨架，邂逅艺术涂料的感性肌理，一个既静谧又富有张力的家便诞生了。', en: 'Artistic coatings make material selection more defining of spatial essence than form creation. In this modern villa design, artistic coatings become the "primary narrator" of the space, using texture, light, and touch to construct an immersive living experience. When the rational framework of modern design meets the感性 texture of artistic coatings, a home both tranquil and dynamic is born.' },
'case_detail.case5.project_name': { zh: '江门·碧桂园别墅项目', en: 'Jiangmen · Country Garden Villa Project' },
'case_detail.case5.area': { zh: '约3000m²', en: 'Approx. 3000m²' },
'case_detail.case5.contractor': { zh: '门内江门经销商 马总', en: 'MENNEI Jiangmen Dealer · Mr. Ma' },
'case_detail.case5.mat1_name': { zh: '莫高灰岩', en: 'Mogao Limestone' },
'case_detail.case5.mat1_areas': { zh: '墙面', en: 'Walls' },
'case_detail.case5.mat2_name': { zh: '八爪鱼底漆', en: 'Octopus Primer' },
'case_detail.case5.mat2_areas': { zh: '钢制扶手', en: 'Steel handrails' },
'case_detail.case5.mat3_name': { zh: '云舒', en: 'Cloud Drift' },
'case_detail.case5.mat3_areas': { zh: '钢制扶手', en: 'Steel handrails' },
'case_detail.case5.mat4_name': { zh: '珠玑石', en: 'Pearl Stone' },
'case_detail.case5.mat4_areas': { zh: '墙面、天花', en: 'Walls, ceilings' },
'case_detail.case5.mat5_name': { zh: '玛曼奴', en: 'Mamannu' },
'case_detail.case5.mat5_areas': { zh: '墙面、天花', en: 'Walls, ceilings' },
'case_detail.case5.mat6_name': { zh: '外墙奥丽莎', en: 'Exterior Orissa' },
'case_detail.case5.mat6_areas': { zh: '外墙', en: 'Exterior walls' },
'case_detail.case6.details': { zh: '在广东中山市中心，一座历经风雨的古碉楼静静伫立，历史在青砖间留下深深浅浅的印记。\n大隐隐于市，刘卫军室内建筑师事务所的工作室便坐落于此——一个新旧交织的独特空间。', en: 'In the center of Zhongshan, Guangdong, an ancient watchtower stands quietly, weathered by time, with history leaving deep and shallow marks in its blue bricks.\nHidden in plain sight, the studio of Liu Weijun Interior Architects is located here — a unique space where old and new intertwine.' },
'case_detail.case6.project_name': { zh: '中山中1892建筑设计事务所', en: 'Zhongshan 1892 Architectural Design Studio' },
'case_detail.case6.supplier': { zh: '门内艺术涂料', en: 'MENNEI Artistic Coatings' },
'case_detail.case6.location': { zh: '广东中山', en: 'Zhongshan, Guangdong' },
'case_detail.case6.concept': { zh: '城市更新 ｜ 痕迹保留 ｜ 民俗共生 ｜ 自然烟火', en: 'Urban Renewal | Trace Preservation | Folk Coexistence | Natural Vitality' },
'case_detail.case7.details': { zh: '中古风究竟是什么？\n直译自"Mid-century Modern Style"，\n意为"世纪中期现代风格"。\n它并非简单的复古堆砌，而是在二战后的特定历史背景下，人们对温暖、稳定和积极生活渴望的实体化表达。\n这种风格的本质是现代主义的，强调"外观形式服从功能需求"，注重实用性。\n中古风乐于使用高纯度、偏暖的色调，如复古红、暗绿、宝石蓝和暖调大地色，在鲜艳中保持着一份内敛的沉稳。\n当古风从概念走向现实，墙面便从背景跃升为舞台的主角。它必须需要承载风格的精髓，对材质、色彩和功能提出了明确而复合的要求。', en: 'What exactly is Mid-Century Modern style?\nTranslated from "Mid-century Modern Style,"\nmeaning "mid-20th century modern style."\nIt is not simple retro accumulation, but a physical expression of people\'s desire for warmth, stability, and positive living in the specific historical context after World War II.\nThe essence of this style is modernist, emphasizing "form follows function," focusing on practicality.\nMid-century style favors high-purity, warm tones such as retro red, dark green, sapphire blue, and warm earth tones, maintaining a restrained composure within vividness.\nWhen mid-century style moves from concept to reality, walls transcend from background to stage protagonist. They must carry the essence of the style, placing clear and composite demands on materials, colors, and function.' },
'case_detail.case8.details': { zh: '宋代是中国文化史上的高峰。 宋式美学，也是中国审美史上的高峰，它不追求唐代的华丽张扬，而是崇尚"大道至简"的哲学理念。\n其特征可概括为：简净素雅 | 自然意趣 | 肌理质感 | 意境留白\n简净素雅： 宋代艺术以"淡"为美，色彩追求柔和、含蓄，多用天青、月白、米黄、墨色等，低饱和度色调，营造宁静悠远的氛围。\n自然意趣： 宋代文人倡导"格物致知"，崇尚自然本真。山水画中的留白、瓷器中的冰裂纹、园林中的借景，皆是对自然之美的提炼与再造。\n肌理质感： 宋人注重材质本身的纹理与质感，如官窑瓷器的温润、宣纸的绵韧、丝绸的细腻，在细微处见匠心。\n意境留白： 不过度填充，以空间留白赋予想象余地，体现"少即是多"的审美智慧，追求精神上的丰盈而非物质堆砌。', en: 'The Song Dynasty was a peak in Chinese cultural history. Song Dynasty aesthetics is also a peak in Chinese aesthetic history. It does not pursue the ornate display of the Tang Dynasty, but champions the philosophy of "the greatest truths are the simplest."\nIts characteristics can be summarized as: Pure Elegance | Natural Interest | Textural Quality | Artistic Emptiness\nPure Elegance: Song Dynasty art values "subtlety," pursuing soft, understated colors — sky blue, moon white, rice yellow, ink black — low-saturation tones creating a tranquil, distant atmosphere.\nNatural Interest: Song Dynasty literati advocated "investigating things to attain knowledge," revering natural authenticity. The negative space in landscape paintings, the ice-crackle patterns in porcelain, the borrowed scenery in gardens — all are distillations and recreations of natural beauty.\nTextural Quality: Song people valued the inherent texture and quality of materials — the warmth of imperial kiln porcelain, the resilience of rice paper, the delicacy of silk — revealing craftsmanship in subtle details.\nArtistic Emptiness: Not over-filling, using spatial emptiness to give room for imagination, embodying the aesthetic wisdom of "less is more," pursuing spiritual richness rather than material accumulation.' },
'case_detail.case9.details': { zh: '因表面具有天然形成的多孔结构而得名。\n以其独特的孔洞结构和温润质感，成为建筑与设计史上的经典材料。\n艺术涂料对洞石的逼真再现，不仅保留了其自然肌理，更赋予空间无限的设计可能性。\n——从原始粗犷到现代奢华，洞石效果都能完美驾驭。', en: 'Named for its naturally formed porous surface structure.\nWith its unique pore structure and warm quality, it has become a classic material in architectural and design history.\nThe faithful reproduction of travertine by artistic coatings not only preserves its natural texture but also endows spaces with infinite design possibilities.\n— From primal ruggedness to modern luxury, travertine effects can be perfectly mastered.' },
'case_detail.case10.details': { zh: '液态金属的美学，源于其对"光"的演绎。它不仅是反射光线，更是捕捉、引导和演绎光线。这种材质天生带有一种张力，既能诠释未来主义的前卫，也能承载复古风格的厚重。\n\n液态金属艺术涂料，不仅是墙面材料，更是设计师手中的光影画笔。\n从光滑如镜的未来感，到粗犷自然的洞石肌理；\n从变幻莫测的炫彩霓虹，到韵味深长的复古鎏金，\n它以其无限的包容性和表现力，为每一个空间量身定做独特的灵魂。', en: 'The aesthetics of liquid metal originate from its interpretation of "light." It does not merely reflect light but captures, guides, and interprets it. This material inherently carries a tension, capable of expressing both futuristic avant-garde and retro-style depth.\n\nLiquid metal artistic coating is not merely a wall material but a light-and-shadow brush in the designer\'s hand.\nFrom mirror-smooth futuristic feel to rugged natural travertine texture;\nFrom unpredictable iridescent neon to deeply evocative retro gilded gold,\nWith its infinite versatility and expressiveness, it tailors a unique soul for every space.' },
'case_detail.case11.details': { zh: '这是一个设计师为自己打造的办公空间。\n整个场所以黑与灰为基调，不设多余装饰，让材质本身成为表达的语言。前卫、冷峻、干净利落。\n——这里是他们日常工作的场域，更是设计理念最直接的投射。\n从室内到户外，空间气质一以贯之：粗犷中见细腻，工业感中藏着温度。', en: 'This is an office space created by a designer for themselves.\nThe entire space is grounded in black and gray, without superfluous decoration, letting materials themselves become the language of expression. Avant-garde, cold, crisp and clean.\n— This is their daily workspace, and the most direct projection of their design philosophy.\nFrom interior to exterior, the spatial character is consistent: finding delicacy within roughness, warmth hidden within industrial feel.' },
'case_detail.case12.details': { zh: '门内在多年产品使用中，积累到大量石灰基玛曼奴的使用经验，总结了大量石灰基材料的利弊，并决心做出改进。\n随着市场变化，简约、素雅的追求愈发强烈。石灰基材料斑驳强烈，不耐潮湿，施工性能一般等等一系列问题需要解决。区别于传统玛曼奴，门内大胆改进，研发出树脂类质感玛曼奴。它的轻微斑驳感，更稳定的性质与更易落地的表现，让玛曼奴收到众多好评。\n门内·玛曼奴的纹理既有粗犷的一面，如略带斑驳的花色和淳朴自然的颗粒感，在光线的照射下能够产生独特的光影效果，使得墙面看起来更加立体、生动；也有细腻的一面，如柔和的抛光效果和光滑的触感，营造出一种温馨、舒适的居住氛围。', en: 'In years of product application, MENNEI has accumulated extensive experience with lime-based Mamanu, identified the pros and cons of lime-based materials, and resolved to innovate.\nAs market trends shift toward minimalism and understated elegance, issues with lime-based materials—strong mottling, moisture sensitivity, and average workability—need to be addressed. Distinct from traditional Mamanu, MENNEI boldly innovated by developing a resin-based textured Mamanu. Its subtle mottling, more stable properties, and easier application have earned Mamanu widespread acclaim.\nThe texture of MENNEI Mamanu has both a rugged side—slightly mottled patterns and earthy grain that create unique light-and-shadow effects under illumination, making walls appear more three-dimensional and vivid—and a refined side—gentle polishing effects and a smooth touch that create a warm, cozy living atmosphere.' },
// ========== 通用 Common ==========
'common.back_to_top': { zh: '返回顶部', en: 'Back to Top' },
'common.experience_video': { zh: '线下体验邀约视频', en: 'Experience Video' },
'stub.under_construction': { zh: '该页面正在建设中，敬请期待。', en: 'This page is under construction. Stay tuned.' },
'stub.back_home': { zh: '返回首页', en: 'Back to Home' },
};
// 当前语言 Current language
var currentLang = 'zh';
// 初始化 Initialize
function init() {
// 从 localStorage 读取语言设置
var savedLang = localStorage.getItem('mennei_lang');
if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
currentLang = savedLang;
}
// 应用语言
applyLanguage(currentLang);
// 绑定切换按钮事件
bindSwitchEvents();
}
// 应用语言 Apply language
function applyLanguage(lang) {
currentLang = lang;
localStorage.setItem('mennei_lang', lang);
// 设置 html lang 属性
document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
// 添加/移除 body 上的语言类名（用于 CSS 适配）
if (lang === 'en') {
document.body.classList.add('lang-en');
document.body.classList.remove('lang-zh');
} else {
document.body.classList.add('lang-zh');
document.body.classList.remove('lang-en');
}
// 翻译所有带 data-i18n 属性的元素
translateElements();
// 更新切换按钮状态
updateSwitchButtons();
// 更新页面 title
translateTitle();
// 触发语言切换事件，通知其他模块
document.dispatchEvent(new CustomEvent('mennei-lang-changed', {
detail: { lang: currentLang }
}));
}
// 翻译元素 Translate elements
function translateElements() {
var elements = document.querySelectorAll('[data-i18n]');
elements.forEach(function(el) {
var key = el.getAttribute('data-i18n');
var translation = translations[key];
if (translation && translation[currentLang]) {
// 检查是否有 HTML 内容
if (el.hasAttribute('data-i18n-html')) {
el.innerHTML = translation[currentLang].replace(/\n/g, '<br>');
} else {
el.textContent = translation[currentLang];
}
}
});
// 翻译 placeholder
var placeholders = document.querySelectorAll('[data-i18n-placeholder]');
placeholders.forEach(function(el) {
var key = el.getAttribute('data-i18n-placeholder');
var translation = translations[key];
if (translation && translation[currentLang]) {
el.placeholder = translation[currentLang];
}
});
// 翻译 title 属性 (tooltip)
var titles = document.querySelectorAll('[data-i18n-title]');
titles.forEach(function(el) {
var key = el.getAttribute('data-i18n-title');
var translation = translations[key];
if (translation && translation[currentLang]) {
el.title = translation[currentLang];
}
});
// 翻译 alt 属性
var alts = document.querySelectorAll('[data-i18n-alt]');
alts.forEach(function(el) {
var key = el.getAttribute('data-i18n-alt');
var translation = translations[key];
if (translation && translation[currentLang]) {
el.alt = translation[currentLang];
}
});
}
// 更新页面 title
function translateTitle() {
var titleKey = document.querySelector('meta[data-i18n-title-key]');
if (titleKey) {
var key = titleKey.getAttribute('data-i18n-title-key');
var translation = translations[key];
if (translation && translation[currentLang]) {
document.title = translation[currentLang];
}
}
}
// 更新切换按钮状态 Update switch button states
function updateSwitchButtons() {
var isZh = currentLang === 'zh';
// 桌面端
var desktopSwitch = document.querySelector('.lang-switch');
if (desktopSwitch) {
var zhSpan = desktopSwitch.querySelector('span:first-child');
var enSpan = desktopSwitch.querySelector('span:last-child');
if (zhSpan) {
zhSpan.className = isZh ? 'lang-active' : 'lang-inactive';
}
if (enSpan) {
enSpan.className = isZh ? 'lang-inactive' : 'lang-active';
}
}
// 移动端
var mobileSwitch = document.querySelector('.mobile-lang-switch');
if (mobileSwitch) {
var zhBtn = mobileSwitch.querySelector('.lang-btn:first-of-type');
var enBtn = mobileSwitch.querySelector('.lang-btn:last-of-type');
if (zhBtn) {
zhBtn.className = 'lang-btn ' + (isZh ? 'lang-active' : 'lang-inactive');
}
if (enBtn) {
enBtn.className = 'lang-btn ' + (isZh ? 'lang-inactive' : 'lang-active');
}
}
}
// 绑定切换事件 Bind switch events
function bindSwitchEvents() {
// 桌面端
var desktopSwitch = document.querySelector('.lang-switch');
if (desktopSwitch) {
var zhSpan = desktopSwitch.querySelector('span:first-child');
var enSpan = desktopSwitch.querySelector('span:last-child');
if (zhSpan) {
zhSpan.addEventListener('click', function() {
if (currentLang !== 'zh') {
applyLanguage('zh');
}
});
zhSpan.style.cursor = 'pointer';
}
if (enSpan) {
enSpan.addEventListener('click', function() {
if (currentLang !== 'en') {
applyLanguage('en');
}
});
enSpan.style.cursor = 'pointer';
}
}
// 移动端
var mobileSwitch = document.querySelector('.mobile-lang-switch');
if (mobileSwitch) {
var btns = mobileSwitch.querySelectorAll('.lang-btn');
btns.forEach(function(btn, index) {
btn.addEventListener('click', function() {
var targetLang = index === 0 ? 'zh' : 'en';
if (currentLang !== targetLang) {
applyLanguage(targetLang);
}
});
});
}
}
// 暴露公共 API Expose public API
window.MenneiI18n = {
getLang: function() { return currentLang; },
setLang: applyLanguage,
t: function(key) {
var translation = translations[key];
return translation ? translation[currentLang] : key;
},
translate: translateElements
};
// DOM 加载完成后初始化
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', init);
} else {
init();
}
})();