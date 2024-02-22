 let web = window.location.href;
 if(web.includes("lingos.pl/students/checkAnswer")){
    document.querySelector("a#next").click();
 }
 if(web.includes("lingos.pl/students/wordsList")){
    let gui = document.querySelector('.bg-white.shrinkableDiv');
    gui.innerHTML += '<button class="btn px-2 py-1 btn-soft-primary" id="copy"><span class="d-none d-sm-inline"> Kopiuj</span></button>';
    document.querySelector("#copy").addEventListener('click', copy());
    function copy(){
        let werbs = document.querySelectorAll('li.list-group-item.rounded-2.mb-4.border');
        let werb = {};
        werbs.forEach(element => {
            let two = element.querySelector('.col-5').innerHTML;
            let one = element.querySelector('.col-7').innerHTML;
            one = one.replaceAll("\n","");
            one = one.replaceAll(" ","");
            werb[one] = two;
        });
        window.localStorage.setItem('werb', JSON.stringify(werb));
        let local = JSON.parse(window.localStorage.getItem('werb'));
    }
 }
 if(web.includes("lingos.pl/students/learning")){
    let local = JSON.parse(window.localStorage.getItem('werb'));
    let werb = document.querySelector('h3.mb-3.h3').innerHTML;
    werb = werb.replaceAll("\n","");
    werb = werb.replaceAll(" ","");
    if(local[werb]!= undefined){
        document.querySelector('input#answer.form-control').value = local[werb];
        document.querySelector("button[type=submit]").click();
    }
    else{
        window.location.replace("https://lingos.pl/students/group");
    }
 }
