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
    <div class="container pt-5">

        <form method="POST" action="gestione.php">
          <div class="mb-3">
            <input type="firstname" class="form-control" name="firstname" placeholder="firstname...">
          </div>
          <div class="mb-3">
            <input type="lastname" class="form-control" name="lastname" placeholder="lastname...">
          </div>
          <div class="mb-3">
            <input type="email" class="form-control" name="email" placeholder="email...">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" name="telefono" placeholder="telefono...">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" name="citta" placeholder="città...">
          </div>
          
          <button type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>

    <div class="container-fluid my-5">
        <table class="w-100 table table-striped table-dark table-hover">
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Cognome</th>
                <th>Email</th>
                <th>Telefono</th>
                <th>Città</th>
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
                          <td><?=$value['email']?></td>
                          <td><?=$value['telefono']?></td>
                          <td><?=$value['citta']?></td>
                        </tr>
                        <?php
                    }
                }
            ?>

        </table>
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
</body>
</html>