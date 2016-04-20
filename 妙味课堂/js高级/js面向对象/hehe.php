<? php
	/**
	* 
	*/
	class Person
	{
		
		function __construct($name,$sex)
		{
			this->name = $name;
			this->sex = $sex;
			# code...
		}

		function showName()
		{
			echo this->name;
		}
	}

	$s1 = new Person('dzq','renyao');
	$s1->showName();
?>