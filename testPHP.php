<?php include 'header.html'; ?>
    <div class="row" ng-init="tab.setTab(XXXXX)">
	    <?php include 'navigation.html';?>
	</div>
	<div class="col-centre row ">
        <div class="col-lg-11 col-md-11 col-sm-11">
            <div class="row-fluid col-lg-offset-1 col-md-offset-1 col-sm-offset-1">
                <?php
                class Car {
                    function Car() {
                        $this->model = "VW";
                    }
                }

                // create an object
                $herbie = new Car();

                // show object properties
                echo $herbie->model;
                ?>

		</div>
	</div>
	</div>
<?php include 'footer.html'; ?>
