let magicians: string[] = ["zade", "alex", "josh"];

function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

show_magicians(magicians);

let magicianS: string[] = ["zade", "alex", "josh"];

function make_great(magicians: string[]): string[] {
    let great_magicians: any = [];
    magicians.forEach(magician => {
        great_magicians.push(`${magician} the Great`);
    });
    return great_magicians;
}

let great_magicians = make_great(magicians.slice()); // Creates a new modified array
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(great_magicians); // Shows modified names