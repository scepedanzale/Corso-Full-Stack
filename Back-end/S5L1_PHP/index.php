<?php include_once 'header.php' ?>
<?php include_once 'functions.php' ?>


    <div class="container my-3">
        <h1>Inserisci un utente</h1>
        <form action="controller.php?action=addUser" method="post">
            <div class="input-group mb-3">
                <input type="text" class="form-control" name="nome" placeholder="nome..." aria-label="Username" aria-describedby="basic-addon1" required>
            </div>
            <div class="input-group mb-3">
                <input type="text" class="form-control" name="cognome" placeholder="cognome..." aria-label="Username" aria-describedby="basic-addon1" required>
            </div>
            <div class="input-group mb-3">
                <input type="email" class="form-control" name="email" placeholder="email..." aria-label="Username" aria-describedby="basic-addon1" required>
            </div>
            <button type="submit" class="btn btn-dark">Invia</button>
        </form>
        <div class="row my-4">
            <h2 class="text-secondary">Dati dal Database</h2>
            <table class="table table-striped">
                <tr>
                    <th>Nome</th>
                    <th>Cognome</th>
                    <th>Email</th>
                </tr>
                <?php
                    $utenti = getAllUsers($mysqli);
                    if($utenti){
                        foreach($utenti as $utente){?>
                            <tr>
                                <td><?=$utente['nome']?></td>
                                <td><?=$utente['cognome']?></td>
                                <td><?=$utente['email']?></td>
                            </tr>
                    <?php }
                    }
                ?>
            </table>
        </div>
        <div class="row">
            <h2 class="text-secondary">Dati dal CSV</h2>
            <table class="table table-striped">
                <tr>
                    <th>Nome</th>
                    <th>Cognome</th>
                    <th>Email</th>
                </tr>
            <?php
                $usersCsv = createCsv($mysqli, $utenti);
                if($usersCsv){
                    foreach($usersCsv as $utente){?>
                        <tr>
                            <td><?=$utente['nome']?></td>
                            <td><?=$utente['cognome']?></td>
                            <td><?=$utente['email']?></td>
                        </tr>
                <?php }
                }
            ?>
        </table>
        </div>
    </div>

<?php include_once 'footer.php' ?>