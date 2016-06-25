<?php

		require_once('conn.php');//数据库连接

		$type = "'".$_POST['type']."'";
		$sql = "SELECT * FROM newslist WHERE newstype = ".$type;
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