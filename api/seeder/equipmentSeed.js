import db from "../../config/database.js";
import Equipment from "../model/equipment.js";
import TargetMuscle from "../model/targetMuscle.js";

const seedEquipment = async () => {
    try {
        await db.sync();
        const equipment1 = await Equipment.create({
            equipmentImage: "https://storage.googleapis.com/img-buckett/Benchpress.jpg",
            name: "Benchpress",
            description: "Benchpress adalah jenis alat gym yang digunakan untuk melakukan latihan Benchpress yang bersifat compound exercise yang menargetkan otot-otot bagian atas tubuh, khususnya otot Dada Tengah. Perlu diingat, compound exercise merupakan jenis latihan yang menggunakan banyak bagian-bagian otot, sedangkan isolation exercise adalah jenis latihan yang hanya menggunakan satu bagian otot. Benchpress merupakan jenis alat gym yang bersifat uni-exercise di mana Benchpress hanya dapat digunakan untuk melakukan satu jenis latihan, yaitu Benchpress. Latihan ini melibatkan berbaring di atas bangku datar (bench) dan mendorong beban ke atas menggunakan barbell. Selama benchpress, Anda menurunkan beban ke arah dada dan kemudian mendorongnya ke atas dengan mengulurkan lengan Anda",
            tutorial: ["Taruh barbell pada rak barbell yang ada pada benchpress.", "Pasangkan beban (weight plate) yang diinginkan pada barbell.", "Berbaringlah di atas bangku datar (bench).", "Pegang barbel dengan tangan sedikit lebih lebar dari lebar bahu. Barbel harus berada tepat di atas bahu.", "Tekan kaki Anda dengan kuat ke lantai dan pertahankan pinggul Anda tetap menempel di bangku datar sepanjang gerakan.", "Kencangkan otot perut anda dan lengkungkan punggung Anda ke atas dengan pinggul tetap menempel di bangku datar.", "Perlahan angkat barbell dari rak. Turunkan barbel ke dada, ke arah puting, dengan membiarkan siku menekuk ke samping sekitar 45 derajat dari tubuh.", "Hentikan penurunan barbell ketika siku Anda sudah mencapai sedikit di bawah bangku. Dorong barbell ke atas (posisi awal) dengan kaki ditekan ke lantai saat Anda mendorongnya.", "Secara umum, lakukan tahap 7 dan 8 sebanyak 3 x 5-12 (3 Set, 5 - 12 Repetisi / Reps / Perulangan).", "Apabila Anda mampu mengangkat barbell lebih dari 12 Repetisi, maka berat beban harus ditingkatkan sekitar 2,5kg, sampai Anda tidak mampu mengangkatnya lebih dari 12 Repetisi. Namun, apabila Anda tidak mampu mengangkat barbell lebih dari 5 Repetisi, maka berat beban harus dikurangi sampai Anda bisa mengangkatnya lebih dari 5 Repetisi. Dengan demikian, sebagai patokan, Anda harus melakukan tahap 7 dan 8 dengan minimal 5 Repetisi, maksimal 12 Repetisi, pada setiap Set-nya (Set 1, 2, dan 3)"],
            videoTutorialLink: "https://www.youtube.com/watch?v=gRVjAtPip0Y&pp=ygUSaG93IHRvIGJlbmNoIHByZXNz",
        });

        const equipment2 = await Equipment.create({
            equipmentImage: "https://storage.googleapis.com/img-buckett/Dumbells.jpg",
            name: "Dumbells",
            description: '"Dumbell adalah sebuah alat gym berbentuk bar / batangan yang pendek, dengan beban di kedua sisinya yang digunakan orang untuk melakukan latihan fisik. Dumbell merupakan jenis alat gym yang bersifat multi-exercise di mana Dumbell dapat digunakan untuk berbagai macam variasi latihan fisik dengan target otot yang berbeda-beda. Target otot yang dapat dilatih dengan Dumbell sangat bervariasi di mana Anda dapat melatih otot Bisep, Trisep, Kaki, Dada, dan lain sebagainya. Sebagai contoh, Dumbell dapat digunakan untuk melakukan latihan Bicep Curl yang melatih otot Bisep, Overhead Extension yang melatih otot Trisep, Lateral Raise yang melatih otot Bahu, dll. Selain itu, Dumbell merupakan alat gym yang bisa digunakan untuk melakukan compound exercise ataupun isolation exercise. Perlu diingat, compound exercise merupakan jenis latihan yang menggunakan banyak bagian-bagian otot, sedangkan isolation exercise adalah jenis latihan yang hanya menggunakan satu bagian otot. Berhubung Dumbell merupakan jenis alat gym multi-exercise, maka tutorial penggunaan Dumbell sangat bervariasi. Silahkan cek di sini untuk melihat berbagai macam variasi tutorial penggunaan Dumbell. Di bawah ini adalah tutorial penggunaan Dumbell paling umum, yaitu tutorial latihan Bicep Curl yang menargetkan otot Bisep."'
            ,
            tutorial: ["Ini adalah tutorial menggunakan dumbell untuk latihan Bicep Curl", "Ambil posisi berdiri dengan memegang dumbell di masing-masing tangan, dengan lengan Anda menggantung di sisi tubuh.", "Posisi tulang punggung harus netral (posisi badan tegap)", "Tarik napas dalam-dalam, kemudian hembuskan napas sambil perlahan-lahan menekuk dumbell ke arah bahu.", "Fokus menggunakan otot Bisep ketika menekuk dumbell ke atas.", "Tahan sebentar, lalu turunkan dumbell ke posisi awal.", "Selama melakukan latihan ini, pergerakan tangan ketika menekuk ataupun menurunkan harus dilakukan secara perlahan-lahan.", "Secara umum, lakukan tahap 3 sampai 6 sebanyak 3 x 5-20 (3 Set, 5 - 20 Repetisi / Reps / Perulangan).", "Apabila Anda mampu mengangkat dumbell lebih dari 20 Repetisi, maka berat dumbell harus ditingkatkan sekitar 2,5kg, sampai Anda tidak mampu mengangkatnya lebih dari 20 Repetisi. Namun, apabila Anda tidak mampu mengangkat barbell lebih dari 5 Repetisi, maka berat beban harus dikurangi sampai Anda bisa mengangkatnya lebih dari 5 Repetisi. Dengan demikian, sebagai patokan, Anda harus melakukan tahap 3 sampai 6 dengan minimal 5 Repetisi, maksimal 20 Repetisi, pada setiap Set-nya (Set 1, 2, dan 3)"],
            videoTutorialLink: "https://www.youtube.com/watch?v=jjUyJufUKL8&pp=ygURZHVtYmVsbCBleGVyY2lzZXM%3D",
        });
        const muscles = await TargetMuscle.bulkCreate([
            { targetMuscleName: "Dada" },
            { targetMuscleName: "Bahu" },
            { targetMuscleName: "Tricep" },
            { targetMuscleName: "Bisep" },
            { targetMuscleName: "Rusuk" },
            { targetMuscleName: "Pundak" },
            { targetMuscleName: "Kaki" },
            { targetMuscleName: "Sayap" },
        ]);

        await equipment1.setMuscles([muscles[0], muscles[1], muscles[2], muscles[4]]);
        await equipment2.setMuscles([muscles[0], muscles[1], muscles[2], muscles[3], muscles[5], muscles[6], muscles[7]]);
    } catch (error) {
        console.error("Error seeding data:", error);
    } finally {
        await db.close();
    }
};

seedEquipment();
