ludostato = {
    kanvaso: null,
    agordoj: {},
    poentoj: 0,
    fino: false,
    nivelo: 1,
    niveloMaks: 6,
    
    Komenco: function( kanvaso, agordoj ) {
        ludostato.kanvaso = kanvaso;
        ludostato.fino = false;
        ludostato.agordoj = agordoj;
        ludostato.poentoj = 0;
        
        UI_ILO.KreiBildo( { titolo: "fono",
                            src:    "assets/ludo_fono.png",
                            x: 0, y: 0, 
                            largxo: 640, alto: 360,
                            plenLargxo: 640, plenAlto: 360 } );
              
        UI_ILO.KreiTeksto( { titolo: "poento", vortoj: "Points: 0",
                             koloro: "#000000", font: "bold 16px Courier",
                             x: 10, y: 15 } );
              
        UI_ILO.KreiTeksto( { titolo: "nivelo", vortoj: "Level 1",
                             koloro: "#000000", font: "bold 16px Courier",
                             x: 200, y: 15 } );
        
        LUDANTO_ILO.Komenco();
        
        SONO_ILO.LudiMuzikon( "ludoMuziko" );
    },
    
    Fino: function() {
    },
    
    AldoniPoentojn: function( poentoj ) {
        ludostato.poentoj += poentoj;
        UI_ILO.GxisdatigiTeksto( "poento", "Points: " + ludostato.poentoj );
    },
    
    AldoniNivelon: function() {
        ludostato.nivelo += 1;
        UI_ILO.GxisdatigiTeksto( "nivelo", "Level " + ludostato.nivelo );
        LUDANTO_ILO.KomencoNivelo( ludostato.nivelo );
    },
    
    Gxisdatigi: function() {
        LUDANTO_ILO.Gxisdatigi();
    },
    
    Desegni: function() {
        UI_ILO.Desegni( ludostato.kanvaso );            
        LUDANTO_ILO.Desegni( ludostato.kanvaso );
    },
    
    Klaki: function( ev ) {
    },
    
    KlavoPremi: function( ev ) {
        LUDANTO_ILO.SxaltiKlavon( ev );
        
        if ( ev.keyCode == 27 ) {
            // reveni
            SONO_ILO.LudiSonon( "butono" );
            cxefo.SxangxiStato( "titolStato" );
        }
        if ( ev.keyCode == 187 ) { 
            // debug
            ludostato.AldoniNivelon();
        }
    },
    
    KlavoMalteni: function( ev ) {
        LUDANTO_ILO.MalsxaltiKlavon( ev );
    },
};
