<?php include_once 'header.php';?>

    <div class="container pt-5">
        <h1>Registrazione</h1>

        <form method="POST" action="controllerReg.php">
          <div class="mb-3">
            <input type="firstname" class="form-control" name="firstname" placeholder="firstname...">
          </div>
          <div class="mb-3">
            <input type="lastname" class="form-control" name="lastname" placeholder="lastname...">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" name="telefono" placeholder="telefono...">
          </div>
          <div class="mb-3">
            <input type="text" class="form-control" name="citta" placeholder="città...">
          </div>
          <div class="mb-3">
            <input type="email" class="form-control" name="email" placeholder="email...">
          </div>
          <div class="mb-3">
            <input type="password" class="form-control" name="password" placeholder="password...">
          </div>
          <button type="submit" class="btn btn-success">Submit</button>
        </form>
    </div>

 <?php include_once 'footer.php';?>