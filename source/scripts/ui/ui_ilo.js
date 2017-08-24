UI_ILO = {
    bildoj: [],
    butonoj: [],
    tekstoj: [],
    
    VakigiUI: function() {
        while ( UI_ILO.bildoj.length > 0 ) { UI_ILO.bildoj.pop(); }
        while ( UI_ILO.butonoj.length > 0 ) { UI_ILO.butonoj.pop(); }
        while ( UI_ILO.tekstoj.length > 0 ) { UI_ILO.tekstoj.pop(); }
    },
    
	KreiBildo: function( agordoj ) {
        var bildo = {};
        bildo.titolo = agordoj.titolo;
        bildo.image = new Image();
        bildo.image.src = agordoj.src;
        bildo.x = agordoj.x;
        bildo.y = agordoj.y;
        bildo.largxo = agordoj.largxo;
        bildo.alto = agordoj.alto;
        bildo.plenLargxo = agordoj.plenLargxo;
        bildo.plenAlto = agordoj.plenAlto;
        
        UI_ILO.bildoj.push( bildo );
	},

	KreiButono: function( agordoj ) {
        var butono = {};
        butono.titolo = agordoj.titolo;
        butono.image = new Image();
        butono.image.src = agordoj.src;
        butono.x = agordoj.x;
        butono.y = agordoj.y;
        butono.largxo = agordoj.largxo;
        butono.alto = agordoj.alto;
        butono.plenLargxo = agordoj.plenLargxo;
        butono.plenAlto = agordoj.plenAlto;
        butono.vortoj = agordoj.vortoj;
        butono.font = agordoj.font;
        butono.koloro = agordoj.koloro;
        butono.tekstX = agordoj.x + agordoj.tekstX;
        butono.tekstY = agordoj.y + agordoj.tekstY;
        butono.Klaki = agordoj.Klaki; // funkcio
        
        UI_ILO.butonoj.push( butono );
    },
    
    KreiTeksto: function( agordoj ) {
        var teksto = {};
        teksto.titolo = agordoj.titolo;
        teksto.vortoj = agordoj.vortoj;
        teksto.x = agordoj.x;
        teksto.y = agordoj.y;
        teksto.font = agordoj.font;
        teksto.koloro = agordoj.koloro;
        
        UI_ILO.tekstoj.push( teksto );
    },
    
    GxisdatigiTeksto: function( titolo, teksto ) {
        for ( var i = 0; i < UI_ILO.tekstoj.length; i++ ) {
            if ( UI_ILO.tekstoj[i].titolo == titolo ) {
                UI_ILO.tekstoj[i].vortoj = teksto;
            }
        }
    },
    
    Klaki: function( ev ) {        
        var musoX = ev.clientX - $( "canvas" ).position().left;
        var musoY = ev.clientY - $( "canvas" ).position().top;
        
        for ( var i = 0; i < UI_ILO.butonoj.length; i++ ) {
            if ( musoX > UI_ILO.butonoj[i].x &&
                 musoX < UI_ILO.butonoj[i].x + UI_ILO.butonoj[i].largxo &&
                 musoY > UI_ILO.butonoj[i].y &&
                 musoY < UI_ILO.butonoj[i].y + UI_ILO.butonoj[i].alto ) {
                 
                 SONO_ILO.LudiSonon( "butono" );
                 UI_ILO.butonoj[i].Klaki();
             }
        }
    },
    
    Desegni: function( kanvaso ) {
        for ( var i = 0; i < UI_ILO.bildoj.length; i++ ) {
            kanvaso.drawImage( 
                UI_ILO.bildoj[i].image,
                0, 0, UI_ILO.bildoj[i].largxo, UI_ILO.bildoj[i].alto,
                UI_ILO.bildoj[i].x, UI_ILO.bildoj[i].y,
                UI_ILO.bildoj[i].plenLargxo, UI_ILO.bildoj[i].plenAlto );
        }
        
        for ( var i = 0; i < UI_ILO.tekstoj.length; i++ ) {
            kanvaso.fillStyle = UI_ILO.tekstoj[i].koloro;
            kanvaso.font = UI_ILO.tekstoj[i].font;
            kanvaso.fillText(
                UI_ILO.tekstoj[i].vortoj,
                UI_ILO.tekstoj[i].x, UI_ILO.tekstoj[i].y );
        }
        
        for ( var i = 0; i < UI_ILO.butonoj.length; i++ ) {
            kanvaso.drawImage( 
                UI_ILO.butonoj[i].image,
                0, 0, UI_ILO.butonoj[i].largxo, UI_ILO.butonoj[i].alto,
                UI_ILO.butonoj[i].x, UI_ILO.butonoj[i].y,
                UI_ILO.butonoj[i].plenLargxo, UI_ILO.butonoj[i].plenAlto );           
            
            kanvaso.fillStyle = UI_ILO.butonoj[i].koloro;
            kanvaso.font = UI_ILO.butonoj[i].font;
            kanvaso.fillText(
                UI_ILO.butonoj[i].vortoj,
                UI_ILO.butonoj[i].tekstX, UI_ILO.butonoj[i].tekstY );
        }
    },
};
