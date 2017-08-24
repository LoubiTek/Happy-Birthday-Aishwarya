LUDANTO_ILO = {
    ludantoj: [],
    kugloj: [],
    krokodiloj: [],
    bariloj: [],
    koroj: [],
    ciklo: 0,
    krokRapido: 50,
    pafHorlogxo: 0,
    pafHorlogxoMaks: 40,
    pretas: false,
    vivoj: 3,
    
    klavoj: {
        supren:         { kodo: 38, cxuPremita: false }, 
        malsupren:      { kodo: 40, cxuPremita: false },
        dekstren:       { kodo: 39, cxuPremita: false },
        maldekstren:    { kodo: 37, cxuPremita: false },
        pafu:           { kodo: 32, cxuPremita: false },
        },
    
    VakigiLudantoj: function() {
        LUDANTO_ILO.pretas = false;
        while ( LUDANTO_ILO.kugloj.length > 0 ) { LUDANTO_ILO.kugloj.pop(); }
        while ( LUDANTO_ILO.krokodiloj.length > 0 ) { LUDANTO_ILO.krokodiloj.pop(); }
        while ( LUDANTO_ILO.ludantoj.length > 0 ) { LUDANTO_ILO.ludantoj.pop(); }
        while ( LUDANTO_ILO.bariloj.length > 0 ) { LUDANTO_ILO.bariloj.pop(); }
        while ( LUDANTO_ILO.koroj.length > 0 ) { LUDANTO_ILO.koroj.pop(); }
    },

    Komenco: function() {
        LUDANTO_ILO.KomencoNivelo( 1 );
    },
    
    KomencoNivelo: function( nivelo ) {
        LUDANTO_ILO.VakigiLudantoj();
        LUDANTO_ILO.vivoj = 3;
        
        if ( nivelo == 8 ) {
            LUDANTO_ILO.pafHorlogxoMaks = 40;
        }
        else if ( nivelo == 9 ) {
            LUDANTO_ILO.pafHorlogxoMaks = 30;
        }
        else if ( nivelo == 10 ) {
            LUDANTO_ILO.pafHorlogxoMaks = 10;
        }
        
        LUDANTO_ILO.ciklo = 0;
        LUDANTO_ILO.krokRapido = 50;
        
        // Koroj
        for ( var i = 0; i < LUDANTO_ILO.vivoj; i++ ) {
            var koro = { x: 10 + ( i * 40 ), y: 325, largxo: 24, alto: 22, };
            koro.image = new Image();
            koro.image.src = "assets/koro.png";
            LUDANTO_ILO.koroj.push( koro );
        }
        
        // Ludanto
        var ludanto =  { x: 10, y: ( ludostato.agordoj.alto / 2 ) - ( 63 / 2 ),
                         largxo: 30, alto: 63,
                         rapidoH: 3, rapidoV: 3, maksimumrapido: 5, };
        ludanto.image = new Image();
        ludanto.image.src = "assets/ludanto.png";
        LUDANTO_ILO.ludantoj.push( ludanto );
        
        // Krokodiloj
        var sxangi = 13 - nivelo;
        for ( var ay = 0; ay < 8; ay++ ) {
            for ( var ax = 0; ax < nivelo; ax++ ) { 
                var krokodilo = { x: ( ax + sxangi ) * 48, y: ( ay + 2 ) * 32,
                    largxo: 43, alto: 39,
                    rapidoH: 10, rapidoV: 16, maksimumrapido: 5, kolonoj: 0 };
                krokodilo.image = new Image();
                krokodilo.image.src = "assets/krokodilo.png";
                krokodilo.direkto = "up";
                LUDANTO_ILO.krokodiloj.push( krokodilo );
            }
        }
        
        // Bariloj
        var triona = ludostato.agordoj.alto / 3;
        if ( ludostato.nivelo > 1 ) {
            for ( var i = 0; i < 3; i++ ) {
                var barilo = { x: 150, y: triona * i + 30,
                             largxo: 59, alto: 61, sano: 3, };
                barilo.image = new Image();
                barilo.image.src = "assets/barilo3.png";
                LUDANTO_ILO.bariloj.push( barilo );
            }
        }
        LUDANTO_ILO.pretas = true;
    },

    Gxisdatigi: function() {
        if ( LUDANTO_ILO.pretas ) {
            LUDANTO_ILO.ciklo += 1;
            var ludanto = LUDANTO_ILO.ludantoj[0];
            
            var elpreniBariloj = [];
            // Krokodiloj
            if ( parseInt( LUDANTO_ILO.ciklo ) % LUDANTO_ILO.krokRapido == 0 ) {
                $.each( LUDANTO_ILO.krokodiloj, function( i, kroko ) {
                    //SONO_ILO.LudiSonon( "kroko" );
                    if ( kroko.direkto == "up" ) { 
                        kroko.y = kroko.y -= kroko.rapidoV;
                    }
                    else { 
                        kroko.y = kroko.y += kroko.rapidoV;
                    }
                    
                    if ( kroko.y < 0 || kroko.y > ( ludostato.agordoj.alto - kroko.alto ) ) {
                        kroko.rapidoV = -kroko.rapidoV;
                        kroko.x -= 64;
                        if ( kroko.y < 0 ) { kroko.y = 0; }
                        else { kroko.y = ludostato.agordoj.alto - kroko.alto; }
                        kroko.kolonoj += 1;
                        
                        if ( i == 0 && kroko.kolonoj % 2 == 0 ) { 
                            LUDANTO_ILO.krokRapido -= 5;
                            if ( LUDANTO_ILO.krokRapido < 5 ) {
                                LUDANTO_ILO.krokRapido = 5;
                            }
                        }
                    }
                    
                    var rand = Math.floor(Math.random() * 20);
                    if ( rand == 1 ) {
                        LUDANTO_ILO.KreiKuglonDeKrokodilo( kroko );
                    }
                                    
                    $.each( LUDANTO_ILO.bariloj, function( j, barilo ) {
                        if ( kroko.x                < barilo.x + barilo.largxo - 10 &&
                             kroko.x + kroko.largxo > barilo.x &&
                             kroko.y                < barilo.y + barilo.alto &&
                             kroko.y + kroko.alto   > barilo.y + 30 ) {
                            
                            SONO_ILO.LudiSonon( "bati" );
                            elpreniBariloj.push( j );
                        }
                    } );
                    
                    if ( kroko.x                < ludanto.x + ludanto.largxo - 10 &&
                         kroko.x + kroko.largxo > ludanto.x &&
                         kroko.y                < ludanto.y + ludanto.alto &&
                         kroko.y + kroko.alto   > ludanto.y + 30 ) {
                        
                        SONO_ILO.LudiSonon( "bati" );
                        venkstato.venkisto = "Krokodiloj";
                        cxefo.SxangxiStato( "venkStato" );
                    }
                    
                    if ( kroko.x < 0 ) {
                        SONO_ILO.LudiSonon( "bati" );
                        venkstato.venkisto = "Krokodiloj";
                        cxefo.SxangxiStato( "venkStato" );
                    }
                } );
            }
            
            // Kugloj
            var elpreniKrokodilon = [];
            var elpreniKuglon = [];
            $.each( LUDANTO_ILO.kugloj, function( i, kuglo ) {
                kuglo.x += kuglo.rapidoH;
                
                // Cxu kuglo tusxas krokodilon?
                $.each( LUDANTO_ILO.krokodiloj, function( j, krokodilo ) {
                    if ( kuglo.x                < krokodilo.x + krokodilo.largxo &&
                         kuglo.x + kuglo.largxo > krokodilo.x &&
                         kuglo.y                < krokodilo.y + krokodilo.alto &&
                         kuglo.y + kuglo.alto   > krokodilo.y ) {
                        
                        SONO_ILO.LudiSonon( "batiKrokodilon" );
                        elpreniKrokodilon.push( j );
                        elpreniKuglon.push( i );
                        ludostato.AldoniPoentojn( 20 );
                    }
                } );
                
                $.each( LUDANTO_ILO.bariloj, function( j, barilo ) {
                    if ( kuglo.x                < barilo.x + barilo.largxo &&
                         kuglo.x + kuglo.largxo > barilo.x &&
                         kuglo.y                < barilo.y + barilo.alto &&
                         kuglo.y + kuglo.alto   > barilo.y + 30 ) {
                        
                        SONO_ILO.LudiSonon( "batiBarilon" );
                        elpreniKuglon.push( i );
                        barilo.sano = barilo.sano - 1;
                        if ( barilo.sano == 0 ) {
                            elpreniBariloj.push( j );
                        } else {
                            barilo.image.src = "assets/barilo" + barilo.sano + ".png";
                        }
                    }
                } );
                
                if ( kuglo.x                < ludanto.x + ludanto.largxo &&
                     kuglo.x + kuglo.largxo > ludanto.x &&
                     kuglo.y                < ludanto.y + ludanto.alto &&
                     kuglo.y + kuglo.alto   > ludanto.y ) {
                    
                    SONO_ILO.LudiSonon( "batiLudanton" );
                    LUDANTO_ILO.vivoj -= 1;
                    elpreniKuglon.push( i );
                    
                    LUDANTO_ILO.koroj.splice( LUDANTO_ILO.koroj.length-1, 1 );
                    
                    if ( LUDANTO_ILO.vivoj == 0 ) {
                        venkstato.venkisto = "Krokodiloj";
                        cxefo.SxangxiStato( "venkStato" );
                    }
                }
            } );
            
            $.each( elpreniKrokodilon, function( i, kroko ) {
                LUDANTO_ILO.krokodiloj.splice( kroko, 1 );
            } );
            
            $.each( elpreniKuglon, function( i, kuglo ) {
                LUDANTO_ILO.kugloj.splice( kuglo, 1 );
            } );
            
            $.each( elpreniBariloj, function( i, barilo ) {
                LUDANTO_ILO.bariloj.splice( barilo, 1 );
            } );
            
            // Ludanto
            if ( LUDANTO_ILO.klavoj.supren.cxuPremita ) {
                ludanto.y -= ludanto.rapidoV;
            }
            else if ( LUDANTO_ILO.klavoj.malsupren.cxuPremita ) {
                ludanto.y += ludanto.rapidoV;
            }
            
            if ( LUDANTO_ILO.klavoj.dekstren.cxuPremita ) {
                ludanto.x += ludanto.rapidoH;
            }
            else if ( LUDANTO_ILO.klavoj.maldekstren.cxuPremita ) {
                ludanto.x -= ludanto.rapidoH;
            }
            
            if      ( ludanto.x < 0 ) { ludanto.x = 0; }
            else if ( ludanto.x > 100 ) { ludanto.x = 100; }
            if      ( ludanto.y < 0 ) { ludanto.y = 0; }
            else if ( ludanto.y > ( ludostato.agordoj.alto - ludanto.alto ) ) { ludanto.y = ( ludostato.agordoj.alto - ludanto.alto ); }
            
            if ( LUDANTO_ILO.klavoj.pafu.cxuPremita && LUDANTO_ILO.pafHorlogxo == 0 ) {
                LUDANTO_ILO.KreiKuglonDeLudanto();
                LUDANTO_ILO.pafHorlogxo = LUDANTO_ILO.pafHorlogxoMaks;
                SONO_ILO.LudiSonon( "magiko" );
            }
            else if ( LUDANTO_ILO.pafHorlogxo > 0 ) {
                LUDANTO_ILO.pafHorlogxo -= 1;
            }
            
            if ( LUDANTO_ILO.krokodiloj.length == 0 ) { 
                // fino de nivelo
                if ( ludostato.nivelo == ludostato.niveloMaks ) {
                    venkstato.venkisto = "Ludanto";
                    cxefo.SxangxiStato( "venkStato" );
                }
                else {
                    ludostato.AldoniNivelon();
                }
            }
        }
    },
    
    KreiKuglonDeLudanto: function() {
        var ludanto = LUDANTO_ILO.ludantoj[0];
        var kuglo =  { x: ludanto.x + 25, y: ludanto.y + 20,
                         largxo: 16, alto: 16,
                         rapidoH: 5, rapidoV: 0, maksimumrapido: 5, };
        kuglo.image = new Image();
        kuglo.image.src = "assets/kuglo.png";
        LUDANTO_ILO.kugloj.push( kuglo );
    },
    
    
    
    KreiKuglonDeKrokodilo: function( kroko ) {
        var kuglo =  { x: kroko.x - 25, y: kroko.y + 20,
                         largxo: 16, alto: 16,
                         rapidoH: -5, rapidoV: 0, maksimumrapido: 5, };
        kuglo.image = new Image();
        kuglo.image.src = "assets/kuglo2.png";
        LUDANTO_ILO.kugloj.push( kuglo );
    },

    SxaltiKlavon: function( ev ) {
        $.each( LUDANTO_ILO.klavoj, function( i, klavo ) {
            if ( ev.keyCode == klavo.kodo ) {
                klavo.cxuPremita = true;
            }
        } );
    },

    MalsxaltiKlavon: function( ev ) {
        $.each( LUDANTO_ILO.klavoj, function( i, klavo ) {
            if ( ev.keyCode == klavo.kodo ) {
                klavo.cxuPremita = false;
            }
        } );
    },

    SxaltiDirekton: function( i, rapidoH, rapidoV ) {
    },

    Desegni: function( kanvaso ) {
        for ( var i = 0; i < LUDANTO_ILO.ludantoj.length; i++ ) {
            kanvaso.drawImage(
                LUDANTO_ILO.ludantoj[i].image,
                0, 0, LUDANTO_ILO.ludantoj[i].largxo, LUDANTO_ILO.ludantoj[i].alto,
                LUDANTO_ILO.ludantoj[i].x, LUDANTO_ILO.ludantoj[i].y,
                LUDANTO_ILO.ludantoj[i].largxo, LUDANTO_ILO.ludantoj[i].alto );
        }
        for ( var i = 0; i < LUDANTO_ILO.krokodiloj.length; i++ ) {
            kanvaso.drawImage(
                LUDANTO_ILO.krokodiloj[i].image,
                0, 0, LUDANTO_ILO.krokodiloj[i].largxo, LUDANTO_ILO.krokodiloj[i].alto,
                LUDANTO_ILO.krokodiloj[i].x, LUDANTO_ILO.krokodiloj[i].y,
                LUDANTO_ILO.krokodiloj[i].largxo, LUDANTO_ILO.krokodiloj[i].alto );
        }
        for ( var i = 0; i < LUDANTO_ILO.kugloj.length; i++ ) {
            kanvaso.drawImage(
                LUDANTO_ILO.kugloj[i].image,
                0, 0, LUDANTO_ILO.kugloj[i].largxo, LUDANTO_ILO.kugloj[i].alto,
                LUDANTO_ILO.kugloj[i].x, LUDANTO_ILO.kugloj[i].y,
                LUDANTO_ILO.kugloj[i].largxo, LUDANTO_ILO.kugloj[i].alto );
        }
        for ( var i = 0; i < LUDANTO_ILO.bariloj.length; i++ ) {
            kanvaso.drawImage(
                LUDANTO_ILO.bariloj[i].image,
                0, 0, LUDANTO_ILO.bariloj[i].largxo, LUDANTO_ILO.bariloj[i].alto,
                LUDANTO_ILO.bariloj[i].x, LUDANTO_ILO.bariloj[i].y,
                LUDANTO_ILO.bariloj[i].largxo, LUDANTO_ILO.bariloj[i].alto );
        }
        for ( var i = 0; i < LUDANTO_ILO.koroj.length; i++ ) {
            console.log( "L", LUDANTO_ILO.koroj.length, "i", i, LUDANTO_ILO.koroj[i] );
            
            kanvaso.drawImage(
                LUDANTO_ILO.koroj[i].image,
                0, 0, LUDANTO_ILO.koroj[i].largxo, LUDANTO_ILO.koroj[i].alto,
                LUDANTO_ILO.koroj[i].x, LUDANTO_ILO.koroj[i].y,
                LUDANTO_ILO.koroj[i].largxo, LUDANTO_ILO.koroj[i].alto );
        }
    },
};
