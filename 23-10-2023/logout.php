<?php
session_start();
include 'connectdb.php';
if (isset($_SESSION['username']) && ($_SESSION['username']!=null)) {
    unset($_SESSION['username']);
    header('location: login.php');
}
