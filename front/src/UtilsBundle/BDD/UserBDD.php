<?php
/**
 * Created by PhpStorm.
 * User: Pandaks
 * Date: 08/01/2016
 * Time: 22:47
 */

namespace UtilsBundle\BDD;

use GuzzleHttp;
use Symfony\Component\Validator\Constraints\DateTime;
use UtilsBundle\Utils\Address;
use UtilsBundle\Utils\User;

class UserBDD extends BDD
{
    public function getUsers(){
        $client = new GuzzleHttp\Client();
        $res = $client->request('GET', $this->webservice.'/users');
        $users=json_decode($res->getBody(),true);
        $usersArray=array();
        foreach($users as $user) {
            $usersArray[] = $this->createUser($user);
        }
        return $usersArray;

    }

    public function getUserById($id){
        $client = new GuzzleHttp\Client();
        $res = $client->request('GET', $this->webservice."/users/".$id.'/getUserById');
        $user=json_decode($res->getBody(),true);
        return $this->createUser($user);
    }

    public function getUserByName($name){
        $client = new GuzzleHttp\Client();
        $res = $client->request('GET', $this->webservice."/users/".$name.'/getUserByUsername');
        $user=json_decode($res->getBody(),true);
        return $this->createUser($user);
    }

    public function addUser($user){
        $client       = new GuzzleHttp\Client();
        $userArray    = (array) $user;
        //Remove the id key from the user object to respect the API add format
        unset($userArray["id"]);
        $userArray["email"]=rand(0,45854658)."@ynov.com";
        print_r(json_encode($userArray));
        $client->request('POST', $this->webservice.'/users/addUser',array("user"=>json_encode($userArray)));
    }

    public function createUser($userMongo){
        $addressArray = array();
        if($userMongo["address"]) {
            foreach ($userMongo["address"] as $address) {
                $addressArray[] = new Address($address["postCode"], $address["city"], $address["country"], $address["line"]);
            }
        }

        return new User($userMongo["_id"],
            $userMongo["firstname"],
            $userMongo["lastname"],
            $userMongo["username"],
            $userMongo["birthDate"],
            $userMongo["email"],
            $userMongo["password"],
            $userMongo["phoneNumber"],
            $userMongo["loginAttempts"],
            $userMongo["verified"],
            $userMongo["created_at"],
            $userMongo["updated_at"],
            $userMongo["interests"],
            $userMongo["friends"],
            $userMongo["active"],
            $userMongo["admin"],
            $addressArray);
    }
}