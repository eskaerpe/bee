allParagraphs = [
    "I have never expected I could be the best part on your life. Being the most important to you is another level of happiness. I usually think no one needs me – sampe gue pernah bilang ke lo kalo gue mau ngilang seharian. Tapi ga lo bolehin, soalnya lo bakal nyariin. Makasih ya bee, di situ gue bener bener ga nyangka banget ternyata masih ada orang yang butuhin gue segitunya. Iya, gue ga bakal mikir mau ngilang gitu lagi. I will be here for you. Anytime. I will be free for you. ",

    "Lo jangan kemana-mana ya bee. gue butuh lo, banget. Jujur deh, sejak kita deket, gue udah jarang ngerasa hampa dan kesepian lagi berkat lo. gue udah jarang mikir kalo gue ga punya siapa siapa. Sampe pada akhirnya lo dateng, gue jadi ngerasa punya lo yang ada kapan pun. sebenernya gue udah jarang keluarin keluh kesah ke orang. tapi kalo sama lo, gue ngerasa lebih free, lebih bebas buat keluarin semuanya. That is how matter you are in my life, bee. So please, stay here with me, okay? Tell me anything about you. Let me go deeper into your world. ",

    "Fyi aja ni ya, gue seneng banget tiap kali lo manggil “rei” di chat ataupun di call. Kalo lo sadar pas kita call – pake discord sambil main plato – terus pertama kalinya lo panggil “rei”, gue itu kek terdiam sejenak gitu loh HAHAHAHA. I feel like flying fr. Intinya lo bebas deh mau manggil gue apa. Favorit gue si “rei” ya hehehe.",

    "Someday lo pernah sceren record gitu kan, sumpah gue kaget banget pas liat contact gue di pin. I FEEL LIKE I'M SPECIAL THEN I WAS LIKE- “damn bro this girl needs me so much, I mustn't hurt her”. I was stunned when I saw that I am pinned istg. makanya waktu itu gue takut banget lo marah pas ga sengaja gue cuekin JHAFSJKHFHJSABDS SORRY BGT ANYWAYS. Eh sekarang masih di pin ga tuh? keren banget si kalo masih. How could you respect me like that. thanks and ilyt.",

    "Stop bandingin diri kamu sama orang lain ya bee. Kalo kita bandingin kaya gitu terus, yang ada kita yang cape sama diri kita sendiri. Bagus deh kalo lo jadiin itu sebagai motivasi, tapi big no banget kalo lo jadiin itu sebagai sesuatu yang bikin lo berhenti, atau yang bikin lo merendah, no. Kita semua sama. Kalo dia bisa, lo juga pasti bisa. Setiap orang ada waktunya buat bisa lakuin suatu hal, bee. Lo tenang aja. Lo pasti bisa kok. Akan ada saatnya. Tiap orang punya waktunya masing masing, bee. Termasuk lo dan gue, tenang aja. Kita bisa belajar dari kesalahan di hari-hari sebelumnya. Jadi lo ga usah banding-bandingin lagi diri lo sama orang lain, ya. Cukup jadiin itu sebagai motivasi ke diri kita buat lebih baik. Mungkin lo ga sadar, banyak yang bisa lo lakuin tapi orang lain ga bisa. contohnya aja, lo bisa mengingat sesuatu lebih lama dan lebih lengkap daripada gue. Jadi.. kamu harus bangga sama diri kamu sendiri. I'm so proud of you, bee. You're always doing great, no matter what is it.",

    "kalo kata aku ya, jangan bandingin diri kita sama orang lain, ga bakal ada habisnya. mendingan kita bandingin diri kita sama diri kita sendiri di hari sebelumnya, di bulan sebelumnya, di semester sebelumnya. kalo ngerasa belum bagus, kita perbaiki. kalo ngerasa udah cukup, kita tingkatin lagi. kalo ngerasa udah lebih dari cukup, kita pertahanin. iya aku ngerti, kadang ngeliat orang lain bisa dan kita ga bisa tuh rasanya ga enak banget. tapi kita ga bisa ngubah mereka, bee. kita cuma bisa ubah diri kita doang menjadi diri kita dengan versi yang lebih baik. Aku ngerti, yang kita mau tuh sejajarin posisi dia, dan bahkan lewatin dia. tapi inget bee, kita ini di sekolah, bukan kompetisi kok, bukan lomba, jadi lo tenang aja, urutan ga begitu penting. yang penting kita dapet ilmunya dan bisa belajar dari kesalahan. (seems familiar? yea, this is my paragraph that i sent u on whatsapp)",

    "Bee, makasih banget ya udah mau jadi tempat cerita gue, udah jadi tempat gue ngeluh, bahkan lo bisa nerima hal hal ga jelas gue. Thank you for always being here for me. Dengan adanya lo di hidup gue sekarang, gue udah jarang ngerasa sepi lagi. Lo dateng ke gue di waktu yang tepat banget. Di saat gue lagi butuh tempat buat ngeluarin keluh kesah gue. Maaf banget ya kalo aku belum bisa jadi orang yang kamu expect. Maaf juga waktu itu pernah cuekin kamu. I didn’t mean to but- sorry. Kalo cape sama gue bilang ya. Pun kalo gue berlebihan, bilang aja. Kalo ada yang salah dari cara gue nge-respond lo, bilang aja ya. Pokonya gue mau bikin convo kita senyaman mungkin buat lo. So yea, I want to say thank you very much for being my best part on my life. Thank you for coming here. Thank you for everything you did to me. This could be the last of those paragraph. Once again, thank you. I wish whatever you want will come true. And I wish whatever will happen to us, we can still be this close. Enjoy your life, never give up because of anything, Good Luck! ",
];
cardNumber = 1;

function paragraphToCard() {
    allParagraphs.forEach(function (paragraph) {
        cardNumber += 1;
        var cardTemplate = document.querySelector("#card-template");
        var cardClone = cardTemplate.content.cloneNode(true);
        cardClone.querySelector(".card-text").textContent = paragraph;
        cardClone.querySelector(".penutup-kartu").classList.replace("closer-num", `closer-${cardNumber}`);
        cardClone.querySelector(".btn-show").setAttribute("onclick", `removePenutup(${cardNumber})`);

        document.querySelector(".card-place").append(cardClone);
    });
}

paragraphToCard();

function removePenutup(penutupNumber) {
    className = document.querySelector(`.closer-${penutupNumber}`);
    className.classList.add("fade-down-show");
}

function showBee() {
    beeFlying = document.createElement("marquee");
    beeFlying.append("🐝🐝");
    document.querySelector(".title-text").appendChild(beeFlying).setAttribute("style", "font-size:35px");
}
