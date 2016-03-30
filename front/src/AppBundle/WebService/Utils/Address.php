<?php

namespace AppBundle\WebService\Utils;

class Address
{
    public $id;
    public $postCode;
    public $city;
    public $country;
    public $line;

    public function __construct($id,
                                $postCode,
                                $city,
                                $country,
                                $line)
    {
        $this->id       = $id;
        $this->postCode = $postCode;
        $this->city     = $city;
        $this->country  = $country;
        $this->line     = $line;
    }

    public function __toString(){
        return $this->id." : ".$this->postCode." : ".$this->city." ".$this->country." ".$this->line;
    }

}