<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <title>Document</title>
</head>
<body>
    <div class="container py-5">
        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Esercizio 1</h3>
                <p class="card-text">
                    <?php
                     $giorno = date('N');
                     // var_dump($giorno);
                     $day = "";
                     switch($giorno) {
                         case 1:
                             $giorno='Lunedì';
                             break;
                         case 2:
                             $giorno='Martedì';
                             break;
                         case 3:
                             $giorno='Mercoledì';
                             break;
                         case 4:
                             $giorno='Giovedì';
                             break;
                         case 5:
                             $giorno='Venerdì';
                             break;
                         case 6:
                             $giorno='Sabato';
                             break;
                         case 7:
                             $giorno='Domenica';
                             break;
                         default:
                         break;
                     }
                 
                     $mese = date('m');
                     // var_dump($giorno);
                     switch($mese) {
                         case 1:
                             $mese='Gennaio';
                             break;
                         case 2:
                             $mese='Febbraio';
                             break;
                         case 3:
                             $mese='Marzo';
                             break;
                         case 4:
                             $mese='Aprile';
                             break;
                         case 5:
                             $mese='Maggio';
                             break;
                         case 6:
                             $mese='Giugno';
                             break;
                         case 7:
                             $mese='Luglio';
                             break;
                         case 8:
                             $mese='Agosto';
                             break;
                         case 9:
                             $mese='Settembre';
                             break;
                         case 10:
                             $mese='Ottobre';
                             break;
                         case 11:
                             $mese='Novembre';
                             break;
                         case 12:
                             $mese='Dicembre';
                             break;
                         default:
                         break;
                     }
                        $data =(date("d"));
                        $year = (date("Y"));
                        echo "Oggi è $giorno, $data $mese $year";
                    ?>
                </p>
            </div>
        </div>

        <div class="card my-3">
            <div class="card-body">
                <h3 class="card-title">Esercizio 2</h5>
                     <?php 
                        $pokemon = [
                            'fuoco' => ['Flareon', 'Cyndaquil', 'Quilava', 'Typhlosion', 'Slugma', 'Magcargo', 'Houndour', 'Houndoom', 'Torchic', 'Combusken'],
                            'acqua' => ['Squirtle', 'Wartortle', 'Blastoise', 'Psyduck', 'Golduck', 'Vaporeon', 'Totodile', 'Croconaw', 'Feraligatr', 'Mudkip'],
                            'terra' => ['Sandshrew', 'Sandslash', 'Diglett', 'Dugtrio', 'Onix', 'Cubone', 'Marowak', 'Rhyhorn', 'Rhydon', 'Geodude']
                        ];

                        echo '<div style="margin-bottom: 20px;">';
                        foreach ($pokemon as $key => $value) {
                            echo '<div>';
                            echo '<h5>' . ucfirst($key) . '</h5>';
                            foreach ($value as $valore) {
                                echo '<p>' . $valore . '</p>';
                            }
                            echo '</div>';
                        }
                        echo '</div>';
                     ?>
            </div>
        </div>

        <div class="card">
            <div class="card-body">
                <h3 class="card-title">Esercizio 3</h3>
                <p class="card-text">
                    <?php
                        $regioni = [
                            'kanto' => [
                                'fuoco' => ['Charmander', 'Charmeleon', 'Vulpix', 'Growlithe'],
                                'acqua' => ['Squirtle', 'Wartortle', 'Psyduck', 'Poliwag'],
                                'terra' => ['Sandshrew', 'Sandslash', 'Diglett', 'Geodude']
                            ],
                            'sinnoh' => [
                                'fuoco' => ['Chimchar', 'Monferno', 'Ponyta'],
                                'acqua' => ['Piplup', 'Prinplup', 'Buizel', 'Floatzel'],
                                'terra' => ['Turtwig', 'Grotle', 'Hippopotas']
                            ],
                            'alola' => [
                                'fuoco' => ['Litten', 'Torracat', 'Growlithe', 'Salandit'],
                                'acqua' => ['Popplio', 'Brionne', 'Wishiwashi', 'Mareanie'],
                                'terra' => ['Rowlet', 'Dartrix', 'Diglett', 'Sandshrew']
                            ]
                        ];
        
                        foreach ($regioni as $regione => $value) {
                            echo '<h5>' . ucfirst($regione) . '</h5>';
                            echo '<span>';
                            foreach ($value as $tipo => $value2) {
                                echo '<b>' . ucfirst($tipo) . '</b>';
                                echo '<p>';
                                foreach ($value2 as $pokemon) {
                                    echo  $pokemon . " " ;
                                }
                                echo '</p>';
                            }
                            echo '</span>';
                        }
                    ?>
            </div>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <?php
                // ESERCIZIO 3

                


            ?>
        </div>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>

</body>
</html>