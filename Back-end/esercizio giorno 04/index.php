<?php
/*
    Implementare le seguenti funzionalità all’esercizio di ieri:

    4 pagine:
    Index.php in cui vedere tutti gli account registrati (menu con navbar login/registrazione)
    register.php in cui mettere il form di registrazione, che invia i dati alla pagina gestione.php
    aprire una sessione in Gestione.php in cui validare i campi del form, redirect alla pagina login.php
    Login.php verifica se l’utente è presente nella sessione, se è presente, redirect alla pagina index, altrimenti redirect a login
*/

?>
<?php

session_start();

if(!$_SESSION['logged']){
    header('Location: login.php');
}

?>

<?php include_once 'header.php';?>

    <div class="container-fluid my-5">
        <table class="w-100 table table-striped table-dark table-hover">
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Cognome</th>
                <th>Telefono</th>
                <th>Città</th>
                <th>Email</th>
                <th>Password</th>
            </tr>

            <?php
                session_start();

                if(isset($_SESSION['utenti'])) {
                    foreach ($_SESSION['utenti'] as $key => $value) {
                        ?>
                        <tr>
                          <td><?=$key+1?></td>
                          <td><?=$value['firstname']?></td>
                          <td><?=$value['lastname']?></td>
                          <td><?=$value['telefono']?></td>
                          <td><?=$value['citta']?></td>
                          <td><?=$value['email']?></td>
                          <td><?=$value['password']?></td>
                        </tr>
                        <?php
                    }
                }
            ?>

        </table>
    </div>
    
<?php include_once 'footer.php';?>