
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
{id:'mist',name:'안개의 낚싯대',grade:'일반',level:1,price:0,rareBonus:3,epicBonus:0,legendBonus:0,pointBonus:2,effects:['희귀 확률 +3%','전설 확률 +0%','포인트 증가 +2%']},
{id:'emerald',name:'에메랄드 낚싯대',grade:'희귀',level:10,price:5000,rareBonus:2,epicBonus:0.2,legendBonus:0,pointBonus:3,effects:['희귀 확률 +2%','영웅 확률 +0.2%','포인트 증가 +3%']},
{id:'moon',name:'월광의 낚싯대',grade:'희귀',level:20,price:20000,rareBonus:2,epicBonus:0.3,legendBonus:0.01,pointBonus:5,effects:['희귀 확률 +2%','영웅 확률 +0.3%','전설 확률 +0.01%']},
{id:'star',name:'별빛의 낚싯대',grade:'영웅',level:25,price:50000,rareBonus:1,epicBonus:0.5,legendBonus:0.02,pointBonus:8,effects:['희귀 확률 +1%','영웅 확률 +0.5%','전설 확률 +0.02%']},
{id:'coral',name:'산호의 낚싯대',grade:'영웅',level:35,price:100000,rareBonus:1,epicBonus:0.8,legendBonus:0.03,pointBonus:10,effects:['희귀 확률 +1%','영웅 확률 +0.8%','전설 확률 +0.03%']},
{id:'twilight',name:'황혼의 낚싯대',grade:'영웅',level:45,price:250000,rareBonus:1,epicBonus:1.0,legendBonus:0.03,pointBonus:12,effects:['희귀 확률 +1%','영웅 확률 +1.0%','포인트 증가 +12%']},
{id:'storm',name:'폭풍의 낚싯대',grade:'영웅',level:50,price:500000,rareBonus:0,epicBonus:1.2,legendBonus:0.04,pointBonus:13,effects:['영웅 확률 +1.2%','전설 확률 +0.04%','포인트 증가 +13%']},
{id:'glacier',name:'빙하의 낚싯대',grade:'영웅',level:55,price:750000,rareBonus:0,epicBonus:1.3,legendBonus:0.04,pointBonus:14,effects:['영웅 확률 +1.3%','전설 확률 +0.04%','포인트 증가 +14%']},
{id:'abyss',name:'심연의 낚싯대',grade:'전설',level:60,price:1000000,rareBonus:0,epicBonus:1.5,legendBonus:0.05,pointBonus:15,effects:['영웅 확률 +1.5%','전설 확률 +0.05%','포인트 증가 +15%']},
{id:'origin',name:'태초의 낚싯대',grade:'전설',level:70,price:2000000,rareBonus:0,epicBonus:2.0,legendBonus:0.08,pointBonus:20,effects:['영웅 확률 +2.0%','전설 확률 +0.08%','포인트 증가 +20%']},
{id:'gold',name:'황금 낚싯대',grade:'전설',level:75,price:3000000,rareBonus:0,epicBonus:2.2,legendBonus:0.08,pointBonus:22,effects:['영웅 확률 +2.2%','전설 확률 +0.08%','포인트 증가 +22%']},
{id:'dragon',name:'용왕의 낚싯대',grade:'전설',level:80,price:5000000,rareBonus:0,epicBonus:2.5,legendBonus:0.09,pointBonus:25,effects:['영웅 확률 +2.5%','전설 확률 +0.09%','포인트 증가 +25%']},
{id:'deepking',name:'심해군주의 낚싯대',grade:'전설',level:90,price:7000000,rareBonus:0,epicBonus:2.8,legendBonus:0.09,pointBonus:28,effects:['영웅 확률 +2.8%','전설 확률 +0.09%','포인트 증가 +28%']},
{id:'fishgod',name:'어신의 낚싯대',grade:'신화',level:95,price:9000000,rareBonus:0,epicBonus:3.0,legendBonus:0.10,pointBonus:30,effects:['영웅 확률 +3.0%','전설 확률 +0.10%','포인트 증가 +30%']},
{id:'ciderking',name:'사이다 낚시왕의 낚싯대',grade:'신화',level:100,price:10000000,rareBonus:0,epicBonus:3.0,legendBonus:0.10,pointBonus:35,effects:['영웅 확률 +3.0%','전설 확률 +0.10%','포인트 증가 +35%']}
];

