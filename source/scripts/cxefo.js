cxefo = {
    kanvaso: null,
    agordoj: { bildrapido: 60 },
    bildoj: {},
    statoj: {},
    nunStato: null,
    
    Komenco: function() {
        cxefo.agordoj.largxo    = $( "canvas" ).width();
        cxefo.agordoj.alto      = $( "canvas" ).height();        
        cxefo.kanvaso = $( "canvas" )[0].getContext( "2d" );
        
        SONO_ILO.Komenco();
        
        cxefo.statoj.titolStato = titolstato;
        cxefo.statoj.ludStato = ludostato;
        cxefo.statoj.helpStato = helpstato;
        cxefo.statoj.venkStato = venkstato;
        
        cxefo.SxangxiStato( "titolStato" );
        
        window.addEventListener( "mousedown",   cxefo.Klaki, false );
        window.addEventListener( "keydown",     cxefo.KlavoPremi, false );
        window.addEventListener( "keyup",       cxefo.KlavoMalteni, false );
        
        setInterval( function() {
            cxefo.Gxisdatigi();
            cxefo.Desegni();
        }, 1000 / cxefo.agordoj.bildrapido );
    },
    
    Klaki: function( ev ) {
        cxefo.nunStato.Klaki( ev );
    },
    
    KlavoPremi: function( ev ) {
        cxefo.nunStato.KlavoPremi( ev );
    },
    
    KlavoMalteni: function( ev ) {
        cxefo.nunStato.KlavoMalteni( ev );
    },
    
    Gxisdatigi: function() {
        cxefo.nunStato.Gxisdatigi();
    },
    
    Desegni: function() {
        cxefo.nunStato.Desegni();
    },
    
    SxangxiStato: function( titolo ) {        
        if ( cxefo.nunStato != null ) {
            cxefo.nunStato.Fino();
        }
        
        UI_ILO.VakigiUI();
        cxefo.nunStato = cxefo.statoj[ titolo ];
        cxefo.nunStato.Komenco( cxefo.kanvaso, cxefo.agordoj );
    },
};

$( document ).ready( function() {
    cxefo.Komenco();
} );
