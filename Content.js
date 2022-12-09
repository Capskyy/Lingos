 let web = window.location.href;
 if(web.includes("lingos.pl/students/checkAnswer")){
    document.querySelector("a#next").click();
 }
 if(web.includes("lingos.pl/students/learning")){
    switch(document.querySelector('h3.mb-3.h3').innerHTML){
        case '\n                    składać się z\n                ':
          document.querySelector('input#answer.form-control').value = 'bestehen aus'
          break;
        case '\n                    pomagać\n                ':
          document.querySelector('input#answer.form-control').value = 'helfen'
          break;
        case '\n                    prosić o\n                ':
          document.querySelector('input#answer.form-control').value = 'bitten um'
          break;
        case '\n                    skarżyć się\n                ':
          document.querySelector('input#answer.form-control').value = 'sich beschweren'
          break;
        case '\n                    zaczynać\n                ':
          document.querySelector('input#answer.form-control').value = 'beginnen'
          break;
        case '\n                    uważać na\n                ':
          document.querySelector('input#answer.form-control').value = 'achten auf'
          break;
        case '\n                    przeprowadzać się\n                ':
          document.querySelector('input#answer.form-control').value = 'umziehen'
          break;
        case '\n                    pakować\n                ':
          document.querySelector('input#answer.form-control').value = 'einpacken'
          break;
        case '\n                    wnioskować\n                ':
          document.querySelector('input#answer.form-control').value = 'beantragen'
          break;
        case '\n                    rozpakować\n                ':
          document.querySelector('input#answer.form-control').value = 'auspacken'
          break;
        case '\n                    jakość\n                ':
          document.querySelector('input#answer.form-control').value = 'die Qualität'
          break;
        case '\n                    miejsce pracy\n                ':
          document.querySelector('input#answer.form-control').value = 'die Stelle'
          break;
        case '\n                    wniosek\n                ':
          document.querySelector('input#answer.form-control').value = 'der Antrag'
          break;
        case '\n                    blok mieszkalny\n                ':
          document.querySelector('input#answer.form-control').value = 'der Wohnblock'
          break;
        case '\n                    przeprowadzka\n                ':
          document.querySelector('input#answer.form-control').value = 'der Umzug'
          break;
        case '\n                    schody\n                ':
          document.querySelector('input#answer.form-control').value = 'die Treppe'
          break;
        case '\n                    garaż podziemny\n                ':
          document.querySelector('input#answer.form-control').value = 'die Tiefgarage'
          break;
        case '\n                    przedmieścia\n                ':
          document.querySelector('input#answer.form-control').value = 'der Stadtrand'
          break;
        case '\n                    dom szeregowy\n                ':
          document.querySelector('input#answer.form-control').value = 'das Reihenhaus'
          break;
        case '\n                    nowy budynek\n                ':
          document.querySelector('input#answer.form-control').value = 'das Neubau'
          break;
        case '\n                    kamienica czynszowa\n                ':
          document.querySelector('input#answer.form-control').value = 'das Mietshaus'
          break;
        case '\n                    wieżowiec\n                ':
          document.querySelector('input#answer.form-control').value = 'das Hochhaus'
          break;
        case '\n                    garaż\n                ':
          document.querySelector('input#answer.form-control').value = 'die Garage'
          break;
        case '\n                    piętro\n                ':
          document.querySelector('input#answer.form-control').value = 'die Etage'
          break;
        case '\n                    dom jednorodzinny\n                ':
          document.querySelector('input#answer.form-control').value = 'das Einfamilienhaus'
          break;
        case '\n                    mieszkanie\n                ':
          document.querySelector('input#answer.form-control').value = 'die Wohnung'
          break;
        case '\n                    dom na wsi\n                ':
          document.querySelector('input#answer.form-control').value = 'das Bauernhaus'
          break;
        case '\n                    winda\n                ':
          document.querySelector('input#answer.form-control').value = 'der Aufzug'
          break;
        case '\n                    stary budynek\n                ':
          document.querySelector('input#answer.form-control').value = 'der Altbau'
          break;
        default:
            window.location.replace("https://lingos.pl/students/group");
          break;
      
      }
      document.querySelector("button[type=submit]").click();
      
 }
