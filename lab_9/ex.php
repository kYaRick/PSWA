<?php
function nL()
{
  echo "<br>";
  echo "<br>";
}

function reversedNumber($number)
{
  echo "befor: " . $number;
  $char_arr = str_split(strval($number));
  echo "<br>after: ";
  for ($i = count($char_arr) - 1; $i > -1; --$i) {
    echo $char_arr[$i];
  }
}

function sortedText($text)
{
  echo "befor:<br>";
  echo $text . "<br>";

  $words = explode(" ", $text);
  natcasesort($words);

  echo "<br>after: <br>";
  foreach ($words as $word) {
    echo $word . " ";
  }
}

function zeros($numbers)
{
  print("before : ");    
  for ($i = 0; $i < count($numbers); ++$i) 
  {
    echo $numbers[$i] . " ";
    if ($numbers[$i] > 0) {
      $numbers[$i] = 0;
    }
  }

  echo "<br>";

  print("after : ");
  foreach ($numbers as $number) {
    echo $number . " ";
  }
}

function firstDigitCount($number)
{
  $char_arr = str_split(strval($number));
  $count = 1;
  for ($i = 1; $i < count($char_arr); $i++) {
    if ($char_arr[0] == $char_arr[$i]) {
      $count++;
    }
  }
  return $count;
}

#result;
print("<b>ex_1</b><br>");
print("hello World");
nL();

print("<b>ex_2</b><br>");
echo "current date is " . date("d/m/Y");
nL();

print("<b>ex_3</b><br>");
reversedNumber(1234567890);
nL();

print("<b>ex_4</b><br>");
$text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
sortedText($text);
nL();

print("<b>ex_5</b><br>");
$numbers = array(1, -1, 9, -2, -4);
zeros($numbers);
nL();

print("<b>ex_6</b><br>");
$number = 2234561234561111111;
$res = firstDigitCount($number);
echo $number; 
echo "<br>";
echo'count result: ' . $res;
