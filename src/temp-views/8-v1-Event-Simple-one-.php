<!DOCTYPE html>
<html lang="en">

<?php include('header.php'); ?>

<body>
    
<?php include('navbar.php'); ?>

<div class="container">
    <?php include('event-parts/carousel.php'); ?>

    <?php include('event-parts/event-top.php'); ?>

    <div class="row">
        <div class="col-xs-12">
            <div class="you-will-give-got segment">
                <h3>You Will Get</h3>
                <ul>
                    <li>
                        <div class="icon">
                            <span class="glyphicon glyphicon-cog glyphicon-lg"></span>
                        </div>
                        <div class="text">
                            <h4><span class="count">20</span> Karma Points</h4>
                            <p>Get Badges, Accolafes, and more by volunteering throuh the Sparks.Network</p>
                        </div>
                    </li>
                    <li>
                        <div class="icon">
                            <span class="glyphicon glyphicon-cog glyphicon-lg"></span>
                        </div>
                        <div class="text">
                            <h4>To help you community</h4>
                            <p>Serve your neightbors on the Avenue!</p>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="you-will-give-got segment">
                <h3>You Will Give</h3>
                <ul>
                    <li>
                        <div class="icon">
                            <span class="glyphicon glyphicon-cog glyphicon-lg"></span>
                        </div>
                        <div class="text">
                        <h4><span class="shiftcount">1</span> Shift</h4>
                        <p>Serve your neightbors on the Avenue!</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>   

    <?php //include('event-parts/event-requirements.php'); ?>

    <?php include('event-parts/event-organizer.php'); ?>

    <?php include('event-parts/event-social.php'); ?>

    <?php include('event-parts/event-contact.php'); ?>

</div><!-- /.container -->

<?php include('footer.php'); ?>
    
  
</body>
</html>