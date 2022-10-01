let textarea = document.querySelector("textarea");
let addname = document.querySelector("#name");
let save = document.querySelector(".save select");
let btn = document.querySelector("#btn");


save.addEventListener("change", () => {
    let menue = save.options[save.selectedIndex].text;
    btn.innerHTML = `save as ${menue.split(" ")[0]} file`;

});

btn.addEventListener("click", () => {
    //create file 
    let blob = new Blob([textarea.value], { type: save.value });
    //create link from download
    let link = document.createElement("a");
    let url = URL.createObjectURL(blob);
    link.href = url;
    link.download = addname.value;
    link.click();

});