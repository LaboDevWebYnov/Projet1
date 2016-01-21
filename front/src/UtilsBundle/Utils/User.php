<?php

namespace UtilsBundle\Utils;

class User
{
    public $id;
    public $firstname;
    public $lastname;
    public $username;
    public $birthDate;
    public $email;
    public $password;
    public $address;
    public $phoneNumber;
    public $admin;
    public $friends;
    public $created_at;
    public $updated_at;
    public $interests;
    public $active;

    public function __construct($id,
                         $firstname,
                         $lastname,
                         $username,
                         $birthDate,
                         $email,
                         $password,
                         $address,
                         $phoneNumber,
                         $admin,
                         $friends,
                         $created_at,
                         $updated_at,
                         $interests,
                         $active){
        $this->id=$id;
        $this->firstname=$firstname;
        $this->lastname=$lastname;
        $this->username=$username;
        $this->birthDate=$birthDate;
        $this->email=$email;
        $this->password=$password;
        $this->address=$address;
        $this->phoneNumber=$phoneNumber;
        $this->admin=$admin;
        $this->friends=$friends;
        $this->created_at=$created_at;
        $this->updated_at=$updated_at;
        $this->interests=$interests;
        $this->active=$active;
    }

    public function __toString(){
        return $this->firstname." ".$this->lastname;
    }

}