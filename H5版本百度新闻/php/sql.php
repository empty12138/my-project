
<?php
		require_once('conn.php');
		$newskind = $_POST['newskind'];	
		$newstitle = $_POST['newstitle'];	
		$newscontent = $_POST['newscontent'];	
		$newstime = $_POST['newstime'];	
		$sql ="INSERT INTO newslist VALUES(NULL ,'".$newskind."','".$newstitle."','".$newscontent."','".$newstime."')";
		$result = mysqli_query($conn,$sql);//添加

		if(!$result){
			echo "添加失败";
		}else{
			//返回添加的内容，供ajax调用
			echo "[\"" . $newskind   .   '",'   ."\"".$newstitle.'",'."\"".$newscontent.'","'.$newstime.'"]';
			
		}
	
?>