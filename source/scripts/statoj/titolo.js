titolstato = {
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
        
        UI_ILO.KreiBildo( { titolo: "titolo",
                            src:    "assets/titolo.png",
                            x: ( titolstato.agordoj.largxo / 2 ) - ( 383 / 2 ), 
                            y: 25, 
                            largxo: 336, alto: 158,
                            plenLargxo: 336, plenAlto: 158 } );
        
        
        UI_ILO.KreiTeksto( { titolo: "versio", vortoj: "v1.0", koloro: "#000000", font: "bold 16px Courier", x: 450, y: 175 } );
                            
        var teksto = "by Rachel!";
        UI_ILO.KreiTeksto( { titolo: "de", vortoj: teksto,
                             koloro: "#000000", font: "bold 16px Courier",
                             x: ( titolstato.agordoj.largxo / 2 ) - ( teksto.length * 9 ) / 2,
                             y: 350 } );
                             
        UI_ILO.KreiButono( { titolo: "luduButono", vortoj: "Play!",
                             koloro: "#704200", font: "bold 30px Courier",
                             src: "assets/butono.png",
                             x: 100, y: 225,
                             tekstX: 20, tekstY: 45,
                             largxo: 125, alto: 75,
                             plenLargxo: 125, plenAlto: 75,
                             Klaki: function() {
                                 cxefo.SxangxiStato( "ludStato" );
                                 } } );
                             
        UI_ILO.KreiButono( { titolo: "helpuButono", vortoj: "Help",
                             koloro: "#704200", font: "bold 30px Courier",
                             src: "assets/butono.png",
                             x: 400, y: 225,
                             tekstX: 20, tekstY: 45,
                             largxo: 125, alto: 75,
                             plenLargxo: 125, plenAlto: 75,
                             Klaki: function() {
                                 cxefo.SxangxiStato( "helpStato" );
                                 } } );
        
        SONO_ILO.LudiMuzikon( "menuoMuziko" );
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
