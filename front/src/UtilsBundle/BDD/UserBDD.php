<?php
/**
 * Created by PhpStorm.
 * User: Pandaks
 * Date: 08/01/2016
 * Time: 22:47
 */

namespace UtilsBundle\BDD;

use GuzzleHttp;
use UtilsBundle\Utils\User;

class UserBDD
{
    public static function getUsers(){
        $client = new GuzzleHttp\Client();
        $res = $client->request('GET', 'http://localhost:3100/api/users');
        $users=json_decode($res->getBody(),true);
        $usersArray=array();
        foreach($users as $user) {
            $usersArray[] = self::createUser($user);
        }
        return $usersArray;

    }

    public static function getUserByid($id){
        $client = new GuzzleHttp\Client();
        $res = $client->request('GET', 'http://localhost:3100/api/users/'.$id.'/getUserById');
        $user=json_decode($res->getBody(),true);
        return self::createUser($user);
    }

    public static function getUserByName($name){
        $client = new GuzzleHttp\Client();
        $res = $client->request('GET', 'http://localhost:3100/api/users/'.$name.'/getUserByUsername');
        $user=json_decode($res->getBody(),true);
        return self::createUser($user);
    }

    public static function addUser($user){
        $client = new GuzzleHttp\Client();
        $res = $client->request('POST', 'http://localhost:3100/api/users/addUser',array("user"=>json_encode($user)));
        $user=json_decode($res->getBody(),true);
        return self::createUser($user);
    }

    public static function createUser($userMongo){
        return new User($userMongo["_id"],
            $userMongo["firstname"],
            $userMongo["lastname"],
            $userMongo["username"],
            $userMongo["birthDate"],
            $userMongo["email"],
            $userMongo["password"],
            $userMongo["address"],
            $userMongo["phoneNumber"],
            $userMongo["admin"],
            $userMongo["friends"],
            $userMongo["created_at"],
            $userMongo["updated_at"],
            $userMongo["interests"],
            $userMongo["active"]);
    }
}