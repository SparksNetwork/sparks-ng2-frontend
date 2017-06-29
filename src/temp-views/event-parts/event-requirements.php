<div class="row">
   <div class="col-xs-12">
      <div id="event-requirements" class="row segment">
         <div class="col-xs-6">
            <div class="icon">
               <span class="glyphicon glyphicon-cog glyphicon-lg"></span>

               <?php if ( basename($_SERVER["SCRIPT_FILENAME"], '.php') == '8-v3-Event-Normal-Pending' ){ ?>
                  <div class="req-disabled">pending</div>
               <?php } ?>

               <?php if ( basename($_SERVER["SCRIPT_FILENAME"], '.php') == '8-v4-Event-Normal-Active' ){ ?>
                  <div class="req-disabled">active</div>
               <?php } ?>

            </div>
            <div class="text">
               <h4>Volunteer</h4>
               <p>30 Days</p>
               <p><span>100% involvement</span></p>
            </div>
         </div>
         <div class="col-xs-6">
            <div class="icon">
               <span class="glyphicon glyphicon-cog glyphicon-lg"></span>
            </div>
            <div class="text">
               <h4>Crew</h4>
               <p>60 Days</p>
               <p><span>100% involvement</span></p>
            </div>
         </div>
         
         <!-- 8-v2-Event-Normal-Multi-Day, 8-v3-Event-Normal-Pending, 8-v4-Event-Normal-Active Has more elements here START -->
         <?php 
            $pg_with_more_items = array( '8-v2-Event-Normal-Multi-Day', '8-v3-Event-Normal-Pending', '8-v4-Event-Normal-Active' );
            if ( in_array( basename($_SERVER["SCRIPT_FILENAME"], '.php'), $pg_with_more_items ) ){ ?>
         
         <div class="col-xs-6 <?php if ( basename($_SERVER["SCRIPT_FILENAME"], '.php') == '8-v3-Event-Normal-Pending' ){ echo 'req-disabled'; } ?>">
            <div class="icon">
               <span class="glyphicon glyphicon-cog glyphicon-lg"></span>
            </div>
            <div class="text">
               <h4>Pre-Event Builders</h4>
               <p>$364 in value</p>
               <p><span>100% involvement</span></p>
            </div>
         </div>
         <div class="col-xs-6">
            <div class="icon">
               <span class="glyphicon glyphicon-cog glyphicon-lg"></span>
            </div>
            <div class="text">
               <h4>Crew</h4>
               <p>60 Days</p>
               <p><span>100% involvement</span></p>
            </div>
         </div>

         <div class="col-xs-6">
            <div class="icon">
               <span class="glyphicon glyphicon-cog glyphicon-lg"></span>
            </div>
            <div class="text">
               <h4>Teardown $59</h4>
               <p>$444 in value</p>
               <p><span>87% discount</span></p>
            </div>
         </div>
         <!-- Has more elements here END -->
         <?php } ?>

      </div>
   </div>
</div>