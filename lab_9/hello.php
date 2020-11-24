<?php
    function newLine() {
        echo "<br>";
    }

    function dblNewLine() {
        newLine();
        newLine();
    }

    function reversedNumber($number) {
        echo "Current num: " . $number;
        $char_arr = str_split(strval($number));
        echo "<br>Reversed: ";
        for($i = count($char_arr) - 1; $i > -1; --$i) {
            echo $char_arr[$i];
        }
    }

    function sortedText($text) {
        echo "Current text: <br>";
        echo $text . "<br>";

        $words = explode(" ", $text);
        natcasesort($words);

        echo "Sorted: <br>";
        foreach($words as $word) {
            echo $word . " ";
        }
    }

    function zeros($numbers) {
        for($i = 0; $i < count($numbers); ++$i) {
            echo $numbers[$i] . " ";
            if($numbers[$i] > 0)
            {
                $numbers[$i] = 0;
            }
        }

        echo "<br>";

        foreach($numbers as $number) {
            echo $number . " ";
        }
    }

    function firstDigitCount($number) {
        $char_arr = str_split(strval($number));
        $count = 1;
        for($i = 1; $i < count($char_arr); $i++) {
            if($char_arr[0] == $char_arr[$i]) {
                $count++;
            }
        }
        return $count;
    }

    print('Hello world');
    dblNewLine();

    echo "Current date is " . date("d/m/Y");
    dblNewLine();

    reversedNumber(1234567890);
    dblNewLine();

    $text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    sortedText($text);
    dblNewLine();

    $numbers = array(1, -1, 9, -2, -4);
    zeros($numbers);
    dblNewLine();

    $number = 1234561234561111111;
    $res = firstDigitCount($number);
    echo $number . '. Count ' . $res
