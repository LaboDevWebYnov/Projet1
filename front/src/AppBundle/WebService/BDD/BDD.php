<?php
/**
 * Created by PhpStorm.
 * User: Pandaks
 * Date: 03/02/2016
 * Time: 12:11
 */

namespace AppBundle\WebService\BDD;


use AppBundle\WebService\Utils\Address;
use AppBundle\WebService\Utils\Game;
use AppBundle\WebService\Utils\PlayerAccount;
use AppBundle\WebService\Utils\User;

abstract class BDD
{
    public $webservice;

    public function __construct($webservice)
    {
        $this->webservice = $webservice;
    }

    public function createUser($userMongo){
        $addressArray = array();
        if($userMongo["address"]) {
            foreach ($userMongo["address"] as $address) {
                $addressArray[] = $this->createAddress($address);
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

    public function createAddress($addressMongo){
        return new Address($addressMongo["_id"],
            $addressMongo["postCode"],
            $addressMongo["city"],
            $addressMongo["country"],
            $addressMongo["line"]);
    }

    public function createGame($gameMongo){
        return new Game($gameMongo["_id"],
            $gameMongo["name"],
            $gameMongo["releaseDate"],
            $gameMongo["multiPlayer"],
            $gameMongo["description"],
            $gameMongo["editor"],
            $gameMongo["updated_at"],
            $gameMongo["created_at"],
            $gameMongo["active"]);
    }

    public function createPlayerAccount($gameMongo){
        $user = $this->createUser($gameMongo["user"]);
        $game = $this->createGame($gameMongo["game"]);
        return new PlayerAccount($user, $gameMongo["login"], $game, $gameMongo["active"], $gameMongo["created_at"], $gameMongo["updated_at"]);
    }
}