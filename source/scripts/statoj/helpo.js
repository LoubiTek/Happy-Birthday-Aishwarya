helpstato = {
    kanvaso: null,
    agordoj: {},
    bildoj: {},
    fino: false,

    Komenco: function( kanvaso, agordoj ) {
        titolstato.kanvaso = kanvaso;
        titolstato.agordoj = agordoj;
        titolstato.fino = false;

        UI_ILO.KreiBildo( { titolo: "fono",
                            src:    "assets/gradient_fono.png",
                            x: 0, y: 0,
                            largxo: 160, alto: 90,
                            plenLargxo: 640, plenAlto: 360 } );

        var teksto = "How to play...";
        UI_ILO.KreiTeksto( { titolo: "kiel", vortoj: teksto,
                             koloro: "#000000", font: "bold 40px Courier",
                             x: ( titolstato.agordoj.largxo / 2 ) - ( teksto.length * 25 ) / 2,
                             y: 50 } );

        var ty = 100;
        var inc = 20;
        UI_ILO.KreiTeksto( { titolo: "1", vortoj: "1. Shoot stars at the Jayhawks!", koloro: "#000000", font: "bold 16px Courier", x: 50, y: ty } );
        ty += inc;
        UI_ILO.KreiTeksto( { titolo: "2", vortoj: "2. Don't let them overload you with homework!", koloro: "#000000", font: "bold 16px Courier", x: 50, y: ty } );
        ty += inc;
        UI_ILO.KreiTeksto( { titolo: "4", vortoj: "3. [▲] & [▼] keys to move up and down", koloro: "#000000", font: "bold 16px Courier", x: 50, y: ty } );
        ty += inc;
        UI_ILO.KreiTeksto( { titolo: "4", vortoj: "4. [SAPCEBAR] to shoot stars", koloro: "#000000", font: "bold 16px Courier", x: 50, y: ty } );

        ty += (inc * 2);
        UI_ILO.KreiTeksto( { titolo: "6", vortoj: "Programming & Art: Rachel J. Morris (MOOSADER.COM)", koloro: "#000000", font: "bold 16px Courier", x: 50, y: ty } );
        ty += inc;
        UI_ILO.KreiTeksto( { titolo: "7", vortoj: "Sound effects: BFXR.NET", koloro: "#000000", font: "bold 16px Courier", x: 50, y: ty } );
        ty += inc;
        UI_ILO.KreiTeksto( { titolo: "8", vortoj: "Music: Kevin MacLeod, Incompetech.com", koloro: "#000000", font: "bold 16px Courier", x: 50, y: ty } );
        ty += inc;
        UI_ILO.KreiTeksto( { titolo: "8", vortoj: "Balloon Game, Teddy Bear Waltz", koloro: "#000000", font: "bold 16px Courier", x: 50, y: ty } );
        ty += inc;
        UI_ILO.KreiTeksto( { titolo: "8", vortoj: "Licensed under Creative Commons: By Attribution 3.0 License", koloro: "#000000", font: "bold 12px Courier", x: 50, y: ty } );
        ty += inc;


        UI_ILO.KreiButono( { titolo: "reveniButono", vortoj: "< Back",
                             koloro: "#704200", font: "bold 30px Courier",
                             src: "assets/butono.png",
                             x: 500, y: 275,
                             tekstX: 10, tekstY: 45,
                             largxo: 125, alto: 75,
                             plenLargxo: 125, plenAlto: 75,
                             Klaki: function() {
                                 cxefo.SxangxiStato( "titolStato" );
                                 } } );
    },

    Fino: function() {
        UI_ILO.VakigiUI();
    },

    Klaki: function( ev ) {
        UI_ILO.Klaki( ev );
    },

    KlavoPremi: function( ev ) {
    },

    KlavoMalteni: function( ev ) {
    },

    Gxisdatigi: function() {
    },

    Desegni: function() {
        UI_ILO.Desegni( titolstato.kanvaso );
    },
};