const SHOP_ITEMS={"bait":[{"id":"bait-10","icon":"🪱","name":"일반 미끼 10개","desc":"기본 낚시 10회 도전 가능","price":300,"type":"bait","amount":10},{"id":"bait-30","icon":"🪱","name":"일반 미끼 30개","desc":"가볍게 즐기는 기본 묶음","price":850,"type":"bait","amount":30},{"id":"bait-50","icon":"🪱","name":"일반 미끼 50개","desc":"꾸준한 낚시용 묶음 상품","price":1350,"type":"bait","amount":50},{"id":"bait-100","icon":"🪱","name":"일반 미끼 100개","desc":"장시간 수집용 대용량 상품","price":2500,"type":"bait","amount":100},{"id":"bait-200","icon":"🪱","name":"일반 미끼 200개","desc":"오래 플레이하는 유저용 묶음","price":4800,"type":"bait","amount":200},{"id":"shrimp-20","icon":"🦐","name":"새우 미끼 20개","desc":"입질이 좋은 실속형 미끼","price":1200,"type":"bait","amount":20},{"id":"shrimp-50","icon":"🦐","name":"새우 미끼 50개","desc":"중급 낚시에 어울리는 미끼","price":2800,"type":"bait","amount":50},{"id":"krill-50","icon":"🦐","name":"크릴 미끼 50개","desc":"희귀 물고기를 노리는 미끼","price":3500,"type":"bait","amount":50},{"id":"glow-30","icon":"✨","name":"반짝 미끼 30개","desc":"반짝이는 물고기를 유혹하는 미끼","price":4200,"type":"bait","amount":30},{"id":"aroma-30","icon":"🌿","name":"향기 미끼 30개","desc":"멀리 있는 어군을 끌어오는 미끼","price":4500,"type":"bait","amount":30},{"id":"mist-bait","icon":"🌫️","name":"안개 미끼 30개","desc":"안개의 섬에 어울리는 지역 미끼","price":6000,"type":"bait","amount":30},{"id":"moon-bait","icon":"🌙","name":"월광 미끼 30개","desc":"월광의 섬 물고기를 유혹하는 미끼","price":7500,"type":"bait","amount":30},{"id":"emerald-bait","icon":"💚","name":"에메랄드 미끼 30개","desc":"에메랄드 호수 전용 고급 미끼","price":9000,"type":"bait","amount":30},{"id":"star-bait","icon":"⭐","name":"별빛 미끼 30개","desc":"별빛 계곡 물고기가 좋아하는 미끼","price":11000,"type":"bait","amount":30},{"id":"coral-bait","icon":"🪸","name":"산호 미끼 30개","desc":"산호 낙원 특화 미끼","price":13000,"type":"bait","amount":30},{"id":"twilight-bait","icon":"🌅","name":"황혼 미끼 30개","desc":"황혼의 바다용 고급 미끼","price":16000,"type":"bait","amount":30},{"id":"storm-bait","icon":"🌩️","name":"폭풍 미끼 30개","desc":"폭풍의 해역 대물 공략용","price":19000,"type":"bait","amount":30},{"id":"glacier-bait","icon":"🧊","name":"빙하 미끼 30개","desc":"영원의 빙하 특화 미끼","price":22000,"type":"bait","amount":30},{"id":"abyss-bait","icon":"🕳️","name":"심연 미끼 30개","desc":"심연의 해구 대물 공략용","price":26000,"type":"bait","amount":30},{"id":"origin-bait","icon":"🌌","name":"태초 미끼 30개","desc":"태초의 심해 전용 신비 미끼","price":32000,"type":"bait","amount":30},{"id":"dragon-bait","icon":"🐉","name":"드래곤 미끼 10개","desc":"전설급 물고기를 노리는 미끼","price":45000,"type":"bait","amount":10},{"id":"kraken-bait","icon":"🐙","name":"크라켄 미끼 10개","desc":"심해 대물을 유혹하는 미끼","price":52000,"type":"bait","amount":10},{"id":"sea-god-bait","icon":"🔱","name":"해신 미끼 10개","desc":"바다의 기운이 담긴 미끼","price":65000,"type":"bait","amount":10},{"id":"meteor-bait","icon":"☄️","name":"유성 미끼 10개","desc":"밤바다 전설을 부르는 미끼","price":75000,"type":"bait","amount":10},{"id":"tear-bait","icon":"💧","name":"심연의 눈물 10개","desc":"심연 희귀종을 노리는 미끼","price":90000,"type":"bait","amount":10},{"id":"heart-bait","icon":"💙","name":"바다의 심장 10개","desc":"최상급 어종을 유혹하는 미끼","price":110000,"type":"bait","amount":10},{"id":"scale-bait","icon":"🟡","name":"황금 비늘 10개","desc":"황금 어종 전용 프리미엄 미끼","price":130000,"type":"bait","amount":10},{"id":"myth-bait","icon":"🌟","name":"신화의 미끼 5개","desc":"신화급 물고기 공략용 미끼","price":160000,"type":"bait","amount":5},{"id":"origin-essence-bait","icon":"💠","name":"태초의 정수 5개","desc":"최종 지역 공략용 미끼","price":220000,"type":"bait","amount":5},{"id":"legend-bait","icon":"👑","name":"전설의 미끼 5개","desc":"최고 등급 물고기를 노리는 미끼","price":300000,"type":"bait","amount":5}],"rod":[{"id":"rod-shop-01","icon":"🎣","name":"낚싯대 강화권","desc":"낚싯대 성장에 사용하는 상점 아이템","price":800,"type":"ticket"},{"id":"rod-shop-02","icon":"🎣","name":"초급 강화권","desc":"낚싯대 성장에 사용하는 상점 아이템","price":1500,"type":"ticket"},{"id":"rod-shop-03","icon":"🎣","name":"중급 강화권","desc":"낚싯대 성장에 사용하는 상점 아이템","price":3000,"type":"ticket"},{"id":"rod-shop-04","icon":"🎣","name":"고급 강화권","desc":"낚싯대 성장에 사용하는 상점 아이템","price":6000,"type":"ticket"},{"id":"rod-shop-05","icon":"🎣","name":"장인 강화권","desc":"낚싯대 성장에 사용하는 상점 아이템","price":12000,"type":"ticket"},{"id":"rod-shop-06","icon":"🎣","name":"희귀 확률 강화석","desc":"낚싯대 성장에 사용하는 상점 아이템","price":2500,"type":"ticket"},{"id":"rod-shop-07","icon":"🎣","name":"영웅 확률 강화석","desc":"낚싯대 성장에 사용하는 상점 아이템","price":5000,"type":"ticket"},{"id":"rod-shop-08","icon":"🎣","name":"전설 확률 강화석","desc":"낚싯대 성장에 사용하는 상점 아이템","price":9000,"type":"ticket"},{"id":"rod-shop-09","icon":"🎣","name":"포인트 보너스 부품","desc":"낚싯대 성장에 사용하는 상점 아이템","price":3500,"type":"ticket"},{"id":"rod-shop-10","icon":"🎣","name":"내구도 보호권","desc":"낚싯대 성장에 사용하는 상점 아이템","price":7000,"type":"ticket"},{"id":"rod-shop-11","icon":"⚙️","name":"안개의 릴","desc":"낚싯대 성능을 높이는 고급 부품","price":12000,"type":"ticket"},{"id":"rod-shop-12","icon":"⚙️","name":"월광의 릴","desc":"낚싯대 성능을 높이는 고급 부품","price":15000,"type":"ticket"},{"id":"rod-shop-13","icon":"⚙️","name":"에메랄드 릴","desc":"낚싯대 성능을 높이는 고급 부품","price":18000,"type":"ticket"},{"id":"rod-shop-14","icon":"⚙️","name":"별빛 릴","desc":"낚싯대 성능을 높이는 고급 부품","price":22000,"type":"ticket"},{"id":"rod-shop-15","icon":"⚙️","name":"산호 릴","desc":"낚싯대 성능을 높이는 고급 부품","price":26000,"type":"ticket"},{"id":"rod-shop-16","icon":"⚙️","name":"황혼의 릴","desc":"낚싯대 성능을 높이는 고급 부품","price":32000,"type":"ticket"},{"id":"rod-shop-17","icon":"⚙️","name":"폭풍의 릴","desc":"낚싯대 성능을 높이는 고급 부품","price":40000,"type":"ticket"},{"id":"rod-shop-18","icon":"⚙️","name":"빙하의 릴","desc":"낚싯대 성능을 높이는 고급 부품","price":50000,"type":"ticket"},{"id":"rod-shop-19","icon":"⚙️","name":"심연의 릴","desc":"낚싯대 성능을 높이는 고급 부품","price":65000,"type":"ticket"},{"id":"rod-shop-20","icon":"⚙️","name":"태초의 릴","desc":"낚싯대 성능을 높이는 고급 부품","price":80000,"type":"ticket"},{"id":"rod-shop-21","icon":"🧵","name":"은빛 낚싯줄","desc":"낚싯대 성능을 높이는 고급 부품","price":100000,"type":"ticket"},{"id":"rod-shop-22","icon":"🧵","name":"황금 낚싯줄","desc":"낚싯대 성능을 높이는 고급 부품","price":130000,"type":"ticket"},{"id":"rod-shop-23","icon":"🧵","name":"플래티넘 낚싯줄","desc":"낚싯대 성능을 높이는 고급 부품","price":170000,"type":"ticket"},{"id":"rod-shop-24","icon":"🐉","name":"용왕의 손잡이","desc":"낚싯대 성능을 높이는 고급 부품","price":220000,"type":"ticket"},{"id":"rod-shop-25","icon":"🐙","name":"크라켄 훅","desc":"낚싯대 성능을 높이는 고급 부품","price":280000,"type":"ticket"},{"id":"rod-shop-26","icon":"🔱","name":"해신의 찌","desc":"낚싯대 성능을 높이는 고급 부품","price":350000,"type":"ticket"},{"id":"rod-shop-27","icon":"💍","name":"전설의 가이드링","desc":"낚싯대 성능을 높이는 고급 부품","price":450000,"type":"ticket"},{"id":"rod-shop-28","icon":"🌟","name":"신화의 릴 세트","desc":"낚싯대 성능을 높이는 고급 부품","price":600000,"type":"ticket"},{"id":"rod-shop-29","icon":"💠","name":"태초의 강화석","desc":"낚싯대 성능을 높이는 고급 부품","price":800000,"type":"ticket"},{"id":"rod-shop-30","icon":"👑","name":"창세의 낚싯대 코어","desc":"낚싯대 성능을 높이는 고급 부품","price":1000000,"type":"ticket"}],"skin":[{"id":"penguin-blue","icon":"🐧","name":"펭펭이 블루 스킨","desc":"사이다 블루 컬러 스킨","price":2000,"type":"skin"},{"id":"penguin-green","icon":"🐧","name":"에메랄드 펭귄 스킨","desc":"싱그러운 에메랄드 컬러 스킨","price":2500,"type":"skin"},{"id":"penguin-moon","icon":"🌙","name":"월광 펭귄 스킨","desc":"달빛이 감도는 야간 스킨","price":3500,"type":"skin"},{"id":"penguin-starlight","icon":"⭐","name":"별빛 펭귄 스킨","desc":"별빛 계곡 감성의 스킨","price":4500,"type":"skin"},{"id":"penguin-coral","icon":"🪸","name":"산호 펭귄 스킨","desc":"산호빛 포인트가 들어간 스킨","price":5500,"type":"skin"},{"id":"penguin-twilight","icon":"🌅","name":"황혼 펭귄 스킨","desc":"노을빛 컬러 스킨","price":7000,"type":"skin"},{"id":"penguin-storm","icon":"🌩️","name":"폭풍 펭귄 스킨","desc":"강렬한 폭풍 콘셉트 스킨","price":8500,"type":"skin"},{"id":"penguin-glacier","icon":"🧊","name":"빙하 펭귄 스킨","desc":"차가운 빙하 컬러 스킨","price":10000,"type":"skin"},{"id":"penguin-abyss","icon":"🕳️","name":"심연 펭귄 스킨","desc":"심해 분위기의 어두운 스킨","price":13000,"type":"skin"},{"id":"penguin-origin","icon":"🌌","name":"태초 펭귄 스킨","desc":"태초의 심해 콘셉트 스킨","price":16000,"type":"skin"},{"id":"hat-straw","icon":"👒","name":"밀짚 모자","desc":"낚시꾼 분위기 코스튬","price":1200,"type":"skin"},{"id":"hat-captain","icon":"🧢","name":"선장 모자","desc":"바다 선장 콘셉트 액세서리","price":2200,"type":"skin"},{"id":"hat-pirate","icon":"🏴‍☠️","name":"해적 모자","desc":"모험심 넘치는 해적 액세서리","price":3000,"type":"skin"},{"id":"hat-researcher","icon":"🥽","name":"연구원 고글","desc":"어종 연구가 콘셉트 액세서리","price":3800,"type":"skin"},{"id":"hat-diver","icon":"🤿","name":"잠수부 고글","desc":"심해 탐험 콘셉트 액세서리","price":4500,"type":"skin"},{"id":"outfit-adventure","icon":"🦺","name":"탐험가 의상","desc":"세계지도 탐험 전용 의상","price":5000,"type":"skin"},{"id":"outfit-sailor","icon":"⚓","name":"선원 의상","desc":"항해 분위기의 펭귄 의상","price":6500,"type":"skin"},{"id":"outfit-pirate","icon":"🏴‍☠️","name":"해적 의상","desc":"바다 모험가 콘셉트 의상","price":8000,"type":"skin"},{"id":"outfit-wizard","icon":"🧙","name":"마법사 의상","desc":"신비로운 판타지 의상","price":10000,"type":"skin"},{"id":"outfit-knight","icon":"🛡️","name":"기사 의상","desc":"든든한 수호자 콘셉트 의상","price":12000,"type":"skin"},{"id":"acc-bubble","icon":"🫧","name":"물방울 액세서리","desc":"낚시 성공 연출 강화","price":1800,"type":"skin"},{"id":"acc-shell","icon":"🐚","name":"조개 액세서리","desc":"해변 감성 장식 아이템","price":2500,"type":"skin"},{"id":"acc-pearl","icon":"⚪","name":"진주 액세서리","desc":"고급스러운 진주 장식","price":3500,"type":"skin"},{"id":"acc-anchor","icon":"⚓","name":"닻 액세서리","desc":"항해 콘셉트 장식","price":4500,"type":"skin"},{"id":"acc-crown","icon":"👑","name":"왕관 액세서리","desc":"상위 유저용 고급 장식","price":7000,"type":"skin"},{"id":"skin-gold","icon":"🟡","name":"황금 펭귄 스킨","desc":"황금빛 프리미엄 스킨","price":25000,"type":"skin"},{"id":"skin-crystal","icon":"💎","name":"크리스탈 펭귄 스킨","desc":"반짝이는 크리스탈 스킨","price":40000,"type":"skin"},{"id":"skin-rainbow","icon":"🌈","name":"무지개 펭귄 스킨","desc":"화려한 무지개 컬러 스킨","price":60000,"type":"skin"},{"id":"skin-myth","icon":"🌟","name":"신화 펭귄 스킨","desc":"신화 등급 분위기의 스킨","price":90000,"type":"skin"},{"id":"skin-legend","icon":"👑","name":"전설 펭귄 스킨","desc":"최고 등급 펭귄 스킨","price":150000,"type":"skin"}],"etc":[{"id":"exp-booster","icon":"🧪","name":"경험치 2배 부스터","desc":"1일 동안 EXP 2배","price":300,"type":"booster"},{"id":"point-booster","icon":"💰","name":"포인트 2배 부스터","desc":"1일 동안 포인트 2배","price":500,"type":"booster"},{"id":"rare-booster","icon":"🍀","name":"희귀 확률 부스터","desc":"30분 동안 희귀 확률 증가","price":700,"type":"booster"},{"id":"hero-booster","icon":"💜","name":"영웅 확률 부스터","desc":"30분 동안 영웅 확률 증가","price":1200,"type":"booster"},{"id":"legend-booster","icon":"✨","name":"전설 확률 부스터","desc":"30분 동안 전설 확률 증가","price":2500,"type":"booster"},{"id":"auto-ticket-10","icon":"🎫","name":"자동낚시권 10회","desc":"자동 낚시 10회 이용권","price":1500,"type":"ticket"},{"id":"auto-ticket-50","icon":"🎫","name":"자동낚시권 50회","desc":"자동 낚시 50회 묶음권","price":6000,"type":"ticket"},{"id":"instant-bite-10","icon":"⚡","name":"즉시입질권 10회","desc":"입질 대기 시간을 줄이는 이용권","price":3000,"type":"ticket"},{"id":"treasure-map","icon":"🗺️","name":"보물지도","desc":"숨겨진 보상을 찾는 지도","price":5000,"type":"ticket"},{"id":"gold-key","icon":"🗝️","name":"황금열쇠","desc":"고급 보물상자를 여는 열쇠","price":8000,"type":"ticket"},{"id":"silver-box","icon":"📦","name":"실버 상자","desc":"실속형 랜덤 보상 상자","price":3000,"type":"material"},{"id":"gold-box","icon":"🎁","name":"골드 상자","desc":"고급 랜덤 보상 상자","price":10000,"type":"material"},{"id":"pearl","icon":"⚪","name":"진주","desc":"상점 교환용 수집 재화","price":4000,"type":"material"},{"id":"coral-piece","icon":"🪸","name":"산호 조각","desc":"지역 특화 수집 재화","price":5000,"type":"material"},{"id":"crystal-piece","icon":"💎","name":"수정 조각","desc":"강화 재료로 쓰이는 조각","price":7000,"type":"material"},{"id":"emerald-piece","icon":"💚","name":"에메랄드 조각","desc":"에메랄드 호수의 보석 조각","price":9000,"type":"material"},{"id":"ruby-piece","icon":"❤️","name":"루비 조각","desc":"붉은빛 보석 조각","price":11000,"type":"material"},{"id":"sapphire-piece","icon":"💙","name":"사파이어 조각","desc":"푸른빛 보석 조각","price":13000,"type":"material"},{"id":"diamond-piece","icon":"💠","name":"다이아몬드 조각","desc":"최상급 교환 재료","price":18000,"type":"material"},{"id":"origin-crystal","icon":"🌌","name":"태초의 결정","desc":"최종 성장용 희귀 결정","price":30000,"type":"material"},{"id":"lucky-charm","icon":"🍀","name":"행운의 부적","desc":"행운이 깃든 장식 아이템","price":6000,"type":"material"},{"id":"big-fish-detector","icon":"📡","name":"대물 탐지기","desc":"대물 출현을 노리는 탐지기","price":12000,"type":"material"},{"id":"school-detector","icon":"📡","name":"어군 탐지기","desc":"어군 흐름을 찾는 탐지기","price":16000,"type":"material"},{"id":"deep-detector","icon":"🕳️","name":"심해 탐지기","desc":"심해 어종을 찾는 탐지기","price":25000,"type":"material"},{"id":"myth-detector","icon":"🌟","name":"신화 탐지기","desc":"신화급 어종을 추적하는 탐지기","price":50000,"type":"material"},{"id":"title-ticket","icon":"🏷️","name":"칭호 변경권","desc":"프로필 칭호 변경용 아이템","price":10000,"type":"ticket"},{"id":"name-ticket","icon":"✏️","name":"이름 변경권","desc":"닉네임 변경용 아이템","price":15000,"type":"ticket"},{"id":"coffee-raffle","icon":"☕","name":"커피 쿠폰 응모","desc":"이벤트 응모권","price":1000,"type":"raffle"},{"id":"chicken-raffle","icon":"🍗","name":"치킨 기프티콘 응모","desc":"이벤트 응모권","price":5000,"type":"raffle"},{"id":"special-raffle","icon":"🎁","name":"특별 경품 응모","desc":"시즌 한정 특별 경품","price":10000,"type":"raffle"}]};


