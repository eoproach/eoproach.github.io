
(function(){
'use strict';
const $=(s,r=document)=>r.querySelector(s);
const $$=(s,r=document)=>Array.from(r.querySelectorAll(s));

const ALL_FISH=[{"id":1,"name":"안개송어","grade":"일반","icon":"🐟","region":"안개의 섬","date":"2024.06.18","size":"12.0 cm","stars":"★☆☆☆☆","desc":"짙은 안개와 잔잔한 물길 사이를 조용히 헤엄치는 일반 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":2,"name":"은안개멸치","grade":"일반","icon":"🐟","region":"안개의 섬","date":"2024.06.18","size":"13.7 cm","stars":"★☆☆☆☆","desc":"짙은 안개와 잔잔한 물길 사이를 조용히 헤엄치는 일반 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":3,"name":"물안개잉어","grade":"일반","icon":"🐠","region":"안개의 섬","date":"2024.06.18","size":"15.5 cm","stars":"★☆☆☆☆","desc":"짙은 안개와 잔잔한 물길 사이를 조용히 헤엄치는 일반 등급 어종입니다.","icon":"🐠","type":"carp","typeLabel":"잉어류"},{"id":4,"name":"흰수염피라미","grade":"일반","icon":"🐟","region":"안개의 섬","date":"2024.06.18","size":"17.2 cm","stars":"★☆☆☆☆","desc":"짙은 안개와 잔잔한 물길 사이를 조용히 헤엄치는 일반 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":5,"name":"흐린달붕어","grade":"일반","icon":"🐠","region":"안개의 섬","date":"2024.06.18","size":"18.9 cm","stars":"★☆☆☆☆","desc":"짙은 안개와 잔잔한 물길 사이를 조용히 헤엄치는 일반 등급 어종입니다.","icon":"🐠","type":"carp","typeLabel":"잉어류"},{"id":6,"name":"안개메기","grade":"희귀","icon":"🐡","region":"안개의 섬","date":"2024.06.18","size":"39.5 cm","stars":"★★☆☆☆","desc":"짙은 안개와 잔잔한 물길 사이를 조용히 헤엄치는 희귀 등급 어종입니다.","type":"catfish","typeLabel":"메기류"},{"id":7,"name":"은빛가재","grade":"희귀","icon":"🦞","region":"안개의 섬","date":"2024.06.18","size":"42.4 cm","stars":"★★☆☆☆","desc":"짙은 안개와 잔잔한 물길 사이를 조용히 헤엄치는 희귀 등급 어종입니다.","type":"crustacean","typeLabel":"갑각류"},{"id":8,"name":"물안개농어","grade":"희귀","icon":"🐠","region":"안개의 섬","date":"2024.06.18","size":"45.3 cm","stars":"★★☆☆☆","desc":"짙은 안개와 잔잔한 물길 사이를 조용히 헤엄치는 희귀 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":9,"name":"회색지느러미","grade":"희귀","icon":"🐠","region":"안개의 섬","date":"2024.06.18","size":"48.2 cm","stars":"★★☆☆☆","desc":"짙은 안개와 잔잔한 물길 사이를 조용히 헤엄치는 희귀 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":10,"name":"안개조개","grade":"희귀","icon":"🦪","region":"안개의 섬","date":"2024.06.18","size":"51.1 cm","stars":"★★☆☆☆","desc":"짙은 안개와 잔잔한 물길 사이를 조용히 헤엄치는 희귀 등급 어종입니다.","type":"shell","typeLabel":"패류"},{"id":11,"name":"여명송어","grade":"영웅","icon":"🐟","region":"안개의 섬","date":"2024.06.18","size":"112.6 cm","stars":"★★★☆☆","desc":"짙은 안개와 잔잔한 물길 사이를 조용히 헤엄치는 영웅 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":12,"name":"운무비늘돔","grade":"영웅","icon":"🐠","region":"안개의 섬","date":"2024.06.18","size":"117.9 cm","stars":"★★★☆☆","desc":"짙은 안개와 잔잔한 물길 사이를 조용히 헤엄치는 영웅 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":13,"name":"안개장어","grade":"영웅","icon":"🐍","region":"안개의 섬","date":"2024.06.18","size":"123.2 cm","stars":"★★★☆☆","desc":"짙은 안개와 잔잔한 물길 사이를 조용히 헤엄치는 영웅 등급 어종입니다.","type":"eel","typeLabel":"장어류"},{"id":14,"name":"백야가오리","grade":"영웅","icon":"🪽","region":"안개의 섬","date":"2024.06.18","size":"128.4 cm","stars":"★★★☆☆","desc":"짙은 안개와 잔잔한 물길 사이를 조용히 헤엄치는 영웅 등급 어종입니다.","type":"ray","typeLabel":"가오리류"},{"id":15,"name":"비밀항로청어","grade":"영웅","icon":"🐟","region":"안개의 섬","date":"2024.06.18","size":"133.7 cm","stars":"★★★☆☆","desc":"짙은 안개와 잔잔한 물길 사이를 조용히 헤엄치는 영웅 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":16,"name":"몽환해마","grade":"전설","icon":"🐴","region":"안개의 섬","date":"2024.06.18","size":"315.8 cm","stars":"★★★★★","desc":"짙은 안개와 잔잔한 물길 사이를 조용히 헤엄치는 전설 등급 어종입니다.","icon":"🌊","type":"seahorse","typeLabel":"해마류"},{"id":17,"name":"안개의 수호잉어","grade":"전설","icon":"🐠","region":"안개의 섬","date":"2024.06.18","size":"326.8 cm","stars":"★★★★★","desc":"짙은 안개와 잔잔한 물길 사이를 조용히 헤엄치는 전설 등급 어종입니다.","icon":"🐠","type":"carp","typeLabel":"잉어류"},{"id":18,"name":"은월고래치","grade":"전설","icon":"🐋","region":"안개의 섬","date":"2024.06.18","size":"337.9 cm","stars":"★★★★★","desc":"짙은 안개와 잔잔한 물길 사이를 조용히 헤엄치는 전설 등급 어종입니다.","type":"whale","typeLabel":"고래류"},{"id":19,"name":"환영지느러미","grade":"전설","icon":"🐠","region":"안개의 섬","date":"2024.06.18","size":"348.9 cm","stars":"★★★★★","desc":"짙은 안개와 잔잔한 물길 사이를 조용히 헤엄치는 전설 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":20,"name":"새벽안개룡어","grade":"전설","icon":"🐉","region":"안개의 섬","date":"2024.06.18","size":"360.0 cm","stars":"★★★★★","desc":"짙은 안개와 잔잔한 물길 사이를 조용히 헤엄치는 전설 등급 어종입니다.","type":"dragon","typeLabel":"전설어"},{"id":21,"name":"월광은어","grade":"일반","icon":"🐟","region":"월광의 섬","date":"2024.06.18","size":"12.0 cm","stars":"★☆☆☆☆","desc":"달빛을 받아 비늘이 은은하게 빛나는 일반 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":22,"name":"달비늘송어","grade":"일반","icon":"🐟","region":"월광의 섬","date":"2024.06.18","size":"13.7 cm","stars":"★☆☆☆☆","desc":"달빛을 받아 비늘이 은은하게 빛나는 일반 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":23,"name":"은월참돔","grade":"일반","icon":"🐠","region":"월광의 섬","date":"2024.06.18","size":"15.5 cm","stars":"★☆☆☆☆","desc":"달빛을 받아 비늘이 은은하게 빛나는 일반 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":24,"name":"초승달멸치","grade":"일반","icon":"🐟","region":"월광의 섬","date":"2024.06.18","size":"17.2 cm","stars":"★☆☆☆☆","desc":"달빛을 받아 비늘이 은은하게 빛나는 일반 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":25,"name":"달그림자농어","grade":"일반","icon":"🐠","region":"월광의 섬","date":"2024.06.18","size":"18.9 cm","stars":"★☆☆☆☆","desc":"달빛을 받아 비늘이 은은하게 빛나는 일반 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":26,"name":"월야복어","grade":"희귀","icon":"🐡","region":"월광의 섬","date":"2024.06.18","size":"39.5 cm","stars":"★★☆☆☆","desc":"달빛을 받아 비늘이 은은하게 빛나는 희귀 등급 어종입니다.","type":"puffer","typeLabel":"복어류"},{"id":27,"name":"달빛해마","grade":"희귀","icon":"🐴","region":"월광의 섬","date":"2024.06.18","size":"42.4 cm","stars":"★★☆☆☆","desc":"달빛을 받아 비늘이 은은하게 빛나는 희귀 등급 어종입니다.","icon":"🌊","type":"seahorse","typeLabel":"해마류"},{"id":28,"name":"은하조개","grade":"희귀","icon":"🦪","region":"월광의 섬","date":"2024.06.18","size":"45.3 cm","stars":"★★☆☆☆","desc":"달빛을 받아 비늘이 은은하게 빛나는 희귀 등급 어종입니다.","type":"shell","typeLabel":"패류"},{"id":29,"name":"월륜장어","grade":"희귀","icon":"🐍","region":"월광의 섬","date":"2024.06.18","size":"48.2 cm","stars":"★★☆☆☆","desc":"달빛을 받아 비늘이 은은하게 빛나는 희귀 등급 어종입니다.","type":"eel","typeLabel":"장어류"},{"id":30,"name":"밤빛가자미","grade":"희귀","icon":"🐠","region":"월광의 섬","date":"2024.06.18","size":"51.1 cm","stars":"★★☆☆☆","desc":"달빛을 받아 비늘이 은은하게 빛나는 희귀 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":31,"name":"청월가오리","grade":"영웅","icon":"🪽","region":"월광의 섬","date":"2024.06.18","size":"112.6 cm","stars":"★★★☆☆","desc":"달빛을 받아 비늘이 은은하게 빛나는 영웅 등급 어종입니다.","type":"ray","typeLabel":"가오리류"},{"id":32,"name":"만월도미","grade":"영웅","icon":"🐠","region":"월광의 섬","date":"2024.06.18","size":"117.9 cm","stars":"★★★☆☆","desc":"달빛을 받아 비늘이 은은하게 빛나는 영웅 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":33,"name":"월식청새치","grade":"영웅","icon":"🐠","region":"월광의 섬","date":"2024.06.18","size":"123.2 cm","stars":"★★★☆☆","desc":"달빛을 받아 비늘이 은은하게 빛나는 영웅 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":34,"name":"은빛달고래","grade":"영웅","icon":"🐋","region":"월광의 섬","date":"2024.06.18","size":"128.4 cm","stars":"★★★☆☆","desc":"달빛을 받아 비늘이 은은하게 빛나는 영웅 등급 어종입니다.","type":"whale","typeLabel":"고래류"},{"id":35,"name":"별달문어","grade":"영웅","icon":"🐙","region":"월광의 섬","date":"2024.06.18","size":"133.7 cm","stars":"★★★☆☆","desc":"달빛을 받아 비늘이 은은하게 빛나는 영웅 등급 어종입니다.","type":"octopus","typeLabel":"두족류"},{"id":36,"name":"월광의 왕송어","grade":"전설","icon":"🐟","region":"월광의 섬","date":"2024.06.18","size":"315.8 cm","stars":"★★★★★","desc":"달빛을 받아 비늘이 은은하게 빛나는 전설 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":37,"name":"달의 사자해룡","grade":"전설","icon":"🐉","region":"월광의 섬","date":"2024.06.18","size":"326.8 cm","stars":"★★★★★","desc":"달빛을 받아 비늘이 은은하게 빛나는 전설 등급 어종입니다.","type":"dragon","typeLabel":"전설어"},{"id":38,"name":"만월수호고래","grade":"전설","icon":"🐋","region":"월광의 섬","date":"2024.06.18","size":"337.9 cm","stars":"★★★★★","desc":"달빛을 받아 비늘이 은은하게 빛나는 전설 등급 어종입니다.","type":"whale","typeLabel":"고래류"},{"id":39,"name":"은월 레비아탄","grade":"전설","icon":"🐍","region":"월광의 섬","date":"2024.06.18","size":"348.9 cm","stars":"★★★★★","desc":"달빛을 받아 비늘이 은은하게 빛나는 전설 등급 어종입니다.","type":"eel","typeLabel":"장어류"},{"id":40,"name":"달그림자 군주어","grade":"전설","icon":"🐟","region":"월광의 섬","date":"2024.06.18","size":"360.0 cm","stars":"★★★★★","desc":"달빛을 받아 비늘이 은은하게 빛나는 전설 등급 어종입니다.","type":"fish","typeLabel":"일반어류"},{"id":41,"name":"에메랄드카프","grade":"일반","icon":"🐠","region":"에메랄드 호수","date":"2024.06.18","size":"12.0 cm","stars":"★☆☆☆☆","desc":"맑은 녹빛 호수의 수초 사이에 숨어 사는 일반 등급 어종입니다.","icon":"🐠","type":"carp","typeLabel":"잉어류"},{"id":42,"name":"녹옥메기","grade":"일반","icon":"🐡","region":"에메랄드 호수","date":"2024.06.18","size":"13.7 cm","stars":"★☆☆☆☆","desc":"맑은 녹빛 호수의 수초 사이에 숨어 사는 일반 등급 어종입니다.","type":"catfish","typeLabel":"메기류"},{"id":43,"name":"비취송어","grade":"일반","icon":"🐟","region":"에메랄드 호수","date":"2024.06.18","size":"15.5 cm","stars":"★☆☆☆☆","desc":"맑은 녹빛 호수의 수초 사이에 숨어 사는 일반 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":44,"name":"청록농어","grade":"일반","icon":"🐠","region":"에메랄드 호수","date":"2024.06.18","size":"17.2 cm","stars":"★☆☆☆☆","desc":"맑은 녹빛 호수의 수초 사이에 숨어 사는 일반 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":45,"name":"초록비늘붕어","grade":"일반","icon":"🐠","region":"에메랄드 호수","date":"2024.06.18","size":"18.9 cm","stars":"★☆☆☆☆","desc":"맑은 녹빛 호수의 수초 사이에 숨어 사는 일반 등급 어종입니다.","icon":"🐠","type":"carp","typeLabel":"잉어류"},{"id":46,"name":"수정잉어","grade":"희귀","icon":"🐠","region":"에메랄드 호수","date":"2024.06.18","size":"39.5 cm","stars":"★★☆☆☆","desc":"맑은 녹빛 호수의 수초 사이에 숨어 사는 희귀 등급 어종입니다.","icon":"🐠","type":"carp","typeLabel":"잉어류"},{"id":47,"name":"녹빛가재","grade":"희귀","icon":"🦞","region":"에메랄드 호수","date":"2024.06.18","size":"42.4 cm","stars":"★★☆☆☆","desc":"맑은 녹빛 호수의 수초 사이에 숨어 사는 희귀 등급 어종입니다.","type":"crustacean","typeLabel":"갑각류"},{"id":48,"name":"호수은어","grade":"희귀","icon":"🐟","region":"에메랄드 호수","date":"2024.06.18","size":"45.3 cm","stars":"★★☆☆☆","desc":"맑은 녹빛 호수의 수초 사이에 숨어 사는 희귀 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":49,"name":"옥빛피라미","grade":"희귀","icon":"🐟","region":"에메랄드 호수","date":"2024.06.18","size":"48.2 cm","stars":"★★☆☆☆","desc":"맑은 녹빛 호수의 수초 사이에 숨어 사는 희귀 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":50,"name":"청명조개","grade":"희귀","icon":"🦪","region":"에메랄드 호수","date":"2024.06.18","size":"51.1 cm","stars":"★★☆☆☆","desc":"맑은 녹빛 호수의 수초 사이에 숨어 사는 희귀 등급 어종입니다.","type":"shell","typeLabel":"패류"},{"id":51,"name":"비취장어","grade":"영웅","icon":"🐍","region":"에메랄드 호수","date":"2024.06.18","size":"112.6 cm","stars":"★★★☆☆","desc":"맑은 녹빛 호수의 수초 사이에 숨어 사는 영웅 등급 어종입니다.","type":"eel","typeLabel":"장어류"},{"id":52,"name":"에메랄드돔","grade":"영웅","icon":"🐠","region":"에메랄드 호수","date":"2024.06.18","size":"117.9 cm","stars":"★★★☆☆","desc":"맑은 녹빛 호수의 수초 사이에 숨어 사는 영웅 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":53,"name":"녹옥가오리","grade":"영웅","icon":"🪽","region":"에메랄드 호수","date":"2024.06.18","size":"123.2 cm","stars":"★★★☆☆","desc":"맑은 녹빛 호수의 수초 사이에 숨어 사는 영웅 등급 어종입니다.","type":"ray","typeLabel":"가오리류"},{"id":54,"name":"고요한연어","grade":"영웅","icon":"🐟","region":"에메랄드 호수","date":"2024.06.18","size":"128.4 cm","stars":"★★★☆☆","desc":"맑은 녹빛 호수의 수초 사이에 숨어 사는 영웅 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":55,"name":"숲그늘메기","grade":"영웅","icon":"🐡","region":"에메랄드 호수","date":"2024.06.18","size":"133.7 cm","stars":"★★★☆☆","desc":"맑은 녹빛 호수의 수초 사이에 숨어 사는 영웅 등급 어종입니다.","type":"catfish","typeLabel":"메기류"},{"id":56,"name":"호수의 보석잉어","grade":"전설","icon":"🐠","region":"에메랄드 호수","date":"2024.06.18","size":"315.8 cm","stars":"★★★★★","desc":"맑은 녹빛 호수의 수초 사이에 숨어 사는 전설 등급 어종입니다.","icon":"🐠","type":"carp","typeLabel":"잉어류"},{"id":57,"name":"에메랄드 수호어","grade":"전설","icon":"🐉","region":"에메랄드 호수","date":"2024.06.18","size":"326.8 cm","stars":"★★★★★","desc":"맑은 녹빛 호수의 수초 사이에 숨어 사는 전설 등급 어종입니다.","type":"dragon","typeLabel":"전설어"},{"id":58,"name":"녹옥왕메기","grade":"전설","icon":"🐡","region":"에메랄드 호수","date":"2024.06.18","size":"337.9 cm","stars":"★★★★★","desc":"맑은 녹빛 호수의 수초 사이에 숨어 사는 전설 등급 어종입니다.","type":"catfish","typeLabel":"메기류"},{"id":59,"name":"고대비취송어","grade":"전설","icon":"🐟","region":"에메랄드 호수","date":"2024.06.18","size":"348.9 cm","stars":"★★★★★","desc":"맑은 녹빛 호수의 수초 사이에 숨어 사는 전설 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":60,"name":"호수정령해마","grade":"전설","icon":"🐴","region":"에메랄드 호수","date":"2024.06.18","size":"360.0 cm","stars":"★★★★★","desc":"맑은 녹빛 호수의 수초 사이에 숨어 사는 전설 등급 어종입니다.","icon":"🌊","type":"seahorse","typeLabel":"해마류"},{"id":61,"name":"별무늬송어","grade":"일반","icon":"🐟","region":"별빛 계곡","date":"2024.06.18","size":"12.0 cm","stars":"★☆☆☆☆","desc":"밤하늘 별가루가 내려앉은 계곡 물살을 따라 움직이는 일반 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":62,"name":"유성피라미","grade":"일반","icon":"🐟","region":"별빛 계곡","date":"2024.06.18","size":"13.7 cm","stars":"★☆☆☆☆","desc":"밤하늘 별가루가 내려앉은 계곡 물살을 따라 움직이는 일반 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":63,"name":"은하은어","grade":"일반","icon":"🐟","region":"별빛 계곡","date":"2024.06.18","size":"15.5 cm","stars":"★☆☆☆☆","desc":"밤하늘 별가루가 내려앉은 계곡 물살을 따라 움직이는 일반 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":64,"name":"성운농어","grade":"일반","icon":"🐠","region":"별빛 계곡","date":"2024.06.18","size":"17.2 cm","stars":"★☆☆☆☆","desc":"밤하늘 별가루가 내려앉은 계곡 물살을 따라 움직이는 일반 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":65,"name":"반짝멸치","grade":"일반","icon":"🐟","region":"별빛 계곡","date":"2024.06.18","size":"18.9 cm","stars":"★☆☆☆☆","desc":"밤하늘 별가루가 내려앉은 계곡 물살을 따라 움직이는 일반 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":66,"name":"별가루복어","grade":"희귀","icon":"🐡","region":"별빛 계곡","date":"2024.06.18","size":"39.5 cm","stars":"★★☆☆☆","desc":"밤하늘 별가루가 내려앉은 계곡 물살을 따라 움직이는 희귀 등급 어종입니다.","type":"puffer","typeLabel":"복어류"},{"id":67,"name":"밤하늘가재","grade":"희귀","icon":"🦞","region":"별빛 계곡","date":"2024.06.18","size":"42.4 cm","stars":"★★☆☆☆","desc":"밤하늘 별가루가 내려앉은 계곡 물살을 따라 움직이는 희귀 등급 어종입니다.","type":"crustacean","typeLabel":"갑각류"},{"id":68,"name":"유성조개","grade":"희귀","icon":"🦪","region":"별빛 계곡","date":"2024.06.18","size":"45.3 cm","stars":"★★☆☆☆","desc":"밤하늘 별가루가 내려앉은 계곡 물살을 따라 움직이는 희귀 등급 어종입니다.","type":"shell","typeLabel":"패류"},{"id":69,"name":"별빛잉어","grade":"희귀","icon":"🐠","region":"별빛 계곡","date":"2024.06.18","size":"48.2 cm","stars":"★★☆☆☆","desc":"밤하늘 별가루가 내려앉은 계곡 물살을 따라 움직이는 희귀 등급 어종입니다.","icon":"🐠","type":"carp","typeLabel":"잉어류"},{"id":70,"name":"은하장어","grade":"희귀","icon":"🐍","region":"별빛 계곡","date":"2024.06.18","size":"51.1 cm","stars":"★★☆☆☆","desc":"밤하늘 별가루가 내려앉은 계곡 물살을 따라 움직이는 희귀 등급 어종입니다.","type":"eel","typeLabel":"장어류"},{"id":71,"name":"혜성돔","grade":"영웅","icon":"🐠","region":"별빛 계곡","date":"2024.06.18","size":"112.6 cm","stars":"★★★☆☆","desc":"밤하늘 별가루가 내려앉은 계곡 물살을 따라 움직이는 영웅 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":72,"name":"성좌가오리","grade":"영웅","icon":"🪽","region":"별빛 계곡","date":"2024.06.18","size":"117.9 cm","stars":"★★★☆☆","desc":"밤하늘 별가루가 내려앉은 계곡 물살을 따라 움직이는 영웅 등급 어종입니다.","type":"ray","typeLabel":"가오리류"},{"id":73,"name":"은하수연어","grade":"영웅","icon":"🐟","region":"별빛 계곡","date":"2024.06.18","size":"123.2 cm","stars":"★★★☆☆","desc":"밤하늘 별가루가 내려앉은 계곡 물살을 따라 움직이는 영웅 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":74,"name":"별무리해마","grade":"영웅","icon":"🐴","region":"별빛 계곡","date":"2024.06.18","size":"128.4 cm","stars":"★★★☆☆","desc":"밤하늘 별가루가 내려앉은 계곡 물살을 따라 움직이는 영웅 등급 어종입니다.","icon":"🌊","type":"seahorse","typeLabel":"해마류"},{"id":75,"name":"천문문어","grade":"영웅","icon":"🐙","region":"별빛 계곡","date":"2024.06.18","size":"133.7 cm","stars":"★★★☆☆","desc":"밤하늘 별가루가 내려앉은 계곡 물살을 따라 움직이는 영웅 등급 어종입니다.","type":"octopus","typeLabel":"두족류"},{"id":76,"name":"유성의 왕고래","grade":"전설","icon":"🐋","region":"별빛 계곡","date":"2024.06.18","size":"315.8 cm","stars":"★★★★★","desc":"밤하늘 별가루가 내려앉은 계곡 물살을 따라 움직이는 전설 등급 어종입니다.","type":"whale","typeLabel":"고래류"},{"id":77,"name":"별빛 수호룡어","grade":"전설","icon":"🐉","region":"별빛 계곡","date":"2024.06.18","size":"326.8 cm","stars":"★★★★★","desc":"밤하늘 별가루가 내려앉은 계곡 물살을 따라 움직이는 전설 등급 어종입니다.","type":"dragon","typeLabel":"전설어"},{"id":78,"name":"은하제왕참치","grade":"전설","icon":"🐉","region":"별빛 계곡","date":"2024.06.18","size":"337.9 cm","stars":"★★★★★","desc":"밤하늘 별가루가 내려앉은 계곡 물살을 따라 움직이는 전설 등급 어종입니다.","type":"deep","typeLabel":"심해어"},{"id":79,"name":"성운의 고대어","grade":"전설","icon":"🐟","region":"별빛 계곡","date":"2024.06.18","size":"348.9 cm","stars":"★★★★★","desc":"밤하늘 별가루가 내려앉은 계곡 물살을 따라 움직이는 전설 등급 어종입니다.","type":"fish","typeLabel":"일반어류"},{"id":80,"name":"밤하늘 레비아탄","grade":"전설","icon":"🐍","region":"별빛 계곡","date":"2024.06.18","size":"360.0 cm","stars":"★★★★★","desc":"밤하늘 별가루가 내려앉은 계곡 물살을 따라 움직이는 전설 등급 어종입니다.","type":"eel","typeLabel":"장어류"},{"id":81,"name":"산호돔","grade":"일반","icon":"🐠","region":"산호 낙원","date":"2024.06.18","size":"12.0 cm","stars":"★☆☆☆☆","desc":"따뜻한 산호초와 투명한 바닷물 속에서 자라는 일반 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":82,"name":"나비고기","grade":"일반","icon":"🐟","region":"산호 낙원","date":"2024.06.18","size":"13.7 cm","stars":"★☆☆☆☆","desc":"따뜻한 산호초와 투명한 바닷물 속에서 자라는 일반 등급 어종입니다.","type":"fish","typeLabel":"일반어류"},{"id":83,"name":"열대해마","grade":"일반","icon":"🐴","region":"산호 낙원","date":"2024.06.18","size":"15.5 cm","stars":"★☆☆☆☆","desc":"따뜻한 산호초와 투명한 바닷물 속에서 자라는 일반 등급 어종입니다.","icon":"🌊","type":"seahorse","typeLabel":"해마류"},{"id":84,"name":"산호복어","grade":"일반","icon":"🐡","region":"산호 낙원","date":"2024.06.18","size":"17.2 cm","stars":"★☆☆☆☆","desc":"따뜻한 산호초와 투명한 바닷물 속에서 자라는 일반 등급 어종입니다.","type":"puffer","typeLabel":"복어류"},{"id":85,"name":"무지개쥐치","grade":"일반","icon":"🐟","region":"산호 낙원","date":"2024.06.18","size":"18.9 cm","stars":"★☆☆☆☆","desc":"따뜻한 산호초와 투명한 바닷물 속에서 자라는 일반 등급 어종입니다.","type":"fish","typeLabel":"일반어류"},{"id":86,"name":"분홍산호멸치","grade":"희귀","icon":"🐟","region":"산호 낙원","date":"2024.06.18","size":"39.5 cm","stars":"★★☆☆☆","desc":"따뜻한 산호초와 투명한 바닷물 속에서 자라는 희귀 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":87,"name":"푸른줄돔","grade":"희귀","icon":"🐠","region":"산호 낙원","date":"2024.06.18","size":"42.4 cm","stars":"★★☆☆☆","desc":"따뜻한 산호초와 투명한 바닷물 속에서 자라는 희귀 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":88,"name":"꽃산호가재","grade":"희귀","icon":"🦞","region":"산호 낙원","date":"2024.06.18","size":"45.3 cm","stars":"★★☆☆☆","desc":"따뜻한 산호초와 투명한 바닷물 속에서 자라는 희귀 등급 어종입니다.","type":"crustacean","typeLabel":"갑각류"},{"id":89,"name":"산호초장어","grade":"희귀","icon":"🐍","region":"산호 낙원","date":"2024.06.18","size":"48.2 cm","stars":"★★☆☆☆","desc":"따뜻한 산호초와 투명한 바닷물 속에서 자라는 희귀 등급 어종입니다.","type":"eel","typeLabel":"장어류"},{"id":90,"name":"진주조개","grade":"희귀","icon":"🦪","region":"산호 낙원","date":"2024.06.18","size":"51.1 cm","stars":"★★☆☆☆","desc":"따뜻한 산호초와 투명한 바닷물 속에서 자라는 희귀 등급 어종입니다.","type":"shell","typeLabel":"패류"},{"id":91,"name":"낙원가오리","grade":"영웅","icon":"🪽","region":"산호 낙원","date":"2024.06.18","size":"112.6 cm","stars":"★★★☆☆","desc":"따뜻한 산호초와 투명한 바닷물 속에서 자라는 영웅 등급 어종입니다.","type":"ray","typeLabel":"가오리류"},{"id":92,"name":"칠색비늘돔","grade":"영웅","icon":"🐠","region":"산호 낙원","date":"2024.06.18","size":"117.9 cm","stars":"★★★☆☆","desc":"따뜻한 산호초와 투명한 바닷물 속에서 자라는 영웅 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":93,"name":"산호여왕해마","grade":"영웅","icon":"🐴","region":"산호 낙원","date":"2024.06.18","size":"123.2 cm","stars":"★★★☆☆","desc":"따뜻한 산호초와 투명한 바닷물 속에서 자라는 영웅 등급 어종입니다.","icon":"🌊","type":"seahorse","typeLabel":"해마류"},{"id":94,"name":"열대왕복어","grade":"영웅","icon":"🐡","region":"산호 낙원","date":"2024.06.18","size":"128.4 cm","stars":"★★★☆☆","desc":"따뜻한 산호초와 투명한 바닷물 속에서 자라는 영웅 등급 어종입니다.","type":"puffer","typeLabel":"복어류"},{"id":95,"name":"꽃잎문어","grade":"영웅","icon":"🐙","region":"산호 낙원","date":"2024.06.18","size":"133.7 cm","stars":"★★★☆☆","desc":"따뜻한 산호초와 투명한 바닷물 속에서 자라는 영웅 등급 어종입니다.","type":"octopus","typeLabel":"두족류"},{"id":96,"name":"산호궁전수호어","grade":"전설","icon":"🐉","region":"산호 낙원","date":"2024.06.18","size":"315.8 cm","stars":"★★★★★","desc":"따뜻한 산호초와 투명한 바닷물 속에서 자라는 전설 등급 어종입니다.","type":"dragon","typeLabel":"전설어"},{"id":97,"name":"진주왕고래","grade":"전설","icon":"🦪","region":"산호 낙원","date":"2024.06.18","size":"326.8 cm","stars":"★★★★★","desc":"따뜻한 산호초와 투명한 바닷물 속에서 자라는 전설 등급 어종입니다.","type":"shell","typeLabel":"패류"},{"id":98,"name":"낙원의 황제돔","grade":"전설","icon":"🐠","region":"산호 낙원","date":"2024.06.18","size":"337.9 cm","stars":"★★★★★","desc":"따뜻한 산호초와 투명한 바닷물 속에서 자라는 전설 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":99,"name":"칠색해룡","grade":"전설","icon":"🐉","region":"산호 낙원","date":"2024.06.18","size":"348.9 cm","stars":"★★★★★","desc":"따뜻한 산호초와 투명한 바닷물 속에서 자라는 전설 등급 어종입니다.","type":"dragon","typeLabel":"전설어"},{"id":100,"name":"산호정령어","grade":"전설","icon":"🐟","region":"산호 낙원","date":"2024.06.18","size":"360.0 cm","stars":"★★★★★","desc":"따뜻한 산호초와 투명한 바닷물 속에서 자라는 전설 등급 어종입니다.","type":"fish","typeLabel":"일반어류"},{"id":101,"name":"황혼참치","grade":"일반","icon":"🐟","region":"황혼의 바다","date":"2024.06.18","size":"12.0 cm","stars":"★☆☆☆☆","desc":"붉은 노을이 번지는 바다에서 모습을 드러내는 일반 등급 어종입니다.","type":"fish","typeLabel":"일반어류"},{"id":102,"name":"노을돔","grade":"일반","icon":"🐠","region":"황혼의 바다","date":"2024.06.18","size":"13.7 cm","stars":"★☆☆☆☆","desc":"붉은 노을이 번지는 바다에서 모습을 드러내는 일반 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":103,"name":"붉은청어","grade":"일반","icon":"🐟","region":"황혼의 바다","date":"2024.06.18","size":"15.5 cm","stars":"★☆☆☆☆","desc":"붉은 노을이 번지는 바다에서 모습을 드러내는 일반 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":104,"name":"석양농어","grade":"일반","icon":"🐠","region":"황혼의 바다","date":"2024.06.18","size":"17.2 cm","stars":"★☆☆☆☆","desc":"붉은 노을이 번지는 바다에서 모습을 드러내는 일반 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":105,"name":"저녁빛멸치","grade":"일반","icon":"🐟","region":"황혼의 바다","date":"2024.06.18","size":"18.9 cm","stars":"★☆☆☆☆","desc":"붉은 노을이 번지는 바다에서 모습을 드러내는 일반 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":106,"name":"황혼가오리","grade":"희귀","icon":"🪽","region":"황혼의 바다","date":"2024.06.18","size":"39.5 cm","stars":"★★☆☆☆","desc":"붉은 노을이 번지는 바다에서 모습을 드러내는 희귀 등급 어종입니다.","type":"ray","typeLabel":"가오리류"},{"id":107,"name":"붉은달복어","grade":"희귀","icon":"🐡","region":"황혼의 바다","date":"2024.06.18","size":"42.4 cm","stars":"★★☆☆☆","desc":"붉은 노을이 번지는 바다에서 모습을 드러내는 희귀 등급 어종입니다.","type":"puffer","typeLabel":"복어류"},{"id":108,"name":"노을조개","grade":"희귀","icon":"🦪","region":"황혼의 바다","date":"2024.06.18","size":"45.3 cm","stars":"★★☆☆☆","desc":"붉은 노을이 번지는 바다에서 모습을 드러내는 희귀 등급 어종입니다.","type":"shell","typeLabel":"패류"},{"id":109,"name":"석양장어","grade":"희귀","icon":"🐍","region":"황혼의 바다","date":"2024.06.18","size":"48.2 cm","stars":"★★☆☆☆","desc":"붉은 노을이 번지는 바다에서 모습을 드러내는 희귀 등급 어종입니다.","type":"eel","typeLabel":"장어류"},{"id":110,"name":"불빛가재","grade":"희귀","icon":"🦞","region":"황혼의 바다","date":"2024.06.18","size":"51.1 cm","stars":"★★☆☆☆","desc":"붉은 노을이 번지는 바다에서 모습을 드러내는 희귀 등급 어종입니다.","type":"crustacean","typeLabel":"갑각류"},{"id":111,"name":"홍염연어","grade":"영웅","icon":"🐟","region":"황혼의 바다","date":"2024.06.18","size":"112.6 cm","stars":"★★★☆☆","desc":"붉은 노을이 번지는 바다에서 모습을 드러내는 영웅 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":112,"name":"노을왕돔","grade":"영웅","icon":"🐠","region":"황혼의 바다","date":"2024.06.18","size":"117.9 cm","stars":"★★★☆☆","desc":"붉은 노을이 번지는 바다에서 모습을 드러내는 영웅 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":113,"name":"황혼해마","grade":"영웅","icon":"🐴","region":"황혼의 바다","date":"2024.06.18","size":"123.2 cm","stars":"★★★☆☆","desc":"붉은 노을이 번지는 바다에서 모습을 드러내는 영웅 등급 어종입니다.","icon":"🌊","type":"seahorse","typeLabel":"해마류"},{"id":114,"name":"적운문어","grade":"영웅","icon":"🐙","region":"황혼의 바다","date":"2024.06.18","size":"128.4 cm","stars":"★★★☆☆","desc":"붉은 노을이 번지는 바다에서 모습을 드러내는 영웅 등급 어종입니다.","type":"octopus","typeLabel":"두족류"},{"id":115,"name":"붉은파도상어","grade":"영웅","icon":"🦈","region":"황혼의 바다","date":"2024.06.18","size":"133.7 cm","stars":"★★★☆☆","desc":"붉은 노을이 번지는 바다에서 모습을 드러내는 영웅 등급 어종입니다.","type":"shark","typeLabel":"상어류"},{"id":116,"name":"황혼의 청룡어","grade":"전설","icon":"🐉","region":"황혼의 바다","date":"2024.06.18","size":"315.8 cm","stars":"★★★★★","desc":"붉은 노을이 번지는 바다에서 모습을 드러내는 전설 등급 어종입니다.","type":"dragon","typeLabel":"전설어"},{"id":117,"name":"노을제왕참치","grade":"전설","icon":"🐉","region":"황혼의 바다","date":"2024.06.18","size":"326.8 cm","stars":"★★★★★","desc":"붉은 노을이 번지는 바다에서 모습을 드러내는 전설 등급 어종입니다.","type":"deep","typeLabel":"심해어"},{"id":118,"name":"붉은해 수호고래","grade":"전설","icon":"🐋","region":"황혼의 바다","date":"2024.06.18","size":"337.9 cm","stars":"★★★★★","desc":"붉은 노을이 번지는 바다에서 모습을 드러내는 전설 등급 어종입니다.","type":"whale","typeLabel":"고래류"},{"id":119,"name":"석양 레비아탄","grade":"전설","icon":"🐍","region":"황혼의 바다","date":"2024.06.18","size":"348.9 cm","stars":"★★★★★","desc":"붉은 노을이 번지는 바다에서 모습을 드러내는 전설 등급 어종입니다.","type":"eel","typeLabel":"장어류"},{"id":120,"name":"황혼군주돔","grade":"전설","icon":"🐠","region":"황혼의 바다","date":"2024.06.18","size":"360.0 cm","stars":"★★★★★","desc":"붉은 노을이 번지는 바다에서 모습을 드러내는 전설 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":121,"name":"번개상어","grade":"일반","icon":"🦈","region":"폭풍의 해역","date":"2024.06.18","size":"12.0 cm","stars":"★☆☆☆☆","desc":"거친 파도와 천둥이 몰아치는 해역을 가르는 일반 등급 어종입니다.","type":"shark","typeLabel":"상어류"},{"id":122,"name":"폭풍고등어","grade":"일반","icon":"🐟","region":"폭풍의 해역","date":"2024.06.18","size":"13.7 cm","stars":"★☆☆☆☆","desc":"거친 파도와 천둥이 몰아치는 해역을 가르는 일반 등급 어종입니다.","type":"fish","typeLabel":"일반어류"},{"id":123,"name":"천둥참치","grade":"일반","icon":"🐟","region":"폭풍의 해역","date":"2024.06.18","size":"15.5 cm","stars":"★☆☆☆☆","desc":"거친 파도와 천둥이 몰아치는 해역을 가르는 일반 등급 어종입니다.","type":"fish","typeLabel":"일반어류"},{"id":124,"name":"질풍가오리","grade":"일반","icon":"🪽","region":"폭풍의 해역","date":"2024.06.18","size":"17.2 cm","stars":"★☆☆☆☆","desc":"거친 파도와 천둥이 몰아치는 해역을 가르는 일반 등급 어종입니다.","type":"ray","typeLabel":"가오리류"},{"id":125,"name":"비바람청어","grade":"일반","icon":"🐟","region":"폭풍의 해역","date":"2024.06.18","size":"18.9 cm","stars":"★☆☆☆☆","desc":"거친 파도와 천둥이 몰아치는 해역을 가르는 일반 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":126,"name":"폭우메기","grade":"희귀","icon":"🐡","region":"폭풍의 해역","date":"2024.06.18","size":"39.5 cm","stars":"★★☆☆☆","desc":"거친 파도와 천둥이 몰아치는 해역을 가르는 희귀 등급 어종입니다.","type":"catfish","typeLabel":"메기류"},{"id":127,"name":"번개복어","grade":"희귀","icon":"🐡","region":"폭풍의 해역","date":"2024.06.18","size":"42.4 cm","stars":"★★☆☆☆","desc":"거친 파도와 천둥이 몰아치는 해역을 가르는 희귀 등급 어종입니다.","type":"puffer","typeLabel":"복어류"},{"id":128,"name":"질풍장어","grade":"희귀","icon":"🐍","region":"폭풍의 해역","date":"2024.06.18","size":"45.3 cm","stars":"★★☆☆☆","desc":"거친 파도와 천둥이 몰아치는 해역을 가르는 희귀 등급 어종입니다.","type":"eel","typeLabel":"장어류"},{"id":129,"name":"먹구름조개","grade":"희귀","icon":"🦪","region":"폭풍의 해역","date":"2024.06.18","size":"48.2 cm","stars":"★★☆☆☆","desc":"거친 파도와 천둥이 몰아치는 해역을 가르는 희귀 등급 어종입니다.","type":"shell","typeLabel":"패류"},{"id":130,"name":"파도절단돔","grade":"희귀","icon":"🐠","region":"폭풍의 해역","date":"2024.06.18","size":"51.1 cm","stars":"★★☆☆☆","desc":"거친 파도와 천둥이 몰아치는 해역을 가르는 희귀 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":131,"name":"뇌전상어","grade":"영웅","icon":"🦈","region":"폭풍의 해역","date":"2024.06.18","size":"112.6 cm","stars":"★★★☆☆","desc":"거친 파도와 천둥이 몰아치는 해역을 가르는 영웅 등급 어종입니다.","type":"shark","typeLabel":"상어류"},{"id":132,"name":"폭풍연어","grade":"영웅","icon":"🐟","region":"폭풍의 해역","date":"2024.06.18","size":"117.9 cm","stars":"★★★☆☆","desc":"거친 파도와 천둥이 몰아치는 해역을 가르는 영웅 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":133,"name":"회오리가오리","grade":"영웅","icon":"🪽","region":"폭풍의 해역","date":"2024.06.18","size":"123.2 cm","stars":"★★★☆☆","desc":"거친 파도와 천둥이 몰아치는 해역을 가르는 영웅 등급 어종입니다.","type":"ray","typeLabel":"가오리류"},{"id":134,"name":"천둥문어","grade":"영웅","icon":"🐙","region":"폭풍의 해역","date":"2024.06.18","size":"128.4 cm","stars":"★★★☆☆","desc":"거친 파도와 천둥이 몰아치는 해역을 가르는 영웅 등급 어종입니다.","type":"octopus","typeLabel":"두족류"},{"id":135,"name":"검은파도해마","grade":"영웅","icon":"🐴","region":"폭풍의 해역","date":"2024.06.18","size":"133.7 cm","stars":"★★★☆☆","desc":"거친 파도와 천둥이 몰아치는 해역을 가르는 영웅 등급 어종입니다.","icon":"🌊","type":"seahorse","typeLabel":"해마류"},{"id":136,"name":"폭풍 레비아탄","grade":"전설","icon":"🐍","region":"폭풍의 해역","date":"2024.06.18","size":"315.8 cm","stars":"★★★★★","desc":"거친 파도와 천둥이 몰아치는 해역을 가르는 전설 등급 어종입니다.","type":"eel","typeLabel":"장어류"},{"id":137,"name":"천둥의 제왕상어","grade":"전설","icon":"🦈","region":"폭풍의 해역","date":"2024.06.18","size":"326.8 cm","stars":"★★★★★","desc":"거친 파도와 천둥이 몰아치는 해역을 가르는 전설 등급 어종입니다.","type":"shark","typeLabel":"상어류"},{"id":138,"name":"질풍수호룡어","grade":"전설","icon":"🐉","region":"폭풍의 해역","date":"2024.06.18","size":"337.9 cm","stars":"★★★★★","desc":"거친 파도와 천둥이 몰아치는 해역을 가르는 전설 등급 어종입니다.","type":"dragon","typeLabel":"전설어"},{"id":139,"name":"번개의 고대참치","grade":"전설","icon":"🐟","region":"폭풍의 해역","date":"2024.06.18","size":"348.9 cm","stars":"★★★★★","desc":"거친 파도와 천둥이 몰아치는 해역을 가르는 전설 등급 어종입니다.","type":"fish","typeLabel":"일반어류"},{"id":140,"name":"검은폭풍고래","grade":"전설","icon":"🐋","region":"폭풍의 해역","date":"2024.06.18","size":"360.0 cm","stars":"★★★★★","desc":"거친 파도와 천둥이 몰아치는 해역을 가르는 전설 등급 어종입니다.","type":"whale","typeLabel":"고래류"},{"id":141,"name":"설빙송어","grade":"일반","icon":"🐟","region":"영원의 빙하","date":"2024.06.18","size":"12.0 cm","stars":"★☆☆☆☆","desc":"차가운 빙하 아래 맑고 푸른 물속에 서식하는 일반 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":142,"name":"크리스탈연어","grade":"일반","icon":"🐟","region":"영원의 빙하","date":"2024.06.18","size":"13.7 cm","stars":"★☆☆☆☆","desc":"차가운 빙하 아래 맑고 푸른 물속에 서식하는 일반 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":143,"name":"빙하대구","grade":"일반","icon":"🐟","region":"영원의 빙하","date":"2024.06.18","size":"15.5 cm","stars":"★☆☆☆☆","desc":"차가운 빙하 아래 맑고 푸른 물속에 서식하는 일반 등급 어종입니다.","type":"fish","typeLabel":"일반어류"},{"id":144,"name":"서리농어","grade":"일반","icon":"🐠","region":"영원의 빙하","date":"2024.06.18","size":"17.2 cm","stars":"★☆☆☆☆","desc":"차가운 빙하 아래 맑고 푸른 물속에 서식하는 일반 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":145,"name":"빙결은어","grade":"일반","icon":"🐟","region":"영원의 빙하","date":"2024.06.18","size":"18.9 cm","stars":"★☆☆☆☆","desc":"차가운 빙하 아래 맑고 푸른 물속에 서식하는 일반 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":146,"name":"눈꽃복어","grade":"희귀","icon":"🐡","region":"영원의 빙하","date":"2024.06.18","size":"39.5 cm","stars":"★★☆☆☆","desc":"차가운 빙하 아래 맑고 푸른 물속에 서식하는 희귀 등급 어종입니다.","type":"puffer","typeLabel":"복어류"},{"id":147,"name":"얼음조개","grade":"희귀","icon":"🦪","region":"영원의 빙하","date":"2024.06.18","size":"42.4 cm","stars":"★★☆☆☆","desc":"차가운 빙하 아래 맑고 푸른 물속에 서식하는 희귀 등급 어종입니다.","type":"shell","typeLabel":"패류"},{"id":148,"name":"빙정가재","grade":"희귀","icon":"🦞","region":"영원의 빙하","date":"2024.06.18","size":"45.3 cm","stars":"★★☆☆☆","desc":"차가운 빙하 아래 맑고 푸른 물속에 서식하는 희귀 등급 어종입니다.","type":"crustacean","typeLabel":"갑각류"},{"id":149,"name":"서리장어","grade":"희귀","icon":"🐍","region":"영원의 빙하","date":"2024.06.18","size":"48.2 cm","stars":"★★☆☆☆","desc":"차가운 빙하 아래 맑고 푸른 물속에 서식하는 희귀 등급 어종입니다.","type":"eel","typeLabel":"장어류"},{"id":150,"name":"푸른빙어","grade":"희귀","icon":"🐟","region":"영원의 빙하","date":"2024.06.18","size":"51.1 cm","stars":"★★☆☆☆","desc":"차가운 빙하 아래 맑고 푸른 물속에 서식하는 희귀 등급 어종입니다.","type":"fish","typeLabel":"일반어류"},{"id":151,"name":"빙하가오리","grade":"영웅","icon":"🪽","region":"영원의 빙하","date":"2024.06.18","size":"112.6 cm","stars":"★★★☆☆","desc":"차가운 빙하 아래 맑고 푸른 물속에 서식하는 영웅 등급 어종입니다.","type":"ray","typeLabel":"가오리류"},{"id":152,"name":"설원왕돔","grade":"영웅","icon":"🐠","region":"영원의 빙하","date":"2024.06.18","size":"117.9 cm","stars":"★★★☆☆","desc":"차가운 빙하 아래 맑고 푸른 물속에 서식하는 영웅 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":153,"name":"크리스탈해마","grade":"영웅","icon":"🐴","region":"영원의 빙하","date":"2024.06.18","size":"123.2 cm","stars":"★★★☆☆","desc":"차가운 빙하 아래 맑고 푸른 물속에 서식하는 영웅 등급 어종입니다.","icon":"🌊","type":"seahorse","typeLabel":"해마류"},{"id":154,"name":"영원의문어","grade":"영웅","icon":"🐙","region":"영원의 빙하","date":"2024.06.18","size":"128.4 cm","stars":"★★★☆☆","desc":"차가운 빙하 아래 맑고 푸른 물속에 서식하는 영웅 등급 어종입니다.","type":"octopus","typeLabel":"두족류"},{"id":155,"name":"눈보라상어","grade":"영웅","icon":"🦈","region":"영원의 빙하","date":"2024.06.18","size":"133.7 cm","stars":"★★★☆☆","desc":"차가운 빙하 아래 맑고 푸른 물속에 서식하는 영웅 등급 어종입니다.","type":"shark","typeLabel":"상어류"},{"id":156,"name":"빙하 제왕연어","grade":"전설","icon":"🐟","region":"영원의 빙하","date":"2024.06.18","size":"315.8 cm","stars":"★★★★★","desc":"차가운 빙하 아래 맑고 푸른 물속에 서식하는 전설 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":157,"name":"영원의 고래","grade":"전설","icon":"🐋","region":"영원의 빙하","date":"2024.06.18","size":"326.8 cm","stars":"★★★★★","desc":"차가운 빙하 아래 맑고 푸른 물속에 서식하는 전설 등급 어종입니다.","type":"whale","typeLabel":"고래류"},{"id":158,"name":"크리스탈 드래곤피쉬","grade":"전설","icon":"🐉","region":"영원의 빙하","date":"2024.06.18","size":"337.9 cm","stars":"★★★★★","desc":"차가운 빙하 아래 맑고 푸른 물속에 서식하는 전설 등급 어종입니다.","type":"dragon","typeLabel":"전설어"},{"id":159,"name":"서리왕 해룡","grade":"전설","icon":"🐉","region":"영원의 빙하","date":"2024.06.18","size":"348.9 cm","stars":"★★★★★","desc":"차가운 빙하 아래 맑고 푸른 물속에 서식하는 전설 등급 어종입니다.","type":"dragon","typeLabel":"전설어"},{"id":160,"name":"빙결군주어","grade":"전설","icon":"🐟","region":"영원의 빙하","date":"2024.06.18","size":"360.0 cm","stars":"★★★★★","desc":"차가운 빙하 아래 맑고 푸른 물속에 서식하는 전설 등급 어종입니다.","type":"fish","typeLabel":"일반어류"},{"id":161,"name":"심연아귀","grade":"일반","icon":"🐉","region":"심연의 해구","date":"2024.06.18","size":"12.0 cm","stars":"★☆☆☆☆","desc":"빛이 닿지 않는 깊은 해구에서 희미한 기척을 남기는 일반 등급 어종입니다.","type":"deep","typeLabel":"심해어"},{"id":162,"name":"흑해룡어","grade":"일반","icon":"🐉","region":"심연의 해구","date":"2024.06.18","size":"13.7 cm","stars":"★☆☆☆☆","desc":"빛이 닿지 않는 깊은 해구에서 희미한 기척을 남기는 일반 등급 어종입니다.","type":"dragon","typeLabel":"전설어"},{"id":163,"name":"암흑가오리","grade":"일반","icon":"🪽","region":"심연의 해구","date":"2024.06.18","size":"15.5 cm","stars":"★☆☆☆☆","desc":"빛이 닿지 않는 깊은 해구에서 희미한 기척을 남기는 일반 등급 어종입니다.","type":"ray","typeLabel":"가오리류"},{"id":164,"name":"심해오징어","grade":"일반","icon":"🦑","region":"심연의 해구","date":"2024.06.18","size":"17.2 cm","stars":"★☆☆☆☆","desc":"빛이 닿지 않는 깊은 해구에서 희미한 기척을 남기는 일반 등급 어종입니다.","type":"squid","typeLabel":"두족류"},{"id":165,"name":"그림자상어","grade":"일반","icon":"🦈","region":"심연의 해구","date":"2024.06.18","size":"18.9 cm","stars":"★☆☆☆☆","desc":"빛이 닿지 않는 깊은 해구에서 희미한 기척을 남기는 일반 등급 어종입니다.","type":"shark","typeLabel":"상어류"},{"id":166,"name":"검은돔","grade":"희귀","icon":"🐠","region":"심연의 해구","date":"2024.06.18","size":"39.5 cm","stars":"★★☆☆☆","desc":"빛이 닿지 않는 깊은 해구에서 희미한 기척을 남기는 희귀 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":167,"name":"심연장어","grade":"희귀","icon":"🐍","region":"심연의 해구","date":"2024.06.18","size":"42.4 cm","stars":"★★☆☆☆","desc":"빛이 닿지 않는 깊은 해구에서 희미한 기척을 남기는 희귀 등급 어종입니다.","type":"eel","typeLabel":"장어류"},{"id":168,"name":"해구조개","grade":"희귀","icon":"🦪","region":"심연의 해구","date":"2024.06.18","size":"45.3 cm","stars":"★★☆☆☆","desc":"빛이 닿지 않는 깊은 해구에서 희미한 기척을 남기는 희귀 등급 어종입니다.","type":"shell","typeLabel":"패류"},{"id":169,"name":"무광멸치","grade":"희귀","icon":"🐟","region":"심연의 해구","date":"2024.06.18","size":"48.2 cm","stars":"★★☆☆☆","desc":"빛이 닿지 않는 깊은 해구에서 희미한 기척을 남기는 희귀 등급 어종입니다.","type":"slim","typeLabel":"날렵어류"},{"id":170,"name":"어둠메기","grade":"희귀","icon":"🐡","region":"심연의 해구","date":"2024.06.18","size":"51.1 cm","stars":"★★☆☆☆","desc":"빛이 닿지 않는 깊은 해구에서 희미한 기척을 남기는 희귀 등급 어종입니다.","type":"catfish","typeLabel":"메기류"},{"id":171,"name":"심해등불아귀","grade":"영웅","icon":"🐉","region":"심연의 해구","date":"2024.06.18","size":"112.6 cm","stars":"★★★☆☆","desc":"빛이 닿지 않는 깊은 해구에서 희미한 기척을 남기는 영웅 등급 어종입니다.","type":"deep","typeLabel":"심해어"},{"id":172,"name":"흑요석가오리","grade":"영웅","icon":"🪽","region":"심연의 해구","date":"2024.06.18","size":"117.9 cm","stars":"★★★☆☆","desc":"빛이 닿지 않는 깊은 해구에서 희미한 기척을 남기는 영웅 등급 어종입니다.","type":"ray","typeLabel":"가오리류"},{"id":173,"name":"그림자문어","grade":"영웅","icon":"🐙","region":"심연의 해구","date":"2024.06.18","size":"123.2 cm","stars":"★★★☆☆","desc":"빛이 닿지 않는 깊은 해구에서 희미한 기척을 남기는 영웅 등급 어종입니다.","type":"octopus","typeLabel":"두족류"},{"id":174,"name":"해구왕상어","grade":"영웅","icon":"🦈","region":"심연의 해구","date":"2024.06.18","size":"128.4 cm","stars":"★★★☆☆","desc":"빛이 닿지 않는 깊은 해구에서 희미한 기척을 남기는 영웅 등급 어종입니다.","type":"shark","typeLabel":"상어류"},{"id":175,"name":"암흑해마","grade":"영웅","icon":"🐴","region":"심연의 해구","date":"2024.06.18","size":"133.7 cm","stars":"★★★☆☆","desc":"빛이 닿지 않는 깊은 해구에서 희미한 기척을 남기는 영웅 등급 어종입니다.","icon":"🌊","type":"seahorse","typeLabel":"해마류"},{"id":176,"name":"심연의 그림자상어","grade":"전설","icon":"🦈","region":"심연의 해구","date":"2024.06.18","size":"315.8 cm","stars":"★★★★★","desc":"빛이 닿지 않는 깊은 해구에서 희미한 기척을 남기는 전설 등급 어종입니다.","type":"shark","typeLabel":"상어류"},{"id":177,"name":"심연군주 아귀","grade":"전설","icon":"🐉","region":"심연의 해구","date":"2024.06.18","size":"326.8 cm","stars":"★★★★★","desc":"빛이 닿지 않는 깊은 해구에서 희미한 기척을 남기는 전설 등급 어종입니다.","type":"deep","typeLabel":"심해어"},{"id":178,"name":"흑해룡 군주","grade":"전설","icon":"🐉","region":"심연의 해구","date":"2024.06.18","size":"337.9 cm","stars":"★★★★★","desc":"빛이 닿지 않는 깊은 해구에서 희미한 기척을 남기는 전설 등급 어종입니다.","type":"dragon","typeLabel":"전설어"},{"id":179,"name":"무저갱 고래","grade":"전설","icon":"🐋","region":"심연의 해구","date":"2024.06.18","size":"348.9 cm","stars":"★★★★★","desc":"빛이 닿지 않는 깊은 해구에서 희미한 기척을 남기는 전설 등급 어종입니다.","type":"whale","typeLabel":"고래류"},{"id":180,"name":"심해의 망령어","grade":"전설","icon":"🐉","region":"심연의 해구","date":"2024.06.18","size":"360.0 cm","stars":"★★★★★","desc":"빛이 닿지 않는 깊은 해구에서 희미한 기척을 남기는 전설 등급 어종입니다.","type":"deep","typeLabel":"심해어"},{"id":181,"name":"태고의실러캔스","grade":"일반","icon":"🐟","region":"태초의 심해","date":"2024.06.18","size":"12.0 cm","stars":"★☆☆☆☆","desc":"고대 바다의 흔적이 남아 있는 심해에서 발견되는 일반 등급 어종입니다.","type":"fish","typeLabel":"일반어류"},{"id":182,"name":"심해룡어","grade":"일반","icon":"🐉","region":"태초의 심해","date":"2024.06.18","size":"13.7 cm","stars":"★☆☆☆☆","desc":"고대 바다의 흔적이 남아 있는 심해에서 발견되는 일반 등급 어종입니다.","type":"dragon","typeLabel":"전설어"},{"id":183,"name":"고대가오리","grade":"일반","icon":"🪽","region":"태초의 심해","date":"2024.06.18","size":"15.5 cm","stars":"★☆☆☆☆","desc":"고대 바다의 흔적이 남아 있는 심해에서 발견되는 일반 등급 어종입니다.","type":"ray","typeLabel":"가오리류"},{"id":184,"name":"태초고래","grade":"일반","icon":"🐋","region":"태초의 심해","date":"2024.06.18","size":"17.2 cm","stars":"★☆☆☆☆","desc":"고대 바다의 흔적이 남아 있는 심해에서 발견되는 일반 등급 어종입니다.","type":"whale","typeLabel":"고래류"},{"id":185,"name":"원시돔","grade":"일반","icon":"🐠","region":"태초의 심해","date":"2024.06.18","size":"18.9 cm","stars":"★☆☆☆☆","desc":"고대 바다의 흔적이 남아 있는 심해에서 발견되는 일반 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":186,"name":"고대암모나이트","grade":"희귀","icon":"🐟","region":"태초의 심해","date":"2024.06.18","size":"39.5 cm","stars":"★★☆☆☆","desc":"고대 바다의 흔적이 남아 있는 심해에서 발견되는 희귀 등급 어종입니다.","type":"fish","typeLabel":"일반어류"},{"id":187,"name":"태고장어","grade":"희귀","icon":"🐍","region":"태초의 심해","date":"2024.06.18","size":"42.4 cm","stars":"★★☆☆☆","desc":"고대 바다의 흔적이 남아 있는 심해에서 발견되는 희귀 등급 어종입니다.","type":"eel","typeLabel":"장어류"},{"id":188,"name":"원초복어","grade":"희귀","icon":"🐡","region":"태초의 심해","date":"2024.06.18","size":"45.3 cm","stars":"★★☆☆☆","desc":"고대 바다의 흔적이 남아 있는 심해에서 발견되는 희귀 등급 어종입니다.","type":"puffer","typeLabel":"복어류"},{"id":189,"name":"심해수정어","grade":"희귀","icon":"🐉","region":"태초의 심해","date":"2024.06.18","size":"48.2 cm","stars":"★★☆☆☆","desc":"고대 바다의 흔적이 남아 있는 심해에서 발견되는 희귀 등급 어종입니다.","type":"deep","typeLabel":"심해어"},{"id":190,"name":"고대문어","grade":"희귀","icon":"🐙","region":"태초의 심해","date":"2024.06.18","size":"51.1 cm","stars":"★★☆☆☆","desc":"고대 바다의 흔적이 남아 있는 심해에서 발견되는 희귀 등급 어종입니다.","type":"octopus","typeLabel":"두족류"},{"id":191,"name":"태초상어","grade":"영웅","icon":"🦈","region":"태초의 심해","date":"2024.06.18","size":"112.6 cm","stars":"★★★☆☆","desc":"고대 바다의 흔적이 남아 있는 심해에서 발견되는 영웅 등급 어종입니다.","type":"shark","typeLabel":"상어류"},{"id":192,"name":"원시해마","grade":"영웅","icon":"🐴","region":"태초의 심해","date":"2024.06.18","size":"117.9 cm","stars":"★★★☆☆","desc":"고대 바다의 흔적이 남아 있는 심해에서 발견되는 영웅 등급 어종입니다.","icon":"🌊","type":"seahorse","typeLabel":"해마류"},{"id":193,"name":"고대왕가오리","grade":"영웅","icon":"🪽","region":"태초의 심해","date":"2024.06.18","size":"123.2 cm","stars":"★★★☆☆","desc":"고대 바다의 흔적이 남아 있는 심해에서 발견되는 영웅 등급 어종입니다.","type":"ray","typeLabel":"가오리류"},{"id":194,"name":"심해거대오징어","grade":"영웅","icon":"🦑","region":"태초의 심해","date":"2024.06.18","size":"128.4 cm","stars":"★★★☆☆","desc":"고대 바다의 흔적이 남아 있는 심해에서 발견되는 영웅 등급 어종입니다.","type":"squid","typeLabel":"두족류"},{"id":195,"name":"태고의 황제돔","grade":"영웅","icon":"🐠","region":"태초의 심해","date":"2024.06.18","size":"133.7 cm","stars":"★★★☆☆","desc":"고대 바다의 흔적이 남아 있는 심해에서 발견되는 영웅 등급 어종입니다.","type":"tropical","typeLabel":"바다어류"},{"id":196,"name":"태고의 실러캔스","grade":"전설","icon":"🐟","region":"태초의 심해","date":"2024.06.18","size":"315.8 cm","stars":"★★★★★","desc":"고대 바다의 흔적이 남아 있는 심해에서 발견되는 전설 등급 어종입니다.","type":"fish","typeLabel":"일반어류"},{"id":197,"name":"레비아탄 유체","grade":"전설","icon":"🐍","region":"태초의 심해","date":"2024.06.18","size":"326.8 cm","stars":"★★★★★","desc":"고대 바다의 흔적이 남아 있는 심해에서 발견되는 전설 등급 어종입니다.","type":"eel","typeLabel":"장어류"},{"id":198,"name":"고대 바다정령","grade":"전설","icon":"🐟","region":"태초의 심해","date":"2024.06.18","size":"337.9 cm","stars":"★★★★★","desc":"고대 바다의 흔적이 남아 있는 심해에서 발견되는 전설 등급 어종입니다.","type":"fish","typeLabel":"일반어류"},{"id":199,"name":"태초의 심해룡","grade":"전설","icon":"🐉","region":"태초의 심해","date":"2024.06.18","size":"348.9 cm","stars":"★★★★★","desc":"고대 바다의 흔적이 남아 있는 심해에서 발견되는 전설 등급 어종입니다.","type":"dragon","typeLabel":"전설어"},{"id":200,"name":"원초의 제왕고래","grade":"전설","icon":"🐋","region":"태초의 심해","date":"2024.06.18","size":"360.0 cm","stars":"★★★★★","desc":"고대 바다의 흔적이 남아 있는 심해에서 발견되는 전설 등급 어종입니다.","type":"whale","typeLabel":"고래류"}];


/* 물고기 이름 특성 기반 타입 / 아이콘 보정
   - 장식 접두어(달, 별, 금색 등)를 아이콘 앞에 붙이지 않도록 수정
   - 메기/멸치/가재처럼 실루엣이 달라야 하는 어종을 우선 분류
*/
const FISH_TYPE_RULES = [
  [/아귀/, { type:'angler', typeLabel:'아귀류', icon:'아귀', image:'images/fish/fish_angler.svg' }],
  [/망령|유령/, { type:'ghostfish', typeLabel:'망령어류', icon:'망령어', image:'images/fish/fish_ghost.svg' }],
  [/해마/, { type:'seahorse', typeLabel:'해마류', icon:'해마', image:'images/fish/fish_seahorse.svg' }],
  [/가오리|만타/, { type:'ray', typeLabel:'가오리류', icon:'가오리', image:'images/fish/fish_ray.svg' }],
  [/참치/, { type:'tuna', typeLabel:'참치류', icon:'참치', image:'images/fish/fish_tuna.svg' }],
  [/조개/, { type:'clam', typeLabel:'조개류', icon:'조개', image:'images/fish/fish_clam.svg' }],
  [/소라|암모나이트/, { type:'conch', typeLabel:'소라류', icon:'🐚' }],
  [/청어/, { type:'herring', typeLabel:'청어류', icon:'청어', image:'images/fish/fish_herring.svg' }],
  [/피라미/, { type:'minnow', typeLabel:'피라미류', icon:'피라미', image:'images/fish/fish_minnow.svg' }],
  [/농어/, { type:'bass', typeLabel:'농어류', icon:'농어', image:'images/fish/fish_bass.svg' }],
  [/붕어/, { type:'crucian', typeLabel:'붕어류', icon:'붕어', image:'images/fish/fish_crucian.svg' }],
  [/잉어|카프/, { type:'carp', typeLabel:'잉어류', icon:'잉어', image:'images/fish/fish_carp.svg' }],
  [/메기/, { type:'catfish', typeLabel:'메기류', icon:'메기', image:'images/fish/fish_catfish.svg' }],
  [/멸치/, { type:'anchovy', typeLabel:'멸치류', icon:'멸치', image:'images/fish/fish_anchovy.svg' }],
  [/가재/, { type:'crustacean', typeLabel:'갑각류', icon:'🦞' }],
  [/게/, { type:'crab', typeLabel:'갑각류', icon:'🦀' }],
  [/새우/, { type:'shrimp', typeLabel:'갑각류', icon:'🦐' }],
  [/문어/, { type:'octopus', typeLabel:'두족류', icon:'🐙' }],
  [/오징어|크라켄/, { type:'squid', typeLabel:'두족류', icon:'🦑' }],
  [/장어|레비아탄/, { type:'eel', typeLabel:'장어류', icon:'🐍' }],
  [/상어/, { type:'shark', typeLabel:'상어류', icon:'🦈' }],
  [/고래/, { type:'whale', typeLabel:'고래류', icon:'🐋' }],
  [/복어/, { type:'puffer', typeLabel:'복어류', icon:'🐡' }],
  [/해파리/, { type:'jelly', typeLabel:'해파리류', icon:'🪼' }],
  [/드래곤|해룡|용왕|룡어|심해룡|아틀란티스/, { type:'dragon', typeLabel:'전설어', icon:'🐉' }],
  [/심연|심해|망령|유령|아귀/, { type:'deep', typeLabel:'심해어', icon:'👁️' }],
  [/송어|은어|실러캔스/, { type:'slim', typeLabel:'날렵어류', icon:'🐟' }],
  [/돔|도미|블루탱|가자미|개복치|지느러미|군주어|정령/, { type:'tropical', typeLabel:'바다어류', icon:'🐠' }]
];

function resolveFishMetaByName(fish){
  const name = fish.name || '';
  const matched = FISH_TYPE_RULES.find(([regex]) => regex.test(name));
  if(!matched){
    return {
      type: fish.type || 'fish',
      typeLabel: fish.typeLabel || '일반어류',
      icon: fish.icon || '🐟'
    };
  }
  return matched[1];
}

ALL_FISH.forEach(fish => {
  const meta = resolveFishMetaByName(fish);
  fish.type = meta.type;
  fish.typeLabel = meta.typeLabel;
  fish.icon = meta.icon;
  if(meta.image) fish.image = meta.image;
  else if(fish.image && fish.image.indexOf('images/fish/') === 0) delete fish.image;
});

const DISCOVERED_INITIAL=new Set();


const REGION_DATA=[
  {"id":"mist","name":"안개의 섬","icon":"🌫","className":"isle-mist","visual":"region-visual-mist","level":10,"unlocked":true,"unlock":"제한 없이 입장 가능","legend":"안개의 고대붕어","legendIcon":"🐟","legendCondition":"연못 수집률 80% 달성","desc":"잔잔한 안개와 작은 연못"},
  {"id":"moon","name":"월광의 섬","icon":"🌙","className":"isle-moon","visual":"region-visual-moon","level":20,"unlocked":true,"unlock":"제한 없이 입장 가능","legend":"월광 실버피쉬","legendIcon":"🐟","legendCondition":"밤 시간대 출현","desc":"달빛이 흐르는 은빛 개울"},
  {"id":"emerald","name":"에메랄드 호수","icon":"📍","className":"isle-emerald","visual":"region-visual-emerald","level":30,"unlocked":true,"unlock":"제한 없이 입장 가능","legend":"에메랄드 드래곤","legendIcon":"🐉","legendCondition":"고급 미끼 사용 시 출현","desc":"맑고 푸른 에메랄드빛 호수"},
  {"id":"crystal","name":"별빛 계곡","icon":"💎","className":"isle-crystal","visual":"region-visual-crystal","level":40,"unlocked":true,"unlock":"제한 없이 입장 가능","legend":"수정 만타","legendIcon":"🐠","legendCondition":"협곡 수집률 70% 달성","desc":"수정 광석이 빛나는 협곡"},
  {"id":"coral","name":"산호 낙원","icon":"🏝","className":"isle-coral","visual":"region-visual-coral","level":50,"unlocked":true,"unlock":"제한 없이 입장 가능","legend":"산호 해룡","legendIcon":"🐉","legendCondition":"희귀 물고기 5종 획득","desc":"붉은 산호와 작은 섬들"},
  {"id":"rainbow","name":"황혼의 바다","icon":"🌅","className":"isle-rainbow","visual":"region-visual-rainbow","level":60,"unlocked":true,"unlock":"제한 없이 입장 가능","legend":"무지개 고래","legendIcon":"🐋","legendCondition":"폭포 지역 10회 낚시 성공","desc":"노을빛이 물든 등대 바다"},
  {"id":"storm","name":"폭풍의 해역","icon":"⚡","className":"isle-storm","visual":"region-visual-storm","level":70,"unlocked":true,"unlock":"제한 없이 입장 가능","legend":"폭풍 상어","legendIcon":"🦈","legendCondition":"폭풍 시간대 출현","desc":"거친 파도와 번개가 치는 해역"},
  {"id":"glacier","name":"영원의 빙하","icon":"❄️","className":"isle-glacier","visual":"region-visual-glacier","level":80,"unlocked":true,"unlock":"제한 없이 입장 가능","legend":"빙하 크라켄","legendIcon":"🦑","legendCondition":"도감 수집률 70% 달성","desc":"영원히 녹지 않는 빙하"},
  {"id":"abyss","name":"심연의 해구","icon":"🕳","className":"isle-abyss","visual":"region-visual-abyss","level":90,"unlocked":true,"unlock":"제한 없이 입장 가능","legend":"심연의 고래","legendIcon":"🐋","legendCondition":"전설 미끼 사용","desc":"깊고 어두운 심해 해구"},
  {"id":"origin","name":"태초의 심해","icon":"🌌","className":"isle-origin","visual":"region-visual-origin","level":100,"unlocked":true,"unlock":"제한 없이 입장 가능","legend":"창세 아틀란티스 드래곤","legendIcon":"🐉","legendCondition":"도감 수집률 95% 달성","desc":"모든 바다 생명의 기원이 잠든 최종 심해"}
];


const RODS=[
{id:'mist',name:'안개의 낚싯대',grade:'일반',level:1,effects:['희귀 확률 +3%','전설 확률 +0%','포인트 증가 +2%']},
{id:'moon',name:'월광의 낚싯대',grade:'희귀',level:3,effects:['희귀 확률 +15%','전설 확률 +3%','포인트 증가 +10%']},
{id:'jade',name:'비취의 낚싯대',grade:'희귀',level:1,effects:['희귀 확률 +12%','전설 확률 +2%','경험치 증가 +8%']},
{id:'crystal',name:'수정의 낚싯대',grade:'영웅',level:1,effects:['희귀 확률 +18%','전설 확률 +5%','포인트 증가 +12%']},
{id:'prism',name:'프리즘 낚싯대',grade:'영웅',level:1,effects:['희귀 확률 +20%','전설 확률 +6%','경험치 증가 +15%']},
{id:'coral',name:'산호의 낚싯대',grade:'영웅',level:1,effects:['희귀 확률 +22%','전설 확률 +7%','포인트 증가 +15%']},
{id:'storm',name:'폭풍의 낚싯대',grade:'영웅',level:1,effects:['희귀 확률 +25%','전설 확률 +8%','입질 속도 +10%']},
{id:'abyss',name:'심연의 낚싯대',grade:'전설',level:1,effects:['희귀 확률 +30%','전설 확률 +12%','포인트 증가 +20%']},
{id:'eternal',name:'영원의 낚싯대',grade:'전설',level:1,effects:['희귀 확률 +35%','전설 확률 +15%','경험치 증가 +25%']},
{id:'atlantis',name:'아틀란티스의 성창',grade:'신화',level:1,effects:['희귀 확률 +40%','전설 확률 +20%','포인트/경험치 +30%']}
];

const SHOP_ITEMS={
bait:[{id:'normal-bait',icon:'🪱',name:'일반 미끼 10개',desc:'기본 낚시용 미끼',price:100,type:'bait',amount:10},{id:'premium-bait',icon:'🪝',name:'고급 미끼 10개',desc:'희귀 물고기 확률 증가',price:500,type:'bait',amount:10},{id:'legend-bait',icon:'✨',name:'전설 미끼 1개',desc:'전설 물고기 입질 확률 증가',price:3000,type:'bait',amount:1}],
rod:[{id:'rod-enhance',icon:'🎣',name:'낚싯대 강화권',desc:'장착 낚싯대 강화에 사용',price:800,type:'ticket'},{id:'rare-upgrade',icon:'🎣',name:'희귀 확률 강화석',desc:'희귀 확률 증가 강화 재료',price:1200,type:'ticket'},{id:'legend-upgrade',icon:'🎣',name:'전설 확률 강화석',desc:'전설 확률 증가 강화 재료',price:2500,type:'ticket'},{id:'point-bonus',icon:'🎣',name:'포인트 보너스 부품',desc:'포인트 획득량 강화 재료',price:1500,type:'ticket'}],
skin:[{id:'penguin-blue',icon:'🐧',name:'펭펭이 블루 스킨',desc:'사이다 블루 컬러 스킨',price:2000,type:'skin'},{id:'hat-straw',icon:'👒',name:'밀짚 모자',desc:'낚시왕 분위기 코스튬',price:1200,type:'skin'},{id:'outfit-adventure',icon:'🦺',name:'탐험가 의상',desc:'세계지도 탐험 전용 의상',price:5000,type:'skin'},{id:'acc-bubble',icon:'🫧',name:'물방울 액세서리',desc:'낚시 성공 연출 강화',price:1800,type:'skin'}],
etc:[{id:'exp-booster',icon:'🧪',name:'경험치 2배 부스터',desc:'1일 동안 EXP 2배',price:300,type:'booster'},{id:'point-booster',icon:'💰',name:'포인트 2배 부스터',desc:'1일 동안 포인트 2배',price:500,type:'booster'},{id:'rare-booster',icon:'🍀',name:'희귀 확률 부스터',desc:'30분 동안 희귀 확률 증가',price:700,type:'booster'},{id:'coffee-raffle',icon:'☕',name:'커피 쿠폰 응모',desc:'이벤트 응모권',price:1000,type:'raffle'},{id:'store-raffle',icon:'🎟️',name:'편의점 상품권 응모',desc:'이벤트 응모권',price:2000,type:'raffle'},{id:'chicken-raffle',icon:'🍗',name:'치킨 기프티콘 응모',desc:'이벤트 응모권',price:5000,type:'raffle'},{id:'point-raffle',icon:'🎫',name:'포인트 추첨권',desc:'보너스 포인트 추첨',price:1500,type:'raffle'},{id:'special-raffle',icon:'🎁',name:'특별 경품 응모',desc:'시즌 한정 특별 경품',price:10000,type:'raffle'}]
};


const ACHIEVEMENTS = {
  collection:[
    {id:'collect-first', icon:'📖', title:'첫 도감 등록', desc:'물고기 1종을 도감에 등록하기', current:0, goal:1, reward:'50P'},
    {id:'collect-10', icon:'🧭', title:'초보 탐험가', desc:'물고기 10종 수집하기', current:0, goal:10, reward:'150P'},
    {id:'collect-30', icon:'🗺️', title:'섬의 기록자', desc:'물고기 30종 수집하기', current:0, goal:30, reward:'300P'},
    {id:'collect-50', icon:'🏆', title:'물고기 50종 수집', desc:'도감 50종 달성하기', current:0, goal:50, reward:'500P'},
    {id:'collect-75', icon:'📚', title:'도감 연구원', desc:'물고기 75종 수집하기', current:0, goal:75, reward:'고급 미끼 x2'},
    {id:'collect-100', icon:'🥇', title:'물고기 100종 수집', desc:'도감 100종 달성하기', current:0, goal:100, reward:'1,000P'},
    {id:'collect-150', icon:'💎', title:'희귀 표본 관리자', desc:'물고기 150종 수집하기', current:0, goal:150, reward:'2,000P'},
    {id:'collect-all', icon:'👑', title:'도감 완성', desc:'물고기 200종 전체 수집하기', current:0, goal:200, reward:'전설 미끼 x3'}
  ],
  fishing:[
    {id:'fish-first', icon:'🎣', title:'첫 낚시 성공', desc:'처음으로 낚시에 성공하기', current:0, goal:1, reward:'100P'},
    {id:'fish-5', icon:'🐟', title:'손맛 입문', desc:'낚시 5회 성공하기', current:0, goal:5, reward:'150P'},
    {id:'fish-10', icon:'🐠', title:'낚시 10회 성공', desc:'낚시 성공 10회 달성하기', current:0, goal:10, reward:'300P'},
    {id:'fish-30', icon:'🌊', title:'물살을 읽는 자', desc:'낚시 성공 30회 달성하기', current:0, goal:30, reward:'고급 미끼 x2'},
    {id:'fish-50', icon:'🚤', title:'바다 순찰대', desc:'낚시 성공 50회 달성하기', current:0, goal:50, reward:'700P'},
    {id:'fish-100', icon:'🏅', title:'낚시왕 입문', desc:'낚시 성공 100회 달성하기', current:0, goal:100, reward:'2,000P'},
    {id:'fish-200', icon:'⚓', title:'프로 낚시꾼', desc:'낚시 성공 200회 달성하기', current:0, goal:200, reward:'전설 미끼 x1'},
    {id:'fish-500', icon:'🌅', title:'바다의 전설', desc:'낚시 성공 500회 달성하기', current:0, goal:500, reward:'5,000P'}
  ],
  legend:[
    {id:'legend-first', icon:'✨', title:'전설의 시작', desc:'전설 물고기 1종 획득하기', current:0, goal:1, reward:'전설 미끼 x1'},
    {id:'legend-3', icon:'🌟', title:'전설 수집가', desc:'전설 물고기 3종 획득하기', current:0, goal:3, reward:'3,000P'},
    {id:'legend-5', icon:'🦄', title:'환상의 손맛', desc:'전설 물고기 5종 획득하기', current:0, goal:5, reward:'전설 미끼 x2'},
    {id:'legend-10', icon:'🔱', title:'아틀란티스의 선택', desc:'전설 물고기 10종 획득하기', current:0, goal:10, reward:'아틀란티스 응모권'},
    {id:'legend-12', icon:'🏛️', title:'고대 해역의 증인', desc:'전설 물고기 12종 획득하기', current:0, goal:12, reward:'4,000P'},
    {id:'legend-16', icon:'👑', title:'전설의 낚시왕', desc:'전설 물고기 16종 획득하기', current:0, goal:16, reward:'특별 칭호'},
    {id:'legend-origin', icon:'🐉', title:'태초의 심해 정복', desc:'태초의 심해 전설 물고기 발견하기', current:0, goal:1, reward:'전설 미끼 x3'},
    {id:'legend-master', icon:'🌌', title:'심해의 지배자', desc:'전설 등급 도감 완성하기', current:0, goal:16, reward:'10,000P'}
  ],
  finance:[
    {id:'finance-quiz', icon:'💡', title:'금융 퀴즈 완료', desc:'금융 퀴즈 1회 정답 맞히기', current:0, goal:1, reward:'200P'},
    {id:'finance-quiz-3', icon:'🧠', title:'금융 지식 탐험가', desc:'금융 퀴즈 3회 정답 맞히기', current:0, goal:3, reward:'500P'},
    {id:'finance-openbank', icon:'🏦', title:'오픈뱅킹 연결', desc:'오픈뱅킹 연결 완료하기', current:0, goal:1, reward:'고급 미끼 x1'},
    {id:'finance-product', icon:'📄', title:'상품 페이지 방문', desc:'상품 페이지 1회 방문하기', current:0, goal:1, reward:'100P'},
    {id:'finance-push', icon:'🔔', title:'앱 푸시 동의', desc:'푸시 동의 완료하기', current:0, goal:1, reward:'100P'},
    {id:'finance-attendance', icon:'📅', title:'꾸준한 출석', desc:'출석 체크 1회 완료하기', current:0, goal:1, reward:'100P'},
    {id:'finance-event', icon:'🎁', title:'이벤트 참여자', desc:'신규 이벤트 1회 참여하기', current:0, goal:1, reward:'500P'},
    {id:'finance-invite', icon:'🤝', title:'친구 초대', desc:'친구 초대 1회 완료하기', current:0, goal:1, reward:'고급 미끼 x2'}
  ]
};



const RANKING_DATA = {
  weekly:[],
  total:[],
  mine:[]
};


const state={
point:0,bait:0,lastCatch:null,selectedRegion:'안개의 섬',currentRodId:'moon',rodLevel:3,currentMissionTab:'daily',currentCollectionFilter:'전체',currentShopTab:'bait',currentAchievementTab:'collection',currentRankingTab:'weekly',discoveredFishIds:new Set(DISCOVERED_INITIAL),
missions:{
attendance:{tab:'daily',label:'출석 체크 1회',current:1,goal:1,reward:'100P',claimed:false,home:true,action:'reward'},
fish3:{tab:'daily',label:'낚시 3회 성공',current:0,goal:3,reward:'150P',claimed:false,home:true,action:'fishing'},
collect3:{tab:'daily',label:'물고기 3종 수집',current:0,goal:3,reward:'일반 미끼 x2',claimed:false,home:false,action:'collection'},
quiz:{tab:'daily',label:'금융 퀴즈 맞추기',current:0,goal:1,reward:'200P',claimed:false,home:true,action:'quiz'},
weeklyFish30:{tab:'weekly',label:'낚시 30회 성공',current:0,goal:30,reward:'1,500P',claimed:false,home:false,action:'fishing'},
weeklyRare5:{tab:'weekly',label:'희귀 물고기 5종 획득',current:0,goal:5,reward:'고급 미끼 x3',claimed:false,home:false,action:'collection'},
weeklyCollection30:{tab:'weekly',label:'도감 수집률 30% 달성',current:0,goal:30,reward:'전설 미끼 x1',claimed:false,home:false,action:'collection'},
weeklyLegend:{tab:'weekly',label:'전설 물고기 획득',current:0,goal:1,reward:'전설 미끼 x2',claimed:false,home:false,action:'collection'},
openbanking:{tab:'finance',label:'오픈뱅킹 연결',current:0,goal:1,reward:'고급 미끼 x1',claimed:false,home:false,action:'finance'},
deposit:{tab:'finance',label:'예적금 상품 가입',current:0,goal:1,reward:'1,000P',claimed:false,home:false,action:'finance'},
loan:{tab:'finance',label:'대출 실행',current:0,goal:1,reward:'전설 미끼 x1',claimed:false,home:false,action:'finance'},
eventJoin:{tab:'finance',label:'신규 이벤트 참여',current:0,goal:1,reward:'500P',claimed:false,home:false,action:'finance'},
financeQuiz:{tab:'finance',label:'금융 퀴즈 맞추기',current:0,goal:1,reward:'300P',claimed:false,home:false,action:'quiz'},
invite:{tab:'finance',label:'친구 초대하기',current:0,goal:1,reward:'고급 미끼 x2',claimed:false,home:false,action:'finance'},
push:{tab:'finance',label:'앱 푸시 동의',current:0,goal:1,reward:'100P',claimed:false,home:false,action:'finance'},
product:{tab:'finance',label:'상품 페이지 방문',current:0,goal:1,reward:'100P',claimed:false,home:true,action:'product'}
}};


function getRegionClass(region){
  const map={'안개의 섬':'region-mist','월광의 섬':'region-moon','에메랄드 호수':'region-emerald','별빛 계곡':'region-crystal','황혼의 바다':'region-rainbow','산호 낙원':'region-coral','폭풍의 해역':'region-storm','심연의 해구':'region-abyss','영원의 빙하':'region-glacier','태초의 심해':'region-origin'};
  return map[region] || 'region-emerald';
}

function setFishingRegion(region){
  state.selectedRegion = region;
  const screen = $('[data-screen="fishing"]');
  const title = $('#fishingRegionTitle');
  if(!screen) return;
  screen.dataset.currentRegion = region;
  screen.classList.remove('region-mist','region-moon','region-emerald','region-crystal','region-rainbow','region-coral','region-storm','region-abyss','region-glacier','region-origin','region-atlantis');
  screen.classList.add(getRegionClass(region));
  if(title) title.textContent = region;
}

function triggerCastAnimation(){
  const screen = $('[data-screen="fishing"]');
  const status = $('#fishStatus');
  if(!screen) return;
  screen.classList.remove('is-casting');
  void screen.offsetWidth;
  screen.classList.add('is-casting');
  if(status) status.textContent = '펭펭이가 낚싯대를 던졌어요!';
  clearTimeout(triggerCastAnimation.timer);
  triggerCastAnimation.timer = setTimeout(() => {
    if(status) status.textContent = '입질 타이밍을 맞춰보세요!';
  }, 1150);
}



function getRegionByName(name){
  return REGION_DATA.find(region => region.name === name) || REGION_DATA[2];
}

const HOME_MAP_CLASSES = [
  'map-mist',
  'map-moonlight',
  'map-emerald',
  'map-starlight',
  'map-coral',
  'map-twilight',
  'map-storm',
  'map-glacier',
  'map-abyss',
  'map-primordial'
];

const HOME_MAP_BY_REGION = {
  '안개의 섬': {className:'map-mist', title:'안개의 섬'},
  '월광의 섬': {className:'map-moonlight', title:'월광의 섬'},
  '에메랄드 호수': {className:'map-emerald', title:'에메랄드 호수'},
  '별빛 계곡': {className:'map-starlight', title:'별빛 계곡'},
  '황혼의 바다': {className:'map-twilight', title:'황혼의 바다'},
  '산호 낙원': {className:'map-coral', title:'산호 낙원'},
  '폭풍의 해역': {className:'map-storm', title:'폭풍의 해역'},
  '심연의 해구': {className:'map-abyss', title:'심연의 해구'},
  '영원의 빙하': {className:'map-glacier', title:'영원의 빙하'},
  '태초의 심해': {className:'map-primordial', title:'태초의 심해'}
};

function getHomeMapInfo(regionName){
  return HOME_MAP_BY_REGION[regionName] || HOME_MAP_BY_REGION['에메랄드 호수'];
}

function getRegionCollectionProgress(regionName){
  const regionFish = getRegionFish(regionName);
  const discovered = regionFish.filter(fish => state.discoveredFishIds.has(fish.id)).length;
  const total = regionFish.length;
  const percent = total > 0 ? Math.round((discovered / total) * 100) : 0;
  return {discovered, total, percent};
}

function renderHomeMap(){
  const homeScreen = $('[data-screen="home"]');
  if(!homeScreen) return;

  const mapCard = $('.map-card', homeScreen);
  const regionName = state.selectedRegion || '안개의 섬';
  const info = getHomeMapInfo(regionName);

  // 기존 호환을 위해 homeScreen에도 클래스는 유지하되, 실제 배경은 .map-card에서 제어합니다.
  homeScreen.classList.remove(...HOME_MAP_CLASSES);
  homeScreen.classList.add(info.className);

  if(mapCard){
    mapCard.classList.remove(...HOME_MAP_CLASSES);
    mapCard.classList.add(info.className);
  }

  const title = $('.map-title', homeScreen);
  if(title) title.textContent = info.title;

  const progress = getRegionCollectionProgress(regionName);
  const spans = $$('.map-progress span.progress-text', homeScreen);

  if(spans[0]) spans[0].innerHTML = `<span>수집률</span> <strong>${progress.percent}%</strong>`;
  if(spans[1]) spans[1].innerHTML = `<strong>${progress.discovered} / ${progress.total}</strong>`;
}

function getRegionFish(regionName){
  return ALL_FISH.filter(fish => fish.region === regionName);
}

function renderRegionDetail(regionName = state.selectedRegion){
  const region = getRegionByName(regionName);
  const {discovered, total, percent} = getRegionCollectionProgress(region.name);

  const title = $('#regionTitle');
  const visual = $('#regionVisual');
  const donut = $('#regionDonut');
  const count = $('#regionFishCount');
  const level = $('#regionLevel');
  const unlock = $('#regionUnlock');
  const legendIcon = $('#regionLegendIcon');
  const legendName = $('#regionLegendName');
  const legendCondition = $('#regionLegendCondition');
  const enterBtn = $('#regionEnterBtn');

  if(title) title.textContent = region.name;
  if(visual){
    visual.className = `region-visual ${region.visual || 'region-visual-emerald'}`;
  }
  if(donut){
    donut.style.setProperty('--value', percent);
    const b = $('b', donut);
    if(b) b.textContent = `${percent}%`;
  }
  if(count) count.textContent = `${discovered} / ${total} 종`;
  if(level) level.textContent = `Lv.${region.level}`;
  if(unlock) unlock.textContent = region.unlock || '기본 지역';
  if(legendIcon) legendIcon.textContent = region.unlocked ? region.legendIcon : '❔';
  if(legendName) legendName.textContent = region.legend || '전설 물고기';
  if(legendCondition) legendCondition.textContent = region.unlocked ? region.legendCondition : `Lv.${region.level} 달성 후 확인`;

  if(enterBtn){
    enterBtn.disabled = false;
    enterBtn.classList.remove('is-locked');
    enterBtn.innerHTML = '입장하기 <small>🎟 -1</small>';
  }
}


function renderWorldMap(){
  const map = $('#worldMap');
  const count = $('#mapCount');
  const unlockedCount = REGION_DATA.filter(region => region.unlocked !== false).length;
  if(count) count.textContent = `${unlockedCount}/${REGION_DATA.length}`;
  if(!map) return;

  map.innerHTML = REGION_DATA.map((region, index) => {
    const selected = region.name === state.selectedRegion;
    const status = selected ? '선택됨' : '입장 가능';
    return `<button type="button"
      class="island-node ${region.className} unlocked ${selected ? 'selected' : ''}"
      data-region="${region.name}"
      style="--i:${index}">
      <span class="island-shape"></span>
      <span class="island-image"></span>
      <small>${status}</small>
    </button>`;
  }).join('');
}


function gradeClass(g){return g==='신화'?'myth':g==='전설'?'legend':g==='영웅'?'hero':g==='희귀'?'rare':'normal';}
function toast(t){const el=$('#toast'); if(!el)return; el.textContent=t; el.classList.add('is-show'); clearTimeout(toast.timer); toast.timer=setTimeout(()=>el.classList.remove('is-show'),1600);}
function modal(title,body){const el=$('#appModal'); if(!el)return; $('#modalTitle').textContent=title; $('#modalBody').innerHTML=body; el.classList.add('is-open');}
function closeModal(){const el=$('#appModal'); if(el)el.classList.remove('is-open');}
function showScreen(name){
  if(name === 'fishing') setFishingRegion(state.selectedRegion || '안개의 섬');
  $$('.screen').forEach(s=>s.classList.toggle('is-active',s.dataset.screen===name));
  $$('.bottom-nav button').forEach(b=>b.classList.toggle('active',b.dataset.go===name));
  closeModal();
  const d=$('.device');
  if(d)d.scrollTop=0;
  renderAll();
  if(name === 'fishing'){
    setFishingRegion(state.selectedRegion || '안개의 섬');
    triggerCastAnimation();
  }
}

function syncMissions(){const pct=Math.round((state.discoveredFishIds.size/ALL_FISH.length)*100); if(!state.missions.weeklyCollection30.claimed)state.missions.weeklyCollection30.current=Math.min(30,pct); if(!state.missions.collect3.claimed)state.missions.collect3.current=Math.min(3,state.discoveredFishIds.size);}
function completeMission(k,a=1){const m=state.missions[k]; if(m&&!m.claimed)m.current=Math.min(m.goal,m.current+a);}
function setMission(k,v){const m=state.missions[k]; if(m&&!m.claimed)m.current=Math.min(m.goal,v);}
function claimMission(k){const m=state.missions[k]; if(!m)return toast('미션 정보를 찾을 수 없습니다.'); if(m.current<m.goal)return toast('아직 미션을 완료하지 않았습니다.'); if(m.claimed)return toast('이미 수령한 보상입니다.'); m.claimed=true; if(m.reward.includes('P'))state.point+=Number(m.reward.replace(/[^0-9]/g,''))||0; if(m.reward.includes('미끼'))state.bait+=Number(m.reward.replace(/[^0-9]/g,''))||1; toast(`${m.reward} 보상을 수령했습니다.`); renderAll();}
function missionButton(k,m){const done=m.current>=m.goal; if(m.claimed)return '<button type="button" disabled>완료</button>'; if(done)return `<button type="button" data-claim-mission="${k}">수령</button>`; if(m.action==='fishing')return '<button type="button" data-go="fishing">이동</button>'; if(m.action==='collection')return '<button type="button" data-go="collection">이동</button>'; if(m.action==='quiz')return '<button type="button" data-quiz>이동</button>'; if(m.action==='product')return '<button type="button" data-product-mission>이동</button>'; if(m.action==='finance')return `<button type="button" data-finance-mission="${k}">진행</button>`; return '<button type="button">확인</button>';}

function renderMissions(){syncMissions(); $$('[data-home-mission]').forEach(li=>{const m=state.missions[li.dataset.homeMission]; if(!m)return; const done=m.current>=m.goal; const sp=$('span.icon',li),em=$('em',li); if(sp){sp.textContent=''; sp.classList.toggle('ok',done);} if(em)em.textContent=m.claimed?'수령완료':done?'완료':`${m.current}/${m.goal}`; li.classList.toggle('is-complete',done);}); $$('[data-mission-tab]').forEach(b=>b.classList.toggle('active',b.dataset.missionTab===state.currentMissionTab)); const list=$('#missionTaskList'); if(!list)return; const rows=Object.entries(state.missions).filter(([,m])=>m.tab===state.currentMissionTab); list.innerHTML=rows.map(([k,m])=>`<article class="${m.claimed?'is-done':m.current>=m.goal?'is-ready':''}"><div><strong>${m.label}</strong><progress value="${m.current}" max="${m.goal}"></progress><small class="task-count">${m.current}/${m.goal}</small></div><b>${m.reward}</b>${missionButton(k,m)}</article>`).join('');}

function renderCollection(filter=state.currentCollectionFilter){
  syncMissions(); state.currentCollectionFilter=filter;
  $$('[data-filter]').forEach(b=>b.classList.toggle('active',b.dataset.filter===filter));
  const discovered=state.discoveredFishIds.size,pct=Math.round(discovered/ALL_FISH.length*100);
  const count=$('#collectionCount'),donut=$('#collectionDonut'),grid=$('#fishGrid'),info=$('#collectionFilterInfo');
  if(count)count.textContent=`${discovered} / ${ALL_FISH.length} 종류`;
  if(donut){donut.style.setProperty('--value',pct); const b=$('b',donut); if(b)b.textContent=`${pct}%`;}
  const arr=filter==='전체'?ALL_FISH:ALL_FISH.filter(f=>f.grade===filter);
  if(info)info.textContent=`${filter} ${arr.length}종 · 발견 ${arr.filter(f=>state.discoveredFishIds.has(f.id)).length}종`;
  if(!grid)return;
  grid.innerHTML=arr.map(f=>{const ok=state.discoveredFishIds.has(f.id); const type=f.type||'fish'; const typeLabel=f.typeLabel||'일반어류'; const visual=ok&&f.image?`<img class="fish-asset" src="${f.image}" alt="${f.name}" loading="lazy">`:`<span class="fish-symbol fish-${type}" aria-label="${ok?typeLabel:'미발견'}">${ok?f.icon:'?'}</span>`; return `<button type="button" class="${ok?'':'unknown'}" data-fish-id="${f.id}" data-grade="${f.grade}" data-type="${type}">${visual}<strong>${ok?f.name:'?????'}</strong><small>${f.grade}${ok?' · '+typeLabel:' · 미발견'}</small></button>`;}).join('');
}
function renderFishDetail(id){
  const f=ALL_FISH.find(x=>x.id===Number(id))||ALL_FISH[0],screen=$('[data-screen="fishDetail"]'); if(!screen)return;
  const h=$('.sub-header strong',screen),icon=$('.fish-detail-visual div',screen),title=$('.fish-detail-visual h1',screen),badge=$('.fish-detail-visual .badge',screen),star=$('.fish-detail-visual p',screen),rows=$$('.detail-table dd',screen);
  if(h)h.textContent=f.name;
  if(icon)icon.innerHTML=f.image?`<img class="fish-detail-asset" src="${f.image}" alt="${f.name}">`:`<span class="fish-detail-emoji fish-symbol fish-${f.type||'fish'}" aria-label="${f.typeLabel||'일반어류'}">${f.icon}</span>`;
  if(title)title.textContent=f.name;
  if(badge){badge.textContent=f.grade; badge.className=`badge ${gradeClass(f.grade)}`;}
  if(star)star.textContent=f.stars;
  if(rows[0])rows[0].textContent=f.region;
  if(rows[1])rows[1].textContent=f.date;
  if(rows[2])rows[2].textContent=f.size;
  if(rows[3])rows[3].textContent=f.desc;
}
function currentRod(){return RODS.find(r=>r.id===state.currentRodId)||RODS[0];}
function renderRods(){const r=currentRod(),card=$('#equippedRodCard'),icon=$('#equippedRodIcon'),grade=$('#equippedRodGrade'),name=$('#equippedRodName'); if(card)card.className=`equipped-card ${gradeClass(r.grade)}`; if(icon){icon.textContent='🎣'; icon.className=`rod-img ${gradeClass(r.grade)}`;} if(grade){grade.textContent=`${r.grade} · 장착 중`; grade.className=`badge ${gradeClass(r.grade)}`;} if(name)name.textContent=`${r.name} +${state.rodLevel}`; ['equippedRodEffect1','equippedRodEffect2','equippedRodEffect3'].forEach((id,i)=>{const el=$('#'+id); if(el)el.textContent=r.effects[i];}); const grid=$('#rodGrid'); if(grid)grid.innerHTML=RODS.map(x=>`<button type="button" data-rod-id="${x.id}" class="${gradeClass(x.grade)} ${x.id===state.currentRodId?'is-equipped':''}"><span class="rod-symbol">🎣</span><strong>${x.name}</strong><small>${x.grade}</small></button>`).join('');}
function renderShop(){ $$('[data-shop-tab]').forEach(b=>b.classList.toggle('active',b.dataset.shopTab===state.currentShopTab)); const list=$('#shopList'),items=SHOP_ITEMS[state.currentShopTab]||[]; if(list)list.innerHTML=items.map(x=>`<article data-buy-id="${x.id}"><span>${x.icon}</span><div><strong>${x.name}</strong><small>${x.desc}</small></div><b>${x.price.toLocaleString()}P</b></article>`).join('');}

function getAchievementProgress(item){
  if(item.id.startsWith('collect-')){
    return Math.min(item.goal, state.discoveredFishIds.size);
  }
  if(item.id.startsWith('fish-')){
    return Math.min(item.goal, state.missions.weeklyFish30.current);
  }
  if(item.id.startsWith('legend-')){
    const count = ALL_FISH.filter(f => f.grade === '전설' && state.discoveredFishIds.has(f.id)).length;
    return Math.min(item.goal, count);
  }
  if(item.id === 'finance-quiz'){
    return state.missions.quiz.current >= 1 || state.missions.financeQuiz.current >= 1 ? 1 : 0;
  }
  if(item.id === 'finance-quiz-3'){
    return Math.min(item.goal, (state.missions.quiz.current || 0) + (state.missions.financeQuiz.current || 0));
  }
  if(item.id === 'finance-openbank'){
    return state.missions.openbanking.current;
  }
  if(item.id === 'finance-product'){
    return state.missions.product.current;
  }
  if(item.id === 'finance-push'){
    return state.missions.push.current;
  }
  if(item.id === 'finance-attendance'){
    return state.missions.attendance.current;
  }
  if(item.id === 'finance-event'){
    return state.missions.eventJoin.current;
  }
  if(item.id === 'finance-invite'){
    return state.missions.invite.current;
  }
  if(item.id === 'legend-origin'){
    return ALL_FISH.some(f => f.grade === '전설' && f.region === '태초의 심해' && state.discoveredFishIds.has(f.id)) ? 1 : 0;
  }
  if(item.id === 'legend-master'){
    const count = ALL_FISH.filter(f => f.grade === '전설' && state.discoveredFishIds.has(f.id)).length;
    return Math.min(item.goal, count);
  }
  return item.current || 0;
}

function renderAchievements(){
  $$('[data-achievement-tab]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.achievementTab === state.currentAchievementTab);
  });

  const list = $('#achievementList');
  if(!list) return;

  const items = ACHIEVEMENTS[state.currentAchievementTab] || [];
  list.innerHTML = items.map(item => {
    const current = getAchievementProgress(item);
    const complete = current >= item.goal;
    return `<article class="${complete ? 'is-complete' : ''}">
      <span>${item.icon}</span>
      <div>
        <strong>${item.title}</strong>
        <small>${item.desc}</small>
        <progress value="${current}" max="${item.goal}"></progress>
        <em>${current}/${item.goal}</em>
      </div>
      <b>${complete ? '완료' : item.reward}</b>
    </article>`;
  }).join('');
}



function renderHomeStats(){
  const point = $('#homePoint');
  const shopPoint = $('#shopPoint');
  const bait = $('#homeBait');
  const level = $('#homeLevel');
  const expText = $('#homeExpText');
  const progress = $('.profile-info .progress i');

  const info = getPlayerLevelInfo();
  const levelValue = info.level;
  const currentExp = info.currentExp;
  const nextExp = info.nextExp;

  if(point) point.textContent = `${state.point.toLocaleString()} P`;
  if(shopPoint) shopPoint.textContent = `${state.point.toLocaleString()}P`;
  if(bait) bait.textContent = `${state.bait} 개`;
  if(level) level.textContent = `Lv.${levelValue} 펭펭이`;
  if(expText) expText.textContent = `EXP ${currentExp.toLocaleString()} / ${nextExp.toLocaleString()}`;
  if(progress) progress.style.width = `${Math.round((currentExp / nextExp) * 100)}%`;
}


function getPlayerLevelInfo(){
  const exp = state.discoveredFishIds.size * 40 + state.missions.weeklyFish30.current * 25;
  const level = Math.max(1, Math.floor(exp / 500) + 1);
  const currentExp = exp % 500;
  return {level, currentExp, nextExp:500};
}

function renderRanking(){
  $$('[data-ranking-tab]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.rankingTab === state.currentRankingTab);
  });

  const list = $('#rankingList');
  if(!list) return;

  const player = getPlayerLevelInfo();
  const rows = (RANKING_DATA[state.currentRankingTab] || []).map(item => {
    if(!item.mine) return item;
    return {...item, level:player.level, point:state.point};
  });

  if(!rows.length){
    const emptyText = state.currentRankingTab === 'mine'
      ? '아직 내 순위 기록이 없습니다.'
      : '아직 랭킹 데이터가 없습니다.';
    list.innerHTML = `<li class="empty">
      <b>-</b>
      <span>🐧</span>
      <div>
        <strong>${emptyText}</strong>
        <small>낚시를 성공하면 랭킹이 집계됩니다.</small>
      </div>
      <em>0P</em>
    </li>`;
    return;
  }

  list.innerHTML = rows.map(item => {
    const medal = item.rank === 1 ? '🥇' : item.rank === 2 ? '🥈' : item.rank === 3 ? '🥉' : item.rank;
    const sub = item.label ? `${item.label} · Lv.${item.level}` : `Lv.${item.level}`;
    return `<li class="${item.mine ? 'my' : ''}">
      <b>${medal}</b>
      <span>${item.icon}</span>
      <div>
        <strong>${item.name}</strong>
        <small>${sub}</small>
      </div>
      <em>${Number(item.point).toLocaleString()}P</em>
    </li>`;
  }).join('');
}



