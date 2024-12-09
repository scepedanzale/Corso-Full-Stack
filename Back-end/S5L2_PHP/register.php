<?php include_once 'header.php'; ?>
<?php include_once 'navbar.php'; ?>

<?php

session_start();

if($_SESSION['logged']){
    header('Location: index.php');
}

?>

    <div class="container my-3">
        <h1>Registrazione</h1>
        <form action="controller.php?action=addUser" method="POST">
            <div class="mb-3">
                <input type="text" class="form-control" name="nome" placeholder="nome..." required>
            </div>
            <div class="mb-3">
                <input type="text" class="form-control" name="cognome" placeholder="cognome..." required>
            </div>
            <div class="mb-3">
                <input type="email" class="form-control" name="email" placeholder="email..." required>
            </div>
            <div class="mb-3">
                <input type="password" class="form-control" name="password" placeholder="password..." required>
            </div>
            <button type="submit" class="btn btn-primary">Registrati</button>
        </form>
    </div>

<?php include_once 'footer.php'; ?>