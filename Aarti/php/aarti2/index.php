<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta content="width=device-width, initial-scale=1.0" name="viewport">

  <title>Home - Append Bootstrap Temlate</title>
  <meta content="" name="description">
  <meta content="" name="keywords">

  <!-- Favicons -->
  <link href="assets/img/favicon.png" rel="icon">
  <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon">

  <!-- Fonts -->
  <link href="https://fonts.googleapis.com" rel="preconnect">
  <link href="https://fonts.gstatic.com" rel="preconnect" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet">
  <link href="assets/vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet">
  <link href="assets/vendor/glightbox/css/glightbox.min.css" rel="stylesheet">
  <link href="assets/vendor/swiper/swiper-bundle.min.css" rel="stylesheet">
  <link href="assets/vendor/aos/aos.css" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="assets/css/main.css" rel="stylesheet">

  <!-- =======================================================
  * Template Name: Append
  * Updated: Jan 09 2024 with Bootstrap v5.3.2
  * Template URL: https://bootstrapmade.com/append-bootstrap-website-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== -->
</head>

<body class="index-page" data-bs-spy="scroll" data-bs-target="#navmenu">

  <!-- ======= Header ======= -->
  <?php include_once("header.php"); ?>

  
  <main id="main">
  
    <!-- Hero Section - Home Page -->
    <?php include("hero.php"); ?>
    <!-- End Hero Section -->
    <?php
      // echo $a;

    ?>
    <!-- Clients Section - Home Page -->
    <?php include_once("client.php");?>
   <!-- End Clients Section -->

    <!-- About Section - Home Page -->
    <?php include("about.php");?>
    <!-- End About Section -->

    <!-- Stats Section - Home Page -->
    <?php include_once("stats.php")?>
    
    
    <!-- End Stats Section -->

    <!-- Services Section - Home Page -->
    <?php include_once("Services.php")?>
  
    <!-- End Services Section -->

    <!-- Features Section - Home Page -->
    <?php include_once("Features.php") ?>
   
   <!-- End Features Section -->

    <!-- Portfolio Section - Home Page -->
    <?php include_once("Portfolio.php") ?>
  
   <!-- End Portfolio Section -->

    <!-- Pricing Section - Home Page -->
    <?php   include_once("Pricing.php") ?>
   
    <!-- End Pricing Section -->

    <!-- Faq Section - Home Page -->
    <?php //include_once("faq.php")?>
    <!-- End Faq Section -->

    <!-- Team Section - Home Page -->
    <?php include_once("team.php")?>
    <!-- End Team Section -->

    <!-- Call-to-action Section - Home Page -->
    <?php include_once("call-to-action.php")?>
    <!-- End Call-to-action Section -->

    <!-- Testimonials Section - Home Page -->
    <?php include_once("testimonials.php")?>
    <!-- End Testimonials Section -->

    <!-- Recent-posts Section - Home Page -->
    <?php include_once("recent-posts.php")?>
   <!-- End Recent-posts Section -->

    <!-- Contact Section - Home Page -->
    <?php include_once("contact.php")?>
    <!-- End Contact Section -->

  </main>

  <!-- ======= Footer ======= -->
  <?php include_once("footer.php");?>
  <!-- End Footer -->

  <!-- Scroll Top Button -->
  <a href="#" id="scroll-top" class="scroll-top d-flex align-items-center justify-content-center"><i class="bi bi-arrow-up-short"></i></a>

  <!-- Preloader -->
  <div id="preloader">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>

  <!-- Vendor JS Files -->
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="assets/vendor/glightbox/js/glightbox.min.js"></script>
  <script src="assets/vendor/purecounter/purecounter_vanilla.js"></script>
  <script src="assets/vendor/isotope-layout/isotope.pkgd.min.js"></script>
  <script src="assets/vendor/swiper/swiper-bundle.min.js"></script>
  <script src="assets/vendor/aos/aos.js"></script>
  <script src="assets/vendor/php-email-form/validate.js"></script>

  <!-- Template Main JS File -->
  <script src="assets/js/main.js"></script>

</body>

</html>