function renderFishingTime(){
  const timeEl = $('#fishingTime');
  if(!timeEl) return;

  const now = new Date();
  const hour = now.getHours();
  const minute = String(now.getMinutes()).padStart(2, '0');
  const period = hour < 12 ? 'AM' : 'PM';
  const displayHour = hour % 12 || 12;
  const icon = hour >= 6 && hour < 18 ? '☀' : '🌙';

  timeEl.textContent = `${icon} ${displayHour}:${minute} ${period}`;
}

function renderAll(){renderFishingTime(); renderHomeMap(); renderRegionDetail(); renderWorldMap(); renderHomeStats(); renderMissions(); renderCollection(state.currentCollectionFilter); renderRods(); renderShop(); renderAchievements(); renderRanking();}


function getFishPoolByJudgement(j){
  const regionFish = getRegionFish(state.selectedRegion || '안개의 섬');
  const source = regionFish.length ? regionFish : ALL_FISH;

  if(j.result === 'perfect' || j.result === 'success'){
    return source;
  }
  return [];
}

function pickWeightedFishByGrade(source, gradeWeights){
  const buckets = Object.entries(gradeWeights)
    .map(([grade, weight]) => ({
      grade,
      weight,
      fishes: source.filter(f => f.grade === grade)
    }))
    .filter(bucket => bucket.weight > 0 && bucket.fishes.length > 0);

  if(buckets.length === 0) return source[Math.floor(Math.random() * source.length)];

  const totalWeight = buckets.reduce((sum, bucket) => sum + bucket.weight, 0);
  let roll = Math.random() * totalWeight;

  for(const bucket of buckets){
    roll -= bucket.weight;
    if(roll <= 0){
      return bucket.fishes[Math.floor(Math.random() * bucket.fishes.length)];
    }
  }

  const lastBucket = buckets[buckets.length - 1];
  return lastBucket.fishes[Math.floor(Math.random() * lastBucket.fishes.length)];
}

