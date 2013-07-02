<?php
  // Bootstrap
  // Change chdir to the full path of your Drupal root
  //chdir('/');
  define('DRUPAL_ROOT', getcwd());
  require_once './includes/bootstrap.inc';
  drupal_bootstrap(DRUPAL_BOOTSTRAP_FULL);

  // Rebuild
  menu_rebuild();

  // clear cache
  drupal_flush_all_caches();

  echo "Rebuild finished";
?>