const ACHIEVEMENTS = {"collection":[{"id":"collect-1","icon":"📖","title":"첫 도감 등록","desc":"물고기 1종을 도감에 등록하기","current":0,"goal":1,"reward":"10P"},{"id":"collect-5","icon":"📖","title":"도감 5종 수집","desc":"물고기 5종을 도감에 등록하기","current":0,"goal":5,"reward":"50P"},{"id":"collect-10","icon":"📖","title":"도감 10종 수집","desc":"물고기 10종을 도감에 등록하기","current":0,"goal":10,"reward":"100P"},{"id":"collect-15","icon":"📖","title":"도감 15종 수집","desc":"물고기 15종을 도감에 등록하기","current":0,"goal":15,"reward":"150P"},{"id":"collect-20","icon":"📖","title":"도감 20종 수집","desc":"물고기 20종을 도감에 등록하기","current":0,"goal":20,"reward":"200P"},{"id":"collect-25","icon":"📖","title":"도감 25종 수집","desc":"물고기 25종을 도감에 등록하기","current":0,"goal":25,"reward":"250P"},{"id":"collect-30","icon":"📖","title":"도감 30종 수집","desc":"물고기 30종을 도감에 등록하기","current":0,"goal":30,"reward":"300P"},{"id":"collect-40","icon":"📖","title":"도감 40종 수집","desc":"물고기 40종을 도감에 등록하기","current":0,"goal":40,"reward":"400P"},{"id":"collect-50","icon":"📚","title":"도감 50종 수집","desc":"물고기 50종을 도감에 등록하기","current":0,"goal":50,"reward":"500P"},{"id":"collect-60","icon":"📚","title":"도감 60종 수집","desc":"물고기 60종을 도감에 등록하기","current":0,"goal":60,"reward":"600P"},{"id":"collect-70","icon":"📚","title":"도감 70종 수집","desc":"물고기 70종을 도감에 등록하기","current":0,"goal":70,"reward":"700P"},{"id":"collect-80","icon":"📚","title":"도감 80종 수집","desc":"물고기 80종을 도감에 등록하기","current":0,"goal":80,"reward":"800P"},{"id":"collect-90","icon":"📚","title":"도감 90종 수집","desc":"물고기 90종을 도감에 등록하기","current":0,"goal":90,"reward":"900P"},{"id":"collect-100","icon":"📚","title":"도감 100종 수집","desc":"물고기 100종을 도감에 등록하기","current":0,"goal":100,"reward":"2000P"},{"id":"collect-110","icon":"📚","title":"도감 110종 수집","desc":"물고기 110종을 도감에 등록하기","current":0,"goal":110,"reward":"2200P"},{"id":"collect-120","icon":"📚","title":"도감 120종 수집","desc":"물고기 120종을 도감에 등록하기","current":0,"goal":120,"reward":"2400P"},{"id":"collect-130","icon":"📚","title":"도감 130종 수집","desc":"물고기 130종을 도감에 등록하기","current":0,"goal":130,"reward":"2600P"},{"id":"collect-140","icon":"📚","title":"도감 140종 수집","desc":"물고기 140종을 도감에 등록하기","current":0,"goal":140,"reward":"2800P"},{"id":"collect-150","icon":"👑","title":"도감 150종 수집","desc":"물고기 150종을 도감에 등록하기","current":0,"goal":150,"reward":"3000P"},{"id":"collect-160","icon":"👑","title":"도감 160종 수집","desc":"물고기 160종을 도감에 등록하기","current":0,"goal":160,"reward":"3200P"},{"id":"collect-170","icon":"👑","title":"도감 170종 수집","desc":"물고기 170종을 도감에 등록하기","current":0,"goal":170,"reward":"3400P"},{"id":"collect-180","icon":"👑","title":"도감 180종 수집","desc":"물고기 180종을 도감에 등록하기","current":0,"goal":180,"reward":"3600P"},{"id":"collect-190","icon":"👑","title":"도감 190종 수집","desc":"물고기 190종을 도감에 등록하기","current":0,"goal":190,"reward":"전설 미끼 x3"},{"id":"collect-195","icon":"👑","title":"도감 195종 수집","desc":"물고기 195종을 도감에 등록하기","current":0,"goal":195,"reward":"전설 미끼 x3"},{"id":"collect-200","icon":"👑","title":"도감 완성","desc":"물고기 200종을 도감에 등록하기","current":0,"goal":200,"reward":"전설 미끼 x3"}],"fishing":[{"id":"fish-1","icon":"🎣","title":"첫 낚시 성공","desc":"낚시를 1회 성공하기","current":0,"goal":1,"reward":"20P"},{"id":"fish-5","icon":"🎣","title":"낚시 5회 성공","desc":"낚시를 5회 성공하기","current":0,"goal":5,"reward":"100P"},{"id":"fish-10","icon":"🎣","title":"낚시 10회 성공","desc":"낚시를 10회 성공하기","current":0,"goal":10,"reward":"200P"},{"id":"fish-25","icon":"🎣","title":"낚시 25회 성공","desc":"낚시를 25회 성공하기","current":0,"goal":25,"reward":"500P"},{"id":"fish-50","icon":"🎣","title":"낚시 50회 성공","desc":"낚시를 50회 성공하기","current":0,"goal":50,"reward":"1,000P"},{"id":"fish-100","icon":"🎣","title":"낚시 100회 성공","desc":"낚시를 100회 성공하기","current":0,"goal":100,"reward":"2,000P"},{"id":"fish-250","icon":"🎣","title":"낚시 250회 성공","desc":"낚시를 250회 성공하기","current":0,"goal":250,"reward":"5,000P"},{"id":"fish-500","icon":"🎣","title":"낚시 500회 성공","desc":"낚시를 500회 성공하기","current":0,"goal":500,"reward":"10,000P"},{"id":"fish-1000","icon":"🎣","title":"낚시 1,000회 성공","desc":"낚시를 1,000회 성공하기","current":0,"goal":1000,"reward":"10,000P"},{"id":"fish-2500","icon":"🎣","title":"낚시 2,500회 성공","desc":"낚시를 2,500회 성공하기","current":0,"goal":2500,"reward":"10,000P"},{"id":"fish-5000","icon":"🎣","title":"낚시 5,000회 성공","desc":"낚시를 5,000회 성공하기","current":0,"goal":5000,"reward":"10,000P"},{"id":"fish-10000","icon":"🎣","title":"낚시 10,000회 성공","desc":"낚시를 10,000회 성공하기","current":0,"goal":10000,"reward":"10,000P"},{"id":"fish-20000","icon":"🎣","title":"낚시 20,000회 성공","desc":"낚시를 20,000회 성공하기","current":0,"goal":20000,"reward":"10,000P"},{"id":"fish-30000","icon":"🎣","title":"낚시 30,000회 성공","desc":"낚시를 30,000회 성공하기","current":0,"goal":30000,"reward":"10,000P"},{"id":"fish-40000","icon":"🎣","title":"낚시 40,000회 성공","desc":"낚시를 40,000회 성공하기","current":0,"goal":40000,"reward":"10,000P"},{"id":"perfect-1","icon":"🎯","title":"PERFECT 1회","desc":"완벽한 타이밍을 1회 달성하기","current":0,"goal":1,"reward":"50P"},{"id":"perfect-3","icon":"🎯","title":"PERFECT 3회","desc":"완벽한 타이밍을 3회 달성하기","current":0,"goal":3,"reward":"150P"},{"id":"perfect-5","icon":"🎯","title":"PERFECT 5회","desc":"완벽한 타이밍을 5회 달성하기","current":0,"goal":5,"reward":"250P"},{"id":"perfect-10","icon":"🎯","title":"PERFECT 10회","desc":"완벽한 타이밍을 10회 달성하기","current":0,"goal":10,"reward":"500P"},{"id":"perfect-25","icon":"🎯","title":"PERFECT 25회","desc":"완벽한 타이밍을 25회 달성하기","current":0,"goal":25,"reward":"1,250P"},{"id":"perfect-50","icon":"🎯","title":"PERFECT 50회","desc":"완벽한 타이밍을 50회 달성하기","current":0,"goal":50,"reward":"2,500P"},{"id":"perfect-100","icon":"🎯","title":"PERFECT 100회","desc":"완벽한 타이밍을 100회 달성하기","current":0,"goal":100,"reward":"5,000P"},{"id":"perfect-250","icon":"🎯","title":"PERFECT 250회","desc":"완벽한 타이밍을 250회 달성하기","current":0,"goal":250,"reward":"8,000P"},{"id":"perfect-500","icon":"🎯","title":"PERFECT 500회","desc":"완벽한 타이밍을 500회 달성하기","current":0,"goal":500,"reward":"8,000P"},{"id":"perfect-1000","icon":"🎯","title":"PERFECT 1,000회","desc":"완벽한 타이밍을 1,000회 달성하기","current":0,"goal":1000,"reward":"8,000P"},{"id":"level-10","icon":"🏅","title":"Lv.10 달성","desc":"펭펭이 레벨 10 달성하기","current":0,"goal":10,"reward":"1000P"},{"id":"level-20","icon":"🏅","title":"Lv.20 달성","desc":"펭펭이 레벨 20 달성하기","current":0,"goal":20,"reward":"2000P"},{"id":"level-30","icon":"🏅","title":"Lv.30 달성","desc":"펭펭이 레벨 30 달성하기","current":0,"goal":30,"reward":"3000P"},{"id":"level-40","icon":"🏅","title":"Lv.40 달성","desc":"펭펭이 레벨 40 달성하기","current":0,"goal":40,"reward":"4000P"},{"id":"level-50","icon":"🏅","title":"Lv.50 달성","desc":"펭펭이 레벨 50 달성하기","current":0,"goal":50,"reward":"5000P"}],"legend":[{"id":"rare-1","icon":"💎","title":"희귀 물고기 1마리","desc":"희귀 등급 물고기 1마리 획득하기","current":0,"goal":1,"reward":"300P"},{"id":"rare-3","icon":"💎","title":"희귀 물고기 3마리","desc":"희귀 등급 물고기 3마리 획득하기","current":0,"goal":3,"reward":"900P"},{"id":"rare-5","icon":"💎","title":"희귀 물고기 5마리","desc":"희귀 등급 물고기 5마리 획득하기","current":0,"goal":5,"reward":"1500P"},{"id":"rare-10","icon":"💎","title":"희귀 물고기 10마리","desc":"희귀 등급 물고기 10마리 획득하기","current":0,"goal":10,"reward":"3000P"},{"id":"rare-20","icon":"💎","title":"희귀 물고기 20마리","desc":"희귀 등급 물고기 20마리 획득하기","current":0,"goal":20,"reward":"6000P"},{"id":"hero-1","icon":"💜","title":"영웅 물고기 1마리","desc":"영웅 등급 물고기 1마리 획득하기","current":0,"goal":1,"reward":"300P"},{"id":"hero-3","icon":"💜","title":"영웅 물고기 3마리","desc":"영웅 등급 물고기 3마리 획득하기","current":0,"goal":3,"reward":"900P"},{"id":"hero-5","icon":"💜","title":"영웅 물고기 5마리","desc":"영웅 등급 물고기 5마리 획득하기","current":0,"goal":5,"reward":"1500P"},{"id":"hero-10","icon":"💜","title":"영웅 물고기 10마리","desc":"영웅 등급 물고기 10마리 획득하기","current":0,"goal":10,"reward":"3000P"},{"id":"hero-20","icon":"💜","title":"영웅 물고기 20마리","desc":"영웅 등급 물고기 20마리 획득하기","current":0,"goal":20,"reward":"6000P"},{"id":"legend-1","icon":"✨","title":"전설 물고기 1마리","desc":"전설 등급 물고기 1마리 획득하기","current":0,"goal":1,"reward":"300P"},{"id":"legend-2","icon":"✨","title":"전설 물고기 2마리","desc":"전설 등급 물고기 2마리 획득하기","current":0,"goal":2,"reward":"600P"},{"id":"legend-3","icon":"✨","title":"전설 물고기 3마리","desc":"전설 등급 물고기 3마리 획득하기","current":0,"goal":3,"reward":"전설 미끼 x1"},{"id":"legend-5","icon":"✨","title":"전설 물고기 5마리","desc":"전설 등급 물고기 5마리 획득하기","current":0,"goal":5,"reward":"전설 미끼 x1"},{"id":"legend-10","icon":"✨","title":"전설 물고기 10마리","desc":"전설 등급 물고기 10마리 획득하기","current":0,"goal":10,"reward":"전설 미끼 x1"},{"id":"region-mist","icon":"🌎","title":"안개의 섬 정복자","desc":"안개의 섬 도감 20종 수집하기","current":0,"goal":20,"reward":"고급 미끼 x2"},{"id":"region-moon","icon":"🌎","title":"월광의 섬 정복자","desc":"월광의 섬 도감 20종 수집하기","current":0,"goal":20,"reward":"고급 미끼 x2"},{"id":"region-emerald","icon":"🌎","title":"에메랄드 호수 정복자","desc":"에메랄드 호수 도감 20종 수집하기","current":0,"goal":20,"reward":"고급 미끼 x2"},{"id":"region-crystal","icon":"🌎","title":"별빛 계곡 정복자","desc":"별빛 계곡 도감 20종 수집하기","current":0,"goal":20,"reward":"고급 미끼 x2"},{"id":"region-coral","icon":"🌎","title":"산호 낙원 정복자","desc":"산호 낙원 도감 20종 수집하기","current":0,"goal":20,"reward":"고급 미끼 x2"},{"id":"region-twilight","icon":"🌎","title":"황혼의 바다 정복자","desc":"황혼의 바다 도감 20종 수집하기","current":0,"goal":20,"reward":"고급 미끼 x2"},{"id":"region-storm","icon":"🌎","title":"폭풍의 해역 정복자","desc":"폭풍의 해역 도감 20종 수집하기","current":0,"goal":20,"reward":"고급 미끼 x2"},{"id":"region-glacier","icon":"🌎","title":"영원의 빙하 정복자","desc":"영원의 빙하 도감 20종 수집하기","current":0,"goal":20,"reward":"고급 미끼 x2"},{"id":"region-abyss","icon":"🌎","title":"심연의 해구 정복자","desc":"심연의 해구 도감 20종 수집하기","current":0,"goal":20,"reward":"고급 미끼 x2"},{"id":"region-origin","icon":"🌎","title":"태초의 심해 정복자","desc":"태초의 심해 도감 20종 수집하기","current":0,"goal":20,"reward":"고급 미끼 x2"}],"finance":[{"id":"finance-quiz","icon":"💡","title":"금융 퀴즈 완료","desc":"금융 퀴즈 1회 정답 맞히기","current":0,"goal":1,"reward":"200P"},{"id":"finance-quiz-3","icon":"🧠","title":"금융 지식 탐험가","desc":"금융 퀴즈 3회 정답 맞히기","current":0,"goal":3,"reward":"500P"},{"id":"finance-openbank","icon":"🏦","title":"오픈뱅킹 연결","desc":"오픈뱅킹 연결 완료하기","current":0,"goal":1,"reward":"고급 미끼 x1"},{"id":"finance-product","icon":"📄","title":"상품 페이지 방문","desc":"상품 페이지 1회 방문하기","current":0,"goal":1,"reward":"100P"},{"id":"finance-push","icon":"🔔","title":"앱 푸시 동의","desc":"푸시 동의 완료하기","current":0,"goal":1,"reward":"100P"},{"id":"finance-attendance","icon":"📅","title":"꾸준한 출석","desc":"출석 체크 1회 완료하기","current":0,"goal":1,"reward":"100P"},{"id":"finance-event","icon":"🎁","title":"이벤트 참여자","desc":"신규 이벤트 1회 참여하기","current":0,"goal":1,"reward":"500P"},{"id":"finance-invite","icon":"🤝","title":"친구 초대","desc":"친구 초대 1회 완료하기","current":0,"goal":1,"reward":"고급 미끼 x2"},{"id":"gold-1000","icon":"💰","title":"1,000P 보유","desc":"포인트 1,000P 보유하기","current":0,"goal":1000,"reward":"100P"},{"id":"gold-5000","icon":"💰","title":"5,000P 보유","desc":"포인트 5,000P 보유하기","current":0,"goal":5000,"reward":"250P"},{"id":"gold-10000","icon":"💰","title":"10,000P 보유","desc":"포인트 10,000P 보유하기","current":0,"goal":10000,"reward":"500P"},{"id":"gold-50000","icon":"💰","title":"50,000P 보유","desc":"포인트 50,000P 보유하기","current":0,"goal":50000,"reward":"2,500P"},{"id":"gold-100000","icon":"💰","title":"100,000P 보유","desc":"포인트 100,000P 보유하기","current":0,"goal":100000,"reward":"5,000P"},{"id":"gold-500000","icon":"💰","title":"500,000P 보유","desc":"포인트 500,000P 보유하기","current":0,"goal":500000,"reward":"25,000P"},{"id":"gold-1000000","icon":"💰","title":"1,000,000P 보유","desc":"포인트 1,000,000P 보유하기","current":0,"goal":1000000,"reward":"50,000P"},{"id":"sell-10","icon":"🧺","title":"물고기 10마리 판매","desc":"물고기 10마리를 판매하기","current":0,"goal":10,"reward":"200P"},{"id":"sell-30","icon":"🧺","title":"물고기 30마리 판매","desc":"물고기 30마리를 판매하기","current":0,"goal":30,"reward":"600P"},{"id":"sell-50","icon":"🧺","title":"물고기 50마리 판매","desc":"물고기 50마리를 판매하기","current":0,"goal":50,"reward":"1000P"},{"id":"sell-100","icon":"🧺","title":"물고기 100마리 판매","desc":"물고기 100마리를 판매하기","current":0,"goal":100,"reward":"2000P"},{"id":"sell-200","icon":"🧺","title":"물고기 200마리 판매","desc":"물고기 200마리를 판매하기","current":0,"goal":200,"reward":"4000P"}]};