function pickFishByJudgement(j){
  const pool = getFishPoolByJudgement(j);
  if(pool.length === 0) return null;

  if(j.result === 'perfect'){
    return pickWeightedFishByGrade(pool, {
      '일반': 62,
      '희귀': 28,
      '영웅': 8,
      '전설': 2
    });
  }

  if(j.result === 'success'){
    return pickWeightedFishByGrade(pool, {
      '일반': 94,
      '희귀': 6,
      '영웅': 0,
      '전설': 0
    });
  }

  return null;
}

function getRewardByResult(j, fish){
  if(j.result === 'perfect'){
    const gradeBonus = fish && fish.grade === '전설' ? 1000 : fish && fish.grade === '영웅' ? 700 : 500;
    return {point: gradeBonus, exp: 80};
  }
  if(j.result === 'success'){
    const gradeBonus = fish && fish.grade === '희귀' ? 300 : 150;
    return {point: gradeBonus, exp: 40};
  }
  return {point: 0, exp: 0};
}

function applyFishingData(j, fish, reward){
  if(j.result === 'fail') return false;

  state.point += reward.point;
  completeMission('fish3', 1);
  completeMission('weeklyFish30', 1);

  if(fish){
    const wasNew = !state.discoveredFishIds.has(fish.id);
    state.discoveredFishIds.add(fish.id);
    if(fish.grade === '희귀') completeMission('weeklyRare5', 1);
    if(fish.grade === '전설') setMission('weeklyLegend', 1);
    return wasNew;
  }
  return false;
}


