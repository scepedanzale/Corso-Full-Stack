<?php include_once 'header.php'; ?>
<?php include_once 'navbar.php'; ?>

<?php

session_start();

if($_SESSION['logged']){
    header('Location: index.php');
}

?>
    <?php if(isset($_SESSION['lang']) && $_SESSION['lang'] === 'it'){?>
        <div class="container my-3">
            <h1>Accedi</h1>
            <form action="controller.php?action=isLogged" method="POST">
                <div class="mb-3">
                    <input type="email" class="form-control" name="email" placeholder="email...">
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control" name="password" placeholder="password...">
                </div>
                <div class="form-check text-start my-3">
                    <input class="form-check-input" type="checkbox" id="flexCheckDefault" name="check"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Ricordami
                    </label>
                </div>
                <button type="submit" class="btn btn-primary">Accedi</button>
            </form>
        </div>
    <?php }else if(isset($_SESSION['lang']) && $_SESSION['lang'] === 'us' || !isset($_SESSION['lang'])){?>
        <div class="container my-3">
            <h1>Login</h1>
            <form action="controller.php?action=isLogged" method="POST">
                <div class="mb-3">
                    <input type="email" class="form-control" name="email" placeholder="email...">
                </div>
                <div class="mb-3">
                    <input type="password" class="form-control" name="password" placeholder="password...">
                </div>
                <div class="form-check text-start my-3">
                    <input class="form-check-input" type="checkbox" id="flexCheckDefault" name="check"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Remember me
                    </label>
                </div>
                <button type="submit" class="btn btn-primary">Login</button>
            </form>
        </div>
    <?php } ?>

<?php include_once 'footer.php'; ?>