const RANKING_DATA = {
  weekly:[
    {name:'물결펭귄', icon:'🐧', label:'주간 482회 성공', level:48, point:48200},
    {name:'참치헌터', icon:'🐟', label:'주간 421회 성공', level:45, point:42100},
    {name:'산호탐험가', icon:'🪸', label:'주간 356회 성공', level:41, point:35600},
    {name:'폭풍낚시단', icon:'🌊', label:'주간 288회 성공', level:36, point:28800},
    {name:'새벽입질러', icon:'🎣', label:'주간 215회 성공', level:31, point:21500}
  ],
  total:[
    {name:'바다펭귄', icon:'🐧', label:'누적 18,420회 성공', level:132, point:1842000},
    {name:'심해수집가', icon:'🐋', label:'누적 15,300회 성공', level:119, point:1530000},
    {name:'황금미끼', icon:'🪱', label:'누적 12,860회 성공', level:108, point:1286000},
    {name:'월광낚시단', icon:'🌙', label:'누적 9,740회 성공', level:92, point:974000},
    {name:'안개항해자', icon:'⛵', label:'누적 7,210회 성공', level:81, point:721000}
  ],
  mine:[]
};


const state={
point:0,bait:20,totalFishCaught:0,weeklyFishCaught:0,weeklyPoint:0,perfectCount:0,rareCount:0,heroCount:0,legendCount:0,soldFishCount:0,lastCatch:null,selectedRegion:'안개의 섬',currentRodId:'mist',rodLevel:1,unlockedRodIds:new Set(['mist']),currentMissionTab:'daily',currentCollectionFilter:'전체',currentShopTab:'bait',currentAchievementTab:'collection',currentRankingTab:'weekly',discoveredFishIds:new Set(DISCOVERED_INITIAL),
missions:{"attendance":{"tab":"daily","label":"출석 체크 1회","current":1,"goal":1,"reward":"100P","claimed":false,"home":true,"action":"reward","metric":"attendance"},"fish3":{"tab":"daily","label":"낚시 3회 성공","current":0,"goal":3,"reward":"150P","claimed":false,"home":true,"action":"fishing","metric":"fish"},"dailyFish5":{"tab":"daily","label":"낚시 5회 성공","current":0,"goal":5,"reward":"250P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"dailyFish10":{"tab":"daily","label":"낚시 10회 성공","current":0,"goal":10,"reward":"500P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"dailyFish15":{"tab":"daily","label":"낚시 15회 성공","current":0,"goal":15,"reward":"750P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"dailyFish20":{"tab":"daily","label":"낚시 20회 성공","current":0,"goal":20,"reward":"1000P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"dailyFish25":{"tab":"daily","label":"낚시 25회 성공","current":0,"goal":25,"reward":"1250P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"dailyFish30":{"tab":"daily","label":"낚시 30회 성공","current":0,"goal":30,"reward":"1500P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"dailyFish40":{"tab":"daily","label":"낚시 40회 성공","current":0,"goal":40,"reward":"2000P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"dailyFish50":{"tab":"daily","label":"낚시 50회 성공","current":0,"goal":50,"reward":"2500P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"dailyFish70":{"tab":"daily","label":"낚시 70회 성공","current":0,"goal":70,"reward":"3500P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"dailyFish100":{"tab":"daily","label":"낚시 100회 성공","current":0,"goal":100,"reward":"5000P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"dailyFish150":{"tab":"daily","label":"낚시 150회 성공","current":0,"goal":150,"reward":"7500P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"dailyPerfect1":{"tab":"daily","label":"PERFECT 1회","current":0,"goal":1,"reward":"80P","claimed":false,"home":false,"action":"fishing","metric":"perfect"},"dailyPerfect3":{"tab":"daily","label":"PERFECT 3회","current":0,"goal":3,"reward":"240P","claimed":false,"home":false,"action":"fishing","metric":"perfect"},"dailyPerfect5":{"tab":"daily","label":"PERFECT 5회","current":0,"goal":5,"reward":"400P","claimed":false,"home":false,"action":"fishing","metric":"perfect"},"dailyPerfect10":{"tab":"daily","label":"PERFECT 10회","current":0,"goal":10,"reward":"800P","claimed":false,"home":false,"action":"fishing","metric":"perfect"},"dailyPerfect15":{"tab":"daily","label":"PERFECT 15회","current":0,"goal":15,"reward":"1200P","claimed":false,"home":false,"action":"fishing","metric":"perfect"},"dailyPerfect20":{"tab":"daily","label":"PERFECT 20회","current":0,"goal":20,"reward":"1600P","claimed":false,"home":false,"action":"fishing","metric":"perfect"},"dailyPerfect30":{"tab":"daily","label":"PERFECT 30회","current":0,"goal":30,"reward":"2400P","claimed":false,"home":false,"action":"fishing","metric":"perfect"},"dailyPerfect40":{"tab":"daily","label":"PERFECT 40회","current":0,"goal":40,"reward":"3200P","claimed":false,"home":false,"action":"fishing","metric":"perfect"},"collect3":{"tab":"daily","label":"물고기 3종 수집","current":0,"goal":3,"reward":"일반 미끼 x2","claimed":false,"home":false,"action":"collection","metric":"newCollection"},"dailyNew1":{"tab":"daily","label":"신규 도감 1종 등록","current":0,"goal":1,"reward":"일반 미끼 x1","claimed":false,"home":false,"action":"collection","metric":"newCollection"},"dailyNew2":{"tab":"daily","label":"신규 도감 2종 등록","current":0,"goal":2,"reward":"일반 미끼 x2","claimed":false,"home":false,"action":"collection","metric":"newCollection"},"dailyNew5":{"tab":"daily","label":"신규 도감 5종 등록","current":0,"goal":5,"reward":"일반 미끼 x5","claimed":false,"home":false,"action":"collection","metric":"newCollection"},"dailyNew7":{"tab":"daily","label":"신규 도감 7종 등록","current":0,"goal":7,"reward":"일반 미끼 x7","claimed":false,"home":false,"action":"collection","metric":"newCollection"},"dailyNew10":{"tab":"daily","label":"신규 도감 10종 등록","current":0,"goal":10,"reward":"일반 미끼 x10","claimed":false,"home":false,"action":"collection","metric":"newCollection"},"dailyRare1":{"tab":"daily","label":"희귀 물고기 1마리","current":0,"goal":1,"reward":"200P","claimed":false,"home":false,"action":"collection","metric":"grade","grade":"희귀"},"dailyRare3":{"tab":"daily","label":"희귀 물고기 3마리","current":0,"goal":3,"reward":"600P","claimed":false,"home":false,"action":"collection","metric":"grade","grade":"희귀"},"dailyRare5":{"tab":"daily","label":"희귀 물고기 5마리","current":0,"goal":5,"reward":"1000P","claimed":false,"home":false,"action":"collection","metric":"grade","grade":"희귀"},"dailyRare10":{"tab":"daily","label":"희귀 물고기 10마리","current":0,"goal":10,"reward":"2000P","claimed":false,"home":false,"action":"collection","metric":"grade","grade":"희귀"},"dailyHero1":{"tab":"daily","label":"영웅 물고기 1마리","current":0,"goal":1,"reward":"500P","claimed":false,"home":false,"action":"collection","metric":"grade","grade":"영웅"},"dailyHero3":{"tab":"daily","label":"영웅 물고기 3마리","current":0,"goal":3,"reward":"1500P","claimed":false,"home":false,"action":"collection","metric":"grade","grade":"영웅"},"dailyLegend1":{"tab":"daily","label":"전설 물고기 1마리","current":0,"goal":1,"reward":"전설 미끼 x1","claimed":false,"home":false,"action":"collection","metric":"grade","grade":"전설"},"dailyRegion34":{"tab":"daily","label":"안개의 섬 10회 낚시","current":0,"goal":10,"reward":"300P","claimed":false,"home":false,"action":"fishing","metric":"region","region":"안개의 섬"},"dailyRegion35":{"tab":"daily","label":"월광의 섬 10회 낚시","current":0,"goal":10,"reward":"300P","claimed":false,"home":false,"action":"fishing","metric":"region","region":"월광의 섬"},"dailyRegion36":{"tab":"daily","label":"에메랄드 호수 10회 낚시","current":0,"goal":10,"reward":"300P","claimed":false,"home":false,"action":"fishing","metric":"region","region":"에메랄드 호수"},"dailyRegion37":{"tab":"daily","label":"별빛 계곡 10회 낚시","current":0,"goal":10,"reward":"300P","claimed":false,"home":false,"action":"fishing","metric":"region","region":"별빛 계곡"},"dailyRegion38":{"tab":"daily","label":"산호 낙원 10회 낚시","current":0,"goal":10,"reward":"300P","claimed":false,"home":false,"action":"fishing","metric":"region","region":"산호 낙원"},"dailyRegion39":{"tab":"daily","label":"황혼의 바다 10회 낚시","current":0,"goal":10,"reward":"300P","claimed":false,"home":false,"action":"fishing","metric":"region","region":"황혼의 바다"},"dailyRegion40":{"tab":"daily","label":"폭풍의 해역 10회 낚시","current":0,"goal":10,"reward":"300P","claimed":false,"home":false,"action":"fishing","metric":"region","region":"폭풍의 해역"},"weeklyFish30":{"tab":"weekly","label":"낚시 30회 성공","current":0,"goal":30,"reward":"1,500P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"weeklyFish50":{"tab":"weekly","label":"낚시 50회 성공","current":0,"goal":50,"reward":"2,500P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"weeklyFish100":{"tab":"weekly","label":"낚시 100회 성공","current":0,"goal":100,"reward":"5,000P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"weeklyFish150":{"tab":"weekly","label":"낚시 150회 성공","current":0,"goal":150,"reward":"7,500P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"weeklyFish200":{"tab":"weekly","label":"낚시 200회 성공","current":0,"goal":200,"reward":"10,000P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"weeklyFish300":{"tab":"weekly","label":"낚시 300회 성공","current":0,"goal":300,"reward":"10,000P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"weeklyFish500":{"tab":"weekly","label":"낚시 500회 성공","current":0,"goal":500,"reward":"10,000P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"weeklyFish700":{"tab":"weekly","label":"낚시 700회 성공","current":0,"goal":700,"reward":"10,000P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"weeklyFish1000":{"tab":"weekly","label":"낚시 1000회 성공","current":0,"goal":1000,"reward":"10,000P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"weeklyFish2000":{"tab":"weekly","label":"낚시 2000회 성공","current":0,"goal":2000,"reward":"10,000P","claimed":false,"home":false,"action":"fishing","metric":"fish"},"weeklyRare5":{"tab":"weekly","label":"희귀 물고기 5종 획득","current":0,"goal":5,"reward":"고급 미끼 x3","claimed":false,"home":false,"action":"collection","metric":"grade","grade":"희귀"},"weeklyRare10":{"tab":"weekly","label":"희귀 물고기 10마리","current":0,"goal":10,"reward":"3000P","claimed":false,"home":false,"action":"collection","metric":"grade","grade":"희귀"},"weeklyRare20":{"tab":"weekly","label":"희귀 물고기 20마리","current":0,"goal":20,"reward":"6000P","claimed":false,"home":false,"action":"collection","metric":"grade","grade":"희귀"},"weeklyRare30":{"tab":"weekly","label":"희귀 물고기 30마리","current":0,"goal":30,"reward":"9000P","claimed":false,"home":false,"action":"collection","metric":"grade","grade":"희귀"},"weeklyHero1":{"tab":"weekly","label":"영웅 물고기 1마리","current":0,"goal":1,"reward":"고급 미끼 x2","claimed":false,"home":false,"action":"collection","metric":"grade","grade":"영웅"},"weeklyHero3":{"tab":"weekly","label":"영웅 물고기 3마리","current":0,"goal":3,"reward":"고급 미끼 x2","claimed":false,"home":false,"action":"collection","metric":"grade","grade":"영웅"},"weeklyHero5":{"tab":"weekly","label":"영웅 물고기 5마리","current":0,"goal":5,"reward":"고급 미끼 x2","claimed":false,"home":false,"action":"collection","metric":"grade","grade":"영웅"},"weeklyHero10":{"tab":"weekly","label":"영웅 물고기 10마리","current":0,"goal":10,"reward":"고급 미끼 x2","claimed":false,"home":false,"action":"collection","metric":"grade","grade":"영웅"},"weeklyLegend":{"tab":"weekly","label":"전설 물고기 획득","current":0,"goal":1,"reward":"전설 미끼 x2","claimed":false,"home":false,"action":"collection","metric":"grade","grade":"전설"},"weeklyLegend2":{"tab":"weekly","label":"전설 물고기 2마리","current":0,"goal":2,"reward":"전설 미끼 x2","claimed":false,"home":false,"action":"collection","metric":"grade","grade":"전설"},"weeklyLegend3":{"tab":"weekly","label":"전설 물고기 3마리","current":0,"goal":3,"reward":"전설 미끼 x2","claimed":false,"home":false,"action":"collection","metric":"grade","grade":"전설"},"weeklyLegend5":{"tab":"weekly","label":"전설 물고기 5마리","current":0,"goal":5,"reward":"전설 미끼 x2","claimed":false,"home":false,"action":"collection","metric":"grade","grade":"전설"},"weeklyCollection30":{"tab":"weekly","label":"도감 수집률 30% 달성","current":0,"goal":30,"reward":"전설 미끼 x1","claimed":false,"home":false,"action":"collection","metric":"collectionPercent"},"weeklyCollection50":{"tab":"weekly","label":"도감 수집률 50% 달성","current":0,"goal":50,"reward":"전설 미끼 x1","claimed":false,"home":false,"action":"collection","metric":"collectionPercent"},"weeklyCollection75":{"tab":"weekly","label":"도감 수집률 75% 달성","current":0,"goal":75,"reward":"전설 미끼 x1","claimed":false,"home":false,"action":"collection","metric":"collectionPercent"},"weeklyCollection100":{"tab":"weekly","label":"도감 수집률 100% 달성","current":0,"goal":100,"reward":"전설 미끼 x1","claimed":false,"home":false,"action":"collection","metric":"collectionPercent"},"weeklyRegion67":{"tab":"weekly","label":"안개의 섬 30회 낚시","current":0,"goal":30,"reward":"1,000P","claimed":false,"home":false,"action":"fishing","metric":"region","region":"안개의 섬"},"weeklyRegion68":{"tab":"weekly","label":"월광의 섬 30회 낚시","current":0,"goal":30,"reward":"1,000P","claimed":false,"home":false,"action":"fishing","metric":"region","region":"월광의 섬"},"weeklyRegion69":{"tab":"weekly","label":"에메랄드 호수 30회 낚시","current":0,"goal":30,"reward":"1,000P","claimed":false,"home":false,"action":"fishing","metric":"region","region":"에메랄드 호수"},"weeklyRegion70":{"tab":"weekly","label":"별빛 계곡 30회 낚시","current":0,"goal":30,"reward":"1,000P","claimed":false,"home":false,"action":"fishing","metric":"region","region":"별빛 계곡"},"weeklyRegion71":{"tab":"weekly","label":"산호 낙원 30회 낚시","current":0,"goal":30,"reward":"1,000P","claimed":false,"home":false,"action":"fishing","metric":"region","region":"산호 낙원"},"openbanking":{"tab":"finance","label":"오픈뱅킹 연결","current":0,"goal":1,"reward":"고급 미끼 x1","claimed":false,"home":false,"action":"finance","metric":"finance"},"deposit":{"tab":"finance","label":"예적금 상품 가입","current":0,"goal":1,"reward":"1,000P","claimed":false,"home":false,"action":"finance","metric":"finance"},"loan":{"tab":"finance","label":"대출 실행","current":0,"goal":1,"reward":"전설 미끼 x1","claimed":false,"home":false,"action":"finance","metric":"finance"},"eventJoin":{"tab":"finance","label":"신규 이벤트 참여","current":0,"goal":1,"reward":"500P","claimed":false,"home":false,"action":"finance","metric":"finance"},"financeQuiz":{"tab":"finance","label":"금융 퀴즈 맞추기","current":0,"goal":1,"reward":"300P","claimed":false,"home":false,"action":"quiz","metric":"finance"},"invite":{"tab":"finance","label":"친구 초대하기","current":0,"goal":1,"reward":"고급 미끼 x2","claimed":false,"home":false,"action":"finance","metric":"finance"},"push":{"tab":"finance","label":"앱 푸시 동의","current":0,"goal":1,"reward":"100P","claimed":false,"home":false,"action":"finance","metric":"finance"},"product":{"tab":"finance","label":"상품 페이지 방문","current":0,"goal":1,"reward":"100P","claimed":false,"home":true,"action":"product","metric":"finance"},"quiz":{"tab":"finance","label":"금융 퀴즈 맞추기","current":0,"goal":1,"reward":"200P","claimed":false,"home":true,"action":"quiz","metric":"finance"},"financeExtra1":{"tab":"finance","label":"금융 체험 미션 1","current":0,"goal":1,"reward":"150P","claimed":false,"home":false,"action":"finance","metric":"finance"},"financeExtra2":{"tab":"finance","label":"금융 체험 미션 2","current":0,"goal":1,"reward":"200P","claimed":false,"home":false,"action":"finance","metric":"finance"},"financeExtra3":{"tab":"finance","label":"금융 체험 미션 3","current":0,"goal":1,"reward":"250P","claimed":false,"home":false,"action":"finance","metric":"finance"},"financeExtra4":{"tab":"finance","label":"금융 체험 미션 4","current":0,"goal":1,"reward":"300P","claimed":false,"home":false,"action":"finance","metric":"finance"},"financeExtra5":{"tab":"finance","label":"금융 체험 미션 5","current":0,"goal":1,"reward":"350P","claimed":false,"home":false,"action":"finance","metric":"finance"},"financeExtra6":{"tab":"finance","label":"금융 체험 미션 6","current":0,"goal":1,"reward":"400P","claimed":false,"home":false,"action":"finance","metric":"finance"},"financeExtra7":{"tab":"finance","label":"금융 체험 미션 7","current":0,"goal":1,"reward":"450P","claimed":false,"home":false,"action":"finance","metric":"finance"},"financeExtra8":{"tab":"finance","label":"금융 체험 미션 8","current":0,"goal":1,"reward":"500P","claimed":false,"home":false,"action":"finance","metric":"finance"},"financeExtra9":{"tab":"finance","label":"금융 체험 미션 9","current":0,"goal":1,"reward":"550P","claimed":false,"home":false,"action":"finance","metric":"finance"},"financeExtra10":{"tab":"finance","label":"금융 체험 미션 10","current":0,"goal":1,"reward":"600P","claimed":false,"home":false,"action":"finance","metric":"finance"},"financeExtra11":{"tab":"finance","label":"금융 체험 미션 11","current":0,"goal":1,"reward":"650P","claimed":false,"home":false,"action":"finance","metric":"finance"},"financeExtra12":{"tab":"finance","label":"금융 체험 미션 12","current":0,"goal":1,"reward":"700P","claimed":false,"home":false,"action":"finance","metric":"finance"},"financeExtra13":{"tab":"finance","label":"금융 체험 미션 13","current":0,"goal":1,"reward":"750P","claimed":false,"home":false,"action":"finance","metric":"finance"},"financeExtra14":{"tab":"finance","label":"금융 체험 미션 14","current":0,"goal":1,"reward":"800P","claimed":false,"home":false,"action":"finance","metric":"finance"},"financeExtra15":{"tab":"finance","label":"금융 체험 미션 15","current":0,"goal":1,"reward":"850P","claimed":false,"home":false,"action":"finance","metric":"finance"},"financeExtra16":{"tab":"finance","label":"금융 체험 미션 16","current":0,"goal":1,"reward":"900P","claimed":false,"home":false,"action":"finance","metric":"finance"},"financeExtra17":{"tab":"finance","label":"금융 체험 미션 17","current":0,"goal":1,"reward":"950P","claimed":false,"home":false,"action":"finance","metric":"finance"},"financeExtra18":{"tab":"finance","label":"금융 체험 미션 18","current":0,"goal":1,"reward":"1000P","claimed":false,"home":false,"action":"finance","metric":"finance"},"financeExtra19":{"tab":"finance","label":"금융 체험 미션 19","current":0,"goal":1,"reward":"1050P","claimed":false,"home":false,"action":"finance","metric":"finance"}}};


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

function syncMissions(){
  const pct=Math.round((state.discoveredFishIds.size/ALL_FISH.length)*100);
  Object.values(state.missions).forEach(m=>{
    if(m.metric==='collectionPercent' && !m.claimed) m.current=Math.min(m.goal,pct);
  });
}
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
function isRodUnlocked(rod){return rod.price===0 || (state.unlockedRodIds && state.unlockedRodIds.has(rod.id));}
function canUnlockRod(rod){const player=getPlayerLevelInfo(); return player.level >= rod.level && state.point >= rod.price;}
function rodRequirementText(rod){if(isRodUnlocked(rod)) return '보유중'; return `Lv.${rod.level} · ${rod.price.toLocaleString()}P`;}
function renderRods(){
  if(!state.unlockedRodIds) state.unlockedRodIds = new Set(['mist']);
  const r=currentRod(),card=$('#equippedRodCard'),icon=$('#equippedRodIcon'),grade=$('#equippedRodGrade'),name=$('#equippedRodName');
  if(card)card.className=`equipped-card ${gradeClass(r.grade)}`;
  if(icon){icon.textContent='🎣'; icon.className=`rod-img ${gradeClass(r.grade)}`;}
  if(grade){grade.textContent=`${r.grade} · 장착 중`; grade.className=`badge ${gradeClass(r.grade)}`;}
  if(name)name.textContent=r.name;
  ['equippedRodEffect1','equippedRodEffect2','equippedRodEffect3'].forEach((id,i)=>{const el=$('#'+id); if(el)el.textContent=r.effects[i];});
  const grid=$('#rodGrid');
  if(grid)grid.innerHTML=RODS.map(x=>{
    const unlocked = isRodUnlocked(x);
    const available = !unlocked && canUnlockRod(x);
    const cls = `${gradeClass(x.grade)} ${x.id===state.currentRodId?'is-equipped':''} ${unlocked?'is-owned':available?'is-available':'is-locked'}`;
    const status = x.id===state.currentRodId ? '장착중' : unlocked ? '장착 가능' : available ? '구매 가능' : rodRequirementText(x);
    return `<button type="button" data-rod-id="${x.id}" class="${cls}"><span class="rod-symbol">🎣</span><strong>${x.name}</strong><small>${x.grade}</small><em>${status}</em></button>`;
  }).join('');
}
function renderShop(){ $$('[data-shop-tab]').forEach(b=>b.classList.toggle('active',b.dataset.shopTab===state.currentShopTab)); const list=$('#shopList'),items=SHOP_ITEMS[state.currentShopTab]||[]; if(list)list.innerHTML=items.map(x=>`<article data-buy-id="${x.id}"><span>${x.icon}</span><div><strong>${x.name}</strong><small>${x.desc}</small></div><b>${x.price.toLocaleString()}P</b></article>`).join('');}

function getAchievementProgress(item){
  if(item.id.startsWith('collect-')){
    return Math.min(item.goal, state.discoveredFishIds.size);
  }
  if(item.id.startsWith('fish-')){
    return Math.min(item.goal, state.totalFishCaught || 0);
  }
  if(item.id.startsWith('perfect-')){
    return Math.min(item.goal, state.perfectCount || 0);
  }
  if(item.id.startsWith('rare-')){
    return Math.min(item.goal, state.rareCount || ALL_FISH.filter(f=>f.grade==='희귀' && state.discoveredFishIds.has(f.id)).length);
  }
  if(item.id.startsWith('hero-')){
    return Math.min(item.goal, state.heroCount || ALL_FISH.filter(f=>f.grade==='영웅' && state.discoveredFishIds.has(f.id)).length);
  }
  if(item.id.startsWith('legend-')){
    return Math.min(item.goal, state.legendCount || ALL_FISH.filter(f=>f.grade==='전설' && state.discoveredFishIds.has(f.id)).length);
  }
  if(item.id.startsWith('region-')){
    const idx = ['mist','moon','emerald','crystal','coral','twilight','storm','glacier','abyss','origin'].indexOf(item.id.replace('region-',''));
    const name = ['안개의 섬','월광의 섬','에메랄드 호수','별빛 계곡','산호 낙원','황혼의 바다','폭풍의 해역','영원의 빙하','심연의 해구','태초의 심해'][idx];
    return name ? Math.min(item.goal, getRegionCollectionProgress(name).discovered) : 0;
  }
  if(item.id.startsWith('gold-')){
    return Math.min(item.goal, state.point || 0);
  }
  if(item.id.startsWith('sell-')){
    return Math.min(item.goal, state.soldFishCount || 0);
  }
  if(item.id.startsWith('level-')){
    return Math.min(item.goal, getPlayerLevelInfo().level);
  }
  if(item.id === 'finance-quiz'){
    return state.missions.quiz.current >= 1 || state.missions.financeQuiz.current >= 1 ? 1 : 0;
  }
  if(item.id === 'finance-quiz-3'){
    return Math.min(item.goal, (state.missions.quiz.current || 0) + (state.missions.financeQuiz.current || 0));
  }
  if(item.id === 'finance-openbank') return state.missions.openbanking.current;
  if(item.id === 'finance-product') return state.missions.product.current;
  if(item.id === 'finance-push') return state.missions.push.current;
  if(item.id === 'finance-attendance') return state.missions.attendance.current;
  if(item.id === 'finance-event') return state.missions.eventJoin.current;
  if(item.id === 'finance-invite') return state.missions.invite.current;
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




function getFishingTitleByCount(count){
  const tiers = [
    [1000000, '전설의 강태공'],
    [750000, '신화의 낚시꾼'],
    [500000, '태초의 낚시꾼'],
    [350000, '심연의 낚시꾼'],
    [250000, '전설의 낚시꾼'],
    [180000, '영웅의 낚시꾼'],
    [130000, '장인의 낚시꾼'],
    [90000, '명인의 낚시꾼'],
    [60000, '달인의 낚시꾼'],
    [40000, '명성의 낚시꾼'],
    [25000, '대물 낚시꾼'],
    [15000, '실력파 낚시꾼'],
    [8000, '베테랑 낚시꾼'],
    [4000, '노련한 낚시꾼'],
    [2000, '숙련 낚시꾼'],
    [1000, '열혈 낚시꾼'],
    [500, '풋내기 낚시꾼'],
    [200, '신입 낚시꾼'],
    [50, '견습 낚시꾼'],
    [0, '초보 낚시꾼']
  ];
  const found = tiers.find(([goal]) => count >= goal);
  return found ? found[1] : '초보 낚시꾼';
}

function renderHomeStats(){
  const point = $('#homePoint');
  const shopPoint = $('#shopPoint');
  const bait = $('#homeBait');
  const level = $('#homeLevel');
  const expText = $('#homeExpText');
  const fishingTitle = $('#homeFishingTitle');
  const progress = $('.profile-info .progress i');

  const info = getPlayerLevelInfo();
  const levelValue = info.level;
  const currentExp = info.currentExp;
  const nextExp = info.nextExp;

  if(point) point.textContent = `${state.point.toLocaleString()} P`;
  if(shopPoint) shopPoint.textContent = `${state.point.toLocaleString()}P`;
  if(bait) bait.textContent = `${state.bait} 개`;
  if(level) level.textContent = `Lv.${levelValue} 펭펭이`;
  if(fishingTitle) fishingTitle.textContent = getFishingTitleByCount(state.totalFishCaught || 0);
  if(expText) expText.textContent = `EXP ${currentExp.toLocaleString()} / ${nextExp.toLocaleString()}`;
  if(progress) progress.style.width = `${Math.round((currentExp / nextExp) * 100)}%`;
}


function getPlayerLevelInfo(){
  const exp = state.discoveredFishIds.size * 40 + (state.totalFishCaught || state.missions.weeklyFish30.current || 0) * 25;
  const level = Math.max(1, Math.floor(exp / 500) + 1);
  const currentExp = exp % 500;
  return {level, currentExp, nextExp:500};
}

function getRankedRows(type){
  const player = getPlayerLevelInfo();
  const isWeekly = type === 'weekly';
  const successCount = isWeekly ? (state.weeklyFishCaught || 0) : (state.totalFishCaught || 0);
  const myPoint = isWeekly
    ? ((state.weeklyPoint || 0) + successCount * 100)
    : Math.max(state.point || 0, successCount * 100);
  const myLabel = `${isWeekly ? '주간' : '누적'} ${successCount.toLocaleString()}회 성공`;
  const mine = {
    name:'나의 펭펭이',
    icon:'🐧',
    label:myLabel,
    level:player.level,
    point:myPoint,
    mine:true
  };

  return [...(RANKING_DATA[type] || []), mine]
    .sort((a,b) => Number(b.point || 0) - Number(a.point || 0))
    .map((item, index) => ({...item, rank:index + 1}));
}

function getMyRankingRows(){
  const weeklyRows = getRankedRows('weekly');
  const totalRows = getRankedRows('total');
  const weeklyMine = weeklyRows.find(item => item.mine);
  const totalMine = totalRows.find(item => item.mine);
  return [
    {...weeklyMine, name:'주간 내 순위', icon:'📅', label:weeklyMine.label},
    {...totalMine, name:'전체 내 순위', icon:'🏆', label:totalMine.label}
  ];
}

function renderRanking(){
  $$('[data-ranking-tab]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.rankingTab === state.currentRankingTab);
  });

  const list = $('#rankingList');
  if(!list) return;

  const rows = state.currentRankingTab === 'mine'
    ? getMyRankingRows()
    : getRankedRows(state.currentRankingTab);

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

function renderAll(){renderFishingTime(); renderHomeMap(); renderRegionDetail(); renderWorldMap(); renderHomeStats(); renderMissions(); renderCollection(state.currentCollectionFilter); renderRods(); renderShop(); renderAchievements(); renderRanking(); renderFishingButtonState();}


const FISH_GRADE_RATES = [
  { grade: '일반', rate: 92.0 },
  { grade: '희귀', rate: 6.9 },
  { grade: '영웅', rate: 1.0 },
  { grade: '전설', rate: 0.1 }
];

function getCurrentGradeRates(){
  const rod = currentRod();
  const rare = 6.9 + Number(rod.rareBonus || 0);
  const epic = 1.0 + Number(rod.epicBonus || 0);
  const legend = 0.1 + Number(rod.legendBonus || 0);
  const normal = Math.max(0, 100 - rare - epic - legend);
  return [
    { grade: '일반', rate: normal },
    { grade: '희귀', rate: rare },
    { grade: '영웅', rate: epic },
    { grade: '전설', rate: legend }
  ];
}

function getFishPoolByJudgement(j){
  if(!j || j.result === 'fail') return [];

  const regionFish = getRegionFish(state.selectedRegion || '안개의 섬');
  return regionFish.length ? regionFish : ALL_FISH;
}

function pickWeightedFishGrade(pool){
  const roll = Math.random() * 100;
  let acc = 0;

  for(const item of getCurrentGradeRates()){
    acc += item.rate;
    if(roll < acc){
      const byGrade = pool.filter(f => f.grade === item.grade);
      if(byGrade.length) return byGrade;
      break;
    }
  }

  const fallbackOrder = ['일반', '희귀', '영웅', '전설'];
  for(const grade of fallbackOrder){
    const byGrade = pool.filter(f => f.grade === grade);
    if(byGrade.length) return byGrade;
  }

  return pool;
}

function pickFishByJudgement(j){
  const pool = getFishPoolByJudgement(j);
  if(pool.length === 0) return null;

  const gradePool = pickWeightedFishGrade(pool);
  return gradePool[Math.floor(Math.random() * gradePool.length)];
}

function getRewardByResult(j, fish){
  const rod = currentRod();
  const pointRate = 1 + (Number(rod.pointBonus || 0) / 100);
  if(j.result === 'perfect'){
    const gradeBonus = fish && fish.grade === '전설' ? 1000 : fish && fish.grade === '영웅' ? 700 : 500;
    return {point: Math.round(gradeBonus * pointRate), exp: 80};
  }
  if(j.result === 'success'){
    const gradeBonus = fish && fish.grade === '희귀' ? 300 : 150;
    return {point: Math.round(gradeBonus * pointRate), exp: 40};
  }
  return {point: 0, exp: 0};
}


function updateMissionProgressAfterCatch(j, fish, reward, wasNew){
  Object.values(state.missions).forEach(m=>{
    if(!m || m.claimed) return;
    if(m.metric==='fish') m.current=Math.min(m.goal,(m.current||0)+1);
    if(m.metric==='perfect' && j.result==='perfect') m.current=Math.min(m.goal,(m.current||0)+1);
    if(m.metric==='newCollection' && wasNew) m.current=Math.min(m.goal,(m.current||0)+1);
    if(m.metric==='grade' && fish && fish.grade===m.grade) m.current=Math.min(m.goal,(m.current||0)+1);
    if(m.metric==='region' && fish && fish.region===m.region) m.current=Math.min(m.goal,(m.current||0)+1);
    if(m.metric==='gold' && reward && reward.point) m.current=Math.min(m.goal,(m.current||0)+reward.point);
  });
  syncMissions();
}

function applyFishingData(j, fish, reward){
  if(j.result === 'fail') return false;

  state.point += reward.point;
  state.totalFishCaught = (state.totalFishCaught || 0) + 1;
  state.weeklyFishCaught = (state.weeklyFishCaught || 0) + 1;
  state.weeklyPoint = (state.weeklyPoint || 0) + reward.point;
  if(j.result === 'perfect') state.perfectCount = (state.perfectCount || 0) + 1;

  let wasNew = false;
  if(fish){
    wasNew = !state.discoveredFishIds.has(fish.id);
    state.discoveredFishIds.add(fish.id);
    if(fish.grade === '희귀') state.rareCount = (state.rareCount || 0) + 1;
    if(fish.grade === '영웅') state.heroCount = (state.heroCount || 0) + 1;
    if(fish.grade === '전설') state.legendCount = (state.legendCount || 0) + 1;
  }

  updateMissionProgressAfterCatch(j, fish, reward, wasNew);
  return wasNew;
}



function hasFishingBait(){
  return Number(state.bait || 0) > 0;
}

function consumeFishingBait(){
  if(!hasFishingBait()){
    toast('미끼가 부족합니다. 상점에서 미끼를 구매해 주세요.');
    renderFishingButtonState();
    return false;
  }
  state.bait = Math.max(0, Number(state.bait || 0) - 1);
  renderHomeStats();
  renderFishingButtonState();
  return true;
}

function renderFishingButtonState(){
  const btn = $('#catchBtn');
  if(!btn) return;
  const empty = !hasFishingBait();
  btn.disabled = empty;
  btn.textContent = empty ? '미끼없음' : '입질!';
  btn.setAttribute('aria-disabled', empty ? 'true' : 'false');
  btn.classList.toggle('is-disabled', empty);
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

  if(card){
    card.classList.remove('is-fail','is-success','is-perfect','normal','rare','hero','legend','myth');
    card.classList.add(j.result==='fail'?'is-fail':j.result==='perfect'?'is-perfect':'is-success');
    if(success && caughtFish) card.classList.add(gradeClass(caughtFish.grade));
  }

  if(success && caughtFish){
    if(title) title.textContent = j.result === 'perfect' ? '완벽한 타이밍!' : '낚시 성공!';
    if(fishEl){ fishEl.textContent = ''; if(caughtFish.image){ const img=document.createElement('img'); img.className='result-fish-asset'; img.src=caughtFish.image; img.alt=caughtFish.name; fishEl.append(img); } else { fishEl.append(document.createTextNode(getSingleResultIcon(caughtFish.icon))); } }
    if(name) name.textContent = caughtFish.name;
    if(grade){
      grade.textContent = caughtFish.grade;
      grade.className = `grade result-grade ${gradeClass(caughtFish.grade)}`;
    }
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
    if(title)title.textContent='낚시 실패'; if(fishEl){ fishEl.textContent=''; fishEl.append(document.createTextNode('💦')); } if(name)name.textContent='아쉽게 놓쳤어요'; if(grade){grade.textContent='MISS'; grade.className='grade result-grade fail';} if(badge)badge.style.display='none'; if(rewards)rewards.innerHTML='<li><b>타이밍이 성공 영역을 벗어났어요.</b><span>실패</span></li><li><b>다시 도전해보세요!</b><span>미끼 -1</span></li>';
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
if(t.closest('#catchBtn')){if(!consumeFishingBait()) return; const j=judgement(); const st=$('#fishStatus'); if(st)st.textContent=j.result==='fail'?'MISS! 물고기를 놓쳤어요.':`${j.label}! 물고기를 낚았어요!`; fishingResult(j); showScreen('result'); return;}
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
const rc=t.closest('[data-rod-id]'); if(rc){
  const rod=RODS.find(x=>x.id===rc.dataset.rodId);
  if(!rod) return;
  if(!state.unlockedRodIds) state.unlockedRodIds = new Set(['mist']);
  if(!isRodUnlocked(rod)){
    const player=getPlayerLevelInfo();
    if(player.level < rod.level){toast(`Lv.${rod.level} 달성 후 개방됩니다.`); return;}
    if(state.point < rod.price){toast(`${rod.price.toLocaleString()}P가 필요합니다.`); return;}
    state.point -= rod.price;
    state.unlockedRodIds.add(rod.id);
    state.currentRodId=rod.id;
    state.rodLevel=rod.level;
    renderAll();
    toast(`${rod.name} 구매 및 장착 완료`);
    return;
  }
  state.currentRodId=rod.id;
  state.rodLevel=rod.level;
  renderRods();
  toast(`${rod.name} 장착 완료`);
  return;
}
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