function judgement(){const p=$('#gaugePointer'),best=$('.gauge .best'),goods=$$('.gauge .good'); if(!p||!best)return{result:'fail',label:'MISS'}; const c=p.getBoundingClientRect().left+p.getBoundingClientRect().width/2,b=best.getBoundingClientRect(); if(c>=b.left&&c<=b.right)return{result:'perfect',label:'PERFECT'}; for(const g of goods){const r=g.getBoundingClientRect(); if(c>=r.left&&c<=r.right)return{result:'success',label:'GOOD'};} return{result:'fail',label:'MISS'};}

function getSingleResultIcon(icon){
  const value = String(icon || '').trim();
  return value || '🐟';
}

function fishingResult(j){
  const title=$('#resultTitle'),fishEl=$('#resultFish'),badge=$('#resultBadge'),name=$('#resultName'),grade=$('#resultGrade'),rewards=$('#resultRewards'),share=$('#shareBtn'),card=$('#resultCard');
  const success=j.result!=='fail';
  const caughtFish = success ? pickFishByJudgement(j) : null;
  const reward = getRewardByResult(j, caughtFish);
  const isNew = applyFishingData(j, caughtFish, reward);

  if(card){card.classList.remove('is-fail','is-success','is-perfect');card.classList.add(j.result==='fail'?'is-fail':j.result==='perfect'?'is-perfect':'is-success');}

  if(success && caughtFish){
    if(title) title.textContent = j.result === 'perfect' ? '완벽한 타이밍!' : '낚시 성공!';
    if(fishEl){ fishEl.textContent = ''; if(caughtFish.image){ const img=document.createElement('img'); img.className='result-fish-asset'; img.src=caughtFish.image; img.alt=caughtFish.name; fishEl.append(img); } else { fishEl.append(document.createTextNode(getSingleResultIcon(caughtFish.icon))); } }
    if(name) name.textContent = caughtFish.name;
    if(grade) grade.textContent = caughtFish.grade;
    if(badge){badge.textContent = isNew ? 'NEW' : j.label; badge.style.display='inline-grid';}
    if(rewards) rewards.innerHTML = `<li><b>🪱 +${reward.point.toLocaleString()} P</b><span>포인트</span></li><li><b>💧 +${reward.exp} EXP</b><span>경험치</span></li><li><b>📖 도감 ${isNew ? '등록' : '등록 완료'}</b><span>${isNew ? '신규 발견' : '보유중'}</span></li>`;
    state.lastCatch = {
      fishId: caughtFish.id,
      name: caughtFish.name,
      grade: caughtFish.grade,
      icon: getSingleResultIcon(caughtFish.icon),
      image: caughtFish.image || '',
      type: caughtFish.type || 'fish',
      region: state.selectedRegion,
      judgement: j.label,
      point: reward.point,
      exp: reward.exp,
      isNew
    };
  } else {
    state.lastCatch = null;
    if(title)title.textContent='낚시 실패'; if(fishEl){ fishEl.textContent=''; fishEl.append(document.createTextNode('💦')); } if(name)name.textContent='아쉽게 놓쳤어요'; if(grade)grade.textContent='MISS'; if(badge)badge.style.display='none'; if(rewards)rewards.innerHTML='<li><b>타이밍이 성공 영역을 벗어났어요.</b><span>실패</span></li><li><b>다시 도전해보세요!</b><span>미끼 -1</span></li>';
  }
  if(share)share.style.display=success?'':'none';
  renderAll();
}

