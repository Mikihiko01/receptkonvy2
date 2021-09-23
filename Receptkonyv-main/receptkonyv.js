

$(function () {

    $.ajax(
        {
            url: "etelek.json",
            success: function (result) {
                console.log(result);
                receptek = result.receptkonyv;
                console.log("ajax hivásban");
                console.log(receptek);
                megjelenit();
               // $("#bal").click(balraleptet);
               // $("#jobb").click(jobbraleptet);

            }
        }

    );
    //console.log("kivül"+receptek);
    //$("article").append(receptek[0].nev);

    

});
$(function () {

    $.ajax(
        {
            url: "etelek.json",
            success: function (result) {
                console.log(result);
                receptek = result.receptkonyv;
                console.log("ajax hivásban");
                console.log(receptek);
                megjelenit();
               // $("#bal").click(balraleptet);
               // $("#jobb").click(jobbraleptet);

            }
        }

    );
    //console.log("kivül"+receptek);
    //$("article").append(receptek[0].nev);

    
    function megjelenit() {
        let txt;
        /*adatok megjelenitése a táblázatban*/
        $("article").append("<table>");
        $("section").append("<ul>");
        $("section div ul").append("<li>");
        txt = "<tr id='fejléc'><th>Név</th><th>Elkészitési idő</th><th>Kép</th><th>Leirás</th><th>Hozzávalok</th></tr>";
        
        receptek.forEach((value,index) => {
            txt += "<tr id='" + index + "'>";
            console.log(value);
    
            for (var item in value) {
                txt += "<td>" + value[item] + "</td>";
            }
            txt += "</tr>";
        });
    
        
       /* for (let i = 0; i < receptek.length; i++) {
            txt += "<tr id='" + i + "'>";*/
    
            // $("article").append("<table><tr><th>Név</th><th>Elkészitési idő</th><th>kép</th><th>leirás</th></tr></table>");
           /* for (let item in receptek[i]) {
                txt += "<td>" + receptek[i][item] + "</td>";
            }
            txt += "</tr>";
    
            // $("article table").append("<tr><td>"+receptek[i].nev+"</td><td>"+receptek[i].elkIdo+"</td><td>"+receptek[i].kep+"</td><td>"+receptek[i].leiras+"</td></tr>");
        }*/
    
    
        $("article table").append(txt);
        $("article table tr").hover(hatter);
        $("tr").on("click", etelkivalaszt);
    
        //$("article").append(receptek[0][nev]);
    }
    
    function hatter() {
        console.log($(this).attr("id"));
        $(this).toggleClass("hatterszin");
    
    
    }
    function etelkivalaszt() {
        if ($(this).attr("id") !== "fejléc") {
            sorID = Number($(this).attr("id"));
            console.log(receptek[sorID].kep);
            $("#kep img").attr("src", receptek[sorID].kep);
            $("#kep img").attr("alt", receptek[sorID].nev);
    
        }
    
    
    }
    
    function balraleptet() {
    
        lepteoIndex--;
        if (lepteoIndex < 0) {
            lepteoIndex = receptek.length - 1;
        }
        megjelinit(lepteoIndex);
        console.log(lepteoIndex);
    }
    
    function jobbraleptet() {
        lepteoIndex++;
        if (lepteoIndex > receptek.length - 1) {
            lepteoIndex = 0;
        }
        megjelinit(lepteoIndex);
    }

});

let receptek = [];
let hozzavalok = [];



