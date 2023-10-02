// Soal 1

let name = "Rizqi Pratama"
let age = 24
let hobbies = ["gaming", "watching", "walking around", "eats"]
let IsMaried = false
const schoolList = [
    { name: "Universitas Nusa Mandiri", yearIn: 2020, yearOut: 2021, major: "Teknik Informatika" },
    { name: "Universitas Bina Sarana Informatika", yearIn: 2017, yearOut: 2020, major: "Teknologi Komputer" },
    { name: "SMK Negeri 42 Jakarta", yearIn: 2014, yearOut: 2017, major: "Pemasaran" }
]
const skills = [
    { name: "Javascript", level: "Beginer" },
    { name: "PostgreSQL", level: "Beginer" }
]
let interestInCoding = true

const biodata = { name, age, hobbies, IsMaried, schoolList, skills, interestInCoding }
console.log(biodata)


// Soal 2

const scoreAverage = ({ bahasa, english, math, naturalScience }) => {

    // parameter menggunakan objek supaya user dapat memasukan input
    // dengan pasti dan nilai parameter tidak tertukar dengan parameter lain
    // 0 (Zero) score validation

    const checkIsBahasaValid = !(bahasa || bahasa >= 0)
    const checkIsEnglishValid = !(english || english >= 0)
    const checkIsMathValid = !(math || math >= 0)
    const checkIsNatValid = !(naturalScience || naturalScience >= 0)

    if ( checkIsBahasaValid || checkIsEnglishValid || checkIsMathValid ||checkIsNatValid ) 
    {
        return console.log("Semua Nilai Harus di isi")
    }

    if (typeof bahasa != "number" || typeof english != "number" || typeof math != "number" || typeof naturalScience != "number") {
        return console.log("Semua Tipe Data Nilai Harus Number")
    }

    const average = (bahasa + english + math + naturalScience) / 4

    let grade

    // average dibuat koma x9.99 supaya nilai x9.1-99 
    // bisa ter grading contoh 69.5 tidak akan ter grading
    // jika tidak ditambahkan x9.99 karena tidak termasuk
    // kedalam grading range.

    if (average >= 90 && average <= 100) {
        grade = 'A'
    }
    else if (average >= 80 && average <= 89.99) {
        grade = 'B'
    }
    else if (average >= 70 && average <= 79.99) {
        grade = 'C'
    }
    else if (average >= 60 && average <= 69.99) {
        grade = 'D'
    }
    else if (average >= 0 && average <= 59.99) {
        grade = 'E'
    }

    console.log(`\nRata-rata = ${average} \nGrade = ${grade} \n`)

}

scoreAverage({
    bahasa: 90.8,
    english: 80.0,
    math: 87.3,
    naturalScience: 89
})

// Semua Nilai Harus di isi
scoreAverage({
    // bahasa: ,
    english: 78,
    math: 78,
    naturalScience: 89
})

// Semua Tipe Data Nilai Harus Number
scoreAverage({
    bahasa: '78',
    english: 79,
    math: 80,
    naturalScience: 89
})


// Soal 3

const printSegitiga = (count) => {

    // perulangan vertikal
    for (let vertical = 1; vertical <= count; vertical++) {

        // horizontal value
        let num = ''
        // pengecekan panjang horizontal
        if (num.length != vertical) {
            // perulangan horizontal
            for (let horizontal = 1; horizontal <= vertical; horizontal++) {
                num = num + String(horizontal)
            }
        }

        console.log(num)
    }

}

printSegitiga(7)


// soal 4

let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",

    email: "Sincere@april.biz",
    address:
    {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
}

const newData = { ...data, name: "Rizqi Pratama", email: "rizqipratama@example.com", hobbies }
console.log(newData)

const { address: { street, city } } = data
console.log(`street : ${street} \ncity : ${city}`)