<?php

namespace AppBundle\WebService\Utils;

class User
{
    public $id;
    public $firstname;
    public $lastname;
    public $username;
    public $birthDate;
    public $email;
    public $password;
    public $phoneNumber;
    public $loginAttempts;
    public $verified;
    public $created_at;
    public $updated_at;
    public $interests;
    public $friends;
    public $active;
    public $admin;
    public $address;

    public function __construct($id,
                         $firstname,
                         $lastname,
                         $username,
                         $birthDate,
                         $email,
                         $password,
                         $phoneNumber,
                         $loginAttempts,
                         $verified,
                         $created_at,
                         $updated_at,
                         $interests,
                         $friends,
                         $active,
                         $admin,
                         $address)
    {
        $this->id            = $id;
        $this->firstname     = $firstname;
        $this->lastname      = $lastname;
        $this->username      = $username;
        $this->birthDate     = $birthDate;
        $this->email         = $email;
        $this->password      = $password;
        $this->phoneNumber   = $phoneNumber;
        $this->loginAttempts = $loginAttempts;
        $this->verified      = $verified;
        $this->created_at    = $created_at;
        $this->updated_at    = $updated_at;
        $this->interests     = $interests;
        $this->friends       = $friends;
        $this->active        = $active;
        $this->admin         = $admin;
        $this->address       = $address;
    }

    public function __toString(){
        return $this->id." : ".$this->username." : ".$this->firstname." ".$this->lastname;
    }

}