async function shareLastCatch(){
  const c = state.lastCatch;
  if(!c){
    toast('자랑할 낚시 결과가 없습니다.');
    return;
  }
  const title = '사이다 낚시왕 낚시 결과';
  const text = `${c.icon} ${c.name}(${c.grade}) 획득!\n지역: ${c.region}\n보상: +${c.point.toLocaleString()}P / +${c.exp}EXP${c.isNew ? '\n신규 도감 등록!' : ''}`;
  try{
    if(navigator.share){
      await navigator.share({title, text});
      setMission('invite', 1);
      renderAll();
      return;
    }
    if(navigator.clipboard && navigator.clipboard.writeText){
      await navigator.clipboard.writeText(`${title}\n${text}`);
      setMission('invite', 1);
      renderAll();
      toast('낚시 결과를 클립보드에 복사했습니다.');
      return;
    }
  }catch(err){
    if(err && err.name === 'AbortError') return;
  }
  modal('자랑하기', `<p style="line-height:1.55;white-space:pre-line;margin:0">${text}</p>`);
}

document.addEventListener('click',e=>{const t=e.target;
if(t.closest('[data-close-modal]')){closeModal();return;}
if(t.closest('#shareBtn')){shareLastCatch();return;}
if(t.closest('#catchBtn')){const j=judgement(); const st=$('#fishStatus'); if(st)st.textContent=j.result==='fail'?'MISS! 물고기를 놓쳤어요.':`${j.label}! 물고기를 낚았어요!`; fishingResult(j); showScreen('result'); return;}
const rt=t.closest('[data-ranking-tab]'); if(rt){state.currentRankingTab=rt.dataset.rankingTab; renderRanking(); toast(`${rt.textContent.trim()}을 표시합니다.`); return;}
const at=t.closest('[data-achievement-tab]'); if(at){state.currentAchievementTab=at.dataset.achievementTab; renderAchievements(); toast(`${at.textContent.trim()} 업적을 표시합니다.`); return;}
const mt=t.closest('[data-mission-tab]'); if(mt){state.currentMissionTab=mt.dataset.missionTab; renderMissions(); toast(`${mt.textContent.trim()}을 표시합니다.`); return;}
const cf=t.closest('[data-filter]'); if(cf){renderCollection(cf.dataset.filter); toast(`${cf.dataset.filter} 물고기를 표시합니다.`); return;}
const st=t.closest('[data-shop-tab]'); if(st){state.currentShopTab=st.dataset.shopTab; renderShop(); toast(`${st.textContent.trim()} 상품을 표시합니다.`); return;}
const claim=t.closest('[data-claim-mission]'); if(claim){claimMission(claim.dataset.claimMission); return;}
if(t.closest('[data-quiz]')){modal('금융 퀴즈','<p style="line-height:1.55;margin:0 0 14px">예금자보호 한도는 얼마일까요?</p><ul><li class="quiz-answer" data-answer="wrong">① 3천만원</li><li class="quiz-answer" data-answer="right">② 5천만원</li><li class="quiz-answer" data-answer="wrong">③ 1억원</li></ul>'); return;}
const qa=t.closest('.quiz-answer'); if(qa){if(qa.dataset.answer==='right'){closeModal(); setMission('quiz',1); setMission('financeQuiz',1); toast('정답입니다! 금융 퀴즈 미션 완료'); renderAll();}else toast('아쉬워요. 다시 선택해보세요.'); return;}
const fin=t.closest('[data-finance-mission]'); if(fin){setMission(fin.dataset.financeMission,1); renderAll(); modal('금융 미션','<p style="line-height:1.55;margin:0">데모에서는 해당 금융 미션을 완료 처리했습니다.<br>수령 버튼을 눌러 보상을 받을 수 있습니다.</p>'); return;}
if(t.closest('[data-product-mission], #productBanner')){setMission('product',1); renderAll(); modal('상품 페이지 방문','<p style="line-height:1.55;margin:0">상품 페이지 방문 미션이 완료되었습니다.</p>'); return;}
const go=t.closest('[data-go]'); if(go){showScreen(go.dataset.go); return;}
const fc=t.closest('[data-fish-id]'); if(fc){const id=Number(fc.dataset.fishId); if(!state.discoveredFishIds.has(id)){toast('아직 발견하지 못한 물고기입니다.');return;} renderFishDetail(id); showScreen('fishDetail'); return;}
const rc=t.closest('[data-rod-id]'); if(rc){state.currentRodId=rc.dataset.rodId; state.rodLevel=currentRod().level; renderRods(); toast(`${currentRod().name} 장착 완료`); return;}
if(t.closest('#enhanceBtn')){if(state.point<500){toast('강화에 필요한 포인트가 부족합니다.');return;} state.point-=500; state.rodLevel+=1; renderRods(); toast(`${currentRod().name} 강화 성공! +${state.rodLevel}`); return;}
const bi=t.closest('[data-buy-id]'); if(bi){const item=Object.values(SHOP_ITEMS).flat().find(x=>x.id===bi.dataset.buyId); if(!item)return; if(state.point<item.price){toast('포인트가 부족합니다.');return;} state.point-=item.price; if(item.type==='bait')state.bait+=item.amount||1; renderAll(); modal('구매 완료',`<p style="line-height:1.55;margin:0"><strong>${item.name}</strong>을 구매했습니다.<br>차감 포인트: ${item.price.toLocaleString()}P</p>`); return;}
const region=t.closest('[data-region]'); if(region){
const regionName=region.dataset.region;
const data=getRegionByName(regionName);
state.selectedRegion=regionName;
setFishingRegion(regionName);
const h=$('[data-screen="region"] .sub-header strong'); if(h)h.textContent=regionName;
renderWorldMap();
renderRegionDetail(regionName);
showScreen('region'); return;}

});

$('#notifyBtn')?.addEventListener('click',()=>modal('알림','<ul><li>🎣 오늘의 입질 이벤트가 시작되었습니다.</li><li>🎁 미션 보상을 수령할 수 있습니다.</li><li>📖 새로운 물고기가 도감에 등록되었습니다.</li></ul>'));
$('#menuBtn')?.addEventListener('click',()=>modal('전체 메뉴','<button class="menu-item" data-go="map">세계지도 <span>›</span></button><button class="menu-item" data-go="shop">포인트 상점 <span>›</span></button><button class="menu-item" data-go="ranking">랭킹 <span>›</span></button><button class="menu-item" data-go="mission">미션 <span>›</span></button>'));

renderAll();
})();
