<?php
/**
 * Created by PhpStorm.
 * User: Pandaks
 * Date: 08/01/2016
 * Time: 22:47
 */

namespace AppBundle\WebService\BDD;

use GuzzleHttp;
use Symfony\Component\Validator\Constraints\DateTime;
use AppBundle\WebService\Utils\Address;
use AppBundle\WebService\Utils\User;

class AddressBDD extends BDD
{
    public function getAddresses(){
        $client = new GuzzleHttp\Client();
        $url = $this->webservice.'/addresses/getAddresses';
        $res = $client->request('GET', $url);
        $addresses=json_decode($res->getBody(),true);
        $addressesArray=array();
        foreach($addresses as $address) {
            $addressesArray[] = $this->createAddress($address);
        }
        return $addressesArray;

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

    public function createAddress($addressMongo){
        return new User($addressMongo["postcode"],
            $addressMongo["city"],
            $addressMongo["country"],
            $addressMongo["line"]);
    }
}