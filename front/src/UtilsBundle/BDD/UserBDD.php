<?php
/**
 * Created by PhpStorm.
 * User: Pandaks
 * Date: 08/01/2016
 * Time: 22:47
 */

namespace UtilsBundle;

use GuzzleHttp;

class UserBDD
{
    public static function getUsers(){
        $client = new GuzzleHttp\Client();
        $res = $client->request('GET', 'http://localhost:3000/api/users');
        $user=json_decode($res->getBody());
        return $user;
    }
}