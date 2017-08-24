SONO_ILO = {
    sonoj: {},
    nunKanto: null,
    
    Komenco: function() {
        SONO_ILO.sonoj.bati = new Audio( "assets/hit.wav" );
        SONO_ILO.sonoj.bati.volume = 0.5;
        SONO_ILO.sonoj.bati.estasMuziko = false;
        
        SONO_ILO.sonoj.magiko = new Audio( "assets/magic.wav" );
        SONO_ILO.sonoj.magiko.volume = 0.5;
        SONO_ILO.sonoj.magiko.estasMuziko = false;
        
        SONO_ILO.sonoj.kroko = new Audio( "assets/kroko.wav" );
        SONO_ILO.sonoj.kroko.volume = 0.5;
        SONO_ILO.sonoj.kroko.estasMuziko = false;
        
        SONO_ILO.sonoj.butono = new Audio( "assets/bfxr_button.wav" );
        SONO_ILO.sonoj.butono.volume = 0.5;
        SONO_ILO.sonoj.butono.estasMuziko = false;
        
        SONO_ILO.sonoj.batiBarilon = new Audio( "assets/batiBariloj.wav" );
        SONO_ILO.sonoj.batiBarilon.volume = 0.5;
        SONO_ILO.sonoj.batiBarilon.estasMuziko = false;
        
        SONO_ILO.sonoj.batiLudanton = new Audio( "assets/batiLudanto.wav" );
        SONO_ILO.sonoj.batiLudanton.volume = 0.5;
        SONO_ILO.sonoj.batiLudanton.estasMuziko = false;
        
        SONO_ILO.sonoj.batiKrokodilon = new Audio( "assets/batiKrokodilon.wav" );
        SONO_ILO.sonoj.batiKrokodilon.volume = 0.5;
        SONO_ILO.sonoj.batiKrokodilon.estasMuziko = false;
        
        SONO_ILO.sonoj.ludoMuziko = new Audio( "assets/Balloon Game.mp3" );
        SONO_ILO.sonoj.ludoMuziko.volume = 0.5;
        SONO_ILO.sonoj.ludoMuziko.loop = true;
        SONO_ILO.sonoj.ludoMuziko.estasMuziko = true;
        
        SONO_ILO.sonoj.menuoMuziko = new Audio( "assets/Teddy Bear Waltz.mp3" );
        SONO_ILO.sonoj.menuoMuziko.volume = 0.5;
        SONO_ILO.sonoj.menuoMuziko.loop = true;
        SONO_ILO.sonoj.menuoMuziko.estasMuziko = true;
    },
    
    LudiSonon: function( titolo ) {
        if ( SONO_ILO.sonoj[ titolo ] != null ) {
            if ( SONO_ILO.sonoj[ titolo ].estasMuziko == false ) {
                SONO_ILO.sonoj[ titolo ].play();
            }
        }
    },
    
    LudiMuzikon: function( titolo ) {
        if ( SONO_ILO.sonoj[ titolo ] != null ) {
            if ( SONO_ILO.sonoj[ titolo ].estasMuziko
                 && SONO_ILO.nunKanto != titolo ) {
                SONO_ILO.nunKanto = titolo;
                SONO_ILO.HaltuMuzikon();
                SONO_ILO.sonoj[ titolo ].play();
            }
        }
    },
    
    HaltuMuzikon: function() {
        for ( var i in SONO_ILO.sonoj ) {
            // Stop it if this is an Audio item
            if ( SONO_ILO.sonoj[ i ].estasMuziko ) {
                SONO_ILO.sonoj[ i ].pause();
                SONO_ILO.nunKanto = null;
            }
        }
    }
};
