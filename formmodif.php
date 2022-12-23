<?php

   /* echo "<pre>";
    var_dump($_GET);
    echo "<pre>";*/

    include("conexion.php");
    $conexion = conexion();
    $id = $_GET["id"];

   

    $sql = "SELECT * FROM lista_oradores WHERE id = $id";

    $query = mysqli_query($conexion, $sql);

    $fila = mysqli_fetch_assoc($query);
?>

   <section>
        <form action="modificar.php"  method="post">

            <input type="text" name="id" id="" value="<?php echo $fila["id"]?>" hidden>
                    
            <input type="text"  name="nombre" id=""   value="<?php echo $fila["Nombre"]?>">
            
            <input type="text"  name="apellido" id="" value="<?php echo $fila["Apellido"]?>">

            <input type="mail" name="mail"   id="" value="<?php echo $fila["Mail"]?>">
                
            <input type="text" name="tema"  id=""  value="<?php echo $fila["Tema"]?>">
                                    
            <button type="submit" id="" value="modificar">Modificar</button>

                    
        </form>

    </section>  