
<?php

	require_once('conn.php');

	$sql = "SELECT * FROM newslist"; 
	$result = mysqli_query($conn,$sql);	
	echo "[";
		while ($row = mysqli_fetch_array($result)) {
			$newstype = '"'.$row['newstype'].'"';
			$newstitle = '"'.$row['newstitle'].'"';
			$newscontent = '"'.$row['newscontent'].'"';
			$newstime = '"'.$row['newstime'].'"';		
			echo'{newstype:'.$newstype.",newstitle:".$newstitle.",newscontent:".$newscontent.',newstime:'.$newstime.'},';			
		}
	echo ']';
?>		