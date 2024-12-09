
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <title>Document</title>
</head>
<body>
    <div class="container my-4">
        <h1>Tutti gli utenti</h1>
        <table class="table table-striped">
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Cognome</th>
                <th>Città</th>
                <th></th>
            </tr>
            <?php
                foreach($users as $user){?>
                    <tr>
                        <td><?=$user['id']?></td>
                        <td><?=$user['name']?></td>
                        <td><?=$user['surname']?></td>
                        <td><?=$user['city']?></td>
                        <td>
                            <a class="btn btn-warning" href="updateUser/<?=$user['id']?>"><i class="bi bi-pencil"></i></a>
                            <a class="btn btn-danger" href="deleteUser/<?=$user['id']?>"><i class="bi bi-trash"></i></a>
                            <a class="btn btn-success" href="userDetail/<?=$user['id']?>">Vedi Dettaglio</a>
                        </td>
                    </tr>
            <?php }
            ?>
        </table>
        <div class="text-center mt-5">
            <a class="btn btn-primary btn-lg" href="createUser">Crea un nuovo utente</a>

        </div>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>
