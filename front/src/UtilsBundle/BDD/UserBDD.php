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
        $url = $this->webservice.'/users';
        $res = $client->request('GET', $url);
        $users=json_decode($res->getBody(),true);
        $usersArray=array();
        foreach($users as $user) {
            $usersArray[] = $this->createUser($user);
        }
        return $usersArray;

    }

    public function getUserById($id){
        $client = new GuzzleHttp\Client();
        $url = $this->webservice."/users/".$id.'/getUserById';
        $res = $client->request('GET', $url);
        $user=json_decode($res->getBody(),true);
        return $this->createUser($user);
    }

    public function getUserByName($name){
        $client = new GuzzleHttp\Client();
        $url = $this->webservice."/users/".$name.'/getUserByUsername';
        $res = $client->request('GET', $url);
        $user=json_decode($res->getBody(),true);
        return $this->createUser($user);
    }

    public function addUser($user){
        $client       = new GuzzleHttp\Client();
        $userArray    = (array) $user;

        //Remove the id key from the user object to respect the API add format
        unset($userArray["id"]);
        $userArray["email"]=rand(0,45854658)."@ynov.com";

        $url = $this->webservice.'/users/addUser';
        //Do not need to json_encode the data, pass it as array
        $client->request('POST', $url,array('json' => $userArray));
    }

    public function updateUser($user){
        $client       = new GuzzleHttp\Client();
        $userId       = $user->id;
        $userArray    = (array) $user;

        //Remove the id key from the user object to respect the API add format
        unset($userArray["id"]);
        $url = $this->webservice.'/users/'.$userId.'/updateUser';

        //Do not need to json_encode the data
        $client->request('PUT',$url,array('json' => $userArray));

    }

    //TODO check in database a good oldPassword in order to test this function
    public function updatePassword($userId, $oldPassword, $newPassword, $newPasswordConfirmation){
        $client       = new GuzzleHttp\Client();
        $url = $this->webservice.'/users/'.$userId.'/updatePassword';
        $bodyArray = array(
            "oldPasssword" => $oldPassword,
            "newPassword"  => $newPassword,
            "newPasswordConfirmation" => $newPasswordConfirmation
        );
        //Do not need to json_encode the data
        $client->request('PUT',$url,array('json' => $bodyArray));

    }

    public function updateEmail($userId, $email){
        $client       = new GuzzleHttp\Client();
        $url = $this->webservice.'/users/'.$userId.'/updateEmail';
        $bodyArray = array(
            "email" => $email,
        );
        //Do not need to json_encode the data
        $client->request('PUT',$url,array('json' => $bodyArray));
    }

    public function deleteUser($userId){
        $client       = new GuzzleHttp\Client();
        $url = $this->webservice.'/users/'.$userId.'/deleteUser';
        $bodyArray = array();
        //Do not need to json_encode the data
        $client->request('PUT',$url,array('json' => $bodyArray));
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