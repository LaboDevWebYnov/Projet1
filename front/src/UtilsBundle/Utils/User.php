<?php

namespace UtilsBundle;


class User
{
    public $firstname;
    public $lastname;
    public $username;
    public $birthDate;
    public $email;
    public $password;
    public $avatar;
    public $address;
    public $phoneNumber;
    public $admin;
    public $friends;
    public $created_at;
    public $updated_at;

    public function User($firstname,$lastname,$username,$birthDate,$email,$password,$avatar,$address,$phoneNumber,$admin,$friends,$created_at,$updated_at){
        $this->firstname=$firstname;
        $this->$lastname=$lastname;
        $this->$username=$username;
        $this->$birthDate=$birthDate;
        $this->$email=$email;
        $this->$password=$password;
        $this->$avatar=$avatar;
        $this->$address=$address;
        $this->$phoneNumber=$phoneNumber;
        $this->$admin=$admin;
        $this->$friends=$friends;
        $this->$created_at=$created_at;
        $this->$updated_at=$updated_at;
    }
}
