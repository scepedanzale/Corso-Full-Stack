<?php

include_once 'header.php';
include_once 'navbar.php';

session_start();

if($_SESSION['userLogged']){
    header('Location: index.php');
}

?>


<div class="container-fluid p-5">
    <h1>Login</h1>

    <form action="controller.php?action=login" method="POST">
        <div class="mb-3">
            <input type="email" class="form-control" name="email" placeholder="email..." required>
        </div>
        <div class="mb-3">
            <input type="password" class="form-control" name="password" placeholder="password..." required>
        </div>
        <button type="submit" class="btn btn-secondary">Accedi</button>
    </form>
</div>

<?php  include_once 'footer.php'; ?>