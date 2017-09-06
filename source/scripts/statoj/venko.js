venkstato = {
    kanvaso: null,
    agordoj: {},
    bildoj: {},
    fino: false,
    venkisto: "",
    
    Komenco: function( kanvaso, agordoj ) {
        titolstato.kanvaso = kanvaso;
        titolstato.agordoj = agordoj;
        titolstato.fino = false;
        
        UI_ILO.KreiBildo( { titolo: "fono",
                            src:    "assets/gradient_fono.png",
                            x: 0, y: 0, 
                            largxo: 160, alto: 90,
                            plenLargxo: 640, plenAlto: 360 } );
        
        var teksto = "VI VENKAS!!";
        if ( venkstato.venkisto == "Ludanto" ) {
            teksto = "YOU DID ALL YOUR HOMEWORK!!";
        }
        else {
            teksto = "YOU DROWNED IN HOMEWORK!!";
        }
        
        UI_ILO.KreiTeksto( { titolo: "venkanto", vortoj: teksto,
                             koloro: "#000000", font: "bold 38px Courier",
                             x: ( titolstato.agordoj.largxo / 2 ) - ( teksto.length * 22 ) / 2,
                             y: 200 } );
                             
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
