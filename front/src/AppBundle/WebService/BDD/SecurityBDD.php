<?php
/**
 * Created by PhpStorm.
 * User: Pandaks
 * Date: 08/01/2016
 * Time: 22:47
 */

namespace AppBundle\WebService\BDD;

use GuzzleHttp;

class SecurityBDD extends BDD
{
    public function authenticate($login, $password){
        $client = new GuzzleHttp\Client();
        $url = $this->webservice.'/users/auth';
        $bodyArray = array(
            "login" => $login,
            "password"  => $password
        );
        try {
            $res = $client->request('POST', $url, array('json' => $bodyArray));
            setcookie("token",$res->getHeader("token")[0],time()+3600);
        }
        catch(\GuzzleHttp\Exception\BadResponseException $e){
            return "invalid credentials";
        }
    }
}