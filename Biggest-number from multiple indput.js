const sadik = 1000;
const amin = 800;
const arman = 900;
const himel = 1200;

if (sadik > amin && sadik > arman && sadik > himel) {
    console.log("Sadik is a Biggest ")
} else {
    if (amin > arman && amin > himel) {
        console.log("amin is a bigger")
    } else {
        if (arman > himel) {
            console.log("arman is a bigger ")
        } else {
            console.log("himel is a bigger ")
        }

    }
}